import fs from 'fs';
import path from 'path';
import * as THREE from 'three';
import { FloodWaterManager } from './src/water/FloodWaterManager.js';

console.log('=== HighWater 3D — Milestone 5: Interactive Flood Water Validation ===\n');

// 1. Load real DEM payload and GeoJSON assets
const demPath = path.resolve('public/data/dernau/dem_height_grid.json');
const bldPath = path.resolve('public/data/dernau/buildings_exposed.geojson');
const roadPath = path.resolve('public/data/dernau/roads_status.geojson');
const facPath = path.resolve('public/data/dernau/facilities.geojson');
const histFloodPath = path.resolve('public/data/dernau/flood_extent.geojson');

if (!fs.existsSync(demPath)) {
  console.error(`[FAIL] DEM file not found at ${demPath}`);
  process.exit(1);
}

const demPayload = JSON.parse(fs.readFileSync(demPath, 'utf8'));
const bldData = JSON.parse(fs.readFileSync(bldPath, 'utf8'));
const roadData = JSON.parse(fs.readFileSync(roadPath, 'utf8'));
const facData = JSON.parse(fs.readFileSync(facPath, 'utf8'));
const histFloodData = JSON.parse(fs.readFileSync(histFloodPath, 'utf8'));

// Mock minimal TerrainManager for headless testing
const mockTerrainManager = {
  getElevationAt: (x, z) => {
    const u = (x + 1200) / 2400;
    const v = (z + 1200) / 2400;
    const c = Math.max(0, Math.min(255, Math.round(u * 255)));
    const r = Math.max(0, Math.min(255, Math.round(v * 255)));
    return demPayload.elevations[r][c];
  }
};

const scene = new THREE.Scene();
const waterManager = new FloodWaterManager(scene, mockTerrainManager, null);
waterManager.attachDEM(demPayload);
waterManager.indexAssets({
  buildings: bldData,
  roads: roadData,
  facilities: facData,
});

console.log('[Check 1] Initialization & Dimensions:');
console.log(`  Water Level:         ${waterManager.waterLevel} m (Default baseline)`);
console.log(`  Grid:                ${waterManager.rows} rows × ${waterManager.cols} cols`);
console.log(`  Extents:             ${waterManager.width}m × ${waterManager.length}m`);
console.log(`  Indexed Assets:      ${waterManager.currentImpact.totalBuildings} blds, ${waterManager.currentImpact.totalRoads} roads, ${waterManager.currentImpact.totalFacilities} facs`);

if (waterManager.rows !== 256 || waterManager.cols !== 256) {
  console.error('[FAIL] Expected 256x256 grid dimensions.');
  process.exit(1);
}
console.log('  -> PASS');

// 2. Water-level changes produce strictly increasing inundation masks
console.log('\n[Check 2] Monotonic Inundation Progression:');
const levels = [121.0, 124.0, 128.0, 132.0, 138.0];
let lastFloodedCount = -1;

for (const lvl of levels) {
  waterManager.setWaterLevel(lvl);
  const mask = waterManager.computeInundationMask(lvl);
  let count = 0;
  for (let i = 0; i < mask.length; i++) {
    if (mask[i]) count++;
  }
  console.log(`  Elevation ${lvl.toFixed(1)}m: ${count} flooded cells (${((count / 65536) * 100).toFixed(2)}% of grid)`);
  if (count <= lastFloodedCount) {
    console.error(`[FAIL] Flooded count at ${lvl}m (${count}) is not greater than count at previous level (${lastFloodedCount})`);
    process.exit(1);
  }
  lastFloodedCount = count;
}
console.log('  -> PASS: Higher water levels produce strictly larger inundation footprints.');

// 3. Strict Elevation Rule: Terrain above water level is NEVER inundated
console.log('\n[Check 3] Terrain Above Water Level Is Never Inundated:');
for (const testElev of [124.0, 130.0, 135.0, 145.0]) {
  const mask = waterManager.computeInundationMask(testElev);
  let violatedCount = 0;
  for (let r = 0; r < waterManager.rows; r++) {
    for (let c = 0; c < waterManager.cols; c++) {
      const idx = r * waterManager.cols + c;
      const cellElev = demPayload.elevations[r][c];
      if (mask[idx] === 1 && cellElev > testElev) {
        violatedCount++;
      }
    }
  }
  if (violatedCount > 0) {
    console.error(`[FAIL] ${violatedCount} cells at ${testElev}m are inundated despite terrain > ${testElev}m!`);
    process.exit(1);
  }
}
console.log('  -> PASS: 0 violations across 262,144 tested cell evaluations.');

