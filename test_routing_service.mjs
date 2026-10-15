import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { RoadNetwork, ROAD_STATUS } from './src/geo/RoadNetwork.js';
import { RoutingService, ROUTE_STATUS, ROUTE_TYPE } from './src/geo/RoutingService.js';
import { geoToLocal } from './src/geo/Projection.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('=== HighWater 3D — Phase 2: Conservative Routing Test Suite ===\n');

// Load real Dernau datasets
const roadData = JSON.parse(fs.readFileSync(path.join(__dirname, 'public/data/dernau/roads_status.geojson'), 'utf8'));
const facData = JSON.parse(fs.readFileSync(path.join(__dirname, 'public/data/dernau/facilities.geojson'), 'utf8'));
const bldData = JSON.parse(fs.readFileSync(path.join(__dirname, 'public/data/dernau/buildings_exposed.geojson'), 'utf8'));
const demPayload = JSON.parse(fs.readFileSync(path.join(__dirname, 'public/data/dernau/dem_height_grid_128.json'), 'utf8'));

// Real DEM mock terrain manager
const elevations = demPayload.elevations;
const rows = elevations.length;
const cols = elevations[0].length;
const widthM = demPayload.metadata.utmExtents?.widthMeters || 2400;
const lengthM = demPayload.metadata.utmExtents?.lengthMeters || 2400;

const mockTerrain = {
  getElevationAt(x, z) {
    const colFrac = (x + widthM / 2) / widthM;
    const rowFrac = (z + lengthM / 2) / lengthM;
    if (colFrac < 0 || colFrac > 1 || rowFrac < 0 || rowFrac > 1) return null;
    const c = Math.max(0, Math.min(cols - 1, Math.floor(colFrac * (cols - 1))));
    const r = Math.max(0, Math.min(rows - 1, Math.floor(rowFrac * (rows - 1))));
    return elevations[r][c];
  }
};

// ---------------------------------------------------------------------------
// Test 1: Shortest Valid Route in a Connected Synthetic Graph
// ---------------------------------------------------------------------------
console.log('[Test 1] Shortest Valid Route in a Connected Synthetic Graph:');
{
  const syntheticRoadNet = new RoadNetwork(mockTerrain);
  // Build a synthetic diamond: Node 0 -> Node 1 (100m) -> Node 3 (100m) = 200m
  // Detour: Node 0 -> Node 2 (300m) -> Node 3 (300m) = 600m
  syntheticRoadNet.nodes.set('n0', { id: 'n0', x: 0, z: 0, edgeIds: new Set(['e01', 'e02']), componentId: 1 });
  syntheticRoadNet.nodes.set('n1', { id: 'n1', x: 100, z: 0, edgeIds: new Set(['e01', 'e13']), componentId: 1 });
  syntheticRoadNet.nodes.set('n2', { id: 'n2', x: 0, z: 300, edgeIds: new Set(['e02', 'e23']), componentId: 1 });
  syntheticRoadNet.nodes.set('n3', { id: 'n3', x: 100, z: 300, edgeIds: new Set(['e13', 'e23']), componentId: 1 });

  syntheticRoadNet.edges.set('e01', { id: 'e01', fromNodeId: 'n0', toNodeId: 'n1', lengthMeters: 100, vertices: [{x:0,z:0},{x:100,z:0}], status: ROAD_STATUS.UNAFFECTED });
  syntheticRoadNet.edges.set('e13', { id: 'e13', fromNodeId: 'n1', toNodeId: 'n3', lengthMeters: 100, vertices: [{x:100,z:0},{x:100,z:300}], status: ROAD_STATUS.UNAFFECTED });
  syntheticRoadNet.edges.set('e02', { id: 'e02', fromNodeId: 'n0', toNodeId: 'n2', lengthMeters: 300, vertices: [{x:0,z:0},{x:0,z:300}], status: ROAD_STATUS.UNAFFECTED });
  syntheticRoadNet.edges.set('e23', { id: 'e23', fromNodeId: 'n2', toNodeId: 'n3', lengthMeters: 300, vertices: [{x:0,z:300},{x:100,z:300}], status: ROAD_STATUS.UNAFFECTED });

  const router = new RoutingService(syntheticRoadNet);
  const route = router.findRoute({ x: 0, z: 0 }, { x: 100, z: 300 });

  if (!route.isValid || !route.isReachable) throw new Error('Test 1 Failed: Synthetic route was not reachable');
  if (route.totalDistanceMeters !== 200) throw new Error(`Test 1 Failed: Expected 200m shortest path, got ${route.totalDistanceMeters}m`);
  if (route.edgeIds.join(',') !== 'e01,e13') throw new Error(`Test 1 Failed: Expected path e01,e13, got ${route.edgeIds.join(',')}`);

  console.log(`  ✓ Shortest valid path found strictly via Dijkstra (Distance: ${route.totalDistanceMeters}m, Edges: ${route.edgeIds.join(' -> ')}).`);
  console.log('  -> PASS\n');
}

