import * as THREE from 'three';
import { geoToLocal } from '../geo/Projection.js';
import { RoadNetwork, ROAD_STATUS, ROAD_STATUS_COLORS } from '../geo/RoadNetwork.js';

/**
 * HighWater 3D — Road Overlays Layer
 * Renders 117 road segments from SpaceNet 8 Dernau dataset draped over real DGM1 terrain.
 * Phase 1: Features dynamic road network topology, continuous elevation profile sampling,
 * and 4-state classification (Unaffected, Exposed, Impassable, Unknown) while retaining
 * full backward compatibility with historical SpaceNet 8 status labels and milestone audits.
 */
export class RoadLayer {
  /**
   * @param {THREE.Scene} scene
   * @param {import('../terrain/TerrainManager.js').TerrainManager} terrainManager
   */
  constructor(scene, terrainManager) {
    this.scene = scene;
    this.terrainManager = terrainManager;

    this.group = new THREE.Group();
    this.group.name = 'Roads_Layer';
    this.scene.add(this.group);

    // Topological Road Network Engine
    this.roadNetwork = new RoadNetwork(this.terrainManager);

    // Meshes & Materials
    this.roadsMesh = null;
    this.roadsMaterial = null;
    this.rawGeojson = null;

    // Backward compatibility aliases
    this.floodedMesh = null;
    this.openMesh = null;

    // Feature index for raycasting inspection & dynamic passability
    this.features = [];
    this.passabilityMode = 'dynamic-passability'; // 'dynamic-passability' | 'historical'

    this.stats = {
      total: 0,
      flooded: 0,
      open: 0,
      totalLengthKm: 0,
    };

    this.passabilityStats = {
      unaffected: 0,
      exposed: 0,
      impassable: 0,
      unknown: 0,
      passable: 0,
      waterlogged: 0,
      submerged: 0,
    };
  }

  /**
   * Get underlying RoadNetwork analysis engine.
   * @returns {RoadNetwork}
   */
  getRoadNetwork() {
    return this.roadNetwork;
  }

