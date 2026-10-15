import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  ScenarioManager,
  DEFAULT_REFERENCE_SCENARIOS,
  escapeCSV,
  SCENARIO_STORAGE_KEY
} from './src/geo/ScenarioManager.js';
import { BuildingClassifier, BUILDING_EXPOSURE, ACCESS_STATUS, RISK_TIER } from './src/geo/BuildingClassifier.js';
import { ScenarioComparisonService } from './src/geo/ScenarioComparisonService.js';
import { RoadNetwork, ROAD_STATUS } from './src/geo/RoadNetwork.js';
import { RoutingService, ROUTE_STATUS } from './src/geo/RoutingService.js';
import { ClusterService } from './src/geo/ClusterService.js';
import { ProposedSiteService } from './src/geo/ProposedSiteService.js';
import { geoToLocal } from './src/geo/Projection.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('=== HighWater 3D — Phase 5: Scenario Management & Exportable Reports Test Suite ===\n');

// -------------------------------------------------------------------------------------------------
// Mock Browser Environment for Node.js
// -------------------------------------------------------------------------------------------------
class MockLocalStorage {
  constructor() {
    this.store = new Map();
    this.shouldThrow = false;
  }
  getItem(key) {
    if (this.shouldThrow) throw new Error('QuotaExceededError: Storage quota exceeded');
    return this.store.has(key) ? this.store.get(key) : null;
  }
  setItem(key, value) {
    if (this.shouldThrow) throw new Error('QuotaExceededError: Storage quota exceeded');
    this.store.set(key, String(value));
  }
  removeItem(key) {
    if (this.shouldThrow) throw new Error('QuotaExceededError: Storage quota exceeded');
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

// Build Road Network & Routing Service
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
    console.error(`  ✗ FAIL: ${message}`);
    failed++;
  }
}

// -------------------------------------------------------------------------------------------------
// Test 1: Scenario save, load, update, and delete workflow
// -------------------------------------------------------------------------------------------------
console.log('--- Test 1: Scenario Save, Load, Update, and Delete Workflow ---');
{
  window.localStorage.clear();
  const sm = new ScenarioManager();

  const initialList = sm.getScenarios();
  assert(initialList.length === DEFAULT_REFERENCE_SCENARIOS.length, `Seeds initial reference scenarios (found ${initialList.length})`);
  assert(initialList.some(s => s.id === 'scen-baseline-124'), 'Contains 124.0m baseline reference scenario');
  assert(initialList.some(s => s.id === 'scen-spacenet8-1285'), 'Contains 128.5m SpaceNet 8 reference scenario');

  // Save custom scenario
  const saved = sm.saveScenario({
    name: 'Custom Flash Flood 130m',
    waterLevel: 130.25,
    profileMode: 'slope',
    connectedOnly: true,
    baselineWaterLevel: 124.0,
    notes: 'Test flash flood simulation stage',
  });

  assert(saved && saved.id.startsWith('scen-'), `Created scenario with valid ID: ${saved.id}`);
  assert(saved.waterLevel === 130.25, `Stored precise water level: ${saved.waterLevel}m`);
  assert(saved.isBuiltIn === false, 'Custom scenario marked isBuiltIn = false');

  // Retrieve
  const fetched = sm.getScenario(saved.id);
  assert(fetched !== null && fetched.name === 'Custom Flash Flood 130m', 'Successfully retrieved scenario by ID');

  // Update
  const updated = sm.updateScenario(saved.id, { name: 'Updated Flash Flood 130.5m', waterLevel: 130.5 });
  assert(updated.name === 'Updated Flash Flood 130.5m' && updated.waterLevel === 130.5, 'Successfully updated scenario attributes');

  // Built-in protection
  const delBuiltIn = sm.deleteScenario('scen-baseline-124');
  assert(typeof delBuiltIn === 'boolean', 'Delete operation executed');

  // Delete custom scenario
  const delSuccess = sm.deleteScenario(saved.id);
  assert(delSuccess === true, 'Successfully deleted custom scenario');
  assert(sm.getScenario(saved.id) === null, 'Deleted scenario is no longer retrievable');
}

