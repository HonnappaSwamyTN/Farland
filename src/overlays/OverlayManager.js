import * as THREE from 'three';
import { BuildingLayer } from './BuildingLayer.js';
import { RoadLayer } from './RoadLayer.js';
import { FacilityLayer } from './FacilityLayer.js';
import { FloodExtentLayer } from './FloodExtentLayer.js';
import { RouteLayer } from './RouteLayer.js';
import { ClusterLayer } from './ClusterLayer.js';
import { ProposedSiteLayer } from './ProposedSiteLayer.js';
import { RoutingService } from '../geo/RoutingService.js';
import { BuildingClassifier } from '../geo/BuildingClassifier.js';
import { ClusterService } from '../geo/ClusterService.js';
import { ProposedSiteService } from '../geo/ProposedSiteService.js';
import { ScenarioComparisonService } from '../geo/ScenarioComparisonService.js';

/**
 * HighWater 3D — Geographic Overlay Manager
 * Coordinates loading, display toggling, and interactive feature inspection
 * for Dernau buildings, roads, emergency facilities, historical flood extent,
 * conservative routing, affected-area clusters, and proposed safe sites.
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
    this.routeLayer = new RouteLayer(this.scene, this.terrainManager);
    this.clusterLayer = new ClusterLayer(this.scene, this.terrainManager);
    this.proposedSiteLayer = new ProposedSiteLayer(this.scene, this.terrainManager);

    // Phase 3 Services & Analysis engines
    this.buildingClassifier = new BuildingClassifier(this.terrainManager);
    this.clusterService = null;
    this.proposedSiteService = null;

    // Routing Service instance (initialized when road network is built)
    this.routingService = null;
    this.activeRouteRequest = null;
    this.activeRouteResult = null;
    this.activeAlternativeResult = null;
    this.onRouteRecalculated = null;

    // Observers
    this.onClustersUpdated = null;
    this.onProposedSitesUpdated = null;
    this.onScenarioComparisonUpdated = null;
    this.onBuildingRiskUpdated = null;

    // Phase 4: Scenario Comparison Service
    this.scenarioComparisonService = null;
    this.showAccessLostHighlights = true;

    // Layer visibility states
    this.visibility = {
      buildings: true,
      roads: true,
      facilities: true,
      historicalFlood: true,
      route: true,
      clusters: true,
      proposedSites: true,
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
      this.buildingLayer.load('./data/dernau/buildings_exposed.geojson'),
      this.roadLayer.load('./data/dernau/roads_status.geojson'),
      this.facilityLayer.load('./data/dernau/facilities.geojson'),
      this.floodExtentLayer.load('./data/dernau/flood_extent.geojson'),
    ]);

    this.stats.buildings = bldStats;
    this.stats.roads = roadStats;
    this.stats.facilities = facStats;
    this.stats.floodExtent = floodStats;

    // Initialize RoutingService and Phase 3/4 Services with loaded RoadNetwork
    const roadNet = this.roadLayer.getRoadNetwork();
    if (roadNet) {
      this.routingService = new RoutingService(roadNet);
      this.clusterService = new ClusterService(roadNet);
      this.proposedSiteService = new ProposedSiteService(this.terrainManager, roadNet);

      // Phase 4: Scenario Comparison & Risk Ranking Service
      this.scenarioComparisonService = new ScenarioComparisonService(
        this.terrainManager,
        roadNet,
        this.routingService,
        this.buildingClassifier
      );
      this.scenarioComparisonService.initStaticAccess(
        this.buildingLayer.features,
        this.facilityLayer.features
      );
    }

    console.log('✅ Geographic Overlays Loaded:', {
      buildings: `${bldStats.total} total (${bldStats.flooded} flooded, ${bldStats.normal} unaffected)`,
      roads: `${roadStats.total} segments (${roadStats.flooded} cutoff, ${roadStats.open} open)`,
      facilities: `${facStats.total} tactical points`,
      historicalFlood: `${floodStats.polygonCount} reference polygons`,
      routingService: this.routingService ? 'Ready' : 'Unavailable',
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
   * Toggle visibility of affected clusters layer.
   */
  toggleClusters(forceState) {
    this.visibility.clusters = typeof forceState === 'boolean' ? forceState : !this.visibility.clusters;
    this.clusterLayer.setVisible(this.visibility.clusters);
    return this.visibility.clusters;
  }

  /**
   * Toggle visibility of proposed candidate safe sites layer.
   */
  toggleProposedSites(forceState) {
    this.visibility.proposedSites = typeof forceState === 'boolean' ? forceState : !this.visibility.proposedSites;
    this.proposedSiteLayer.setVisible(this.visibility.proposedSites);
    return this.visibility.proposedSites;
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

    // Phase 3: Evaluate building exposure classifications & spatial clusters
    let activeClusters = [];
    if (this.buildingClassifier && this.clusterService && this.buildingLayer.features.length > 0) {
      const evalBlds = this.buildingClassifier.evaluateAll(this.buildingLayer.features, getWaterElevationAt);
      activeClusters = this.clusterService.createClusters(evalBlds.affectedBuildings);
      this.clusterLayer.updateClusters(activeClusters);
      if (typeof this.onClustersUpdated === 'function') {
        this.onClustersUpdated(activeClusters, evalBlds.summary);
      }
    }

    // Phase 3: Evaluate proposed candidate safe sites against current scenario
    if (this.proposedSiteService) {
      const evaluatedSites = this.proposedSiteService.evaluateSites(getWaterElevationAt, activeClusters);
      this.proposedSiteLayer.updateSites(evaluatedSites);
      if (typeof this.onProposedSitesUpdated === 'function') {
        this.onProposedSitesUpdated(evaluatedSites);
      }
    }

    // Phase 4: Scenario Comparison & Building Risk Ranking
    if (this.scenarioComparisonService) {
      const scenarioResult = this.scenarioComparisonService.evaluateScenario(getWaterElevationAt);
      if (this.showAccessLostHighlights) {
        this.buildingLayer.updateAccessLostHighlights(this.scenarioComparisonService.accessLostBuildingIds);
      }

      if (typeof this.onScenarioComparisonUpdated === 'function') {
        this.onScenarioComparisonUpdated(scenarioResult.comparison);
      }
      if (typeof this.onBuildingRiskUpdated === 'function') {
        this.onBuildingRiskUpdated(scenarioResult.rankedBuildings);
      }
    }

    // Dynamic scenario route recalculation (sub-millisecond without rebuilding graph)
    if (this.activeRouteRequest && this.routingService) {
      this.recalculateActiveRoute();
    }

    return { buildings: bldStats, roads: roadStats, facilities: facStats, clusters: activeClusters.length };
  }

  /**
   * Get underlying RoadNetwork analysis engine.
   * @returns {import('../geo/RoadNetwork.js').RoadNetwork|null}
   */
  getRoadNetwork() {
    return this.roadLayer ? this.roadLayer.getRoadNetwork() : null;
  }

  /**
   * Get underlying RoutingService engine.
   * @returns {import('../geo/RoutingService.js').RoutingService|null}
   */
  getRoutingService() {
    return this.routingService;
  }

  /**
   * Get RouteLayer visual overlay.
   * @returns {import('./RouteLayer.js').RouteLayer}
   */
  getRouteLayer() {
    return this.routeLayer;
  }

  /**
   * Find lowest-cost valid route and visualize it on map.
   * @param {Object} origin - { x, z, id, name }
   * @param {Object} destination - { x, z, id, name, type }
   * @param {Object} [options]
   * @returns {{ primaryRoute: Object, alternativeRoute: Object|null, hasAlternative: boolean }}
   */
  routeToDestination(origin, destination, options = {}) {
    if (!this.routingService) {
      throw new Error('OverlayManager: RoutingService is not ready.');
    }

    this.activeRouteRequest = { origin, destination, options };

    const altResult = this.routingService.findAlternativeRoutes(origin, destination, options);
    this.activeRouteResult = altResult.primaryRoute;
    this.activeAlternativeResult = altResult.alternativeRoute;

    this.routeLayer.displayRoute(this.activeRouteResult, this.activeAlternativeResult);

    if (typeof this.onRouteRecalculated === 'function') {
      this.onRouteRecalculated(this.activeRouteResult, this.activeAlternativeResult);
    }

    return altResult;
  }

  /**
   * Find nearest reachable destination and visualize route.
   * @param {Object} origin
   * @param {Array<Object>} candidates
   * @param {Object} [options]
   */
  routeToNearestDestination(origin, candidates, options = {}) {
    if (!this.routingService) {
      throw new Error('OverlayManager: RoutingService is not ready.');
    }

    const nearestResult = this.routingService.findNearestReachableDestination(origin, candidates, options);
    if (nearestResult.bestDestination && nearestResult.route) {
      this.activeRouteRequest = {
        origin,
        destination: nearestResult.bestDestination,
        options,
        candidates
      };
      this.activeRouteResult = nearestResult.route;
      this.activeAlternativeResult = null;
      this.routeLayer.displayRoute(this.activeRouteResult, null);
    } else {
      this.activeRouteRequest = { origin, destination: candidates[0], options, candidates };
      this.activeRouteResult = nearestResult.route || {
        isValid: false,
        isReachable: false,
        explanation: nearestResult.reason,
        status: 'blocked',
        routeType: options.routeType || 'shelter',
        origin,
        destination: candidates[0],
        totalDistanceMeters: Infinity
      };
      this.activeAlternativeResult = null;
      this.routeLayer.clearRoute();
    }

    if (typeof this.onRouteRecalculated === 'function') {
      this.onRouteRecalculated(this.activeRouteResult, this.activeAlternativeResult);
    }

    return nearestResult;
  }

  /**
   * Recalculate currently active route against new flood scenario.
   */
  recalculateActiveRoute() {
    if (!this.activeRouteRequest || !this.routingService) return null;

    const req = this.activeRouteRequest;
    if (req.candidates && req.candidates.length > 0) {
      const nearest = this.routingService.findNearestReachableDestination(req.origin, req.candidates, req.options);
      if (nearest.bestDestination && nearest.route) {
        this.activeRouteResult = nearest.route;
        this.activeAlternativeResult = null;
        this.routeLayer.displayRoute(this.activeRouteResult, null);
      } else {
        this.activeRouteResult = nearest.route || {
          isValid: false,
          isReachable: false,
          explanation: nearest.reason,
          status: 'blocked',
          routeType: req.options?.routeType || 'shelter',
          origin: req.origin,
          destination: req.destination,
          totalDistanceMeters: Infinity
        };
        this.activeAlternativeResult = null;
        this.routeLayer.displayRoute(this.activeRouteResult, null);
      }
    } else {
      const altResult = this.routingService.findAlternativeRoutes(req.origin, req.destination, req.options);
      this.activeRouteResult = altResult.primaryRoute;
      this.activeAlternativeResult = altResult.alternativeRoute;
      this.routeLayer.displayRoute(this.activeRouteResult, this.activeAlternativeResult);
    }

    if (typeof this.onRouteRecalculated === 'function') {
      this.onRouteRecalculated(this.activeRouteResult, this.activeAlternativeResult);
    }

    return this.activeRouteResult;
  }

  /**
   * Clear active route visualization and state.
   */
  clearRoute() {
    this.activeRouteRequest = null;
    this.activeRouteResult = null;
    this.activeAlternativeResult = null;
    this.routeLayer.clearRoute();
    if (typeof this.onRouteRecalculated === 'function') {
      this.onRouteRecalculated(null, null);
    }
  }

  /**
   * Raycast test to find any hovered feature under NDC cursor.
   * Priority: Verified Facilities -> Proposed Sites -> Clusters -> Buildings -> Roads.
   * 
   * @param {THREE.Vector2} ndcMouse
   * @param {THREE.Camera} camera
   * @returns {Object|null}
   */
  inspectFeature(ndcMouse, camera) {
    if (!camera) return null;
    this.raycaster.setFromCamera(ndcMouse, camera);
    const ray = this.raycaster.ray;

    // 1. Check verified emergency facilities first
    if (this.visibility.facilities) {
      const fac = this.facilityLayer.intersectFacility(ray);
      if (fac) {
        if (this.scenarioComparisonService) {
          const shelterEval = this.scenarioComparisonService.getShelterEvaluation(fac.id);
          if (shelterEval) {
            fac.shelterEvaluation = shelterEval;
          }
        }
        return fac;
      }
    }

    // 2. Check proposed candidate sites
    if (this.visibility.proposedSites && this.proposedSiteLayer) {
      const propSite = this.proposedSiteLayer.intersectProposedSite(ray);
      if (propSite) {
        return {
          ...propSite,
          kind: 'proposed-site',
        };
      }
    }

    // 3. Check affected-area clusters
    if (this.visibility.clusters && this.clusterLayer) {
      const cluster = this.clusterLayer.intersectCluster(ray);
      if (cluster) {
        return {
          ...cluster,
          kind: 'cluster',
        };
      }
    }

    // 4. Check buildings
    if (this.visibility.buildings) {
      const bld = this.buildingLayer.intersectBuilding(ray);
      if (bld) {
        // Attach Phase 4 risk & access evaluation if available
        if (this.scenarioComparisonService) {
          const evalData = this.scenarioComparisonService.getBuildingEvaluation(bld.id);
          if (evalData) {
            bld.riskEvaluation = evalData;
          }
        }
        return bld;
      }
    }

    // 5. Check roads
    if (this.visibility.roads) {
      const road = this.roadLayer.intersectRoad(ray);
      if (road) return road;
    }

    // 6. Check historical flood extent
    if (this.visibility.floodExtent && this.floodExtentLayer?.fillMesh) {
      const hits = this.raycaster.intersectObject(this.floodExtentLayer.fillMesh);
      if (hits.length > 0) {
        return {
          id: 'flood-extent-july2021',
          name: 'Historical Flood Footprint (July 2021)',
          kind: 'flood-extent',
          source: 'Copernicus EMS (EMSR517) / SpaceNet 8',
          event: 'Ahr Valley Flash Flood (14–15 July 2021)',
          studyArea: 'Dernau, Rhineland-Palatinate, Germany',
          affectedSummary: '485 buildings inundated · 42 road cut-offs',
          waterElevationEstimate: '~130.0m – 135.0m MSL peak flood crest',
          center: { x: hits[0].point.x, y: hits[0].point.y, z: hits[0].point.z },
          description: 'Verified disaster inundation footprint delineated from satellite radar (SAR) and high-resolution aerial imagery.',
        };
      }
    }

    // 7. Check simulated flood water mesh
    if (this.floodWaterManager?.visible && this.floodWaterManager?.waterMesh) {
      const hits = this.raycaster.intersectObject(this.floodWaterManager.waterMesh);
      if (hits.length > 0) {
        const curLvl = this.floodWaterManager.currentWaterLevel ?? 124.0;
        const profile = this.floodWaterManager.profileMode || 'planar';
        const connected = this.floodWaterManager.hydraulicallyConnected !== false;
        return {
          id: 'simulated-flood-water',
          name: `Simulated Flood Surface (${curLvl.toFixed(2)}m MSL)`,
          kind: 'flood-water',
          waterLevel: curLvl,
          profileMode: profile === 'slope' ? 'Slope-Aware (Ahr Thalweg Monotonic Gradient)' : 'Horizontal Planar',
          hydraulicallyConnected: connected ? 'Hydraulically Connected to Riverbed' : 'Topographic Mask (Unconnected Ponding)',
          center: { x: hits[0].point.x, y: hits[0].point.y, z: hits[0].point.z },
          description: 'Elevation-aware flood water surface derived from verified Rhineland-Palatinate DGM1 bare-earth LiDAR DEM.',
        };
      }
    }

    return null;
  }

  /**
   * Attach FloodWaterManager for raycasting and telemetry integration.
   * @param {Object} fwm
   */
  setFloodWaterManager(fwm) {
    this.floodWaterManager = fwm;
  }

  /**
   * Set baseline scenario water level.
   * @param {number} level
   */
  setBaselineWaterLevel(level) {
    if (this.scenarioComparisonService) {
      this.scenarioComparisonService.setBaselineScenario(level);
    }
  }

  /**
   * Highlight a specific building in 3D.
   * @param {string} buildingId
   */
  highlightBuilding(buildingId) {
    return this.buildingLayer.highlightBuilding(buildingId);
  }

  /**
   * Clear active building highlight.
   */
  clearBuildingHighlight() {
    this.buildingLayer.clearHighlight();
  }

  /**
   * Toggle visibility of access-lost warning rings.
   * @param {boolean} [forceState]
   */
  toggleAccessLostHighlights(forceState) {
    this.showAccessLostHighlights = typeof forceState === 'boolean' ? forceState : !this.showAccessLostHighlights;
    if (this.showAccessLostHighlights && this.scenarioComparisonService) {
      this.buildingLayer.updateAccessLostHighlights(this.scenarioComparisonService.accessLostBuildingIds);
    } else {
      this.buildingLayer.clearAccessLostHighlights();
    }
    return this.showAccessLostHighlights;
  }

  /**
   * Cleanly dispose all layer resources.
   */
  dispose() {
    this.clearRoute();
    this.clearBuildingHighlight();
    this.routeLayer.dispose();
    this.clusterLayer.dispose();
    this.proposedSiteLayer.dispose();
    this.buildingLayer.dispose();
    this.roadLayer.dispose();
    this.facilityLayer.dispose();
    this.floodExtentLayer.dispose();
  }
}
