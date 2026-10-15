import * as THREE from 'three';
import { geoToLocal } from '../geo/Projection.js';

/**
 * HighWater 3D — Interactive Terrain-Aware Flood Water Manager
 * 
 * Generates an elevation-aware inundation surface derived from the verified
 * Rhineland-Palatinate DGM1 bare-earth LiDAR elevation grid.
 * 
 * Milestone 6 Extensions:
 * - Slope-aware longitudinal river profile based on verified valley thalweg gradient.
 * - Dynamic building inundation depth assessment & vertex color propagation.
 * - Road passability (Clear, Waterlogged, Submerged) classification.
 * - Critical facility / shelter accessibility & isolation analysis.
 * 
 * DISCLAIMER & CONCEPTUAL NOTICE:
 * This is a conceptual, terrain-derived elevation threshold visualization.
 * It is NOT a calibrated hydrodynamic or 2D shallow-water numerical forecast.
/**
 * Verified Ahr valley river thalweg corridor path [row, col, bedElevation] traced via Dijkstra.
 * Strictly monotonic downstream from West (139.74m MSL) to Northeast (120.15m MSL).
 */
export const THALWEG_PROFILE = [
  { r: 205, c: 10, ele: 139.74 },
  { r: 174, c: 41, ele: 137.74 },
  { r: 151, c: 67, ele: 134.71 },
  { r: 120, c: 79, ele: 134.58 },
  { r: 132, c: 99, ele: 131.83 },
  { r: 163, c: 102, ele: 130.40 },
  { r: 193, c: 124, ele: 129.84 },
  { r: 205, c: 155, ele: 128.63 },
  { r: 217, c: 186, ele: 127.45 },
  { r: 187, c: 213, ele: 126.20 },
  { r: 156, c: 213, ele: 125.63 },
  { r: 125, c: 223, ele: 124.29 },
  { r: 94, c: 216, ele: 123.33 },
  { r: 63, c: 224, ele: 122.16 },
  { r: 32, c: 228, ele: 120.97 },
  { r: 1, c: 233, ele: 120.15 },
];

export class FloodWaterManager {
  /**
   * @param {THREE.Scene} scene
   * @param {import('../terrain/TerrainManager.js').TerrainManager} terrainManager
   * @param {import('../overlays/OverlayManager.js').OverlayManager} [overlayManager]
   */
  constructor(scene, terrainManager, overlayManager = null) {
    if (!scene || !terrainManager) {
      throw new Error('FloodWaterManager: THREE.Scene and TerrainManager are required.');
    }

    this.scene = scene;
    this.terrainManager = terrainManager;
    this.overlayManager = overlayManager;

    // Water level configuration
    this.minWaterLevel = 120.0; // Downstream riverbed minimum (~120.15m)
    this.maxWaterLevel = 155.0; // Extreme valley crest inundation (~155m)
    this.defaultWaterLevel = 124.0; // Normal baseline river stage (~124m)
    this.waterLevel = this.defaultWaterLevel;

    // Display & operational states
    this.visible = true;
    this.connectedOnly = true; // Use connected river thalweg flood-fill
    this.isPlaying = false;
    this.riseRateMetersPerSec = 1.5; // Inundation rise speed during animation

    // Profile mode: 'planar' (horizontal) or 'slope' (valley thalweg gradient)
    this.profileMode = 'planar'; // Default to planar level per requirements

    // Three.js meshes & materials
    this.group = new THREE.Group();
    this.group.name = 'Flood_Water_Layer';
    this.scene.add(this.group);

    this.waterMesh = null;
    this.waterGeometry = null;
    this.waterMaterial = null;

    // Grid reference caches (populated when DEM is attached)
    this.demPayload = null;
    this.elevations = null;
    this.rows = 0;
    this.cols = 0;
    this.width = 2400;
    this.length = 2400;

    // Precomputed slope-aware bed grid
    this.bedGrid = null;

    // Pre-indexed asset features for sub-millisecond impact assessment
    this.preIndexedAssets = {
      buildings: [],
      roads: [],
      facilities: [],
    };

    // Verified river thalweg corridor path [row, col, bedElevation] traced via Dijkstra
    this.riverThalwegSeeds = [
      [205, 10, 139.74],
      [174, 41, 137.74],
      [151, 67, 134.71],
      [120, 79, 134.58],
      [132, 99, 131.83],
      [163, 102, 130.40],
      [193, 124, 129.84],
      [205, 155, 128.63],
      [217, 186, 127.45],
      [187, 213, 126.20],
      [156, 213, 125.63],
      [125, 223, 124.29],
      [94, 216, 123.33],
      [63, 224, 122.16],
      [32, 228, 120.97],
      [1, 233, 120.15],
    ];

    // Current impact telemetry cache
    this.currentImpact = {
      waterLevel: this.waterLevel,
      profileMode: this.profileMode,
      inundatedCells: 0,
      inundatedAreaSqKm: 0,
      inundatedPercentage: 0,
      affectedBuildings: 0,
      totalBuildings: 759,
      buildingDepthBreakdown: { dry: 759, shallow: 0, moderate: 0, deep: 0 },
      affectedRoads: 0,
      totalRoads: 117,
      roadPassabilityBreakdown: { passable: 117, waterlogged: 0, submerged: 0 },
      affectedFacilities: 0,
      totalFacilities: 6,
      facilityAccessibility: [],
      shelterSummary: { operational: 6, isolated: 0, inundated: 0 },
    };

    // Observers
    this.onImpactUpdate = null;
  }