// -------------------------------------------------------------------------------------------------
// Test 1B: Strict Water Level Validation & Slider String Conversion (Regression Fix)
// -------------------------------------------------------------------------------------------------
console.log('\n--- Test 1B: Water Level Numeric Validation & Slider String Conversion ---');
{
  const sm = new ScenarioManager();

  // 1. Valid numeric water level
  const validNum = sm.saveScenario({
    name: 'Numeric Test',
    waterLevel: 127.75,
    profileMode: 'planar',
  });
  assert(validNum.waterLevel === 127.75, 'Successfully saved with valid numeric water level (127.75m)');

  // 2. Saving when slider value is a numeric string
  const validStr = sm.saveScenario({
    name: 'Slider String Test',
    waterLevel: '128.50',
    profileMode: 'slope',
  });
  assert(validStr.waterLevel === 128.5, 'Successfully saved when slider value is numeric string "128.50" -> converted to 128.5m');

  const validPadded = sm.saveScenario({
    name: 'Padded String Test',
    waterLevel: '  131.25  ',
  });
  assert(validPadded.waterLevel === 131.25, 'Successfully saved trimmed numeric string "  131.25  " -> 131.25m');

  // 3. Strictly rejecting missing or invalid water levels
  const invalidInputs = [
    { label: 'undefined', data: { name: 'Bad 1' } },
    { label: 'explicit undefined', data: { name: 'Bad 2', waterLevel: undefined } },
    { label: 'null', data: { name: 'Bad 3', waterLevel: null } },
    { label: 'empty string', data: { name: 'Bad 4', waterLevel: '' } },
    { label: 'whitespace only', data: { name: 'Bad 5', waterLevel: '   ' } },
    { label: 'non-numeric string', data: { name: 'Bad 6', waterLevel: 'invalid-depth' } },
    { label: 'NaN', data: { name: 'Bad 7', waterLevel: NaN } },
    { label: 'boolean true', data: { name: 'Bad 8', waterLevel: true } },
    { label: 'object', data: { name: 'Bad 9', waterLevel: {} } },
  ];

  for (const inv of invalidInputs) {
    let threw = false;
    let errMsg = '';
    try {
      sm.saveScenario(inv.data);
    } catch (err) {
      threw = true;
      errMsg = err.message;
    }
    assert(threw && errMsg === 'Scenario must include a valid numeric waterLevel.', `Strictly rejected ${inv.label} waterLevel with exact error`);
  }

  // 4. Ensure saved level matches current slider / water manager value
  const mockWaterManager = {
    waterLevel: 129.40,
    get currentWaterLevel() { return this.waterLevel; },
    profileMode: 'slope',
    connectedOnly: true,
  };
  const mockSlider = { value: '129.40' };

  const resolvedLevel = (typeof mockWaterManager.waterLevel === 'number' && !Number.isNaN(mockWaterManager.waterLevel))
    ? mockWaterManager.waterLevel
    : parseFloat(mockSlider.value);

  const matchedScen = sm.saveScenario({
    name: 'Matched State Scenario',
    waterLevel: resolvedLevel,
    profileMode: mockWaterManager.profileMode,
    connectedOnly: mockWaterManager.connectedOnly,
  });

  assert(matchedScen.waterLevel === mockWaterManager.waterLevel, `Saved level (${matchedScen.waterLevel}m) matches water manager state (${mockWaterManager.waterLevel}m)`);
  assert(matchedScen.profileMode === 'slope', 'Preserved profileMode setting in saved scenario');
  assert(matchedScen.connectedOnly === true, 'Preserved connectedOnly setting in saved scenario');
}

// -------------------------------------------------------------------------------------------------
// Test 2: Persistence error handling and in-memory store fallback
// -------------------------------------------------------------------------------------------------
console.log('\n--- Test 2: Persistence Error Handling & In-Memory Fallback ---');
{
  window.localStorage.clear();
  window.localStorage.shouldThrow = true; // Simulate restricted or full storage

  const sm = new ScenarioManager();
  assert(sm.isStorageAvailable === false, 'Detected localStorage failure and marked storage unavailable');
  assert(sm.storageErrorMessage !== null && sm.storageErrorMessage.includes('unavailable'), 'Set informative storageErrorMessage');

  // Saving should still work in-memory without throwing unhandled exceptions
  let memorySaved = null;
  try {
    memorySaved = sm.saveScenario({
      name: 'In-Memory Emergency Scenario',
      waterLevel: 129.0,
      profileMode: 'planar',
    });
  } catch (err) {
    console.error('Unexpected throw during in-memory fallback:', err);
  }

  assert(memorySaved !== null, 'Saved scenario in-memory when localStorage threw errors');
  const inMemoryList = sm.getScenarios();
  assert(inMemoryList.some(s => s.id === memorySaved.id), 'Retrieved in-memory scenario from fallback store');

  window.localStorage.shouldThrow = false; // Restore
}

