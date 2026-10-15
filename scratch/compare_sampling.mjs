import fs from 'fs';
import path from 'path';

const demPayload = JSON.parse(fs.readFileSync('public/data/dernau/dem_height_grid.json', 'utf8'));
const roadGeojson = JSON.parse(fs.readFileSync('public/data/dernau/roads_status.geojson', 'utf8'));

const elevations = demPayload.elevations;
const rows = elevations.length;
const cols = elevations[0].length;
const width = 2400;
const length = 2400;

function getElevationAt(x, z) {
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

// Convert WGS84 to local
const WGS84_A = 6378137.0;
const WGS84_F = 1 / 298.257223563;
const WGS84_E2 = 2 * WGS84_F - WGS84_F * WGS84_F;
const WGS84_E_PRIME2 = WGS84_E2 / (1 - WGS84_E2);
const UTM_K0 = 0.9996;
const UTM_LON0_RAD = (9.0 * Math.PI) / 180.0;
const STUDY_CENTER_UTM = { x: 360327.76, y: 5598453.17 };

function wgs84ToUtm32(lon, lat) {
  const latRad = (lat * Math.PI) / 180.0;
  const lonRad = (lon * Math.PI) / 180.0;
  const dLon = lonRad - UTM_LON0_RAD;
  const sinLat = Math.sin(latRad);
  const cosLat = Math.cos(latRad);
  const tanLat = Math.tan(latRad);
  const N = WGS84_A / Math.sqrt(1.0 - WGS84_E2 * sinLat * sinLat);
  const T = tanLat * tanLat;
  const C = WGS84_E_PRIME2 * cosLat * cosLat;
  const A = cosLat * dLon;
  const M =
    WGS84_A *
    ((1.0 - WGS84_E2 / 4.0 - (3.0 * WGS84_E2 * WGS84_E2) / 64.0 - (5.0 * Math.pow(WGS84_E2, 3)) / 256.0) * latRad -
      ((3.0 * WGS84_E2) / 8.0 + (3.0 * WGS84_E2 * WGS84_E2) / 32.0 + (45.0 * Math.pow(WGS84_E2, 3)) / 1024.0) *
        Math.sin(2.0 * latRad) +
      ((15.0 * WGS84_E2 * WGS84_E2) / 256.0 + (45.0 * Math.pow(WGS84_E2, 3)) / 1024.0) * Math.sin(4.0 * latRad) -
      ((35.0 * Math.pow(WGS84_E2, 3)) / 3072.0) * Math.sin(6.0 * latRad));
  const utmX = 500000.0 + UTM_K0 * N * (A + ((1.0 - T + C) * Math.pow(A, 3)) / 6.0 + ((5.0 - 18.0 * T + T * T + 72.0 * C - 58.0 * WGS84_E_PRIME2) * Math.pow(A, 5)) / 120.0);
  const utmY = UTM_K0 * (M + N * tanLat * ((A * A) / 2.0 + ((5.0 - T + 9.0 * C + 4.0 * C * C) * Math.pow(A, 4)) / 24.0 + ((61.0 - 58.0 * T + T * T + 600.0 * C - 330.0 * WGS84_E_PRIME2) * Math.pow(A, 6)) / 720.0));
  return { x: utmX, y: utmY };
}

function geoToLocal(lon, lat) {
  const utm = wgs84ToUtm32(lon, lat);
  return { x: utm.x - STUDY_CENTER_UTM.x, z: -(utm.y - STUDY_CENTER_UTM.y) };
}

console.log('Testing road sampling vs endpoint-only evaluation...');

const stages = [124.0, 130.0, 132.0, 138.0];

for (const stage of stages) {
  let legacyCount = 0;
  let sampledCount = 0;

  for (const feat of roadGeojson.features) {
    const coords = feat.geometry.type === 'LineString' ? [feat.geometry.coordinates] : feat.geometry.coordinates;
    let legacyMaxDepth = 0;
    let sampledMaxDepth = 0;

    for (const line of coords) {
      for (let i = 0; i < line.length - 1; i++) {
        const ptA = geoToLocal(line[i][0], line[i][1]);
        const ptB = geoToLocal(line[i + 1][0], line[i + 1][1]);
        const gA = getElevationAt(ptA.x, ptA.z) || 135.0;
        const gB = getElevationAt(ptB.x, ptB.z) || 135.0;

        // Legacy: yA = gA + 0.55
        const yA = gA + 0.55;
        const yB = gB + 0.55;
        const dLegacyA = Math.max(0, stage - yA);
        const dLegacyB = Math.max(0, stage - yB);
        if (dLegacyA > legacyMaxDepth) legacyMaxDepth = dLegacyA;
        if (dLegacyB > legacyMaxDepth) legacyMaxDepth = dLegacyB;

        // Sampled along segment every 5m (using pure ground elevation g, without +0.55 offset):
        const dx = ptB.x - ptA.x;
        const dz = ptB.z - ptA.z;
        const segLen = Math.sqrt(dx * dx + dz * dz);
        const numSteps = Math.max(1, Math.ceil(segLen / 5.0));
        for (let s = 0; s <= numSteps; s++) {
          const t = s / numSteps;
          const sx = ptA.x + t * dx;
          const sz = ptA.z + t * dz;
          const sg = getElevationAt(sx, sz);
          const sDepth = Math.max(0, stage - sg);
          if (sDepth > sampledMaxDepth) sampledMaxDepth = sDepth;
        }
      }
    }

    if (legacyMaxDepth > 0) legacyCount++;
    if (sampledMaxDepth > 0) sampledCount++;
  }

  console.log(`Stage ${stage}m: Legacy (pt.y = g+0.55) > 0: ${legacyCount} roads | Sampled (5m interval, pure g) > 0: ${sampledCount} roads`);
}

