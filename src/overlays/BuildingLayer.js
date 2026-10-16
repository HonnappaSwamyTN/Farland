import * as THREE from 'three';
import { geoToLocal } from '../geo/Projection.js';

/**
 * HighWater 3D — Building Overlays Layer
 * Renders 759 building footprints from SpaceNet 8 Dernau dataset as 3D extruded prisms.
 * Milestone 6: Features dynamic vertex-colored inundation depth visualization (dry, shallow, moderate, deep)
 * while preserving the ability to restore original historical SpaceNet 8 flood labels.
 */
export class BuildingLayer {
  /**
   * @param {THREE.Scene} scene
   * @param {import('../terrain/TerrainManager.js').TerrainManager} terrainManager
   */
  constructor(scene, terrainManager) {
    this.scene = scene;
    this.terrainManager = terrainManager;

    this.group = new THREE.Group();
    this.group.name = 'Buildings_Layer';
    this.scene.add(this.group);

    // Meshes & Materials
    this.buildingsMesh = null;
    this.buildingsMaterial = null;
    this.rawGeojson = null;

    // Backward compatibility aliases
    this.floodedMesh = null;
    this.normalMesh = null;

    // Feature index for raycasting inspection & dynamic depth styling
    this.features = [];
    this.depthColorMode = 'dynamic-depth'; // 'dynamic-depth' | 'historical'

    this.stats = {
      total: 0,
      flooded: 0,
      normal: 0,
    };

    this.depthStats = {
      dry: 0,
      shallow: 0,
      moderate: 0,
      deep: 0,
    };

    // Phase 4: Selection and Access-Lost 3D Highlights
    this.highlightBox = null;
    this.highlightMarker = null;
    this.accessLostGroup = new THREE.Group();
    this.accessLostGroup.name = 'Access_Lost_Highlights';
    this.group.add(this.accessLostGroup);
  }

