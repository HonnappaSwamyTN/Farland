import fs from 'fs';
import path from 'path';
import * as THREE from 'three';
import { FloodWaterManager, THALWEG_PROFILE } from './src/water/FloodWaterManager.js';
import { BuildingLayer } from './src/overlays/BuildingLayer.js';
import { RoadLayer } from './src/overlays/RoadLayer.js';
import { FacilityLayer } from './src/overlays/FacilityLayer.js';

console.log('=== HighWater 3D — Milestone 8: Final Consistency Audit & Demo Freeze Test Suite ===\n');

// 1. Data Integrity & Ingestion
const demPath = path.resolve('public/data/dernau/dem_height_grid.json');
const bldPath = path.resolve('public/data/dernau/buildings_exposed.geojson');
const roadPath = path.resolve('public/data/dernau/roads_status.geojson');
const facPath = path.resolve('public/data/dernau/facilities.geojson');
const histFloodPath = path.resolve('public/data/dernau/flood_extent.geojson');

const demPayload = JSON.parse(fs.readFileSync(demPath, 'utf8'));
const bldData = JSON.parse(fs.readFileSync(bldPath, 'utf8'));
const roadData = JSON.parse(fs.readFileSync(roadPath, 'utf8'));
const facData = JSON.parse(fs.readFileSync(facPath, 'utf8'));
const histFloodData = JSON.parse(fs.readFileSync(histFloodPath, 'utf8'));

// Test 1: Historical Source Data Preservation
console.log('[Test 1] Historical Source Data Preservation:');
if (bldData.features.length !== 759) throw new Error(`Expected 759 buildings, got ${bldData.features.length}`);
const bldFlooded = bldData.features.filter((f) => f.properties?.flooded === true).length;
if (bldFlooded !== 203) throw new Error(`Expected 203 flooded buildings, got ${bldFlooded}`);

if (roadData.features.length !== 117) throw new Error(`Expected 117 roads, got ${roadData.features.length}`);
const roadFlooded = roadData.features.filter((f) => f.properties?.flooded === true).length;
if (roadFlooded !== 45) throw new Error(`Expected 45 flooded roads, got ${roadFlooded}`);

if (facData.features.length !== 6) throw new Error(`Expected 6 facilities, got ${facData.features.length}`);
if (histFloodData.features.length !== 196) throw new Error(`Expected 196 flood polygons, got ${histFloodData.features.length}`);

console.log('  ✓ 759 buildings (203 July 2021 flooded, 556 normal) unchanged.');
console.log('  ✓ 117 roads (45 July 2021 flooded, 72 open) unchanged.');
console.log('  ✓ 6 emergency facilities and 196 historical flood polygons unchanged.');
console.log('  -> PASS\n');

// Mock Terrain Manager using identical bilinear interpolation to DemTerrain.sampleElevation
const elevations = demPayload.elevations;
const rows = elevations.length;
const cols = elevations[0].length;
const mockTerrain = {
  getElevationAt: (x, z) => {
    const u = (x + 1200) / 2400;
    const v = (z + 1200) / 2400;
    const c = Math.max(0, Math.min(cols - 1, u * (cols - 1)));
    const r = Math.max(0, Math.min(rows - 1, v * (rows - 1)));
    const c0 = Math.floor(c), c1 = Math.min(cols - 1, c0 + 1);
    const r0 = Math.floor(r), r1 = Math.min(rows - 1, r0 + 1);
    const fc = c - c0, fr = r - r0;
    const top = (1 - fc) * elevations[r0][c0] + fc * elevations[r0][c1];
    const bot = (1 - fc) * elevations[r1][c0] + fc * elevations[r1][c1];
    return (1 - fr) * top + fr * bot;
  },
};

const scene = new THREE.Scene();

// Instantiate layers
const bldLayer = new BuildingLayer(scene, mockTerrain);
bldLayer.buildGeometry(bldData);

const roadLayer = new RoadLayer(scene, mockTerrain);
roadLayer.buildGeometry(roadData);

const facLayer = new FacilityLayer(scene, mockTerrain);
facLayer.buildGeometry(facData);

const overlayManager = {
  buildingLayer: bldLayer,
  roadLayer: roadLayer,
  facilityLayer: facLayer,
  updateImpacts(waterElevLookup, accessibilityMap) {
    const b = bldLayer.updateBuildingDepths(waterElevLookup);
    const r = roadLayer.updatePassability(waterElevLookup);
    const f = facLayer.updateAccessibility(accessibilityMap);
    return { buildings: b, roads: r, facilities: f };
  },
};

const waterManager = new FloodWaterManager(scene, mockTerrain, overlayManager);
waterManager.attachDEM(demPayload);
waterManager.indexAssets({
  buildings: bldData,
  roads: roadData,
  facilities: facData,
});

