import { BUILDING_EXPOSURE } from './BuildingClassifier.js';
import { ROUTE_TYPE, ROUTE_STATUS } from './RoutingService.js';

/**
 * HighWater 3D — Affected-Area Clustering Service (Phase 3)
 * 
 * Groups geographically contiguous flood-affected structures into distinct evacuation clusters.
 * 
 * Key Principles:
 * 1. Strict Distance Metric:
 *    Uses Euclidean centroid distances with a documented threshold (default 70.0m),
 *    preventing disconnected areas from merging merely because bounding boxes overlap.
 * 2. Deterministic & Stable Cluster IDs:
 *    Sorts clusters by building count descending and coordinates to guarantee repeatable IDs across runs.
 * 3. Defensible Road Access Connection:
 *    Snaps cluster boundary to the closest valid road network node/edge. If no road exists
 *    within the configurable snap radius, the cluster is explicitly marked unconnected.
 *    No road connectivity is ever fabricated.
 * 4. Transparent Population Caveats:
 *    Clearly reports that SpaceNet 8 lacks demographic census data; provides an explicitly
 *    labeled conceptual occupancy estimate (~2.5 persons/structure).
 */

export const DEFAULT_CLUSTER_CONFIG = Object.freeze({
  // Maximum distance between building centroids (meters) to group into the same cluster
  clusterNeighborhoodMeters: 70.0,

  // Minimum buildings required to form an evacuation cluster (isolated single buildings form 1-bld clusters)
  minClusterSize: 1,

  // Maximum search distance (meters) to connect a cluster to the nearest road network corridor
  maxRoadSnapDistanceMeters: 160.0,

  // Conceptual occupants per structure (clearly documented as conceptual estimate, not census data)
  conceptualOccupantsPerBuilding: 2.5,
});

export class ClusterService {
  /**
   * @param {import('./RoadNetwork.js').RoadNetwork} roadNetwork
   * @param {Object} [options]
   */
  constructor(roadNetwork, options = {}) {
    this.roadNetwork = roadNetwork;
    this.config = { ...DEFAULT_CLUSTER_CONFIG, ...options };
    this.clusters = [];
  }

  /**
   * Group affected buildings into evacuation origin clusters.
   * 
   * @param {Array<Object>} affectedBuildings - List of classified building objects with category !== UNAFFECTED
   * @returns {Array<Object>} List of stable, structured clusters
   */
  createClusters(affectedBuildings) {
    this.clusters = [];
    if (!affectedBuildings || affectedBuildings.length === 0) {
      return this.clusters;
    }

    const n = affectedBuildings.length;
    const thresholdSq = this.config.clusterNeighborhoodMeters * this.config.clusterNeighborhoodMeters;

    // 1. Build adjacency graph between affected buildings based on spatial distance
    const adjacency = Array.from({ length: n }, () => []);

    for (let i = 0; i < n; i++) {
      const bA = affectedBuildings[i];
      for (let j = i + 1; j < n; j++) {
        const bB = affectedBuildings[j];
        const dx = bA.center.x - bB.center.x;
        const dz = bA.center.z - bB.center.z;
        const distSq = dx * dx + dz * dz;

        if (distSq <= thresholdSq) {
          adjacency[i].push(j);
          adjacency[j].push(i);
        }
      }
    }

    // 2. Connected Component Traversal (BFS)
    const visited = new Uint8Array(n);
    const rawClusters = [];

    for (let i = 0; i < n; i++) {
      if (visited[i]) continue;

      const clusterIndices = [];
      const queue = [i];
      visited[i] = 1;

      while (queue.length > 0) {
        const curr = queue.shift();
        clusterIndices.push(curr);

        for (const neighbor of adjacency[curr]) {
          if (!visited[neighbor]) {
            visited[neighbor] = 1;
            queue.push(neighbor);
          }
        }
      }

      rawClusters.push(clusterIndices.map(idx => affectedBuildings[idx]));
    }

    // 3. Sort clusters deterministically by size descending, then centroid X ascending for stable IDs
    rawClusters.sort((a, b) => {
      if (b.length !== a.length) return b.length - a.length;
      const ax = a.reduce((s, bld) => s + bld.center.x, 0) / a.length;
      const bx = b.reduce((s, bld) => s + bld.center.x, 0) / b.length;
      return ax - bx;
    });

    // 4. Construct rich cluster models
    this.clusters = rawClusters.map((blds, cIdx) => {
      const clusterId = `cluster-${cIdx + 1}`;

      // Compute geometric centroid
      let sumX = 0;
      let sumZ = 0;
      let maxDepth = 0;
      let totalArea = 0;

      const distribution = {
        low: 0,
        moderate: 0,
        high: 0,
        critical: 0,
        unknown: 0,
      };

      for (const b of blds) {
        sumX += b.center.x;
        sumZ += b.center.z;
        totalArea += (b.areaSqM || 100);

        if (b.waterDepth && b.waterDepth > maxDepth) maxDepth = b.waterDepth;

        if (b.category === BUILDING_EXPOSURE.LOW) distribution.low++;
        else if (b.category === BUILDING_EXPOSURE.MODERATE) distribution.moderate++;
        else if (b.category === BUILDING_EXPOSURE.HIGH) distribution.high++;
        else if (b.category === BUILDING_EXPOSURE.CRITICAL) distribution.critical++;
        else distribution.unknown++;
      }

      const cx = sumX / blds.length;
      const cz = sumZ / blds.length;

      // Compute bounding radius from centroid
      let maxDistFromCentroid = 0;
      for (const b of blds) {
        const d = Math.hypot(b.center.x - cx, b.center.z - cz);
        if (d > maxDistFromCentroid) maxDistFromCentroid = d;
      }
      const radiusMeters = Math.max(25.0, Math.round(maxDistFromCentroid + 15.0));

      // 5. Connect cluster to nearest valid road network access point
      const origin = this._resolveClusterOrigin(cx, cz, blds);

      // Population estimation disclaimer
      const estimatedPop = Math.round(blds.length * this.config.conceptualOccupantsPerBuilding);

      return {
        id: clusterId,
        index: cIdx + 1,
        buildingCount: blds.length,
        buildingIds: blds.map(b => b.id),
        buildings: blds,
        centroid: { x: Math.round(cx * 10) / 10, z: Math.round(cz * 10) / 10 },
        radiusMeters,
        totalAreaSqM: Math.round(totalArea),
        maxWaterDepth: Math.round(maxDepth * 100) / 100,
        distribution,
        estimatedPopulation: {
          count: estimatedPop,
          isVerified: false,
          disclaimer: 'Conceptual estimate (~2.5 persons/building). Census population unavailable in source dataset.',
        },
        representativeOrigin: origin,
      };
    });

    console.log(`[ClusterService] Formed ${this.clusters.length} affected-area evacuation clusters from ${affectedBuildings.length} flooded structures.`);
    return this.clusters;
  }

