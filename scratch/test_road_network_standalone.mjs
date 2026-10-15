import fs from 'fs';
import { RoadNetwork, ROAD_STATUS } from '../src/geo/RoadNetwork.js';

const demPayload = JSON.parse(fs.readFileSync('public/data/dernau/dem_height_grid.json', 'utf8'));
const roadGeojson = JSON.parse(fs.readFileSync('public/data/dernau/roads_status.geojson', 'utf8'));

const elevations = demPayload.elevations;
const rows = elevations.length;
const cols = elevations[0].length;
const width = 2400;
const length = 2400;

const mockTerrain = {
  getElevationAt(x, z) {
    const u = (x + width / 2.0) / width;
    const v = (z + length / 2.0) / length;
    if (u < 0 || u > 1 || v < 0 || v > 1) return null;
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

const rn = new RoadNetwork(mockTerrain);
const summary = rn.buildFromGeoJSON(roadGeojson);

console.log('--- RoadNetwork Build Summary ---');
console.log(summary);

console.log('\n--- Scenario 124m Planar ---');
const res124 = rn.evaluateScenario((x, z) => 124.0);
console.log(res124);

console.log('\n--- Scenario 132m Planar ---');
const res132 = rn.evaluateScenario((x, z) => 132.0);
console.log(res132);

console.log('\n--- Sample Feature Check ---');
const sampleFeat = rn.getFeatures()[0];
console.log(sampleFeat);