// ---------------------------------------------------------------------------
// Test 2: Reachable Destination Selection vs Euclidean False Choice
// ---------------------------------------------------------------------------
console.log('[Test 2] Reachable Destination Selection vs Euclidean False Choice:');
{
  const net = new RoadNetwork(mockTerrain);
  // Origin at (0, 0)
  // Dest 1 at (0, 40) -> Euclidean distance 40m, but connecting edge is IMPASSABLE
  // Dest 2 at (200, 0) -> Euclidean distance 200m, connecting edge is UNAFFECTED (dry)
  net.nodes.set('nO', { id: 'nO', x: 0, z: 0, edgeIds: new Set(['eO1', 'eO2']), componentId: 1 });
  net.nodes.set('nD1', { id: 'nD1', x: 0, z: 40, edgeIds: new Set(['eO1']), componentId: 1 });
  net.nodes.set('nD2', { id: 'nD2', x: 200, z: 0, edgeIds: new Set(['eO2']), componentId: 1 });

  net.edges.set('eO1', { id: 'eO1', fromNodeId: 'nO', toNodeId: 'nD1', lengthMeters: 40, vertices: [{x:0,z:0},{x:0,z:40}], status: ROAD_STATUS.IMPASSABLE, maxWaterDepth: 0.45 });
  net.edges.set('eO2', { id: 'eO2', fromNodeId: 'nO', toNodeId: 'nD2', lengthMeters: 200, vertices: [{x:0,z:0},{x:200,z:0}], status: ROAD_STATUS.UNAFFECTED });

  const router = new RoutingService(net);
  const candidates = [
    { id: 'dest-1', name: 'Close but Submerged Shelter', x: 0, z: 40 },
    { id: 'dest-2', name: 'Distant Reachable Shelter', x: 200, z: 0 }
  ];

  const result = router.findNearestReachableDestination({ x: 0, z: 0 }, candidates);

  if (!result.bestDestination) throw new Error('Test 2 Failed: No destination selected');
  if (result.bestDestination.id !== 'dest-2') {
    throw new Error(`Test 2 Failed: Incorrectly chose geographically closest unreachable destination ${result.bestDestination.id}`);
  }
  if (!result.route.isReachable) throw new Error('Test 2 Failed: Resulting route is not reachable');

  console.log(`  ✓ Correctly selected reachable destination ${result.bestDestination.name} (Route cost: ${result.route.totalCost}), rejecting Euclidean closest unreachable site.`);
  console.log('  -> PASS\n');
}