  /**
   * Load and construct 3D buildings from GeoJSON.
   * @param {string} url
   */
  async load(url = './data/dernau/buildings_exposed.geojson') {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`BuildingLayer: Failed to fetch GeoJSON from ${url} (${res.status})`);
    }

    const geojson = await res.json();
    this.rawGeojson = geojson;
    this.buildGeometry(geojson);
    return this.stats;
  }

  /**
   * Parse GeoJSON polygons, extrude 3D prisms, and batch into a single merged mesh with vertex colors.
   * @param {Object} geojson
   */
  buildGeometry(geojson) {
    this.dispose();

    const rawFeatures = geojson.features || [];
    this.features = [];

    const buildingHeight = 6.0; // 6 meters realistic height
    const allGeometries = [];

    rawFeatures.forEach((feat, index) => {
      if (!feat.geometry) return;

      const props = feat.properties || {};
      const isFlooded = props.flooded === true;
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
        const exteriorRing = poly[0];
        if (exteriorRing.length < 3) return;

        // Transform exterior ring to local metric 2D coordinates
        const localPts = [];
        let cx = 0;
        let cz = 0;

        for (let i = 0; i < exteriorRing.length - 1; i++) {
          const pt = geoToLocal(exteriorRing[i][0], exteriorRing[i][1]);
          localPts.push(pt);
          cx += pt.x;
          cz += pt.z;
        }

        const count = localPts.length;
        if (count < 3) return;

        cx /= count;
        cz /= count;

        // Sample terrain height at building center
        const baseElevation = this.terrainManager.getElevationAt(cx, cz) || 135.0;

        // Create 2D shape for extrusion
        const shape = new THREE.Shape();
        shape.moveTo(localPts[0].x, -localPts[0].z);
        for (let i = 1; i < count; i++) {
          shape.lineTo(localPts[i].x, -localPts[i].z);
        }
        shape.closePath();

        // Approximate footprint area
        let area = 0;
        for (let i = 0; i < count; i++) {
          const j = (i + 1) % count;
          area += localPts[i].x * localPts[j].z - localPts[j].x * localPts[i].z;
        }
        area = Math.abs(area) * 0.5;

        // Extrude shape along vertical axis
        const extrudeSettings = {
          depth: buildingHeight,
          bevelEnabled: false,
        };

        const geom = new THREE.ExtrudeGeometry(shape, extrudeSettings);

        // Orient extrusion from 2D (X, -Z) into 3D (X, Y, Z) with +Y pointing up
        geom.rotateX(-Math.PI / 2);

        // Adapt building base and roof vertices to terrain elevation and slope
        const pos = geom.attributes.position;
        for (let i = 0; i < pos.count; i++) {
          const vx = pos.getX(i);
          const vz = pos.getZ(i);
          const vy = pos.getY(i);
          const gElev = (this.terrainManager && typeof this.terrainManager.getElevationAt === 'function'
            ? this.terrainManager.getElevationAt(vx, vz)
            : null) ?? baseElevation;
          if (Math.abs(vy) < 1e-4) {
            pos.setY(i, gElev);
          } else {
            pos.setY(i, gElev + buildingHeight);
          }
        }
        geom.computeVertexNormals();
        geom.computeBoundingBox();

        allGeometries.push(geom);
        this.features.push({
          id: props.id || `bld-${index}`,
          kind: 'building',
          flooded: isFlooded, // SpaceNet 8 historical status
          areaSqM: Math.round(area * 10) / 10,
          baseElevationM: Math.round(baseElevation * 10) / 10,
          heightM: buildingHeight,
          center: { x: cx, y: baseElevation + buildingHeight / 2, z: cz },
          bounds: geom.boundingBox.clone(),
          currentWaterDepth: 0,
          modeledWaterElev: 124.0,
          depthCategory: 'dry',
          vertexStart: 0,
          vertexCount: 0,
        });
      });
    });

    if (allGeometries.length > 0) {
      const mergedGeometry = this.mergeGeometriesWithColor(allGeometries, this.features);

      this.buildingsMaterial = new THREE.MeshStandardMaterial({
        vertexColors: true,
        roughness: 0.65,
        metalness: 0.15,
      });

      this.buildingsMesh = new THREE.Mesh(mergedGeometry, this.buildingsMaterial);
      this.buildingsMesh.name = 'Buildings_Layer_Mesh';
      this.buildingsMesh.castShadow = true;
      this.buildingsMesh.receiveShadow = true;
      this.group.add(this.buildingsMesh);

      // Aliases for backward compatibility
      this.floodedMesh = this.buildingsMesh;
      this.normalMesh = this.buildingsMesh;
    }

    // Clean up unmerged geometry objects
    allGeometries.forEach((g) => g.dispose());

    this.stats = {
      total: this.features.length,
      flooded: this.features.filter((f) => f.flooded).length,
      normal: this.features.filter((f) => !f.flooded).length,
    };
  }

  /**
   * Merge geometries while retaining vertex spans per building feature and allocating vertex colors.
   * @param {THREE.BufferGeometry[]} geometries
   * @param {Object[]} features
   * @returns {THREE.BufferGeometry}
   */
  mergeGeometriesWithColor(geometries, features) {
    let totalPositions = 0;
    let totalNormals = 0;
    let totalIndices = 0;

    for (const g of geometries) {
      totalPositions += g.attributes.position.array.length;
      totalNormals += g.attributes.normal.array.length;
      if (g.index) totalIndices += g.index.array.length;
    }

    const mergedPos = new Float32Array(totalPositions);
    const mergedNorm = new Float32Array(totalNormals);
    const mergedColor = new Float32Array(totalPositions);
    const mergedIndex = totalIndices > 0 ? new Uint32Array(totalIndices) : null;

    let posOffset = 0;
    let normOffset = 0;
    let indexOffset = 0;
    let vertexBase = 0;

    for (let fIdx = 0; fIdx < geometries.length; fIdx++) {
      const g = geometries[fIdx];
      const feat = features[fIdx];
      const pos = g.attributes.position.array;
      const norm = g.attributes.normal.array;
      const count = g.attributes.position.count;

      feat.vertexStart = vertexBase;
      feat.vertexCount = count;

      mergedPos.set(pos, posOffset);
      mergedNorm.set(norm, normOffset);

      // Initial color assignment (slate for normal, amber for flooded)
      const r = feat.flooded ? 0.96 : 0.39;
      const gr = feat.flooded ? 0.62 : 0.45;
      const b = feat.flooded ? 0.04 : 0.55;

      for (let i = 0; i < count; i++) {
        mergedColor[(vertexBase + i) * 3 + 0] = r;
        mergedColor[(vertexBase + i) * 3 + 1] = gr;
        mergedColor[(vertexBase + i) * 3 + 2] = b;
      }

      if (g.index && mergedIndex) {
        const idx = g.index.array;
        for (let i = 0; i < idx.length; i++) {
          mergedIndex[indexOffset + i] = idx[i] + vertexBase;
        }
        indexOffset += idx.length;
      }

      posOffset += pos.length;
      normOffset += norm.length;
      vertexBase += count;
    }

    const merged = new THREE.BufferGeometry();
    merged.setAttribute('position', new THREE.BufferAttribute(mergedPos, 3));
    merged.setAttribute('normal', new THREE.BufferAttribute(mergedNorm, 3));
    merged.setAttribute('color', new THREE.BufferAttribute(mergedColor, 3));
    if (mergedIndex) {
      merged.setIndex(new THREE.BufferAttribute(mergedIndex, 1));
    }

    return merged;
  }

  /**
   * Set building depth color visualization mode.
   * @param {'dynamic-depth'|'historical'} mode
   */
  setDepthColorMode(mode) {
    this.depthColorMode = mode === 'historical' ? 'historical' : 'dynamic-depth';
    return this.depthColorMode;
  }

  /**
   * Dynamically update building colors according to instantaneous water surface elevation.
   * @param {function(number, number): number} getWaterElevationAt - Function returning water surface elevation at local (x, z)
   */
  updateBuildingDepths(getWaterElevationAt) {
    if (!this.buildingsMesh || !this.buildingsMesh.geometry.attributes.color) return this.depthStats;
    const colors = this.buildingsMesh.geometry.attributes.color.array;

    const breakdown = {
      dry: 0,
      shallow: 0,
      moderate: 0,
      deep: 0,
    };

    for (const feat of this.features) {
      const waterElev = typeof getWaterElevationAt === 'function' ? getWaterElevationAt(feat.center.x, feat.center.z) : 124.0;
      const depth = Math.max(0, waterElev - feat.baseElevationM);
      feat.currentWaterDepth = Math.round(depth * 100) / 100;
      feat.modeledWaterElev = Math.round(waterElev * 100) / 100;

      let r, g, b;

      if (this.depthColorMode === 'historical') {
        if (feat.flooded) {
          r = 0.96; g = 0.62; b = 0.04; // Amber: SpaceNet 8 Flooded
        } else {
          r = 0.39; g = 0.45; b = 0.55; // Slate: SpaceNet 8 Normal
        }
        if (depth <= 0) breakdown.dry++;
        else if (depth < 0.5) breakdown.shallow++;
        else if (depth < 1.5) breakdown.moderate++;
        else breakdown.deep++;
      } else {
        // Dynamic water depth color ramp
        if (depth <= 0) {
          // Dry: Neutral slate
          r = 0.39; g = 0.45; b = 0.55;
          feat.depthCategory = 'dry';
          breakdown.dry++;
        } else if (depth < 0.5) {
          // Shallow (<0.5m): Caution amber-yellow
          r = 0.92; g = 0.70; b = 0.03;
          feat.depthCategory = 'shallow';
          breakdown.shallow++;
        } else if (depth < 1.5) {
          // Moderate (0.5 - 1.5m): Warning orange
          r = 0.98; g = 0.45; b = 0.09;
          feat.depthCategory = 'moderate';
          breakdown.moderate++;
        } else {
          // Deep (>=1.5m): Severe crimson
          r = 0.94; g = 0.27; b = 0.27;
          feat.depthCategory = 'deep';
          breakdown.deep++;
        }
      }

      const vStart = feat.vertexStart;
      const vCount = feat.vertexCount;
      for (let i = 0; i < vCount; i++) {
        colors[(vStart + i) * 3 + 0] = r;
        colors[(vStart + i) * 3 + 1] = g;
        colors[(vStart + i) * 3 + 2] = b;
      }
    }

    this.buildingsMesh.geometry.attributes.color.needsUpdate = true;
    this.depthStats = breakdown;
    return this.depthStats;
  }

  /**
   * Find building under raycast intersection.
   * @param {THREE.Ray} ray
   * @returns {Object|null}
   */
  intersectBuilding(ray) {
    if (!ray) return null;
    let closestFeat = null;
    let closestDist = Infinity;

    for (const f of this.features) {
      if (f.bounds) {
        const hit = ray.intersectBox(f.bounds, new THREE.Vector3());
        if (hit) {
          const dist = ray.origin.distanceTo(hit);
          if (dist < closestDist) {
            closestDist = dist;
            closestFeat = f;
          }
        }
      }
    }

    return closestFeat;
  }

  /**
   * Highlight a specific building in 3D scene (Phase 4 selection).
   * @param {string} buildingId
   * @returns {Object|null} Highlighted building feature
   */
  highlightBuilding(buildingId) {
    this.clearHighlight();
    const feat = this.features.find(f => f.id === buildingId);
    if (!feat || !feat.bounds) return null;

    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    feat.bounds.getSize(size);
    feat.bounds.getCenter(center);

    // 1. Expanded bounding box outline
    const boxGeom = new THREE.BoxGeometry(size.x + 2.0, size.y + 2.0, size.z + 2.0);
    const boxEdges = new THREE.EdgesGeometry(boxGeom);
    const lineMat = new THREE.LineBasicMaterial({ color: 0x38bdf8, linewidth: 3 });
    this.highlightBox = new THREE.LineSegments(boxEdges, lineMat);
    this.highlightBox.position.copy(center);
    this.group.add(this.highlightBox);

    // 2. Downward tactical beacon marker above roof
    const coneGeom = new THREE.ConeGeometry(2.5, 6.0, 4);
    coneGeom.rotateX(Math.PI);
    const coneMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    this.highlightMarker = new THREE.Mesh(coneGeom, coneMat);
    this.highlightMarker.position.set(center.x, feat.bounds.max.y + 8.0, center.z);
    this.group.add(this.highlightMarker);

    return feat;
  }

  /**
   * Remove active building selection highlight.
   */
  clearHighlight() {
    if (this.highlightBox) {
      this.group.remove(this.highlightBox);
      this.highlightBox.geometry.dispose();
      this.highlightBox.material.dispose();
      this.highlightBox = null;
    }
    if (this.highlightMarker) {
      this.group.remove(this.highlightMarker);
      this.highlightMarker.geometry.dispose();
      this.highlightMarker.material.dispose();
      this.highlightMarker = null;
    }
  }

  /**
   * Render distinct warning halo rings for buildings that have lost road evacuation access (Phase 4).
   * @param {Set<string>} accessLostBuildingIds
   */
  updateAccessLostHighlights(accessLostBuildingIds) {
    this.clearAccessLostHighlights();
    if (!accessLostBuildingIds || accessLostBuildingIds.size === 0) return;

    for (const feat of this.features) {
      if (accessLostBuildingIds.has(feat.id)) {
        const ringGeom = new THREE.RingGeometry(8.0, 11.0, 16);
        ringGeom.rotateX(-Math.PI / 2);
        const ringMat = new THREE.MeshBasicMaterial({
          color: 0xef4444, // Red warning ring
          transparent: true,
          opacity: 0.6,
          side: THREE.DoubleSide,
        });
        const ringMesh = new THREE.Mesh(ringGeom, ringMat);
        ringMesh.position.set(feat.center.x, feat.baseElevationM + 0.3, feat.center.z);
        this.accessLostGroup.add(ringMesh);
      }
    }
  }

  /**
   * Clear access-lost warning rings.
   */
  clearAccessLostHighlights() {
    while (this.accessLostGroup.children.length > 0) {
      const child = this.accessLostGroup.children[0];
      this.accessLostGroup.remove(child);
      if (child.geometry) child.geometry.dispose();
      if (child.material) child.material.dispose();
    }
  }

  /**
   * Toggle visibility of buildings layer.
   * @param {boolean} visible
   */
  setVisible(visible) {
    this.group.visible = visible;
  }

  /**
   * Dispose geometries and materials.
   */
  dispose() {
    this.clearHighlight();
    this.clearAccessLostHighlights();
    if (this.buildingsMesh) {
      if (this.buildingsMesh.geometry) this.buildingsMesh.geometry.dispose();
      this.group.remove(this.buildingsMesh);
      this.buildingsMesh = null;
      this.floodedMesh = null;
      this.normalMesh = null;
    }
    if (this.buildingsMaterial) {
      this.buildingsMaterial.dispose();
      this.buildingsMaterial = null;
    }
    this.features = [];
  }
}
