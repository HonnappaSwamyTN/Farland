import * as THREE from 'three';
import { geoToLocal } from '../geo/Projection.js';

/**
 * HighWater 3D — Historical Flood Extent Overlay Layer
 * 
 * PROVENANCE & CONTEXT NOTICE:
 * This layer renders the historical flood extent derived from SpaceNet 8 annotations
 * of the catastrophic July 2021 Ahr valley flood disaster.
 * 
 * CRITICAL DISTINCTION:
 * This is STATIC REFERENCE CONTEXT for historical validation. It is NOT live simulated water.
 */
export class FloodExtentLayer {
  /**
   * @param {THREE.Scene} scene
   * @param {import('../terrain/TerrainManager.js').TerrainManager} terrainManager
   */
  constructor(scene, terrainManager) {
    this.scene = scene;
    this.terrainManager = terrainManager;

    this.group = new THREE.Group();
    this.group.name = 'Historical_Flood_Extent_Layer';
    this.scene.add(this.group);

    this.fillMesh = null;
    this.outlineMesh = null;
    this.fillMaterial = null;
    this.outlineMaterial = null;

    this.stats = {
      polygonCount: 0,
      source: 'SpaceNet 8 (July 2021 Germany Flood Event)',
      labelClass: 'derived_flood_extent (Reference Context)',
    };
  }

