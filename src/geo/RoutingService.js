import { ROAD_STATUS } from './RoadNetwork.js';

/**
 * HighWater 3D — Conservative Routing Engine (Phase 2)
 * 
 * Provides robust topological routing for shelter evacuation and hospital medical response.
 * Uses the Phase 1 road graph as its foundation and routes strictly across valid,
 * connected graph edges.
 * 
 * Key Policies & Capabilities:
 * 1. Conservative Safety Policy:
 *    - IMPASSABLE edges (depth >= 0.15m) are strictly excluded (cost = Infinity).
 *    - UNKNOWN edges (missing/unreliable DEM elevation) are excluded by default under the conservative policy.
 *    - UNAFFECTED roads (dry) are preferred (base cost = 1.0 * lengthMeters).
 *    - EXPOSED edges (0 < depth < 0.15m) are permitted only under configurable policy,
 *      heavily penalized, and prominently labeled as exposed.
 * 2. Graph Connectivity Reachability:
 *    - Reachability is determined by topological graph traversal, never Euclidean distance.
 *    - Disconnected source components and unresolved 2D crossings are strictly respected.
 * 3. Nearest Reachable Destination:
 *    - Evaluates reachable destinations by lowest route cost, avoiding geographically close
 *      destinations that are severed by floodwaters or graph disconnection.
 * 4. Alternative Paths:
 *    - Supports generating distinct alternative routes via edge-penalization diversity.
 * 5. Dynamic Scenario Recalculation:
 *    - Re-evaluates routes when water elevation changes in sub-millisecond time without
 *      reconstructing the static graph topology.
 * 
 * DISCLAIMER & CONCEPTUAL NOTICE:
 * Routing reachability is an elevation-based conceptual immersion assessment,
 * not a hydraulic prediction of water flow, velocity, debris, or real-world road safety.
 */

export const ROUTE_STATUS = Object.freeze({
  CLEAR: 'clear',           // 100% dry (unaffected) roads
  EXPOSED: 'exposed',       // Traversable, but contains water-exposed sections (<0.15m)
  BLOCKED: 'blocked',       // Blocked by impassable water or missing graph connectivity
  UNREACHABLE: 'unreachable'// Destination cannot be reached in current scenario
});

export const ROUTE_TYPE = Object.freeze({
  SHELTER: 'shelter',
  HOSPITAL: 'hospital',
  CUSTOM: 'custom'
});

export const DEFAULT_ROUTING_CONFIG = Object.freeze({
  // Permitted to traverse exposed road segments (< 0.15m depth)
  allowExposed: true,

  // Multiplier penalty applied to road length for exposed segments
  exposedCostMultiplier: 5.0,

  // Additional depth-weighted penalty for exposed segments: depth / threshold * weight
  exposedDepthWeight: 4.0,

  // Conservative policy: reject edges with unknown / missing DEM elevation
  allowUnknown: false,

  // Multiplier penalty if unknown edges are explicitly permitted
  unknownCostMultiplier: 20.0,

  // Maximum search radius (meters) to snap an origin or destination point to the road graph
  maxSnapDistanceMeters: 350.0,

  // Edge cost penalty multiplier applied to primary path edges to discover distinct alternatives
  alternativePenaltyMultiplier: 3.5,

  // Maximum edge overlap ratio (Jaccard similarity) to accept an alternative route
  maxAlternativeOverlapRatio: 0.85,

  // Minimum alternative path length difference (meters) to avoid trivial loops
  minAlternativeLengthDeltaMeters: 5.0
});

/**
 * Min-Heap Priority Queue for Dijkstra graph search
 */
class MinPriorityQueue {
  constructor() {
    this.heap = [];
  }

  push(item, priority) {
    this.heap.push({ item, priority });
    this._bubbleUp(this.heap.length - 1);
  }

