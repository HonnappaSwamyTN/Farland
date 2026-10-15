import * as THREE from 'three';
import { BuildingLayer } from './BuildingLayer.js';
import { RoadLayer } from './RoadLayer.js';
import { FacilityLayer } from './FacilityLayer.js';
import { FloodExtentLayer } from './FloodExtentLayer.js';

/**
 * HighWater 3D — Geographic Overlay Manager
 * Coordinates loading, display toggling, and interactive feature inspection
 * for Dernau buildings, roads, emergency facilities, and historical flood extent.
 */
export class OverlayManager {
  /**
   * @param {THREE.Scene} scene
   * @param {import('../terrain/TerrainManager.js').TerrainManager} terrainManager
   */
  constructor(scene, terrainManager) {
    this.scene = scene;
    this.terrainManager = terrainManager;

    // Sub-layers
    this.buildingLayer = new BuildingLayer(this.scene, this.terrainManager);
    this.roadLayer = new RoadLayer(this.scene, this.terrainManager);
    this.facilityLayer = new FacilityLayer(this.scene, this.terrainManager);
    this.floodExtentLayer = new FloodExtentLayer(this.scene, this.terrainManager);

    // Layer visibility states
    this.visibility = {
      buildings: true,
      roads: true,
      facilities: true,
      historicalFlood: true,
    };

    this.stats = {
      buildings: null,
      roads: null,
      facilities: null,
      floodExtent: null,
    };

    // Raycaster for feature inspection
    this.raycaster = new THREE.Raycaster();
  }

  /**
   * Load all 4 Dernau GeoJSON datasets in parallel.
   */
  async loadAll() {
    console.log('📦 Loading Dernau geographic overlays...');

    const [bldStats, roadStats, facStats, floodStats] = await Promise.all([
      this.buildingLayer.load('/data/dernau/buildings_exposed.geojson'),
      this.roadLayer.load('/data/dernau/roads_status.geojson'),
      this.facilityLayer.load('/data/dernau/facilities.geojson'),
      this.floodExtentLayer.load('/data/dernau/flood_extent.geojson'),
    ]);

    this.stats.buildings = bldStats;
    this.stats.roads = roadStats;
    this.stats.facilities = facStats;
    this.stats.floodExtent = floodStats;

    console.log('✅ Geographic Overlays Loaded:', {
      buildings: `${bldStats.total} total (${bldStats.flooded} flooded, ${bldStats.normal} unaffected)`,
      roads: `${roadStats.total} segments (${roadStats.flooded} cutoff, ${roadStats.open} open)`,
      facilities: `${facStats.total} tactical points`,
      historicalFlood: `${floodStats.polygonCount} reference polygons`,
    });

    return this.stats;
  }

  /**
   * Get raw GeoJSON datasets for spatial intersection in water simulation.
   */
  getRawDatasets() {
    return {
      buildings: this.buildingLayer.rawGeojson,
      roads: this.roadLayer.rawGeojson,
      facilities: this.facilityLayer.rawGeojson,
    };
  }

  /**
   * Toggle visibility of individual layers.
   */
  toggleBuildings(forceState) {
    this.visibility.buildings = typeof forceState === 'boolean' ? forceState : !this.visibility.buildings;
    this.buildingLayer.setVisible(this.visibility.buildings);
    return this.visibility.buildings;
  }

  toggleRoads(forceState) {
    this.visibility.roads = typeof forceState === 'boolean' ? forceState : !this.visibility.roads;
    this.roadLayer.setVisible(this.visibility.roads);
    return this.visibility.roads;
  }

  toggleFacilities(forceState) {
    this.visibility.facilities = typeof forceState === 'boolean' ? forceState : !this.visibility.facilities;
    this.facilityLayer.setVisible(this.visibility.facilities);
    return this.visibility.facilities;
  }

  toggleHistoricalFlood(forceState) {
    this.visibility.historicalFlood =
      typeof forceState === 'boolean' ? forceState : !this.visibility.historicalFlood;
    this.floodExtentLayer.setVisible(this.visibility.historicalFlood);
    return this.visibility.historicalFlood;
  }

  /**
   * Set building depth color mode ('dynamic-depth' | 'historical').
   */
  setBuildingDepthMode(mode) {
    return this.buildingLayer.setDepthColorMode(mode);
  }

  toggleBuildingDepthMode() {
    const newMode = this.buildingLayer.colorMode === 'dynamic-depth' ? 'historical' : 'dynamic-depth';
    this.setBuildingDepthMode(newMode);
    return newMode === 'dynamic-depth';
  }

  /**
   * Set road passability mode ('dynamic-passability' | 'historical').
   */
  setRoadPassabilityMode(mode) {
    return this.roadLayer.setPassabilityMode(mode);
  }

  toggleRoadPassabilityMode() {
    const newMode = this.roadLayer.passabilityMode === 'dynamic-passability' ? 'historical' : 'dynamic-passability';
    this.setRoadPassabilityMode(newMode);
    return newMode === 'dynamic-passability';
  }

  /**
   * Set facility accessibility mode ('dynamic' | 'historical').
   */
  setFacilityAccessibilityMode(mode) {
    return this.facilityLayer.setAccessibilityMode(mode);
  }

  /**
   * Propagate dynamic impact calculations and depth coloring to all overlay layers.
   * @param {function(number, number): number} getWaterElevationAt
   * @param {Object<string, Object>} accessibilityMap
   */
  updateImpacts(getWaterElevationAt, accessibilityMap) {
    const bldStats = this.buildingLayer.updateBuildingDepths(getWaterElevationAt);
    const roadStats = this.roadLayer.updatePassability(getWaterElevationAt);
    const facStats = this.facilityLayer.updateAccessibility(accessibilityMap);
    return { buildings: bldStats, roads: roadStats, facilities: facStats };
  }

  /**
   * Raycast test to find any hovered feature under NDC cursor.
   * Priority: Facilities (pins) -> Buildings (prisms) -> Roads (lines).
   * 
   * @param {THREE.Vector2} ndcMouse
   * @param {THREE.Camera} camera
   * @returns {Object|null}
   */
  inspectFeature(ndcMouse, camera) {
    if (!camera) return null;
    this.raycaster.setFromCamera(ndcMouse, camera);
    const ray = this.raycaster.ray;

    // 1. Check emergency facilities first
    if (this.visibility.facilities) {
      const fac = this.facilityLayer.intersectFacility(ray);
      if (fac) return fac;
    }

    // 2. Check buildings
    if (this.visibility.buildings) {
      const bld = this.buildingLayer.intersectBuilding(ray);
      if (bld) return bld;
    }

    // 3. Check roads
    if (this.visibility.roads) {
      const road = this.roadLayer.intersectRoad(ray);
      if (road) return road;
    }

    return null;
  }

  /**
   * Cleanly dispose all layer resources.
   */
  dispose() {
    this.buildingLayer.dispose();
    this.roadLayer.dispose();
    this.facilityLayer.dispose();
    this.floodExtentLayer.dispose();
  }
}
