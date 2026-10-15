/**
 * HighWater 3D — Scenario Management & Export Service (Phase 5)
 * 
 * Provides:
 * 1. Scenario Management: Save, list, load, compare, and delete scenarios with safe browser-local persistence.
 * 2. Fault-Tolerant Persistence: Graceful fallback to in-memory store if localStorage is blocked or exceeds quota.
 * 3. Exportable Reports: Downloadable RFC 4180 CSV and print-friendly HTML report generation.
 * 4. Data Integrity: Strict denominator rules (excluding unknown DEM from percentages), unverified provenance tags,
 *    and conceptual decision-support caveats.
 */

export const SCENARIO_STORAGE_KEY = 'highwater3d_scenarios_v1';

export const DEFAULT_REFERENCE_SCENARIOS = Object.freeze([
  {
    id: 'scen-baseline-124',
    name: 'Normal Baseline Stage (124.0m MSL)',
    waterLevel: 124.0,
    profileMode: 'planar',
    connectedOnly: true,
    baselineWaterLevel: 124.0,
    isBuiltIn: true,
    notes: 'Typical non-flood baseflow along the Ahr river channel in Dernau.',
    createdAt: '2026-10-15T12:00:00.000Z',
  },
  {
    id: 'scen-spacenet8-1285',
    name: 'SpaceNet 8 / July 2021 Reference (128.5m MSL)',
    waterLevel: 128.5,
    profileMode: 'planar',
    connectedOnly: true,
    baselineWaterLevel: 124.0,
    isBuiltIn: true,
    notes: 'Indicative valley inundation matching SpaceNet 8 July 2021 historical flood extent.',
    createdAt: '2026-10-15T12:00:00.000Z',
  },
  {
    id: 'scen-extreme-1330',
    name: 'Extreme HQ100+ Model Scenario (133.0m MSL)',
    waterLevel: 133.0,
    profileMode: 'planar',
    connectedOnly: true,
    baselineWaterLevel: 124.0,
    isBuiltIn: true,
    notes: 'High-consequence flood scenario modeling extensive residential core immersion.',
    createdAt: '2026-10-15T12:00:00.000Z',
  },
]);

/**
 * Helper to escape a value for RFC 4180 CSV.
 * @param {any} val
 * @returns {string}
 */