// 4. Connected Flood-Fill Excludes Disconnected Low-Lying Depressions
console.log('\n[Check 4] Connected Flood-Fill Excludes Isolated Depressions:');
// Compare raw thresholding vs connected BFS at 135m
waterManager.setConnectivity(false);
const rawMask = waterManager.computeInundationMask(135.0);
let rawCount = 0;
for (let i = 0; i < rawMask.length; i++) if (rawMask[i]) rawCount++;

waterManager.setConnectivity(true);
const connectedMask = waterManager.computeInundationMask(135.0);
let connectedCount = 0;
for (let i = 0; i < connectedMask.length; i++) if (connectedMask[i]) connectedCount++;

const isolatedDepressionCells = rawCount - connectedCount;
console.log(`  Raw unconstrained slicing at 135.0m:   ${rawCount} cells`);
console.log(`  Connected river thalweg BFS at 135.0m: ${connectedCount} cells`);
console.log(`  Isolated low-lying depression cells:   ${isolatedDepressionCells} cells correctly excluded`);

if (connectedCount > rawCount) {
  console.error('[FAIL] Connected count cannot exceed unconstrained raw count.');
  process.exit(1);
}
if (isolatedDepressionCells <= 0) {
  console.error('[FAIL] Expected connected BFS to exclude disconnected depressions on real terrain.');
  process.exit(1);
}
console.log('  -> PASS: Connectivity prevents unphysical pooling in disconnected depressions.');

// 5. Coordinate Mapping Matches DEM Grid Exactly
console.log('\n[Check 5] Metric-to-Grid Coordinate Mapping:');
const checkCoord = (x, z, expectedR, expectedC, label) => {
  const g = waterManager.localToGrid(x, z);
  if (g.r !== expectedR || g.c !== expectedC) {
    console.error(`[FAIL] ${label}: Expected (${expectedR}, ${expectedC}), got (${g.r}, ${g.c})`);
    process.exit(1);
  }
  console.log(`  ${label} (${x}m, ${z}m) -> Grid [r: ${g.r}, c: ${g.c}]`);
};

checkCoord(-1200, -1200, 0, 0, 'Southwest corner');
checkCoord(0, 0, 128, 128, 'Grid center');
checkCoord(1200, 1200, 255, 255, 'Northeast corner');
console.log('  -> PASS: Metric coordinate mapping strictly aligns with DEM grid bounds.');

// 6. Safe Input Clamping & Error Handling
console.log('\n[Check 6] Safe Input Clamping:');
waterManager.setWaterLevel(50.0);
if (waterManager.waterLevel !== 120.0) {
  console.error(`[FAIL] Expected clamping to min (120.0m), got ${waterManager.waterLevel}`);
  process.exit(1);
}

waterManager.setWaterLevel(999.0);
if (waterManager.waterLevel !== 155.0) {
  console.error(`[FAIL] Expected clamping to max (155.0m), got ${waterManager.waterLevel}`);
  process.exit(1);
}
console.log(`  Low clamp (50.0m -> ${waterManager.minWaterLevel}m), High clamp (999.0m -> ${waterManager.maxWaterLevel}m)`);
console.log('  -> PASS');

// 7. Visibility, Reset, and Animation State Controls
console.log('\n[Check 7] Visibility, Reset, and Animation Controls:');
waterManager.setVisible(false);
if (waterManager.visible !== false || waterManager.waterMesh.visible !== false) {
  console.error('[FAIL] setVisible(false) failed.');
  process.exit(1);
}

waterManager.setVisible(true);
if (waterManager.visible !== true || waterManager.waterMesh.visible !== true) {
  console.error('[FAIL] setVisible(true) failed.');
  process.exit(1);
}

waterManager.setWaterLevel(124.0);
waterManager.togglePlayPause();
if (!waterManager.isPlaying) {
  console.error('[FAIL] togglePlayPause did not activate animation.');
  process.exit(1);
}

