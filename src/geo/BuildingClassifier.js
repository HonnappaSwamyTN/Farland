/**
 * HighWater 3D — Building Flood Exposure Classification Service (Phase 3)
 * 
 * Evaluates individual structures against the active terrain-aware flood scenario.
 * 
 * Key Principles:
 * 1. Physical vs Visual Decoupling:
 *    Uses physical bare-earth DGM1 LiDAR ground elevation (+0.00m), NOT visual Three.js offsets.
 * 2. Strict Unknown vs Zero-Depth Distinction:
 *    Missing, out-of-bounds, or NoData DEM elevations produce UNKNOWN, never dry/zero depth.
 * 3. Centralized, Documented Exposure Thresholds:
 *    - UNAFFECTED: Depth <= 0.00m (ground elevation above water surface).
 *    - LOW: 0.00m < Depth < 0.30m (perimeter or basement dampness).
 *    - MODERATE: 0.30m <= Depth < 1.00m (ground floor ingress risk).
 *    - HIGH: 1.00m <= Depth < 2.00m (substantial structural immersion).
 *    - CRITICAL: Depth >= 2.00m (severe ground-floor inundation, upper-floor retreat needed).
 *    - UNKNOWN: Incomplete, missing, or unreliable DEM data.
 * 
 * DISCLAIMER & CONCEPTUAL NOTICE:
 * Exposure categories are scenario-dependent terrain immersion indicators,
 * NOT engineering assessments of structural stability, interior water tightness, or life safety.
 */

export const BUILDING_EXPOSURE = Object.freeze({
  UNAFFECTED: 'unaffected',
  LOW: 'low',
  MODERATE: 'moderate',
  HIGH: 'high',
  CRITICAL: 'critical',
  UNKNOWN: 'unknown',
});
export const EXPOSURE_CATEGORY = BUILDING_EXPOSURE;

export const DEFAULT_CLASSIFIER_CONFIG = Object.freeze({
  lowThreshold: 0.30,      // Depth < 0.30m = Low
  moderateThreshold: 1.00, // 0.30m <= Depth < 1.00m = Moderate
  highThreshold: 2.00,     // 1.00m <= Depth < 2.00m = High; >= 2.00m = Critical
  minDepthPositive: 0.001, // Minimum positive depth to register above numerical zero
});
export const EXPOSURE_THRESHOLDS = DEFAULT_CLASSIFIER_CONFIG;

/**
 * Phase 4: Building Risk Tiers & Access Statuses
 */
export const RISK_TIER = Object.freeze({
  CRITICAL: 'critical',
  HIGH: 'high',
  MODERATE: 'moderate',
  LOW: 'low',
  UNKNOWN: 'unknown',
});

export const ACCESS_STATUS = Object.freeze({
  CONNECTED: 'connected',
  ACCESS_DEGRADED: 'access_degraded',
  ROUTE_LOST: 'route_lost',
  DISCONNECTED_IN_SOURCE: 'disconnected_in_source',
  UNKNOWN: 'unknown',
});

export const DEFAULT_RISK_CONFIG = Object.freeze({
  maxFloodExposureScore: 50,
  maxRoadAccessScore: 25,
  maxEmergencyServiceScore: 25,
  criticalScoreThreshold: 75,
  highScoreThreshold: 50,
  moderateScoreThreshold: 25,
});

export class BuildingClassifier {
  /**
   * @param {import('../terrain/TerrainManager.js').TerrainManager} terrainManager
   * @param {Object} [options]
   */
  constructor(terrainManager, options = {}) {
    this.terrainManager = terrainManager;
    this.config = { ...DEFAULT_CLASSIFIER_CONFIG, ...options };
  }

