import fs from 'fs';
import path from 'path';
import * as THREE from 'three';
import { FloodWaterManager, THALWEG_PROFILE } from './src/water/FloodWaterManager.js';
import { BuildingLayer } from './src/overlays/BuildingLayer.js';
import { RoadLayer } from './src/overlays/RoadLayer.js';
import { FacilityLayer } from './src/overlays/FacilityLayer.js';

console.log('=== HighWater 3D — Milestone 7: Reliability & Presentation Consistency Test Suite ===\n');

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

// Mock Terrain Manager
const mockTerrain = {
  getElevationAt: (x, z) => {
    const u = (x + 1200) / 2400;
    const v = (z + 1200) / 2400;
    const c = Math.max(0, Math.min(255, Math.round(u * 255)));
    const r = Math.max(0, Math.min(255, Math.round(v * 255)));
    return demPayload.elevations[r][c];
  },
};

const scene = new THREE.Scene();
const waterManager = new FloodWaterManager(scene, mockTerrain, null);
waterManager.attachDEM(demPayload);
waterManager.indexAssets({
  buildings: bldData,
  roads: roadData,
  facilities: facData,
});

// Test 2: Min and Max Level Boundary Checks & Non-Finite Geometry Verification
console.log('[Test 2] Boundary Conditions (Min 120.0m & Max 155.0m) & Finite Geometry:');
for (const testLevel of [120.0, 155.0]) {
  waterManager.setWaterLevel(testLevel);
  const geom = waterManager.waterGeometry;
  const pos = geom.attributes.position.array;
  for (let i = 0; i < pos.length; i++) {
    if (!Number.isFinite(pos[i])) {
      throw new Error(`Non-finite vertex position detected at level ${testLevel}m: index ${i} = ${pos[i]}`);
    }
  }
  const impact = waterManager.currentImpact;
  if (!Number.isFinite(impact.waterLevel) || !Number.isFinite(impact.inundatedCells)) {
    throw new Error(`Non-finite impact metric detected at level ${testLevel}m`);
  }
}
console.log(`  ✓ Evaluated 196,608 position coordinates at 120.0m and 155.0m: 0 NaNs, 0 infinities.`);
console.log('  -> PASS\n');

// Test 3: Water Visibility Does Not Alter Impact Calculations
console.log('[Test 3] Water Visibility Independence on Numerical Impact:');
waterManager.setWaterLevel(132.0);
waterManager.setVisible(true);
const impactVisible = JSON.parse(JSON.stringify(waterManager.assessImpact(132.0)));

waterManager.setVisible(false);
const impactHidden = JSON.parse(JSON.stringify(waterManager.assessImpact(132.0)));

if (impactVisible.affectedBuildings !== impactHidden.affectedBuildings) {
  throw new Error(`Building count mismatch: visible=${impactVisible.affectedBuildings} vs hidden=${impactHidden.affectedBuildings}`);
}
if (impactVisible.affectedRoads !== impactHidden.affectedRoads) {
  throw new Error(`Road count mismatch: visible=${impactVisible.affectedRoads} vs hidden=${impactHidden.affectedRoads}`);
}
if (impactVisible.affectedFacilities !== impactHidden.affectedFacilities) {
  throw new Error(`Facility count mismatch: visible=${impactVisible.affectedFacilities} vs hidden=${impactHidden.affectedFacilities}`);
}
waterManager.setVisible(true);
console.log(`  ✓ Impact metrics strictly identical whether water layer mesh is visible or hidden.`);
console.log('  -> PASS\n');

// Test 4: Reset Returns to Documented Default and Stops Playback
console.log('[Test 4] Reset Control Determinism & State Restoration:');
waterManager.setWaterLevel(140.0);
waterManager.togglePlayPause(); // start playing
if (!waterManager.isPlaying) throw new Error('Failed to start playing state');

waterManager.reset();
if (waterManager.waterLevel !== 124.0) {
  throw new Error(`Reset failed to restore default level 124.0m, got ${waterManager.waterLevel}`);
}
if (waterManager.isPlaying !== false) {
  throw new Error(`Reset failed to cancel isPlaying state`);
}
const resetImpact = waterManager.currentImpact;
if (resetImpact.affectedBuildings !== 18 || resetImpact.affectedRoads !== 9 || resetImpact.affectedFacilities !== 0) {
  throw new Error(`Reset did not restore baseline impact stats (got ${resetImpact.affectedBuildings} blds, ${resetImpact.affectedRoads} roads)`);
}
console.log(`  ✓ Reset restored level to ${waterManager.defaultWaterLevel}m, isPlaying=false, baseline impact verified.`);
console.log('  -> PASS\n');

