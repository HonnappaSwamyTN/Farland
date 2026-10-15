import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

/**
 * HighWater 3D — Camera Navigation & Orbit Controls
 * Wraps OrbitControls with geographic camera limits, smooth damping, and view presets.
 */
export class NavigationControls {
  /**
   * @param {THREE.Camera} camera
   * @param {HTMLElement} domElement
   */
  constructor(camera, domElement) {
    if (!camera || !domElement) {
      throw new Error('NavigationControls: Camera and domElement are required.');
    }

    this.camera = camera;
    this.domElement = domElement;

    // Default reference targets
    this.defaultTarget = new THREE.Vector3(0, 140, 0);
    this.defaultPosition = new THREE.Vector3(0, 850, 1350);

    // Camera animation state for smooth transitions
    this.isTransitioning = false;
    this.transitionStart = 0;
    this.transitionDuration = 800; // ms
    this.startPos = new THREE.Vector3();
    this.targetPos = new THREE.Vector3();
    this.startLookAt = new THREE.Vector3();
    this.targetLookAt = new THREE.Vector3();

    // Initialize OrbitControls
    this.controls = new OrbitControls(this.camera, this.domElement);
    this.setupControls();
  }

  /**
   * Configure damping and geographic navigation bounds.
   */
  setupControls() {
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.screenSpacePanning = false;

    // Sensible distance limits (in meters)
    this.controls.minDistance = 30;
    this.controls.maxDistance = 5500;

    // Prevent camera from clipping beneath the terrain ground plane
    this.controls.maxPolarAngle = Math.PI / 2 - 0.03; // ~88 degrees
    this.controls.minPolarAngle = 0.02; // prevent gimbal pole singularity

    // Set initial position and target
    this.camera.position.copy(this.defaultPosition);
    this.controls.target.copy(this.defaultTarget);
    this.controls.update();
  }

  /**
   * Update per-frame damping and transition interpolation.
   * @param {number} delta
   */
  update(delta) {
    if (this.isTransitioning) {
      const now = performance.now();
      const progress = Math.min((now - this.transitionStart) / this.transitionDuration, 1.0);
      
      // Cubic ease-out
      const ease = 1 - Math.pow(1 - progress, 3);

      this.camera.position.lerpVectors(this.startPos, this.targetPos, ease);
      this.controls.target.lerpVectors(this.startLookAt, this.targetLookAt, ease);

      if (progress >= 1.0) {
        this.isTransitioning = false;
      }
    }

    this.controls.update();
  }

  /**
   * Smoothly animate camera to target position and lookAt.
   * @param {THREE.Vector3} newPos
   * @param {THREE.Vector3} newTarget
   * @param {number} durationMs
   */
  animateTo(newPos, newTarget, durationMs = 700) {
    this.isTransitioning = true;
    this.transitionStart = performance.now();
    this.transitionDuration = durationMs;

    this.startPos.copy(this.camera.position);
    this.targetPos.copy(newPos);

    this.startLookAt.copy(this.controls.target);
    this.targetLookAt.copy(newTarget);
  }

  /**
   * Preset: Standard 3D Isometric Orbit View
   */
  setPerspectiveIso() {
    this.animateTo(new THREE.Vector3(0, 850, 1350), new THREE.Vector3(0, 140, 0));
  }

  /**
   * Preset: Nadir 2D Top-Down Plan View (North Up)
   */
  setTopDown() {
    // Slight Z offset (0.001) avoids pure gimbal singularity in OrbitControls
    this.animateTo(new THREE.Vector3(0, 2400, 0.001), new THREE.Vector3(0, 140, 0));
  }

  /**
   * Preset: Low Valley Corridor Perspective (looking along Ahr River flow)
   */
  setValleyLow() {
    this.animateTo(new THREE.Vector3(-1100, 230, 200), new THREE.Vector3(200, 140, -50));
  }

  /**
   * Reset camera to default state.
   */
  reset() {
    this.animateTo(this.defaultPosition, this.defaultTarget);
  }

  /**
   * Get current camera telemetry readouts.
   */
  getTelemetry() {
    const pos = this.camera.position;
    const target = this.controls.target;
    const offset = new THREE.Vector3().subVectors(pos, target);
    const radius = offset.length();

    // Polar angle (pitch relative to ground)
    const pitchDeg = ((Math.PI / 2 - this.controls.getPolarAngle()) * 180) / Math.PI;

    // Azimuthal angle (yaw / compass heading)
    let azimuthDeg = (this.controls.getAzimuthalAngle() * 180) / Math.PI;
    if (azimuthDeg < 0) azimuthDeg += 360;

    return {
      camX: pos.x,
      camY: pos.y,
      camZ: pos.z,
      targetX: target.x,
      targetY: target.y,
      targetZ: target.z,
      altitude: pos.y,
      distance: radius,
      pitchDeg: pitchDeg,
      azimuthDeg: azimuthDeg,
    };
  }

  /**
   * Dispose controls and event listeners.
   */
  dispose() {
    if (this.controls) {
      this.controls.dispose();
      this.controls = null;
    }
  }
}
