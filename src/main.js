import { Viewer } from './core/Viewer.js';
import { NavigationControls } from './core/Controls.js';
import { TerrainManager } from './terrain/TerrainManager.js';
import { OverlayManager } from './overlays/OverlayManager.js';
import { FloodWaterManager } from './water/FloodWaterManager.js';
import { UIController } from './ui/UIController.js';

/**
 * HighWater 3D — Application Bootstrap & Orchestrator
 * Milestone 7: Reliability, Usability and Presentation Readiness
 */
class HighWaterApplication {
  constructor() {
    this.viewer = null;
    this.controls = null;
    this.terrainManager = null;
    this.overlayManager = null;
    this.floodWaterManager = null;
    this.ui = null;
    this.isInitialized = false;
  }

  /**
   * Boot sequence.
   */
  async init() {
    try {
      console.log('🌊 Initializing HighWater 3D (Milestone 7: Reliability, Usability and Presentation Readiness)...');

      // 1. Locate canvas container
      const container = document.getElementById('viewport-container');
      if (!container) {
        throw new Error('Root viewport container #viewport-container not found.');
      }

      // 2. Initialize Three.js WebGL Viewer
      this.viewer = new Viewer(container);

      // 3. Initialize Camera Orbit & Navigation Controls
      this.controls = new NavigationControls(this.viewer.camera, this.viewer.renderer.domElement);

      // 4. Initialize Terrain Manager
      this.terrainManager = new TerrainManager(this.viewer.scene);

      // 5. Initialize Geographic Overlay Manager
      this.overlayManager = new OverlayManager(this.viewer.scene, this.terrainManager);

      // 6. Initialize Interactive Flood Water Manager
      this.floodWaterManager = new FloodWaterManager(
        this.viewer.scene,
        this.terrainManager,
        this.overlayManager
      );
      this.overlayManager.setFloodWaterManager(this.floodWaterManager);

      // 7. Initialize UI Controller & bind HUD
      this.ui = new UIController({
        viewer: this.viewer,
        controls: this.controls,
        terrainManager: this.terrainManager,
        overlayManager: this.overlayManager,
        floodWaterManager: this.floodWaterManager,
      });
      this.ui.setFloodWaterManager(this.floodWaterManager);

      this.ui.setLoadingProgress('Ingesting verified Rhineland-Palatinate DGM1 terrain...', 25);

      // 8. Load Active Terrain (Real DGM1 DEM with graceful fallback)
      const terrainMeta = await this.terrainManager.loadRealTerrain('./data/dernau/dem_height_grid.json');
      console.log('📍 Active Terrain Loaded:', terrainMeta.label, terrainMeta);

      if (terrainMeta && !terrainMeta.isSynthetic) {
        this.ui.setTerrainProvenanceReal(terrainMeta);
      }

      // Attach DEM grid to flood water manager
      const demPayload = this.terrainManager.getDemPayload();
      if (demPayload) {
        this.floodWaterManager.attachDEM(demPayload);
      }

      this.ui.setLoadingProgress('Ingesting Dernau vector overlays...', 55);

      // 9. Load Geographic Overlays (Buildings, Roads, Facilities, Historical Flood Extent)
      try {
        const stats = await this.overlayManager.loadAll();
        console.log('🗺️ Overlays initialized:', stats);
        // Pre-index assets for dynamic impact calculation
        const datasets = this.overlayManager.getRawDatasets();
        this.floodWaterManager.indexAssets(datasets);
      } catch (overlayError) {
        console.warn('⚠️ Warning during overlay loading:', overlayError);
      }

      this.ui.setLoadingProgress('Configuring camera viewports & telemetry...', 85);

      // 10. Wire render loop and frame telemetry callbacks
      this.viewer.onRenderFrame = (diagnostics) => {
        this.ui.updateFrame(diagnostics);
      };

      // 11. Start continuous animation loop
      this.viewer.startRenderLoop((delta) => {
        this.controls.update(delta);
        if (this.floodWaterManager) {
          this.floodWaterManager.update(delta);
        }
      });

      // 12. Complete initialization & hide loading overlay
      this.ui.setLoadingProgress('System ready.', 100);
      setTimeout(() => {
        this.ui.hideLoading();
      }, 400);

      this.isInitialized = true;
      console.log('✅ HighWater 3D Milestone 7 initialized successfully.');
    } catch (error) {
      console.error('❌ HighWater 3D Initialization failed:', error);
      if (this.ui) {
        this.ui.showError(error.message || 'Fatal error during 3D engine startup.');
      } else {
        const errorOverlay = document.getElementById('error-overlay');
        const errorMsgText = document.getElementById('error-msg-text');
        if (errorMsgText) errorMsgText.textContent = error.message;
        if (errorOverlay) errorOverlay.classList.remove('hidden');
      }
    }
  }

  /**
   * Graceful application disposal.
   */
  dispose() {
    if (this.ui) this.ui.dispose();
    if (this.floodWaterManager) this.floodWaterManager.dispose();
    if (this.overlayManager) this.overlayManager.dispose();
    if (this.terrainManager) this.terrainManager.dispose();
    if (this.controls) this.controls.dispose();
    if (this.viewer) this.viewer.dispose();
    this.isInitialized = false;
  }
}

// Instantiate and expose globally for inspection/debugging
const app = new HighWaterApplication();
window.highWaterApp = app;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => app.init());
} else {
  app.init();
}
