import { geoToLocal, localToGeo, STUDY_BOUNDS_GEO } from './Projection.js';

/**
 * HighWater 3D — Road Network Analysis & Flood Impact Module
 * 
 * Implements a reliable road-network representation and flood-exposure classification
 * layer for the HighWater 3D application (Dernau, Germany).
 * 
 * Key capabilities:
 * 1. Geometry Validation: Validates GeoJSON LineString / MultiLineString structures,
 *    coordinates, bounds, and lengths before building topology.
 * 2. Topological Graph Construction: Connects roads only at valid endpoints and genuine
 *    physical intersections using a configurable snapping tolerance.
 * 3. Crossing Junction Safety: Prevents false 2D line crossings (overpasses/underpasses)
 *    from creating unverified routing connectivity; preserves topological uncertainty.
 * 4. Disconnected Component Analysis: Robustly tracks fragmented components and source breaks.
 * 5. Separation of Topology & Scenario: Graph topology is constructed once; flood scenario
 *    updates evaluate ground-elevation samples without costly graph rebuilds.
 * 6. Continuous Elevation Sampling: Samples ground elevations along each road segment at
 *    regular spacing (default 5.0m) against the Rhineland-Palatinate DGM1 bare-earth LiDAR DEM.
 * 7. 4-State Classification: Centralized, configurable classification into Unaffected, Exposed,
 *    Impassable, and Unknown, with documented human-readable reasons.
 * 
 * DISCLAIMER & CONCEPTUAL NOTICE:
 * These calculations are conceptual exposure estimates based on static DEM elevations,
 * not hydrodynamic predictions of water velocity, momentum, or real-world road safety.
 */

/**
 * Centralized Road Flood-Impact Statuses
 */
export const ROAD_STATUS = Object.freeze({
  UNAFFECTED: 'unaffected',
  EXPOSED: 'exposed',
  IMPASSABLE: 'impassable',
  UNKNOWN: 'unknown',
});

/**
 * Display Color Palette for Road Classification
 * NOTE: Kept strictly distinct from future Purple shelter routes and Blue hospital routes!
 */
export const ROAD_STATUS_COLORS = Object.freeze({
  [ROAD_STATUS.UNAFFECTED]: { r: 0.06, g: 0.73, b: 0.51, hex: '#10b981', label: 'Unaffected (Dry)' },
  [ROAD_STATUS.EXPOSED]:    { r: 0.96, g: 0.62, b: 0.04, hex: '#f59e0b', label: 'Exposed (< Threshold)' },
  [ROAD_STATUS.IMPASSABLE]: { r: 0.94, g: 0.27, b: 0.27, hex: '#ef4444', label: 'Impassable (>= Threshold)' },
  [ROAD_STATUS.UNKNOWN]:    { r: 0.39, g: 0.45, b: 0.55, hex: '#64748b', label: 'Unknown (No Data)' },
});

/**
 * Centralized, Documented Road Analysis Configuration
 */
export const DEFAULT_ROAD_CONFIG = Object.freeze({
  // Sampling spacing along segment polylines in meters.
  // The DGM1 downsampled grid step is ~9.41m; 5.0m ensures dense multi-sample coverage.
  sampleSpacingMeters: 5.0,

  // Snapping tolerance in meters for matching endpoints at physical junctions.
  snappingToleranceMeters: 1.0,

  // Conservative water depth threshold in meters for impassability classification.
  // 0.15m (~15cm / 6 inches) is a standard conservative emergency-access threshold.
  impassableDepthThreshold: 0.15,

  // Minimum positive water depth in meters to register exposure above zero / measurement noise.
  exposedDepthThreshold: 0.001,

  // Minimum fraction of valid elevation samples required to avoid 'unknown' status.
  minValidSampleRatio: 0.5,

  // Visual elevation offset (meters) to prevent z-fighting with the 3D terrain surface.
  // Kept strictly separated from ground elevation and water depth math.
  elevationOffsetVisual: 0.55,
});

/**
 * Spatial hash grid helper for snapping 2D points (x, z) within metric tolerance.
 */
class SpatialPointIndex {
  constructor(cellSize = 10.0) {
    this.cellSize = cellSize;
    this.grid = new Map();
  }

