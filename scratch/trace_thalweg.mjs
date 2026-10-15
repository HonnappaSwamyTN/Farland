import fs from 'fs';

const dem = JSON.parse(fs.readFileSync('public/data/dernau/dem_height_grid.json'));
const rows = 256, cols = 256;
const elevs = dem.elevations;

// Let's use Dijkstra to find the true minimum-elevation cost path (thalweg) from inflow to outflow
// Cost function: penalize higher elevations heavily so the path strictly hugs the lowest riverbed
const startR = 205, startC = 10; // Inflow
const endR = 1, endC = 233;     // Outflow

const dist = Array.from({ length: rows }, () => new Float64Array(cols).fill(Infinity));
const prev = Array.from({ length: rows }, () => new Array(cols).fill(null));

dist[startR][startC] = 0;

// Simple priority queue (min-heap or sorted array for simplicity)
const pq = [{ r: startR, c: startC, cost: 0 }];

while (pq.length > 0) {
  // Sort small queue
  let bestIdx = 0;
  for (let i = 1; i < pq.length; i++) {
    if (pq[i].cost < pq[bestIdx].cost) bestIdx = i;
  }
  const curr = pq.splice(bestIdx, 1)[0];

  if (curr.r === endR && curr.c === endC) break;
  if (curr.cost > dist[curr.r][curr.c]) continue;

  const neighbors = [
    [curr.r - 1, curr.c], [curr.r + 1, curr.c],
    [curr.r, curr.c - 1], [curr.r, curr.c + 1],
    [curr.r - 1, curr.c - 1], [curr.r - 1, curr.c + 1],
    [curr.r + 1, curr.c - 1], [curr.r + 1, curr.c + 1],
  ];

  for (const [nr, nc] of neighbors) {
    if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
      const e = elevs[nr][nc];
      // Strongly prefer low elevations (e.g. e^4 or similar elevation penalty)
      const stepCost = Math.pow(Math.max(0, e - 120), 2) + 1.0;
      const newCost = curr.cost + stepCost;
      if (newCost < dist[nr][nc]) {
        dist[nr][nc] = newCost;
        prev[nr][nc] = { r: curr.r, c: curr.c };
        pq.push({ r: nr, c: nc, cost: newCost });
      }
    }
  }
}

// Reconstruct path
const path = [];
let curr = { r: endR, c: endC };
while (curr) {
  path.push(curr);
  curr = prev[curr.r][curr.c];
}
path.reverse();

console.log(`True thalweg path length: ${path.length} steps`);
const samplePoints = [];
const stepInterval = Math.floor(path.length / 15);
for (let i = 0; i < path.length; i += stepInterval) {
  const pt = path[i];
  samplePoints.push([pt.r, pt.c, elevs[pt.r][pt.c]]);
}
if (path.length > 0) {
  const last = path[path.length - 1];
  samplePoints.push([last.r, last.c, elevs[last.r][last.c]]);
}

console.log('Sampled thalweg points [r, c, elev]:');
samplePoints.forEach(([r, c, e], i) => {
  console.log(`  Point ${i}: [${r}, ${c}] elev = ${e.toFixed(2)}m`);
});