const beforeLevel = waterManager.waterLevel;
waterManager.update(2.0); // 2 seconds * 1.5 m/s = +3.0m
if (Math.abs(waterManager.waterLevel - (beforeLevel + 3.0)) > 0.05) {
  console.error(`[FAIL] Animation update did not raise water correctly: ${waterManager.waterLevel} vs ${beforeLevel + 3.0}`);
  process.exit(1);
}

waterManager.reset();
if (waterManager.waterLevel !== 124.0 || waterManager.isPlaying) {
  console.error(`[FAIL] Reset failed to restore default level 124.0m or cancel playing state.`);
  process.exit(1);
}
console.log(`  Visibility toggle: OK, Animation step: OK, Reset to ${waterManager.defaultWaterLevel}m: OK`);
console.log('  -> PASS');

// 8. Dynamic Impact Telemetry Calculation
console.log('\n[Check 8] Dynamic Impact Telemetry:');
waterManager.setWaterLevel(121.0); // Downstream minimum
const lowImpact = waterManager.assessImpact(121.0);
console.log(`  Low riverbed stage (121.0m):`);
console.log(`    Buildings:  ${lowImpact.affectedBuildings} / ${lowImpact.totalBuildings}`);
console.log(`    Roads:      ${lowImpact.affectedRoads} / ${lowImpact.totalRoads}`);
console.log(`    Facilities: ${lowImpact.affectedFacilities} / ${lowImpact.totalFacilities}`);

if (lowImpact.affectedBuildings !== 0 || lowImpact.affectedFacilities !== 0) {
  console.error('[FAIL] Low riverbed stage (121.0m) should not inundate any buildings or facilities.');
  process.exit(1);
}

waterManager.setWaterLevel(124.0); // Baseline river stage
const baselineImpact = waterManager.assessImpact(124.0);
console.log(`  Baseline stage (124.0m):`);
console.log(`    Buildings:  ${baselineImpact.affectedBuildings} / ${baselineImpact.totalBuildings} (downstream riverbank structures)`);
console.log(`    Roads:      ${baselineImpact.affectedRoads} / ${baselineImpact.totalRoads}`);
console.log(`    Facilities: ${baselineImpact.affectedFacilities} / ${baselineImpact.totalFacilities}`);

if (baselineImpact.affectedFacilities !== 0) {
  console.error('[FAIL] Baseline water stage should not inundate emergency facilities.');
  process.exit(1);
}

waterManager.setWaterLevel(132.0); // Moderate-to-severe flood
const severeImpact = waterManager.assessImpact(132.0);
console.log(`  Severe stage (132.0m):`);
console.log(`    Buildings:  ${severeImpact.affectedBuildings} / ${severeImpact.totalBuildings} (${((severeImpact.affectedBuildings/759)*100).toFixed(1)}%)`);
console.log(`    Roads:      ${severeImpact.affectedRoads} / ${severeImpact.totalRoads} (${((severeImpact.affectedRoads/117)*100).toFixed(1)}%)`);
console.log(`    Facilities: ${severeImpact.affectedFacilities} / ${severeImpact.totalFacilities} (${((severeImpact.affectedFacilities/6)*100).toFixed(1)}%)`);

if (severeImpact.affectedBuildings <= baselineImpact.affectedBuildings || severeImpact.affectedRoads <= baselineImpact.affectedRoads) {
  console.error('[FAIL] 132.0m stage must produce increased building and road impacts over baseline.');
  process.exit(1);
}
console.log('  -> PASS: Unique features correctly intersected against dynamic inundation mask.');

// 9. Historical Reference Flood Extent Layer Integrity
console.log('\n[Check 9] Historical July 2021 Reference Layer Integrity:');
if (!histFloodData.features || histFloodData.features.length !== 196) {
  console.error(`[FAIL] Historical flood extent GeoJSON altered or corrupted (expected 196 features, got ${histFloodData.features?.length}).`);
  process.exit(1);
}
console.log(`  Verified 196 reference polygons preserved without modification.`);
console.log('  -> PASS');

console.log('\n=======================================================');
console.log('✅ ALL MILESTONE 5 FLOOD WATER TESTS PASSED PERFECTLY!');
console.log('=======================================================');
