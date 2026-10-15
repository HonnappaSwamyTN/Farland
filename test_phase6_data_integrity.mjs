import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  ScenarioManager,
  escapeCSV,
  escapeHTML,
  DEFAULT_REFERENCE_SCENARIOS,
} from './src/geo/ScenarioManager.js';
import {
  BuildingClassifier,
  BUILDING_EXPOSURE,
  ACCESS_STATUS,
  RISK_TIER,
} from './src/geo/BuildingClassifier.js';
import { ScenarioComparisonService } from './src/geo/ScenarioComparisonService.js';
import { RoadNetwork, ROAD_STATUS } from './src/geo/RoadNetwork.js';
import { RoutingService, ROUTE_STATUS } from './src/geo/RoutingService.js';
import { ProposedSiteService } from './src/geo/ProposedSiteService.js';
import { geoToLocal } from './src/geo/Projection.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('=== HighWater 3D — Phase 6: Data Integrity, Uncertainty & Analysis Consistency Test Suite ===\n');

// -------------------------------------------------------------------------------------------------
// Mock Browser Environment for Node.js
// -------------------------------------------------------------------------------------------------
class MockLocalStorage {
  constructor() {
    this.store = new Map();
  }
  getItem(key) {
    return this.store.has(key) ? this.store.get(key) : null;
  }
  setItem(key, value) {
    this.store.set(key, String(value));
  }
  removeItem(key) {
    this.store.delete(key);
  }
  clear() {
    this.store.clear();
  }
}

globalThis.window = {
  localStorage: new MockLocalStorage(),
  open: () => ({ document: { write: () => {}, close: () => {} } }),
};

// -------------------------------------------------------------------------------------------------
// Load Real Dernau Datasets
// -------------------------------------------------------------------------------------------------
const roadGeoJson = JSON.parse(fs.readFileSync(path.join(__dirname, 'public/data/dernau/roads_status.geojson'), 'utf8'));
const facGeoJson = JSON.parse(fs.readFileSync(path.join(__dirname, 'public/data/dernau/facilities.geojson'), 'utf8'));
const bldGeoJson = JSON.parse(fs.readFileSync(path.join(__dirname, 'public/data/dernau/buildings_exposed.geojson'), 'utf8'));
const demPayload = JSON.parse(fs.readFileSync(path.join(__dirname, 'public/data/dernau/dem_height_grid_128.json'), 'utf8'));

const elevations = demPayload.elevations;
const rows = elevations.length;
const cols = elevations[0].length;
const widthM = demPayload.metadata.utmExtents?.widthMeters || 2400;
const lengthM = demPayload.metadata.utmExtents?.lengthMeters || 2400;

const mockTerrain = {
  getElevationAt(x, z) {
    if (typeof x !== 'number' || typeof z !== 'number' || isNaN(x) || isNaN(z)) return null;
    const colFrac = (x + widthM / 2) / widthM;
    const rowFrac = (z + lengthM / 2) / lengthM;
    if (colFrac < 0 || colFrac > 1 || rowFrac < 0 || rowFrac > 1) return null;
    const c = Math.max(0, Math.min(cols - 1, Math.floor(colFrac * (cols - 1))));
    const r = Math.max(0, Math.min(rows - 1, Math.floor(rowFrac * (rows - 1))));
    const val = elevations[r]?.[c];
    return typeof val === 'number' && !isNaN(val) ? val : null;
  }
};

const buildingFeatures = bldGeoJson.features.map((f, i) => {
  const coords = f.geometry.coordinates[0][0];
  const local = geoToLocal(coords[0], coords[1]);
  const elev = mockTerrain.getElevationAt(local.x, local.z) ?? 130.0;
  return {
    id: f.id || `bld-${i}`,
    center: { x: local.x, z: local.z },
    baseElevationM: elev,
    areaSqM: f.properties?.area_sqm || 120,
    flooded: f.properties?.flooded || false,
    geometry: f.geometry,
  };
});

const facilityFeatures = facGeoJson.features.map(f => {
  const local = geoToLocal(f.geometry.coordinates[0], f.geometry.coordinates[1]);
  const elev = mockTerrain.getElevationAt(local.x, local.z) ?? (f.properties.type === 'hospital' ? 140.0 : 130.0);
  return {
    id: f.properties.id || f.id,
    name: f.properties.name,
    type: f.properties.type || 'shelter',
    provenance: f.properties.provenance || 'simulated',
    center: { x: local.x, z: local.z },
    elevationM: elev,
    position: { x: local.x, y: elev, z: local.z },
    geometry: f.geometry,
  };
});