  /**
   * Attach active real DEM payload and initialize water geometry.
   * @param {Object} demPayload
   */
  attachDEM(demPayload) {
    if (!demPayload || !demPayload.elevations) {
      console.warn('FloodWaterManager: Invalid DEM payload.');
      return;
    }

    this.demPayload = demPayload;
    this.elevations = demPayload.elevations;
    this.rows = this.elevations.length;
    this.cols = this.elevations[0].length;
    this.width = demPayload.metadata.utmExtents?.widthMeters || 2400;
    this.length = demPayload.metadata.utmExtents?.lengthMeters || 2400;

    this.precomputeSlopeBedGrid();
    this.initWaterMesh();
    this.updateInundation(this.waterLevel);
  }

  /**
   * Precompute nearest thalweg riverbed elevation for every grid cell (r, c).
   * Enables sub-millisecond slope-aware water elevation lookups.
   */
  precomputeSlopeBedGrid() {
    if (!this.elevations || this.rows === 0 || this.cols === 0) return;

    const thalwegMetric = this.riverThalwegSeeds.map(([r, c, e]) => ({
      x: (c / (this.cols - 1)) * this.width - this.width / 2.0,
      z: (r / (this.rows - 1)) * this.length - this.length / 2.0,
      e,
    }));

    this.bedGrid = new Float32Array(this.rows * this.cols);

    for (let r = 0; r < this.rows; r++) {
      const z = (r / (this.rows - 1)) * this.length - this.length / 2.0;
      for (let c = 0; c < this.cols; c++) {
        const x = (c / (this.cols - 1)) * this.width - this.width / 2.0;

        let minDistSq = Infinity;
        let interpBed = thalwegMetric[0].e;

        for (let i = 0; i < thalwegMetric.length - 1; i++) {
          const p0 = thalwegMetric[i];
          const p1 = thalwegMetric[i + 1];
          const dx = p1.x - p0.x;
          const dz = p1.z - p0.z;
          const segLenSq = dx * dx + dz * dz;

          let t = 0;
          if (segLenSq > 0) {
            t = Math.max(0, Math.min(1, ((x - p0.x) * dx + (z - p0.z) * dz) / segLenSq));
          }
          const projX = p0.x + t * dx;
          const projZ = p0.z + t * dz;
          const distSq = (x - projX) * (x - projX) + (z - projZ) * (z - projZ);

          if (distSq < minDistSq) {
            minDistSq = distSq;
            interpBed = p0.e + t * (p1.e - p0.e);
          }
        }
        this.bedGrid[r * this.cols + c] = interpBed;
      }
    }

    console.log('[FloodWaterManager] Slope-aware thalweg bed grid precomputed for 65,536 cells.');
  }

