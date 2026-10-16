import * as THREE from 'three';
import { PlaceholderTerrain } from './PlaceholderTerrain.js';
import { DemTerrain } from './DemTerrain.js';

/**
 * HighWater 3D — Terrain Manager
 * Orchestrates terrain loading, mesh lifecycle, rendering toggles, and coordinate sampling.
 */
export class TerrainManager {
  /**
   * @param {THREE.Scene} scene
   */
  constructor(scene) {
    if (!scene) {
      throw new Error('TerrainManager: THREE.Scene is required.');
    }
    this.scene = scene;
    this.activeTerrain = null;
    this.terrainMesh = null;

    // Display state
    this.wireframeActive = false;
    this.hypsometricActive = true;

    // Raycaster for surface intersection & cursor telemetry
    this.raycaster = new THREE.Raycaster();
  }

  /**
   * Load real calibrated DGM1 DEM terrain from processed JSON.
   * If the file cannot be fetched, gracefully falls back to synthetic placeholder.
   * 
   * @param {string} [demUrl='./data/dernau/dem_height_grid.json']
   * @returns {Promise<Object>} Active terrain metadata
   */
  async loadRealTerrain(demUrl = './data/dernau/dem_height_grid.json') {
    this.disposeCurrentTerrain();

    try {
      console.log(`[TerrainManager] Ingesting real DEM height grid from: ${demUrl}`);
      const response = await fetch(demUrl);
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status} fetching DEM at ${demUrl}`);
      }

      const payload = await response.json();
      this.demPayload = payload;
      this.activeTerrain = new DemTerrain(payload);
      this.terrainMesh = this.activeTerrain.createMesh();
      this.scene.add(this.terrainMesh);

      // Apply initial toggles
      this.activeTerrain.setWireframe(this.wireframeActive);
      this.activeTerrain.setHypsometric(this.hypsometricActive);

      console.log(`[TerrainManager] Real DGM1 terrain loaded successfully:`, this.activeTerrain.metadata);
      return this.activeTerrain.metadata;
    } catch (err) {
      this.demPayload = null;
      console.warn(`[TerrainManager] Failed to load real DEM (${err.message}). Falling back to synthetic placeholder.`);
      return this.loadPlaceholderTerrain();
    }
  }

  /**
   * Load the synthetic procedural placeholder terrain.
   * Used as fallback or for baseline comparison.
   */
  loadPlaceholderTerrain() {
    this.disposeCurrentTerrain();

    this.activeTerrain = new PlaceholderTerrain({
      width: 2400,
      length: 2400,
      segmentsX: 128,
      segmentsZ: 128,
    });

    this.terrainMesh = this.activeTerrain.createMesh();
    this.scene.add(this.terrainMesh);

    // Apply initial toggles
    this.activeTerrain.setWireframe(this.wireframeActive);
    this.activeTerrain.setHypsometric(this.hypsometricActive);

    return this.activeTerrain.metadata;
  }

  /**
   * Load default terrain. Defaults to real DEM asynchronously.
   */
  async loadDefaultTerrain() {
    return await this.loadRealTerrain();
  }

  /**
   * Toggle wireframe topology overlay on the terrain.
   * @param {boolean} [forceState]
   * @returns {boolean} New wireframe state
   */
  toggleWireframe(forceState) {
    this.wireframeActive = typeof forceState === 'boolean' ? forceState : !this.wireframeActive;
    if (this.activeTerrain) {
      this.activeTerrain.setWireframe(this.wireframeActive);
    }
    return this.wireframeActive;
  }

  /**
   * Toggle hypsometric tinting vs neutral engineering shading.
   * @param {boolean} [forceState]
   * @returns {boolean} New hypsometric state
   */
  toggleHypsometric(forceState) {
    this.hypsometricActive = typeof forceState === 'boolean' ? forceState : !this.hypsometricActive;
    if (this.activeTerrain) {
      this.activeTerrain.setHypsometric(this.hypsometricActive);
    }
    return this.hypsometricActive;
  }

  /**
   * Sample the terrain height at any continuous metric (X, Z) coordinate.
   * @param {number} x
   * @param {number} z
   * @returns {number|null}
   */
  getElevationAt(x, z) {
    if (!this.activeTerrain) return null;
    return this.activeTerrain.sampleElevation(x, z);
  }

  /**
   * Perform raycasting to find the exact point on the terrain surface under normalized device coordinates.
   * @param {THREE.Vector2} ndcMouse
   * @param {THREE.Camera} camera
   * @returns {THREE.Vector3|null}
   */
  raycastSurface(ndcMouse, camera) {
    if (!this.terrainMesh || !camera) return null;

    this.raycaster.setFromCamera(ndcMouse, camera);
    const intersects = this.raycaster.intersectObject(this.terrainMesh, false);

    if (intersects && intersects.length > 0) {
      return intersects[0].point;
    }
    return null;
  }

  /**
   * Get metadata describing current active terrain.
   */
  getMetadata() {
    return this.activeTerrain ? this.activeTerrain.metadata : null;
  }

  /**
   * Get raw DEM payload if real DEM is loaded.
   * @returns {Object|null}
   */
  getDemPayload() {
    return this.demPayload || null;
  }

  /**
   * Dispose current terrain mesh and resources.
   */
  disposeCurrentTerrain() {
    if (this.activeTerrain) {
      this.activeTerrain.dispose();
      this.activeTerrain = null;
      this.terrainMesh = null;
    }
  }

  /**
   * Dispose manager resources.
   */
  dispose() {
    this.disposeCurrentTerrain();
    this.scene = null;
  }
}
