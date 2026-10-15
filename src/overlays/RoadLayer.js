import * as THREE from 'three';
import { geoToLocal } from '../geo/Projection.js';

/**
 * HighWater 3D — Road Overlays Layer
 * Renders 117 road segments from SpaceNet 8 Dernau dataset draped over real DGM1 terrain.
 * Milestone 6: Features dynamic vertex-colored passability classification (Clear, Waterlogged, Submerged)
 * while retaining the ability to restore original historical SpaceNet 8 status labels.
 */
export class RoadLayer {
  /**
   * @param {THREE.Scene} scene
   * @param {import('../terrain/TerrainManager.js').TerrainManager} terrainManager
   */
  constructor(scene, terrainManager) {
    this.scene = scene;
    this.terrainManager = terrainManager;

    this.group = new THREE.Group();
    this.group.name = 'Roads_Layer';
    this.scene.add(this.group);

    // Meshes & Materials
    this.roadsMesh = null;
    this.roadsMaterial = null;
    this.rawGeojson = null;

    // Backward compatibility aliases
    this.floodedMesh = null;
    this.openMesh = null;

    // Feature index for raycasting inspection & dynamic passability
    this.features = [];
    this.passabilityMode = 'dynamic-passability'; // 'dynamic-passability' | 'historical'

    this.stats = {
      total: 0,
      flooded: 0,
      open: 0,
      totalLengthKm: 0,
    };

    this.passabilityStats = {
      passable: 0,
      waterlogged: 0,
      submerged: 0,
    };
  }

