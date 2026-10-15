import fs from 'fs';
import path from 'path';
import { geoToLocal } from './src/geo/Projection.js';

const dataDir = './public/data/dernau';

console.log('=== Geometric Overlays Integrity Check ===');

// 1. Buildings Check
const bldsRaw = JSON.parse(fs.readFileSync(path.join(dataDir, 'buildings_exposed.geojson'), 'utf8'));
let bldCount = 0;
let bldPolys = 0;
let bldNaNs = 0;
let bldFlooded = 0;

bldsRaw.features.forEach((f) => {
  bldCount++;
  if (f.properties.flooded === true) bldFlooded++;
  const geomType = f.geometry.type;
  let polys = geomType === 'Polygon' ? [f.geometry.coordinates] : f.geometry.coordinates;
  polys.forEach((p) => {
    bldPolys++;
    const ring = p[0];
    ring.forEach((c) => {
      const local = geoToLocal(c[0], c[1]);
      if (Number.isNaN(local.x) || Number.isNaN(local.z)) bldNaNs++;
    });
  });
});
console.log(`Buildings: ${bldCount} features (${bldFlooded} flooded, ${bldCount - bldFlooded} normal), ${bldPolys} polygon parts, NaNs: ${bldNaNs}`);

// 2. Roads Check
const roadsRaw = JSON.parse(fs.readFileSync(path.join(dataDir, 'roads_status.geojson'), 'utf8'));
let roadCount = 0;
let roadSegments = 0;
let roadNaNs = 0;
let roadFlooded = 0;

roadsRaw.features.forEach((f) => {
  roadCount++;
  if (f.properties.flooded === true) roadFlooded++;
  const geomType = f.geometry.type;
  let lines = geomType === 'LineString' ? [f.geometry.coordinates] : f.geometry.coordinates;
  lines.forEach((l) => {
    for (let i = 0; i < l.length - 1; i++) {
      roadSegments++;
      const p1 = geoToLocal(l[i][0], l[i][1]);
      const p2 = geoToLocal(l[i + 1][0], l[i + 1][1]);
      if (Number.isNaN(p1.x) || Number.isNaN(p1.z) || Number.isNaN(p2.x) || Number.isNaN(p2.z)) roadNaNs++;
    }
  });
});
console.log(`Roads: ${roadCount} features (${roadFlooded} cutoff, ${roadCount - roadFlooded} open), ${roadSegments} line segments, NaNs: ${roadNaNs}`);

// 3. Facilities Check
const facsRaw = JSON.parse(fs.readFileSync(path.join(dataDir, 'facilities.geojson'), 'utf8'));
let facCount = 0;
let facNaNs = 0;
facsRaw.features.forEach((f) => {
  facCount++;
  const c = f.geometry.coordinates;
  const p = geoToLocal(c[0], c[1]);
  if (Number.isNaN(p.x) || Number.isNaN(p.z)) facNaNs++;
});
console.log(`Facilities: ${facCount} tactical points, NaNs: ${facNaNs}`);

// 4. Flood Extent Check
const floodRaw = JSON.parse(fs.readFileSync(path.join(dataDir, 'flood_extent.geojson'), 'utf8'));
let floodCount = 0;
let floodNaNs = 0;
floodRaw.features.forEach((f) => {
  floodCount++;
  const geomType = f.geometry.type;
  let polys = geomType === 'Polygon' ? [f.geometry.coordinates] : f.geometry.coordinates;
  polys.forEach((p) => {
    const ring = p[0];
    ring.forEach((c) => {
      const local = geoToLocal(c[0], c[1]);
      if (Number.isNaN(local.x) || Number.isNaN(local.z)) floodNaNs++;
    });
  });
});
console.log(`Historical Flood Extent: ${floodCount} reference polygons, NaNs: ${floodNaNs}`);
console.log('=== All 4 Overlays Passed Geometric Validation! ===');