  /**
   * Load roads GeoJSON.
   * @param {string} url
   */
  async load(url = '/data/dernau/roads_status.geojson') {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`RoadLayer: Failed to fetch roads GeoJSON from ${url} (${res.status})`);
    }

    const geojson = await res.json();
    this.rawGeojson = geojson;
    this.buildGeometry(geojson);
    return this.stats;
  }

  /**
   * Ingest GeoJSON into RoadNetwork, drape line vertices over terrain elevation,
   * and construct line segments with vertex colors.
   * @param {Object} geojson
   */
  buildGeometry(geojson) {
    this.dispose();

    // 1. Build topological graph and continuous elevation profiles
    this.roadNetwork.buildFromGeoJSON(geojson);

    this.features = [];
    let totalLengthM = 0;

    // Elevation normal offset to prevent z-fighting against terrain surface
    const elevationOffset = 0.55;

    const allPositions = [];
    const allColors = [];
    let vertexCounter = 0;

    const networkFeatures = this.roadNetwork.getFeatures();

    networkFeatures.forEach((netFeat, index) => {
      const isFlooded = netFeat.flooded === true;
      let roadLengthM = 0;
      const segmentBoxes = [];
      const roadPoints = [];
      const featVertexStart = vertexCounter;

      netFeat.edges.forEach((edge) => {
        const line = edge.geoCoordinates;
        if (!line || line.length < 2) return;

        for (let i = 0; i < line.length - 1; i++) {
          const ptA = geoToLocal(line[i][0], line[i][1]);
          const ptB = geoToLocal(line[i + 1][0], line[i + 1][1]);

          const yA = (this.terrainManager?.getElevationAt(ptA.x, ptA.z) || 135.0) + elevationOffset;
          const yB = (this.terrainManager?.getElevationAt(ptB.x, ptB.z) || 135.0) + elevationOffset;

          const dx = ptB.x - ptA.x;
          const dy = yB - yA;
          const dz = ptB.z - ptA.z;
          const segLen = Math.sqrt(dx * dx + dy * dy + dz * dz);
          roadLengthM += segLen;

          // Push vertex pair for LineSegments
          allPositions.push(ptA.x, yA, ptA.z);
          allPositions.push(ptB.x, yB, ptB.z);

          // Initial colors (rose for flooded, cyan for open)
          const r = isFlooded ? 0.96 : 0.22;
          const g = isFlooded ? 0.25 : 0.74;
          const b = isFlooded ? 0.37 : 0.97;
          allColors.push(r, g, b, r, g, b);

          vertexCounter += 2;

          roadPoints.push({ x: ptA.x, y: yA, z: ptA.z });
          roadPoints.push({ x: ptB.x, y: yB, z: ptB.z });

          // Bounding box for segment
          const box = new THREE.Box3();
          box.expandByPoint(new THREE.Vector3(ptA.x, yA, ptA.z));
          box.expandByPoint(new THREE.Vector3(ptB.x, yB, ptB.z));
          box.expandByScalar(3.0); // 3m hit buffer
          segmentBoxes.push(box);
        }
      });

      totalLengthM += roadLengthM;

      this.features.push({
        id: netFeat.id,
        kind: 'road',
        flooded: isFlooded, // SpaceNet 8 historical status
        lengthMeters: Math.round(roadLengthM * 10) / 10,
        boxes: segmentBoxes,
        points: roadPoints,
        vertexStart: featVertexStart,
        vertexCount: vertexCounter - featVertexStart,
        // Classification & Exposure Metrics
        status: netFeat.status || ROAD_STATUS.UNAFFECTED,
        statusReason: netFeat.statusReason || 'Unassessed',
        maxWaterDepth: netFeat.maxWaterDepth || 0,
        exposedLengthMeters: netFeat.exposedLengthMeters || 0,
        exposedRatio: netFeat.exposedRatio || 0,
        minElevation: netFeat.minGroundElev,
        maxElevation: netFeat.maxGroundElev,
        componentId: netFeat.componentId,
        componentSize: netFeat.componentSize,
        // Legacy status
        passabilityStatus: isFlooded ? 'submerged' : 'passable',
      });
    });

    if (allPositions.length > 0) {
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(allPositions, 3));
      geometry.setAttribute('color', new THREE.Float32BufferAttribute(allColors, 3));

      this.roadsMaterial = new THREE.LineBasicMaterial({
        vertexColors: true,
        linewidth: 3,
        transparent: true,
        opacity: 0.95,
      });

      this.roadsMesh = new THREE.LineSegments(geometry, this.roadsMaterial);
      this.roadsMesh.name = 'Roads_Layer_Mesh';
      this.group.add(this.roadsMesh);

      // Aliases for backward compatibility
      this.floodedMesh = this.roadsMesh;
      this.openMesh = this.roadsMesh;
    }

    this.stats = {
      total: this.features.length,
      flooded: this.features.filter((f) => f.flooded).length,
      open: this.features.filter((f) => !f.flooded).length,
      totalLengthKm: Math.round((totalLengthM / 1000) * 100) / 100,
    };
  }

  /**
   * Set road passability visualization mode.
   * @param {'dynamic-passability'|'historical'} mode
   */
  setPassabilityMode(mode) {
    this.passabilityMode = mode === 'historical' ? 'historical' : 'dynamic-passability';
    return this.passabilityMode;
  }

  /**
   * Dynamically update road colors and passability based on water depth along segments.
   * Decouples rigorous ground-elevation sampling from visual 3D offsets.
   * 
   * @param {function(number, number): number} getWaterElevationAt - Function returning water surface elevation at local (x, z)
   */
  updatePassability(getWaterElevationAt) {
    if (!this.roadsMesh || !this.roadsMesh.geometry.attributes.color) return this.passabilityStats;
    const colors = this.roadsMesh.geometry.attributes.color.array;

    // 1. Evaluate scenario on RoadNetwork (pure ground elevation profile sampling)
    const netSummary = this.roadNetwork.evaluateScenario(getWaterElevationAt);

    const legacyBreakdown = {
      passable: 0,
      waterlogged: 0,
      submerged: 0,
    };

    for (const feat of this.features) {
      const netFeat = this.roadNetwork.getFeature(feat.id);
      if (netFeat) {
        feat.status = netFeat.status;
        feat.statusReason = netFeat.statusReason;
        feat.maxWaterDepth = netFeat.maxWaterDepth;
        feat.exposedLengthMeters = netFeat.exposedLengthMeters;
        feat.exposedRatio = netFeat.exposedRatio;
      }

      // Legacy vertex visual depth evaluation (maintains exact bit-for-bit compatibility with Milestone 6, 7, 8 test freezes)
      let legacyMaxDepth = 0;
      for (const pt of feat.points) {
        const waterElev = typeof getWaterElevationAt === 'function' ? getWaterElevationAt(pt.x, pt.z) : 124.0;
        const depth = Math.max(0, waterElev - pt.y);
        if (depth > legacyMaxDepth) legacyMaxDepth = depth;
      }

      let r, g, b;

      if (this.passabilityMode === 'historical') {
        if (feat.flooded) {
          r = 0.96; g = 0.25; b = 0.37; // Rose: SpaceNet 8 Flooded Cutoff
        } else {
          r = 0.22; g = 0.74; b = 0.97; // Cyan: SpaceNet 8 Open
        }
        if (legacyMaxDepth > 0.15) legacyBreakdown.submerged++;
        else if (legacyMaxDepth > 0) legacyBreakdown.waterlogged++;
        else legacyBreakdown.passable++;
      } else {
        // Dynamic Passability Classification using ROAD_STATUS_COLORS
        // Impassable: Crimson Red | Exposed: Amber | Unaffected: Emerald Green | Unknown: Muted Slate
        // (NOTE: Kept strictly distinct from future purple shelter route and blue hospital route colors!)
        if (legacyMaxDepth > 0.15) {
          feat.passabilityStatus = 'submerged';
          legacyBreakdown.submerged++;
        } else if (legacyMaxDepth > 0) {
          feat.passabilityStatus = 'waterlogged';
          legacyBreakdown.waterlogged++;
        } else {
          feat.passabilityStatus = 'passable';
          legacyBreakdown.passable++;
        }

        const colorEntry = ROAD_STATUS_COLORS[feat.status] || ROAD_STATUS_COLORS[ROAD_STATUS.UNAFFECTED];
        r = colorEntry.r;
        g = colorEntry.g;
        b = colorEntry.b;
      }

      const vStart = feat.vertexStart;
      const vCount = feat.vertexCount;
      for (let i = 0; i < vCount; i++) {
        colors[(vStart + i) * 3 + 0] = r;
        colors[(vStart + i) * 3 + 1] = g;
        colors[(vStart + i) * 3 + 2] = b;
      }
    }

    this.roadsMesh.geometry.attributes.color.needsUpdate = true;

    this.passabilityStats = {
      // Modern Phase 1 classification
      unaffected: netSummary.unaffected,
      exposed: netSummary.exposed,
      impassable: netSummary.impassable,
      unknown: netSummary.unknown,
      // Legacy breakdown aliases for backward compatibility
      passable: legacyBreakdown.passable,
      waterlogged: legacyBreakdown.waterlogged,
      submerged: legacyBreakdown.submerged,
      total: this.features.length,
      exposedLengthKm: netSummary.exposedLengthKm,
      impassableLengthKm: netSummary.impassableLengthKm,
    };

    return this.passabilityStats;
  }

  /**
   * Find road segment under raycast intersection.
   * @param {THREE.Ray} ray
   * @returns {Object|null}
   */
  intersectRoad(ray) {
    if (!ray) return null;
    let closestFeat = null;
    let closestDist = Infinity;

    for (const f of this.features) {
      for (const box of f.boxes) {
        const hit = ray.intersectBox(box, new THREE.Vector3());
        if (hit) {
          const dist = ray.origin.distanceTo(hit);
          if (dist < closestDist) {
            closestDist = dist;
            closestFeat = f;
          }
        }
      }
    }

    return closestFeat;
  }

  /**
   * Toggle visibility of roads layer.
   * @param {boolean} visible
   */
  setVisible(visible) {
    this.group.visible = visible;
  }

  /**
   * Dispose geometries and materials.
   */
  dispose() {
    if (this.roadsMesh) {
      if (this.roadsMesh.geometry) this.roadsMesh.geometry.dispose();
      this.group.remove(this.roadsMesh);
      this.roadsMesh = null;
      this.floodedMesh = null;
      this.openMesh = null;
    }
    if (this.roadsMaterial) {
      this.roadsMaterial.dispose();
      this.roadsMaterial = null;
    }
    this.features = [];
  }
}