  _key(x, z) {
    const cx = Math.floor(x / this.cellSize);
    const cz = Math.floor(z / this.cellSize);
    return `${cx}:${cz}`;
  }

  insert(point) {
    const key = this._key(point.x, point.z);
    if (!this.grid.has(key)) {
      this.grid.set(key, []);
    }
    this.grid.get(key).push(point);
  }

  findNearest(x, z, maxDist) {
    const cx = Math.floor(x / this.cellSize);
    const cz = Math.floor(z / this.cellSize);
    let bestDist = maxDist;
    let bestPoint = null;

    for (let dx = -1; dx <= 1; dx++) {
      for (let dz = -1; dz <= 1; dz++) {
        const key = `${cx + dx}:${cz + dz}`;
        const cellPoints = this.grid.get(key);
        if (!cellPoints) continue;
        for (const pt of cellPoints) {
          const d = Math.hypot(pt.x - x, pt.z - z);
          if (d <= bestDist) {
            bestDist = d;
            bestPoint = pt;
          }
        }
      }
    }

    return bestPoint;
  }
}

/**
 * Robust Road Network Analysis Class
 */
export class RoadNetwork {
  /**
   * @param {Object} terrainManager - TerrainManager with getElevationAt(x, z)
   * @param {Object} [options] - Configuration overrides
   */
  constructor(terrainManager, options = {}) {
    this.terrainManager = terrainManager;
    this.config = { ...DEFAULT_ROAD_CONFIG, ...options };

    // Topological Graph Components
    this.nodes = new Map(); // nodeId -> Node
    this.edges = new Map(); // edgeId -> Edge
    this.features = new Map(); // featureId -> RoadFeature
    this.components = []; // Array of { id, nodeIds: Set, edgeIds: Set, featureIds: Set, lengthMeters }

    // Validation & Anomaly Logs
    this.invalidFeatures = [];
    this.unresolvedCrossings = [];

    // Cached Summary
    this.summary = {
      totalFeatures: 0,
      validFeatures: 0,
      invalidFeatures: 0,
      totalEdges: 0,
      totalNodes: 0,
      totalLengthKm: 0,
      connectedComponents: 0,
      unresolvedCrossings: 0,
      // Scenario-dependent impact breakdown
      unaffected: 0,
      exposed: 0,
      impassable: 0,
      unknown: 0,
      // Legacy aliases for backward compatibility
      passable: 0,
      waterlogged: 0,
      submerged: 0,
      exposedLengthKm: 0,
      impassableLengthKm: 0,
    };
  }

  /**
   * Validate a single GeoJSON feature.
   * @param {Object} feat
   * @param {number} index
   * @returns {{ isValid: boolean, error?: string, lineStrings: Array<Array<[number, number]>> }}
   */
  validateFeature(feat, index) {
    if (!feat || typeof feat !== 'object') {
      return { isValid: false, error: 'Feature is not a valid object', lineStrings: [] };
    }

    const id = feat.properties?.id || `road-${index}`;
    const geom = feat.geometry;

    if (!geom || !geom.type || !geom.coordinates) {
      return { isValid: false, error: `Road ${id} missing geometry or coordinates`, lineStrings: [] };
    }

    let lineStrings = [];
    if (geom.type === 'LineString') {
      lineStrings.push(geom.coordinates);
    } else if (geom.type === 'MultiLineString') {
      lineStrings = geom.coordinates;
    } else {
      return { isValid: false, error: `Road ${id} unsupported geometry type: ${geom.type}`, lineStrings: [] };
    }

    const validLines = [];
    for (let lIdx = 0; lIdx < lineStrings.length; lIdx++) {
      const line = lineStrings[lIdx];
      if (!Array.isArray(line) || line.length < 2) {
        continue;
      }

      let lineValid = true;
      for (const coord of line) {
        if (!Array.isArray(coord) || coord.length < 2) {
          lineValid = false;
          break;
        }
        const [lon, lat] = coord;
        if (typeof lon !== 'number' || typeof lat !== 'number' || Number.isNaN(lon) || Number.isNaN(lat)) {
          lineValid = false;
          break;
        }
        // Basic sanity bounding check for Western Germany / Ahr Valley region
        if (lon < 5.0 || lon > 15.0 || lat < 45.0 || lat > 55.0) {
          lineValid = false;
          break;
        }
      }

      if (lineValid) {
        validLines.push(line);
      }
    }

    if (validLines.length === 0) {
      return { isValid: false, error: `Road ${id} has no valid line coordinates`, lineStrings: [] };
    }

    return { isValid: true, lineStrings: validLines };
  }