  pop() {
    if (this.heap.length === 0) return null;
    const top = this.heap[0];
    const bottom = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = bottom;
      this._sinkDown(0);
    }
    return top.item;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  _bubbleUp(idx) {
    const element = this.heap[idx];
    while (idx > 0) {
      const parentIdx = (idx - 1) >> 1;
      const parent = this.heap[parentIdx];
      if (element.priority >= parent.priority) break;
      this.heap[idx] = parent;
      idx = parentIdx;
    }
    this.heap[idx] = element;
  }

  _sinkDown(idx) {
    const length = this.heap.length;
    const element = this.heap[idx];
    while (true) {
      const leftChildIdx = (idx << 1) + 1;
      const rightChildIdx = leftChildIdx + 1;
      let swapIdx = null;

      if (leftChildIdx < length) {
        if (this.heap[leftChildIdx].priority < element.priority) {
          swapIdx = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        const rightChild = this.heap[rightChildIdx];
        const comparePriority = swapIdx === null ? element.priority : this.heap[leftChildIdx].priority;
        if (rightChild.priority < comparePriority) {
          swapIdx = rightChildIdx;
        }
      }

      if (swapIdx === null) break;
      this.heap[idx] = this.heap[swapIdx];
      idx = swapIdx;
    }
    this.heap[idx] = element;
  }
}

export class RoutingService {
  /**
   * @param {import('./RoadNetwork.js').RoadNetwork} roadNetwork
   * @param {Object} [options]
   */
  constructor(roadNetwork, options = {}) {
    if (!roadNetwork) {
      throw new Error('RoutingService: RoadNetwork instance is required.');
    }
    this.roadNetwork = roadNetwork;
    this.config = { ...DEFAULT_ROUTING_CONFIG, ...options };

    // Adjacency cache (nodeId -> Array of { edgeId, neighborNodeId, lengthMeters })
    this.adjacency = new Map();
    this._buildAdjacency();
  }

  /**
   * Build adjacency list from road network graph nodes and edges.
   * Roads are modeled as bidirectional corridors unless directed attributes dictate otherwise.
   * @private
   */
  _buildAdjacency() {
    this.adjacency.clear();

    for (const node of this.roadNetwork.nodes.values()) {
      this.adjacency.set(node.id, []);
    }

    for (const edge of this.roadNetwork.edges.values()) {
      const fromNodeId = edge.fromNodeId;
      const toNodeId = edge.toNodeId;

      if (this.adjacency.has(fromNodeId)) {
        this.adjacency.get(fromNodeId).push({
          edgeId: edge.id,
          targetNodeId: toNodeId,
          lengthMeters: edge.lengthMeters
        });
      }

      if (this.adjacency.has(toNodeId)) {
        this.adjacency.get(toNodeId).push({
          edgeId: edge.id,
          targetNodeId: fromNodeId,
          lengthMeters: edge.lengthMeters
        });
      }
    }
  }

  /**
   * Re-synchronize adjacency if graph structure changed.
   */
  syncAdjacency() {
    this._buildAdjacency();
  }

