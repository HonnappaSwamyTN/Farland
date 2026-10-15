import * as THREE from 'three';

/**
 * HighWater 3D — Real DEM Terrain Generator
 * 
 * Renders calibrated 3D topography using the official Rhineland-Palatinate
 * DGM1 bare-earth airborne LiDAR digital elevation model.
 * 
 * Provenance:
 *   Provider: Landesamt für Vermessung und Geobasisinformation Rheinland-Pfalz (LVermGeo RLP)
 *   Product: DGM1 (Digitales Geländemodell 1m Raster)
 *   Survey Years: 2024 / 2025
 *   Horizontal CRS: EPSG:25832 (ETRS89 / UTM Zone 32N)
 *   Vertical Datum: DHHN2016 (Normalhöhen / Quasigeoid, meters above sea level)
 *   License: dl-de/by-2-0 (Open Data)
 *   Attribution: ©GeoBasis-DE / LVermGeoRP (2024/2025), dl-de/by-2-0, www.lvermgeo.rlp.de [Daten bearbeitet]
 */
export class DemTerrain {
  /**
   * @param {Object} demPayload - Parsed JSON from convert_dem.py
   * @param {Object} [options]
   */
  constructor(demPayload, options = {}) {
    if (!demPayload || !demPayload.elevations || !demPayload.metadata) {
      throw new Error('DemTerrain: Invalid DEM payload format.');
    }

    this.rawMetadata = demPayload.metadata;
    this.elevations = demPayload.elevations;
    this.rows = this.elevations.length;
    this.cols = this.elevations[0].length;

    this.width = options.width || this.rawMetadata.utmExtents.widthMeters || 2400; // meters (East-West)
    this.length = options.length || this.rawMetadata.utmExtents.lengthMeters || 2400; // meters (North-South)

    this.segmentsX = options.segmentsX || (this.cols - 1);
    this.segmentsZ = options.segmentsZ || (this.rows - 1);

    this.minElev = this.rawMetadata.elevationStats.minMeters;
    this.maxElev = this.rawMetadata.elevationStats.maxMeters;
    this.meanElev = this.rawMetadata.elevationStats.meanMeters;

    this.mesh = null;
    this.wireframeMesh = null;
    this.geometry = null;
    this.material = null;
    this.wireframeMaterial = null;

    // Hypsometric tinting enabled by default
    this.hypsometricEnabled = true;

    // Public metadata for UI HUD & telemetry
    this.metadata = {
      isSynthetic: false,
      isRealDEM: true,
      label: 'Official Rhineland-Palatinate DGM1 Bare-Earth LiDAR Model',
      demSource: 'LVermGeo RLP DGM1 (Airborne LiDAR)',
      product: this.rawMetadata.product,
      surveyYears: this.rawMetadata.surveyYears,
      license: this.rawMetadata.license,
      attribution: this.rawMetadata.attribution,
      studyArea: this.rawMetadata.studyArea,
      verticalDatum: this.rawMetadata.verticalDatum,
      horizontalCRS: this.rawMetadata.sourceCRS,
      dimensionsMeters: { width: this.width, length: this.length },
      elevationRangeMeters: [this.minElev, this.maxElev],
      meanElevationMeters: this.meanElev,
      reliefMeters: Math.round((this.maxElev - this.minElev) * 10) / 10,
      resolution: `${this.cols} × ${this.rows} vertices (${Math.round((this.width / (this.cols - 1)) * 10) / 10}m grid step)`,
      triangleCount: this.segmentsX * this.segmentsZ * 2,
    };
  }