  /**
   * Ingest GeoJSON and construct the static topological road graph.
   * @param {Object} geojson - GeoJSON FeatureCollection
   */
  buildFromGeoJSON(geojson) {
    this.nodes.clear();
    this.edges.clear();
    this.features.clear();
    this.components = [];
    this.invalidFeatures = [];
    this.unresolvedCrossings = [];

    const rawFeatures = geojson?.features || [];
    const pointIndex = new SpatialPointIndex(20.0);
    const snapTol = this.config.snappingToleranceMeters;

    let nodeAutoId = 0;
    const getOrCreateNode = (x, z, geoCoord) => {
      const existing = pointIndex.findNearest(x, z, snapTol);
      if (existing) {
        return existing.node;
      }
      const gElev = this.terrainManager?.getElevationAt(x, z) ?? null;
      const node = {
        id: `node_${nodeAutoId++}`,
        x,
        z,
        lon: geoCoord[0],
        lat: geoCoord[1],
        elevation: gElev,
        edgeIds: new Set(),
      };
      this.nodes.set(node.id, node);
      pointIndex.insert({ x, z, node });
      return node;
    };

    let totalLengthM = 0;

    rawFeatures.forEach((feat, index) => {
      const validation = this.validateFeature(feat, index);
      const featureId = feat.properties?.id || `road-${index}`;
      const isHistoricalFlooded = feat.properties?.flooded === true;

      if (!validation.isValid) {
        this.invalidFeatures.push({
          id: featureId,
          error: validation.error,
          feature: feat,
        });
        return;
      }

      const featureEdges = [];
      let featLengthM = 0;

      validation.lineStrings.forEach((line, lineIdx) => {
        const edgeId = validation.lineStrings.length > 1 ? `${featureId}#${lineIdx}` : featureId;

        // Convert coordinates to local metric 2D and sample ground elevation
        const localVertices = line.map(([lon, lat]) => geoToLocal(lon, lat));
        const startNode = getOrCreateNode(localVertices[0].x, localVertices[0].z, line[0]);
        const endNode = getOrCreateNode(localVertices[localVertices.length - 1].x, localVertices[localVertices.length - 1].z, line[line.length - 1]);

        startNode.edgeIds.add(edgeId);
        endNode.edgeIds.add(edgeId);

        // Dense elevation sampling along line segments
        const samples = [];
        let edgeLengthM = 0;
        let minGroundElev = Infinity;
        let maxGroundElev = -Infinity;

        for (let i = 0; i < localVertices.length - 1; i++) {
          const pA = localVertices[i];
          const pB = localVertices[i + 1];
          const dx = pB.x - pA.x;
          const dz = pB.z - pA.z;
          const segLen = Math.hypot(dx, dz);

          const stepCount = Math.max(1, Math.ceil(segLen / this.config.sampleSpacingMeters));

          for (let s = (i === 0 ? 0 : 1); s <= stepCount; s++) {
            const t = s / stepCount;
            const sx = pA.x + t * dx;
            const sz = pA.z + t * dz;

            // Sample DEM ground elevation
            const gElev = this.terrainManager?.getElevationAt(sx, sz) ?? null;
            const isNoData = gElev === null || Number.isNaN(gElev) || gElev <= 0 || gElev === -9999;

            if (!isNoData) {
              if (gElev < minGroundElev) minGroundElev = gElev;
              if (gElev > maxGroundElev) maxGroundElev = gElev;
            }

            samples.push({
              x: sx,
              z: sz,
              groundElevation: isNoData ? null : gElev,
              isNoData,
              cumDistMeters: edgeLengthM + t * segLen,
            });
          }

          edgeLengthM += segLen;
        }

        featLengthM += edgeLengthM;

        const edge = {
          id: edgeId,
          featureId,
          lineIndex: lineIdx,
          fromNodeId: startNode.id,
          toNodeId: endNode.id,
          lengthMeters: Math.round(edgeLengthM * 10) / 10,
          samples,
          minGroundElev: minGroundElev === Infinity ? null : Math.round(minGroundElev * 100) / 100,
          maxGroundElev: maxGroundElev === -Infinity ? null : Math.round(maxGroundElev * 100) / 100,
          vertices: localVertices,
          geoCoordinates: line,
          componentId: null,
          // Scenario fields (populated in evaluateScenario)
          status: ROAD_STATUS.UNAFFECTED,
          statusReason: 'Unassessed',
          maxWaterDepth: 0,
          exposedLengthMeters: 0,
          exposedRatio: 0,
          sampleCount: samples.length,
          unknownCount: 0,
        };

        this.edges.set(edgeId, edge);
        featureEdges.push(edge);
      });

      totalLengthM += featLengthM;

      // Register consolidated feature
      const roadFeature = {
        id: featureId,
        kind: 'road',
        flooded: isHistoricalFlooded, // SpaceNet 8 historical status
        lengthMeters: Math.round(featLengthM * 10) / 10,
        edges: featureEdges,
        edgeIds: featureEdges.map((e) => e.id),
        minGroundElev: featureEdges.reduce((m, e) => (e.minGroundElev !== null && e.minGroundElev < m ? e.minGroundElev : m), Infinity),
        maxGroundElev: featureEdges.reduce((m, e) => (e.maxGroundElev !== null && e.maxGroundElev > m ? e.maxGroundElev : m), -Infinity),
        componentId: null,
        componentSize: 0,
        // Dynamic scenario fields
        status: ROAD_STATUS.UNAFFECTED,
        statusReason: 'Unassessed',
        maxWaterDepth: 0,
        exposedLengthMeters: 0,
        exposedRatio: 0,
        passabilityStatus: 'passable',
      };

      if (roadFeature.minGroundElev === Infinity) roadFeature.minGroundElev = null;
      if (roadFeature.maxGroundElev === -Infinity) roadFeature.maxGroundElev = null;

      this.features.set(featureId, roadFeature);
    });

    // Detect genuine T-junctions vs unverified 2D crossings
    this._connectTJunctions(snapTol);
    this._detectUnresolvedCrossings(snapTol);

    // Compute Disconnected Components across the road graph
    this._computeConnectedComponents();

    this.summary.totalFeatures = rawFeatures.length;
    this.summary.validFeatures = this.features.size;
    this.summary.invalidFeatures = this.invalidFeatures.length;
    this.summary.totalEdges = this.edges.size;
    this.summary.totalNodes = this.nodes.size;
    this.summary.totalLengthKm = Math.round((totalLengthM / 1000) * 100) / 100;
    this.summary.connectedComponents = this.components.length;
    this.summary.unresolvedCrossings = this.unresolvedCrossings.length;

    console.log(`[RoadNetwork] Graph topology built: ${this.features.size} features, ${this.edges.size} edges, ${this.nodes.size} nodes, ${this.components.length} disconnected components.`);
    if (this.unresolvedCrossings.length > 0) {
      console.log(`[RoadNetwork] Preserved ${this.unresolvedCrossings.length} unresolved 2D line crossings without fabricating unverified junctions.`);
    }

    return this.summary;
  }