  /**
   * Classify a single building feature under the given water elevation model.
   * 
   * @param {Object} buildingFeature - Building record (with id, center, baseElevationM, coords/points)
   * @param {function(number, number): number|number} getWaterElevationAt - Water elevation query function
   * @returns {Object} Structured classification result
   */
  classifyBuilding(buildingFeature, getWaterElevationAt) {
    if (!buildingFeature || !buildingFeature.center) {
      return {
        id: buildingFeature?.id || 'unknown',
        category: BUILDING_EXPOSURE.UNKNOWN,
        exposureCategory: BUILDING_EXPOSURE.UNKNOWN,
        groundElevation: null,
        waterElevation: null,
        waterDepth: null,
        estimatedDepthM: null,
        affectedRatio: 0,
        uncertaintyMeters: null,
        reason: 'Missing building geometry or coordinates',
        isValid: false,
      };
    }

    const { x, z } = buildingFeature.center;
    let gElev = null;
    if ('baseElevationM' in buildingFeature) {
      gElev = typeof buildingFeature.baseElevationM === 'number' && !Number.isNaN(buildingFeature.baseElevationM)
        ? buildingFeature.baseElevationM
        : null;
    } else if (this.terrainManager && typeof this.terrainManager.getElevationAt === 'function') {
      gElev = this.terrainManager.getElevationAt(x, z);
    }

    // Check for missing or NoData DEM elevations
    if (gElev === null || Number.isNaN(gElev) || gElev <= 0 || gElev === -9999) {
      return {
        id: buildingFeature.id,
        category: BUILDING_EXPOSURE.UNKNOWN,
        exposureCategory: BUILDING_EXPOSURE.UNKNOWN,
        groundElevation: null,
        waterElevation: null,
        waterDepth: null,
        estimatedDepthM: null,
        affectedRatio: 0,
        uncertaintyMeters: null,
        reason: 'Missing or unreliable DGM1 bare-earth elevation at building centroid (NoData)',
        isValid: false,
      };
    }

    const queryWater = typeof getWaterElevationAt === 'function'
      ? getWaterElevationAt
      : (getWaterElevationAt && typeof getWaterElevationAt.getWaterElevationAt === 'function'
        ? (qx, qz) => getWaterElevationAt.getWaterElevationAt(qx, qz)
        : () => (typeof getWaterElevationAt === 'number' ? getWaterElevationAt : 124.0));

    const waterElev = queryWater(x, z);

    if (waterElev === null || Number.isNaN(waterElev)) {
      return {
        id: buildingFeature.id,
        category: BUILDING_EXPOSURE.UNKNOWN,
        exposureCategory: BUILDING_EXPOSURE.UNKNOWN,
        groundElevation: Math.round(gElev * 100) / 100,
        waterElevation: null,
        waterDepth: null,
        estimatedDepthM: null,
        affectedRatio: 0,
        uncertaintyMeters: null,
        reason: 'Water surface elevation could not be evaluated at building coordinates',
        isValid: false,
      };
    }

    // Physical water depth (bare-earth ground elevation vs water surface)
    const depth = Math.max(0, waterElev - gElev);
    const roundedDepth = Math.round(depth * 100) / 100;

    // Estimate affected footprint proportion (if perimeter vertices are available)
    let affectedRatio = 0;
    let uncertaintyMeters = 0.05; // Base 5cm LiDAR DEM measurement precision

    if (roundedDepth > 0) {
      affectedRatio = 1.0; // Uniform center immersion
    }

    let category = BUILDING_EXPOSURE.UNAFFECTED;
    let reason = 'Structure foundation is above local water surface (dry).';

    if (roundedDepth >= this.config.highThreshold) {
      category = BUILDING_EXPOSURE.CRITICAL;
      reason = `Severe inundation (${roundedDepth.toFixed(2)}m >= ${this.config.highThreshold.toFixed(2)}m). Ground floor submerged.`;
    } else if (roundedDepth >= this.config.moderateThreshold) {
      category = BUILDING_EXPOSURE.HIGH;
      reason = `Substantial immersion (${roundedDepth.toFixed(2)}m >= ${this.config.moderateThreshold.toFixed(2)}m). Serious ingress risk.`;
    } else if (roundedDepth >= this.config.lowThreshold) {
      category = BUILDING_EXPOSURE.MODERATE;
      reason = `Moderate flood contact (${roundedDepth.toFixed(2)}m >= ${this.config.lowThreshold.toFixed(2)}m). Ground-level threshold crossed.`;
    } else if (roundedDepth >= this.config.minDepthPositive) {
      category = BUILDING_EXPOSURE.LOW;
      reason = `Shallow exposure (${roundedDepth.toFixed(2)}m < ${this.config.lowThreshold.toFixed(2)}m). Basement/perimeter contact only.`;
    }

    return {
      id: buildingFeature.id,
      category,
      exposureCategory: category,
      groundElevation: Math.round(gElev * 100) / 100,
      waterElevation: Math.round(waterElev * 100) / 100,
      waterDepth: roundedDepth,
      estimatedDepthM: roundedDepth,
      affectedRatio,
      uncertaintyMeters,
      reason,
      isValid: true,
      center: { x, z },
      areaSqM: buildingFeature.areaSqM || 100,
      floodedHistorical: buildingFeature.flooded === true,
    };
  }

  /**
   * Classify an array of buildings.
   * @param {Array<Object>} buildingFeatures
   * @param {function|Object|number} getWaterElevationAt
   * @returns {Array<Object>}
   */
  classifyBuildings(buildingFeatures, getWaterElevationAt) {
    if (!buildingFeatures) return [];
    return buildingFeatures.map(b => this.classifyBuilding(b, getWaterElevationAt));
  }

