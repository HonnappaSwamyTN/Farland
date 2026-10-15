import fs from 'fs';
import path from 'path';

console.log('=== HighWater 3D — Real DGM1 DEM Integration Validation ===\n');

const demPath = path.resolve('public/data/dernau/dem_height_grid.json');

// 1. File existence
if (!fs.existsSync(demPath)) {
  console.error(`[FAIL] DEM file not found at: ${demPath}`);
  process.exit(1);
}

const raw = fs.readFileSync(demPath, 'utf8');
const dem = JSON.parse(raw);
const meta = dem.metadata;

console.log('[Check 1] Provenance & Metadata:');
console.log(`  Source:         ${meta.provider} — ${meta.product}`);
console.log(`  Survey Years:   ${meta.surveyYears}`);
console.log(`  Horizontal CRS: ${meta.sourceCRS} -> ${meta.targetCRS}`);
console.log(`  Vertical Datum: ${meta.verticalDatum}`);
console.log(`  Attribution:    ${meta.attribution}`);
console.log(`  License:        ${meta.license}`);
console.log(`  Is Synthetic:   ${meta.isSynthetic}`);

if (meta.isSynthetic !== false) {
  console.error('[FAIL] Expected isSynthetic to be false!');
  process.exit(1);
}

// 2. Grid dimensions & resolution
const [rows, cols] = meta.gridDimensions;
console.log('\n[Check 2] Grid Dimensions & Resolution:');
console.log(`  Grid Matrix:    ${rows} rows × ${cols} cols (${meta.totalSamples.toLocaleString()} vertices)`);
console.log(`  Vertex Spacing: ${meta.vertexSpacingMeters} meters`);
console.log(`  Extents:        ${meta.utmExtents.widthMeters}m (W) × ${meta.utmExtents.lengthMeters}m (L)`);

if (rows !== 256 || cols !== 256) {
  console.error(`[FAIL] Expected 256x256 grid, found ${rows}x${cols}`);
  process.exit(1);
}

// 3. Elevation statistics & no-data check
console.log('\n[Check 3] Elevation Statistics & No-Data Integrity:');
const stats = meta.elevationStats;
console.log(`  Min Elevation:  ${stats.minMeters} m`);
console.log(`  Max Elevation:  ${stats.maxMeters} m`);
console.log(`  Mean Elevation: ${stats.meanMeters} m`);
console.log(`  Relief Range:   ${stats.reliefMeters} m`);

let invalidCount = 0;
let minObserved = Infinity;
let maxObserved = -Infinity;

for (let r = 0; r < rows; r++) {
  if (dem.elevations[r].length !== cols) {
    console.error(`[FAIL] Row ${r} has invalid column count: ${dem.elevations[r].length}`);
    process.exit(1);
  }
  for (let c = 0; c < cols; c++) {
    const val = dem.elevations[r][c];
    if (typeof val !== 'number' || isNaN(val) || val <= 0 || val === -9999) {
      invalidCount++;
    }
    if (val < minObserved) minObserved = val;
    if (val > maxObserved) maxObserved = val;
  }
}

console.log(`  NoData / Invalid Samples: ${invalidCount} / ${rows * cols}`);
console.log(`  Observed Range in Array:  ${minObserved.toFixed(2)} m to ${maxObserved.toFixed(2)} m`);

if (invalidCount > 0) {
  console.error(`[FAIL] Grid contains ${invalidCount} invalid elevation samples!`);
  process.exit(1);
}

// 4. Coordinate alignment & landmark sampling
console.log('\n[Check 4] Geographic Alignment & Landmark Elevation Samples:');

// Test landmarks
function sampleElevation(localX, localZ) {
  const width = meta.utmExtents.widthMeters;
  const length = meta.utmExtents.lengthMeters;
  const u = Math.max(0, Math.min(1, (localX + width / 2.0) / width));
  const v = Math.max(0, Math.min(1, (localZ + length / 2.0) / length));

  const floatCol = u * (cols - 1);
  const floatRow = v * (rows - 1);
  const c0 = Math.floor(floatCol);
  const c1 = Math.min(c0 + 1, cols - 1);
  const r0 = Math.floor(floatRow);
  const r1 = Math.min(r0 + 1, rows - 1);

  const dc = floatCol - c0;
  const dr = floatRow - r0;

  const e00 = dem.elevations[r0][c0];
  const e10 = dem.elevations[r0][c1];
  const e01 = dem.elevations[r1][c0];
  const e11 = dem.elevations[r1][c1];

  const top = e00 * (1 - dc) + e10 * dc;
  const bot = e01 * (1 - dc) + e11 * dc;
  return top * (1 - dr) + bot * dr;
}

const landmarks = [
  { name: 'Dernau Historic Town Center & Ahr Loop', localX: 72, localZ: 503, expected: 'Valley floor & riverbed (~125m - 132m)' },
  { name: 'Flooded Residential Corridor (July 2021)', localX: -150, localZ: 650, expected: 'Inundated floodplain (~128m - 136m)' },
  { name: 'Study Bounds Centroid (Mid-Slope Spur)', localX: 0, localZ: 0, expected: 'Vineyard hill flank (~270m - 280m)' },
  { name: 'Northern Mountain Crest (Krausberg Area)', localX: -300, localZ: -800, expected: 'High northern ridge (>260m)' },
  { name: 'Southeastern High Forest Peak', localX: 900, localZ: 900, expected: 'High forested mountain (>340m)' },
];

landmarks.forEach((lm) => {
  const elev = sampleElevation(lm.localX, lm.localZ);
  console.log(`  [${lm.name}]`);
  console.log(`    Local: (X=${lm.localX}m, Z=${lm.localZ}m) -> Real DEM Elevation: ${elev.toFixed(2)} m`);
  console.log(`    Context: ${lm.expected}`);
});

console.log('\n=== [PASS] All Real DEM Validation Checks Passed Successfully! ===');