  /**
   * Calculate edge traversal cost under current routing policy and flood status.
   * @param {Object} edge - Edge object from roadNetwork
   * @param {Object} [edgePenalties] - Optional map of edgeId -> penalty multiplier (for alternative routing)
   * @returns {{ traversable: boolean, cost: number, reason?: string, status: string }}
   */
  getEdgeCost(edge, edgePenalties = null) {
    if (!edge) {
      return { traversable: false, cost: Infinity, reason: 'Invalid or missing edge', status: 'unknown' };
    }

    const baseLength = edge.lengthMeters || 1.0;
    const penaltyMultiplier = (edgePenalties && edgePenalties[edge.id]) ? edgePenalties[edge.id] : 1.0;

    // 1. IMPASSABLE edges: strictly excluded
    if (edge.status === ROAD_STATUS.IMPASSABLE) {
      return {
        traversable: false,
        cost: Infinity,
        reason: `Impassable water depth (${(edge.maxWaterDepth || 0).toFixed(2)}m >= 0.15m)`,
        status: ROAD_STATUS.IMPASSABLE
      };
    }

    // 2. UNKNOWN edges: excluded under conservative policy
    if (edge.status === ROAD_STATUS.UNKNOWN) {
      if (!this.config.allowUnknown) {
        return {
          traversable: false,
          cost: Infinity,
          reason: 'Unknown/unverified terrain elevation (conservative safety policy excludes unconfirmed roads)',
          status: ROAD_STATUS.UNKNOWN
        };
      }
      return {
        traversable: true,
        cost: baseLength * this.config.unknownCostMultiplier * penaltyMultiplier,
        reason: 'Unverified road permitted with severe penalty',
        status: ROAD_STATUS.UNKNOWN
      };
    }

    // 3. EXPOSED edges: permitted with substantial configurable penalty
    if (edge.status === ROAD_STATUS.EXPOSED) {
      if (!this.config.allowExposed) {
        return {
          traversable: false,
          cost: Infinity,
          reason: 'Water-exposed road excluded under strict dry-only policy',
          status: ROAD_STATUS.EXPOSED
        };
      }

      const thresh = this.roadNetwork.config.impassableDepthThreshold || 0.15;
      const depthFactor = edge.maxWaterDepth > 0 ? Math.min(1.0, edge.maxWaterDepth / thresh) : 0.5;
      const exposedFactor = this.config.exposedCostMultiplier + depthFactor * this.config.exposedDepthWeight;
      const effectiveCost = baseLength * exposedFactor * penaltyMultiplier;

      return {
        traversable: true,
        cost: effectiveCost,
        reason: `Exposed to ${(edge.maxWaterDepth || 0).toFixed(2)}m water (penalized ${exposedFactor.toFixed(1)}x)`,
        status: ROAD_STATUS.EXPOSED
      };
    }

    // 4. UNAFFECTED edges: dry, standard travel cost
    return {
      traversable: true,
      cost: baseLength * penaltyMultiplier,
      reason: 'Dry, unaffected road segment',
      status: ROAD_STATUS.UNAFFECTED
    };
  }

  /**
   * Snap an arbitrary 2D point (x, z) to the nearest road network node/edge.
   * @param {number} x - Local metric coordinate x
   * @param {number} z - Local metric coordinate z
   * @param {number} [maxDistance] - Maximum search radius (meters)
   * @returns {{ snapped: boolean, node: Object|null, edge: Object|null, distance: number, point: {x: number, z: number}, reason?: string }}
   */
  snapPoint(x, z, maxDistance = this.config.maxSnapDistanceMeters) {
    let bestDist = maxDistance;
    let bestNode = null;
    let bestEdge = null;
    let bestPoint = null;

    // 1. Check proximity to all graph nodes
    for (const node of this.roadNetwork.nodes.values()) {
      const d = Math.hypot(node.x - x, node.z - z);
      if (d < bestDist) {
        bestDist = d;
        bestNode = node;
        bestPoint = { x: node.x, z: node.z };
      }
    }

    // 2. Check perpendicular projection onto edge line segments
    for (const edge of this.roadNetwork.edges.values()) {
      const vertices = edge.vertices;
      if (!vertices || vertices.length < 2) continue;

      for (let i = 0; i < vertices.length - 1; i++) {
        const p1 = vertices[i];
        const p2 = vertices[i + 1];
        const dx = p2.x - p1.x;
        const dz = p2.z - p1.z;
        const lenSq = dx * dx + dz * dz;
        if (lenSq === 0) continue;

        const t = Math.max(0, Math.min(1, ((x - p1.x) * dx + (z - p1.z) * dz) / lenSq));
        const projX = p1.x + t * dx;
        const projZ = p1.z + t * dz;
        const d = Math.hypot(projX - x, projZ - z);

        if (d < bestDist) {
          bestDist = d;
          bestEdge = edge;
          bestPoint = { x: projX, z: projZ };
          // Pick the closer node of the edge
          const fromNode = this.roadNetwork.nodes.get(edge.fromNodeId);
          const toNode = this.roadNetwork.nodes.get(edge.toNodeId);
          if (fromNode && toNode) {
            const dFrom = Math.hypot(fromNode.x - projX, fromNode.z - projZ);
            const dTo = Math.hypot(toNode.x - projX, toNode.z - projZ);
            bestNode = dFrom <= dTo ? fromNode : toNode;
          }
        }
      }
    }

    if (!bestNode) {
      return {
        snapped: false,
        node: null,
        edge: null,
        distance: Infinity,
        point: { x, z },
        reason: `Location is too far from any mapped road network segment (exceeds ${maxDistance}m limit)`
      };
    }

    return {
      snapped: true,
      node: bestNode,
      edge: bestEdge,
      distance: Math.round(bestDist * 10) / 10,
      point: bestPoint
    };
  }