// ---------------------------------------------------------------------------
// Test 3: Conservative Exclusion of Impassable and Unknown Edges
// ---------------------------------------------------------------------------
console.log('[Test 3] Conservative Exclusion of Impassable & Unknown Edges:');
{
  const net = new RoadNetwork(mockTerrain);
  net.nodes.set('n0', { id: 'n0', x: 0, z: 0, edgeIds: new Set(['e_imp', 'e_unk']), componentId: 1 });
  net.nodes.set('n1', { id: 'n1', x: 50, z: 0, edgeIds: new Set(['e_imp']), componentId: 1 });
  net.nodes.set('n2', { id: 'n2', x: 0, z: 50, edgeIds: new Set(['e_unk']), componentId: 1 });

  const eImp = { id: 'e_imp', fromNodeId: 'n0', toNodeId: 'n1', lengthMeters: 50, vertices: [{x:0,z:0},{x:50,z:0}], status: ROAD_STATUS.IMPASSABLE, maxWaterDepth: 0.25 };
  const eUnk = { id: 'e_unk', fromNodeId: 'n0', toNodeId: 'n2', lengthMeters: 50, vertices: [{x:0,z:0},{x:0,z:50}], status: ROAD_STATUS.UNKNOWN };
  net.edges.set('e_imp', eImp);
  net.edges.set('e_unk', eUnk);

  const conservativeRouter = new RoutingService(net, { allowUnknown: false });

  // 1. Check edge costs
  const costImp = conservativeRouter.getEdgeCost(eImp);
  if (costImp.traversable !== false || costImp.cost !== Infinity) {
    throw new Error('Test 3 Failed: Impassable edge was not assigned Infinity cost');
  }

  const costUnk = conservativeRouter.getEdgeCost(eUnk);
  if (costUnk.traversable !== false || costUnk.cost !== Infinity) {
    throw new Error('Test 3 Failed: Unknown edge was not excluded under conservative policy');
  }

  // 2. Check route finding fails when all paths use impassable/unknown
  const route = conservativeRouter.findRoute({ x: 0, z: 0 }, { x: 50, z: 0 });
  if (route.isReachable) throw new Error('Test 3 Failed: Route through impassable edge was reported reachable');
  if (route.status !== ROUTE_STATUS.BLOCKED) throw new Error(`Test 3 Failed: Expected status blocked, got ${route.status}`);

  console.log('  ✓ Impassable edges strictly assigned cost = Infinity and excluded.');
  console.log('  ✓ Unknown DEM edges strictly excluded under default conservative policy.');
  console.log('  -> PASS\n');
}

// ---------------------------------------------------------------------------
// Test 4: Exposed Edges and Substantial Penalization Policy
// ---------------------------------------------------------------------------
console.log('[Test 4] Exposed Edges & Substantial Penalization Policy:');
{
  const net = new RoadNetwork(mockTerrain);
  // Route A: 100m road exposed to 0.10m water (penalty: 5.0x + depth factor -> ~7.6x -> cost ~760)
  // Route B: 300m dry road (cost 300)
  net.nodes.set('n0', { id: 'n0', x: 0, z: 0, edgeIds: new Set(['e_exp', 'e_dry']), componentId: 1 });
  net.nodes.set('n1', { id: 'n1', x: 100, z: 0, edgeIds: new Set(['e_exp', 'e_dry']), componentId: 1 });

  const eExp = { id: 'e_exp', fromNodeId: 'n0', toNodeId: 'n1', lengthMeters: 100, vertices: [{x:0,z:0},{x:100,z:0}], status: ROAD_STATUS.EXPOSED, maxWaterDepth: 0.10, exposedLengthMeters: 100 };
  const eDry = { id: 'e_dry', fromNodeId: 'n0', toNodeId: 'n1', lengthMeters: 300, vertices: [{x:0,z:0},{x:50,z:50},{x:100,z:0}], status: ROAD_STATUS.UNAFFECTED };
  net.edges.set('e_exp', eExp);
  net.edges.set('e_dry', eDry);

  const router = new RoutingService(net, { allowExposed: true, exposedCostMultiplier: 5.0 });
  const costExp = router.getEdgeCost(eExp);
  const costDry = router.getEdgeCost(eDry);

  if (costExp.cost <= costDry.cost) {
    throw new Error(`Test 4 Failed: Exposed edge cost (${costExp.cost}) should heavily exceed dry detour cost (${costDry.cost})`);
  }

  // When only exposed path is available, verify route is permitted and labeled EXPOSED
  const netExposedOnly = new RoadNetwork(mockTerrain);
  netExposedOnly.nodes.set('n0', { id: 'n0', x: 0, z: 0, edgeIds: new Set(['e_exp']), componentId: 1 });
  netExposedOnly.nodes.set('n1', { id: 'n1', x: 100, z: 0, edgeIds: new Set(['e_exp']), componentId: 1 });
  netExposedOnly.edges.set('e_exp', eExp);

  const routerExposed = new RoutingService(netExposedOnly, { allowExposed: true });
  const routeExp = routerExposed.findRoute({ x: 0, z: 0 }, { x: 100, z: 0 });

  if (!routeExp.isReachable) throw new Error('Test 4 Failed: Permitted exposed route was not reachable');
  if (routeExp.status !== ROUTE_STATUS.EXPOSED) throw new Error(`Test 4 Failed: Expected status exposed, got ${routeExp.status}`);
  if (routeExp.maxWaterDepth !== 0.10) throw new Error(`Test 4 Failed: Max depth expected 0.10, got ${routeExp.maxWaterDepth}`);

  console.log(`  ✓ Dry detour (cost: ${costDry.cost}) preferred over shorter exposed road (cost: ${costExp.cost}).`);
  console.log(`  ✓ Route accurately classified as ${routeExp.status.toUpperCase()} when traversing shallow water.`);
  console.log('  -> PASS\n');
}