  /**
   * Connect endpoints to intermediate vertices of other roads when they snap within tolerance (T-junctions).
   * @private
   */
  _connectTJunctions(snapTol) {
    // Collect all intermediate vertices
    const intermediatePoints = [];
    for (const edge of this.edges.values()) {
      for (let i = 1; i < edge.vertices.length - 1; i++) {
        intermediatePoints.push({
          edgeId: edge.id,
          ptIndex: i,
          vertex: edge.vertices[i],
          geo: edge.geoCoordinates[i],
        });
      }
    }

    // Check each node against intermediate vertices of other edges
    for (const node of this.nodes.values()) {
      for (const ip of intermediatePoints) {
        if (node.edgeIds.has(ip.edgeId)) continue;
        const d = Math.hypot(node.x - ip.vertex.x, node.z - ip.vertex.z);
        if (d <= snapTol) {
          // Valid physical T-junction: attach node to that edge
          node.edgeIds.add(ip.edgeId);
        }
      }
    }
  }

  /**
   * Detect 2D line crossing intersections that do not share an endpoint/junction node.
   * Preserves uncertainty instead of fabricating false connectivity.
   * @private
   */
  _detectUnresolvedCrossings(snapTol) {
    const allSegments = [];
    for (const edge of this.edges.values()) {
      for (let i = 0; i < edge.vertices.length - 1; i++) {
        allSegments.push({
          edgeId: edge.id,
          featureId: edge.featureId,
          p1: edge.vertices[i],
          p2: edge.vertices[i + 1],
        });
      }
    }

    const ccw = (a, b, c) => (c.z - a.z) * (b.x - a.x) > (b.z - a.z) * (c.x - a.x);
    const lineIntersects = (p1, p2, p3, p4) => ccw(p1, p3, p4) !== ccw(p2, p3, p4) && ccw(p1, p2, p3) !== ccw(p1, p2, p4);

    for (let i = 0; i < allSegments.length; i++) {
      for (let j = i + 1; j < allSegments.length; j++) {
        const s1 = allSegments[i];
        const s2 = allSegments[j];
        if (s1.edgeId === s2.edgeId || s1.featureId === s2.featureId) continue;

        // Quick AABB test
        if (
          Math.max(s1.p1.x, s1.p2.x) < Math.min(s2.p1.x, s2.p2.x) ||
          Math.min(s1.p1.x, s1.p2.x) > Math.max(s2.p1.x, s2.p2.x) ||
          Math.max(s1.p1.z, s1.p2.z) < Math.min(s2.p1.z, s2.p2.z) ||
          Math.min(s1.p1.z, s1.p2.z) > Math.max(s2.p1.z, s2.p2.z)
        ) {
          continue;
        }

        // Check if endpoints meet within snapping tolerance
        const d13 = Math.hypot(s1.p1.x - s2.p1.x, s1.p1.z - s2.p1.z);
        const d14 = Math.hypot(s1.p1.x - s2.p2.x, s1.p1.z - s2.p2.z);
        const d23 = Math.hypot(s1.p2.x - s2.p1.x, s1.p2.z - s2.p1.z);
        const d24 = Math.hypot(s1.p2.x - s2.p2.x, s1.p2.z - s2.p2.z);
        if (d13 <= snapTol || d14 <= snapTol || d23 <= snapTol || d24 <= snapTol) continue;

        if (lineIntersects(s1.p1, s1.p2, s2.p1, s2.p2)) {
          this.unresolvedCrossings.push({
            edgeA: s1.edgeId,
            edgeB: s2.edgeId,
            featureA: s1.featureId,
            featureB: s2.featureId,
            reason: 'Lines cross in 2D without common junction node (potential grade separation or digitizing artifact)',
          });
        }
      }
    }
  }