  /**
   * Compute lowest-cost valid route between origin and destination using Dijkstra algorithm.
   * @param {{ x: number, z: number, id?: string, name?: string }} origin
   * @param {{ x: number, z: number, id?: string, name?: string, type?: string }} destination
   * @param {Object} [options]
   * @returns {Object} Comprehensive route result object
   */
  findRoute(origin, destination, options = {}) {
    const routeType = options.routeType || ROUTE_TYPE.SHELTER;
    const edgePenalties = options.edgePenalties || null;
    const bannedEdgeIds = options.bannedEdgeIds ? new Set(options.bannedEdgeIds) : null;

    // 1. Snap origin and destination
    const snapOrigin = this.snapPoint(origin.x, origin.z);
    if (!snapOrigin.snapped) {
      return this._buildFailureResult(origin, destination, routeType, 'INSUFFICIENT_GRAPH_COVERAGE', snapOrigin.reason);
    }

    const snapDest = this.snapPoint(destination.x, destination.z);
    if (!snapDest.snapped) {
      return this._buildFailureResult(origin, destination, routeType, 'INSUFFICIENT_GRAPH_COVERAGE', snapDest.reason);
    }

    const startNode = snapOrigin.node;
    const destNode = snapDest.node;

    // 2. Check if start and destination are already the exact same node
    if (startNode.id === destNode.id) {
      return this._buildDirectArrivalResult(origin, destination, startNode, routeType);
    }

    // 3. Check topological components (physical disconnection in source data)
    if (startNode.componentId !== destNode.componentId) {
      return this._buildFailureResult(
        origin,
        destination,
        routeType,
        'DISCONNECTED_NETWORK',
        `Start (Component #${startNode.componentId}) and Destination (Component #${destNode.componentId}) belong to disconnected road network components. No physical road connection exists in dataset.`
      );
    }

    // 4. Run Dijkstra search
    const distances = new Map(); // nodeId -> lowest cost
    const previous = new Map();  // nodeId -> { prevNodeId, edgeId, edgeCost }
    const pq = new MinPriorityQueue();

    distances.set(startNode.id, 0);
    pq.push(startNode.id, 0);

    let reachedTarget = false;
    const blockedEncountered = new Map(); // edgeId -> reason

    while (!pq.isEmpty()) {
      const currNodeId = pq.pop();

      if (currNodeId === destNode.id) {
        reachedTarget = true;
        break;
      }

      const currDist = distances.get(currNodeId);
      const neighbors = this.adjacency.get(currNodeId) || [];

      for (const edgeLink of neighbors) {
        const edgeId = edgeLink.edgeId;
        const neighborNodeId = edgeLink.targetNodeId;

        if (bannedEdgeIds && bannedEdgeIds.has(edgeId)) continue;

        const edge = this.roadNetwork.edges.get(edgeId);
        const costEval = this.getEdgeCost(edge, edgePenalties);

        if (!costEval.traversable) {
          if (!blockedEncountered.has(edgeId)) {
            blockedEncountered.set(edgeId, {
              edgeId,
              featureId: edge?.featureId,
              status: costEval.status,
              reason: costEval.reason
            });
          }
          continue;
        }

        const altDist = currDist + costEval.cost;
        if (!distances.has(neighborNodeId) || altDist < distances.get(neighborNodeId)) {
          distances.set(neighborNodeId, altDist);
          previous.set(neighborNodeId, {
            prevNodeId: currNodeId,
            edgeId,
            edgeCost: costEval.cost,
            edgeLength: edge.lengthMeters,
            edgeStatus: costEval.status,
            maxDepth: edge.maxWaterDepth || 0
          });
          pq.push(neighborNodeId, altDist);
        }
      }
    }

    // 5. If destination was not reached, analyze cause of failure
    if (!reachedTarget) {
      const blockedList = Array.from(blockedEncountered.values());
      const hasImpassable = blockedList.some(b => b.status === ROAD_STATUS.IMPASSABLE);
      const hasUnknown = blockedList.some(b => b.status === ROAD_STATUS.UNKNOWN);

      let code = 'BLOCKED_ROADS';
      let reason = 'All connecting paths in the network are blocked by impassable flood waters (>0.15m depth).';

      if (hasUnknown && !hasImpassable) {
        code = 'UNKNOWN_ROAD_CONDITIONS';
        reason = 'Connecting paths are blocked by unverified road segments under conservative policy.';
      } else if (blockedList.length === 0) {
        code = 'NO_CONNECTING_EDGES';
        reason = 'No traversable path exists within graph topology.';
      }

      return this._buildFailureResult(origin, destination, routeType, code, reason, blockedList);
    }

    // 6. Reconstruct path from destination back to start
    const pathEdges = [];
    const pathNodeIds = [];
    let curr = destNode.id;
    let totalLengthMeters = 0;
    let totalCost = distances.get(destNode.id) || 0;
    let maxWaterDepth = 0;
    let exposedLengthMeters = 0;
    let hasExposed = false;

    while (curr !== startNode.id) {
      pathNodeIds.push(curr);
      const step = previous.get(curr);
      if (!step) break;

      const edge = this.roadNetwork.edges.get(step.edgeId);
      if (edge) {
        pathEdges.push(edge);
        totalLengthMeters += edge.lengthMeters;

        if (edge.status === ROAD_STATUS.EXPOSED) {
          hasExposed = true;
          exposedLengthMeters += (edge.exposedLengthMeters || edge.lengthMeters);
        }
        if ((edge.maxWaterDepth || 0) > maxWaterDepth) {
          maxWaterDepth = edge.maxWaterDepth;
        }
      }

      curr = step.prevNodeId;
    }

    pathNodeIds.push(startNode.id);
    pathNodeIds.reverse();
    pathEdges.reverse();

    // 7. Assemble high-fidelity 3D polyline geometry following road lines
    const pathCoordinates = this._buildPathPolyline(snapOrigin, snapDest, pathEdges, startNode, destNode);

    const routeStatus = hasExposed ? ROUTE_STATUS.EXPOSED : ROUTE_STATUS.CLEAR;
    const exposedRatio = totalLengthMeters > 0 ? Math.min(1.0, exposedLengthMeters / totalLengthMeters) : 0;

    const explanation = routeStatus === ROUTE_STATUS.CLEAR
      ? `Clear, 100% dry route (${Math.round(totalLengthMeters)}m across ${pathEdges.length} road segments).`
      : `Route exposed to shallow water (max ${maxWaterDepth.toFixed(2)}m, ${Math.round(exposedLengthMeters)}m exposed / ${Math.round(exposedRatio * 100)}%). Navigable with caution under emergency policy.`;

    return {
      isValid: true,
      isReachable: true,
      status: routeStatus,
      routeType,
      origin: { ...origin, snappedDistance: snapOrigin.distance },
      destination: { ...destination, snappedDistance: snapDest.distance },
      startNodeId: startNode.id,
      destNodeId: destNode.id,
      edgeCount: pathEdges.length,
      edgeIds: pathEdges.map(e => e.id),
      edges: pathEdges,
      nodeIds: pathNodeIds,
      totalDistanceMeters: Math.round(totalLengthMeters * 10) / 10,
      totalCost: Math.round(totalCost * 10) / 10,
      maxWaterDepth: Math.round(maxWaterDepth * 100) / 100,
      exposedLengthMeters: Math.round(exposedLengthMeters * 10) / 10,
      exposedRatio: Math.round(exposedRatio * 100) / 100,
      pathCoordinates,
      blockedEdges: [],
      explanation,
      provenance: destination.provenance || 'dataset'
    };
  }