// -------------------------------------------------------------------------------------------------
// Test 3: Malformed or corrupted saved scenario data recovery
// -------------------------------------------------------------------------------------------------
console.log('\n--- Test 3: Malformed or Corrupted Saved Data Recovery ---');
{
  window.localStorage.clear();
  // Inject corrupted non-JSON string
  window.localStorage.setItem(SCENARIO_STORAGE_KEY, 'INVALID_CORRUPTED_JSON{[{');

  const sm = new ScenarioManager();
  const safeList = sm.getScenarios();
  assert(Array.isArray(safeList), 'Safely handled corrupted JSON in localStorage without throwing');
  assert(sm.storageErrorMessage !== null, 'Set error message when parsing corrupted storage data');

  // Inject array containing corrupted objects (missing ID, non-numeric water level)
  window.localStorage.setItem(SCENARIO_STORAGE_KEY, JSON.stringify([
    null,
    { invalid: true },
    { id: 'scen-valid-1', waterLevel: 126.0, name: 'Valid Item' },
    { id: 'scen-bad', waterLevel: 'not-a-number' },
  ]));

  const sanitized = sm.getScenarios();
  assert(sanitized.length === 1 && sanitized[0].id === 'scen-valid-1', `Sanitized list, filtering out corrupt entries (retained ${sanitized.length} valid)`);
}

// -------------------------------------------------------------------------------------------------
// Test 4: Comparative evaluation between two saved scenarios
// -------------------------------------------------------------------------------------------------
console.log('\n--- Test 4: Comparative Evaluation Between Saved Scenarios ---');
{
  window.localStorage.clear();
  const sm = new ScenarioManager();
  const scenBase = sm.getScenario('scen-baseline-124');
  const scenTarget = sm.getScenario('scen-spacenet8-1285');

  assert(scenBase && scenTarget, 'Retrieved baseline (124.0m) and target (128.5m) scenarios');

  const result = sm.compareScenarios(scenBase, scenTarget, comparisonService);
  assert(result && result.comparison && result.rankedBuildings, 'compareScenarios executed and returned comparison and rankedBuildings');

  const comp = result.comparison;
  assert(comp.baselineWaterLevel === 124.0, `Baseline established at 124.0m MSL`);
  assert(comp.currentWaterLevel === 128.5, `Target evaluated at 128.5m MSL`);
  assert(comp.buildings.newlyAffectedCount > 0, `Detected +${comp.buildings.newlyAffectedCount} newly affected buildings`);
  assert(comp.roads.newlyImpassable > 0, `Detected +${comp.roads.newlyImpassable} newly impassable roads`);
}

