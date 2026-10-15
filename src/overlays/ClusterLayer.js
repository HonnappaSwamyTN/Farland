import * as THREE from 'three';

/**
 * HighWater 3D — Affected-Area Cluster Overlay Layer (Phase 3)
 * 
 * Renders spatial evacuation clusters in the 3D scene:
 * - Draped perimeter hazard halo ring on the terrain surface.
 * - Tactical cluster centroid beacon pin with glowing indicator.
 * - Raycast intersection support for direct 3D viewport selection.
 */
export class ClusterLayer {
  /**
   * @param {THREE.Scene} scene
   * @param {import('../terrain/TerrainManager.js').TerrainManager} terrainManager
   */
  constructor(scene, terrainManager) {
    this.scene = scene;
    this.terrainManager = terrainManager;

    this.group = new THREE.Group();
    this.group.name = 'Affected_Clusters_Layer';
    this.scene.add(this.group);

    this.disposables = [];
    this.clusters = [];
    this.clusterMeshes = [];
    this.visible = true;
    this.selectedClusterId = null;
  }

  /**
   * Rebuild 3D visual representations for a set of clusters.
   * @param {Array<Object>} clusters - Output from ClusterService.createClusters
   */
  updateClusters(clusters) {
    this.dispose();
    this.clusters = clusters || [];
    this.clusterMeshes = [];

    const pinHeight = 18.0;
    const pinRadius = 0.9;

    this.clusters.forEach((cluster) => {
      const cx = cluster.centroid.x;
      const cz = cluster.centroid.z;
      const gElev = this.terrainManager?.getElevationAt(cx, cz) ?? 130.0;

      // Color mapping based on max water depth in cluster:
      // Critical (>=2.0m): Intense Red (#ef4444)
      // High (1.0m - 2.0m): Orange-Red (#f97316)
      // Moderate (0.3m - 1.0m): Amber (#f59e0b)
      // Low (<0.3m): Yellow (#eab308)
      let colorHex = 0xf59e0b;
      let emissiveHex = 0xb45309;
      if (cluster.maxWaterDepth >= 2.0) {
        colorHex = 0xef4444;
        emissiveHex = 0x991b1b;
      } else if (cluster.maxWaterDepth >= 1.0) {
        colorHex = 0xf97316;
        emissiveHex = 0xc2410c;
      } else if (cluster.maxWaterDepth < 0.3) {
        colorHex = 0xeab308;
        emissiveHex = 0x854d0e;
      }

      // 1. Cluster Perimeter Hazard Disc / Ring on Terrain
      const rM = Math.max(20.0, cluster.radiusMeters);
      const ringGeom = new THREE.RingGeometry(rM * 0.85, rM, 32);
      ringGeom.rotateX(-Math.PI / 2);
      const ringMat = new THREE.MeshBasicMaterial({
        color: colorHex,
        transparent: true,
        opacity: 0.35,
        side: THREE.DoubleSide,
      });
      const ringMesh = new THREE.Mesh(ringGeom, ringMat);
      ringMesh.position.set(cx, gElev + 0.5, cz);
      this.group.add(ringMesh);

      // 2. Tactical Centroid Beacon Column
      const cylinderGeom = new THREE.CylinderGeometry(pinRadius * 0.6, pinRadius, pinHeight, 10);
      const cylinderMat = new THREE.MeshStandardMaterial({
        color: colorHex,
        emissive: emissiveHex,
        emissiveIntensity: 0.7,
        roughness: 0.3,
        metalness: 0.6,
      });
      const cylinderMesh = new THREE.Mesh(cylinderGeom, cylinderMat);
      cylinderMesh.position.set(cx, gElev + pinHeight / 2, cz);
      this.group.add(cylinderMesh);

      // 3. Cluster Head Sphere
      const headGeom = new THREE.SphereGeometry(pinRadius * 2.2, 12, 12);
      const headMat = new THREE.MeshStandardMaterial({
        color: colorHex,
        emissive: colorHex,
        emissiveIntensity: 0.9,
      });
      const headMesh = new THREE.Mesh(headGeom, headMat);
      headMesh.position.set(cx, gElev + pinHeight + pinRadius * 2, cz);
      this.group.add(headMesh);

      this.disposables.push(ringGeom, ringMat, cylinderGeom, cylinderMat, headGeom, headMat);

      // Raycast bounding box
      const bounds = new THREE.Box3();
      bounds.setFromCenterAndSize(
        new THREE.Vector3(cx, gElev + pinHeight / 2, cz),
        new THREE.Vector3(rM * 2, pinHeight + 10, rM * 2)
      );

      this.clusterMeshes.push({
        id: cluster.id,
        cluster,
        bounds,
        ringMesh,
        ringMat,
        cylinderMat,
        headMat,
        baseColor: colorHex,
        baseEmissive: emissiveHex,
      });
    });

    this.group.visible = this.visible;
  }

  /**
   * Set selection highlight on a cluster.
   * @param {string|null} clusterId
   */
  selectCluster(clusterId) {
    this.selectedClusterId = clusterId;
    for (const cm of this.clusterMeshes) {
      const isSelected = cm.id === clusterId;
      cm.ringMat.opacity = isSelected ? 0.75 : 0.35;
      cm.cylinderMat.emissiveIntensity = isSelected ? 1.0 : 0.7;
    }
  }

  /**
   * Raycast test for cluster under mouse cursor.
   * @param {THREE.Ray} ray
   * @returns {Object|null}
   */
  intersectCluster(ray) {
    if (!ray || !this.visible) return null;
    let closestCluster = null;
    let closestDist = Infinity;

    for (const cm of this.clusterMeshes) {
      if (cm.bounds) {
        const hit = ray.intersectBox(cm.bounds, new THREE.Vector3());
        if (hit) {
          const dist = ray.origin.distanceTo(hit);
          if (dist < closestDist) {
            closestDist = dist;
            closestCluster = cm.cluster;
          }
        }
      }
    }

    return closestCluster;
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
    this.clusterMeshes = [];

    while (this.group.children.length > 0) {
      this.group.remove(this.group.children[0]);
    }
  }
}