  /**
   * Pre-index GeoJSON assets for instant spatial intersection.
   * @param {Object} datasets - { buildings, roads, facilities }
   */
  indexAssets(datasets) {
    if (datasets.buildings && datasets.buildings.features) {
      this.preIndexedAssets.buildings = datasets.buildings.features.map((f, i) => {
        let cx = 0, cz = 0, count = 0;
        const geom = f.geometry;
        const coords = geom.type === 'Polygon' ? geom.coordinates[0] : geom.coordinates[0][0];
        if (coords) {
          for (const pt of coords) {
            const loc = geoToLocal(pt[0], pt[1]);
            cx += loc.x;
            cz += loc.z;
            count++;
          }
          cx /= count;
          cz /= count;
        }
        const grid = this.localToGrid(cx, cz);
        return {
          id: f.properties?.id || `bld-${i}`,
          grid,
          cx,
          cz,
        };
      });
      this.currentImpact.totalBuildings = this.preIndexedAssets.buildings.length;
    }

    if (datasets.roads && datasets.roads.features) {
      this.preIndexedAssets.roads = datasets.roads.features.map((f, i) => {
        const pts = [];
        const geom = f.geometry;
        const lines = geom.type === 'LineString' ? [geom.coordinates] : geom.coordinates;
        if (lines) {
          for (const line of lines) {
            for (const pt of line) {
              const loc = geoToLocal(pt[0], pt[1]);
              pts.push({
                grid: this.localToGrid(loc.x, loc.z),
                x: loc.x,
                z: loc.z,
              });
            }
          }
        }
        return {
          id: f.properties?.id || `road-${i}`,
          pts,
        };
      });
      this.currentImpact.totalRoads = this.preIndexedAssets.roads.length;
    }

    if (datasets.facilities && datasets.facilities.features) {
      this.preIndexedAssets.facilities = datasets.facilities.features.map((f, i) => {
        const loc = geoToLocal(f.geometry.coordinates[0], f.geometry.coordinates[1]);
        const grid = this.localToGrid(loc.x, loc.z);
        const baseElevation = this.terrainManager.getElevationAt(loc.x, loc.z) || 135.0;
        return {
          id: f.properties?.facility_id || f.properties?.id || `fac-${i}`,
          name: f.properties?.name || 'Emergency Facility',
          type: f.properties?.type || 'facility',
          grid,
          loc,
          baseElevation,
        };
      });
      this.currentImpact.totalFacilities = this.preIndexedAssets.facilities.length;
    }

    console.log(`[FloodWaterManager] Indexed assets for dynamic impact: ${this.currentImpact.totalBuildings} blds, ${this.currentImpact.totalRoads} roads, ${this.currentImpact.totalFacilities} facs.`);
    this.assessImpact(this.waterLevel);
  }

  /**
   * Convert local Three.js metric coordinate to nearest DEM grid cell (r, c).
   */
  localToGrid(localX, localZ) {
    const u = (localX + this.width / 2.0) / this.width;
    const v = (localZ + this.length / 2.0) / this.length;
    const c = Math.max(0, Math.min(this.cols - 1, Math.round(u * (this.cols - 1))));
    const r = Math.max(0, Math.min(this.rows - 1, Math.round(v * (this.rows - 1))));
    return { r, c };
  }

  /**
   * Current modeled water elevation in meters MSL.
   * @returns {number}
   */
  get currentWaterLevel() {
    return this.waterLevel;
  }

