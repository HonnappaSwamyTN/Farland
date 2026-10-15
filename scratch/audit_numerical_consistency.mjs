import fs from 'fs';
import path from 'path';
import { FloodWaterManager } from '../src/water/FloodWaterManager.js';
import { geoToLocal } from '../src/geo/Projection.js';
import { BuildingLayer } from '../src/overlays/BuildingLayer.js';
import { RoadLayer } from '../src/overlays/RoadLayer.js';
import { FacilityLayer } from '../src/overlays/FacilityLayer.js';

const demPayload = JSON.parse(fs.readFileSync('public/data/dernau/dem_height_grid.json', 'utf8'));
const bldGeojson = JSON.parse(fs.readFileSync('public/data/dernau/buildings_exposed.geojson', 'utf8'));
const roadGeojson = JSON.parse(fs.readFileSync('public/data/dernau/roads_status.geojson', 'utf8'));
const facGeojson = JSON.parse(fs.readFileSync('public/data/dernau/facilities.geojson', 'utf8'));

console.log('Loaded datasets:');
console.log(`Buildings: ${bldGeojson.features.length} features`);
console.log(`Roads: ${roadGeojson.features.length} features`);
console.log(`Facilities: ${facGeojson.features.length} features`);

let totalPolygons = 0;
for (const f of bldGeojson.features) {
  if (f.geometry.type === 'MultiPolygon') {
    totalPolygons += f.geometry.coordinates.length;
  } else {
    totalPolygons += 1;
  }
}
console.log(`Total building polygon parts: ${totalPolygons}`);

const elevations = demPayload.elevations;
const rows = elevations.length;
const cols = elevations[0].length;
const width = 2400;
const length = 2400;

const mockTerrainManager = {
  getElevationAt(x, z) {
    const u = (x + width / 2.0) / width;
    const v = (z + length / 2.0) / length;
    const c = Math.max(0, Math.min(cols - 1, u * (cols - 1)));
    const r = Math.max(0, Math.min(rows - 1, v * (rows - 1)));
    const c0 = Math.floor(c), c1 = Math.min(cols - 1, c0 + 1);
    const r0 = Math.floor(r), r1 = Math.min(rows - 1, r0 + 1);
    const fc = c - c0, fr = r - r0;
    const top = (1 - fc) * elevations[r0][c0] + fc * elevations[r0][c1];
    const bot = (1 - fc) * elevations[r1][c0] + fc * elevations[r1][c1];
    return (1 - fr) * top + fr * bot;
  }
};

const mockScene = {
  add() {},
  remove() {}
};

// Create real overlay layers to test their internal depth and passability calculators
const bldLayer = new BuildingLayer(mockScene, mockTerrainManager);
bldLayer.buildGeometry(bldGeojson);

const roadLayer = new RoadLayer(mockScene, mockTerrainManager);
roadLayer.buildGeometry(roadGeojson);

const facLayer = new FacilityLayer(mockScene, mockTerrainManager);
facLayer.buildGeometry(facGeojson);

const overlayManager = {
  buildingLayer: bldLayer,
  roadLayer: roadLayer,
  facilityLayer: facLayer,
  updateImpacts(waterElevLookup, accessibilityMap) {
    const b = bldLayer.updateBuildingDepths(waterElevLookup);
    const r = roadLayer.updatePassability(waterElevLookup);
    const f = facLayer.updateAccessibility(accessibilityMap);
    return { buildings: b, roads: r, facilities: f };
  }
};

const wm = new FloodWaterManager(mockScene, mockTerrainManager, overlayManager);
wm.attachDEM(demPayload);
wm.indexAssets({
  buildings: bldGeojson,
  roads: roadGeojson,
  facilities: facGeojson
});

const stages = [124.0, 130.0, 132.0, 138.0];
const modes = ['planar', 'slope'];

console.log('\n==================================================================================================================');
console.log('                          AUDIT OF IMPACT COUNTS ACROSS STAGES & MODES');
console.log('==================================================================================================================');

for (const mode of modes) {
  wm.setProfileMode(mode);
  console.log(`\n=================== PROFILE MODE: ${mode.toUpperCase()} (Connected BFS: true) ===================`);
  console.log('Stage | Inundated Cells | Bldgs (Mask) | Bldgs (Depth S+M+D) | Roads (Mask) | Rds (Pass S+W) | Shelters (Iso+Inun)');
  console.log('------------------------------------------------------------------------------------------------------------------');
  
  for (const stage of stages) {
    wm.setWaterLevel(stage);
    const impact = wm.currentImpact;
    const b = impact.buildingDepthBreakdown;
    const bDepthSum = (b.shallow || 0) + (b.moderate || 0) + (b.deep || 0);
    const r = impact.roadPassabilityBreakdown;
    const rPassSum = (r.waterlogged || 0) + (r.submerged || 0);
    const s = impact.shelterAccessibilityBreakdown;
    const sIsoInun = (s.isolated || 0) + (s.inundated || 0);

    console.log(
      `${stage.toFixed(1)}m | ` +
      `${impact.inundatedCells.toString().padStart(6)} (${impact.inundatedPercentage.toFixed(1)}%) | ` +
      `${impact.affectedBuildings.toString().padStart(3)} / ${impact.totalBuildings} | ` +
      `${bDepthSum.toString().padStart(3)} / ${bldLayer.features.length} (S:${b.shallow} M:${b.moderate} D:${b.deep}) | ` +
      `${impact.affectedRoads.toString().padStart(3)} / ${impact.totalRoads} | ` +
      `${rPassSum.toString().padStart(3)} / ${impact.totalRoads} (W:${r.waterlogged} S:${r.submerged}) | ` +
      `${sIsoInun.toString().padStart(2)} / ${impact.totalFacilities} (Iso:${s.isolated} Inun:${s.inundated})`
    );
  }
}
