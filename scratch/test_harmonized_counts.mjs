import fs from 'fs';
import { FloodWaterManager } from '../src/water/FloodWaterManager.js';
import { BuildingLayer } from '../src/overlays/BuildingLayer.js';
import { RoadLayer } from '../src/overlays/RoadLayer.js';
import { FacilityLayer } from '../src/overlays/FacilityLayer.js';

const demPayload = JSON.parse(fs.readFileSync('public/data/dernau/dem_height_grid.json', 'utf8'));
const bldGeojson = JSON.parse(fs.readFileSync('public/data/dernau/buildings_exposed.geojson', 'utf8'));
const roadGeojson = JSON.parse(fs.readFileSync('public/data/dernau/roads_status.geojson', 'utf8'));
const facGeojson = JSON.parse(fs.readFileSync('public/data/dernau/facilities.geojson', 'utf8'));

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

const mockScene = { add() {}, remove() {} };

const bldLayer = new BuildingLayer(mockScene, mockTerrainManager);
bldLayer.buildGeometry(bldGeojson);

const roadLayer = new RoadLayer(mockScene, mockTerrainManager);
roadLayer.buildGeometry(roadGeojson);

const facLayer = new FacilityLayer(mockScene, mockTerrainManager);
facLayer.buildGeometry(facGeojson);

console.log('BuildingLayer features count:', bldLayer.features.length);
console.log('GeoJSON features count:', bldGeojson.features.length);

// Let's check why Bldgs (Mask) has 185 at 130m Planar vs Bldgs (Depth) has 182
// Let's inspect the 3 discrepant buildings
const wm = new FloodWaterManager(mockScene, mockTerrainManager);
wm.attachDEM(demPayload);
wm.indexAssets({ buildings: bldGeojson, roads: roadGeojson, facilities: facGeojson });
wm.setProfileMode('planar');
wm.setWaterLevel(130.0);

const mask = wm.computeInundationMask(130.0);

const maskedBlds = new Set();
wm.preIndexedAssets.buildings.forEach((b, idx) => {
  const cellIdx = b.grid.r * cols + b.grid.c;
  if (mask[cellIdx]) maskedBlds.add(b.id);
});

const depthBlds = new Set();
bldLayer.features.forEach((f) => {
  const waterElev = wm.getWaterElevationAt(f.center.x, f.center.z);
  const depth = waterElev - f.baseElevationM;
  if (depth > 0) {
    depthBlds.add(f.id);
  }
});

console.log('\nAt 130.0m Planar:');
console.log('In Mask set size:', maskedBlds.size);
console.log('In Depth set size:', depthBlds.size);

const inMaskNotDepth = [...maskedBlds].filter(x => !depthBlds.has(x));
const inDepthNotMask = [...depthBlds].filter(x => !maskedBlds.has(x));

console.log('In Mask but Depth <= 0:', inMaskNotDepth);
for (const id of inMaskNotDepth) {
  const b = wm.preIndexedAssets.buildings.find(x => x.id === id);
  const f = bldLayer.features.find(x => x.id === id);
  const cellElev = elevations[b.grid.r][b.grid.c];
  console.log(`  ${id}: gridElev=${cellElev}m, baseElevationM=${f.baseElevationM}m, diff=${(f.baseElevationM - cellElev).toFixed(3)}m`);
}

console.log('In Depth > 0 but not in Mask:', inDepthNotMask);
for (const id of inDepthNotMask) {
  const b = wm.preIndexedAssets.buildings.find(x => x.id === id);
  const f = bldLayer.features.find(x => x.id === id);
  const cellElev = elevations[b.grid.r][b.grid.c];
  console.log(`  ${id}: gridElev=${cellElev}m, baseElevationM=${f.baseElevationM}m, diff=${(f.baseElevationM - cellElev).toFixed(3)}m`);
}