// Test 5: Profile Mode Consistency & Water Mask Updates
console.log('[Test 5] Slope-Aware vs Planar Profile Switching:');
waterManager.setProfileMode('planar');
waterManager.setWaterLevel(130.0);
const planarImpact = JSON.parse(JSON.stringify(waterManager.currentImpact));

waterManager.setProfileMode('slope');
const slopeImpact = JSON.parse(JSON.stringify(waterManager.currentImpact));

if (planarImpact.inundatedCells === slopeImpact.inundatedCells) {
  throw new Error('Expected planar and slope-aware profiles to produce distinct physical inundation footprints.');
}
console.log(`  ✓ Planar: ${planarImpact.inundatedCells} cells (${planarImpact.affectedBuildings} blds), Slope-Aware: ${slopeImpact.inundatedCells} cells (${slopeImpact.affectedBuildings} blds).`);
console.log('  -> PASS\n');

// Test 6: Building & Road Styling Restoration
console.log('[Test 6] Dynamic Analytical Shading vs Historical Styling Restoration:');
const buildingLayer = new BuildingLayer(scene, mockTerrain);
buildingLayer.buildGeometry(bldData);
const roadLayer = new RoadLayer(scene, mockTerrain);
roadLayer.buildGeometry(roadData);

// Set dynamic modes
buildingLayer.setDepthColorMode('dynamic-depth');
buildingLayer.updateBuildingDepths((x, z) => 135.0);
roadLayer.setPassabilityMode('dynamic-passability');
roadLayer.updatePassability((x, z) => 135.0);

// Restore historical modes
buildingLayer.setDepthColorMode('historical');
buildingLayer.updateBuildingDepths((x, z) => 135.0);
roadLayer.setPassabilityMode('historical');
roadLayer.updatePassability((x, z) => 135.0);

const bldColors = buildingLayer.buildingsMesh.geometry.attributes.color.array;
const roadColors = roadLayer.roadsMesh.geometry.attributes.color.array;

// Count restored colors
let amberBld = 0, slateBld = 0;
for (const f of buildingLayer.features) {
  const r = bldColors[f.vertexStart * 3 + 0];
  if (Math.abs(r - 0.96) < 0.05) amberBld++;
  else if (Math.abs(r - 0.39) < 0.05) slateBld++;
}
if (amberBld !== 204 || slateBld !== 556) {
  throw new Error(`Historical building color restoration mismatch: amber=${amberBld} (exp 204 parts), slate=${slateBld} (exp 556)`);
}

let roseRoad = 0, cyanRoad = 0;
for (const f of roadLayer.features) {
  const r = roadColors[f.vertexStart * 3 + 0];
  if (Math.abs(r - 0.96) < 0.05) roseRoad++;
  else if (Math.abs(r - 0.22) < 0.05) cyanRoad++;
}
if (roseRoad !== 45 || cyanRoad !== 72) {
  throw new Error(`Historical road color restoration mismatch: rose=${roseRoad} (exp 45), cyan=${cyanRoad} (exp 72)`);
}
console.log('  ✓ Exactly 204 flooded/556 normal building parts and 45 cutoff/72 open roads restored to SpaceNet 8 colors.');
console.log('  -> PASS\n');

// Test 7: Non-Duplication of Features
console.log('[Test 7] Feature Counting Non-Duplication:');
buildingLayer.setDepthColorMode('dynamic-depth');
const bldStats = buildingLayer.updateBuildingDepths((x, z) => 132.0);
const bldSum = bldStats.dry + bldStats.shallow + bldStats.moderate + bldStats.deep;
if (bldSum !== buildingLayer.features.length) {
  throw new Error(`Building depth sum (${bldSum}) !== total features (${buildingLayer.features.length})`);
}

roadLayer.setPassabilityMode('dynamic-passability');
const roadStats = roadLayer.updatePassability((x, z) => 132.0);
const roadSum = roadStats.passable + roadStats.waterlogged + roadStats.submerged;
if (roadSum !== 117) {
  throw new Error(`Road passability sum (${roadSum}) !== 117 features`);
}

const facImpact = waterManager.assessImpact(132.0);
const facSum = facImpact.shelterSummary.operational + facImpact.shelterSummary.isolated + facImpact.shelterSummary.inundated;
if (facSum !== 6) {
  throw new Error(`Shelter summary sum (${facSum}) !== 6 facilities`);
}
console.log(`  ✓ Buildings (760 parts = 759 features), Roads (117), Shelters (6) partition with zero double-counting.`);
console.log('  -> PASS\n');

console.log('========================================================================');
console.log('✅ ALL MILESTONE 7 CONSISTENCY & RELIABILITY TESTS PASSED (7/7 VERIFIED)!');
console.log('========================================================================');
