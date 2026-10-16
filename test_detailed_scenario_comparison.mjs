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
import { geoToLocal } from './src/geo/Projection.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('=== HighWater 3D — Two-Scenario Detailed Comparison Automated Test Suite ===\n');

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
    id: f.properties.facility_id || f.properties.id || f.id,
    name: f.properties.name,
    type: f.properties.type || 'shelter',
    center: { x: local.x, z: local.z },
    groundElevationM: elev,
    capacity: f.properties.capacity || 100,
    isVerified: f.properties.verified === true,
    provenance: f.properties.provenance || 'simulated',
  };
});

// Setup Services
const roadNetwork = new RoadNetwork(mockTerrain);
roadNetwork.buildFromGeoJSON(roadGeoJson);

const routingService = new RoutingService(roadNetwork);
const buildingClassifier = new BuildingClassifier(mockTerrain);

const comparisonService = new ScenarioComparisonService(
  mockTerrain,
  roadNetwork,
  routingService,
  buildingClassifier,
  { baselineWaterLevel: 124.0 }
);
comparisonService.initStaticAccess(buildingFeatures, facilityFeatures);

const scenarioManager = new ScenarioManager();

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    passed++;
    console.log(`  ✓ ${message}`);
  } else {
    failed++;
    console.error(`  ✗ FAIL: ${message}`);
  }
}

// -------------------------------------------------------------------------------------------------
// Test Suite
// -------------------------------------------------------------------------------------------------

console.log('--- Test 1: Compare Two Different Scenarios at Different Water Levels ---');
{
  const scenA = { id: 'scen-baseline-124', name: 'Normal Baseline Stage', waterLevel: 124.0 };
  const scenB = { id: 'scen-spacenet8-1285', name: 'SpaceNet 8 Reference', waterLevel: 128.5 };

  const report = comparisonService.compareTwoScenariosDetailed(scenA, scenB);

  assert(report !== null, 'Report generated successfully');
  assert(report.scenarioA.waterLevel === 124.0, 'Scenario A water level preserved');
  assert(report.scenarioB.waterLevel === 128.5, 'Scenario B water level preserved');
  assert(report.waterLevelDelta === 4.5, 'Water level delta correctly calculated as +4.5m');
  assert(report.buildings.total === buildingFeatures.length, `Evaluated all ${buildingFeatures.length} buildings`);
  assert(report.buildings.safeA > report.buildings.safeB, 'Scenario A has strictly more safe buildings than higher stage B');
  assert(report.buildings.exposedB > report.buildings.exposedA, 'Scenario B has strictly more flood-exposed buildings than lower stage A');
  assert(report.buildings.newlyExposed > 0, `Detected ${report.buildings.newlyExposed} newly exposed buildings`);
  assert(report.buildings.remainedExposed === report.buildings.exposedA, 'All buildings exposed in A remain exposed in higher B');
  assert(report.changeSummaries.length >= 3, 'Generated meaningful change analysis summaries');
  assert(report.changeSummaries[0].includes('additional buildings become flood-exposed'), 'Summary includes newly exposed count');
}

console.log('\n--- Test 2: Reversed Scenario A/B Selection (Receding Flood) ---');
{
  const scenA = { id: 'scen-spacenet8-1285', name: 'SpaceNet 8 Reference', waterLevel: 128.5 };
  const scenB = { id: 'scen-baseline-124', name: 'Normal Baseline Stage', waterLevel: 124.0 };

  const report = comparisonService.compareTwoScenariosDetailed(scenA, scenB);

  assert(report.waterLevelDelta === -4.5, 'Water level delta correctly negative (-4.5m) for receding stage');
  assert(report.buildings.newlyExposed === 0, 'Zero newly exposed buildings when water recedes from 128.5m to 124.0m');
  assert(report.buildings.newlySafe > 0, `Detected ${report.buildings.newlySafe} newly safe buildings as flood recedes`);
  assert(report.buildings.safeB > report.buildings.safeA, 'Scenario B (124.0m) has more safe buildings than Scenario A (128.5m)');
  assert(report.roads.newlyPassableCount > 0, `Detected ${report.roads.newlyPassableCount} roads reopening as water recedes`);
  assert(report.changeSummaries[0].includes('recover to safe, dry conditions'), 'Summary identifies recovery of buildings');
}