  /**
   * Query the modeled water surface elevation at continuous metric coordinates (localX, localZ).
   * @param {number} localX
   * @param {number} localZ
   * @returns {number} Water surface elevation in meters MSL
   */
  getWaterElevationAt(localX, localZ) {
    if (this.profileMode === 'planar' || !this.bedGrid) {
      return this.waterLevel;
    }

    const { r, c } = this.localToGrid(localX, localZ);
    const stageDelta = this.waterLevel - this.defaultWaterLevel;
    const baseBed = this.bedGrid[r * this.cols + c];
    // Baseline channel depth is ~1.0m above bare riverbed
    return baseBed + 1.0 + stageDelta;
  }

  getWaterSurfaceAtWorld(localX, localZ) {
    return this.getWaterElevationAt(localX, localZ);
  }

  /**
   * Initialize dynamic Three.js water mesh.
   */
  initWaterMesh() {
    this.dispose();

    // Create plane geometry matching the 256x256 grid resolution
    this.waterGeometry = new THREE.PlaneGeometry(
      this.width,
      this.length,
      this.cols - 1,
      this.rows - 1
    );

    // Rotate so Y is vertical elevation
    this.waterGeometry.rotateX(-Math.PI / 2);

    // Set initial vertex heights flush with terrain
    const pos = this.waterGeometry.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const vx = pos.getX(i);
      const vz = pos.getZ(i);
      const terrainY = this.terrainManager.getElevationAt(vx, vz) || this.defaultWaterLevel;
      pos.setY(i, terrainY);
    }
    pos.needsUpdate = true;

    // Start with empty index (no water visible until elevation threshold evaluates)
    this.waterGeometry.setIndex([]);

    // Translucent aqua/cyan water material with subtle specular gloss
    this.waterMaterial = new THREE.MeshStandardMaterial({
      color: 0x06b6d4, // Vibrant cyan/azure
      roughness: 0.14,
      metalness: 0.12,
      transparent: true,
      opacity: 0.72,
      depthWrite: false, // Prevents occlusion issues with terrain behind water
      polygonOffset: true,
      polygonOffsetFactor: -1.0,
      polygonOffsetUnits: -1.0,
      side: THREE.DoubleSide,
    });

    this.waterMesh = new THREE.Mesh(this.waterGeometry, this.waterMaterial);
    this.waterMesh.name = 'Flood_Water_Surface';
    this.waterMesh.receiveShadow = false;
    this.waterMesh.castShadow = false;
    this.waterMesh.visible = this.visible;