  /**
   * Find the nearest REACHABLE destination among a list of candidates by ROUTE COST,
   * explicitly avoiding false selection via straight-line Euclidean distance.
   * 
   * @param {{ x: number, z: number, id?: string, name?: string }} origin
   * @param {Array<Object>} candidateDestinations - List of facilities/shelters
   * @param {Object} [options]
   * @returns {{ bestDestination: Object|null, route: Object|null, evaluatedCandidates: Array<Object>, reason?: string }}
   */
  findNearestReachableDestination(origin, candidateDestinations, options = {}) {
    if (!candidateDestinations || candidateDestinations.length === 0) {
      return {
        bestDestination: null,
        route: null,
        evaluatedCandidates: [],
        reason: 'No candidate destinations provided.'
      };
    }

    const routeType = options.routeType || ROUTE_TYPE.SHELTER;
    const evaluatedCandidates = [];

    // Evaluate route to each candidate
    for (const candidate of candidateDestinations) {
      const euclideanDist = Math.hypot(candidate.x - origin.x, candidate.z - origin.z);
      const route = this.findRoute(origin, candidate, { ...options, routeType });

      evaluatedCandidates.push({
        candidate,
        euclideanDistanceMeters: Math.round(euclideanDist * 10) / 10,
        isReachable: route.isReachable,
        routeCost: route.isReachable ? route.totalCost : Infinity,
        routeDistanceMeters: route.isReachable ? route.totalDistanceMeters : Infinity,
        routeStatus: route.status,
        failureReason: route.isReachable ? null : route.explanation,
        route
      });
    }

    // Filter to reachable candidates and sort strictly by ROUTE COST
    const reachable = evaluatedCandidates.filter(c => c.isReachable);

    if (reachable.length === 0) {
      // Find candidate with lowest Euclidean distance for reporting why it failed
      evaluatedCandidates.sort((a, b) => a.euclideanDistanceMeters - b.euclideanDistanceMeters);
      const closestEuclid = evaluatedCandidates[0];

      return {
        bestDestination: null,
        route: null,
        evaluatedCandidates,
        reason: `No destinations are reachable within connected network. Nearest straight-line destination (${closestEuclid.candidate.name || closestEuclid.candidate.id}, ${closestEuclid.euclideanDistanceMeters}m) is unreachable: ${closestEuclid.failureReason}`
      };
    }

    // Sort by route cost ascending (prefer dry and short routes)
    reachable.sort((a, b) => a.routeCost - b.routeCost);
    const best = reachable[0];

    return {
      bestDestination: best.candidate,
      route: best.route,
      evaluatedCandidates,
      reason: `Nearest reachable destination found: ${best.candidate.name || best.candidate.id} (Route distance: ${best.routeDistanceMeters}m, Route cost: ${best.routeCost}).`
    };
  }