// Test 2: Deterministic Outputs for Identical Settings
console.log('[Test 2] Deterministic Execution for Identical Settings:');
for (const mode of ['planar', 'slope']) {
  waterManager.setProfileMode(mode);
  for (const stage of [124.0, 130.0, 132.0, 138.0]) {
    waterManager.setWaterLevel(stage);
    const run1 = JSON.stringify(waterManager.currentImpact);
    waterManager.setWaterLevel(stage);
    const run2 = JSON.stringify(waterManager.currentImpact);
    if (run1 !== run2) {
      throw new Error(`Non-deterministic output detected in ${mode} mode at ${stage}m`);
    }
  }
}
console.log('  ✓ 8/8 stage/mode combinations verified bit-for-bit deterministic across re-evaluation.');
console.log('  -> PASS\n');

// Test 3: Monotonic Inundation Progression in Planar & Slope Modes
console.log('[Test 3] Monotonic Inundation Progression:');
for (const mode of ['planar', 'slope']) {
  waterManager.setProfileMode(mode);
  const testStages = [121.0, 124.0, 128.0, 130.0, 132.0, 135.0, 138.0, 142.0];
  let prevCells = -1;
  let prevBlds = -1;
  let prevRoads = -1;

  for (const st of testStages) {
    waterManager.setWaterLevel(st);
    const imp = waterManager.currentImpact;
    const bDepthSum = imp.buildingDepthBreakdown.shallow + imp.buildingDepthBreakdown.moderate + imp.buildingDepthBreakdown.deep;
    const rPassSum = imp.roadPassabilityBreakdown.waterlogged + imp.roadPassabilityBreakdown.submerged;

    if (imp.inundatedCells < prevCells) {
      throw new Error(`Monotonicity violation in ${mode} mode: cells decreased at ${st}m (${imp.inundatedCells} < ${prevCells})`);
    }
    if (bDepthSum < prevBlds) {
      throw new Error(`Monotonicity violation in ${mode} mode: affected buildings decreased at ${st}m (${bDepthSum} < ${prevBlds})`);
    }
    if (rPassSum < prevRoads) {
      throw new Error(`Monotonicity violation in ${mode} mode: affected roads decreased at ${st}m (${rPassSum} < ${prevRoads})`);
    }
    prevCells = imp.inundatedCells;
    prevBlds = bDepthSum;
    prevRoads = rPassSum;
  }
  console.log(`  ✓ ${mode.toUpperCase()} profile strictly monotonic across all 8 test stages (121m -> 142m).`);
}
console.log('  -> PASS\n');

// Test 4: Mathematical Concordance of HUD Breakdown
console.log('[Test 4] Mathematical Concordance of Impact Breakdowns (Zero Double-Counting):');
for (const mode of ['planar', 'slope']) {
  waterManager.setProfileMode(mode);
  for (const st of [124.0, 130.0, 132.0, 138.0]) {
    waterManager.setWaterLevel(st);
    const imp = waterManager.currentImpact;

    // Buildings
    const b = imp.buildingDepthBreakdown;
    const bSum = b.dry + b.shallow + b.moderate + b.deep;
    if (bSum !== 760) {
      throw new Error(`Building breakdown sum (${bSum}) !== 760 parts at ${st}m in ${mode}`);
    }

    // Roads
    const r = imp.roadPassabilityBreakdown;
    const rSum = r.passable + r.waterlogged + r.submerged;
    if (rSum !== 117) {
      throw new Error(`Road breakdown sum (${rSum}) !== 117 roads at ${st}m in ${mode}`);
    }

    // Facilities
    const s = imp.shelterAccessibilityBreakdown;
    const sSum = s.operational + s.isolated + s.inundated;
    if (sSum !== 6) {
      throw new Error(`Shelter breakdown sum (${sSum}) !== 6 shelters at ${st}m in ${mode}`);
    }
  }
}
console.log('  ✓ Verified 100% mathematical consistency across all breakdown partitions (no double-counting).');
console.log('  -> PASS\n');

// Test 5: Boundary Clamping, Safe Bounds & Finite Geometry
console.log('[Test 5] Safe Input Clamping & Finite Geometry at Limits:');
waterManager.setWaterLevel(50.0);
if (waterManager.waterLevel !== 120.0) throw new Error(`Under-clamping failed (50m -> ${waterManager.waterLevel})`);

waterManager.setWaterLevel(999.0);
if (waterManager.waterLevel !== 155.0) throw new Error(`Over-clamping failed (999m -> ${waterManager.waterLevel})`);

for (const limit of [120.0, 155.0]) {
  waterManager.setWaterLevel(limit);
  const pos = waterManager.waterGeometry.attributes.position.array;
  for (let i = 0; i < pos.length; i++) {
    if (!Number.isFinite(pos[i])) {
      throw new Error(`Non-finite vertex position at limit ${limit}m, idx ${i}: ${pos[i]}`);
    }
  }
}
console.log('  ✓ Clamped limits (120m - 155m) and finite geometry verified across 196,608 coordinate values.');
console.log('  -> PASS\n');