  /**
   * Evaluate all buildings in a collection.
   * @param {Array<Object>} buildingFeatures
   * @param {function(number, number): number} getWaterElevationAt
   * @returns {{ classifiedBuildings: Map<string, Object>, summary: Object, affectedBuildings: Array<Object> }}
   */
  evaluateAll(buildingFeatures, getWaterElevationAt) {
    const classifiedBuildings = new Map();
    const affectedBuildings = [];

    const summary = {
      total: 0,
      unaffected: 0,
      low: 0,
      moderate: 0,
      high: 0,
      critical: 0,
      unknown: 0,
      totalAffected: 0,
      maxWaterDepth: 0,
    };

    for (const bld of buildingFeatures) {
      const result = this.classifyBuilding(bld, getWaterElevationAt);
      classifiedBuildings.set(bld.id, result);
      summary.total++;

      if (result.category === BUILDING_EXPOSURE.UNAFFECTED) summary.unaffected++;
      else if (result.category === BUILDING_EXPOSURE.LOW) { summary.low++; summary.totalAffected++; affectedBuildings.push(result); }
      else if (result.category === BUILDING_EXPOSURE.MODERATE) { summary.moderate++; summary.totalAffected++; affectedBuildings.push(result); }
      else if (result.category === BUILDING_EXPOSURE.HIGH) { summary.high++; summary.totalAffected++; affectedBuildings.push(result); }
      else if (result.category === BUILDING_EXPOSURE.CRITICAL) { summary.critical++; summary.totalAffected++; affectedBuildings.push(result); }
      else if (result.category === BUILDING_EXPOSURE.UNKNOWN) summary.unknown++;

      if (result.waterDepth && result.waterDepth > summary.maxWaterDepth) {
        summary.maxWaterDepth = result.waterDepth;
      }
    }

    return { classifiedBuildings, summary, affectedBuildings };
  }

