import * as THREE from 'three';

/**
 * HighWater 3D — Placeholder Terrain Generator
 * 
 * PROVENANCE & CALIBRATION NOTICE:
 * This terrain is a SYNTHETIC PROCEDURAL PLACEHOLDER representing the Ahr valley
 * topography around Dernau, Germany. No genuine DEM elevation raster was found
 * locally. It is strictly uncalibrated and intended for 3D navigation, viewport
 * calibration, and engineering interface validation.
 * 
 * Study Bounds: [7.015036, 50.511616, 7.044231, 50.531079]
 * Dimensions: 2,400m (East-West) × 2,400m (North-South)
 */
export class PlaceholderTerrain {
  constructor(options = {}) {
    this.width = options.width || 2400; // meters (East-West)
    this.length = options.length || 2400; // meters (North-South)
    this.segmentsX = options.segmentsX || 128;
    this.segmentsZ = options.segmentsZ || 128;

    this.mesh = null;
    this.wireframeMesh = null;
    this.geometry = null;
    this.material = null;
    this.wireframeMaterial = null;

    // Hypsometric tinting enabled by default
    this.hypsometricEnabled = true;

    // Metadata
    this.metadata = {
      isSynthetic: true,
      label: 'Synthetic Procedural Terrain Placeholder (Ahr Valley Corridor Mock)',
      demSource: 'Procedural Valley Model (Uncalibrated)',
      studyArea: 'Dernau, Ahr Valley (Germany)',
      coverageBbox: [7.015036, 50.511616, 7.044231, 50.531079],
      dimensionsMeters: { width: this.width, length: this.length },
      elevationRangeMeters: [122.0, 318.5],
      resolution: `${this.segmentsX} × ${this.segmentsZ} vertices`,
      triangleCount: this.segmentsX * this.segmentsZ * 2,
    };
  }

  /**
   * Procedural parametric elevation formula for the Ahr valley corridor.
   * Aligned with the Dernau study area bounds where the Ahr river meanders
   * roughly West-to-East around Z ≈ -40m with steep vineyard slopes to the North & South.
   * 
   * @param {number} x - Metric X (East-West)
   * @param {number} z - Metric Z (North-South)
   * @returns {number} Elevation in meters above sea level
   */
  sampleElevation(x, z) {
    // Meandering river centerline Z coordinate in the Dernau corridor
    const riverZ = -40 + 130 * Math.sin(x / 460) + 40 * Math.sin(x / 180) + 12 * Math.cos(x / 75);

    // Distance from the Ahr river centerline
    const dist = Math.abs(z - riverZ);

    let elev;
    if (dist < 55) {
      // River channel bed (122m - 126m)
      elev = 124.0 + 1.8 * Math.sin(x / 140);
    } else if (dist < 260) {
      // Alluvial floodplain & Dernau settlement floor (126m - 148m)
      const t = (dist - 55) / 205;
      elev = 126.0 + 22.0 * Math.pow(t, 1.35);
    } else {
      // Steep valley slopes and ridge peaks (148m - 315m)
      const t = (dist - 260) / (this.length / 2 - 260);
      const clampedT = Math.min(Math.max(t, 0), 1.0);
      elev = 148.0 + 165.0 * Math.pow(clampedT, 0.85);
    }

    // Add natural geographic topography undulations (terraces and secondary spurs)
    const undulation =
      7.0 * Math.sin(x / 140) * Math.cos(z / 160) +
      4.0 * Math.cos(x / 75 + z / 90) +
      2.0 * Math.sin(x / 35) * Math.cos(z / 40);

    return Math.max(122.0, elev + undulation);
  }