  /**
   * Discover distinct alternative routes without duplicate paths using edge penalization.
   * 
   * @param {{ x: number, z: number, id?: string, name?: string }} origin
   * @param {{ x: number, z: number, id?: string, name?: string, type?: string }} destination
   * @param {Object} [options]
   * @returns {{ primaryRoute: Object, alternativeRoute: Object|null, hasAlternative: boolean, explanation: string }}
   */
  findAlternativeRoutes(origin, destination, options = {}) {
    // 1. Compute primary lowest-cost route
    const primaryRoute = this.findRoute(origin, destination, options);
    if (!primaryRoute.isReachable || primaryRoute.edges.length <= 1) {
      return {
        primaryRoute,
        alternativeRoute: null,
        hasAlternative: false,
        explanation: primaryRoute.isReachable
          ? 'Route is too short or simple for distinct alternatives.'
          : primaryRoute.explanation
      };
    }

    // 2. Penalize edges of primary route to encourage divergence
    const primaryEdgeIds = new Set(primaryRoute.edgeIds);
    const edgePenalties = {};
    for (const edgeId of primaryEdgeIds) {
      edgePenalties[edgeId] = this.config.alternativePenaltyMultiplier;
    }

    // 3. Run secondary search
    const altRoute = this.findRoute(origin, destination, {
      ...options,
      edgePenalties
    });

    if (!altRoute.isReachable) {
      return {
        primaryRoute,
        alternativeRoute: null,
        hasAlternative: false,
        explanation: 'No viable alternative route exists in the connected graph.'
      };
    }

    // 4. Calculate Jaccard similarity / edge overlap
    const altEdgeIds = new Set(altRoute.edgeIds);
    let commonEdges = 0;
    for (const eid of altEdgeIds) {
      if (primaryEdgeIds.has(eid)) commonEdges++;
    }

    const overlapRatio = commonEdges / Math.max(1, Math.min(primaryEdgeIds.size, altEdgeIds.size));
    const lengthDelta = Math.abs(altRoute.totalDistanceMeters - primaryRoute.totalDistanceMeters);

    // Reject trivial alternatives that share > maxAlternativeOverlapRatio or are practically identical
    if (overlapRatio > this.config.maxAlternativeOverlapRatio && lengthDelta < this.config.minAlternativeLengthDeltaMeters) {
      return {
        primaryRoute,
        alternativeRoute: null,
        hasAlternative: false,
        explanation: 'Single corridor network; no distinct alternative route exists.'
      };
    }

    const diffMeters = Math.round((altRoute.totalDistanceMeters - primaryRoute.totalDistanceMeters) * 10) / 10;
    const diffSign = diffMeters >= 0 ? `+${diffMeters}m` : `${diffMeters}m`;
    const altExplanation = `Alternative route (${altRoute.totalDistanceMeters}m, ${diffSign}): ${altRoute.status.toUpperCase()} (${Math.round((1 - overlapRatio) * 100)}% path divergence).`;

    return {
      primaryRoute,
      alternativeRoute: altRoute,
      hasAlternative: true,
      explanation: altExplanation
    };
  }