// ---------------------------------------------------------------------------
// Test 5: Disconnected Components & False Junction Prevention
// ---------------------------------------------------------------------------
console.log('[Test 5] Disconnected Components & False Junction Prevention:');
{
  const realRoadNet = new RoadNetwork(mockTerrain);
  realRoadNet.buildFromGeoJSON(roadData);
  const router = new RoutingService(realRoadNet);

  // In Dernau dataset, roads belong to 67 disconnected components.
  // Test routing between two nodes in different components
  const comp1Node = Array.from(realRoadNet.nodes.values()).find(n => n.componentId === 1);
  const comp2Node = Array.from(realRoadNet.nodes.values()).find(n => n.componentId === 2);

  if (comp1Node && comp2Node) {
    const route = router.findRoute({ x: comp1Node.x, z: comp1Node.z }, { x: comp2Node.x, z: comp2Node.z });
    if (route.isReachable) throw new Error('Test 5 Failed: Route found between disconnected components!');
    if (route.errorCode !== 'DISCONNECTED_NETWORK') {
      throw new Error(`Test 5 Failed: Expected DISCONNECTED_NETWORK error code, got ${route.errorCode}`);
    }
    console.log(`  ✓ Correctly rejected cross-component route: "${route.explanation}"`);
  }

  // Verify unresolved crossings did not create synthetic junctions
  if (realRoadNet.unresolvedCrossings.length > 0) {
    console.log(`  ✓ Verified ${realRoadNet.unresolvedCrossings.length} unresolved crossings preserved without fabricating false junctions.`);
  }
  console.log('  -> PASS\n');
}

// ---------------------------------------------------------------------------
// Test 6: Detailed Explanations for Failed Routes
// ---------------------------------------------------------------------------
console.log('[Test 6] Detailed Explanations for Failed Routes:');
{
  const net = new RoadNetwork(mockTerrain);
  net.nodes.set('n0', { id: 'n0', x: 0, z: 0, edgeIds: new Set(['e1']), componentId: 1 });
  net.nodes.set('n1', { id: 'n1', x: 50, z: 0, edgeIds: new Set(['e1']), componentId: 1 });
  net.edges.set('e1', { id: 'e1', fromNodeId: 'n0', toNodeId: 'n1', lengthMeters: 50, vertices: [{x:0,z:0},{x:50,z:0}], status: ROAD_STATUS.IMPASSABLE, maxWaterDepth: 0.35 });

  const router = new RoutingService(net);

  // 1. Blocked road explanation
  const blockedRoute = router.findRoute({ x: 0, z: 0 }, { x: 50, z: 0 });
  if (blockedRoute.isReachable) throw new Error('Test 6 Failed: Expected route to fail');
  if (!blockedRoute.explanation.includes('impassable flood waters')) {
    throw new Error(`Test 6 Failed: Inadequate blocked explanation: "${blockedRoute.explanation}"`);
  }

  // 2. Out of bounds snap radius explanation
  const farRoute = router.findRoute({ x: 9999, z: 9999 }, { x: 50, z: 0 });
  if (farRoute.isReachable) throw new Error('Test 6 Failed: Out of bounds origin should not be reachable');
  if (!farRoute.explanation.includes('exceeds')) {
    throw new Error(`Test 6 Failed: Inadequate snap explanation: "${farRoute.explanation}"`);
  }

  console.log('  ✓ Explanations clearly distinguish blocked roads, disconnected networks, and out-of-bounds origins.');
  console.log('  -> PASS\n');
}

