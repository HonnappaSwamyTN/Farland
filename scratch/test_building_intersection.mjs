import fs from 'fs';
import * as THREE from 'three';
import { BuildingLayer } from '../src/overlays/BuildingLayer.js';

const demPayload = JSON.parse(fs.readFileSync('public/data/dernau/dem_height_grid.json', 'utf8'));
const bldData = JSON.parse(fs.readFileSync('public/data/dernau/buildings_exposed.geojson', 'utf8'));

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
const layer = new BuildingLayer(scene, mockTerrain);
layer.buildGeometry(bldData);

console.log('=== Comprehensive Building-Terrain Intersection Audit ===\n');
console.log('Total building features:', layer.features.length);

const pos = layer.buildingsMesh.geometry.attributes.position;
let maxBaseGap = 0;
let maxRoofDeviation = 0;
let buriedCount = 0;
let floatingCount = 0;
let wrongCoordCount = 0;

layer.features.forEach((feat) => {
  const vStart = feat.vertexStart;
  const vCount = feat.vertexCount;
  
  let featMinY = Infinity, featMaxY = -Infinity;
  let featMinX = Infinity, featMaxX = -Infinity;
  let featMinZ = Infinity, featMaxZ = -Infinity;

  for (let i = vStart; i < vStart + vCount; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    const z = pos.getZ(i);
    if (x < featMinX) featMinX = x;
    if (x > featMaxX) featMaxX = x;
    if (z < featMinZ) featMinZ = z;
    if (z > featMaxZ) featMaxZ = z;
    if (y < featMinY) featMinY = y;
    if (y > featMaxY) featMaxY = y;

    const terrainY = mockTerrain.getElevationAt(x, z);
    
    // Check if base vertex or roof vertex:
    const diff = y - terrainY;
    if (diff < -0.01) {
      // Vertex below ground
      buriedCount++;
    } else if (diff > 0.01 && diff < 5.99) {
      // Floating base vertex (between 0 and 6m)
      floatingCount++;
    } else if (diff >= 5.99) {
      const roofError = Math.abs(diff - 6.0);
      if (roofError > maxRoofDeviation) maxRoofDeviation = roofError;
    }
  }

  // Check bounding box and horizontal alignment:
  if (feat.bounds) {
    if (Math.abs(feat.bounds.min.x - featMinX) > 0.01 || Math.abs(feat.bounds.max.x - featMaxX) > 0.01 ||
        Math.abs(feat.bounds.min.z - featMinZ) > 0.01 || Math.abs(feat.bounds.max.z - featMaxZ) > 0.01) {
      wrongCoordCount++;
    }
  }
});

console.log('Buried vertices count (below terrain):', buriedCount);
console.log('Floating base vertices count (above terrain):', floatingCount);
console.log('Max roof height deviation from 6.0m:', maxRoofDeviation.toFixed(6), 'm');
console.log('Coordinate / bounding box mismatches:', wrongCoordCount);

// Sample representative buildings across different elevations and slopes:
const sortedByElev = [...layer.features].sort((a, b) => a.baseElevationM - b.baseElevationM);
const samples = [
  { label: 'Lowest Elevation (Valley Floor)', feat: sortedByElev[0] },
  { label: 'Low Elevation (Flood Corridor)', feat: sortedByElev[50] },
  { label: 'Medium Elevation (Town Center)', feat: sortedByElev[Math.floor(sortedByElev.length / 2)] },
  { label: 'High Elevation (Hill Flank)', feat: sortedByElev[sortedByElev.length - 50] },
  { label: 'Highest Elevation (Mountain Crest)', feat: sortedByElev[sortedByElev.length - 1] },
];

console.log('\n--- Representative Buildings Across Elevation Profiles ---');
samples.forEach(s => {
  const f = s.feat;
  console.log(`[${s.label}]`);
  console.log(`  ID: ${f.id} | Center: (X=${f.center.x.toFixed(1)}m, Y=${f.center.y.toFixed(1)}m, Z=${f.center.z.toFixed(1)}m)`);
  console.log(`  Base Elev: ${f.baseElevationM}m MSL | Bounds Y: [${f.bounds.min.y.toFixed(2)}m, ${f.bounds.max.y.toFixed(2)}m]`);
  console.log(`  Area: ${f.areaSqM} m² | Vertices: ${f.vertexCount}`);
});