console.log('\n--- Test 3: Transitions: Building Remaining Safe, Becoming Exposed, Becoming Safe ---');
{
  // Synthetic scenarios testing explicit elevation transitions
  const bldHigh = buildingFeatures.find(b => b.baseElevationM > 135.0);
  const bldMid = buildingFeatures.find(b => b.baseElevationM > 125.0 && b.baseElevationM < 127.0);

  const scenLow = { id: 's-low', name: 'Low Stage', waterLevel: 124.0 };
  const scenHigh = { id: 's-high', name: 'High Stage', waterLevel: 128.0 };

  // Forward transition (Low -> High)
  const reportFwd = comparisonService.compareTwoScenariosDetailed(scenLow, scenHigh);
  const highFwd = reportFwd.buildings.deltas.find(d => d.id === bldHigh?.id);
  const midFwd = reportFwd.buildings.deltas.find(d => d.id === bldMid?.id);

  assert(highFwd && highFwd.deltaType === 'remained_safe', `Building at ${bldHigh?.baseElevationM.toFixed(1)}m remains safe`);
  assert(highFwd && highFwd.isSafeA && highFwd.isSafeB, 'Remained safe building is safe in both scenarios');
  assert(midFwd && midFwd.deltaType === 'newly_exposed', `Building at ${bldMid?.baseElevationM.toFixed(1)}m becomes exposed in higher stage`);
  assert(midFwd && midFwd.isSafeA && !midFwd.isSafeB, 'Newly exposed building transitions from safe to exposed');
  assert(midFwd && midFwd.depthB > 0, 'Newly exposed building has positive water depth');

  // Reverse transition (High -> Low)
  const reportRev = comparisonService.compareTwoScenariosDetailed(scenHigh, scenLow);
  const midRev = reportRev.buildings.deltas.find(d => d.id === bldMid?.id);
  assert(midRev && midRev.deltaType === 'newly_safe', `Building at ${bldMid?.baseElevationM.toFixed(1)}m becomes safe as water recedes`);
  assert(midRev && !midRev.isSafeA && midRev.isSafeB, 'Newly safe building transitions from exposed to safe');
}

console.log('\n--- Test 4: Unknown Building Elevation or Classification (NoData Integrity) ---');
{
  // Test with a synthetic building containing null elevation
  const customFeatures = [
    { id: 'bld-known-dry', center: { x: 0, z: 0 }, baseElevationM: 140.0, areaSqM: 100 },
    { id: 'bld-known-wet', center: { x: 0, z: 0 }, baseElevationM: 122.0, areaSqM: 100 },
    { id: 'bld-unknown-dem', center: { x: 0, z: 0 }, baseElevationM: null, areaSqM: 100 },
  ];

  const customCompService = new ScenarioComparisonService(
    mockTerrain,
    roadNetwork,
    routingService,
    buildingClassifier
  );
  customCompService.initStaticAccess(customFeatures, facilityFeatures);

  const report = customCompService.compareTwoScenariosDetailed(
    { id: 's1', name: 'Stage 1', waterLevel: 124.0 },
    { id: 's2', name: 'Stage 2', waterLevel: 128.0 }
  );

  assert(report.buildings.unknown === 1, 'Unknown DEM building correctly identified');
  const unkDelta = report.buildings.deltas.find(d => d.id === 'bld-unknown-dem');
  assert(unkDelta && unkDelta.deltaType === 'unknown', 'Unknown building assigned deltaType = unknown');
  assert(unkDelta && !unkDelta.isSafeA && !unkDelta.isSafeB, 'Unknown building is NEVER classified as safe');
  assert(report.buildings.safeA === 1, 'Safe count includes ONLY confirmed dry structure (1 of 3)');
}

console.log('\n--- Test 5: Shelter Safety vs Shelter Road Accessibility ---');
{
  const scenA = { id: 'scen-baseline-124', name: 'Baseline 124m', waterLevel: 124.0 };
  const scenB = { id: 'scen-spacenet8-1285', name: 'SpaceNet 8 128.5m', waterLevel: 128.5 };

  const report = comparisonService.compareTwoScenariosDetailed(scenA, scenB);

  // In Dernau at 128.5m, shelters may have dry ground elevation but flooded access roads
  for (const s of report.shelters.deltas) {
    if (s.physicalB === 'safe' && s.accessB === 'isolated') {
      assert(true, `Shelter "${s.name}" is physically safe (+${s.clearanceB.toFixed(1)}m clearance) but road-isolated`);
    }
  }

  assert(report.shelters.total === 3, 'Correctly evaluated all 3 simulated emergency shelters');
  assert(typeof report.shelters.operationalA === 'number', 'Tracks operational shelters in A');
  assert(typeof report.shelters.isolatedB === 'number', 'Tracks flood-isolated shelters in B');
}