  /**
   * Sample the continuous real DEM surface height at any local Three.js (X, Z) coordinate
   * using bilinear interpolation across the 2D elevation matrix.
   * 
   * Local Three.js Coordinate Conventions:
   *   +X: East (West = -width/2, East = +width/2)
   *   +Y: Elevation (meters above DHHN2016 datum)
   *   -Z: North (North = -length/2, South = +length/2)
   * 
   * @param {number} localX - Local East-West metric coordinate
   * @param {number} localZ - Local North-South metric coordinate
   * @returns {number} Real elevation in meters above sea level
   */
  sampleElevation(localX, localZ) {
    // Normalized coordinates [0, 1] across terrain plane
    const u = (localX + this.width / 2.0) / this.width;
    const v = (localZ + this.length / 2.0) / this.length;

    // Clamp inside grid boundary
    const cu = Math.max(0.0, Math.min(1.0, u));
    const cv = Math.max(0.0, Math.min(1.0, v));

    // Continuous cell coordinates
    // Row 0 = North (v = 0), Row rows-1 = South (v = 1)
    // Col 0 = West (u = 0), Col cols-1 = East (u = 1)
    const floatCol = cu * (this.cols - 1);
    const floatRow = cv * (this.rows - 1);

    const c0 = Math.floor(floatCol);
    const c1 = Math.min(c0 + 1, this.cols - 1);
    const r0 = Math.floor(floatRow);
    const r1 = Math.min(r0 + 1, this.rows - 1);

    const dc = floatCol - c0;
    const dr = floatRow - r0;

    const e00 = this.elevations[r0][c0];
    const e10 = this.elevations[r0][c1];
    const e01 = this.elevations[r1][c0];
    const e11 = this.elevations[r1][c1];

    // Bilinear interpolation
    const top = e00 * (1.0 - dc) + e10 * dc;
    const bottom = e01 * (1.0 - dc) + e11 * dc;
    const elev = top * (1.0 - dr) + bottom * dr;

    return elev;
  }

  /**
   * Generate Three.js Mesh with real elevations and hypsometric vertex colors.
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

    for (let i = 0; i < vertexCount; i++) {
      const vx = pos.getX(i);
      const vz = pos.getZ(i);
      const vy = this.sampleElevation(vx, vz);

      pos.setY(i, vy);

      const rgb = this.getHypsometricColor(vy);
      colors[i * 3 + 0] = rgb.r;
      colors[i * 3 + 1] = rgb.g;
      colors[i * 3 + 2] = rgb.b;
    }

    this.geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    this.geometry.computeVertexNormals();

    this.material = new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 0.84,
      metalness: 0.06,
      flatShading: false,
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.name = 'Terrain_Surface_DGM1_RealDEM';
    this.mesh.receiveShadow = true;
    this.mesh.castShadow = true;

    // Engineering wireframe overlay
    this.wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.16,
    });
    this.wireframeMesh = new THREE.Mesh(this.geometry, this.wireframeMaterial);
    this.wireframeMesh.name = 'Terrain_Wireframe_Overlay';
    this.wireframeMesh.visible = false;
    this.mesh.add(this.wireframeMesh);

    return this.mesh;
  }

  /**
   * Hypsometric color ramp calibrated to the real topography of Dernau (120m to 375m).
   * Highlights the Ahr river valley floor, alluvial plain, steep vineyard terraces, and high crests.
   * @param {number} elevation
   * @returns {{ r: number, g: number, b: number }}
   */
  getHypsometricColor(elevation) {
    if (!this.hypsometricEnabled) {
      return { r: 0.36, g: 0.39, b: 0.44 };
    }

    const t = Math.min(Math.max((elevation - this.minElev) / (this.maxElev - this.minElev), 0.0), 1.0);

    if (t < 0.12) {
      // Valley floor / Ahr river corridor (120m - 150m): Riparian dark teal-green
      return this.lerpColor({ r: 0.11, g: 0.22, b: 0.25 }, { r: 0.18, g: 0.32, b: 0.24 }, t / 0.12);
    } else if (t < 0.38) {
      // Lower slopes & vineyard terraces (150m - 215m): Lush valley olive/moss
      return this.lerpColor({ r: 0.18, g: 0.32, b: 0.24 }, { r: 0.38, g: 0.42, b: 0.25 }, (t - 0.12) / 0.26);
    } else if (t < 0.72) {
      // Mid-mountain spurs & rocky terrain (215m - 300m): Warm sandstone & ochre
      return this.lerpColor({ r: 0.38, g: 0.42, b: 0.25 }, { r: 0.52, g: 0.45, b: 0.32 }, (t - 0.38) / 0.34);
    } else {
      // High ridge crests (300m - 375m): Weathered slate & highland stone
      return this.lerpColor({ r: 0.52, g: 0.45, b: 0.32 }, { r: 0.42, g: 0.45, b: 0.50 }, (t - 0.72) / 0.28);
    }
  }

  lerpColor(c1, c2, factor) {
    const f = Math.min(Math.max(factor, 0.0), 1.0);
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