const roadNetwork = new RoadNetwork(mockTerrain);
roadNetwork.buildFromGeoJSON(roadGeoJson);
const routingService = new RoutingService(roadNetwork);
const buildingClassifier = new BuildingClassifier(mockTerrain);
const comparisonService = new ScenarioComparisonService(mockTerrain, roadNetwork, routingService, buildingClassifier);
comparisonService.initStaticAccess(buildingFeatures, facilityFeatures);

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✓ ${message}`);
    passed++;
  } else {
    console.error(`  ✕ FAIL: ${message}`);
    failed++;
  }
}

// -------------------------------------------------------------------------------------------------
// Test 1: Missing or Invalid DEM Elevations (NoData Preservation)
// -------------------------------------------------------------------------------------------------
console.log('--- Test 1: Missing or Invalid DEM Elevations (NoData Preservation) ---');
{
  const missingTerrain = {
    getElevationAt(x, z) {
      if (x === -999) return null;
      if (x === -998) return NaN;
      if (x === -997) return -9999;
      if (x === -996) return 0;
      return 130.0;
    }
  };

  const classifier = new BuildingClassifier(missingTerrain);

  const bldNull = { id: 'bld-null', center: { x: -999, z: 0 }, baseElevationM: null };
  const bldNaN = { id: 'bld-nan', center: { x: -998, z: 0 }, baseElevationM: NaN };
  const bldNoData = { id: 'bld-nodata', center: { x: -997, z: 0 }, baseElevationM: -9999 };
  const bldZero = { id: 'bld-zero', center: { x: -996, z: 0 }, baseElevationM: 0 };

  const resNull = classifier.classifyBuilding(bldNull, 128.5);
  const resNaN = classifier.classifyBuilding(bldNaN, 128.5);
  const resNoData = classifier.classifyBuilding(bldNoData, 128.5);
  const resZero = classifier.classifyBuilding(bldZero, 128.5);

  assert(resNull.category === BUILDING_EXPOSURE.UNKNOWN, 'Null elevation produces BUILDING_EXPOSURE.UNKNOWN');
  assert(resNull.waterDepth === null, 'Null elevation has waterDepth === null, never 0.00m');
  assert(resNull.isValid === false, 'Null elevation marked isValid = false');

  assert(resNaN.category === BUILDING_EXPOSURE.UNKNOWN, 'NaN elevation produces UNKNOWN');
  assert(resNoData.category === BUILDING_EXPOSURE.UNKNOWN, '-9999 NoData elevation produces UNKNOWN');
  assert(resZero.category === BUILDING_EXPOSURE.UNKNOWN, '<=0 invalid elevation produces UNKNOWN');

  // Multi-factor risk uncertainty penalty
  const riskNull = classifier.calculateBuildingRisk(resNull);
  assert(riskNull.isUnknown === true, 'Risk evaluation flags isUnknown = true');
  assert(riskNull.priorityTier === RISK_TIER.UNKNOWN, 'Priority tier is UNKNOWN for missing DEM');
  assert(riskNull.subScores.floodExposure === 30, 'Assigns 30-point data uncertainty penalty, not 0 points (dry)');

  // Road network edge unknown classification when DEM is missing
  const allMissingTerrain = {
    getElevationAt() {
      return null;
    }
  };
  const edgeNetwork = new RoadNetwork(allMissingTerrain);
  edgeNetwork.buildFromGeoJSON({
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        id: 'road-missing',
        properties: { id: 'road-missing' },
        geometry: {
          type: 'LineString',
          coordinates: [[7.045, 50.535], [7.046, 50.536]],
        },
      },
    ],
  });

  edgeNetwork.evaluateScenario(128.5);
  const evaluatedEdge = Array.from(edgeNetwork.edges.values())[0];
  assert(evaluatedEdge && evaluatedEdge.status === ROAD_STATUS.UNKNOWN, 'Road edge with missing DEM elevations classifies as ROAD_STATUS.UNKNOWN');
  assert(evaluatedEdge && evaluatedEdge.statusReason.includes('Insufficient or unavailable terrain/water elevation data'), 'Records clear statusReason for unknown road');
}

// -------------------------------------------------------------------------------------------------
// Test 2: Water-Level Changes and Dynamic Scenario Switching Consistency
// -------------------------------------------------------------------------------------------------
console.log('\n--- Test 2: Water-Level Changes & Dynamic Scenario Switching Consistency ---');
{
  comparisonService.computeBaseline(124.0);
  assert(comparisonService.baselineWaterLevel === 124.0, 'Baseline established at 124.0m MSL');

  // Step 1: Normal 124m baseline
  const eval124 = comparisonService.evaluateScenario(124.0);
  assert(eval124.comparison.buildings.newlyAffectedCount === 0, 'No newly affected buildings at baseline stage (124.0m)');
  assert(eval124.comparison.roads.newlyImpassable === 0, 'No newly impassable roads at baseline stage (124.0m)');

  // Step 2: Flood stage 128.5m
  const eval128 = comparisonService.evaluateScenario(128.5);
  assert(eval128.comparison.buildings.newlyAffectedCount > 0, 'Newly affected buildings detected at 128.5m');
  assert(eval128.comparison.roads.newlyImpassable > 0, 'Newly impassable roads detected at 128.5m');
  assert(eval128.comparison.currentWaterLevel === 128.5, 'currentWaterLevel updated to 128.5m');

  // Step 3: Extreme flood stage 133.0m
  const eval133 = comparisonService.evaluateScenario(133.0);
  assert(eval133.comparison.buildings.newlyAffectedCount > eval128.comparison.buildings.newlyAffectedCount, 'Newly affected buildings scale monotonically with water level');
  assert(eval133.comparison.roads.newlyImpassable >= eval128.comparison.roads.newlyImpassable, 'Newly impassable roads scale monotonically');

  // Step 4: Return to 124m baseline
  const evalReset = comparisonService.evaluateScenario(124.0);
  assert(evalReset.comparison.buildings.newlyAffectedCount === 0, 'Cleanly returns to 0 newly affected buildings upon reset');
  assert(evalReset.comparison.roads.newlyImpassable === 0, 'Cleanly returns to 0 newly impassable roads upon reset');
}

// -------------------------------------------------------------------------------------------------
// Test 3: Unknown vs Confirmed Dry Conditions (Denominator & Routing Safety)
// -------------------------------------------------------------------------------------------------
console.log('\n--- Test 3: Unknown vs Confirmed Dry Conditions ---');
{
  // Mix of valid and unknown buildings with synthetic terrain to ensure b3 and b4 stay unknown
  const mixedTerrain = {
    getElevationAt(x, z) {
      if (x === 0 && z === 0) return 135.0; // dry (b1)
      if (x === 10 && z === 10) return 126.0; // flooded (b2)
      return null; // b3 and b4 missing DEM
    }
  };
  const mixedClassifier = new BuildingClassifier(mixedTerrain);
  const mixedBuildings = [
    { id: 'b1', center: { x: 0, z: 0 }, baseElevationM: 135.0 }, // dry
    { id: 'b2', center: { x: 10, z: 10 }, baseElevationM: 126.0 }, // flooded (128.5m)
    { id: 'b3', center: { x: 9999, z: 9999 }, baseElevationM: null },  // unknown
    { id: 'b4', center: { x: 9998, z: 9998 }, baseElevationM: -9999 }, // unknown
  ];

  const testCompService = new ScenarioComparisonService(mixedTerrain, roadNetwork, routingService, mixedClassifier);
  testCompService.initStaticAccess(mixedBuildings, facilityFeatures);
  testCompService.computeBaseline(124.0);

  const res = testCompService.evaluateScenario(128.5);
  const b = res.comparison.buildings;

  assert(b.totalEvaluated === 4, 'totalEvaluated is 4');
  assert(b.validDenominator === 2, 'validDenominator strictly excludes unknown buildings (2 valid)');
  assert(b.unknownCount === 2, 'unknownCount is 2');
  assert(b.newlyAffectedCount === 1, 'newlyAffectedCount is 1 (only b2)');
  assert(b.newlyAffectedPercent === 50.0, 'newlyAffectedPercent is 50.0% (1/2 valid), NOT diluted to 25% (1/4 total)');

  // Unknown road edges must block route traversal
  const customRoads = new RoadNetwork(mockTerrain);
  customRoads.nodes.set('node-a', { id: 'node-a', x: 0, z: 0, edgeIds: new Set(['edge-1']) });
  customRoads.nodes.set('node-b', { id: 'node-b', x: 100, z: 0, edgeIds: new Set(['edge-1', 'edge-2']) });
  customRoads.nodes.set('node-c', { id: 'node-c', x: 200, z: 0, edgeIds: new Set(['edge-2']) });

  customRoads.edges.set('edge-1', {
    id: 'edge-1',
    fromNodeId: 'node-a',
    toNodeId: 'node-b',
    lengthMeters: 100,
    status: ROAD_STATUS.UNKNOWN, // missing DEM
    points: [{ x: 0, z: 0 }, { x: 100, z: 0 }],
  });
  customRoads.edges.set('edge-2', {
    id: 'edge-2',
    fromNodeId: 'node-b',
    toNodeId: 'node-c',
    lengthMeters: 100,
    status: ROAD_STATUS.UNAFFECTED,
    points: [{ x: 100, z: 0 }, { x: 200, z: 0 }],
  });

  const customRouting = new RoutingService(customRoads);
  const route = customRouting.findRoute('node-a', 'node-c');
  assert(route.status === ROUTE_STATUS.BLOCKED, 'Conservative routing strictly blocks route over unknown edge');
  assert(!route.isTraversable, 'Route over unknown road is not traversable');
}

// -------------------------------------------------------------------------------------------------
// Test 4: Baseline Network Disconnections vs Flood-Caused Route Loss
// -------------------------------------------------------------------------------------------------
console.log('\n--- Test 4: Baseline Network Disconnections vs Flood-Caused Route Loss ---');
{
  comparisonService.computeBaseline(124.0);
  const res = comparisonService.evaluateScenario(128.5);

  const disconnectedBuildings = res.rankedBuildings.filter(b => b.access.status === ACCESS_STATUS.DISCONNECTED_IN_SOURCE);
  assert(disconnectedBuildings.length > 0, `Identified ${disconnectedBuildings.length} buildings disconnected in baseline source data`);

  // Verify that disconnected_in_source buildings are NOT counted as route_lost
  for (const bld of disconnectedBuildings) {
    assert(bld.access.status !== ACCESS_STATUS.ROUTE_LOST, `Building ${bld.id} on isolated component is NOT falsely marked ROUTE_LOST`);
  }

  // Verify route_lost specifically when a valid corridor is severed by flood water
  const corridorGeoJson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        id: 'road-corridor-1',
        properties: { id: 'road-corridor-1' },
        geometry: {
          type: 'LineString',
          coordinates: [[7.045, 50.533], [7.047, 50.533]],
        },
      },
    ],
  };
  const corridorRoadNet = new RoadNetwork(mockTerrain);
  corridorRoadNet.buildFromGeoJSON(corridorGeoJson);
  const edge = Array.from(corridorRoadNet.edges.values())[0];
  edge.minElevation = 125.0;
  edge.maxElevation = 125.0;
  for (const s of edge.samples) {
    s.groundElevation = 125.0;
    s.isNoData = false;
  }
  const node1 = Array.from(corridorRoadNet.nodes.values())[0];
  const node2 = Array.from(corridorRoadNet.nodes.values())[1];
  const corridorRouting = new RoutingService(corridorRoadNet);
  const corridorClassifier = new BuildingClassifier(mockTerrain);
  const corridorCompService = new ScenarioComparisonService(mockTerrain, corridorRoadNet, corridorRouting, corridorClassifier);

  const corridorBld = { id: 'bld-corridor', center: { x: node1.x, z: node1.z }, baseElevationM: 130.0 };
  const corridorShelter = { id: 'sh-corridor', name: 'Corridor Shelter', type: 'shelter', center: { x: node2.x, z: node2.z }, elevationM: 130.0, provenance: 'simulated' };
  corridorCompService.initStaticAccess([corridorBld], [corridorShelter]);
  corridorCompService.computeBaseline(124.0); // Road at 125m is dry at 124m baseline

  const corridorFloodRes = corridorCompService.evaluateScenario(126.0); // Road submerged at 126m (depth 1.0m > 0.15m)
  const evaluatedCorridorBld = corridorFloodRes.rankedBuildings.find(b => b.id === 'bld-corridor');
  assert(evaluatedCorridorBld.access.status === ACCESS_STATUS.ROUTE_LOST, 'Building with baseline route severed by flood water is classified as ROUTE_LOST');
  assert(evaluatedCorridorBld.access.impassableEdgeIds.includes('road-corridor-1'), 'Blocking impassable edge recorded in access evaluation');

  // Verify shelter isolation logic: pre-existing network disconnections are NOT counted as flood-caused failures
  const isolatedShelters = res.comparison.shelterAssessments.filter(s => s.accessStatus === 'isolated');
  const disconnectedShelters = res.comparison.shelterAssessments.filter(s => s.accessStatus === 'disconnected');

  assert(res.comparison.shelters.isolatedByRoads === isolatedShelters.length, 'isolatedByRoads count matches flood-isolated shelters');
  assert(res.comparison.shelters.disconnectedInSource === disconnectedShelters.length, 'disconnectedInSource tracks baseline disconnections');

  // Verify road passability delta excludes roads already impassable or unknown at baseline
  assert(typeof res.comparison.roads.baselineImpassable === 'number', 'Tracks baselineImpassable roads');
  assert(typeof res.comparison.roads.newlyImpassable === 'number', 'Tracks newlyImpassable roads');
  assert(res.comparison.roads.newlyImpassable <= res.comparison.roads.currentImpassable - res.comparison.roads.baselineImpassable,
    'Newly impassable roads strictly <= current impassable minus baseline impassable');
}

// -------------------------------------------------------------------------------------------------
// Test 5: Missing or Unverified Facilities Provenance
// -------------------------------------------------------------------------------------------------
console.log('\n--- Test 5: Missing or Unverified Facilities Provenance ---');
{
  // 1. Verify simulated shelters
  for (const fac of facilityFeatures) {
    if (fac.type === 'shelter') {
      assert(fac.provenance === 'simulated' || fac.isVerified === false, `Shelter ${fac.id} has unverified simulated provenance`);
    }
  }

  // 2. Verify hospital status warning in BuildingClassifier
  const testBldCls = buildingClassifier.classifyBuilding(buildingFeatures[0], 124.0);
  const risk = buildingClassifier.calculateBuildingRisk(testBldCls);
  assert(risk.hospitalStatus.hasVerifiedHospital === false, 'hasVerifiedHospital is strictly false');
  assert(risk.hospitalStatus.warning.includes('No verified municipal hospital'), 'Warns about lack of verified hospital in dataset');
  assert(risk.hospitalStatus.warning.includes('Absence in research dataset does not prove'),
    'Explicitly clarifies that absence in research dataset does not prove real-world lack of emergency healthcare');

  // 3. Verify proposed candidate sites service
  const propService = new ProposedSiteService(mockTerrain, roadNetwork);
  const evaluatedSites = propService.evaluateSites(128.5);
  assert(evaluatedSites.length === 4, 'Evaluated all 4 proposed candidate sites');
  for (const site of evaluatedSites) {
    assert(site.isProposed === true, `Site ${site.id} marked isProposed = true`);
    assert(site.isVerifiedFacility === false, `Site ${site.id} marked isVerifiedFacility = false`);
    assert(site.disclaimer.includes('Proposed candidate site only'), `Site ${site.id} contains unverified disclaimer`);
  }
}

// -------------------------------------------------------------------------------------------------
// Test 6: Zero-Denominator Percentages Safety
// -------------------------------------------------------------------------------------------------
console.log('\n--- Test 6: Zero-Denominator Percentages Safety ---');
{
  const emptyCompService = new ScenarioComparisonService(mockTerrain, roadNetwork, routingService, buildingClassifier);
  emptyCompService.initStaticAccess([], []);
  emptyCompService.computeBaseline(124.0);
  const emptyRes = emptyCompService.evaluateScenario(128.5);

  assert(emptyRes.comparison.buildings.validDenominator === 0, 'Zero valid buildings handled safely');
  assert(emptyRes.comparison.buildings.newlyAffectedPercent === 0, 'Zero-denominator newlyAffectedPercent is 0, not NaN or Infinity');
  assert(emptyRes.comparison.buildings.escalatedPercent === 0, 'Zero-denominator escalatedPercent is 0');
  assert(emptyRes.comparison.buildings.routeLostPercent === 0, 'Zero-denominator routeLostPercent is 0');

  // Test empty road network
  const emptyRoadNetwork = new RoadNetwork(mockTerrain);
  const emptyRoadCompService = new ScenarioComparisonService(mockTerrain, emptyRoadNetwork, routingService, buildingClassifier);
  emptyRoadCompService.initStaticAccess([], []);
  emptyRoadCompService.computeBaseline(124.0);
  const emptyRoadRes = emptyRoadCompService.evaluateScenario(128.5);

  assert(emptyRoadRes.comparison.roads.totalRoadEdges === 0, 'Zero road edges handled safely');
  assert(emptyRoadRes.comparison.roads.newlyImpassablePercent === 0, 'Zero-denominator newlyImpassablePercent is 0, not NaN');
}

// -------------------------------------------------------------------------------------------------
// Test 7: Export and Scenario Results Consistency
// -------------------------------------------------------------------------------------------------
console.log('\n--- Test 7: Export and Scenario Results Consistency ---');
{
  comparisonService.computeBaseline(124.0);
  const evalRes = comparisonService.evaluateScenario(128.5);
  const sm = new ScenarioManager();

  const exportPayload = {
    scenario: { name: 'July 2021 Stage', waterLevel: 128.5, profileMode: 'planar' },
    comparison: evalRes.comparison,
    rankedBuildings: evalRes.rankedBuildings,
    shelterAssessments: evalRes.comparison.shelterAssessments,
    dataQuality: comparisonService.getDataQualityReport(),
  };

  const csv = sm.generateCSVReport(exportPayload);
  const html = sm.generateHTMLReport(exportPayload);

  // Check exported water levels match
  assert(csv.includes('Modeled Water Surface (MSL),128.50 m'), 'CSV water surface matches evaluated 128.50m');
  assert(html.includes('128.50m MSL'), 'HTML report water surface matches evaluated 128.50m');

  // Check exported newly affected building counts match
  const expectedNewBlds = `Newly Affected Buildings,+${evalRes.comparison.buildings.newlyAffectedCount}`;
  assert(csv.includes(expectedNewBlds), `CSV contains exact newly affected count (+${evalRes.comparison.buildings.newlyAffectedCount})`);
  assert(html.includes(`+${evalRes.comparison.buildings.newlyAffectedCount}`), 'HTML contains exact newly affected count');

  // Check route lost counts match
  const expectedRouteLost = `Evacuation Route Lost (Flood-Isolated),${evalRes.comparison.buildings.routeLostCount}`;
  assert(csv.includes(expectedRouteLost), `CSV contains exact route lost count (${evalRes.comparison.buildings.routeLostCount})`);
  assert(html.includes(`${evalRes.comparison.buildings.routeLostCount}`), 'HTML contains exact route lost count');

  // Check newly impassable road counts match
  const expectedNewRoads = `Newly Impassable Road Segments,+${evalRes.comparison.roads.newlyImpassable}`;
  assert(csv.includes(expectedNewRoads), `CSV contains exact newly impassable road count (+${evalRes.comparison.roads.newlyImpassable})`);
}

// -------------------------------------------------------------------------------------------------
// Test 8: Malformed Scenario Names & Safe HTML/CSV Escaping
// -------------------------------------------------------------------------------------------------
console.log('\n--- Test 8: Malformed Scenario Names & Safe Escaping ---');
{
  const sm = new ScenarioManager();

  // CSV Escaping
  assert(escapeCSV('simple') === 'simple', 'escapeCSV leaves alphanumeric unquoted');
  assert(escapeCSV('with,comma') === '"with,comma"', 'escapeCSV quotes comma');
  assert(escapeCSV('with"quotes') === '"with""quotes"', 'escapeCSV doubles quotes');
  assert(escapeCSV('with\nnewline') === '"with\nnewline"', 'escapeCSV quotes newlines');
  assert(escapeCSV(null) === '', 'escapeCSV handles null');
  assert(escapeCSV(undefined) === '', 'escapeCSV handles undefined');

  // HTML Escaping
  assert(escapeHTML('<script>alert("xss")</script>') === '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;',
    'escapeHTML sanitizes script tags');
  assert(escapeHTML('Scenario "A" & B') === 'Scenario &quot;A&quot; &amp; B',
    'escapeHTML sanitizes ampersand and quotes');
  assert(escapeHTML(null) === '', 'escapeHTML handles null');
  assert(escapeHTML(undefined) === '', 'escapeHTML handles undefined');

  // Generate HTML report with malicious scenario name
  const maliciousPayload = {
    scenario: { name: '<script>alert("hacked")</script>', waterLevel: 130.0 },
    comparison: { buildings: {}, roads: {}, shelters: {} },
    rankedBuildings: [],
    shelterAssessments: [],
  };

  const safeHtml = sm.generateHTMLReport(maliciousPayload);
  assert(!safeHtml.includes('<script>alert("hacked")</script>'), 'HTML report safely neutralizes raw script tags in scenario name');
  assert(safeHtml.includes('&lt;script&gt;alert(&quot;hacked&quot;)&lt;/script&gt;'), 'HTML report correctly encodes malicious characters');

  // Partial or corrupted input data safety
  assert(typeof sm.generateCSVReport({ scenario: null }) === 'string', 'generateCSVReport survives null scenario without crashing');
  assert(typeof sm.generateCSVReport({ rankedBuildings: [null, undefined, {}] }) === 'string', 'generateCSVReport survives corrupt rankedBuildings without crashing');
  assert(typeof sm.generateHTMLReport({ scenario: null }) === 'string', 'generateHTMLReport survives null scenario without crashing');
  assert(typeof sm.generateHTMLReport({ rankedBuildings: [null, undefined, {}] }) === 'string', 'generateHTMLReport survives corrupt rankedBuildings without crashing');
}

// -------------------------------------------------------------------------------------------------
// Test 9: No Simulation State Mutation During Export
// -------------------------------------------------------------------------------------------------
console.log('\n--- Test 9: No Simulation State Mutation During Export ---');
{
  const sm = new ScenarioManager();
  const originalScenario = { id: 'test-scen', name: 'Original Name', waterLevel: 128.5, profileMode: 'planar' };
  const originalRoadStatus = roadNetwork.edges.get('edge-0')?.status;

  const exportData = {
    scenario: originalScenario,
    comparison: comparisonService.currentComparison,
    rankedBuildings: comparisonService.rankedBuildings,
    shelterAssessments: comparisonService.currentComparison?.shelterAssessments,
    dataQuality: comparisonService.getDataQualityReport(),
  };

  sm.generateCSVReport(exportData);
  sm.generateHTMLReport(exportData);

  assert(originalScenario.name === 'Original Name', 'Original scenario name unmutated');
  assert(originalScenario.waterLevel === 128.5, 'Original scenario water level unmutated');
  assert(roadNetwork.edges.get('edge-0')?.status === originalRoadStatus, 'Road network edges unmutated by export operations');
}

// -------------------------------------------------------------------------------------------------
// Test 10: Data Quality & Uncertainty Indicators Audit
// -------------------------------------------------------------------------------------------------
console.log('\n--- Test 10: Data Quality & Uncertainty Indicators Audit ---');
{
  const dq = comparisonService.getDataQualityReport();

  assert(dq !== null && typeof dq === 'object', 'getDataQualityReport returns structured object');
  assert(dq.demCoverage.status === 'Verified' || dq.demCoverage.status === 'Partial Unknown', 'DEM coverage status clearly labeled');
  assert(typeof dq.demCoverage.valid === 'number', 'DEM valid count is numeric');
  assert(typeof dq.demCoverage.unknown === 'number', 'DEM unknown count is numeric');

  assert(dq.roadClassification.status === 'Verified' || dq.roadClassification.status === 'Partial Unknown', 'Road classification status clearly labeled');
  assert(typeof dq.roadClassification.evaluated === 'number', 'Road evaluated count is numeric');

  assert(dq.roadTopology.status === 'Disconnected', 'Road topology flagged as Disconnected (67 components)');
  assert(dq.roadTopology.totalComponents === 67, 'Accurately documents 67 disconnected graph components');

  assert(dq.facilityProvenance.status === 'Unverified', 'Facility provenance strictly labeled Unverified');
  assert(dq.facilityProvenance.hasVerifiedHospital === false, 'hasVerifiedHospital is strictly false');

  assert(dq.proposedSites.status === 'Proposed', 'Proposed sites labeled Proposed');
  assert(dq.spatialSnapping.status === 'Approximate', 'Spatial snapping labeled Approximate');
  assert(dq.modelAssumptions.status === 'Approximate', 'Model assumptions labeled Approximate');
}

// -------------------------------------------------------------------------------------------------
// Final Summary
// -------------------------------------------------------------------------------------------------
console.log(`\n===================================================================`);
console.log(`Phase 6 Test Suite Completed: ${passed} passed, ${failed} failed`);
console.log(`===================================================================\n`);

if (failed > 0) {
  process.exit(1);
}