  /**
   * Phase 4: Calculate comprehensive multi-factor risk score for a building.
   * Transparently evaluates:
   * 1. Flood Exposure Risk (0 - 50 pts)
   * 2. Road Access Risk (0 - 25 pts)
   * 3. Emergency Service Accessibility (0 - 25 pts)
   * Total = 0 - 100 points
   * 
   * @param {Object} classification - Exposure classification result
   * @param {Object} [accessAssessment] - Road and emergency accessibility evaluation
   * @param {Object} [options]
   * @returns {Object} Structured risk evaluation
   */
  calculateBuildingRisk(classification, accessAssessment = {}, options = {}) {
    const riskCfg = { ...DEFAULT_RISK_CONFIG, ...options };
    const category = classification?.category || BUILDING_EXPOSURE.UNKNOWN;
    const depth = typeof classification?.waterDepth === 'number' ? classification.waterDepth : 0;
    const isUnknownDEM = category === BUILDING_EXPOSURE.UNKNOWN || classification?.groundElevation === null;

    // 1. Flood Exposure Sub-Score (0 - 50 pts)
    let floodScore = 0;
    let floodReason = 'Dry ground contact (no flood depth detected).';

    if (isUnknownDEM) {
      floodScore = 30; // Data uncertainty penalty: unknown DEM is NOT safe / zero risk
      floodReason = 'Missing or unreliable ground elevation data (NoData). Cannot confirm flood clearance.';
    } else if (category === BUILDING_EXPOSURE.CRITICAL) {
      floodScore = 50;
      floodReason = `Critical inundation (${depth.toFixed(2)}m >= 2.00m). Ground floor submerged.`;
    } else if (category === BUILDING_EXPOSURE.HIGH) {
      const interp = Math.min(10, Math.max(0, (depth - 1.0) * 10));
      floodScore = Math.round(38 + interp);
      floodReason = `High structural immersion (${depth.toFixed(2)}m). Serious ingress risk.`;
    } else if (category === BUILDING_EXPOSURE.MODERATE) {
      const interp = Math.min(10, Math.max(0, ((depth - 0.3) / 0.7) * 10));
      floodScore = Math.round(25 + interp);
      floodReason = `Moderate flood contact (${depth.toFixed(2)}m). Ground-level threshold crossed.`;
    } else if (category === BUILDING_EXPOSURE.LOW) {
      const interp = Math.min(10, Math.max(0, ((depth - 0.05) / 0.25) * 10));
      floodScore = Math.round(12 + interp);
      floodReason = `Shallow exposure (${depth.toFixed(2)}m < 0.30m). Basement/perimeter contact only.`;
    }

    // 2. Road Access Sub-Score (0 - 25 pts)
    const accessStatus = accessAssessment?.accessStatus || ACCESS_STATUS.CONNECTED;
    let roadScore = 0;
    let roadReason = 'Direct, dry access to road network.';

    if (accessStatus === ACCESS_STATUS.ROUTE_LOST) {
      roadScore = 25;
      roadReason = 'Evacuation route to shelter lost due to newly flooded impassable road segments.';
    } else if (accessStatus === ACCESS_STATUS.DISCONNECTED_IN_SOURCE) {
      roadScore = 20;
      roadReason = 'Isolated or disconnected in source road network data (no baseline evacuation corridor).';
    } else if (accessStatus === ACCESS_STATUS.ACCESS_DEGRADED) {
      roadScore = 12;
      roadReason = 'Access corridor degraded: connecting roads traverse shallow flood water.';
    } else if (accessStatus === ACCESS_STATUS.UNKNOWN) {
      roadScore = 15;
      roadReason = 'Road network connection or passability status cannot be determined.';
    } else if (accessStatus === ACCESS_STATUS.CONNECTED) {
      roadScore = 0;
      roadReason = 'Connected to passable, dry road corridor.';
    }

    // 3. Emergency Service Accessibility Sub-Score (0 - 25 pts)
    const canReachShelter = accessAssessment?.canReachShelter === true;
    const shelterStatus = accessAssessment?.shelterRouteStatus || (canReachShelter ? 'clear' : 'none');
    let serviceScore = 0;
    let serviceReason = 'Reachable shelter available via dry route.';

    if (!canReachShelter) {
      serviceScore = 25;
      serviceReason = 'No reachable shelter available in road network under current scenario.';
    } else if (shelterStatus === 'exposed') {
      serviceScore = 12;
      serviceReason = 'Nearest shelter reachable, but evacuation route traverses exposed road segments.';
    } else {
      serviceScore = 0;
      serviceReason = `Nearest shelter (${accessAssessment.nearestShelter?.name || 'Shelter'}) reachable via dry route.`;
    }

    // Total Risk Score (0 - 100)
    const totalScore = Math.min(100, Math.max(0, Math.round(floodScore + roadScore + serviceScore)));

    // Priority Tier
    let priorityTier = RISK_TIER.LOW;
    if (isUnknownDEM) {
      priorityTier = RISK_TIER.UNKNOWN;
    } else if (category === BUILDING_EXPOSURE.CRITICAL || totalScore >= riskCfg.criticalScoreThreshold) {
      priorityTier = RISK_TIER.CRITICAL;
    } else if (category === BUILDING_EXPOSURE.HIGH || totalScore >= riskCfg.highScoreThreshold) {
      priorityTier = RISK_TIER.HIGH;
    } else if (category === BUILDING_EXPOSURE.MODERATE || totalScore >= riskCfg.moderateScoreThreshold) {
      priorityTier = RISK_TIER.MODERATE;
    }

    // Explanation & provenance caveats
    const explanation = `${priorityTier.toUpperCase()} Priority (${totalScore}/100) — Flood: ${floodScore}/50 (${category.toUpperCase()}), Road: ${roadScore}/25 (${accessStatus.replace(/_/g, ' ').toUpperCase()}), Services: ${serviceScore}/25 (${canReachShelter ? 'Reachable' : 'Isolated'}).`;

    return {
      buildingId: classification?.id || 'unknown',
      totalScore,
      priorityTier,
      isUnknown: isUnknownDEM,
      subScores: {
        floodExposure: floodScore,
        roadAccess: roadScore,
        emergencyService: serviceScore,
      },
      reasons: {
        flood: floodReason,
        road: roadReason,
        service: serviceReason,
      },
      explanation,
      hospitalStatus: {
        hasVerifiedHospital: false,
        warning: 'No verified municipal hospital in source dataset. Proposed medical-response site fac-001 is unverified. Note: Absence in research dataset does not prove that a real-world hospital or emergency medical service does not exist.',
      },
      disclaimer: 'Conceptual decision-support indicator only. Not a validated structural or life-safety assessment.',
    };
  }

  /**
   * Sort and rank buildings by risk score and flood severity.
   * @param {Array<Object>} buildingsWithRisk
   * @returns {Array<Object>} Ranked buildings sorted by risk descending
   */
  rankBuildings(buildingsWithRisk) {
    if (!buildingsWithRisk || !Array.isArray(buildingsWithRisk)) return [];
    return [...buildingsWithRisk].sort((a, b) => {
      const scoreA = a.risk?.totalScore ?? a.totalScore ?? 0;
      const scoreB = b.risk?.totalScore ?? b.totalScore ?? 0;
      if (scoreB !== scoreA) return scoreB - scoreA;
      const depthA = a.exposure?.waterDepth ?? a.waterDepth ?? 0;
      const depthB = b.exposure?.waterDepth ?? b.waterDepth ?? 0;
      return depthB - depthA;
    });
  }
}