  /**
   * Generate Three.js Mesh with custom hypsometric vertex colors.
   * @returns {THREE.Mesh}
   */
  createMesh() {
    this.geometry = new THREE.PlaneGeometry(
      this.width,
      this.length,
      this.segmentsX,
      this.segmentsZ
    );

    // Rotate plane so Y is vertical elevation (Three.js standard coordinate space)
    this.geometry.rotateX(-Math.PI / 2);

    const pos = this.geometry.attributes.position;
    const vertexCount = pos.count;
    const colors = new Float32Array(vertexCount * 3);

    let minElev = Infinity;
    let maxElev = -Infinity;

    for (let i = 0; i < vertexCount; i++) {
      const vx = pos.getX(i);
      const vz = pos.getZ(i);
      const vy = this.sampleElevation(vx, vz);

      pos.setY(i, vy);

      if (vy < minElev) minElev = vy;
      if (vy > maxElev) maxElev = vy;

      const rgb = this.getHypsometricColor(vy);
      colors[i * 3 + 0] = rgb.r;
      colors[i * 3 + 1] = rgb.g;
      colors[i * 3 + 2] = rgb.b;
    }

    this.geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    this.geometry.computeVertexNormals();

    this.metadata.elevationRangeMeters = [
      Math.round(minElev * 10) / 10,
      Math.round(maxElev * 10) / 10,
    ];

    this.material = new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 0.82,
      metalness: 0.08,
      flatShading: false,
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.name = 'Terrain_Surface_Placeholder';
    this.mesh.receiveShadow = true;
    this.mesh.castShadow = true;

    this.wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    this.wireframeMesh = new THREE.Mesh(this.geometry, this.wireframeMaterial);
    this.wireframeMesh.name = 'Terrain_Wireframe_Overlay';
    this.wireframeMesh.visible = false;
    this.mesh.add(this.wireframeMesh);

    return this.mesh;
  }

  getHypsometricColor(elevation) {
    if (!this.hypsometricEnabled) {
      return { r: 0.35, g: 0.38, b: 0.44 };
    }

    const t = Math.min(Math.max((elevation - 122) / (315 - 122), 0), 1);

    if (t < 0.1) {
      return this.lerpColor({ r: 0.11, g: 0.18, b: 0.26 }, { r: 0.18, g: 0.29, b: 0.24 }, t / 0.1);
    } else if (t < 0.35) {
      return this.lerpColor({ r: 0.18, g: 0.29, b: 0.24 }, { r: 0.36, g: 0.40, b: 0.26 }, (t - 0.1) / 0.25);
    } else if (t < 0.7) {
      return this.lerpColor({ r: 0.36, g: 0.40, b: 0.26 }, { r: 0.49, g: 0.43, b: 0.32 }, (t - 0.35) / 0.35);
    } else {
      return this.lerpColor({ r: 0.49, g: 0.43, b: 0.32 }, { r: 0.34, g: 0.37, b: 0.42 }, (t - 0.7) / 0.3);
    }
  }

  lerpColor(c1, c2, factor) {
    const f = Math.min(Math.max(factor, 0), 1);
    return {
      r: c1.r + (c2.r - c1.r) * f,
      g: c1.g + (c2.g - c1.g) * f,
      b: c1.b + (c2.b - c1.b) * f,
    };
  }

  setWireframe(enabled) {
    if (this.wireframeMesh) {
      this.wireframeMesh.visible = enabled;
    }
  }

  setHypsometric(enabled) {
    this.hypsometricEnabled = enabled;
    if (!this.geometry) return;

    const pos = this.geometry.attributes.position;
    const colorAttr = this.geometry.attributes.color;
    const colors = colorAttr.array;

    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i);
      const rgb = this.getHypsometricColor(y);
      colors[i * 3 + 0] = rgb.r;
      colors[i * 3 + 1] = rgb.g;
      colors[i * 3 + 2] = rgb.b;
    }

    colorAttr.needsUpdate = true;
  }

  dispose() {
    if (this.geometry) {
      this.geometry.dispose();
      this.geometry = null;
    }
    if (this.material) {
      this.material.dispose();
      this.material = null;
    }
    if (this.wireframeMaterial) {
      this.wireframeMaterial.dispose();
      this.wireframeMaterial = null;
    }
    if (this.mesh) {
      if (this.mesh.parent) {
        this.mesh.parent.remove(this.mesh);
      }
      this.mesh = null;
    }
  }
}