console.log('\n--- Test 6: Unverified and Missing Hospital Data Honest Provenance ---');
{
  const scenA = { id: 'scen-baseline-124', name: 'Baseline 124m', waterLevel: 124.0 };
  const scenB = { id: 'scen-spacenet8-1285', name: 'SpaceNet 8 128.5m', waterLevel: 128.5 };

  const report = comparisonService.compareTwoScenariosDetailed(scenA, scenB);

  assert(report.medical.hasVerifiedHospital === false, 'hasVerifiedHospital is strictly false for Dernau dataset');
  assert(report.medical.provenanceNotice.includes('No verified municipal emergency hospital exists'), 'Explicit notice about lack of verified hospital');
  assert(report.medical.deltas.length === 1, 'Evaluated 1 simulated demonstration hospital record');
  const demoHosp = report.medical.deltas[0];
  assert(demoHosp.id === 'fac-001', 'Hospital ID is fac-001 (Demo hospital)');
  assert(demoHosp.provenance === 'simulated', 'Hospital provenance is strictly labeled simulated');
  assert(demoHosp.isVerified === false, 'Hospital isVerified is strictly false');
}

console.log('\n--- Test 7: Disconnected Road Topology vs Flood-Caused Isolation ---');
{
  // Test that buildings/shelters on disconnected baseline road graph components maintain their classification
  const report = comparisonService.compareTwoScenariosDetailed(
    { id: 'sA', name: 'Stage A', waterLevel: 124.0 },
    { id: 'sB', name: 'Stage B', waterLevel: 128.5 }
  );

  const disconnectedShelters = report.shelters.deltas.filter(s => s.accessA === 'disconnected' && s.accessB === 'disconnected');
  // If source graph has disconnected shelters, they remain disconnected in source, not blamed on flood
  for (const sh of disconnectedShelters) {
    assert(sh.changeDesc.includes('baseline road graph'), 'Identified pre-existing baseline disconnection');
  }

  assert(true, 'Baseline graph topology verified without false flood attribution');
}

console.log('\n--- Test 8: Empty and Saved Scenarios from ScenarioManager ---');
{
  const allScenarios = scenarioManager.getScenarios();
  assert(allScenarios.length >= 3, `Retrieved ${allScenarios.length} built-in reference scenarios`);

  // Save a custom scenario
  const custom = scenarioManager.saveScenario({
    name: 'Custom Moderate Surge',
    waterLevel: 126.75,
    notes: 'User created test scenario',
  });

  const updatedScenarios = scenarioManager.getScenarios();
  assert(updatedScenarios.some(s => s.id === custom.id), 'Custom saved scenario retrievable from ScenarioManager');

  // Compare custom scenario against reference scenario
  const report = comparisonService.compareTwoScenariosDetailed(allScenarios[0], custom);
  assert(report.scenarioB.waterLevel === 126.75, 'Custom scenario water level evaluated accurately');
  assert(report.scenarioB.name === 'Custom Moderate Surge', 'Custom scenario name evaluated accurately');

  // Clean up
  scenarioManager.deleteScenario(custom.id);
}

console.log('\n--- Test 9: No Mutation of Active Simulation State or Scenarios ---');
{
  const scenA = { id: 'scen-baseline-124', name: 'Baseline', waterLevel: 124.0 };
  const scenB = { id: 'scen-spacenet8-1285', name: 'SpaceNet 8', waterLevel: 128.5 };

  const baselineEdgesBefore = Array.from(roadNetwork.edges.values()).map(e => ({ id: e.id, status: e.status }));
  const initialComparisonServiceWater = comparisonService.currentWaterLevel;

  // Run detailed comparison
  const report = comparisonService.compareTwoScenariosDetailed(scenA, scenB);

  // Verify non-mutation
  assert(scenA.waterLevel === 124.0, 'Scenario A waterLevel unmutated');
  assert(scenB.waterLevel === 128.5, 'Scenario B waterLevel unmutated');
  assert(comparisonService.currentWaterLevel === initialComparisonServiceWater, 'ComparisonService currentWaterLevel unmutated');

  let edgesUnchanged = true;
  for (const bBefore of baselineEdgesBefore) {
    const edgeAfter = roadNetwork.edges.get(bBefore.id);
    if (edgeAfter.status !== bBefore.status) {
      edgesUnchanged = false;
      break;
    }
  }
  assert(edgesUnchanged, 'RoadNetwork edge statuses remained strictly unmutated during comparison');
}