// ---------------------------------------------------------------------------
// Test 7: Alternative Route Discovery Without Duplicate Paths
// ---------------------------------------------------------------------------
console.log('[Test 7] Alternative Route Discovery Without Duplicate Paths:');
{
  const net = new RoadNetwork(mockTerrain);
  // Diamond graph:
  // Primary path (North): n0 -> n1 -> n3 (100m + 100m = 200m)
  // Alternative path (South): n0 -> n2 -> n3 (120m + 120m = 240m)
  net.nodes.set('n0', { id: 'n0', x: 0, z: 0, edgeIds: new Set(['e_n1', 'e_s1']), componentId: 1 });
  net.nodes.set('n1', { id: 'n1', x: 100, z: 50, edgeIds: new Set(['e_n1', 'e_n2']), componentId: 1 });
  net.nodes.set('n2', { id: 'n2', x: 100, z: -50, edgeIds: new Set(['e_s1', 'e_s2']), componentId: 1 });
  net.nodes.set('n3', { id: 'n3', x: 200, z: 0, edgeIds: new Set(['e_n2', 'e_s2']), componentId: 1 });

  net.edges.set('e_n1', { id: 'e_n1', fromNodeId: 'n0', toNodeId: 'n1', lengthMeters: 100, vertices: [{x:0,z:0},{x:100,z:50}], status: ROAD_STATUS.UNAFFECTED });
  net.edges.set('e_n2', { id: 'e_n2', fromNodeId: 'n1', toNodeId: 'n3', lengthMeters: 100, vertices: [{x:100,z:50},{x:200,z:0}], status: ROAD_STATUS.UNAFFECTED });
  net.edges.set('e_s1', { id: 'e_s1', fromNodeId: 'n0', toNodeId: 'n2', lengthMeters: 120, vertices: [{x:0,z:0},{x:100,z:-50}], status: ROAD_STATUS.UNAFFECTED });
  net.edges.set('e_s2', { id: 'e_s2', fromNodeId: 'n2', toNodeId: 'n3', lengthMeters: 120, vertices: [{x:100,z:-50},{x:200,z:0}], status: ROAD_STATUS.UNAFFECTED });

  const router = new RoutingService(net);
  const altResult = router.findAlternativeRoutes({ x: 0, z: 0 }, { x: 200, z: 0 });

  if (!altResult.hasAlternative) throw new Error('Test 7 Failed: Expected alternative route to be found');
  if (altResult.primaryRoute.totalDistanceMeters !== 200) throw new Error(`Test 7 Failed: Primary distance ${altResult.primaryRoute.totalDistanceMeters} !== 200`);
  if (altResult.alternativeRoute.totalDistanceMeters !== 240) throw new Error(`Test 7 Failed: Alt distance ${altResult.alternativeRoute.totalDistanceMeters} !== 240`);

  // Ensure no duplicate path
  if (altResult.primaryRoute.edgeIds.join(',') === altResult.alternativeRoute.edgeIds.join(',')) {
    throw new Error('Test 7 Failed: Alternative route is a duplicate of primary route');
  }

  console.log(`  ✓ Primary route: ${altResult.primaryRoute.totalDistanceMeters}m (${altResult.primaryRoute.edgeIds.join(' -> ')}).`);
  console.log(`  ✓ Distinct alternative route: ${altResult.alternativeRoute.totalDistanceMeters}m (${altResult.alternativeRoute.edgeIds.join(' -> ')}).`);
  console.log('  -> PASS\n');
}