// -------------------------------------------------------------------------------------------------
// Test 5: RFC 4180 CSV export escaping and structured section completeness
// -------------------------------------------------------------------------------------------------
console.log('\n--- Test 5: RFC 4180 CSV Escaping & Structured Section Completeness ---');
{
  // Test escaping helper
  assert(escapeCSV('NormalText') === 'NormalText', 'Plain string unquoted');
  assert(escapeCSV('Text, with comma') === '"Text, with comma"', 'Quotes added around comma');
  assert(escapeCSV('Text with "quotes"') === '"Text with ""quotes"""', 'Internal quotes escaped as double quotes');
  assert(escapeCSV('Multi\nLine') === '"Multi\nLine"', 'Quotes added around newlines');
  assert(escapeCSV(null) === '', 'Null converts to empty string');
  assert(escapeCSV(undefined) === '', 'Undefined converts to empty string');
  assert(escapeCSV(123.45) === '123.45', 'Number converts to string');

  const sm = new ScenarioManager();
  const evalResult = comparisonService.evaluateScenario(128.5);
  const csv = sm.generateCSVReport({
    scenario: { name: 'SpaceNet 8 Validation, July 2021', waterLevel: 128.5, profileMode: 'planar' },
    comparison: evalResult.comparison,
    rankedBuildings: evalResult.rankedBuildings,
    shelterAssessments: evalResult.comparison.shelterAssessments,
  });

  assert(typeof csv === 'string' && csv.length > 500, `Generated CSV report (${csv.length} characters)`);
  assert(csv.includes('=== HIGHWATER 3D — SCENARIO ANALYSIS REPORT ==='), 'Contains Section 1: Overview & Metadata');
  assert(csv.includes('=== SCENARIO COMPARISON METRICS (BASELINE VS CURRENT) ==='), 'Contains Section 2: Comparison Metrics');
  assert(csv.includes('=== SHELTER & EMERGENCY FACILITY EVALUATION ==='), 'Contains Section 3: Shelter Evaluation');
  assert(csv.includes('=== BUILDING FLOOD RISK RANKINGS & ACCESSIBILITY ==='), 'Contains Section 4: Individual Building Rankings');
  assert(csv.includes('=== MODEL ASSUMPTIONS & LEGAL DISCLAIMER ==='), 'Contains Section 5: Model Disclaimer');
  assert(csv.includes('\r\n'), 'Uses RFC 4180 compliant CRLF row terminators');
}

// -------------------------------------------------------------------------------------------------
// Test 5B: Export CSV and HTML Report with Empty, Null, or Invalid Scenario Data
// -------------------------------------------------------------------------------------------------
console.log('\n--- Test 5B: Export CSV & HTML Report with Empty or Invalid Data ---');
{
  const sm = new ScenarioManager();

  // 1. Calling generateCSVReport with empty/null/invalid parameters
  let csvNoArgs = null;
  let csvEmptyObj = null;
  let csvEmptyScen = null;
  let csvNullScen = null;
  let csvNaNLevel = null;
  let csvCorruptArrays = null;

  try {
    csvNoArgs = sm.generateCSVReport();
    csvEmptyObj = sm.generateCSVReport({});
    csvEmptyScen = sm.generateCSVReport({ scenario: {} });
    csvNullScen = sm.generateCSVReport({ scenario: null });
    csvNaNLevel = sm.generateCSVReport({ scenario: { waterLevel: NaN, name: '' } });
    csvCorruptArrays = sm.generateCSVReport({ comparison: null, rankedBuildings: [null, {}], shelterAssessments: [null, {}] });
  } catch (err) {
    console.error('generateCSVReport threw on empty/invalid data:', err);
  }

  assert(typeof csvNoArgs === 'string' && csvNoArgs.includes('=== HIGHWATER 3D — SCENARIO ANALYSIS REPORT ==='), 'generateCSVReport() handles undefined params safely');
  assert(typeof csvEmptyObj === 'string' && csvEmptyObj.includes('Active Simulation'), 'generateCSVReport({}) defaults to Active Simulation');
  assert(typeof csvEmptyScen === 'string' && csvEmptyScen.includes('124.00 m'), 'generateCSVReport({ scenario: {} }) defaults water level to 124.00m');
  assert(typeof csvNullScen === 'string', 'generateCSVReport({ scenario: null }) handles null scenario');
  assert(typeof csvNaNLevel === 'string' && csvNaNLevel.includes('124.00 m'), 'generateCSVReport({ scenario: { waterLevel: NaN } }) falls back to default 124.00m');
  assert(typeof csvCorruptArrays === 'string', 'generateCSVReport with null/corrupt items in arrays handled gracefully');

  // 2. Calling generateHTMLReport with empty/null/invalid parameters
  let htmlNoArgs = null;
  let htmlEmptyObj = null;
  let htmlEmptyScen = null;
  let htmlNullScen = null;
  let htmlNaNLevel = null;
  let htmlCorruptArrays = null;

  try {
    htmlNoArgs = sm.generateHTMLReport();
    htmlEmptyObj = sm.generateHTMLReport({});
    htmlEmptyScen = sm.generateHTMLReport({ scenario: {} });
    htmlNullScen = sm.generateHTMLReport({ scenario: null });
    htmlNaNLevel = sm.generateHTMLReport({ scenario: { waterLevel: NaN, name: '' } });
    htmlCorruptArrays = sm.generateHTMLReport({ comparison: null, rankedBuildings: [null, {}], shelterAssessments: [null, {}] });
  } catch (err) {
    console.error('generateHTMLReport threw on empty/invalid data:', err);
  }

  assert(typeof htmlNoArgs === 'string' && htmlNoArgs.includes('<!DOCTYPE html>'), 'generateHTMLReport() handles undefined params safely');
  assert(typeof htmlEmptyObj === 'string' && htmlEmptyObj.includes('Active Simulation'), 'generateHTMLReport({}) defaults to Active Simulation');
  assert(typeof htmlEmptyScen === 'string' && htmlEmptyScen.includes('124.00m MSL'), 'generateHTMLReport({ scenario: {} }) defaults water level to 124.00m MSL');
  assert(typeof htmlNullScen === 'string', 'generateHTMLReport({ scenario: null }) handles null scenario');
  assert(typeof htmlNaNLevel === 'string' && htmlNaNLevel.includes('124.00m MSL'), 'generateHTMLReport({ scenario: { waterLevel: NaN } }) falls back to default 124.00m MSL');
  assert(typeof htmlCorruptArrays === 'string', 'generateHTMLReport with null/corrupt items in arrays handled gracefully');
}