  /**
   * Traverse graph nodes and partition into connected components via BFS.
   * @private
   */
  _computeConnectedComponents() {
    // Build node adjacency list
    const nodeNeighbors = new Map();
    for (const node of this.nodes.values()) {
      nodeNeighbors.set(node.id, new Set());
    }

    for (const edge of this.edges.values()) {
      if (nodeNeighbors.has(edge.fromNodeId) && nodeNeighbors.has(edge.toNodeId)) {
        nodeNeighbors.get(edge.fromNodeId).add(edge.toNodeId);
        nodeNeighbors.get(edge.toNodeId).add(edge.fromNodeId);
      }
    }

    const visitedNodes = new Set();
    this.components = [];

    for (const node of this.nodes.values()) {
      if (visitedNodes.has(node.id)) continue;

      const compId = this.components.length + 1;
      const compNodes = new Set();
      const compEdges = new Set();
      const compFeatures = new Set();
      let compLengthM = 0;

      const queue = [node.id];
      visitedNodes.add(node.id);

      while (queue.length > 0) {
        const currId = queue.shift();
        compNodes.add(currId);
        const currNode = this.nodes.get(currId);
        currNode.componentId = compId;

        for (const edgeId of currNode.edgeIds) {
          if (!compEdges.has(edgeId)) {
            compEdges.add(edgeId);
            const edge = this.edges.get(edgeId);
            if (edge) {
              edge.componentId = compId;
              compFeatures.add(edge.featureId);
              compLengthM += edge.lengthMeters;
            }
          }
        }

        const neighbors = nodeNeighbors.get(currId) || [];
        for (const nbrId of neighbors) {
          if (!visitedNodes.has(nbrId)) {
            visitedNodes.add(nbrId);
            queue.push(nbrId);
          }
        }
      }

      for (const featId of compFeatures) {
        const feat = this.features.get(featId);
        if (feat) {
          feat.componentId = compId;
          feat.componentSize = compFeatures.size;
        }
      }

      this.components.push({
        id: compId,
        nodeIds: compNodes,
        edgeIds: compEdges,
        featureIds: compFeatures,
        size: compFeatures.size,
        lengthMeters: Math.round(compLengthM * 10) / 10,
      });
    }

    // Sort components by size descending
    this.components.sort((a, b) => b.size - a.size);
  }