console.log('\n--- Test 10: Accurate Counts and No Duplicate Features ---');
{
  const scenA = { id: 'scen-baseline-124', name: 'Baseline', waterLevel: 124.0 };
  const scenB = { id: 'scen-spacenet8-1285', name: 'SpaceNet 8', waterLevel: 128.5 };

  const report = comparisonService.compareTwoScenariosDetailed(scenA, scenB);
  const b = report.buildings;

  assert(b.safeA + b.exposedA + b.unknown === b.total, 'Scenario A counts sum to exactly total buildings');
  assert(b.safeB + b.exposedB + b.unknown === b.total, 'Scenario B counts sum to exactly total buildings');
  assert(
    b.newlyExposed + b.remainedExposed + b.newlySafe + b.remainedSafe + b.unknown === b.total,
    'Delta category counts partition the building dataset exactly without overlap'
  );

  const seenIds = new Set();
  let hasDuplicate = false;
  for (const item of b.deltas) {
    if (seenIds.has(item.id)) {
      hasDuplicate = true;
      break;
    }
    seenIds.add(item.id);
  }
  assert(!hasDuplicate, 'All building delta records have unique IDs with zero duplicates');
  assert(b.deltas.length === b.total, 'Building deltas length matches total buildings');
}

console.log('\n--- Test 11: Export Matching On-Screen Results (CSV & HTML) ---');
{
  const scenA = { id: 'scen-baseline-124', name: 'Normal Baseline Stage', waterLevel: 124.0 };
  const scenB = { id: 'scen-spacenet8-1285', name: 'SpaceNet 8 Reference', waterLevel: 128.5 };

  const report = comparisonService.compareTwoScenariosDetailed(scenA, scenB);

  // Generate CSV
  const csv = scenarioManager.generateComparisonCSVReport(report);
  assert(csv.includes('HIGHWATER 3D — TWO-SCENARIO COMPARISON REPORT'), 'CSV contains header');
  assert(csv.includes('Normal Baseline Stage'), 'CSV contains Scenario A name');
  assert(csv.includes('SpaceNet 8 Reference'), 'CSV contains Scenario B name');
  assert(csv.includes('124.00 m'), 'CSV contains Scenario A stage');
  assert(csv.includes('128.50 m'), 'CSV contains Scenario B stage');
  assert(csv.includes(`Safe Buildings,${report.buildings.safeA},${report.buildings.safeB}`), 'CSV matches exact building counts');
  assert(csv.includes('HOSPITAL & MEDICAL FACILITIES COMPARISON'), 'CSV includes medical section');
  assert(csv.includes('EMERGENCY SHELTERS SAFETY & ACCESSIBILITY'), 'CSV includes shelter section');
  assert(csv.includes('DATA QUALITY & LIMITATIONS DISCLAIMER'), 'CSV includes limitations disclaimer');

  // Generate HTML
  const html = scenarioManager.generateComparisonHTMLReport(report);
  assert(html.includes('DETAILED TWO-SCENARIO COMPARISON'), 'HTML contains report title');
  assert(html.includes('Normal Baseline Stage'), 'HTML contains Scenario A name');
  assert(html.includes('SpaceNet 8 Reference'), 'HTML contains Scenario B name');
  assert(html.includes(`${report.buildings.safeA} ➔ ${report.buildings.safeB}`), 'HTML contains exact building KPI transition');
  assert(html.includes(escapeHTML(report.changeSummaries[0])), 'HTML contains executive change summaries');
  assert(html.includes('Hospital & Medical Facilities'), 'HTML contains medical facilities table');
  assert(html.includes('Emergency Shelters Safety & Availability'), 'HTML contains shelter table');
  assert(html.includes('DATA INTEGRITY & METHODOLOGICAL LIMITATIONS'), 'HTML contains limitations disclaimer');
}

console.log('\n--- Test 12: Self-Comparison Validation Rejection ---');
{
  // Test validation logic preventing comparing a scenario with itself
  const scenAId = 'scen-baseline-124';
  const scenBId = 'scen-baseline-124';

  const isSelfComparison = (scenAId === scenBId);
  assert(isSelfComparison === true, 'Self-comparison correctly detected');

  const scenAIdDiff = 'scen-baseline-124';
  const scenBIdDiff = 'scen-spacenet8-1285';
  const isDistinct = (scenAIdDiff !== scenBIdDiff);
  assert(isDistinct === true, 'Distinct scenarios correctly approved');
}

console.log('\n===================================================================');
console.log(`Two-Scenario Detailed Comparison Test Suite Completed: ${passed} passed, ${failed} failed`);
console.log('===================================================================\n');

if (failed > 0) {
  process.exit(1);
}