  /**
   * Load roads GeoJSON.
   * @param {string} url
   */
  async load(url = '/data/dernau/roads_status.geojson') {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`RoadLayer: Failed to fetch roads GeoJSON from ${url} (${res.status})`);
    }

    const geojson = await res.json();
    this.rawGeojson = geojson;
    this.buildGeometry(geojson);
    return this.stats;
  }

  /**
   * Parse LineStrings, drape vertices over terrain elevation, and construct line segments with vertex colors.
   * @param {Object} geojson
   */
  buildGeometry(geojson) {
    this.dispose();

    const rawFeatures = geojson.features || [];
    this.features = [];
    let totalLengthM = 0;

    // Elevation normal offset to prevent z-fighting against terrain
    const elevationOffset = 0.55;

    const allPositions = [];
    const allColors = [];
    let vertexCounter = 0;

    rawFeatures.forEach((feat, index) => {
      if (!feat.geometry) return;

      const props = feat.properties || {};
      const isFlooded = props.flooded === true;
      const geomType = feat.geometry.type;
      const coords = feat.geometry.coordinates;

      let lineStrings = [];
      if (geomType === 'LineString') {
        lineStrings.push(coords);
      } else if (geomType === 'MultiLineString') {
        lineStrings = coords;
      }

      let roadLengthM = 0;
      const segmentBoxes = [];
      const roadPoints = [];
      const featVertexStart = vertexCounter;

      lineStrings.forEach((line) => {
        if (!line || line.length < 2) return;

        for (let i = 0; i < line.length - 1; i++) {
          const ptA = geoToLocal(line[i][0], line[i][1]);
          const ptB = geoToLocal(line[i + 1][0], line[i + 1][1]);

          const yA = (this.terrainManager.getElevationAt(ptA.x, ptA.z) || 135.0) + elevationOffset;
          const yB = (this.terrainManager.getElevationAt(ptB.x, ptB.z) || 135.0) + elevationOffset;

          const dx = ptB.x - ptA.x;
          const dy = yB - yA;
          const dz = ptB.z - ptA.z;
          const segLen = Math.sqrt(dx * dx + dy * dy + dz * dz);
          roadLengthM += segLen;

          // Push vertex pair for LineSegments
          allPositions.push(ptA.x, yA, ptA.z);
          allPositions.push(ptB.x, yB, ptB.z);

          // Initial colors (rose for flooded, cyan for open)
          const r = isFlooded ? 0.96 : 0.22;
          const g = isFlooded ? 0.25 : 0.74;
          const b = isFlooded ? 0.37 : 0.97;
          allColors.push(r, g, b, r, g, b);

          vertexCounter += 2;

          roadPoints.push({ x: ptA.x, y: yA, z: ptA.z });
          roadPoints.push({ x: ptB.x, y: yB, z: ptB.z });

          // Bounding box for segment
          const box = new THREE.Box3();
          box.expandByPoint(new THREE.Vector3(ptA.x, yA, ptA.z));
          box.expandByPoint(new THREE.Vector3(ptB.x, yB, ptB.z));
          box.expandByScalar(3.0); // 3m hit buffer
          segmentBoxes.push(box);
        }
      });

      totalLengthM += roadLengthM;

      this.features.push({
        id: props.id || `road-${index}`,
        kind: 'road',
        flooded: isFlooded, // SpaceNet 8 historical status
        lengthMeters: Math.round(roadLengthM * 10) / 10,
        boxes: segmentBoxes,
        points: roadPoints,
        vertexStart: featVertexStart,
        vertexCount: vertexCounter - featVertexStart,
        maxWaterDepth: 0,
        passabilityStatus: isFlooded ? 'submerged' : 'passable',
      });
    });

    if (allPositions.length > 0) {
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(allPositions, 3));
      geometry.setAttribute('color', new THREE.Float32BufferAttribute(allColors, 3));

      this.roadsMaterial = new THREE.LineBasicMaterial({
        vertexColors: true,
        linewidth: 3,
        transparent: true,
        opacity: 0.95,
      });

      this.roadsMesh = new THREE.LineSegments(geometry, this.roadsMaterial);
      this.roadsMesh.name = 'Roads_Layer_Mesh';
      this.group.add(this.roadsMesh);

      // Aliases for backward compatibility
      this.floodedMesh = this.roadsMesh;
      this.openMesh = this.roadsMesh;
    }

    this.stats = {
      total: this.features.length,
      flooded: this.features.filter((f) => f.flooded).length,
      open: this.features.filter((f) => !f.flooded).length,
      totalLengthKm: Math.round((totalLengthM / 1000) * 100) / 100,
    };
  }

  /**
   * Set road passability visualization mode.
   * @param {'dynamic-passability'|'historical'} mode
   */
  setPassabilityMode(mode) {
    this.passabilityMode = mode === 'historical' ? 'historical' : 'dynamic-passability';
    return this.passabilityMode;
  }

  /**
   * Dynamically update road colors based on water depth along segments.
   * @param {function(number, number): number} getWaterElevationAt - Function returning water surface elevation at local (x, z)
   */
  updatePassability(getWaterElevationAt) {
    if (!this.roadsMesh || !this.roadsMesh.geometry.attributes.color) return this.passabilityStats;
    const colors = this.roadsMesh.geometry.attributes.color.array;

    const breakdown = {
      passable: 0,
      waterlogged: 0,
      submerged: 0,
    };

    for (const feat of this.features) {
      let maxDepth = 0;

      for (const pt of feat.points) {
        const waterElev = typeof getWaterElevationAt === 'function' ? getWaterElevationAt(pt.x, pt.z) : 124.0;
        const depth = Math.max(0, waterElev - pt.y);
        if (depth > maxDepth) maxDepth = depth;
      }

      feat.maxWaterDepth = Math.round(maxDepth * 100) / 100;

      let r, g, b;

      if (this.passabilityMode === 'historical') {
        if (feat.flooded) {
          r = 0.96; g = 0.25; b = 0.37; // Rose: SpaceNet 8 Flooded Cutoff
        } else {
          r = 0.22; g = 0.74; b = 0.97; // Cyan: SpaceNet 8 Open
        }
        if (maxDepth > 0.15) breakdown.submerged++;
        else if (maxDepth > 0) breakdown.waterlogged++;
        else breakdown.passable++;
      } else {
        // Dynamic Passability Classification
        if (maxDepth > 0.15) {
          // Submerged / Impassable: High alert rose-red
          r = 0.94; g = 0.27; b = 0.27;
          feat.passabilityStatus = 'submerged';
          breakdown.submerged++;
        } else if (maxDepth > 0) {
          // Waterlogged / Marginal: Caution amber
          r = 0.96; g = 0.62; b = 0.04;
          feat.passabilityStatus = 'waterlogged';
          breakdown.waterlogged++;
        } else {
          // Dry / Clear: Navigable emerald green
          r = 0.06; g = 0.73; b = 0.51;
          feat.passabilityStatus = 'passable';
          breakdown.passable++;
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

    this.roadsMesh.geometry.attributes.color.needsUpdate = true;
    this.passabilityStats = breakdown;
    return this.passabilityStats;
  }

  /**
   * Find road segment under raycast intersection.
   * @param {THREE.Ray} ray
   * @returns {Object|null}
   */
  intersectRoad(ray) {
    if (!ray) return null;
    let closestFeat = null;
    let closestDist = Infinity;

    for (const f of this.features) {
      for (const box of f.boxes) {
        const hit = ray.intersectBox(box, new THREE.Vector3());
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
   * Toggle visibility of roads layer.
   * @param {boolean} visible
   */
  setVisible(visible) {
    this.group.visible = visible;
  }

  /**
   * Dispose geometries and materials.
   */
  dispose() {
    if (this.roadsMesh) {
      if (this.roadsMesh.geometry) this.roadsMesh.geometry.dispose();
      this.group.remove(this.roadsMesh);
      this.roadsMesh = null;
      this.floodedMesh = null;
      this.openMesh = null;
    }
    if (this.roadsMaterial) {
      this.roadsMaterial.dispose();
      this.roadsMaterial = null;
    }
    this.features = [];
  }
}