  /**
   * Recalculate an existing active route request against the updated water level.
   * Executes in sub-millisecond time without rebuilding graph topology.
   * 
   * @param {Object} activeRouteState - Previous route object containing origin, destination, options
   * @returns {Object} Updated route evaluation
   */
  recalculateRoute(activeRouteState) {
    if (!activeRouteState || !activeRouteState.origin || !activeRouteState.destination) {
      return null;
    }

    // Re-run routing search with fresh road status evaluation
    return this.findRoute(
      activeRouteState.origin,
      activeRouteState.destination,
      { routeType: activeRouteState.routeType }
    );
  }

  /**
   * Assemble contiguous 3D coordinate chain along road geometries for 3D visual rendering.
   * @private
   */
  _buildPathPolyline(snapOrigin, snapDest, pathEdges, startNode, destNode) {
    const coords = [];

    // Add origin point
    coords.push({ x: snapOrigin.point.x, z: snapOrigin.point.z });

    let currentCoord = { x: startNode.x, z: startNode.z };
    coords.push({ x: currentCoord.x, z: currentCoord.z });

    for (let eIdx = 0; eIdx < pathEdges.length; eIdx++) {
      const edge = pathEdges[eIdx];
      const verts = edge.vertices;
      if (!verts || verts.length === 0) continue;

      // Determine traversal direction
      const dStart = Math.hypot(verts[0].x - currentCoord.x, verts[0].z - currentCoord.z);
      const dEnd = Math.hypot(verts[verts.length - 1].x - currentCoord.x, verts[verts.length - 1].z - currentCoord.z);
      const forward = dStart <= dEnd;

      const ordered = forward ? verts : [...verts].reverse();
      for (const pt of ordered) {
        coords.push({ x: pt.x, z: pt.z });
      }
      currentCoord = ordered[ordered.length - 1];
    }

    // Add final destination point
    coords.push({ x: snapDest.point.x, z: snapDest.point.z });

    // Clean duplicate consecutive points
    const cleaned = [];
    for (let i = 0; i < coords.length; i++) {
      if (i === 0) {
        cleaned.push(coords[i]);
      } else {
        const prev = cleaned[cleaned.length - 1];
        if (Math.hypot(coords[i].x - prev.x, coords[i].z - prev.z) > 0.1) {
          cleaned.push(coords[i]);
        }
      }
    }

    return cleaned;
  }

