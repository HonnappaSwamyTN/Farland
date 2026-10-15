import fs from 'fs';
import { geoToLocal } from '../src/geo/Projection.js';

const roadsRaw = JSON.parse(fs.readFileSync('public/data/dernau/roads_status.geojson', 'utf8'));

// Extract all segments
const segments = [];
roadsRaw.features.forEach((f) => {
  const geom = f.geometry;
  const lines = geom.type === 'LineString' ? [geom.coordinates] : geom.coordinates;
  lines.forEach((line, lineIdx) => {
    for (let i = 0; i < line.length - 1; i++) {
      const p1 = geoToLocal(line[i][0], line[i][1]);
      const p2 = geoToLocal(line[i + 1][0], line[i + 1][1]);
      segments.push({
        featureId: f.properties.id,
        lineIdx,
        segIdx: i,
        p1,
        p2,
      });
    }
  });
});

console.log(`Extracted ${segments.length} individual line segments.`);

// Line segment intersection helper
function ccw(a, b, c) {
  return (c.z - a.z) * (b.x - a.x) > (b.z - a.z) * (c.x - a.x);
}

function lineIntersects(p1, p2, p3, p4) {
  const d1 = ccw(p1, p3, p4) !== ccw(p2, p3, p4);
  const d2 = ccw(p1, p2, p3) !== ccw(p1, p2, p4);
  return d1 && d2;
}

// Find interior crossings between different features
let crossingCount = 0;
const crossings = [];

for (let i = 0; i < segments.length; i++) {
  for (let j = i + 1; j < segments.length; j++) {
    const s1 = segments[i];
    const s2 = segments[j];
    if (s1.featureId === s2.featureId) continue;

    // Check bounding box
    const minX1 = Math.min(s1.p1.x, s1.p2.x), maxX1 = Math.max(s1.p1.x, s1.p2.x);
    const minZ1 = Math.min(s1.p1.z, s1.p2.z), maxZ1 = Math.max(s1.p1.z, s1.p2.z);
    const minX2 = Math.min(s2.p1.x, s2.p2.x), maxX2 = Math.max(s2.p1.x, s2.p2.x);
    const minZ2 = Math.min(s2.p1.z, s2.p2.z), maxZ2 = Math.max(s2.p1.z, s2.p2.z);

    if (maxX1 < minX2 || minX1 > maxX2 || maxZ1 < minZ2 || minZ1 > maxZ2) continue;

    // Check distance between any endpoints
    const eps = 1.0;
    const d13 = Math.hypot(s1.p1.x - s2.p1.x, s1.p1.z - s2.p1.z);
    const d14 = Math.hypot(s1.p1.x - s2.p2.x, s1.p1.z - s2.p2.z);
    const d23 = Math.hypot(s1.p2.x - s2.p1.x, s1.p2.z - s2.p1.z);
    const d24 = Math.hypot(s1.p2.x - s2.p2.x, s1.p2.z - s2.p2.z);

    // If endpoints meet within tolerance, it's a junction, not an interior crossing
    if (d13 <= eps || d14 <= eps || d23 <= eps || d24 <= eps) continue;

    if (lineIntersects(s1.p1, s1.p2, s2.p1, s2.p2)) {
      crossingCount++;
      crossings.push({ f1: s1.featureId, f2: s2.featureId });
    }
  }
}

console.log(`Unresolved interior 2D crossings found: ${crossingCount}`);
console.log('Crossings:', crossings);