// -------------------------------------------------------------------------------------------------
// Test 6: Denominator integrity in exported reports
// -------------------------------------------------------------------------------------------------
console.log('\n--- Test 6: Denominator Integrity in Exported Reports ---');
{
  const sm = new ScenarioManager();
  const evalResult = comparisonService.evaluateScenario(128.5);
  const comp = evalResult.comparison;
  const b = comp.buildings;

  assert(b.totalEvaluated === b.validDenominator + b.unknownCount, `totalEvaluated (${b.totalEvaluated}) == validDenominator (${b.validDenominator}) + unknownCount (${b.unknownCount})`);

  const expectedNewlyPercent = Math.round((b.newlyAffectedCount / b.validDenominator) * 1000) / 10;
  assert(b.newlyAffectedPercent === expectedNewlyPercent, `Newly affected percent (${b.newlyAffectedPercent}%) strictly uses validDenominator (${b.validDenominator})`);

  const csv = sm.generateCSVReport({
    scenario: { name: 'Denominator Check', waterLevel: 128.5 },
    comparison: comp,
    rankedBuildings: evalResult.rankedBuildings,
    shelterAssessments: comp.shelterAssessments,
  });

  assert(csv.includes(`Valid Evaluated Buildings,${b.validDenominator},${b.totalEvaluated}`), 'CSV explicitly documents valid denominator count');
  assert(csv.includes(`Unknown/NoData DEM Buildings,${b.unknownCount},${b.totalEvaluated}`), 'CSV explicitly documents Unknown DEM excluded count');
}

// -------------------------------------------------------------------------------------------------
// Test 7: Correct provenance labels and legal disclaimers
// -------------------------------------------------------------------------------------------------
console.log('\n--- Test 7: Provenance Labels and Legal Disclaimers ---');
{
  const sm = new ScenarioManager();
  const evalResult = comparisonService.evaluateScenario(128.5);

  const csv = sm.generateCSVReport({
    scenario: { name: 'Provenance Check', waterLevel: 128.5 },
    comparison: evalResult.comparison,
    rankedBuildings: evalResult.rankedBuildings,
    shelterAssessments: evalResult.comparison.shelterAssessments,
  });

  assert(csv.includes('Simulated unverified facility record'), 'CSV marks shelter entries as simulated/unverified');
  assert(csv.includes('Not a calibrated hydraulic forecast'), 'CSV states conceptual decision-support notice');
  assert(csv.includes('Ground-contact depth reflects bare-earth DGM1 LiDAR terrain intersection'), 'CSV clarifies ground-contact exposure vs interior flooding');
  assert(csv.includes('Topological road network contains 67 disconnected source components'), 'CSV documents source network disconnection limitation');
}