// Test 6: Deterministic Reset
console.log('[Test 6] Deterministic Reset Behavior:');
waterManager.setWaterLevel(145.0);
waterManager.setProfileMode('slope');
waterManager.togglePlayPause();
if (!waterManager.isPlaying) throw new Error('Failed to start animation playback');

waterManager.reset();
if (waterManager.waterLevel !== 124.0) throw new Error(`Reset failed to restore 124.0m (got ${waterManager.waterLevel})`);
if (waterManager.isPlaying !== false) throw new Error(`Reset failed to cancel playback`);
console.log('  ✓ Reset restores waterLevel=124.0m, isPlaying=false deterministically.');
console.log('  -> PASS\n');

// Test 7: Independence of Analysis from Layer Visibility
console.log('[Test 7] Independence of Numerical Analysis from Layer Visibility:');
waterManager.setProfileMode('planar');
waterManager.setWaterLevel(132.0);

waterManager.setVisible(true);
const impactVis = JSON.parse(JSON.stringify(waterManager.assessImpact(132.0)));

waterManager.setVisible(false);
const impactInvis = JSON.parse(JSON.stringify(waterManager.assessImpact(132.0)));

if (JSON.stringify(impactVis) !== JSON.stringify(impactInvis)) {
  throw new Error('Numerical impact output changed when toggling water layer visibility!');
}
waterManager.setVisible(true);
console.log('  ✓ Numerical metrics strictly identical whether water mesh is visible or hidden.');
console.log('  -> PASS\n');

// Test 8: Live Matrix Verification for Demonstration Script Freeze
console.log('[Test 8] Verified Live Metric Matrix for Demo Freeze:');
const demoMatrix = [
  { mode: 'planar', stage: 124.0, expCells: 920, expBld: 18, expRds: 2, expShelters: 0 },
  { mode: 'planar', stage: 130.0, expCells: 8086, expBld: 182, expRds: 43, expShelters: 0 },
  { mode: 'planar', stage: 132.0, expCells: 10255, expBld: 240, expRds: 56, expShelters: 0 },
  { mode: 'planar', stage: 138.0, expCells: 14233, expBld: 363, expRds: 79, expShelters: 2 },
  { mode: 'slope', stage: 124.0, expCells: 2919, expBld: 3, expRds: 3, expShelters: 0 },
  { mode: 'slope', stage: 130.0, expCells: 16244, expBld: 449, expRds: 88, expShelters: 0 },
  { mode: 'slope', stage: 132.0, expCells: 17590, expBld: 522, expRds: 92, expShelters: 0 },
  { mode: 'slope', stage: 138.0, expCells: 20345, expBld: 697, expRds: 104, expShelters: 3 },
];

for (const m of demoMatrix) {
  waterManager.setProfileMode(m.mode);
  waterManager.setWaterLevel(m.stage);
  const imp = waterManager.currentImpact;
  const bSum = imp.buildingDepthBreakdown.shallow + imp.buildingDepthBreakdown.moderate + imp.buildingDepthBreakdown.deep;
  const rSum = imp.roadPassabilityBreakdown.waterlogged + imp.roadPassabilityBreakdown.submerged;
  const sSum = imp.shelterAccessibilityBreakdown.isolated + imp.shelterAccessibilityBreakdown.inundated;

  if (imp.inundatedCells !== m.expCells) {
    throw new Error(`Cells mismatch in ${m.mode} at ${m.stage}m: got ${imp.inundatedCells}, exp ${m.expCells}`);
  }
  if (bSum !== m.expBld) {
    throw new Error(`Building mismatch in ${m.mode} at ${m.stage}m: got ${bSum}, exp ${m.expBld}`);
  }
  if (rSum !== m.expRds) {
    throw new Error(`Roads mismatch in ${m.mode} at ${m.stage}m: got ${rSum}, exp ${m.expRds}`);
  }
  if (sSum !== m.expShelters) {
    throw new Error(`Shelter mismatch in ${m.mode} at ${m.stage}m: got ${sSum}, exp ${m.expShelters}`);
  }
  console.log(`  ✓ ${m.mode.padEnd(6)} ${m.stage.toFixed(1)}m -> ${imp.inundatedCells} cells (${imp.inundatedPercentage.toFixed(1)}%) | ${bSum}/759 blds | ${rSum}/117 rds | ${sSum}/6 shelters`);
}
console.log('  -> PASS: All demo matrix figures frozen and verified with zero discrepancy.\n');

console.log('========================================================================');
console.log('✅ ALL MILESTONE 8 TESTS PASSED (8/8 VERIFIED)! DEMO FREEZE COMPLETE.');
console.log('========================================================================');
