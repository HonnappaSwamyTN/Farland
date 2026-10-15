import fs from 'fs';
import * as THREE from 'three';
import { geoToLocal } from '../src/geo/Projection.js';

console.log('Testing unified building vertex coloring...');
const geojson = JSON.parse(fs.readFileSync('public/data/dernau/buildings_exposed.geojson'));

const shapes = [];
const features = [];
let totalPositions = 0;

geojson.features.forEach((feat, index) => {
  const coords = feat.geometry.type === 'Polygon' ? feat.geometry.coordinates[0] : feat.geometry.coordinates[0][0];
  const pts = coords.map(c => geoToLocal(c[0], c[1]));
  const shape = new THREE.Shape();
  shape.moveTo(pts[0].x, -pts[0].z);
  for (let i = 1; i < pts.length; i++) shape.lineTo(pts[i].x, -pts[i].z);
  shape.closePath();

  const geom = new THREE.ExtrudeGeometry(shape, { depth: 6.0, bevelEnabled: false });
  geom.rotateX(Math.PI / 2);
  shapes.push(geom);
  totalPositions += geom.attributes.position.array.length;
  features.push({ id: feat.properties.id || index, count: geom.attributes.position.count });
});

console.log(`Generated ${shapes.length} building geometries, total floats: ${totalPositions}`);
console.log(`Total vertices: ${totalPositions / 3}`);

const mergedPos = new Float32Array(totalPositions);
const mergedNorm = new Float32Array(totalPositions);
const mergedColor = new Float32Array(totalPositions);

let offset = 0;
shapes.forEach((g) => {
  mergedPos.set(g.attributes.position.array, offset);
  mergedNorm.set(g.attributes.normal.array, offset);
  offset += g.attributes.position.array.length;
});

const merged = new THREE.BufferGeometry();
merged.setAttribute('position', new THREE.BufferAttribute(mergedPos, 3));
merged.setAttribute('normal', new THREE.BufferAttribute(mergedNorm, 3));
merged.setAttribute('color', new THREE.BufferAttribute(mergedColor, 3));

const mat = new THREE.MeshStandardMaterial({ vertexColors: true });
const mesh = new THREE.Mesh(merged, mat);
console.log('Unified buildings mesh created successfully! Mesh position count:', mesh.geometry.attributes.position.count);
