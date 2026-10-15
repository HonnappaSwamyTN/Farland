import * as THREE from 'three';
import { geoToLocal } from '../geo/Projection.js';

/**
 * HighWater 3D — Emergency Facilities Layer
 * Renders 6 critical infrastructure and relief shelter facilities in Dernau as 3D beacon pins.
 * Milestone 6: Features dynamic accessibility status visualization (Operational, Isolated, Inundated)
 * and local road access corridor analysis.
 */
export class FacilityLayer {
  /**
   * @param {THREE.Scene} scene
   * @param {import('../terrain/TerrainManager.js').TerrainManager} terrainManager
   */
  constructor(scene, terrainManager) {
    this.scene = scene;
    this.terrainManager = terrainManager;

    this.group = new THREE.Group();
    this.group.name = 'Facilities_Layer';
    this.scene.add(this.group);

    this.disposables = [];
    this.features = [];
    this.facilityMeshes = [];
    this.accessibilityMode = 'dynamic'; // 'dynamic' | 'historical'
    this.rawGeojson = null;

    this.stats = {
      total: 0,
      operational: 0,
      isolated: 0,
      inundated: 0,
    };
  }

  /**
   * Load facilities GeoJSON.
   * @param {string} url
   */
  async load(url = '/data/dernau/facilities.geojson') {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`FacilityLayer: Failed to fetch facilities GeoJSON from ${url} (${res.status})`);
    }

    const geojson = await res.json();
    this.rawGeojson = geojson;
    this.buildGeometry(geojson);
    return this.stats;
  }

  /**
   * Build 3D beacon pins for each emergency facility.
   * @param {Object} geojson
   */
  buildGeometry(geojson) {
    this.dispose();

    const rawFeatures = geojson.features || [];
    this.features = [];
    this.facilityMeshes = [];

    const pinHeight = 28.0; // 28m high tactical beacon
    const pinRadius = 1.2;

    rawFeatures.forEach((feat, index) => {
      if (!feat.geometry || feat.geometry.type !== 'Point') return;

      const props = feat.properties || {};
      const coords = feat.geometry.coordinates; // [lon, lat]
      const local = geoToLocal(coords[0], coords[1]);

      const baseElev = this.terrainManager.getElevationAt(local.x, local.z) || 135.0;

      // Color mapping by facility type
      let colorHex = 0x38bdf8; // default cyan
      let emissiveHex = 0x0284c7;
      if (props.type === 'hospital') {
        colorHex = 0xef4444; // Medical Red
        emissiveHex = 0x991b1b;
      } else if (props.type === 'shelter') {
        colorHex = 0xf59e0b; // Shelter Amber
        emissiveHex = 0xb45309;
      } else if (props.type === 'depot') {
        colorHex = 0x3b82f6; // Depot Blue
        emissiveHex = 0x1d4ed8;
      }

      // 1. Vertical Beacon Column
      const cylinderGeom = new THREE.CylinderGeometry(pinRadius * 0.7, pinRadius, pinHeight, 12);
      const cylinderMat = new THREE.MeshStandardMaterial({
        color: colorHex,
        emissive: emissiveHex,
        emissiveIntensity: 0.6,
        roughness: 0.3,
        metalness: 0.7,
      });
      const cylinderMesh = new THREE.Mesh(cylinderGeom, cylinderMat);
      cylinderMesh.position.set(local.x, baseElev + pinHeight / 2, local.z);
      this.group.add(cylinderMesh);

      // 2. Beacon Head Sphere
      const headGeom = new THREE.SphereGeometry(pinRadius * 2.4, 16, 16);
      const headMat = new THREE.MeshStandardMaterial({
        color: colorHex,
        emissive: colorHex,
        emissiveIntensity: 0.9,
        roughness: 0.2,
      });
      const headMesh = new THREE.Mesh(headGeom, headMat);
      headMesh.position.set(local.x, baseElev + pinHeight + pinRadius * 2, local.z);
      this.group.add(headMesh);

      // 3. Ground Ripple / Halo Ring
      const ringGeom = new THREE.RingGeometry(pinRadius * 2, pinRadius * 7, 24);
      ringGeom.rotateX(-Math.PI / 2);
      const ringMat = new THREE.MeshBasicMaterial({
        color: colorHex,
        transparent: true,
        opacity: 0.45,
        side: THREE.DoubleSide,
      });
      const ringMesh = new THREE.Mesh(ringGeom, ringMat);
      ringMesh.position.set(local.x, baseElev + 0.35, local.z);
      this.group.add(ringMesh);

      this.disposables.push(cylinderGeom, cylinderMat, headGeom, headMat, ringGeom, ringMat);

      // Store mesh materials for dynamic accessibility coloring
      this.facilityMeshes.push({
        cylinderMat,
        headMat,
        ringMat,
        defaultColor: colorHex,
        defaultEmissive: emissiveHex,
      });

      // Bounding box for raycasting
      const bounds = new THREE.Box3();
      bounds.setFromCenterAndSize(
        new THREE.Vector3(local.x, baseElev + pinHeight / 2, local.z),
        new THREE.Vector3(pinRadius * 8, pinHeight + 10, pinRadius * 8)
      );

      this.features.push({
        id: props.facility_id || `fac-${index}`,
        name: props.name || 'Emergency Facility',
        type: props.type || 'unknown',
        provenance: props.provenance || 'dataset',
        kind: 'facility',
        coordsGeo: [coords[0], coords[1]],
        elevationM: Math.round(baseElev * 10) / 10,
        center: { x: local.x, y: baseElev + pinHeight, z: local.z },
        bounds: bounds,
        accessibilityStatus: 'operational',
        siteWaterDepth: 0,
        nearbyRoadStatus: 'passable',
      });
    });

    this.stats = {
      total: this.features.length,
      operational: this.features.length,
      isolated: 0,
      inundated: 0,
    };
  }

  /**
   * Set accessibility visualization mode.
   * @param {'dynamic'|'historical'} mode
   */
  setAccessibilityMode(mode) {
    this.accessibilityMode = mode === 'historical' ? 'historical' : 'dynamic';
    return this.accessibilityMode;
  }

  /**
   * Update facility beacon pin colors based on dynamic accessibility analysis.
   * @param {Object<string, Object>} accessibilityMap - Map of facility ID to status
   */
  updateAccessibility(accessibilityMap) {
    let operationalCount = 0;
    let isolatedCount = 0;
    let inundatedCount = 0;

    this.features.forEach((feat, index) => {
      const meshRefs = this.facilityMeshes[index];
      if (!meshRefs) return;

      const acc = accessibilityMap ? accessibilityMap[feat.id] : null;
      if (acc) {
        feat.accessibilityStatus = acc.status; // 'operational' | 'isolated' | 'inundated'
        feat.siteWaterDepth = acc.siteWaterDepth;
        feat.nearbyRoadStatus = acc.nearbyRoadStatus;
      }

      if (this.accessibilityMode === 'historical') {
        // Restore default type colors
        meshRefs.cylinderMat.color.setHex(meshRefs.defaultColor);
        meshRefs.cylinderMat.emissive.setHex(meshRefs.defaultEmissive);
        meshRefs.headMat.color.setHex(meshRefs.defaultColor);
        meshRefs.headMat.emissive.setHex(meshRefs.defaultColor);
        meshRefs.ringMat.color.setHex(meshRefs.defaultColor);
      } else {
        // Dynamic status colors:
        // Inundated: Severe crimson (0xef4444)
        // Isolated: Warning amber (0xf59e0b)
        // Operational: Navigable emerald (0x10b981)
        let colorHex = 0x10b981;
        let emissiveHex = 0x047857;

        if (feat.accessibilityStatus === 'inundated') {
          colorHex = 0xef4444;
          emissiveHex = 0x991b1b;
          inundatedCount++;
        } else if (feat.accessibilityStatus === 'isolated') {
          colorHex = 0xf59e0b;
          emissiveHex = 0xb45309;
          isolatedCount++;
        } else {
          colorHex = 0x10b981;
          emissiveHex = 0x047857;
          operationalCount++;
        }

        meshRefs.cylinderMat.color.setHex(colorHex);
        meshRefs.cylinderMat.emissive.setHex(emissiveHex);
        meshRefs.headMat.color.setHex(colorHex);
        meshRefs.headMat.emissive.setHex(colorHex);
        meshRefs.ringMat.color.setHex(colorHex);
      }
    });

    this.stats = {
      total: this.features.length,
      operational: operationalCount,
      isolated: isolatedCount,
      inundated: inundatedCount,
    };

    return this.stats;
  }

  /**
   * Find facility under raycast intersection.
   * @param {THREE.Ray} ray
   * @returns {Object|null}
   */
  intersectFacility(ray) {
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
   * Toggle visibility of facilities layer.
   * @param {boolean} visible
   */
  setVisible(visible) {
    this.group.visible = visible;
  }

  /**
   * Dispose geometries and materials.
   */
  dispose() {
    this.disposables.forEach((res) => {
      if (res && typeof res.dispose === 'function') res.dispose();
    });
    this.disposables = [];
    this.facilityMeshes = [];

    while (this.group.children.length > 0) {
      this.group.remove(this.group.children[0]);
    }

    this.features = [];
  }
}
