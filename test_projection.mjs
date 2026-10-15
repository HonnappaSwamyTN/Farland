import { wgs84ToUtm32, geoToLocal, localToGeo, STUDY_CENTER_UTM } from './src/geo/Projection.js';

const testPoints = [
  { name: 'SW Corner', lon: 7.015036, lat: 50.511616 },
  { name: 'SE Corner', lon: 7.044231, lat: 50.511616 },
  { name: 'NW Corner', lon: 7.015036, lat: 50.531079 },
  { name: 'NE Corner', lon: 7.044231, lat: 50.531079 },
  { name: 'Study Center', lon: 7.0296335, lat: 50.5213475 },
  { name: 'Facility fac-001 (Hospital)', lon: 7.04423, lat: 50.53108 },
  { name: 'Facility fac-002 (Shelter)', lon: 7.02500, lat: 50.51800 },
];

console.log('--- Projection Validation Report ---');
console.log('UTM Origin:', STUDY_CENTER_UTM);

testPoints.forEach((p) => {
  const utm = wgs84ToUtm32(p.lon, p.lat);
  const local = geoToLocal(p.lon, p.lat);
  console.log(`[Point] ${p.name}`);
  console.log(`  WGS84:   (${p.lon.toFixed(6)}°, ${p.lat.toFixed(6)}°)`);
  console.log(`  UTM 32N: (${utm.x.toFixed(2)} m, ${utm.y.toFixed(2)} m)`);
  console.log(`  Local:   (X=${local.x.toFixed(2)} m, Z=${local.z.toFixed(2)} m)`);
});
