import * as THREE from 'three';

/**
 * HighWater 3D — Telemetry System
 * Tracks and renders real-time viewport, camera, terrain, and WebGL diagnostic readouts.
 */
export class Telemetry {
  /**
   * @param {Object} domElements - Map of telemetry DOM nodes
   */
  constructor(domElements) {
    this.dom = domElements;
    this.mouseNdc = new THREE.Vector2(-999, -999);
    this.lastDomUpdate = 0;
    this.updateInterval = 80; // Throttled to ~12.5Hz to prevent DOM layout thrashing
  }

  /**
   * Update camera, cursor, and diagnostic readouts.
   * @param {Object} cameraTelemetry
   * @param {Object} renderDiagnostics
   * @param {THREE.Vector3|null} surfaceIntersection
   */
  update(cameraTelemetry, renderDiagnostics, surfaceIntersection) {
    const now = performance.now();
    if (now - this.lastDomUpdate < this.updateInterval) return;
    this.lastDomUpdate = now;

    // 1. Camera Positions & Orientation
    if (cameraTelemetry) {
      if (this.dom.camPos) {
        this.dom.camPos.textContent = `${cameraTelemetry.camX.toFixed(0)}m, ${cameraTelemetry.camY.toFixed(0)}m, ${cameraTelemetry.camZ.toFixed(0)}m`;
      }
      if (this.dom.targetPos) {
        this.dom.targetPos.textContent = `${cameraTelemetry.targetX.toFixed(0)}m, ${cameraTelemetry.targetY.toFixed(0)}m, ${cameraTelemetry.targetZ.toFixed(0)}m`;
      }
      if (this.dom.camAlt) {
        this.dom.camAlt.textContent = `${cameraTelemetry.altitude.toFixed(1)} m`;
      }
      if (this.dom.camAngles) {
        this.dom.camAngles.textContent = `${cameraTelemetry.pitchDeg.toFixed(1)}° / ${cameraTelemetry.azimuthDeg.toFixed(1)}°`;
      }

      // 2. Compass Needle Rotation
      if (this.dom.compassNeedle) {
        // Rotate needle opposite to camera yaw so North stays pointing correctly
        this.dom.compassNeedle.style.transform = `rotate(${-cameraTelemetry.azimuthDeg}deg)`;
      }
    }

    // 3. Render Diagnostics & Performance
    if (renderDiagnostics) {
      if (this.dom.fpsCounter) {
        this.dom.fpsCounter.textContent = `${renderDiagnostics.fps} FPS`;
      }
      if (this.dom.drawCalls) {
        this.dom.drawCalls.textContent = renderDiagnostics.drawCalls;
      }
      if (this.dom.triangles) {
        this.dom.triangles.textContent = renderDiagnostics.triangles.toLocaleString();
      }
      if (this.dom.frameTime) {
        this.dom.frameTime.textContent = `${renderDiagnostics.frameDurationMs.toFixed(1)} ms`;
      }
    }

    // 4. Terrain Surface Raycasting Readout
    if (this.dom.cursorPos) {
      if (surfaceIntersection) {
        const x = surfaceIntersection.x.toFixed(1);
        const y = surfaceIntersection.y.toFixed(1);
        const z = surfaceIntersection.z.toFixed(1);
        this.dom.cursorPos.textContent = `X: ${x}m  Y: ${y}m  Z: ${z}m`;
      } else {
        this.dom.cursorPos.textContent = 'Off terrain bounds';
      }
    }
  }

  /**
   * Set normalized device coordinates (-1 to +1) from viewport mouse event.
   * @param {number} clientX
   * @param {number} clientY
   * @param {DOMRect} rect
   */
  setMouseCoords(clientX, clientY, rect) {
    this.mouseNdc.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    this.mouseNdc.y = -(((clientY - rect.top) / rect.height) * 2 - 1);
  }

  getMouseNdc() {
    return this.mouseNdc;
  }
}
