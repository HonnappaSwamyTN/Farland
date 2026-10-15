import * as THREE from 'three';

/**
 * HighWater 3D — Core WebGL Scene & Viewer
 * Manages Three.js scene, rendering pipeline, camera projection, and resource lifecycle.
 */
export class Viewer {
  /**
   * @param {HTMLElement} container - DOM element to mount the WebGL canvas
   */
  constructor(container) {
    if (!container) {
      throw new Error('Viewer: Canvas container DOM element is required.');
    }
    this.container = container;

    // Core Three.js components
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.gridHelper = null;
    this.axesHelper = null;

    // Lighting
    this.sunLight = null;
    this.fillLight = null;
    this.ambientLight = null;

    // Animation & telemetry
    this.animationFrameId = null;
    this.clock = new THREE.Clock();
    this.fps = 60;
    this.frameCount = 0;
    this.lastFpsTime = performance.now();
    this.lastFrameDuration = 16.6;

    // Callbacks
    this.onRenderFrame = null;

    // Bound listeners for clean disposal
    this._onResizeBound = this.handleResize.bind(this);
    this._resizeObserver = null;

    this.init();
  }

  /**
   * Initialize Three.js scene, camera, lights, and renderer.
   */
  init() {
    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || window.innerHeight;

    // 1. Scene with atmospheric fog
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x060913);
    this.scene.fog = new THREE.FogExp2(0x060913, 0.00032);

    // 2. Camera: 48° FOV for realistic geographic perspective
    this.camera = new THREE.PerspectiveCamera(48, width / height, 2.0, 15000);
    this.camera.position.set(0, 850, 1350);

    // 3. WebGL Renderer with ACES tone mapping
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      alpha: false,
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.1;

    // Attach to DOM
    this.container.innerHTML = '';
    this.container.appendChild(this.renderer.domElement);

    // 4. Photometric-style lighting for topography relief
    this.setupLighting();

    // 5. Metric Reference Grid at base valley datum (Y = 120m)
    this.setupReferenceGrid();

    // 6. Responsive resize handling
    window.addEventListener('resize', this._onResizeBound);
    if (window.ResizeObserver) {
      this._resizeObserver = new ResizeObserver(() => this.handleResize());
      this._resizeObserver.observe(this.container);
    }
  }

  /**
   * Configure directional sunlight and ambient sky irradiance.
   */
  setupLighting() {
    // Ambient light: Soft cool ambient representing open sky
    this.ambientLight = new THREE.AmbientLight(0x8fa3bf, 0.65);
    this.scene.add(this.ambientLight);

    // Primary directional sun: Casts clear relief shadows on valley slopes
    // Positioned southwest to highlight east-west Ahr valley slopes
    this.sunLight = new THREE.DirectionalLight(0xfff5e6, 1.35);
    this.sunLight.position.set(-1800, 2200, 1200);
    this.scene.add(this.sunLight);

    // Secondary fill light: Soft cool bounce from opposing ridge
    this.fillLight = new THREE.DirectionalLight(0x38bdf8, 0.35);
    this.fillLight.position.set(1600, 1200, -1400);
    this.scene.add(this.fillLight);
  }

  /**
   * Set up metric reference grid representing UTM 32N coordinates.
   */
  setupReferenceGrid() {
    // Grid: 3000m x 3000m with 100m grid lines, matching 300m analysis cells
    this.gridHelper = new THREE.GridHelper(3000, 30, 0x38bdf8, 0x1e293b);
    this.gridHelper.position.y = 118; // Placed slightly below base terrain bed
    this.gridHelper.material.opacity = 0.45;
    this.gridHelper.material.transparent = true;
    this.scene.add(this.gridHelper);

    // Metric axes: X=East (Red), Y=Elevation (Green), Z=South (Blue)
    this.axesHelper = new THREE.AxesHelper(300);
    this.axesHelper.position.set(0, 120, 0);
    this.scene.add(this.axesHelper);
  }

  /**
   * Toggle visibility of the metric spatial grid and axes.
   * @param {boolean} visible
   */
  setGridVisible(visible) {
    if (this.gridHelper) this.gridHelper.visible = visible;
    if (this.axesHelper) this.axesHelper.visible = visible;
  }

  /**
   * Handle viewport resizing responsively.
   */
  handleResize() {
    if (!this.container || !this.renderer || !this.camera) return;

    const width = this.container.clientWidth;
    const height = this.container.clientHeight;

    if (width === 0 || height === 0) return;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height, false);
  }

  /**
   * Start rendering animation loop.
   * @param {Function} updateFn - Per-frame update logic (e.g., controls.update)
   */
  startRenderLoop(updateFn) {
    const loop = (timestamp) => {
      this.animationFrameId = requestAnimationFrame(loop);

      const frameStart = performance.now();
      const delta = this.clock.getDelta();

      // Per-frame camera/controller update
      if (typeof updateFn === 'function') {
        updateFn(delta);
      }

      // Render frame
      this.renderer.render(this.scene, this.camera);

      // Telemetry metrics calculation
      this.frameCount++;
      const now = performance.now();
      if (now - this.lastFpsTime >= 500) {
        this.fps = Math.round((this.frameCount * 1000) / (now - this.lastFpsTime));
        this.frameCount = 0;
        this.lastFpsTime = now;
      }
      this.lastFrameDuration = performance.now() - frameStart;

      // Optional telemetry notification callback
      if (typeof this.onRenderFrame === 'function') {
        this.onRenderFrame({
          fps: this.fps,
          frameDurationMs: this.lastFrameDuration,
          drawCalls: this.renderer.info.render.calls,
          triangles: this.renderer.info.render.triangles,
          geometries: this.renderer.info.memory.geometries,
          textures: this.renderer.info.memory.textures,
        });
      }
    };

    this.animationFrameId = requestAnimationFrame(loop);
  }

  /**
   * Stop rendering loop.
   */
  stopRenderLoop() {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }

  /**
   * Cleanly dispose of all Three.js WebGL objects and event listeners.
   */
  dispose() {
    this.stopRenderLoop();

    window.removeEventListener('resize', this._onResizeBound);
    if (this._resizeObserver) {
      this._resizeObserver.disconnect();
      this._resizeObserver = null;
    }

    // Traverse and dispose all scene objects
    if (this.scene) {
      this.scene.traverse((obj) => {
        if (obj.geometry) {
          obj.geometry.dispose();
        }
        if (obj.material) {
          if (Array.isArray(obj.material)) {
            obj.material.forEach((mat) => this.disposeMaterial(mat));
          } else {
            this.disposeMaterial(obj.material);
          }
        }
      });
      this.scene.clear();
    }

    if (this.renderer) {
      this.renderer.dispose();
      this.renderer.forceContextLoss();
      if (this.renderer.domElement && this.renderer.domElement.parentNode) {
        this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
      }
    }
  }

  /**
   * Dispose individual material and its textures.
   */
  disposeMaterial(mat) {
    if (!mat) return;
    Object.keys(mat).forEach((key) => {
      const val = mat[key];
      if (val && typeof val.dispose === 'function' && !(val instanceof THREE.Material)) {
        val.dispose();
      }
    });
    mat.dispose();
  }
}