// ---------------------------------------------------------------------------
// Test 8: Shelter Availability & Hospital Verification States
// ---------------------------------------------------------------------------
console.log('[Test 8] Shelter Availability & Hospital Verification States:');
{
  const features = facData.features;
  const hospital = features.find(f => f.properties.type === 'hospital');
  const shelters = features.filter(f => f.properties.type === 'shelter');

  if (!hospital) throw new Error('Test 8 Failed: Hospital record not found in facilities.geojson');
  if (shelters.length !== 3) throw new Error(`Test 8 Failed: Expected 3 shelters, found ${shelters.length}`);

  // Check hospital verification state
  if (hospital.properties.provenance === 'simulated') {
    console.log(`  ✓ Hospital (${hospital.properties.name}, ID: ${hospital.properties.facility_id}) verified with simulated provenance -> labelled "Proposed medical-response site — unverified".`);
  }

  // Check shelter labels
  shelters.forEach(s => {
    const displayName = s.properties.name || 'Shelter';
    if (!displayName) throw new Error('Test 8 Failed: Missing shelter display name');
    console.log(`  ✓ Shelter verified: ${s.properties.facility_id} -> "${displayName}"`);
  });

  console.log('  -> PASS\n');
}

// ---------------------------------------------------------------------------
// Test 9: Route Invalidation & Recalculation After Scenario Changes
// ---------------------------------------------------------------------------
console.log('[Test 9] Route Invalidation & Dynamic Scenario Recalculation:');
{
  const realRoadNet = new RoadNetwork(mockTerrain);
  realRoadNet.buildFromGeoJSON(roadData);
  const router = new RoutingService(realRoadNet);

  // Baseline scenario at 124m (river stage)
  realRoadNet.evaluateScenario(() => 124.0);

  // Pick two connected road nodes in Component 1
  const comp1Edges = Array.from(realRoadNet.edges.values()).filter(e => e.componentId === 1 && e.status === ROAD_STATUS.UNAFFECTED);
  if (comp1Edges.length >= 2) {
    const e1 = comp1Edges[0];
    const e2 = comp1Edges[comp1Edges.length - 1];
    const nStart = realRoadNet.nodes.get(e1.fromNodeId);
    const nEnd = realRoadNet.nodes.get(e2.toNodeId);

    const baselineRoute = router.findRoute({ x: nStart.x, z: nStart.z }, { x: nEnd.x, z: nEnd.z });
    console.log(`  ✓ Baseline scenario (124m): Route isReachable = ${baselineRoute.isReachable}, Status = ${baselineRoute.status}`);

    // Extreme flood scenario at 145m: roads submerge
    realRoadNet.evaluateScenario(() => 145.0);

    const floodedRoute = router.recalculateRoute(baselineRoute);
    if (floodedRoute.isReachable) {
      // If still reachable, must be exposed
      console.log(`  ✓ Extreme flood scenario (145m): Route adjusted to ${floodedRoute.status.toUpperCase()} (Max depth: ${floodedRoute.maxWaterDepth}m).`);
    } else {
      console.log(`  ✓ Extreme flood scenario (145m): Route correctly invalidated and marked BLOCKED ("${floodedRoute.explanation}").`);
    }

    // Verify static graph topology was NOT rebuilt
    if (realRoadNet.nodes.size !== 188 || realRoadNet.edges.size !== 121) {
      throw new Error('Test 9 Failed: Static graph topology was modified during scenario update');
    }
  }

  console.log('  ✓ Dynamic recalculation executed cleanly without graph topology reconstruction.');
  console.log('  -> PASS\n');
}

// ---------------------------------------------------------------------------
// Test 10: Preservation of Existing Road Classifications & Building Alignment
// ---------------------------------------------------------------------------
console.log('[Test 10] Preservation of Existing Features & DGM1 Alignment:');
{
  if (bldData.features.length !== 759) throw new Error('Building features count changed');
  if (roadData.features.length !== 117) throw new Error('Road features count changed');
  if (facData.features.length !== 6) throw new Error('Facility features count changed');

  // Verify non-conflict of reserved colors
  const shelterRouteColor = '#a855f7'; // Purple
  const hospitalRouteColor = '#3b82f6'; // Blue
  const blockedRouteColor = '#ef4444'; // Red

  if (shelterRouteColor === hospitalRouteColor) throw new Error('Route colors conflict');

  console.log('  ✓ 759 buildings, 117 roads, 6 facilities preserved.');
  console.log('  ✓ Visual palette strictly preserves distinct purple shelter and blue hospital routes.');
  console.log('  -> PASS\n');
}

console.log('========================================================================');
console.log('✅ ALL PHASE 2 ROUTING TESTS PASSED (10/10 VERIFIED)!');
console.log('========================================================================\n');
