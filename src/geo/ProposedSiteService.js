import { ROAD_STATUS } from './RoadNetwork.js';

/**
 * HighWater 3D — Proposed Safe Sites Analysis Service (Phase 3)
 * 
 * Evaluates proposed candidate sites for emergency shelters and medical assembly posts
 * based on verified DGM1 bare-earth LiDAR topography and road network connectivity.
 * 
 * Key Principles:
 * 1. Strict Candidate Distinction:
 *    Candidate sites are explicitly flagged as PROPOSED and UNVERIFIED. They are NEVER
 *    represented as operating shelters, hospitals, or municipal infrastructure, and are
 *    kept in an isolated proposed-candidate layer.
 * 2. Elevation & Inundation Vetting:
 *    Sites must be verified dry. If the simulated flood elevation submerges a candidate,
 *    it is immediately disqualified (score = 0) with a recorded explanation.
 * 3. Defensible Road Connectivity:
 *    Checks metric distance and passability to the nearest road network node.
 * 4. Transparent Scoring Breakdown:
 *    Scores each site (0 - 100 points) across 4 objective criteria:
 *    - Elevation clearance above water (35 pts)
 *    - Road access & component status (35 pts)
 *    - Slope / terrain flatness (15 pts)
 *    - Accessibility to affected clusters (15 pts)
 */

export const PROPOSED_SITE_CANDIDATES = Object.freeze([
  {
    id: 'prop-01',
    name: 'North Terrace Emergency Staging Area',
    type: 'shelter',
    x: -220.0,
    z: -420.0,
    intendedRole: 'High-capacity emergency shelter & supply distribution post',
    description: 'Elevated northern terrace bench overlooking Dernau core with direct access to northern road corridor.',
  },
  {
    id: 'prop-02',
    name: 'Southwest Vineyard Assembly Post',
    type: 'shelter',
    x: -580.0,
    z: 280.0,
    intendedRole: 'Secondary residential evacuation shelter',
    description: 'Elevated southwest slope terrace above flood zone with contiguous road access.',
  },
  {
    id: 'prop-03',
    name: 'North-East Plateau Medical Field Station',
    type: 'hospital',
    x: 350.0,
    z: -350.0,
    intendedRole: 'Proposed medical-response & triage staging site',
    description: 'Elevated plateau margin with road connectivity to regional eastern highway.',
  },
  {
    id: 'prop-04',
    name: 'Lower Valley Terrace Margin',
    type: 'shelter',
    x: 50.0,
    z: 120.0,
    intendedRole: 'Contingency valley assembly point (Low margin)',
    description: 'Lower terrace near river floodplain margin (designed to test scenario submergence & disqualification).',
  },
]);

export class ProposedSiteService {
  /**
   * @param {import('../terrain/TerrainManager.js').TerrainManager} terrainManager
   * @param {import('./RoadNetwork.js').RoadNetwork} roadNetwork
   * @param {Array<Object>} [candidateTemplates]
   */
  constructor(terrainManager, roadNetwork, candidateTemplates = PROPOSED_SITE_CANDIDATES) {
    this.terrainManager = terrainManager;
    this.roadNetwork = roadNetwork;
    this.candidates = candidateTemplates.map(c => ({ ...c }));
    this.evaluatedSites = [];
  }

