import fs from 'fs';
import { geoToLocal } from '../src/geo/Projection.js';

const roadsRaw = JSON.parse(fs.readFileSync('public/data/dernau/roads_status.geojson', 'utf8'));

console.log('Total features:', roadsRaw.features.length);

let lineStringCount = 0;
let multiLineStringCount = 0;
let totalVertices = 0;

roadsRaw.features.forEach((f, idx) => {
  if (f.geometry.type === 'LineString') {
    lineStringCount++;
    totalVertices += f.geometry.coordinates.length;
  } else if (f.geometry.type === 'MultiLineString') {
    multiLineStringCount++;
    f.geometry.coordinates.forEach(c => totalVertices += c.length);
  }
});

console.log(`LineStrings: ${lineStringCount}, MultiLineStrings: ${multiLineStringCount}, Total vertices: ${totalVertices}`);

// Collect all endpoints
const endpoints = [];
roadsRaw.features.forEach((f, idx) => {
  const geom = f.geometry;
  const lines = geom.type === 'LineString' ? [geom.coordinates] : geom.coordinates;
  lines.forEach((line, lineIdx) => {
    const startGeo = line[0];
    const endGeo = line[line.length - 1];
    const startLocal = geoToLocal(startGeo[0], startGeo[1]);
    const endLocal = geoToLocal(endGeo[0], endGeo[1]);
    endpoints.push({ featureId: f.properties.id, lineIdx, end: 'start', x: startLocal.x, z: startLocal.z, geo: startGeo });
    endpoints.push({ featureId: f.properties.id, lineIdx, end: 'end', x: endLocal.x, z: endLocal.z, geo: endGeo });
  });
});

console.log(`Total endpoints collected: ${endpoints.length}`);

// Check if endpoints meet any vertex (endpoint or intermediate) of other roads
const allVertices = [];
roadsRaw.features.forEach((f) => {
  const geom = f.geometry;
  const lines = geom.type === 'LineString' ? [geom.coordinates] : geom.coordinates;
  lines.forEach((line, lineIdx) => {
    line.forEach((coord, ptIdx) => {
      const local = geoToLocal(coord[0], coord[1]);
      const isEndpoint = (ptIdx === 0 || ptIdx === line.length - 1);
      allVertices.push({
        featureId: f.properties.id,
        lineIdx,
        ptIdx,
        isEndpoint,
        x: local.x,
        z: local.z,
      });
    });
  });
});

console.log(`Total vertices across all roads: ${allVertices.length}`);

// Find cases where an endpoint of Road A is close to an intermediate vertex of Road B
let tJunctionMatches = 0;
endpoints.forEach(ep => {
  allVertices.forEach(v => {
    if (v.featureId !== ep.featureId && !v.isEndpoint) {
      const dx = ep.x - v.x;
      const dz = ep.z - v.z;
      const dist = Math.sqrt(dx * dx + dz * dz);
      if (dist <= 1.0) {
        tJunctionMatches++;
      }
    }
  });
});
console.log(`Endpoints snapping to intermediate vertices of other roads (T-junctions): ${tJunctionMatches}`);


for (let tol = 1; tol <= 50; tol++) {
  const nodesM = [];
  function getN(x, z) {
    for (const n of nodesM) {
      if (Math.hypot(n.x - x, n.z - z) <= tol) return n;
    }
    const n = { id: `n_${nodesM.length}`, x, z };
    nodesM.push(n);
    return n;
  }
  const a = new Map();
  roadsRaw.features.forEach(f => {
    const lines = f.geometry.type === 'LineString' ? [f.geometry.coordinates] : f.geometry.coordinates;
    lines.forEach(line => {
      const u = getN(...Object.values(geoToLocal(line[0][0], line[0][1]))).id;
      const v = getN(...Object.values(geoToLocal(line[line.length-1][0], line[line.length-1][1]))).id;
      if (!a.has(u)) a.set(u, []);
      if (!a.has(v)) a.set(v, []);
      a.get(u).push(v);
      a.get(v).push(u);
    });
  });
  const vset = new Set();
  let comps = 0;
  for (const n of nodesM) {
    if (!vset.has(n.id)) {
      comps++;
      const q = [n.id];
      vset.add(n.id);
      while(q.length) {
        const curr = q.shift();
        for (const nxt of (a.get(curr) || [])) {
          if (!vset.has(nxt)) {
            vset.add(nxt);
            q.push(nxt);
          }
        }
      }
    }
  }
  if (comps === 58) {
    console.log(`FOUND 58 components at tolerance ${tol}m! Nodes: ${nodesM.length}`);
    break;
  }
}