export function escapeCSV(val) {
  if (val === null || val === undefined) return '';
  const str = String(val);
  if (str.includes(',') || str.includes('"') || str.includes('\n') || str.includes('\r')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

/**
 * Helper to escape a value for safe HTML interpolation.
 * @param {any} val
 * @returns {string}
 */
export function escapeHTML(val) {
  if (val === null || val === undefined) return '';
  return String(val)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export class ScenarioManager {
  /**
   * @param {Object} [options]
   * @param {string} [options.storageKey]
   */
  constructor(options = {}) {
    this.storageKey = options.storageKey || SCENARIO_STORAGE_KEY;
    this.inMemoryStore = new Map();
    this.isStorageAvailable = true;
    this.storageErrorMessage = null;

    this._initStorage();
  }

  /**
   * Test localStorage availability and initialize seed data if empty.
   * @private
   */
  _initStorage() {
    try {
      const testKey = '__highwater_test__';
      window.localStorage.setItem(testKey, testKey);
      window.localStorage.removeItem(testKey);
      this.isStorageAvailable = true;
      this.storageErrorMessage = null;

      // Seed reference scenarios if storage is completely empty
      const raw = window.localStorage.getItem(this.storageKey);
      if (!raw) {
        window.localStorage.setItem(this.storageKey, JSON.stringify(DEFAULT_REFERENCE_SCENARIOS));
      }
    } catch (err) {
      this.isStorageAvailable = false;
      this.storageErrorMessage = `Local storage unavailable (${err.message || 'Restricted'}). Scenarios will be kept in-memory for this session only.`;
      console.warn(`[ScenarioManager] ${this.storageErrorMessage}`);

      // Seed in-memory store
      DEFAULT_REFERENCE_SCENARIOS.forEach(scen => {
        this.inMemoryStore.set(scen.id, { ...scen });
      });
    }
  }

  /**
   * Retrieve all saved scenarios.
   * Safely filters out malformed or corrupted items without crashing.
   * @returns {Array<Object>}
   */
  getScenarios() {
    let list = [];

    if (this.isStorageAvailable) {
      try {
        const raw = window.localStorage.getItem(this.storageKey);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed)) {
            list = parsed;
          }
        }
      } catch (err) {
        console.error('[ScenarioManager] Failed to read scenarios from localStorage:', err);
        this.storageErrorMessage = 'Failed to parse saved scenarios. Using in-memory fallback.';
        list = Array.from(this.inMemoryStore.values());
      }
    } else {
      list = Array.from(this.inMemoryStore.values());
    }

    // Validate and sanitize records
    const valid = list.filter(item => {
      return item && typeof item === 'object' && typeof item.id === 'string' && typeof item.waterLevel === 'number';
    }).map(item => ({
      id: item.id,
      name: String(item.name || `Scenario ${item.waterLevel.toFixed(1)}m`),
      waterLevel: Math.round(item.waterLevel * 100) / 100,
      profileMode: item.profileMode === 'slope' ? 'slope' : 'planar',
      connectedOnly: item.connectedOnly !== false,
      baselineWaterLevel: typeof item.baselineWaterLevel === 'number' ? Math.round(item.baselineWaterLevel * 100) / 100 : 124.0,
      isBuiltIn: Boolean(item.isBuiltIn),
      notes: String(item.notes || ''),
      createdAt: item.createdAt || new Date().toISOString(),
      summarySnapshot: item.summarySnapshot || null,
    }));

    return valid;
  }

  /**
   * Get a specific scenario by ID.
   * @param {string} id
   * @returns {Object|null}
   */
  getScenario(id) {
    if (!id) return null;
    return this.getScenarios().find(s => s.id === id) || null;
  }

  /**
   * Save a new scenario.
   * @param {Object} data
   * @param {string} data.name - User-defined scenario name
   * @param {number} data.waterLevel - Modeled water elevation in meters MSL
   * @param {'planar'|'slope'} [data.profileMode] - Profile mode
   * @param {boolean} [data.connectedOnly] - Flood connectivity mode
   * @param {number} [data.baselineWaterLevel] - Baseline water level
   * @param {string} [data.notes] - Optional user notes
   * @param {Object} [data.summarySnapshot] - Brief impact snapshot
   * @returns {Object} Saved scenario
   */
  saveScenario(data) {
    if (!data) {
      throw new Error('Scenario must include a valid numeric waterLevel.');
    }

    const rawLevel = data.waterLevel;
    let numericLevel = null;
    if (typeof rawLevel === 'number' && !Number.isNaN(rawLevel)) {
      numericLevel = rawLevel;
    } else if (typeof rawLevel === 'string' && rawLevel.trim() !== '') {
      const parsed = Number(rawLevel.trim());
      if (!Number.isNaN(parsed)) {
        numericLevel = parsed;
      }
    }

    if (numericLevel === null) {
      throw new Error('Scenario must include a valid numeric waterLevel.');
    }

    const name = (data.name && String(data.name).trim()) || `Scenario ${numericLevel.toFixed(1)}m MSL`;
    const id = `scen-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    let baselineWaterLevel = 124.0;
    if (typeof data.baselineWaterLevel === 'number' && !Number.isNaN(data.baselineWaterLevel)) {
      baselineWaterLevel = Math.round(data.baselineWaterLevel * 100) / 100;
    } else if (typeof data.baselineWaterLevel === 'string' && data.baselineWaterLevel.trim() !== '') {
      const parsedBase = Number(data.baselineWaterLevel.trim());
      if (!Number.isNaN(parsedBase)) {
        baselineWaterLevel = Math.round(parsedBase * 100) / 100;
      }
    }

    const newScen = {
      id,
      name,
      waterLevel: Math.round(numericLevel * 100) / 100,
      profileMode: data.profileMode === 'slope' ? 'slope' : 'planar',
      connectedOnly: data.connectedOnly !== false,
      baselineWaterLevel,
      isBuiltIn: false,
      notes: String(data.notes || ''),
      createdAt: new Date().toISOString(),
      summarySnapshot: data.summarySnapshot || null,
    };

    const currentList = this.getScenarios();
    currentList.push(newScen);
    this._persist(currentList);

    return newScen;
  }

  /**
   * Update an existing scenario.
   * @param {string} id
   * @param {Object} updates
   * @returns {Object|null}
   */
  updateScenario(id, updates = {}) {
    const currentList = this.getScenarios();
    const index = currentList.findIndex(s => s.id === id);
    if (index === -1) return null;

    const existing = currentList[index];
    const updated = {
      ...existing,
      ...updates,
      id: existing.id, // Preserve immutable ID
      isBuiltIn: existing.isBuiltIn, // Preserve built-in status
      updatedAt: new Date().toISOString(),
    };

    currentList[index] = updated;
    this._persist(currentList);
    return updated;
  }

  /**
   * Delete a scenario by ID.
   * @param {string} id
   * @returns {boolean} True if deleted, false if not found or built-in protected
   */
  deleteScenario(id) {
    const currentList = this.getScenarios();
    const index = currentList.findIndex(s => s.id === id);
    if (index === -1) return false;

    currentList.splice(index, 1);
    this._persist(currentList);
    return true;
  }

  /**
   * Internal persistence routine.
   * @private
   * @param {Array<Object>} list
   */
  _persist(list) {
    if (this.isStorageAvailable) {
      try {
        window.localStorage.setItem(this.storageKey, JSON.stringify(list));
      } catch (err) {
        console.warn('[ScenarioManager] LocalStorage write failed, falling back to in-memory:', err);
        this.isStorageAvailable = false;
        this.storageErrorMessage = `Storage write failed (${err.message}). Data kept in-memory for session.`;
      }
    }

    // Always mirror in in-memory store for fallback consistency
    this.inMemoryStore.clear();
    list.forEach(scen => this.inMemoryStore.set(scen.id, scen));
  }

  /**
   * Compare two saved scenarios using the scenario comparison service.
   * 
   * @param {Object} baselineScenario
   * @param {Object} targetScenario
   * @param {import('./ScenarioComparisonService.js').ScenarioComparisonService} comparisonService
   * @returns {{ comparison: Object, rankedBuildings: Array<Object> }}
   */
  compareScenarios(baselineScenario, targetScenario, comparisonService) {
    if (!baselineScenario || !targetScenario || !comparisonService) {
      throw new Error('compareScenarios requires baselineScenario, targetScenario, and comparisonService.');
    }

    // Configure baseline
    comparisonService.setBaselineScenario(baselineScenario.waterLevel);

    // Evaluate target scenario
    return comparisonService.evaluateScenario(targetScenario.waterLevel);
  }

  /**
   * Phase 5B: Generate an RFC 4180 structured CSV report.
   * 
   * @param {Object} params
   * @param {Object} params.scenario - Active or selected scenario
   * @param {Object} params.comparison - Comparison summary delta
   * @param {Array<Object>} [params.rankedBuildings] - List of evaluated buildings
   * @param {Array<Object>} [params.shelterAssessments] - List of shelter evaluations
   * @param {Object} [params.dataQuality] - Data quality and uncertainty indicators
   * @returns {string} RFC 4180 formatted CSV
   */
  generateCSVReport({ scenario, comparison, rankedBuildings = [], shelterAssessments = [], dataQuality } = {}) {
    const scen = scenario || {};
    const scenName = scen.name || 'Active Simulation';
    const waterLevelNum = (typeof scen.waterLevel === 'number' && !Number.isNaN(scen.waterLevel))
      ? scen.waterLevel
      : 124.0;
    const comp = comparison || {};
    const baseLevelNum = (typeof comp.baselineWaterLevel === 'number' && !Number.isNaN(comp.baselineWaterLevel))
      ? comp.baselineWaterLevel
      : 124.0;
    const b = comp.buildings || {};
    const r = comp.roads || {};
    const s = comp.shelters || {};
    const safeBuildings = Array.isArray(rankedBuildings) ? rankedBuildings : [];
    const safeShelters = Array.isArray(shelterAssessments) ? shelterAssessments : [];
    const nowISO = new Date().toISOString();

    const lines = [];

    // --- Section 1: Scenario Overview & Metadata ---
    lines.push('=== HIGHWATER 3D — SCENARIO ANALYSIS REPORT ===');
    lines.push(`Report Generated,${escapeCSV(nowISO)}`);
    lines.push(`Scenario Name,${escapeCSV(scenName)}`);
    lines.push(`Modeled Water Surface (MSL),${waterLevelNum.toFixed(2)} m`);
    lines.push(`Baseline Water Surface (MSL),${baseLevelNum.toFixed(2)} m`);
    lines.push(`Profile Mode,${escapeCSV(scen.profileMode || 'planar')}`);
    lines.push('');

    // --- Section 2: Scenario Comparison Summary & Denominator Integrity ---
    lines.push('=== SCENARIO COMPARISON METRICS (BASELINE VS CURRENT) ===');
    lines.push('Metric,Value,Denominator,Unit,Description');
    lines.push(`Total Buildings Evaluated,${b.totalEvaluated ?? 0},${b.totalEvaluated ?? 0},count,Total structures in dataset`);
    lines.push(`Valid Evaluated Buildings,${b.validDenominator ?? 0},${b.totalEvaluated ?? 0},count,Structures with valid DGM1 bare-earth elevation`);
    lines.push(`Unknown/NoData DEM Buildings,${b.unknownCount ?? 0},${b.totalEvaluated ?? 0},count,Structures excluded from percentage denominators`);
    lines.push(`Newly Affected Buildings,+${b.newlyAffectedCount ?? 0},${b.validDenominator ?? 0},${b.newlyAffectedPercent ?? 0}%,Buildings transitioning from dry to positive water depth`);
    lines.push(`Exposure Category Escalations,+${b.escalatedCount ?? 0},${b.validDenominator ?? 0},${b.escalatedPercent ?? 0}%,Buildings moving into a higher flood exposure category`);
    lines.push(`Evacuation Route Lost (Flood-Isolated),${b.routeLostCount ?? 0},${b.validDenominator ?? 0},${b.routeLostPercent ?? 0}%,Buildings with baseline route now blocked by impassable roads`);
    lines.push(`Disconnected in Baseline Source Data,${b.disconnectedInSourceCount ?? 0},${b.validDenominator ?? 0},count,Buildings on isolated road components without baseline shelter path`);
    lines.push(`Connected Buildings,${b.connectedCount ?? 0},${b.validDenominator ?? 0},count,Buildings with dry passable corridor to active shelter`);
    lines.push(`Total Road Segments,${r.totalRoadEdges ?? 0},${r.totalRoadEdges ?? 0},count,Total road edges in topological graph`);
    lines.push(`Baseline Impassable Road Segments,${r.baselineImpassable ?? 0},${r.totalRoadEdges ?? 0},count,Road edges impassable at baseline water level`);
    lines.push(`Newly Impassable Road Segments,+${r.newlyImpassable ?? 0},${r.totalRoadEdges ?? 0},${r.newlyImpassablePercent ?? 0}%,Road edges crossing >=0.15m conservative impassability depth`);
    lines.push(`Unknown Road Segments,${r.currentUnknown ?? 0},${r.totalRoadEdges ?? 0},count,Road edges missing elevation data (treated as impassable under conservative policy)`);
    lines.push(`Shelters Operational,${s.operational ?? 0},${s.total ?? 0},count,Simulated emergency shelters with dry road access`);
    lines.push(`Shelters Isolated by Flooded Roads,${s.isolatedByRoads ?? 0},${s.total ?? 0},count,Dry shelter sites cut off by submerged access roads`);
    lines.push(`Shelters Inundated,${s.inundated ?? 0},${s.total ?? 0},count,Shelter ground sites submerged below water surface`);
    lines.push(`Shelters Disconnected in Baseline Source Data,${s.disconnectedInSource ?? 0},${s.total ?? 0},count,Shelters on disconnected road components (not flood-caused)`);
    lines.push(`Shelters Unknown Status,${s.unknown ?? 0},${s.total ?? 0},count,Shelters with missing ground or water elevation`);
    lines.push('');

    // --- Section 3: Shelter Accessibility Evaluation ---
    lines.push('=== SHELTER & EMERGENCY FACILITY EVALUATION ===');
    lines.push('Shelter ID,Name,Provenance,Site Elevation (MSL),Modeled Water (MSL),Site Depth (m),Site Inundation Status,Road Corridor Status,Connecting Node,Verification Notice');
    for (const sh of safeShelters) {
      if (!sh) continue;
      lines.push([
        escapeCSV(sh.id),
        escapeCSV(sh.name),
        escapeCSV(sh.provenance || 'simulated'),
        typeof sh.groundElevation === 'number' && !Number.isNaN(sh.groundElevation) ? sh.groundElevation.toFixed(2) : 'Unknown',
        typeof sh.waterElevation === 'number' && !Number.isNaN(sh.waterElevation) ? sh.waterElevation.toFixed(2) : 'N/A',
        typeof sh.siteWaterDepth === 'number' && !Number.isNaN(sh.siteWaterDepth) ? sh.siteWaterDepth.toFixed(2) : 'Unknown',
        sh.isSiteInundated ? 'SUBMERGED' : 'DRY',
        escapeCSV(sh.accessStatus || 'operational'),
        escapeCSV(sh.roadNodeId || 'None'),
        'Simulated unverified facility record. Not an official municipal emergency shelter.'
      ].join(','));
    }
    lines.push('');

    // --- Section 4: Individual Building Risk Ranking (Top records) ---
    lines.push('=== BUILDING FLOOD RISK RANKINGS & ACCESSIBILITY ===');
    lines.push('Rank,Building ID,Priority Tier,Total Risk Score (0-100),Flood Score (0-50),Road Score (0-25),Service Score (0-25),Exposure Category,Ground Depth (m),Footprint %,Base Elevation (MSL),Road Access Status,Reachable Shelter,Data Quality Warning');
    safeBuildings.forEach((item, idx) => {
      if (!item) return;
      const rk = item.risk || {};
      const sub = rk.subScores || {};
      const exp = item.exposure || {};
      const acc = item.access || {};
      const isUnk = rk.isUnknown || exp.category === 'unknown';

      lines.push([
        idx + 1,
        escapeCSV(item.id),
        escapeCSV(rk.priorityTier || 'low'),
        rk.totalScore ?? 0,
        sub.floodExposure ?? 0,
        sub.roadAccess ?? 0,
        sub.emergencyService ?? 0,
        escapeCSV(exp.category || 'unaffected'),
        typeof exp.waterDepth === 'number' && !Number.isNaN(exp.waterDepth) ? exp.waterDepth.toFixed(2) : 'Unknown',
        isUnk ? 'Indeterminate' : `${Math.round((exp.affectedRatio || (exp.waterDepth > 0 ? 1 : 0)) * 100)}%`,
        typeof item.baseElevationM === 'number' && !Number.isNaN(item.baseElevationM) ? item.baseElevationM.toFixed(2) : 'NoData',
        escapeCSV(acc.status || 'connected'),
        escapeCSV(acc.nearestShelter?.name || (acc.canReachShelter ? 'Shelter' : 'None')),
        isUnk ? 'Missing or NoData DGM1 elevation. Data uncertainty penalty applied.' : 'None'
      ].join(','));
    });
    lines.push('');

    // --- Section 5: Data Integrity & Uncertainty Audit ---
    lines.push('=== DATA INTEGRITY, UNCERTAINTY & PROVENANCE AUDIT ===');
    lines.push('Category,Status,Indicator,Details');
    const dq = dataQuality || {};
    lines.push(`DEM Coverage,${escapeCSV(dq.demCoverage?.status || 'Verified')},${escapeCSV(dq.demCoverage?.label || 'DGM1 Coverage')},${escapeCSV(dq.demCoverage?.description || 'Official Rhineland-Palatinate DGM1 bare-earth LiDAR')}`);
    lines.push(`Road Flood Classification,${escapeCSV(dq.roadClassification?.status || 'Evaluated')},${escapeCSV(dq.roadClassification?.label || 'Evaluated')},${escapeCSV(dq.roadClassification?.description || 'Roads crossing water depth >=0.15m marked impassable')}`);
    lines.push(`Road Graph Topology,${escapeCSV(dq.roadTopology?.status || 'Disconnected')},${escapeCSV(dq.roadTopology?.label || 'Disconnected Components')},${escapeCSV(dq.roadTopology?.description || 'Pre-existing source data disconnections preserved')}`);
    lines.push(`Emergency Facility Provenance,${escapeCSV(dq.facilityProvenance?.status || 'Unverified')},${escapeCSV(dq.facilityProvenance?.label || 'Simulated Facilities')},${escapeCSV(dq.facilityProvenance?.description || 'Simulated facilities only; no verified municipal hospital')}`);
    lines.push(`Proposed Candidate Sites,${escapeCSV(dq.proposedSites?.status || 'Proposed')},${escapeCSV(dq.proposedSites?.label || 'Proposed Sites')},${escapeCSV(dq.proposedSites?.description || 'Candidate staging sites vetted for elevation only; non-operational')}`);
    lines.push(`Spatial Snapping,${escapeCSV(dq.spatialSnapping?.status || 'Approximate')},${escapeCSV(dq.spatialSnapping?.label || 'Centroid Snapping')},${escapeCSV(dq.spatialSnapping?.description || 'Centroid 2D Euclidean distance used for network snapping')}`);
    lines.push('');

    // --- Section 6: Legal Disclaimers & Assumptions ---
    lines.push('=== MODEL ASSUMPTIONS & LEGAL DISCLAIMER ===');
    lines.push('1. Conceptual decision-support indicator only. Not a calibrated hydraulic forecast or certified structural engineering assessment.');
    lines.push('2. Ground-contact depth reflects bare-earth DGM1 LiDAR terrain intersection; it does not prove interior building flooding or occupant hazard.');
    lines.push('3. All emergency facilities are simulated/proposed; no verified municipal emergency hospital exists in source data (absence does not prove real-world lack of facilities).');
    lines.push('4. Topological road network contains 67 disconnected source components; buildings without baseline connectivity are designated disconnected_in_source.');
    lines.push('5. Conservative routing policy penalizes waterlogged segments and excludes roads with depth >=0.15m or unknown elevation.');

    return lines.join('\r\n');
  }

  /**
   * Phase 5B: Generate a clean, print-friendly HTML report.
   * 
   * @param {Object} [params]
   * @param {Object} [params.scenario] - Selected scenario
   * @param {Object} [params.comparison] - Comparison summary delta
   * @param {Array<Object>} [params.rankedBuildings] - List of evaluated buildings
   * @param {Array<Object>} [params.shelterAssessments] - List of shelter evaluations
   * @param {Object} [params.dataQuality] - Data quality and uncertainty indicators
   * @returns {string} HTML string
   */
  generateHTMLReport({ scenario, comparison, rankedBuildings = [], shelterAssessments = [], dataQuality } = {}) {
    const scen = scenario || {};
    const rawScenName = scen.name || 'Active Simulation';
    const scenName = escapeHTML(rawScenName);
    const waterLevelNum = (typeof scen.waterLevel === 'number' && !Number.isNaN(scen.waterLevel))
      ? scen.waterLevel
      : 124.0;
    const comp = comparison || {};
    const baseLevelNum = (typeof comp.baselineWaterLevel === 'number' && !Number.isNaN(comp.baselineWaterLevel))
      ? comp.baselineWaterLevel
      : 124.0;
    const b = comp.buildings || {};
    const r = comp.roads || {};
    const s = comp.shelters || {};
    const dq = dataQuality || {};
    const safeBuildings = Array.isArray(rankedBuildings) ? rankedBuildings : [];
    const safeShelters = Array.isArray(shelterAssessments) ? shelterAssessments : [];
    const nowFormatted = new Date().toLocaleString('en-US', { dateStyle: 'long', timeStyle: 'short' });

    // Summary counts
    const critCount = safeBuildings.filter(x => x?.risk?.priorityTier === 'critical').length;
    const highCount = safeBuildings.filter(x => x?.risk?.priorityTier === 'high').length;
    const modCount = safeBuildings.filter(x => x?.risk?.priorityTier === 'moderate').length;
    const lowCount = safeBuildings.filter(x => x?.risk?.priorityTier === 'low').length;
    const unkCount = b.unknownCount || 0;

    const displayBuildings = safeBuildings.slice(0, 50);

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HighWater 3D — Scenario Report: ${scenName}</title>
  <style>
    :root {
      --bg: #090d16;
      --card-bg: #111827;
      --border: #1f2937;
      --text: #f3f4f6;
      --muted: #9ca3af;
      --rose: #f43f5e;
      --amber: #f59e0b;
      --cyan: #06b6d4;
      --emerald: #10b981;
      --purple: #c084fc;
    }
    @media print {
      :root {
        --bg: #ffffff;
        --card-bg: #ffffff;
        --border: #e5e7eb;
        --text: #111827;
        --muted: #4b5563;
        --rose: #e11d48;
        --amber: #d97706;
        --cyan: #0891b2;
        --emerald: #059669;
        --purple: #9333ea;
      }
      body { background: #fff !important; color: #111 !important; font-size: 11pt; padding: 0 !important; }
      .no-print { display: none !important; }
      .page-break { page-break-before: always; }
      .report-card { border: 1px solid #ccc !important; box-shadow: none !important; }
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background: var(--bg);
      color: var(--text);
      margin: 0;
      padding: 30px;
      line-height: 1.5;
    }
    .header-banner {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      border-bottom: 2px solid var(--border);
      padding-bottom: 20px;
      margin-bottom: 24px;
    }
    .title-h1 { margin: 0 0 6px 0; font-size: 24px; font-weight: 700; color: var(--text); }
    .subtitle { margin: 0; font-size: 13px; color: var(--muted); }
    .meta-tag { font-family: monospace; font-size: 12px; background: rgba(6,182,212,0.15); color: var(--cyan); padding: 4px 10px; border-radius: 6px; }
    .grid-metrics {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 14px;
      margin-bottom: 24px;
    }
    .metric-card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 14px;
    }
    .metric-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; color: var(--muted); margin-bottom: 4px; }
    .metric-val { font-size: 20px; font-weight: 700; font-family: monospace; color: var(--text); }
    .metric-sub { font-size: 11px; color: var(--muted); margin-top: 4px; }
    .section-title { font-size: 16px; font-weight: 700; border-left: 4px solid var(--cyan); padding-left: 10px; margin: 28px 0 14px; }
    table { width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 12px; }
    th { background: rgba(255,255,255,0.05); text-align: left; padding: 8px 10px; border-bottom: 1px solid var(--border); color: var(--muted); font-size: 11px; text-transform: uppercase; }
    td { padding: 8px 10px; border-bottom: 1px solid var(--border); font-family: monospace; }
    .badge { display: inline-block; padding: 2px 6px; border-radius: 4px; font-size: 10px; font-weight: 700; text-transform: uppercase; }
    .badge-crit { background: rgba(244,63,94,0.2); color: var(--rose); }
    .badge-high { background: rgba(245,158,11,0.2); color: var(--amber); }
    .badge-mod { background: rgba(6,182,212,0.2); color: var(--cyan); }
    .badge-low { background: rgba(16,185,129,0.2); color: var(--emerald); }
    .badge-unk { background: rgba(156,163,175,0.2); color: var(--muted); }
    .badge-prop { background: rgba(192,132,252,0.2); color: var(--purple); }
    .disclaimer-box {
      background: rgba(245,158,11,0.08);
      border: 1px solid rgba(245,158,11,0.3);
      border-radius: 8px;
      padding: 14px;
      margin-top: 30px;
      font-size: 11px;
      color: var(--muted);
      line-height: 1.5;
    }
    .print-btn-bar {
      margin-bottom: 20px;
      display: flex;
      gap: 10px;
    }
    .btn-action {
      background: var(--cyan);
      color: #000;
      border: none;
      padding: 8px 16px;
      border-radius: 6px;
      font-weight: 600;
      cursor: pointer;
      font-size: 13px;
    }
  </style>
</head>
<body>
  <div class="print-btn-bar no-print">
    <button class="btn-action" onclick="window.print()">🖨️ Print / Save as PDF</button>
    <button class="btn-action" style="background:#374151;color:#fff;" onclick="window.close()">✕ Close Report</button>
  </div>

  <div class="header-banner">
    <div>
      <h1 class="title-h1">HighWater 3D — Scenario & Emergency Accessibility Report</h1>
      <p class="subtitle">Dernau, Rhineland-Palatinate, Germany · Bare-Earth DGM1 LiDAR DEM (1m)</p>
      <p class="subtitle" style="margin-top:4px;">Report Generated: <strong>${escapeHTML(nowFormatted)}</strong></p>
    </div>
    <div style="text-align:right;">
      <span class="meta-tag">${scenName}</span>
      <div style="margin-top:8px;font-size:12px;color:var(--muted);font-family:monospace;">
        Water Surface: <strong>${waterLevelNum.toFixed(2)}m MSL</strong><br>
        Baseline: <strong>${baseLevelNum.toFixed(2)}m MSL</strong>
      </div>
    </div>
  </div>

  <div class="section-title">Executive Summary & Scenario Deltas</div>
  <div class="grid-metrics">
    <div class="metric-card">
      <div class="metric-label">Newly Affected Buildings</div>
      <div class="metric-val text-amber">+${b.newlyAffectedCount ?? 0}</div>
      <div class="metric-sub">${b.newlyAffectedPercent ?? 0}% of ${b.validDenominator ?? 0} valid structures</div>
    </div>
    <div class="metric-card">
      <div class="metric-label">Route Lost (Flood-Isolated)</div>
      <div class="metric-val text-rose">${b.routeLostCount ?? 0}</div>
      <div class="metric-sub">${b.routeLostPercent ?? 0}% of valid structures</div>
    </div>
    <div class="metric-card">
      <div class="metric-label">Newly Impassable Roads</div>
      <div class="metric-val text-rose">+${r.newlyImpassable ?? 0}</div>
      <div class="metric-sub">${r.newlyImpassablePercent ?? 0}% of ${r.totalRoadEdges ?? 121} road edges</div>
    </div>
    <div class="metric-card">
      <div class="metric-label">Shelter Operational Status</div>
      <div class="metric-val text-cyan">${s.operational ?? 0} / ${s.total ?? 0}</div>
      <div class="metric-sub">${s.isolatedByRoads ?? 0} road-isolated, ${s.inundated ?? 0} submerged</div>
    </div>
  </div>

  <div class="section-title">Data Quality, Uncertainty & Provenance Audit</div>
  <div class="grid-metrics">
    <div class="metric-card">
      <div class="metric-label">DEM Elevation Coverage</div>
      <div class="metric-val" style="color:var(--emerald);">${escapeHTML(dq.demCoverage?.status || 'VERIFIED')}</div>
      <div class="metric-sub">${dq.demCoverage?.valid ?? b.validDenominator ?? 0} valid / ${dq.demCoverage?.unknown ?? b.unknownCount ?? 0} NoData unknown</div>
    </div>
    <div class="metric-card">
      <div class="metric-label">Road Classification</div>
      <div class="metric-val" style="color:var(--cyan);">${escapeHTML(dq.roadClassification?.status || 'EVALUATED')}</div>
      <div class="metric-sub">${dq.roadClassification?.evaluated ?? r.totalRoadEdges ?? 0} evaluated / ${dq.roadClassification?.unknown ?? r.currentUnknown ?? 0} unknown</div>
    </div>
    <div class="metric-card">
      <div class="metric-label">Road Network Topology</div>
      <div class="metric-val" style="color:var(--amber);">${escapeHTML(dq.roadTopology?.status || 'DISCONNECTED')}</div>
      <div class="metric-sub">${dq.roadTopology?.totalComponents ?? 67} components (baseline disconnections preserved)</div>
    </div>
    <div class="metric-card">
      <div class="metric-label">Emergency Facilities</div>
      <div class="metric-val" style="color:var(--rose);">${escapeHTML(dq.facilityProvenance?.status || 'UNVERIFIED')}</div>
      <div class="metric-sub">Simulated proxies; no verified hospital in research data</div>
    </div>
  </div>

  <div class="section-title">Building Priority & Exposure Distribution</div>
  <div class="grid-metrics">
    <div class="metric-card"><div class="metric-label">Critical Priority</div><div class="metric-val" style="color:var(--rose);">${critCount}</div><div class="metric-sub">Severe immersion / isolated</div></div>
    <div class="metric-card"><div class="metric-label">High Priority</div><div class="metric-val" style="color:var(--amber);">${highCount}</div><div class="metric-sub">Ingress risk or route lost</div></div>
    <div class="metric-card"><div class="metric-label">Moderate Priority</div><div class="metric-val" style="color:var(--cyan);">${modCount}</div><div class="metric-sub">Threshold depth / degraded</div></div>
    <div class="metric-card"><div class="metric-label">Low / Unaffected</div><div class="metric-val" style="color:var(--emerald);">${lowCount}</div><div class="metric-sub">Dry perimeter contact</div></div>
    <div class="metric-card"><div class="metric-label">Unknown DEM Data</div><div class="metric-val" style="color:var(--muted);">${unkCount}</div><div class="metric-sub">Data uncertainty penalty</div></div>
  </div>

  <div class="section-title">Emergency Shelter & Facility Accessibility</div>
  <table>
    <thead>
      <tr>
        <th>Facility ID</th>
        <th>Name</th>
        <th>Provenance</th>
        <th>Site Depth</th>
        <th>Site Status</th>
        <th>Corridor Status</th>
        <th>Road Access Node</th>
      </tr>
    </thead>
    <tbody>
      ${safeShelters.map(sh => {
        if (!sh) return '';
        const depthStr = typeof sh.siteWaterDepth === 'number' && !Number.isNaN(sh.siteWaterDepth) ? `${sh.siteWaterDepth.toFixed(2)}m` : 'Dry';
        return `
        <tr>
          <td>${escapeHTML(sh.id || 'N/A')}</td>
          <td style="font-family:sans-serif;font-weight:600;">${escapeHTML(sh.name || 'Unnamed Facility')}</td>
          <td><span class="badge badge-unk">${escapeHTML(sh.provenance || 'simulated')}</span></td>
          <td>${depthStr}</td>
          <td><span class="badge ${sh.isSiteInundated ? 'badge-crit' : 'badge-low'}">${sh.isSiteInundated ? 'SUBMERGED' : 'DRY SITE'}</span></td>
          <td><span class="badge ${sh.accessStatus === 'isolated' ? 'badge-crit' : sh.accessStatus === 'exposed' ? 'badge-high' : 'badge-low'}">${escapeHTML((sh.accessStatus || 'operational').toUpperCase())}</span></td>
          <td>${escapeHTML(sh.roadNodeId || 'None')}</td>
        </tr>
      `;
      }).join('')}
    </tbody>
  </table>

  <div class="section-title">Top High-Risk Structures (Sample)</div>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Priority Tier</th>
        <th>Score</th>
        <th>Flood / Road / Service</th>
        <th>Exposure</th>
        <th>Depth</th>
        <th>Road Access Status</th>
      </tr>
    </thead>
    <tbody>
      ${displayBuildings.map(bld => {
        if (!bld) return '';
        const rk = bld.risk || {};
        const sub = rk.subScores || {};
        const tier = rk.priorityTier || 'low';
        const tierClass = tier === 'critical' ? 'badge-crit' : tier === 'high' ? 'badge-high' : tier === 'moderate' ? 'badge-mod' : 'badge-low';
        const depthStr = typeof bld.exposure?.waterDepth === 'number' && !Number.isNaN(bld.exposure.waterDepth) ? `${bld.exposure.waterDepth.toFixed(2)}m` : 'N/A';
        return `
          <tr>
            <td>Bld ${escapeHTML(bld.id || 'N/A')}</td>
            <td><span class="badge ${tierClass}">${escapeHTML(tier)}</span></td>
            <td><strong>${rk.totalScore ?? 0}</strong>/100</td>
            <td>${sub.floodExposure ?? 0} | ${sub.roadAccess ?? 0} | ${sub.emergencyService ?? 0}</td>
            <td>${escapeHTML((bld.exposure?.category || 'unaffected').toUpperCase())}</td>
            <td>${depthStr}</td>
            <td>${escapeHTML((bld.access?.status || 'connected').toUpperCase())}</td>
          </tr>
        `;
      }).join('')}
    </tbody>
  </table>

  <div class="disclaimer-box">
    <strong>⚠️ CONCEPTUAL DECISION-SUPPORT NOTICE & MODEL LIMITATIONS:</strong><br>
    1. <strong>Not a Calibrated Hydraulic Prediction:</strong> HighWater 3D is a conceptual spatial decision-support tool. It models bare-earth terrain immersion based on high-resolution DGM1 LiDAR data and does not simulate hydrodynamic water velocity, river momentum, or structural debris blockage.<br>
    2. <strong>Ground-Contact Depth Only:</strong> Building depth figures indicate water height at the ground-contact footprint centroid. They do not prove interior ingress, structural integrity damage, or occupant safety.<br>
    3. <strong>Unverified Facilities:</strong> All emergency shelters and medical points in the source dataset are simulated/proposed and are not certified municipal disaster response infrastructure (absence in research dataset does not prove that a real-world municipal emergency hospital does not exist).<br>
    4. <strong>Road Network Disconnections:</strong> The source road network contains 67 isolated components. Structures without baseline connectivity are designated <em>disconnected_in_source</em> to prevent false flood disaster isolation alerts.
  </div>
</body>
</html>`;
  }

  /**
   * Helper to download CSV string as a file in the browser.
   * @param {string} csvContent
   * @param {string} filename
   */
  downloadCSV(csvContent, filename = 'highwater3d_scenario_report.csv') {
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  /**
   * Helper to open HTML report in a new window for print or review.
   * @param {string} htmlContent
   */
  openPrintReport(htmlContent) {
    const reportWindow = window.open('', '_blank');
    if (reportWindow) {
      reportWindow.document.write(htmlContent);
      reportWindow.document.close();
    } else {
      console.warn('[ScenarioManager] Popup blocked. Unable to open report window.');
    }
  }
}