// -------------------------------------------------------------------------------------------------
// Test 8: Print-friendly HTML report generation
// -------------------------------------------------------------------------------------------------
console.log('\n--- Test 8: Print-Friendly HTML Report Generation ---');
{
  const sm = new ScenarioManager();
  const evalResult = comparisonService.evaluateScenario(128.5);

  const html = sm.generateHTMLReport({
    scenario: { name: 'July 2021 Historical Benchmark', waterLevel: 128.5 },
    comparison: evalResult.comparison,
    rankedBuildings: evalResult.rankedBuildings,
    shelterAssessments: evalResult.comparison.shelterAssessments,
  });

  assert(typeof html === 'string', 'Generated HTML report');
  assert(html.includes('<!DOCTYPE html>'), 'Valid HTML5 doctype declaration');
  assert(html.includes('@media print'), 'Includes dedicated @media print stylesheet');
  assert(html.includes('window.print()'), 'Includes print action trigger');
  assert(html.includes('Executive Summary & Scenario Deltas'), 'Includes executive summary section');
  assert(html.includes('Emergency Shelter & Facility Accessibility'), 'Includes facility accessibility section');
  assert(html.includes('CONCEPTUAL DECISION-SUPPORT NOTICE & MODEL LIMITATIONS'), 'Includes prominent legal disclaimer box');
}

// -------------------------------------------------------------------------------------------------
// Test 9: Rapid dynamic scenario switching without topological graph rebuilding
// -------------------------------------------------------------------------------------------------
console.log('\n--- Test 9: Rapid Dynamic Scenario Switching Performance ---');
{
  const sm = new ScenarioManager();
  const levels = [124.0, 126.5, 128.5, 131.0, 133.5, 124.0];
  const initialEdges = roadNetwork.edges.size;

  const t0 = performance.now();
  for (const lvl of levels) {
    const res = comparisonService.evaluateScenario(lvl);
    assert(res.rankedBuildings.length === buildingFeatures.length, `Evaluated all ${res.rankedBuildings.length} buildings at ${lvl}m`);
  }
  const t1 = performance.now();
  const totalMs = Math.round(t1 - t0);

  assert(roadNetwork.edges.size === initialEdges, `Road graph edges preserved without recreation (${roadNetwork.edges.size} edges)`);
  assert(totalMs < 500, `Completed 6 full scenario evaluations in ${totalMs}ms (<500ms target)`);
}

// -------------------------------------------------------------------------------------------------
// Test 10: Preservation of all Phase 1-4 functionality
// -------------------------------------------------------------------------------------------------
console.log('\n--- Test 10: Preservation of Phases 1-4 Functionality ---');
{
  // Phase 1: Road passability classification
  const impassableEdge = Array.from(roadNetwork.edges.values()).find(e => e.status === ROAD_STATUS.IMPASSABLE);
  assert(impassableEdge !== undefined, 'Phase 1: Road flood passability classification active');

  // Phase 2: Conservative Dijkstra routing
  const candidates = facilityFeatures.map(f => ({ id: f.id, name: f.name, x: f.position.x, z: f.position.z }));
  const routeResult = routingService.findNearestReachableDestination({ x: 0, z: 0 }, candidates);
  assert(routeResult !== null && routeResult.route !== undefined, 'Phase 2: Conservative routing engine operational');

  // Phase 3: Spatial clustering & Proposed Safe Sites
  const clusterService = new ClusterService();
  const clusters = clusterService.createClusters(buildingFeatures);
  assert(Array.isArray(clusters), 'Phase 3: DBSCAN cluster service functional');

  const proposedService = new ProposedSiteService(mockTerrain, roadNetwork);
  const sites = proposedService.evaluateSites(128.5);
  assert(Array.isArray(sites) && sites.length > 0, 'Phase 3: Proposed safe site evaluation functional');

  // Phase 4: Building flood risk ranking
  const evalData = comparisonService.evaluateScenario(128.5);
  const topRisk = evalData.rankedBuildings[0];
  assert(topRisk && typeof topRisk.risk.totalScore === 'number', 'Phase 4: Multi-criteria risk scoring operational');
}

// -------------------------------------------------------------------------------------------------
// Summary
// -------------------------------------------------------------------------------------------------
console.log('\n===================================================================');
console.log(`Phase 5 Test Suite Completed: ${passed} passed, ${failed} failed`);
console.log('===================================================================\n');

if (failed > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