  /**
   * Re-evaluate road flood exposure and classifications against water elevation model.
   * This preserves static graph topology and executes in sub-millisecond time.
   * 
   * @param {function(number, number): number|number} getWaterElevationAt - Function returning water surface elevation at local (x, z)
   * @param {Object} [configOverrides] - Centralized threshold overrides
   * @returns {Object} Comprehensive classification summary
   */
  evaluateScenario(getWaterElevationAt, configOverrides = {}) {
    const config = { ...this.config, ...configOverrides };
    const queryWater = typeof getWaterElevationAt === 'function'
      ? getWaterElevationAt
      : () => (typeof getWaterElevationAt === 'number' ? getWaterElevationAt : 124.0);

    let countUnaffected = 0;
    let countExposed = 0;
    let countImpassable = 0;
    let countUnknown = 0;

    let exposedLengthM = 0;
    let impassableLengthM = 0;

    // Evaluate each road feature
    for (const feat of this.features.values()) {
      let featMaxDepth = 0;
      let featValidSamples = 0;
      let featUnknownSamples = 0;
      let featExposedSamples = 0;

      for (const edge of feat.edges) {
        let edgeMaxDepth = 0;
        let edgeValidSamples = 0;
        let edgeUnknownSamples = 0;
        let edgeExposedSamples = 0;

        for (const sample of edge.samples) {
          if (sample.isNoData || sample.groundElevation === null || typeof sample.groundElevation !== 'number' || Number.isNaN(sample.groundElevation)) {
            edgeUnknownSamples++;
            continue;
          }

          const waterElev = queryWater(sample.x, sample.z);
          if (waterElev === null || typeof waterElev !== 'number' || Number.isNaN(waterElev)) {
            edgeUnknownSamples++;
            continue;
          }

          // Pure ground depth: water elevation minus bare-earth terrain elevation
          const depth = Math.max(0, waterElev - sample.groundElevation);

          if (depth > edgeMaxDepth) edgeMaxDepth = depth;
          if (depth >= config.exposedDepthThreshold) {
            edgeExposedSamples++;
          }
          edgeValidSamples++;
        }

        edge.maxWaterDepth = Math.round(edgeMaxDepth * 100) / 100;
        edge.sampleCount = edgeValidSamples;
        edge.unknownCount = edgeUnknownSamples;
        edge.exposedRatio = edgeValidSamples > 0 ? edgeExposedSamples / edgeValidSamples : 0;
        edge.exposedLengthMeters = Math.round(edge.exposedRatio * edge.lengthMeters * 10) / 10;

        // Classify edge
        if (edgeValidSamples === 0 || (edgeValidSamples / (edgeValidSamples + edgeUnknownSamples)) < config.minValidSampleRatio) {
          edge.status = ROAD_STATUS.UNKNOWN;
          edge.statusReason = 'Insufficient or unavailable terrain/water elevation data across road geometry';
        } else if (edgeMaxDepth > config.impassableDepthThreshold) {
          edge.status = ROAD_STATUS.IMPASSABLE;
          edge.statusReason = `Maximum water depth (${edgeMaxDepth.toFixed(2)}m) exceeds impassability threshold (${config.impassableDepthThreshold.toFixed(2)}m)`;
        } else if (edgeMaxDepth >= config.exposedDepthThreshold) {
          edge.status = ROAD_STATUS.EXPOSED;
          edge.statusReason = `Water depth (${edgeMaxDepth.toFixed(2)}m) detected, below impassability threshold (${config.impassableDepthThreshold.toFixed(2)}m)`;
        } else {
          edge.status = ROAD_STATUS.UNAFFECTED;
          edge.statusReason = 'No positive water depth detected along road geometry (dry)';
        }

        if (edgeMaxDepth > featMaxDepth) featMaxDepth = edgeMaxDepth;
        featValidSamples += edgeValidSamples;
        featUnknownSamples += edgeUnknownSamples;
        featExposedSamples += edgeExposedSamples;
      }

      feat.maxWaterDepth = Math.round(featMaxDepth * 100) / 100;
      feat.sampleCount = featValidSamples;
      feat.unknownSampleCount = featUnknownSamples;
      feat.exposedRatio = featValidSamples > 0 ? featExposedSamples / featValidSamples : 0;
      feat.exposedLengthMeters = Math.round(feat.exposedRatio * feat.lengthMeters * 10) / 10;

      // Classify aggregated feature
      if (featValidSamples === 0 || (featValidSamples / (featValidSamples + featUnknownSamples)) < config.minValidSampleRatio) {
        feat.status = ROAD_STATUS.UNKNOWN;
        feat.statusReason = 'Insufficient or unavailable terrain elevation data across road geometry';
        countUnknown++;
      } else if (featMaxDepth > config.impassableDepthThreshold) {
        feat.status = ROAD_STATUS.IMPASSABLE;
        feat.statusReason = `Maximum water depth (${featMaxDepth.toFixed(2)}m) exceeds impassability threshold (${config.impassableDepthThreshold.toFixed(2)}m)`;
        countImpassable++;
        impassableLengthM += feat.lengthMeters;
      } else if (featMaxDepth >= config.exposedDepthThreshold) {
        feat.status = ROAD_STATUS.EXPOSED;
        feat.statusReason = `Water depth (${featMaxDepth.toFixed(2)}m) detected, below impassability threshold (${config.impassableDepthThreshold.toFixed(2)}m)`;
        countExposed++;
        exposedLengthM += feat.exposedLengthMeters;
      } else {
        feat.status = ROAD_STATUS.UNAFFECTED;
        feat.statusReason = 'No positive water depth detected along road geometry (dry)';
        countUnaffected++;
      }

      // Legacy passability status for backward compatibility
      feat.passabilityStatus = feat.status === ROAD_STATUS.IMPASSABLE
        ? 'submerged'
        : feat.status === ROAD_STATUS.EXPOSED
        ? 'waterlogged'
        : 'passable';
    }

    this.summary.unaffected = countUnaffected;
    this.summary.exposed = countExposed;
    this.summary.impassable = countImpassable;
    this.summary.unknown = countUnknown;
    this.summary.exposedLengthKm = Math.round((exposedLengthM / 1000) * 100) / 100;
    this.summary.impassableLengthKm = Math.round((impassableLengthM / 1000) * 100) / 100;

    // Legacy breakdown aliases
    this.summary.passable = countUnaffected;
    this.summary.waterlogged = countExposed;
    this.summary.submerged = countImpassable;

    return this.getSummary();
  }