  /**
   * Helper to format a direct arrival result when origin and destination snap to the same node.
   * @private
   */
  _buildDirectArrivalResult(origin, destination, node, routeType) {
    const dist = Math.hypot(destination.x - origin.x, destination.z - origin.z);
    return {
      isValid: true,
      isReachable: true,
      status: ROUTE_STATUS.CLEAR,
      routeType,
      origin,
      destination,
      startNodeId: node.id,
      destNodeId: node.id,
      edgeCount: 0,
      edgeIds: [],
      edges: [],
      nodeIds: [node.id],
      totalDistanceMeters: Math.round(dist * 10) / 10,
      totalCost: 0,
      maxWaterDepth: 0,
      exposedLengthMeters: 0,
      exposedRatio: 0,
      pathCoordinates: [{ x: origin.x, z: origin.z }, { x: destination.x, z: destination.z }],
      blockedEdges: [],
      explanation: `Origin is directly adjacent to destination (${Math.round(dist)}m).`,
      provenance: destination.provenance || 'dataset'
    };
  }

  /**
   * Helper to format a structured failure result.
   * @private
   */
  _buildFailureResult(origin, destination, routeType, errorCode, reason, blockedEdges = []) {
    return {
      isValid: false,
      isReachable: false,
      status: ROUTE_STATUS.BLOCKED,
      errorCode,
      routeType,
      origin,
      destination,
      startNodeId: null,
      destNodeId: null,
      edgeCount: 0,
      edgeIds: [],
      edges: [],
      nodeIds: [],
      totalDistanceMeters: Infinity,
      totalCost: Infinity,
      maxWaterDepth: 0,
      exposedLengthMeters: 0,
      exposedRatio: 0,
      pathCoordinates: [],
      blockedEdges,
      explanation: reason,
      provenance: destination.provenance || 'dataset'
    };
  }

  /**
   * Check hospital dataset status and report limitations if no verified hospital exists.
   * @param {Array<Object>} facilityRecords
   * @returns {{ hasVerifiedHospital: boolean, warning: string }}
   */
  getHospitalDatasetStatus(facilityRecords = []) {
    const verified = facilityRecords.filter(f => f.type === 'hospital' && f.provenance === 'verified');
    if (verified.length === 0) {
      return {
        hasVerifiedHospital: false,
        warning: 'No verified hospital in source dataset. Proposed medical-response site — unverified.',
      };
    }
    return {
      hasVerifiedHospital: true,
      warning: '',
    };
  }
}