  /**
   * Find a defensible road access origin for the cluster.
   * Prefers road network nodes/edges touching the cluster perimeter.
   * If no road exists within snap tolerance, marks as unconnected.
   * @private
   */
  _resolveClusterOrigin(cx, cz, buildings) {
    if (!this.roadNetwork || !this.roadNetwork.nodes || this.roadNetwork.nodes.size === 0) {
      return {
        x: cx,
        z: cz,
        isConnectedToRoads: false,
        roadNodeId: null,
        distanceMeters: Infinity,
        reason: 'No road network loaded in environment',
      };
    }

    let bestNode = null;
    let bestDist = this.config.maxRoadSnapDistanceMeters;
    let bestPoint = { x: cx, z: cz };

    // 1. Check all road nodes against cluster centroid and all building coordinates
    for (const node of this.roadNetwork.nodes.values()) {
      // Check distance to cluster centroid
      const dCentroid = Math.hypot(node.x - cx, node.z - cz);
      if (dCentroid < bestDist) {
        bestDist = dCentroid;
        bestNode = node;
        bestPoint = { x: node.x, z: node.z };
      }

      // Check distance to perimeter buildings
      for (const b of buildings) {
        const dBld = Math.hypot(node.x - b.center.x, node.z - b.center.z);
        if (dBld < bestDist) {
          bestDist = dBld;
          bestNode = node;
          bestPoint = { x: node.x, z: node.z };
        }
      }
    }

    if (!bestNode) {
      return {
        x: cx,
        z: cz,
        isConnectedToRoads: false,
        roadNodeId: null,
        distanceMeters: Infinity,
        reason: `No road network segment found within ${this.config.maxRoadSnapDistanceMeters}m of cluster perimeter. Origin marked unconnected.`,
      };
    }

    return {
      x: bestPoint.x,
      z: bestPoint.z,
      isConnectedToRoads: true,
      roadNodeId: bestNode.id,
      componentId: bestNode.componentId,
      distanceMeters: Math.round(bestDist * 10) / 10,
      reason: `Connected to Road Node ${bestNode.id} in Component #${bestNode.componentId} (${Math.round(bestDist)}m from cluster).`,
    };
  }

  /**
   * Route an affected cluster to the nearest reachable destination using RoutingService.
   * 
   * @param {Object} cluster
   * @param {Array<Object>} candidateDestinations
   * @param {import('./RoutingService.js').RoutingService} routingService
   * @param {Object} [options]
   * @returns {Object} Route result
   */
  routeCluster(cluster, candidateDestinations, routingService, options = {}) {
    if (!cluster) {
      throw new Error('ClusterService.routeCluster: Cluster object is required.');
    }
    if (!routingService) {
      throw new Error('ClusterService.routeCluster: RoutingService instance is required.');
    }

    // Check if cluster origin is connected to roads
    if (!cluster.representativeOrigin || !cluster.representativeOrigin.isConnectedToRoads) {
      return {
        isValid: false,
        isReachable: false,
        status: ROUTE_STATUS.BLOCKED,
        clusterId: cluster.id,
        origin: cluster.representativeOrigin,
        destination: candidateDestinations[0] || null,
        totalDistanceMeters: Infinity,
        totalCost: Infinity,
        explanation: `Cluster ${cluster.id} has no valid connection to the road graph (${cluster.representativeOrigin?.reason || 'unconnected'}). Evacuation routing cannot traverse without road connectivity.`,
      };
    }

    const origin = {
      x: cluster.representativeOrigin.x,
      z: cluster.representativeOrigin.z,
      id: `${cluster.id}-origin`,
      name: `${cluster.id} Evacuation Origin (${cluster.buildingCount} structures)`,
    };

    return routingService.findNearestReachableDestination(origin, candidateDestinations, options);
  }

  /**
   * Get cluster by ID.
   * @param {string} id
   * @returns {Object|null}
   */
  getCluster(id) {
    return this.clusters.find(c => c.id === id) || null;
  }
}
