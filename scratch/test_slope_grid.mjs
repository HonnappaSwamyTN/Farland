import fs from 'fs';

const dem = JSON.parse(fs.readFileSync('public/data/dernau/dem_height_grid.json'));
const rows = 256, cols = 256;
const width = 2400, length = 2400;

// Verified thalweg points from Dijkstra
const thalweg = [
  [205, 10, 139.74],
  [174, 41, 137.74],
  [151, 67, 134.71],
  [120, 79, 134.58],
  [132, 99, 131.83],
  [163, 102, 130.40],
  [193, 124, 129.84],
  [205, 155, 128.63],
  [217, 186, 127.45],
  [187, 213, 126.20],
  [156, 213, 125.63],
  [125, 223, 124.29],
  [94, 216, 123.33],
  [63, 224, 122.16],
  [32, 228, 120.97],
  [1, 233, 120.15]
];

// Convert thalweg points to metric (x, z, bedElev)
const thalwegMetric = thalweg.map(([r, c, e]) => ({
  x: (c / (cols - 1)) * width - width / 2,
  z: (r / (rows - 1)) * length - length / 2,
  e
}));

// Precompute cumulative lengths
let cumLen = 0;
thalwegMetric[0].dist = 0;
for (let i = 1; i < thalwegMetric.length; i++) {
  const p0 = thalwegMetric[i - 1];
  const p1 = thalwegMetric[i];
  cumLen += Math.hypot(p1.x - p0.x, p1.z - p0.z);
  p1.dist = cumLen;
}
console.log(`Total thalweg path length: ${cumLen.toFixed(1)}m`);

// For each grid cell, find nearest thalweg point or segment projection
const bedGrid = new Float32Array(rows * cols);
for (let r = 0; r < rows; r++) {
  const z = (r / (rows - 1)) * length - length / 2;
  for (let c = 0; c < cols; c++) {
    const x = (c / (cols - 1)) * width - width / 2;
    let minDistSq = Infinity;
    let interpBed = thalwegMetric[0].e;

    for (let i = 0; i < thalwegMetric.length - 1; i++) {
      const p0 = thalwegMetric[i];
      const p1 = thalwegMetric[i + 1];
      const dx = p1.x - p0.x;
      const dz = p1.z - p0.z;
      const segLenSq = dx * dx + dz * dz;

      let t = 0;
      if (segLenSq > 0) {
        t = Math.max(0, Math.min(1, ((x - p0.x) * dx + (z - p0.z) * dz) / segLenSq));
      }
      const projX = p0.x + t * dx;
      const projZ = p0.z + t * dz;
      const distSq = (x - projX) * (x - projX) + (z - projZ) * (z - projZ);

      if (distSq < minDistSq) {
        minDistSq = distSq;
        interpBed = p0.e + t * (p1.e - p0.e);
      }
    }
    bedGrid[r * cols + c] = interpBed;
  }
}

console.log('Precomputed bedGrid. Sample at [r=205, c=10]:', bedGrid[205 * cols + 10].toFixed(2));
console.log('Sample at [r=1, c=233]:', bedGrid[1 * cols + 233].toFixed(2));
console.log('Sample at [r=128, c=128]:', bedGrid[128 * cols + 128].toFixed(2));