  /**
   * Get comprehensive summary of graph topology and current scenario evaluation.
   */
  getSummary() {
    return { ...this.summary };
  }

  /**
   * Get feature by ID.
   * @param {string} id
   * @returns {Object|null}
   */
  getFeature(id) {
    return this.features.get(id) || null;
  }

  /**
   * Get edge by ID.
   * @param {string} id
   * @returns {Object|null}
   */
  getEdge(id) {
    return this.edges.get(id) || null;
  }

  /**
   * Get all registered features.
   * @returns {Array<Object>}
   */
  getFeatures() {
    return Array.from(this.features.values());
  }

  /**
   * Get all registered edges.
   * @returns {Array<Object>}
   */
  getEdges() {
    return Array.from(this.edges.values());
  }

  /**
   * Get all registered nodes.
   * @returns {Array<Object>}
   */
  getNodes() {
    return Array.from(this.nodes.values());
  }

  /**
   * Get all connected components.
   * @returns {Array<Object>}
   */
  getComponents() {
    return this.components;
  }

  /**
   * Get invalid features flagged during ingestion.
   */
  getInvalidFeatures() {
    return this.invalidFeatures;
  }

  /**
   * Get documented unresolved 2D crossings.
   */
  getUnresolvedCrossings() {
    return this.unresolvedCrossings;
  }
}
