import * as THREE from 'three';

/**
 * HighWater 3D — Proposed Candidate Safe Sites Layer (Phase 3)
 * 
 * Renders proposed emergency staging & shelter candidate sites:
 * - Distinctive tactical gold/amber beacon pins (0xf59e0b) with dashed ground rings.
 * - Distinct red submerged warning indicators if flood scenario drowns a candidate.
 * - Raycast intersection support for direct 3D viewport inspection.
 * - Kept strictly isolated from verified municipal facilities in FacilityLayer.
 */
export class ProposedSiteLayer {
  /**
   * @param {THREE.Scene} scene
   * @param {import('../terrain/TerrainManager.js').TerrainManager} terrainManager
   */
  constructor(scene, terrainManager) {
    this.scene = scene;
    this.terrainManager = terrainManager;

    this.group = new THREE.Group();
    this.group.name = 'Proposed_Sites_Layer';
    this.scene.add(this.group);

    this.disposables = [];
    this.sites = [];
    this.siteMeshes = [];
    this.visible = true;
    this.selectedSiteId = null;
  }

  /**
   * Rebuild 3D visual markers for evaluated candidate safe sites.
   * @param {Array<Object>} evaluatedSites - Output from ProposedSiteService.evaluateSites
   */
  updateSites(evaluatedSites) {
    this.dispose();
    this.sites = evaluatedSites || [];
    this.siteMeshes = [];

    const pinHeight = 22.0;
    const pinRadius = 1.0;

    this.sites.forEach((site) => {
      const gElev = site.groundElevation ?? (this.terrainManager?.getElevationAt(site.x, site.z) || 140.0);

      // Color coding:
      // Flooded / Disqualified: Severe Crimson (0xef4444)
      // High viability (score >= 75): Bright Gold (0xfacc15)
      // Viable (score >= 55): Warm Amber (0xf59e0b)
      // Marginal: Muted Orange (0xf97316)
      let colorHex = 0xf59e0b;
      let emissiveHex = 0xb45309;

      if (site.isFlooded) {
        colorHex = 0xef4444;
        emissiveHex = 0x991b1b;
      } else if (site.score >= 75) {
        colorHex = 0xfacc15;
        emissiveHex = 0xa16207;
      } else if (site.score < 55) {
        colorHex = 0xf97316;
        emissiveHex = 0xc2410c;
      }

      // 1. Tactical Stepped Pillar
      const columnGeom = new THREE.CylinderGeometry(pinRadius * 0.4, pinRadius * 0.9, pinHeight, 8);
      const columnMat = new THREE.MeshStandardMaterial({
        color: colorHex,
        emissive: emissiveHex,
        emissiveIntensity: 0.8,
        roughness: 0.25,
        metalness: 0.8,
      });
      const columnMesh = new THREE.Mesh(columnGeom, columnMat);
      columnMesh.position.set(site.x, gElev + pinHeight / 2, site.z);
      this.group.add(columnMesh);

      // 2. Diamond / Octahedron Beacon Head (distinct from sphere heads in FacilityLayer)
      const headGeom = new THREE.OctahedronGeometry(pinRadius * 2.2, 0);
      const headMat = new THREE.MeshStandardMaterial({
        color: colorHex,
        emissive: colorHex,
        emissiveIntensity: 0.95,
        roughness: 0.2,
      });
      const headMesh = new THREE.Mesh(headGeom, headMat);
      headMesh.position.set(site.x, gElev + pinHeight + pinRadius * 2, site.z);
      this.group.add(headMesh);

      // 3. Ground Target Ring
      const ringGeom = new THREE.RingGeometry(pinRadius * 2.5, pinRadius * 8.0, 24);
      ringGeom.rotateX(-Math.PI / 2);
      const ringMat = new THREE.MeshBasicMaterial({
        color: colorHex,
        transparent: true,
        opacity: 0.45,
        side: THREE.DoubleSide,
      });
      const ringMesh = new THREE.Mesh(ringGeom, ringMat);
      ringMesh.position.set(site.x, gElev + 0.4, site.z);
      this.group.add(ringMesh);

      this.disposables.push(columnGeom, columnMat, headGeom, headMat, ringGeom, ringMat);

      // Raycast bounding box
      const bounds = new THREE.Box3();
      bounds.setFromCenterAndSize(
        new THREE.Vector3(site.x, gElev + pinHeight / 2, site.z),
        new THREE.Vector3(pinRadius * 10, pinHeight + 10, pinRadius * 10)
      );

      this.siteMeshes.push({
        id: site.id,
        site,
        bounds,
        columnMat,
        headMat,
        ringMat,
      });
    });

    this.group.visible = this.visible;
  }

  /**
   * Set selection highlight on a proposed site.
   * @param {string|null} siteId
   */
  selectSite(siteId) {
    this.selectedSiteId = siteId;
    for (const sm of this.siteMeshes) {
      const isSelected = sm.id === siteId;
      sm.ringMat.opacity = isSelected ? 0.85 : 0.45;
      sm.columnMat.emissiveIntensity = isSelected ? 1.0 : 0.8;
    }
  }

  /**
   * Raycast test for proposed site under mouse cursor.
   * @param {THREE.Ray} ray
   * @returns {Object|null}
   */
  intersectProposedSite(ray) {
    if (!ray || !this.visible) return null;
    let closestSite = null;
    let closestDist = Infinity;

    for (const sm of this.siteMeshes) {
      if (sm.bounds) {
        const hit = ray.intersectBox(sm.bounds, new THREE.Vector3());
        if (hit) {
          const dist = ray.origin.distanceTo(hit);
          if (dist < closestDist) {
            closestDist = dist;
            closestSite = sm.site;
          }
        }
      }
    }

    return closestSite;
  }

  /**
   * Set layer visibility.
   * @param {boolean} visible
   */
  setVisible(visible) {
    this.visible = Boolean(visible);
    this.group.visible = this.visible;
    return this.visible;
  }

  /**
   * Clean up all memory resources.
   */
  dispose() {
    this.disposables.forEach((res) => {
      if (res && typeof res.dispose === 'function') res.dispose();
    });
    this.disposables = [];
    this.siteMeshes = [];

    while (this.group.children.length > 0) {
      this.group.remove(this.group.children[0]);
    }
  }
}