  /**
   * Evaluate all candidate sites against active flood scenario.
   * 
   * @param {function(number, number): number|number} getWaterElevationAt - Water elevation query function
   * @param {Array<Object>} [activeClusters] - Optional list of affected clusters for proximity scoring
   * @returns {Array<Object>} Evaluated candidate sites sorted by score descending
   */
  evaluateSites(getWaterElevationAt, activeClusters = []) {
    const queryWater = typeof getWaterElevationAt === 'function'
      ? getWaterElevationAt
      : () => (typeof getWaterElevationAt === 'number' ? getWaterElevationAt : 124.0);

    this.evaluatedSites = this.candidates.map((site) => {
      // 1. Terrain elevation check
      const gElev = this.terrainManager?.getElevationAt(site.x, site.z) ?? null;
      if (gElev === null || Number.isNaN(gElev) || gElev <= 0 || gElev === -9999) {
        return {
          ...site,
          isProposed: true,
          isVerifiedFacility: false,
          isViable: false,
          isFlooded: false,
          score: 0,
          rank: 'DISQUALIFIED',
          groundElevation: null,
          waterElevation: null,
          clearanceMeters: null,
          scoreBreakdown: { elevation: 0, road: 0, slope: 0, cluster: 0 },
          reason: 'Missing or unreliable DGM1 bare-earth DEM elevation at candidate coordinates (NoData).',
          statusLabel: site.type === 'hospital' ? 'Proposed medical-response site — unverified' : 'Proposed shelter — unverified',
          disclaimer: 'Proposed candidate site only. NOT an officially designated or operational emergency facility.',
        };
      }

      // 2. Scenario water elevation & clearance
      const waterElev = queryWater(site.x, site.z);
      const clearance = gElev - waterElev;

      if (clearance <= 0) {
        const depth = Math.abs(clearance);
        return {
          ...site,
          isProposed: true,
          isVerifiedFacility: false,
          isViable: false,
          isFlooded: true,
          score: 0,
          rank: 'DISQUALIFIED (FLOODED)',
          groundElevation: Math.round(gElev * 10) / 10,
          waterElevation: Math.round(waterElev * 10) / 10,
          clearanceMeters: Math.round(clearance * 100) / 100,
          waterDepth: Math.round(depth * 100) / 100,
          scoreBreakdown: { elevation: 0, road: 0, slope: 0, cluster: 0 },
          reason: `Site is submerged by ${depth.toFixed(2)}m of flood water at water level ${waterElev.toFixed(1)}m MSL. Disqualified.`,
          statusLabel: site.type === 'hospital' ? 'Proposed medical-response site — unverified' : 'Proposed shelter — unverified',
          disclaimer: 'Proposed candidate site only. NOT an officially designated or operational emergency facility.',
        };
      }

      // 3. Road Network Access Assessment
      let nearestRoadNode = null;
      let minRoadDist = Infinity;

      if (this.roadNetwork && this.roadNetwork.nodes) {
        for (const node of this.roadNetwork.nodes.values()) {
          const d = Math.hypot(node.x - site.x, node.z - site.z);
          if (d < minRoadDist) {
            minRoadDist = d;
            nearestRoadNode = node;
          }
        }
      }

      // 4. Score Calculation (Max 100 points)
      // A. Elevation Clearance Score (Max 35 points: 5 pts per meter of dry clearance up to 7m)
      const elevScore = Math.min(35, Math.max(0, Math.round(clearance * 5)));

      // B. Road Access Score (Max 35 points)
      let roadScore = 0;
      let roadStatus = 'unknown';
      let roadNodeId = null;

      if (nearestRoadNode && minRoadDist <= 120.0) {
        roadNodeId = nearestRoadNode.id;
        // Proximity component (up to 20 pts)
        if (minRoadDist <= 30.0) roadScore += 20;
        else if (minRoadDist <= 65.0) roadScore += 14;
        else roadScore += 8;

        // Check if connecting edge is dry (up to 15 pts)
        let hasDryEdge = false;
        let hasExposedEdge = false;
        for (const edgeId of nearestRoadNode.edgeIds) {
          const edge = this.roadNetwork.edges.get(edgeId);
          if (edge) {
            if (edge.status === ROAD_STATUS.UNAFFECTED) hasDryEdge = true;
            else if (edge.status === ROAD_STATUS.EXPOSED) hasExposedEdge = true;
          }
        }

        if (hasDryEdge) {
          roadScore += 15;
          roadStatus = 'dry_connected';
        } else if (hasExposedEdge) {
          roadScore += 6;
          roadStatus = 'exposed_connected';
        } else {
          roadScore += 0;
          roadStatus = 'impassable_connected';
        }
      } else {
        roadStatus = 'unconnected_far';
      }

      // C. Slope / Topographic Suitability (Max 15 points)
      // Check terrain delta around site (gradient estimate)
      const dStep = 15.0;
      const eN = this.terrainManager?.getElevationAt(site.x, site.z - dStep) ?? gElev;
      const eS = this.terrainManager?.getElevationAt(site.x, site.z + dStep) ?? gElev;
      const eE = this.terrainManager?.getElevationAt(site.x + dStep, site.z) ?? gElev;
      const eW = this.terrainManager?.getElevationAt(site.x - dStep, site.z) ?? gElev;

      const maxGrad = Math.max(
        Math.abs(eN - gElev), Math.abs(eS - gElev),
        Math.abs(eE - gElev), Math.abs(eW - gElev)
      ) / dStep;

      let slopeScore = 5;
      if (maxGrad < 0.08) slopeScore = 15;      // Flat (< 4.5° slope)
      else if (maxGrad < 0.18) slopeScore = 10; // Gentle slope (< 10°)

      // D. Cluster Accessibility Score (Max 15 points)
      let clusterScore = 10;
      if (activeClusters.length > 0) {
        // Find distance to closest affected cluster
        let closestClusterDist = Infinity;
        for (const cl of activeClusters) {
          const d = Math.hypot(cl.centroid.x - site.x, cl.centroid.z - site.z);
          if (d < closestClusterDist) closestClusterDist = d;
        }
        if (closestClusterDist < 600) clusterScore = 15;
        else if (closestClusterDist < 1200) clusterScore = 10;
        else clusterScore = 5;
      }

      const totalScore = Math.min(100, Math.max(0, elevScore + roadScore + slopeScore + clusterScore));

      let rank = 'UNFAVORABLE';
      if (totalScore >= 75) rank = 'EXCELLENT';
      else if (totalScore >= 55) rank = 'VIABLE';
      else if (totalScore >= 35) rank = 'MARGINAL';

      return {
        ...site,
        isProposed: true,
        isVerifiedFacility: false,
        isViable: totalScore >= 35,
        isFlooded: false,
        score: totalScore,
        rank,
        groundElevation: Math.round(gElev * 10) / 10,
        waterElevation: Math.round(waterElev * 10) / 10,
        clearanceMeters: Math.round(clearance * 10) / 10,
        roadNodeId,
        roadDistanceMeters: Math.round(minRoadDist * 10) / 10,
        roadStatus,
        scoreBreakdown: {
          elevationClearance: elevScore,
          roadAccess: roadScore,
          terrainSlope: slopeScore,
          clusterProximity: clusterScore,
        },
        reason: `${rank} suitability score (${totalScore}/100): ${clearance.toFixed(1)}m elevation clearance above modeled water level, road distance ${minRoadDist.toFixed(0)}m (${roadStatus}).`,
        statusLabel: site.type === 'hospital' ? 'Proposed medical-response site — unverified' : 'Proposed shelter — unverified',
        disclaimer: 'Proposed candidate site only. NOT an officially designated or operational emergency facility.',
      };
    });

    // Sort by score descending
    this.evaluatedSites.sort((a, b) => b.score - a.score);
    return this.evaluatedSites;
  }

  /**
   * Get candidate site by ID.
   * @param {string} id
   * @returns {Object|null}
   */
  getSite(id) {
    return this.evaluatedSites.find(s => s.id === id) || null;
  }
}