  /**
   * Load historical flood extent GeoJSON.
   * @param {string} url
   */
  async load(url = '/data/dernau/flood_extent.geojson') {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`FloodExtentLayer: Failed to fetch GeoJSON from ${url} (${res.status})`);
    }

    const geojson = await res.json();
    this.buildGeometry(geojson);
    return this.stats;
  }

  /**
   * Parse flood extent polygons and drape onto terrain.
   * @param {Object} geojson
   */
  buildGeometry(geojson) {
    this.dispose();

    const rawFeatures = geojson.features || [];
    const outlinePositions = [];
    const fillGeometries = [];

    const elevationOffset = 0.28; // Small offset above ground to avoid z-fighting

    rawFeatures.forEach((feat) => {
      if (!feat.geometry) return;
      const geomType = feat.geometry.type;
      const coords = feat.geometry.coordinates;

      let polygons = [];
      if (geomType === 'Polygon') {
        polygons.push(coords);
      } else if (geomType === 'MultiPolygon') {
        polygons = coords;
      }

      polygons.forEach((poly) => {
        if (!poly || poly.length === 0) return;
        const ring = poly[0];
        if (ring.length < 3) return;

        const localPts = [];
        for (let i = 0; i < ring.length - 1; i++) {
          const pt = geoToLocal(ring[i][0], ring[i][1]);
          const y = (this.terrainManager.getElevationAt(pt.x, pt.z) || 125.0) + elevationOffset;
          localPts.push({ x: pt.x, y: y, z: pt.z });

          // Outline line segment
          const nextIdx = (i + 1) % (ring.length - 1);
          const nextPt = geoToLocal(ring[nextIdx][0], ring[nextIdx][1]);
          const nextY = (this.terrainManager.getElevationAt(nextPt.x, nextPt.z) || 125.0) + elevationOffset;

          outlinePositions.push(pt.x, y + 0.1, pt.z);
          outlinePositions.push(nextPt.x, nextY + 0.1, nextPt.z);
        }

        // Triangulate 2D polygon shape in local space
        if (localPts.length >= 3) {
          const shape = new THREE.Shape();
          shape.moveTo(localPts[0].x, -localPts[0].z);
          for (let i = 1; i < localPts.length; i++) {
            shape.lineTo(localPts[i].x, -localPts[i].z);
          }
          shape.closePath();

          const geom = new THREE.ShapeGeometry(shape);
          geom.rotateX(Math.PI / 2);

          // Drape each triangle vertex directly onto terrain elevation
          const pos = geom.attributes.position;
          for (let i = 0; i < pos.count; i++) {
            const vx = pos.getX(i);
            const vz = pos.getZ(i);
            const vy = (this.terrainManager.getElevationAt(vx, vz) || 125.0) + elevationOffset;
            pos.setY(i, vy);
          }
          geom.computeVertexNormals();
          fillGeometries.push(geom);
        }
      });
    });

    // Materials
    // Reference flood extent fill: Translucent deep water indigo
    this.fillMaterial = new THREE.MeshBasicMaterial({
      color: 0x1d4ed8, // Deep water blue
      transparent: true,
      opacity: 0.38,
      depthWrite: false,
      polygonOffset: true,
      polygonOffsetFactor: -1.0,
      polygonOffsetUnits: -1.0,
      side: THREE.DoubleSide,
    });

    // Reference boundary contour: Glowing cyan line
    this.outlineMaterial = new THREE.LineBasicMaterial({
      color: 0x60a5fa,
      transparent: true,
      opacity: 0.75,
      linewidth: 2,
    });

    // Merge fill geometries
    if (fillGeometries.length > 0) {
      const mergedFill = this.mergeGeometries(fillGeometries);
      this.fillMesh = new THREE.Mesh(mergedFill, this.fillMaterial);
      this.fillMesh.name = 'Historical_Flood_Extent_Fill';
      this.group.add(this.fillMesh);
      fillGeometries.forEach((g) => g.dispose());
    }

    // Boundary outlines
    if (outlinePositions.length > 0) {
      const outlineGeom = new THREE.BufferGeometry();
      outlineGeom.setAttribute('position', new THREE.Float32BufferAttribute(outlinePositions, 3));
      this.outlineMesh = new THREE.LineSegments(outlineGeom, this.outlineMaterial);
      this.outlineMesh.name = 'Historical_Flood_Extent_Outlines';
      this.group.add(this.outlineMesh);
    }

    this.stats.polygonCount = rawFeatures.length;
  }

  mergeGeometries(geometries) {
    let totalPositions = 0;
    let totalNormals = 0;
    let totalIndices = 0;

    for (const g of geometries) {
      totalPositions += g.attributes.position.array.length;
      if (g.attributes.normal) totalNormals += g.attributes.normal.array.length;
      if (g.index) totalIndices += g.index.array.length;
    }

    const mergedPos = new Float32Array(totalPositions);
    const mergedNorm = totalNormals > 0 ? new Float32Array(totalNormals) : null;
    const mergedIndex = totalIndices > 0 ? new Uint32Array(totalIndices) : null;

    let posOffset = 0;
    let normOffset = 0;
    let indexOffset = 0;
    let vertexBase = 0;

    for (const g of geometries) {
      const pos = g.attributes.position.array;
      mergedPos.set(pos, posOffset);

      if (g.attributes.normal && mergedNorm) {
        mergedNorm.set(g.attributes.normal.array, normOffset);
        normOffset += g.attributes.normal.array.length;
      }

      if (g.index && mergedIndex) {
        const idx = g.index.array;
        for (let i = 0; i < idx.length; i++) {
          mergedIndex[indexOffset + i] = idx[i] + vertexBase;
        }
        indexOffset += idx.length;
      }

      posOffset += pos.length;
      vertexBase += g.attributes.position.count;
    }

    const merged = new THREE.BufferGeometry();
    merged.setAttribute('position', new THREE.BufferAttribute(mergedPos, 3));
    if (mergedNorm) merged.setAttribute('normal', new THREE.BufferAttribute(mergedNorm, 3));
    if (mergedIndex) merged.setIndex(new THREE.BufferAttribute(mergedIndex, 1));

    return merged;
  }

  /**
   * Toggle visibility of historical flood extent layer.
   * @param {boolean} visible
   */
  setVisible(visible) {
    this.group.visible = visible;
  }

  /**
   * Dispose resources.
   */
  dispose() {
    if (this.fillMesh) {
      if (this.fillMesh.geometry) this.fillMesh.geometry.dispose();
      this.group.remove(this.fillMesh);
      this.fillMesh = null;
    }
    if (this.outlineMesh) {
      if (this.outlineMesh.geometry) this.outlineMesh.geometry.dispose();
      this.group.remove(this.outlineMesh);
      this.outlineMesh = null;
    }
    if (this.fillMaterial) {
      this.fillMaterial.dispose();
      this.fillMaterial = null;
    }
    if (this.outlineMaterial) {
      this.outlineMaterial.dispose();
      this.outlineMaterial = null;
    }
  }
}