    this.group.add(this.waterMesh);
  }

  /**
   * Set user-controlled water surface elevation in meters.
   * @param {number} levelMeters
   */
  setWaterLevel(levelMeters) {
    const clamped = Math.max(this.minWaterLevel, Math.min(this.maxWaterLevel, Number(levelMeters)));
    if (Math.abs(this.waterLevel - clamped) < 0.001) return;
    this.waterLevel = clamped;
    this.updateInundation(this.waterLevel);
  }

  /**
   * Toggle water layer visibility.
   * @param {boolean} [forceState]
   */
  setVisible(forceState) {
    this.visible = typeof forceState === 'boolean' ? forceState : !this.visible;
    if (this.waterMesh) {
      this.waterMesh.visible = this.visible;
    }
    return this.visible;
  }

  /**
   * Toggle connected flood-fill vs raw elevation thresholding.
   * @param {boolean} [forceState]
   */
  setConnectivity(forceState) {
    this.connectedOnly = typeof forceState === 'boolean' ? forceState : !this.connectedOnly;
    this.updateInundation(this.waterLevel);
    return this.connectedOnly;
  }

  /**
   * Switch between Planar (horizontal) and Slope-Aware (valley gradient) river water profile.
   * @param {'planar'|'slope'} mode
   */
  setProfileMode(mode) {
    this.profileMode = mode === 'slope' ? 'slope' : 'planar';
    this.updateInundation(this.waterLevel);
    return this.profileMode;
  }

  /**
   * Reset water to default baseline river stage.
   */
  reset() {
    this.isPlaying = false;
    this.waterLevel = this.defaultWaterLevel;
    this.updateInundation(this.waterLevel);
  }

  /**
   * Toggle continuous rising flood animation.
   */
  togglePlayPause() {
    this.isPlaying = !this.isPlaying;
    return this.isPlaying;
  }

  /**
   * Compute inundation mask (Uint8Array: 1 = flooded, 0 = dry).
   * @param {number} targetElev
   * @returns {Uint8Array}
   */
  computeInundationMask(targetElev) {
    const mask = new Uint8Array(this.rows * this.cols);
    if (!this.elevations) return mask;

    const isSlope = this.profileMode === 'slope' && this.bedGrid;
    const stageDelta = targetElev - this.defaultWaterLevel;

    // Helper to evaluate if cell (r, c) is submerged by modeled profile
    const isSubmerged = (r, c) => {
      const cellElev = this.elevations[r][c];
      if (isSlope) {
        const localWaterElev = this.bedGrid[r * this.cols + c] + 1.0 + stageDelta;
        return cellElev <= localWaterElev;
      }
      return cellElev <= targetElev;
    };

    if (!this.connectedOnly) {
      // Direct bathymetric thresholding
      for (let r = 0; r < this.rows; r++) {
        for (let c = 0; c < this.cols; c++) {
          if (isSubmerged(r, c)) {
            mask[r * this.cols + c] = 1;
          }
        }
      }
      return mask;
    }

    // Grid-based Connected-Component Flood-Fill (BFS) seeded from the verified thalweg corridor
    const queue = [];
    const visited = new Uint8Array(this.rows * this.cols);

    for (const [sr, sc] of this.riverThalwegSeeds) {
      if (isSubmerged(sr, sc)) {
        const idx = sr * this.cols + sc;
        if (!visited[idx]) {
          visited[idx] = 1;
          mask[idx] = 1;
          queue.push(idx);
        }
      }
    }

    let head = 0;
    while (head < queue.length) {
      const curr = queue[head++];
      const r = Math.floor(curr / this.cols);
      const c = curr % this.cols;

      const neighbors = [
        [r - 1, c], [r + 1, c], [r, c - 1], [r, c + 1]
      ];

      for (const [nr, nc] of neighbors) {
        if (nr >= 0 && nr < this.rows && nc >= 0 && nc < this.cols) {
          const nidx = nr * this.cols + nc;
          if (!visited[nidx]) {
            visited[nidx] = 1;
            if (isSubmerged(nr, nc)) {
              mask[nidx] = 1;
              queue.push(nidx);
            }
          }
        }
      }
    }

    return mask;
  }

  /**
   * Recompute water surface geometry for current elevation.
   * @param {number} targetElev
   */
  updateInundation(targetElev) {
    if (!this.waterGeometry || !this.elevations) return;

    const mask = this.computeInundationMask(targetElev);
    const pos = this.waterGeometry.attributes.position;
    const zOffset = 0.20; // 20cm elevation offset to eliminate z-fighting with bare terrain
    const isSlope = this.profileMode === 'slope' && this.bedGrid;
    const stageDelta = targetElev - this.defaultWaterLevel;

    // 1. Update vertex heights:
    // Inundated vertices sit at local water elevation (or terrain + zOffset if close)
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        const i = r * this.cols + c;
        if (mask[i]) {
          const terrainY = this.elevations[r][c];
          const localWaterElev = isSlope
            ? (this.bedGrid[i] + 1.0 + stageDelta)
            : targetElev;
          const waterY = Math.max(terrainY + zOffset, localWaterElev);
          pos.setY(i, waterY);
        } else {
          // Keep dry vertices tucked slightly under terrain
          pos.setY(i, this.elevations[r][c] - 0.5);
        }
      }
    }
    pos.needsUpdate = true;

    // 2. Build index buffer containing only inundated quads:
    // A quad is rendered if at least 2 of its corners are inundated
    const indices = [];
    let inundatedQuadCount = 0;

    for (let r = 0; r < this.rows - 1; r++) {
      for (let c = 0; c < this.cols - 1; c++) {
        const i0 = r * this.cols + c;
        const i1 = r * this.cols + (c + 1);
        const i2 = (r + 1) * this.cols + c;
        const i3 = (r + 1) * this.cols + (c + 1);

        const floodedCorners = mask[i0] + mask[i1] + mask[i2] + mask[i3];
        if (floodedCorners >= 2) {
          indices.push(i0, i2, i1);
          indices.push(i1, i2, i3);
          inundatedQuadCount++;
        }
      }
    }

    this.waterGeometry.setIndex(indices);
    if (this.waterGeometry.index) {
      this.waterGeometry.index.needsUpdate = true;
    }
    this.waterGeometry.computeVertexNormals();

    // 3. Compute dynamic impact indicators & update overlay layers
    this.assessImpact(targetElev, mask);
  }

  /**
   * Assess dynamic building depth, road passability, and facility accessibility against current inundation.
   * @param {number} targetElev
   * @param {Uint8Array} [mask]
   */
  assessImpact(targetElev, mask = null) {
    if (!mask) {
      mask = this.computeInundationMask(targetElev);
    }

    // Count inundated grid cells
    let inundatedCells = 0;
    for (let i = 0; i < mask.length; i++) {
      if (mask[i]) inundatedCells++;
    }

    const totalCells = this.rows * this.cols;
    const cellAreaSqM = (this.width / (this.cols - 1)) * (this.length / (this.rows - 1));
    const inundatedAreaSqKm = (inundatedCells * cellAreaSqM) / 1000000;
    const inundatedPct = totalCells > 0 ? (inundatedCells / totalCells) * 100 : 0;

    // Water elevation accessor bound to this instance
    const waterElevLookup = (x, z) => this.getWaterElevationAt(x, z);

    // 1. Buildings (unique feature count & depth classification)
    let affectedBlds = 0;
    for (const b of this.preIndexedAssets.buildings) {
      const idx = b.grid.r * this.cols + b.grid.c;
      if (mask[idx]) {
        affectedBlds++;
      }
    }

    // 2. Roads (unique segment count & passability)
    let affectedRoads = 0;
    const roadSubmergedMap = new Map();

    for (const r of this.preIndexedAssets.roads) {
      let flooded = false;
      for (const p of r.pts) {
        if (mask[p.grid.r * this.cols + p.grid.c]) {
          flooded = true;
          break;
        }
      }
      if (flooded) affectedRoads++;
      roadSubmergedMap.set(r.id, flooded);
    }

    // 3. Critical Facilities / Shelters (Site inundation & local 250m road corridor accessibility)
    let affectedFacs = 0;
    let operationalShelters = 0;
    let isolatedShelters = 0;
    let inundatedShelters = 0;
    const accessibilityMap = {};

    for (const f of this.preIndexedAssets.facilities) {
      const idx = f.grid.r * this.cols + f.grid.c;
      const isSiteSubmerged = mask[idx] === 1;

      const waterElevAtSite = this.getWaterElevationAt(f.loc.x, f.loc.z);
      const siteWaterDepth = Math.max(0, waterElevAtSite - f.baseElevation);

      // Check nearby road segments within 250 meters
      let nearbyRoadCount = 0;
      let nearbySubmergedCount = 0;

      for (const r of this.preIndexedAssets.roads) {
        let isNearby = false;
        for (const pt of r.pts) {
          const dx = pt.x - f.loc.x;
          const dz = pt.z - f.loc.z;
          if (dx * dx + dz * dz < 250 * 250) {
            isNearby = true;
            break;
          }
        }
        if (isNearby) {
          nearbyRoadCount++;
          if (roadSubmergedMap.get(r.id)) {
            nearbySubmergedCount++;
          }
        }
      }

      let status = 'operational';
      let nearbyRoadStatus = 'passable';

      if (isSiteSubmerged || siteWaterDepth > 0) {
        status = 'inundated';
        inundatedShelters++;
        affectedFacs++;
      } else if (nearbyRoadCount > 0 && nearbySubmergedCount === nearbyRoadCount) {
        status = 'isolated';
        nearbyRoadStatus = 'all_submerged';
        isolatedShelters++;
        affectedFacs++;
      } else {
        status = 'operational';
        nearbyRoadStatus = nearbySubmergedCount > 0 ? 'partially_clear' : 'clear';
        operationalShelters++;
      }

      accessibilityMap[f.id] = {
        id: f.id,
        name: f.name,
        type: f.type,
        status,
        siteWaterDepth: Math.round(siteWaterDepth * 100) / 100,
        nearbyRoadStatus,
        nearbyRoadCount,
        nearbySubmergedCount,
      };
    }

    // 4. Propagate updates to overlays (Building depth vertex colors, road passability, beacon pins)
    let bldBreakdown = { dry: 759 - affectedBlds, shallow: 0, moderate: 0, deep: 0 };
    let roadBreakdown = { passable: 117 - affectedRoads, waterlogged: 0, submerged: affectedRoads };

    if (this.overlayManager && typeof this.overlayManager.updateImpacts === 'function') {
      const stats = this.overlayManager.updateImpacts(waterElevLookup, accessibilityMap);
      if (stats.buildings) bldBreakdown = stats.buildings;
      if (stats.roads) roadBreakdown = stats.roads;
    }

    this.currentImpact = {
      waterLevel: Math.round(targetElev * 100) / 100,
      profileMode: this.profileMode,
      inundatedCells,
      inundatedAreaSqKm: Math.round(inundatedAreaSqKm * 1000) / 1000,
      inundatedPercentage: Math.round(inundatedPct * 10) / 10,
      affectedBuildings: affectedBlds,
      totalBuildings: this.preIndexedAssets.buildings.length || 759,
      buildingDepthBreakdown: bldBreakdown,
      affectedRoads,
      totalRoads: this.preIndexedAssets.roads.length || 117,
      roadPassabilityBreakdown: roadBreakdown,
      affectedFacilities: affectedFacs,
      totalFacilities: this.preIndexedAssets.facilities.length || 6,
      facilityAccessibility: Object.values(accessibilityMap),
      shelterSummary: {
        operational: operationalShelters,
        isolated: isolatedShelters,
        inundated: inundatedShelters,
      },
      shelterAccessibilityBreakdown: {
        operational: operationalShelters,
        isolated: isolatedShelters,
        inundated: inundatedShelters,
      },
    };

    this.shelterAccessibility = accessibilityMap;

    if (typeof this.onImpactUpdate === 'function') {
      this.onImpactUpdate(this.currentImpact);
    }

    return this.currentImpact;
  }

  /**
   * Per-frame animation update for rising water simulation.
   * @param {number} deltaSeconds
   */
  update(deltaSeconds) {
    if (!this.isPlaying) return;

    let next = this.waterLevel + this.riseRateMetersPerSec * deltaSeconds;
    if (next >= this.maxWaterLevel) {
      next = this.maxWaterLevel;
      this.isPlaying = false;
    }
    this.setWaterLevel(next);
  }

  /**
   * Clean up resources.
   */
  dispose() {
    if (this.waterGeometry) {
      this.waterGeometry.dispose();
      this.waterGeometry = null;
    }
    if (this.waterMaterial) {
      this.waterMaterial.dispose();
      this.waterMaterial = null;
    }
    if (this.waterMesh) {
      if (this.waterMesh.parent) {
        this.waterMesh.parent.remove(this.waterMesh);
      }
      this.waterMesh = null;
    }
  }
}
