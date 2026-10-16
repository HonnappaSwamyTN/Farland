import { Telemetry } from './Telemetry.js';
import { ScenarioManager, escapeHTML } from '../geo/ScenarioManager.js';

/**
 * HighWater 3D — UI Controller
 * Binds user interactions, buttons, presets, layer toggles, and feature inspection HUD.
 */
export class UIController {
  /**
   * @param {Object} context
   * @param {import('../core/Viewer.js').Viewer} context.viewer
   * @param {import('../core/Controls.js').NavigationControls} context.controls
   * @param {import('../terrain/TerrainManager.js').TerrainManager} context.terrainManager
   * @param {import('../overlays/OverlayManager.js').OverlayManager} [context.overlayManager]
   * @param {import('../water/FloodWaterManager.js').FloodWaterManager} [context.floodWaterManager]
   */
  constructor({ viewer, controls, terrainManager, overlayManager, floodWaterManager = null }) {
    this.viewer = viewer;
    this.controls = controls;
    this.terrainManager = terrainManager;
    this.overlayManager = overlayManager || null;
    this.floodWaterManager = floodWaterManager || null;

    // Phase 5: Scenario Management & Export Service
    this.scenarioManager = new ScenarioManager();
    this.scenarioToDeleteId = null;
    this.activeScenarioId = 'scen-baseline-124';

    this.cacheDOMElements();
    this.telemetry = new Telemetry(this.dom);

    this.hoveredFeature = null;
    this.selectedFeature = null;
    this.lastInspectUpdate = 0;

    // Phase 2: Active Routing State
    this.activeRoute = null;
    this.activeAlternative = null;
    this.showAlternative = false;

    // Phase 4: Risk Ranking & Scenario Comparison State
    this.buildingRiskData = null;
    this.scenarioDiffData = null;
    this.riskSortMode = 'risk';
    this.accessLostActive = false;

    if (this.overlayManager) {
      this.overlayManager.onRouteRecalculated = (route, alt) => {
        this.onRouteUpdated(route, alt);
      };
      this.overlayManager.onScenarioComparisonUpdated = (comp) => {
        this.renderScenarioComparison(comp);
      };
      this.overlayManager.onBuildingRiskUpdated = (ranked) => {
        this.renderRiskRanking(ranked);
      };
    }

    this.eventListeners = [];
    this.bindEvents();
    this.populateScenarioDropdowns();
  }

  cacheDOMElements() {
    this.dom = {
      // Containers
      viewportContainer: document.getElementById('viewport-container'),
      loadingOverlay: document.getElementById('loading-overlay'),
      loadingStatusText: document.getElementById('loading-status-text'),
      loadingProgressFill: document.getElementById('loading-progress-fill'),
      errorOverlay: document.getElementById('error-overlay'),
      errorMsgText: document.getElementById('error-msg-text'),
      btnErrorRetry: document.getElementById('btn-error-retry'),

      // Notice Ribbon & Badges
      provenanceBadge: document.getElementById('provenance-badge'),
      dataNotice: document.getElementById('data-notice'),
      btnCloseNotice: document.getElementById('btn-close-notice'),

      // Telemetry Fields
      fpsCounter: document.getElementById('fps-counter'),
      camPos: document.getElementById('cam-pos'),
      targetPos: document.getElementById('target-pos'),
      camAlt: document.getElementById('cam-alt'),
      camAngles: document.getElementById('cam-angles'),
      cursorPos: document.getElementById('cursor-pos'),
      compassNeedle: document.getElementById('compass-needle'),

      // Diagnostics
      drawCalls: document.getElementById('diag-draw-calls'),
      triangles: document.getElementById('diag-triangles'),
      frameTime: document.getElementById('diag-frame-time'),

      // Feature Detail Panel (Click-to-View Details)
      hudFeatureDetails: document.getElementById('hud-feature-details'),
      detailPanelTitle: document.getElementById('detail-panel-title'),
      detailPanelBadge: document.getElementById('detail-panel-badge'),
      btnCloseDetails: document.getElementById('btn-close-details'),
      detailPanelBody: document.getElementById('detail-panel-body'),

      // Inundation Depth & Access Map Legend
      hudLegendPanel: document.getElementById('hud-legend-panel'),
      btnToggleLegend: document.getElementById('btn-toggle-legend'),

      // Preset Buttons
      btnViewIso: document.getElementById('btn-view-iso'),
      btnViewTop: document.getElementById('btn-view-top'),
      btnResetCam: document.getElementById('btn-reset-cam'),

      // Viewport Display Toggles
      btnToggleWireframe: document.getElementById('btn-toggle-wireframe'),
      btnToggleGrid: document.getElementById('btn-toggle-grid'),

      // Geographic Layer Toggles
      btnToggleBlds: document.getElementById('btn-toggle-blds'),
      btnToggleRoads: document.getElementById('btn-toggle-roads'),
      btnToggleFacs: document.getElementById('btn-toggle-facs'),
      btnToggleFlood: document.getElementById('btn-toggle-flood'),
      btnToggleWater: document.getElementById('btn-toggle-water'),

      // Milestone 5: Simulated Water Controls
      waterLevelSlider: document.getElementById('water-level-slider'),
      waterLevelVal: document.getElementById('water-level-val'),
      btnWaterPlay: document.getElementById('btn-water-play'),
      btnWaterReset: document.getElementById('btn-water-reset'),
      btnToggleConnectivity: document.getElementById('btn-toggle-connectivity'),
      impactBadge: document.getElementById('impact-badge'),
      impactStatsText: document.getElementById('impact-stats-text'),

      // Milestone 6: Slope Profile, Dynamic Building Depth & Road Passability
      btnToggleProfile: document.getElementById('btn-toggle-profile'),
      btnToggleDepth: document.getElementById('btn-toggle-depth'),
      btnTogglePassability: document.getElementById('btn-toggle-passability'),
      hudLegend: document.getElementById('hud-legend'),

      // Phase 2: Routing Controls
      btnRouteShelter: document.getElementById('btn-route-shelter'),
      btnRouteHospital: document.getElementById('btn-route-hospital'),
      btnRouteAlt: document.getElementById('btn-route-alt'),
      btnRouteClear: document.getElementById('btn-route-clear'),

      // Phase 3: Affected Clusters & Proposed Safe Sites
      btnToggleClusters: document.getElementById('btn-toggle-clusters'),
      btnToggleProposed: document.getElementById('btn-toggle-proposed'),

      // Phase 4: Scenario Comparison & Risk Ranking HUD
      hudScenarioDiff: document.getElementById('hud-scenario-diff'),
      scenarioBaselineTag: document.getElementById('scenario-baseline-tag'),
      btnSetBaseline: document.getElementById('btn-set-baseline'),
      btnToggleAccessLost: document.getElementById('btn-toggle-access-lost'),
      btnToggleRiskPanel: document.getElementById('btn-toggle-risk-panel'),
      btnDockRisk: document.getElementById('btn-dock-risk'),
      diffNewBlds: document.getElementById('diff-new-blds'),
      diffRouteLost: document.getElementById('diff-route-lost'),
      diffNewRoads: document.getElementById('diff-new-roads'),
      diffIsolatedShelters: document.getElementById('diff-isolated-shelters'),

      hudRiskPanel: document.getElementById('hud-risk-panel'),
      btnCloseRisk: document.getElementById('btn-close-risk'),
      riskSummaryCounts: document.getElementById('risk-summary-counts'),
      riskListContainer: document.getElementById('risk-list-container'),
      sortRisk: document.getElementById('sort-risk'),
      sortDepth: document.getElementById('sort-depth'),
      sortLost: document.getElementById('sort-lost'),

      // Phase 5: Scenario Management & Exportable Report
      btnOpenScenarios: document.getElementById('btn-open-scenarios'),
      btnExportReport: document.getElementById('btn-export-report'),
      btnDockScenarios: document.getElementById('btn-dock-scenarios'),
      btnDockExport: document.getElementById('btn-dock-export'),
      hudScenarioPanel: document.getElementById('hud-scenario-panel'),
      scenarioPanelCount: document.getElementById('scenario-panel-count'),
      btnCloseScenarios: document.getElementById('btn-close-scenarios'),
      scenarioStorageNotice: document.getElementById('scenario-storage-notice'),
      inputScenarioName: document.getElementById('input-scenario-name'),
      btnSaveScenario: document.getElementById('btn-save-scenario'),
      selectCompareBaseline: document.getElementById('select-compare-baseline'),
      selectCompareTarget: document.getElementById('select-compare-target'),
      btnExecuteCompare: document.getElementById('btn-execute-compare'),
      btnScenarioExportCsv: document.getElementById('btn-scenario-export-csv'),
      btnScenarioExportReport: document.getElementById('btn-scenario-export-report'),
      scenarioListContainer: document.getElementById('scenario-list-container'),
      reportExportOverlay: document.getElementById('report-export-overlay'),
      btnCloseExportModal: document.getElementById('btn-close-export-modal'),
      btnDownloadCsv: document.getElementById('btn-download-csv'),
      btnOpenPrintReport: document.getElementById('btn-open-print-report'),
      exportPreviewContainer: document.getElementById('export-preview-container'),
      deleteConfirmModal: document.getElementById('delete-confirm-modal'),
      btnConfirmDelete: document.getElementById('btn-confirm-delete'),
      btnCancelDelete: document.getElementById('btn-cancel-delete'),

      // Phase 6: Data Quality & Uncertainty Audit
      btnToggleDataQuality: document.getElementById('btn-toggle-data-quality'),
      btnPillIntegrity: document.getElementById('btn-pill-integrity'),
      btnDockIntegrity: document.getElementById('btn-dock-integrity'),
      hudDataQuality: document.getElementById('hud-data-quality'),
      btnCloseDataQuality: document.getElementById('btn-close-data-quality'),
      dqContent: document.getElementById('dq-content'),
      dqHeaderTag: document.getElementById('dq-header-tag'),

      // Phase 7: Detailed Two-Scenario Comparison
      hudSelectScenA: document.getElementById('hud-select-scen-a'),
      hudSelectScenB: document.getElementById('hud-select-scen-b'),
      hudCompareValidation: document.getElementById('hud-compare-validation'),
      btnHudCompareScenarios: document.getElementById('btn-hud-compare-scenarios'),
      panelCompareValidation: document.getElementById('panel-compare-validation'),
      modalScenarioComparison: document.getElementById('modal-scenario-comparison'),
      modalBadgeScenA: document.getElementById('modal-badge-scen-a'),
      modalBadgeScenB: document.getElementById('modal-badge-scen-b'),
      modalBadgeDelta: document.getElementById('modal-badge-delta'),
      btnModalExportCsv: document.getElementById('btn-modal-export-csv'),
      btnModalExportHtml: document.getElementById('btn-modal-export-html'),
      btnCloseComparisonModal: document.getElementById('btn-close-comparison-modal'),
      btnFooterCloseComparison: document.getElementById('btn-footer-close-comparison'),
      comparisonModalBody: document.getElementById('comparison-modal-body'),
    };
  }

  bindEvents() {
    // 1. Camera View Presets
    this.addEvent(this.dom.btnViewIso, 'click', () => {
      this.setActivePresetBtn(this.dom.btnViewIso);
      this.controls.setPerspectiveIso();
    });

    this.addEvent(this.dom.btnViewTop, 'click', () => {
      this.setActivePresetBtn(this.dom.btnViewTop);
      this.controls.setTopDown();
    });

    this.addEvent(this.dom.btnResetCam, 'click', () => {
      this.setActivePresetBtn(this.dom.btnViewIso);
      this.controls.reset();
    });

    // 2. Viewport Display Toggles
    this.addEvent(this.dom.btnToggleWireframe, 'click', () => {
      const active = this.terrainManager.toggleWireframe();
      this.dom.btnToggleWireframe.classList.toggle('active', active);
    });

    let gridActive = true;
    this.addEvent(this.dom.btnToggleGrid, 'click', () => {
      gridActive = !gridActive;
      this.viewer.setGridVisible(gridActive);
      this.dom.btnToggleGrid.classList.toggle('active', gridActive);
    });

    // 3. Geographic Layer Toggles
    if (this.dom.btnToggleBlds) {
      this.addEvent(this.dom.btnToggleBlds, 'click', () => {
        if (!this.overlayManager) return;
        const visible = this.overlayManager.toggleBuildings();
        this.dom.btnToggleBlds.classList.toggle('active', visible);
      });
    }

    if (this.dom.btnToggleRoads) {
      this.addEvent(this.dom.btnToggleRoads, 'click', () => {
        if (!this.overlayManager) return;
        const visible = this.overlayManager.toggleRoads();
        this.dom.btnToggleRoads.classList.toggle('active', visible);
      });
    }

    if (this.dom.btnToggleFacs) {
      this.addEvent(this.dom.btnToggleFacs, 'click', () => {
        if (!this.overlayManager) return;
        const visible = this.overlayManager.toggleFacilities();
        this.dom.btnToggleFacs.classList.toggle('active', visible);
      });
    }

    if (this.dom.btnToggleFlood) {
      this.addEvent(this.dom.btnToggleFlood, 'click', () => {
        if (!this.overlayManager) return;
        const visible = this.overlayManager.toggleHistoricalFlood();
        this.dom.btnToggleFlood.classList.toggle('active', visible);
      });
    }

    // 4. Milestone 5: Simulated Water Controls
    if (this.dom.btnToggleWater) {
      this.addEvent(this.dom.btnToggleWater, 'click', () => {
        if (!this.floodWaterManager) return;
        const visible = this.floodWaterManager.setVisible();
        this.dom.btnToggleWater.classList.toggle('active', visible);
      });
    }

    if (this.dom.waterLevelSlider) {
      this.addEvent(this.dom.waterLevelSlider, 'input', (e) => {
        if (!this.floodWaterManager) return;
        const level = parseFloat(e.target.value);
        this.floodWaterManager.setWaterLevel(level);
        if (this.dom.waterLevelVal) {
          this.dom.waterLevelVal.textContent = `${level.toFixed(2)} m`;
        }
      });
    }

    if (this.dom.btnWaterPlay) {
      this.addEvent(this.dom.btnWaterPlay, 'click', () => {
        if (!this.floodWaterManager) return;
        const isPlaying = this.floodWaterManager.togglePlayPause();
        this.dom.btnWaterPlay.textContent = isPlaying ? '⏸ Pause' : '▶ Rise';
        this.dom.btnWaterPlay.classList.toggle('active', isPlaying);
      });
    }

    if (this.dom.btnWaterReset) {
      this.addEvent(this.dom.btnWaterReset, 'click', () => {
        if (!this.floodWaterManager) return;
        this.floodWaterManager.reset();
        if (this.dom.waterLevelSlider) {
          this.dom.waterLevelSlider.value = this.floodWaterManager.defaultWaterLevel.toFixed(2);
        }
        if (this.dom.waterLevelVal) {
          this.dom.waterLevelVal.textContent = `${this.floodWaterManager.defaultWaterLevel.toFixed(2)} m`;
        }
        if (this.dom.btnWaterPlay) {
          this.dom.btnWaterPlay.textContent = '▶ Rise';
          this.dom.btnWaterPlay.classList.remove('active');
        }
      });
    }

    if (this.dom.btnToggleConnectivity) {
      this.addEvent(this.dom.btnToggleConnectivity, 'click', () => {
        if (!this.floodWaterManager) return;
        const connected = this.floodWaterManager.setConnectivity();
        this.dom.btnToggleConnectivity.textContent = connected ? '🌊 Connected: ON' : '🌊 Connected: OFF';
        this.dom.btnToggleConnectivity.classList.toggle('active', connected);
      });
    }

    // Milestone 6 & 7: Slope-Aware Profile & Dynamic Impact Toggles
    if (this.dom.btnToggleProfile) {
      this.addEvent(this.dom.btnToggleProfile, 'click', () => {
        if (!this.floodWaterManager) return;
        const current = this.floodWaterManager.profileMode;
        const newMode = current === 'planar' ? 'slope' : 'planar';
        this.floodWaterManager.setProfileMode(newMode);
        this.dom.btnToggleProfile.textContent = newMode === 'slope' ? '📐 Profile: Slope-Aware' : '📐 Profile: Planar';
        this.dom.btnToggleProfile.classList.toggle('active', newMode === 'slope');
      });
    }

    if (this.dom.btnToggleDepth) {
      this.addEvent(this.dom.btnToggleDepth, 'click', () => {
        if (!this.overlayManager) return;
        const isDepth = this.overlayManager.toggleBuildingDepthMode();
        this.dom.btnToggleDepth.textContent = isDepth ? '🎨 Depth: ON' : '🎨 Depth: OFF';
        this.dom.btnToggleDepth.classList.toggle('active', isDepth);
      });
    }

    if (this.dom.btnTogglePassability) {
      this.addEvent(this.dom.btnTogglePassability, 'click', () => {
        if (!this.overlayManager) return;
        const isPass = this.overlayManager.toggleRoadPassabilityMode();
        this.dom.btnTogglePassability.textContent = isPass ? '🛣️ Passability: ON' : '🛣️ Passability: OFF';
        this.dom.btnTogglePassability.classList.toggle('active', isPass);
      });
    }

    // 4. Notice Ribbon Dismiss
    this.addEvent(this.dom.btnCloseNotice, 'click', () => {
      if (this.dom.dataNotice) {
        this.dom.dataNotice.classList.add('hidden');
      }
    });

    // 5. Mouse movement over 3D viewport for coordinate sampling
    this.addEvent(this.dom.viewportContainer, 'mousemove', (e) => {
      const rect = this.dom.viewportContainer.getBoundingClientRect();
      this.telemetry.setMouseCoords(e.clientX, e.clientY, rect);
    });

    // 6. Viewport click to view feature details or deselect on empty space
    let pointerStartX = 0;
    let pointerStartY = 0;
    this.addEvent(this.dom.viewportContainer, 'pointerdown', (e) => {
      pointerStartX = e.clientX;
      pointerStartY = e.clientY;
    });

    this.addEvent(this.dom.viewportContainer, 'click', (e) => {
      if (!this.overlayManager || !this.viewer) return;
      // Do not treat camera drag/orbit/pan as a feature click
      const dragDist = Math.hypot(e.clientX - pointerStartX, e.clientY - pointerStartY);
      if (dragDist > 6) return;

      const rect = this.dom.viewportContainer.getBoundingClientRect();
      const mouseNdc = {
        x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
        y: -((e.clientY - rect.top) / rect.height) * 2 + 1,
      };
      const clicked = this.overlayManager.inspectFeature(mouseNdc, this.viewer.camera);
      if (clicked) {
        this.selectFeature(clicked);
      } else {
        this.deselectFeature();
      }
    });

    // Close Details Panel Button
    if (this.dom.btnCloseDetails) {
      this.addEvent(this.dom.btnCloseDetails, 'click', (e) => {
        e.stopPropagation();
        this.deselectFeature();
      });
    }

    // Toggle Map Legend Panel Collapse
    if (this.dom.btnToggleLegend) {
      this.addEvent(this.dom.btnToggleLegend, 'click', () => {
        if (this.dom.hudLegendPanel) {
          const isCollapsed = this.dom.hudLegendPanel.classList.toggle('collapsed');
          this.dom.btnToggleLegend.textContent = isCollapsed ? '▸' : '▾';
        }
      });
    }

    // 7. Error Retry
    this.addEvent(this.dom.btnErrorRetry, 'click', () => {
      window.location.reload();
    });

    // 8. Phase 2 Routing Controls
    if (this.dom.btnRouteShelter) {
      this.addEvent(this.dom.btnRouteShelter, 'click', () => {
        this.executeRoute('shelter');
      });
    }

    if (this.dom.btnRouteHospital) {
      this.addEvent(this.dom.btnRouteHospital, 'click', () => {
        this.executeRoute('hospital');
      });
    }

    if (this.dom.btnRouteAlt) {
      this.addEvent(this.dom.btnRouteAlt, 'click', () => {
        this.toggleAlternativeRoute();
      });
    }

    if (this.dom.btnRouteClear) {
      this.addEvent(this.dom.btnRouteClear, 'click', () => {
        if (this.overlayManager) {
          this.overlayManager.clearRoute();
        }
      });
    }

    // 9. Phase 3: Cluster and Proposed Site Layer Toggles
    if (this.dom.btnToggleClusters) {
      this.addEvent(this.dom.btnToggleClusters, 'click', () => {
        if (!this.overlayManager) return;
        const visible = this.overlayManager.toggleClusters();
        this.dom.btnToggleClusters.classList.toggle('active', visible);
      });
    }

    if (this.dom.btnToggleProposed) {
      this.addEvent(this.dom.btnToggleProposed, 'click', () => {
        if (!this.overlayManager) return;
        const visible = this.overlayManager.toggleProposedSites();
        this.dom.btnToggleProposed.classList.toggle('active', visible);
      });
    }

    // 10. Phase 4: Scenario Comparison & Risk Ranking Controls
    if (this.dom.btnSetBaseline) {
      this.addEvent(this.dom.btnSetBaseline, 'click', () => {
        this.setBaselineFromCurrent();
      });
    }

    if (this.dom.btnToggleAccessLost) {
      this.addEvent(this.dom.btnToggleAccessLost, 'click', () => {
        this.toggleAccessLostHighlights();
      });
    }

    if (this.dom.btnToggleRiskPanel) {
      this.addEvent(this.dom.btnToggleRiskPanel, 'click', () => {
        this.toggleRiskPanel();
      });
    }

    if (this.dom.btnDockRisk) {
      this.addEvent(this.dom.btnDockRisk, 'click', () => {
        this.toggleRiskPanel();
      });
    }

    if (this.dom.btnCloseRisk) {
      this.addEvent(this.dom.btnCloseRisk, 'click', () => {
        if (this.dom.hudRiskPanel) {
          this.dom.hudRiskPanel.classList.remove('active');
        }
      });
    }

    if (this.dom.sortRisk) {
      this.addEvent(this.dom.sortRisk, 'click', () => {
        this.setRiskSortMode('risk');
      });
    }

    if (this.dom.sortDepth) {
      this.addEvent(this.dom.sortDepth, 'click', () => {
        this.setRiskSortMode('depth');
      });
    }

    if (this.dom.sortLost) {
      this.addEvent(this.dom.sortLost, 'click', () => {
        this.setRiskSortMode('lost');
      });
    }

    // 11. Phase 5: Scenario Management & Reports
    if (this.dom.btnOpenScenarios) {
      this.addEvent(this.dom.btnOpenScenarios, 'click', () => {
        this.toggleScenarioPanel();
      });
    }

    if (this.dom.btnDockScenarios) {
      this.addEvent(this.dom.btnDockScenarios, 'click', () => {
        this.toggleScenarioPanel();
      });
    }

    if (this.dom.btnCloseScenarios) {
      this.addEvent(this.dom.btnCloseScenarios, 'click', () => {
        this.closeScenarioPanel();
      });
    }

    if (this.dom.btnSaveScenario) {
      this.addEvent(this.dom.btnSaveScenario, 'click', () => {
        this.saveCurrentScenario();
      });
    }

    if (this.dom.inputScenarioName) {
      this.addEvent(this.dom.inputScenarioName, 'keydown', (e) => {
        if (e.key === 'Enter') {
          this.saveCurrentScenario();
        }
      });
    }

    if (this.dom.btnExecuteCompare) {
      this.addEvent(this.dom.btnExecuteCompare, 'click', () => {
        this.compareSelectedScenarios();
      });
    }

    if (this.dom.btnExportReport) {
      this.addEvent(this.dom.btnExportReport, 'click', () => {
        this.openExportModal();
      });
    }

    if (this.dom.btnDockExport) {
      this.addEvent(this.dom.btnDockExport, 'click', () => {
        this.openExportModal();
      });
    }

    if (this.dom.btnScenarioExportCsv) {
      this.addEvent(this.dom.btnScenarioExportCsv, 'click', () => {
        this.downloadScenarioCSV();
      });
    }

    if (this.dom.btnScenarioExportReport) {
      this.addEvent(this.dom.btnScenarioExportReport, 'click', () => {
        this.openExportModal();
      });
    }

    if (this.dom.btnCloseExportModal) {
      this.addEvent(this.dom.btnCloseExportModal, 'click', () => {
        this.closeExportModal();
      });
    }

    if (this.dom.btnDownloadCsv) {
      this.addEvent(this.dom.btnDownloadCsv, 'click', () => {
        this.downloadScenarioCSV();
      });
    }

    if (this.dom.btnOpenPrintReport) {
      this.addEvent(this.dom.btnOpenPrintReport, 'click', () => {
        this.openScenarioPrintReport();
      });
    }

    if (this.dom.btnConfirmDelete) {
      this.addEvent(this.dom.btnConfirmDelete, 'click', () => {
        this.executeDeleteScenario();
      });
    }

    if (this.dom.btnCancelDelete) {
      this.addEvent(this.dom.btnCancelDelete, 'click', () => {
        this.cancelDeleteScenario();
      });
    }

    // 12. Phase 6: Data Quality & Uncertainty Audit Controls
    const toggleDQ = () => this.toggleDataQualityPanel();
    if (this.dom.btnToggleDataQuality) this.addEvent(this.dom.btnToggleDataQuality, 'click', toggleDQ);
    if (this.dom.btnPillIntegrity) this.addEvent(this.dom.btnPillIntegrity, 'click', toggleDQ);
    if (this.dom.btnDockIntegrity) this.addEvent(this.dom.btnDockIntegrity, 'click', toggleDQ);
    if (this.dom.btnCloseDataQuality) {
      this.addEvent(this.dom.btnCloseDataQuality, 'click', () => {
        if (this.dom.hudDataQuality) this.dom.hudDataQuality.classList.add('hidden');
      });
    }

    // 13. Phase 7: Detailed Two-Scenario Comparison Events
    const onScenarioSelectChange = (source) => {
      this.validateScenarioComparisonSelection(source);
    };

    if (this.dom.hudSelectScenA) {
      this.addEvent(this.dom.hudSelectScenA, 'change', () => onScenarioSelectChange('hud'));
    }
    if (this.dom.hudSelectScenB) {
      this.addEvent(this.dom.hudSelectScenB, 'change', () => onScenarioSelectChange('hud'));
    }
    if (this.dom.selectCompareBaseline) {
      this.addEvent(this.dom.selectCompareBaseline, 'change', () => onScenarioSelectChange('panel'));
    }
    if (this.dom.selectCompareTarget) {
      this.addEvent(this.dom.selectCompareTarget, 'change', () => onScenarioSelectChange('panel'));
    }

    if (this.dom.btnHudCompareScenarios) {
      this.addEvent(this.dom.btnHudCompareScenarios, 'click', () => {
        this.compareSelectedScenarios('hud');
      });
    }

    if (this.dom.btnCloseComparisonModal) {
      this.addEvent(this.dom.btnCloseComparisonModal, 'click', () => {
        this.closeScenarioComparisonModal();
      });
    }

    if (this.dom.btnFooterCloseComparison) {
      this.addEvent(this.dom.btnFooterCloseComparison, 'click', () => {
        this.closeScenarioComparisonModal();
      });
    }

    if (this.dom.btnModalExportCsv) {
      this.addEvent(this.dom.btnModalExportCsv, 'click', () => {
        this.downloadDetailedComparisonCSV();
      });
    }

    if (this.dom.btnModalExportHtml) {
      this.addEvent(this.dom.btnModalExportHtml, 'click', () => {
        this.exportDetailedComparisonHTML();
      });
    }

    if (this.dom.modalScenarioComparison) {
      this.addEvent(this.dom.modalScenarioComparison, 'click', (e) => {
        if (e.target === this.dom.modalScenarioComparison) {
          this.closeScenarioComparisonModal();
        }
      });
    }

    this.addEvent(window, 'keydown', (e) => {
      if (e.key === 'Escape') {
        if (this.dom.modalScenarioComparison && !this.dom.modalScenarioComparison.classList.contains('hidden')) {
          this.closeScenarioComparisonModal();
        } else if (this.dom.reportExportOverlay && !this.dom.reportExportOverlay.classList.contains('hidden')) {
          this.closeExportModal();
        }
      }
    });
  }

  setActivePresetBtn(btn) {
    [this.dom.btnViewIso, this.dom.btnViewTop].forEach((el) => {
      if (el) el.classList.remove('active');
    });
    if (btn) btn.classList.add('active');
  }

  /**
   * Set FloodWaterManager reference and wire telemetry callbacks.
   * @param {import('../water/FloodWaterManager.js').FloodWaterManager} floodWaterManager
   */
  setFloodWaterManager(floodWaterManager) {
    this.floodWaterManager = floodWaterManager;
    if (this.floodWaterManager) {
      this.floodWaterManager.onImpactUpdate = (impact) => {
        if (this.dom.waterLevelSlider && Math.abs(parseFloat(this.dom.waterLevelSlider.value) - impact.waterLevel) > 0.05) {
          this.dom.waterLevelSlider.value = impact.waterLevel.toFixed(2);
        }
        if (this.dom.waterLevelVal) {
          this.dom.waterLevelVal.textContent = `${impact.waterLevel.toFixed(2)} m`;
        }
        if (this.dom.impactStatsText) {
          const b = impact.buildingDepthBreakdown || { shallow: 0, moderate: 0, deep: 0 };
          const r = impact.roadPassabilityBreakdown || { clear: 0, waterlogged: 0, submerged: 0 };
          const s = impact.shelterAccessibilityBreakdown || { operational: 0, isolated: 0, inundated: 0 };
          const bldCount = (b.shallow || 0) + (b.moderate || 0) + (b.deep || 0);
          const roadCount = (r.waterlogged || 0) + (r.submerged || 0);
          const shelterCount = (s.isolated || 0) + (s.inundated || 0);
          this.dom.impactStatsText.textContent =
            `Bld: ${bldCount}/${impact.totalBuildings} (S:${b.shallow} M:${b.moderate} D:${b.deep}) | ` +
            `Rds: ${roadCount}/${impact.totalRoads} (${r.submerged} cut) | ` +
            `Shelters: ${shelterCount}/${impact.totalFacilities} (${s.isolated} iso)`;
        }
        if (this.dom.btnWaterPlay && !this.floodWaterManager.isPlaying && this.dom.btnWaterPlay.classList.contains('active')) {
          this.dom.btnWaterPlay.textContent = '▶ Rise';
          this.dom.btnWaterPlay.classList.remove('active');
        }
      };
    }
  }

  addEvent(target, event, handler) {
    if (!target) return;
    target.addEventListener(event, handler);
    this.eventListeners.push({ target, event, handler });
  }

  setLoadingProgress(message, percentage) {
    if (this.dom.loadingStatusText) {
      this.dom.loadingStatusText.textContent = message;
    }
    if (this.dom.loadingProgressFill) {
      this.dom.loadingProgressFill.style.width = `${Math.min(Math.max(percentage, 0), 100)}%`;
    }
  }

  hideLoading() {
    if (this.dom.loadingOverlay) {
      this.dom.loadingOverlay.classList.add('fade-out');
      setTimeout(() => {
        if (this.dom.loadingOverlay) {
          this.dom.loadingOverlay.style.display = 'none';
        }
      }, 350);
    }
  }

  showError(errorMsg) {
    if (this.dom.errorMsgText) {
      this.dom.errorMsgText.textContent = errorMsg;
    }
    if (this.dom.errorOverlay) {
      this.dom.errorOverlay.classList.remove('hidden');
    }
    if (this.dom.loadingOverlay) {
      this.dom.loadingOverlay.style.display = 'none';
    }
  }

  /**
   * Update UI badges and data notice banner to reflect verified real DEM provenance.
   * @param {Object} meta
   */
  setTerrainProvenanceReal(meta) {
    if (this.dom.provenanceBadge) {
      this.dom.provenanceBadge.className = 'provenance-badge real-dem-badge';
      this.dom.provenanceBadge.title = `${meta.label}\nVertical: ${meta.verticalDatum}\nResolution: ${meta.resolution}\nAttribution: ${meta.attribution}`;
      this.dom.provenanceBadge.innerHTML = `
        <span class="indicator-dot success"></span>
        <span class="badge-text">TERRAIN: LVermGeo RLP DGM1 (REAL DEM)</span>
      `;
    }

    if (this.dom.dataNotice) {
      this.dom.dataNotice.className = 'data-notice-banner provenance-banner';
      this.dom.dataNotice.innerHTML = `
        <span class="notice-icon">✓</span>
        <span class="notice-text">
          <strong>VERIFIED REAL DEM:</strong> Active 3D terrain derived from official Rhineland-Palatinate DGM1 bare-earth LiDAR data (${meta.resolution}, ${meta.verticalDatum}). ${meta.attribution}
        </span>
        <button class="notice-close" id="btn-close-notice" title="Dismiss notice">✕</button>
      `;

      const newCloseBtn = document.getElementById('btn-close-notice');
      if (newCloseBtn) {
        newCloseBtn.addEventListener('click', () => {
          this.dom.dataNotice.classList.add('hidden');
        });
      }
    }
  }

  /**
   * Programmatically or interactively select a feature and show its detail panel.
   * @param {Object|null} feat
   */
  selectFeature(feat) {
    if (!feat) {
      this.deselectFeature();
      return;
    }
    this.selectedFeature = feat;
    if (feat.kind === 'building' && feat.id) {
      this.overlayManager?.highlightBuilding(feat.id);
    } else {
      this.overlayManager?.clearBuildingHighlight();
    }
    this.showFeatureDetails(feat);
  }

  /**
   * Deselect active feature, clear highlights, and close the detail panel.
   */
  deselectFeature() {
    this.selectedFeature = null;
    this.overlayManager?.clearBuildingHighlight();
    this.hideFeatureDetails();
  }

  /**
   * Hide the feature detail panel.
   */
  hideFeatureDetails() {
    if (this.dom.hudFeatureDetails) {
      this.dom.hudFeatureDetails.classList.add('hidden');
    }
  }

  /**
   * Display clean, organized details when an item on the 3D map is clicked.
   * Supports: Buildings, Roads, Facilities, Flood-Affected Areas, Clusters, Proposed Sites.
   * @param {Object} feat
   */
  showFeatureDetails(feat) {
    if (!this.dom.hudFeatureDetails || !this.dom.detailPanelBody) return;

    this.dom.hudFeatureDetails.classList.remove('hidden');

    if (feat.kind === 'building') {
      const rk = feat.riskEvaluation;
      const isHistoricalFlooded = feat.flooded;
      const modeledWater = typeof feat.modeledWaterElev === 'number'
        ? feat.modeledWaterElev
        : (this.floodWaterManager ? Math.round(this.floodWaterManager.getWaterElevationAt(feat.center.x, feat.center.z) * 100) / 100 : null);

      if (rk) {
        const exp = rk.exposure || {};
        const acc = rk.access || {};
        const risk = rk.risk || {};
        const sub = risk.subScores || { floodExposure: 0, roadAccess: 0, emergencyService: 0 };
        const tier = risk.priorityTier || 'LOW';
        const totalScore = risk.totalScore ?? 0;
        const depth = typeof exp.waterDepth === 'number' ? exp.waterDepth : (typeof feat.currentWaterDepth === 'number' ? feat.currentWaterDepth : 0);
        const isUnknown = risk.isUnknown || exp.category === 'UNKNOWN';

        let tagClass = 'success';
        if (tier === 'CRITICAL' || tier === 'HIGH') tagClass = 'danger';
        else if (tier === 'MODERATE') tagClass = 'warning';
        else if (tier === 'UNKNOWN') tagClass = 'info';

        if (this.dom.detailPanelTitle) this.dom.detailPanelTitle.textContent = `STRUCTURE ${feat.id}`;
        if (this.dom.detailPanelBadge) {
          this.dom.detailPanelBadge.className = `status-pill ${tagClass}`;
          this.dom.detailPanelBadge.textContent = `${tier} (${totalScore}/100)`;
        }

        const footprintPercent = Math.round((exp.affectedRatio || (depth > 0.05 ? 1.0 : 0.0)) * 100);
        const accessLabel = acc.status === 'route_lost'
          ? '<span class="chip-access-lost font-mono font-bold">ROUTE LOST (Flood Cut-Off)</span>'
          : acc.status === 'disconnected_in_source'
          ? '<span class="chip-access-source font-mono">DISCONNECTED IN SOURCE</span>'
          : acc.status === 'access_degraded'
          ? '<span class="chip-access-degraded font-mono">ACCESS DEGRADED</span>'
          : acc.status === 'unknown'
          ? '<span class="chip-road-unknown font-mono">UNKNOWN ACCESS</span>'
          : '<span class="chip-access-connected font-mono">CONNECTED</span>';

        const shelterLabel = acc.canReachShelter
          ? `<span class="chip-prop-viable font-mono">${acc.nearestShelter?.name || 'Shelter'} (${(acc.shelterRouteStatus || 'DRY').toUpperCase()})</span>`
          : '<span class="chip-prop-flooded font-mono font-bold">NO REACHABLE SHELTER</span>';

        const warningHtml = isUnknown ? `
          <div class="detail-alert-box warning">
            ⚠️ <strong>DATA QUALITY WARNING:</strong> Missing or NoData DGM1 bare-earth DEM elevation at structure centroid. Data uncertainty penalty applied. Not treated as safe.
          </div>
        ` : '';

        this.dom.detailPanelBody.innerHTML = `
          <div class="detail-card">
            ${warningHtml}

            <!-- Section 1: Overview -->
            <div class="detail-section">
              <div class="detail-section-title">OVERVIEW</div>
              <div class="detail-meta-grid">
                <div class="detail-row">
                  <span class="detail-label">Structure ID:</span>
                  <span class="detail-val font-mono font-bold">${feat.id}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Footprint Area:</span>
                  <span class="detail-val font-mono">${feat.areaSqM} m²</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Ground Base Elev:</span>
                  <span class="detail-val font-mono">${isUnknown ? 'NoData' : `${feat.baseElevationM} m MSL`}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Building Height:</span>
                  <span class="detail-val">${feat.heightM || 7.0} m (~2 storeys)</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">SpaceNet 8 (Jul 2021):</span>
                  <span class="detail-val">${isHistoricalFlooded ? '<span class="text-rose font-bold">Flooded Inundation</span>' : 'Dry / Non-Flooded'}</span>
                </div>
              </div>
            </div>

            <!-- Section 2: Flood Exposure -->
            <div class="detail-section">
              <div class="detail-section-title">FLOOD EXPOSURE</div>
              <div class="detail-meta-grid">
                <div class="detail-row">
                  <span class="detail-label">Ground Water Depth:</span>
                  <span class="detail-val font-mono ${depth > 0.05 ? 'text-amber font-bold' : ''}">${isUnknown ? 'Unknown DEM' : depth > 0.05 ? `${depth.toFixed(2)} m` : '0.00 m (Dry)'}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Exposure Category:</span>
                  <span class="detail-val font-mono">${exp.category || (depth >= 1.5 ? 'DEEP' : depth >= 0.5 ? 'MODERATE' : depth > 0.05 ? 'SHALLOW' : 'UNAFFECTED')}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Footprint Flooded:</span>
                  <span class="detail-val font-mono">${isUnknown ? 'Indeterminate' : `${footprintPercent}%`}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Water Surface Elev:</span>
                  <span class="detail-val font-mono">${modeledWater !== null ? `${modeledWater.toFixed(2)} m MSL` : 'Baseflow'}</span>
                </div>
              </div>
            </div>

            <!-- Section 3: Risk Ranking & Subscores -->
            <div class="detail-section">
              <div class="detail-section-title">RISK EVALUATION (${totalScore}/100)</div>
              <div class="risk-subscores-grid">
                <div class="subscore-cell">
                  <div class="subscore-lbl">Flood Exp</div>
                  <div class="subscore-val ${sub.floodExposure >= 35 ? 'text-rose' : sub.floodExposure >= 20 ? 'text-amber' : 'text-emerald'}">${sub.floodExposure}/50</div>
                  <div class="subscore-sub">${exp.category || 'DRY'}</div>
                </div>
                <div class="subscore-cell border-x">
                  <div class="subscore-lbl">Road Access</div>
                  <div class="subscore-val ${sub.roadAccess >= 20 ? 'text-rose' : sub.roadAccess >= 12 ? 'text-amber' : 'text-emerald'}">${sub.roadAccess}/25</div>
                  <div class="subscore-sub">${acc.status ? acc.status.replace(/_/g, ' ') : 'connected'}</div>
                </div>
                <div class="subscore-cell">
                  <div class="subscore-lbl">Services</div>
                  <div class="subscore-val ${sub.emergencyService >= 20 ? 'text-rose' : sub.emergencyService >= 12 ? 'text-amber' : 'text-emerald'}">${sub.emergencyService}/25</div>
                  <div class="subscore-sub">${acc.canReachShelter ? 'Reachable' : 'Isolated'}</div>
                </div>
              </div>
              <div class="detail-meta-grid" style="margin-top:6px;">
                <div class="detail-row">
                  <span class="detail-label">Risk Justification:</span>
                  <span class="detail-val text-muted font-mono" style="font-size:10px;line-height:1.3;">${risk.explanation || 'Evaluated scenario conditions'}</span>
                </div>
              </div>
            </div>

            <!-- Section 4: Accessibility & Services -->
            <div class="detail-section">
              <div class="detail-section-title">ACCESSIBILITY & SERVICES</div>
              <div class="detail-meta-grid">
                <div class="detail-row">
                  <span class="detail-label">Road Network Access:</span>
                  <span class="detail-val">${accessLabel}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Nearest Shelter:</span>
                  <span class="detail-val">${shelterLabel}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Hospital Route:</span>
                  <span class="detail-val text-muted">⚠️ No verified hospital in source data</span>
                </div>
              </div>
            </div>

            <!-- Section 5: Data Quality & Disclaimers -->
            <div class="detail-section data-quality-notice">
              <div class="detail-disclaimer">
                ⚠️ Conceptual decision-support indicator only. Ground-contact depth does not establish interior flooding, structural collapse, or calibrated life-safety probability. All facilities are simulated and unverified.
              </div>
            </div>

            <!-- Section 6: Action Buttons -->
            <div class="detail-actions">
              <button class="detail-action-btn btn-shelter" id="btn-card-shelter" ${!acc.canReachShelter ? 'disabled style="opacity:0.5;cursor:not-allowed;"' : ''}>🏃 Evac to Shelter</button>
              <button class="detail-action-btn btn-hospital" id="btn-card-hospital">🏥 Route to Hospital</button>
            </div>
          </div>`;

        const cardShelterBtn = document.getElementById('btn-card-shelter');
        if (cardShelterBtn && acc.canReachShelter) cardShelterBtn.addEventListener('click', () => this.executeRoute('shelter'));
        const cardHospBtn = document.getElementById('btn-card-hospital');
        if (cardHospBtn) cardHospBtn.addEventListener('click', () => this.executeRoute('hospital'));

      } else {
        // Fallback for buildings without full risk evaluation
        const depth = typeof feat.currentWaterDepth === 'number'
          ? feat.currentWaterDepth
          : (modeledWater !== null ? Math.max(0, Math.round((modeledWater - feat.baseElevationM) * 100) / 100) : 0);
        const isSimFlooded = depth > 0.05;

        let depthBadge = 'DRY';
        let tagClass = 'success';
        if (depth >= 1.5) {
          depthBadge = `DEEP (${depth.toFixed(2)}m)`;
          tagClass = 'danger';
        } else if (depth >= 0.5) {
          depthBadge = `MODERATE (${depth.toFixed(2)}m)`;
          tagClass = 'danger';
        } else if (depth > 0.05) {
          depthBadge = `SHALLOW (${depth.toFixed(2)}m)`;
          tagClass = 'info';
        }

        if (this.dom.detailPanelTitle) this.dom.detailPanelTitle.textContent = `STRUCTURE ${feat.id}`;
        if (this.dom.detailPanelBadge) {
          this.dom.detailPanelBadge.className = `status-pill ${tagClass}`;
          this.dom.detailPanelBadge.textContent = depthBadge;
        }

        this.dom.detailPanelBody.innerHTML = `
          <div class="detail-card">
            <div class="detail-section">
              <div class="detail-section-title">OVERVIEW</div>
              <div class="detail-meta-grid">
                <div class="detail-row">
                  <span class="detail-label">Structure ID:</span>
                  <span class="detail-val font-mono font-bold">${feat.id}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Footprint Area:</span>
                  <span class="detail-val font-mono">${feat.areaSqM} m²</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Ground Base Elev:</span>
                  <span class="detail-val font-mono">${feat.baseElevationM} m MSL</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Building Height:</span>
                  <span class="detail-val">${feat.heightM} m (2 storeys)</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">SpaceNet 8 (Jul 2021):</span>
                  <span class="detail-val">${isHistoricalFlooded ? '<span class="text-rose font-bold">Flooded</span>' : 'Normal'}</span>
                </div>
              </div>
            </div>

            <div class="detail-section">
              <div class="detail-section-title">FLOOD EXPOSURE</div>
              <div class="detail-meta-grid">
                <div class="detail-row">
                  <span class="detail-label">Modeled Water Depth:</span>
                  <span class="detail-val ${isSimFlooded ? 'text-amber font-bold' : ''}">${depth > 0.05 ? `${depth.toFixed(2)} m` : '0.00 m (Dry)'}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Water Surface Elev:</span>
                  <span class="detail-val font-mono">${modeledWater !== null ? `${modeledWater.toFixed(2)} m MSL` : 'Baseflow'}</span>
                </div>
              </div>
            </div>

            <div class="detail-section data-quality-notice">
              <div class="detail-disclaimer">
                ⚠️ Ground-contact depth only. Does not establish interior flooding, structural damage, or occupant risk.
              </div>
            </div>

            <div class="detail-actions">
              <button class="detail-action-btn btn-shelter" id="btn-card-shelter">🏃 Evac to Shelter</button>
              <button class="detail-action-btn btn-hospital" id="btn-card-hospital">🏥 Route to Hospital</button>
            </div>
          </div>`;

        const cardShelterBtn = document.getElementById('btn-card-shelter');
        if (cardShelterBtn) cardShelterBtn.addEventListener('click', () => this.executeRoute('shelter'));
        const cardHospBtn = document.getElementById('btn-card-hospital');
        if (cardHospBtn) cardHospBtn.addEventListener('click', () => this.executeRoute('hospital'));
      }

    } else if (feat.kind === 'road') {
      const isHistoricalFlooded = feat.flooded;
      const depth = typeof feat.maxWaterDepth === 'number' ? feat.maxWaterDepth : 0;
      const normalizedStatus = (feat.status || (depth > 0.15 ? 'impassable' : depth > 0 ? 'exposed' : 'unaffected')).toLowerCase();

      let tagClass = 'success';
      let tagText = 'UNAFFECTED';
      if (normalizedStatus === 'impassable' || feat.passabilityStatus === 'submerged') {
        tagClass = 'danger';
        tagText = `IMPASSABLE (${depth.toFixed(2)}m)`;
      } else if (normalizedStatus === 'exposed' || feat.passabilityStatus === 'waterlogged') {
        tagClass = 'warning';
        tagText = `EXPOSED (${depth.toFixed(2)}m)`;
      } else if (normalizedStatus === 'unknown') {
        tagClass = 'info';
        tagText = 'UNKNOWN ELEV';
      }

      if (this.dom.detailPanelTitle) this.dom.detailPanelTitle.textContent = `ROAD ${feat.id}`;
      if (this.dom.detailPanelBadge) {
        this.dom.detailPanelBadge.className = `status-pill ${tagClass}`;
        this.dom.detailPanelBadge.textContent = tagText;
      }

      const elevRangeStr = feat.minElevation !== null && feat.minElevation !== undefined
        ? `${feat.minElevation.toFixed(1)}m – ${feat.maxElevation.toFixed(1)}m MSL`
        : (feat.points && feat.points.length ? `${Math.round(feat.points[0].y)}m – ${Math.round(feat.points[feat.points.length - 1].y)}m MSL` : 'N/A');

      const exposedStr = typeof feat.exposedLengthMeters === 'number' && feat.exposedLengthMeters > 0
        ? `${feat.exposedLengthMeters.toFixed(1)} m (${Math.round((feat.exposedRatio || 0) * 100)}%)`
        : '0.0 m (0% - Dry)';

      const componentStr = feat.componentId
        ? `Component #${feat.componentId} (${feat.componentSize || 1} connected roads)`
        : 'Segment isolated in source';

      const statusReasonStr = feat.statusReason || (
        normalizedStatus === 'impassable'
          ? `Estimated water depth (${depth.toFixed(2)}m) exceeds 0.15m conservative threshold`
          : normalizedStatus === 'exposed'
          ? `Estimated water depth (${depth.toFixed(2)}m) detected, below 0.15m threshold`
          : 'No positive water depth detected along road geometry (dry)'
      );

      this.dom.detailPanelBody.innerHTML = `
        <div class="detail-card">
          <div class="detail-section">
            <div class="detail-section-title">OVERVIEW</div>
            <div class="detail-meta-grid">
              <div class="detail-row">
                <span class="detail-label">Road ID:</span>
                <span class="detail-val font-mono font-bold">${feat.id}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Segment Length:</span>
                <span class="detail-val font-mono">${feat.lengthMeters} m</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Elevation Range:</span>
                <span class="detail-val font-mono">${elevRangeStr}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">SpaceNet 8 (Jul 2021):</span>
                <span class="detail-val">${isHistoricalFlooded ? '<span class="text-rose font-bold">Flooded Cutoff</span>' : 'Passable Route'}</span>
              </div>
            </div>
          </div>

          <div class="detail-section">
            <div class="detail-section-title">FLOOD STATUS & PASSABILITY</div>
            <div class="detail-meta-grid">
              <div class="detail-row">
                <span class="detail-label">Classification:</span>
                <span class="detail-val ${normalizedStatus === 'impassable' ? 'text-rose font-bold' : normalizedStatus === 'exposed' ? 'text-amber font-bold' : 'text-emerald'}">${normalizedStatus.toUpperCase()}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Max Est. Depth:</span>
                <span class="detail-val ${depth > 0 ? 'text-amber font-bold' : ''}">${depth > 0 ? `${depth.toFixed(2)} m` : '0.00 m (Dry)'}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Exposed Length:</span>
                <span class="detail-val">${exposedStr}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Assessment Reason:</span>
                <span class="detail-val text-muted" style="font-size:10px;line-height:1.3;">${statusReasonStr}</span>
              </div>
            </div>
          </div>

          <div class="detail-section">
            <div class="detail-section-title">TOPOLOGY & CONNECTIVITY</div>
            <div class="detail-meta-grid">
              <div class="detail-row">
                <span class="detail-label">Network Component:</span>
                <span class="detail-val font-mono">${componentStr}</span>
              </div>
            </div>
          </div>

          <div class="detail-section data-quality-notice">
            <div class="detail-disclaimer">
              ⚠️ Model-estimated terrain exposure based on DGM1 bare-earth LiDAR DEM. Does not predict water velocity, debris obstruction, or bridge structural integrity.
            </div>
          </div>

          <div class="detail-actions">
            <button class="detail-action-btn btn-shelter" id="btn-card-shelter-rd">🏃 Evac from Road</button>
            <button class="detail-action-btn btn-hospital" id="btn-card-hospital-rd">🏥 Route to Hospital</button>
          </div>
        </div>`;

      const cardShelterRd = document.getElementById('btn-card-shelter-rd');
      if (cardShelterRd) cardShelterRd.addEventListener('click', () => this.executeRoute('shelter'));
      const cardHospRd = document.getElementById('btn-card-hospital-rd');
      if (cardHospRd) cardHospRd.addEventListener('click', () => this.executeRoute('hospital'));

    } else if (feat.kind === 'facility') {
      const sev = feat.shelterEvaluation;
      let tagClass = 'success';
      let tagText = 'OPERATIONAL';

      const status = sev ? sev.accessStatus : (feat.accessibilityStatus || 'operational');
      const isSiteInundated = sev ? sev.isSiteInundated : (typeof feat.siteWaterDepth === 'number' && feat.siteWaterDepth > 0.05);
      const depth = sev ? (sev.siteWaterDepth || 0) : (typeof feat.siteWaterDepth === 'number' ? feat.siteWaterDepth : 0);
      const gElev = sev ? sev.groundElevation : feat.elevationM;
      const wElev = sev ? sev.waterElevation : (this.floodWaterManager ? Math.round(this.floodWaterManager.currentWaterLevel * 10) / 10 : 124.0);

      if (isSiteInundated) {
        tagClass = 'danger';
        tagText = 'SITE INUNDATED';
      } else if (status === 'isolated') {
        tagClass = 'info';
        tagText = 'ISOLATED BY ROADS';
      } else if (status === 'exposed') {
        tagClass = 'warning';
        tagText = 'CORRIDOR EXPOSED';
      } else if (status === 'disconnected') {
        tagClass = 'info';
        tagText = 'DISCONNECTED';
      } else if (status === 'unknown') {
        tagClass = 'info';
        tagText = 'UNKNOWN ELEV';
      }

      if (this.dom.detailPanelTitle) this.dom.detailPanelTitle.textContent = feat.name || 'EMERGENCY FACILITY';
      if (this.dom.detailPanelBadge) {
        this.dom.detailPanelBadge.className = `status-pill ${tagClass}`;
        this.dom.detailPanelBadge.textContent = tagText;
      }

      const provenanceStr = '<span class="chip-prop-flooded font-mono" style="background:rgba(239,68,68,0.15);color:#fca5a5;padding:2px 6px;border-radius:4px;font-size:10px;">SIMULATED (UNVERIFIED)</span>';

      const siteStatusStr = isSiteInundated
        ? `<span class="chip-prop-flooded font-mono font-bold">SUBMERGED (${depth.toFixed(2)}m depth)</span>`
        : `<span class="chip-prop-viable font-mono font-bold">DRY (+${gElev !== null ? (gElev - wElev).toFixed(1) : 0}m clearance)</span>`;

      const corridorStr = status === 'isolated'
        ? '<span class="chip-access-lost font-mono font-bold">ISOLATED (Connecting roads submerged)</span>'
        : status === 'exposed'
        ? '<span class="chip-access-degraded font-mono">EXPOSED (Shallow water &lt;0.15m)</span>'
        : status === 'disconnected'
        ? '<span class="chip-access-source font-mono">DISCONNECTED FROM ROADS</span>'
        : '<span class="chip-access-connected font-mono">DRY PASSABLE CORRIDOR</span>';

      this.dom.detailPanelBody.innerHTML = `
        <div class="detail-card">
          <div class="detail-section">
            <div class="detail-section-title">OVERVIEW</div>
            <div class="detail-meta-grid">
              <div class="detail-row">
                <span class="detail-label">Facility ID:</span>
                <span class="detail-val font-mono">${feat.id}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Facility Type:</span>
                <span class="detail-val font-mono">${(feat.type || 'shelter').toUpperCase()}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Dataset Provenance:</span>
                <span class="detail-val">${provenanceStr}</span>
              </div>
            </div>
          </div>

          <div class="detail-section">
            <div class="detail-section-title">FLOOD EXPOSURE</div>
            <div class="detail-meta-grid">
              <div class="detail-row">
                <span class="detail-label">Site Inundation:</span>
                <span class="detail-val">${siteStatusStr}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Ground / Water MSL:</span>
                <span class="detail-val font-mono">${gElev !== null ? `${gElev.toFixed(1)}m` : 'NoData'} / ${wElev.toFixed(1)}m</span>
              </div>
            </div>
          </div>

          <div class="detail-section">
            <div class="detail-section-title">ACCESSIBILITY</div>
            <div class="detail-meta-grid">
              <div class="detail-row">
                <span class="detail-label">Road Corridor:</span>
                <span class="detail-val">${corridorStr}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Nearby Road Node:</span>
                <span class="detail-val font-mono text-muted">${sev?.roadNodeId ? `Node ${sev.roadNodeId}` : feat.nearbyRoadStatus || 'Evaluated'}</span>
              </div>
            </div>
          </div>

          <div class="detail-section data-quality-notice">
            <div class="detail-disclaimer">
              ⚠️ SIMULATED EMERGENCY FACILITY: Unverified facility record from research scenario dataset. Not an officially verified municipal shelter or hospital. Never treated as verified safety infrastructure.
            </div>
          </div>

          <div class="detail-actions">
            <button class="detail-action-btn btn-shelter" id="btn-card-shelter-fac" ${isSiteInundated ? 'disabled style="opacity:0.5;cursor:not-allowed;"' : ''}>🏃 Route to this Facility</button>
          </div>
        </div>`;

      const cardFacBtn = document.getElementById('btn-card-shelter-fac');
      if (cardFacBtn && !isSiteInundated) {
        cardFacBtn.addEventListener('click', () => {
          this.overlayManager?.routeToNearestDestination(this.resolveOrigin(), [{
            x: feat.center.x,
            z: feat.center.z,
            id: feat.id,
            name: feat.name,
            type: feat.type || 'shelter',
            provenance: 'simulated',
          }], { routeType: 'shelter' });
        });
      }

    } else if (feat.kind === 'flood-extent') {
      if (this.dom.detailPanelTitle) this.dom.detailPanelTitle.textContent = 'HISTORICAL FLOOD EXTENT';
      if (this.dom.detailPanelBadge) {
        this.dom.detailPanelBadge.className = 'status-pill danger';
        this.dom.detailPanelBadge.textContent = 'JULY 2021 DISASTER';
      }

      this.dom.detailPanelBody.innerHTML = `
        <div class="detail-card">
          <div class="detail-section">
            <div class="detail-section-title">EVENT OVERVIEW</div>
            <div class="detail-meta-grid">
              <div class="detail-row">
                <span class="detail-label">Event:</span>
                <span class="detail-val font-bold text-rose">Ahr Valley Catastrophic Flash Flood</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Date of Disaster:</span>
                <span class="detail-val font-mono">14–15 July 2021</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Study Location:</span>
                <span class="detail-val">Dernau, Rhineland-Palatinate (DE)</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Primary Source:</span>
                <span class="detail-val font-mono text-cyan">Copernicus EMS (EMSR517) / SpaceNet 8</span>
              </div>
            </div>
          </div>

          <div class="detail-section">
            <div class="detail-section-title">OBSERVED MUNICIPAL IMPACT</div>
            <div class="detail-meta-grid">
              <div class="detail-row">
                <span class="detail-label">Inundated Buildings:</span>
                <span class="detail-val font-mono font-bold text-amber">485 of 759 structures (~64%)</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Flooded Cut-Off Roads:</span>
                <span class="detail-val font-mono font-bold text-rose">42 of 117 road segments (~36%)</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Observed Crest Elev:</span>
                <span class="detail-val font-mono">~130.0m – 135.0m MSL</span>
              </div>
            </div>
          </div>

          <div class="detail-section data-quality-notice">
            <div class="detail-disclaimer">
              ℹ️ Verified disaster extent delineated from multi-temporal Sentinel-1 SAR and Sentinel-2 optical satellite imagery, aerial ortho-imagery, and official Copernicus Emergency Management Service crisis maps.
            </div>
          </div>
        </div>`;

    } else if (feat.kind === 'flood-water') {
      const curLvl = feat.waterLevel ?? (this.floodWaterManager ? this.floodWaterManager.currentWaterLevel : 124.0);
      const isExtreme = curLvl >= 132.0;

      if (this.dom.detailPanelTitle) this.dom.detailPanelTitle.textContent = 'SIMULATED FLOOD SURFACE';
      if (this.dom.detailPanelBadge) {
        this.dom.detailPanelBadge.className = `status-pill ${isExtreme ? 'danger' : 'info'}`;
        this.dom.detailPanelBadge.textContent = `${curLvl.toFixed(2)} m MSL`;
      }

      this.dom.detailPanelBody.innerHTML = `
        <div class="detail-card">
          <div class="detail-section">
            <div class="detail-section-title">SIMULATION SCENARIO</div>
            <div class="detail-meta-grid">
              <div class="detail-row">
                <span class="detail-label">Water Stage:</span>
                <span class="detail-val font-mono font-bold text-cyan">${curLvl.toFixed(2)} m MSL</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Longitudinal Profile:</span>
                <span class="detail-val">${feat.profileMode || 'Slope-Aware (Ahr Thalweg Monotonic Gradient)'}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Hydraulic Connectivity:</span>
                <span class="detail-val">${feat.hydraulicallyConnected || 'Connected to Riverbed'}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Study Valley Bounds:</span>
                <span class="detail-val font-mono">120.00m (Downstream) – 155.00m (Crest)</span>
              </div>
            </div>
          </div>

          <div class="detail-section data-quality-notice">
            <div class="detail-disclaimer">
              ⚠️ CONCEPTUAL TERRAIN MASK: Dynamic elevation-aware surface calibrated against Rhineland-Palatinate DGM1 bare-earth LiDAR DEM. Not a 2D hydrodynamic Saint-Venant simulation. Does not model time-dependent wave propagation, breach dynamics, or flow velocity.
            </div>
          </div>
        </div>`;

    } else if (feat.kind === 'cluster') {
      const cluster = feat.cluster || {};
      const exp = cluster.exposureCounts || {};
      const dominant = cluster.dominantExposure || 'LOW';
      const isConnected = cluster.isConnectedToRoads !== false;

      let tagClass = 'warning';
      if (dominant === 'CRITICAL' || dominant === 'HIGH') tagClass = 'danger';
      else if (dominant === 'MODERATE') tagClass = 'warning';
      else if (dominant === 'LOW') tagClass = 'info';

      if (this.dom.detailPanelTitle) this.dom.detailPanelTitle.textContent = `CLUSTER ${feat.name || cluster.id}`;
      if (this.dom.detailPanelBadge) {
        this.dom.detailPanelBadge.className = `status-pill ${tagClass}`;
        this.dom.detailPanelBadge.textContent = `CLUSTER (${dominant})`;
      }

      const roadAccessBadge = isConnected
        ? `<span class="chip-prop-viable font-bold font-mono">CONNECTED (${cluster.nearestRoadNode ? cluster.nearestRoadNode.id : 'Active'})</span>`
        : `<span class="chip-prop-flooded font-bold font-mono">UNCONNECTED (&gt;160m)</span>`;

      const breakdownHtml = `
        <div class="exposure-breakdown-chips">
          ${exp.CRITICAL ? `<span class="chip-cluster-crit font-mono">Crit: ${exp.CRITICAL}</span>` : ''}
          ${exp.HIGH ? `<span class="chip-cluster-high font-mono">High: ${exp.HIGH}</span>` : ''}
          ${exp.MODERATE ? `<span class="chip-cluster-mod font-mono">Mod: ${exp.MODERATE}</span>` : ''}
          ${exp.LOW ? `<span class="chip-cluster-low font-mono" style="background:rgba(59,130,246,0.2);color:#93c5fd;padding:2px 6px;border-radius:4px;font-size:10px;">Low: ${exp.LOW}</span>` : ''}
          ${exp.UNKNOWN ? `<span class="chip-road-unknown font-mono" style="background:rgba(156,163,175,0.2);color:#d1d5db;padding:2px 6px;border-radius:4px;font-size:10px;">Unk: ${exp.UNKNOWN}</span>` : ''}
        </div>
      `;

      this.dom.detailPanelBody.innerHTML = `
        <div class="detail-card">
          <div class="detail-section">
            <div class="detail-section-title">CLUSTER OVERVIEW</div>
            <div class="detail-meta-grid">
              <div class="detail-row">
                <span class="detail-label">Structures Count:</span>
                <span class="detail-val font-mono font-bold">${cluster.buildingCount || 0} buildings</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Estimated Occupancy:</span>
                <span class="detail-val font-mono font-bold text-amber">${cluster.estimatedPopulation || 0} persons</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Cluster Radius:</span>
                <span class="detail-val font-mono">${Math.round(cluster.radiusM || 0)} m</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Road Network Access:</span>
                <span class="detail-val">${roadAccessBadge}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Access Assessment:</span>
                <span class="detail-val text-muted">${cluster.originStatusText || 'Evaluated'}</span>
              </div>
            </div>
          </div>

          <div class="detail-section">
            <div class="detail-section-title">EXPOSURE BREAKDOWN</div>
            <div style="margin-top:4px;">${breakdownHtml}</div>
          </div>

          <div class="detail-section data-quality-notice">
            <div class="detail-disclaimer">
              ${isConnected
                ? 'ℹ️ Evacuation route calculated from verified road access node near cluster boundary.'
                : '⚠️ Approximate / unconnected origin. Distance to verified road network exceeds 160m threshold. No road connection fabricated.'}
            </div>
          </div>

          <div class="detail-actions">
            <button class="detail-action-btn btn-shelter" id="btn-card-shelter-cl" ${!isConnected ? 'disabled style="opacity:0.5;cursor:not-allowed;"' : ''}>🏃 Evac Cluster to Shelter</button>
            <button class="detail-action-btn btn-hospital" id="btn-card-hospital-cl" ${!isConnected ? 'disabled style="opacity:0.5;cursor:not-allowed;"' : ''}>🏥 Route Cluster to Hospital</button>
          </div>
        </div>`;

      const cardShelterCl = document.getElementById('btn-card-shelter-cl');
      if (cardShelterCl && isConnected) cardShelterCl.addEventListener('click', () => this.executeRoute('shelter'));
      const cardHospCl = document.getElementById('btn-card-hospital-cl');
      if (cardHospCl && isConnected) cardHospCl.addEventListener('click', () => this.executeRoute('hospital'));

    } else if (feat.kind === 'proposed-site') {
      const ev = feat.evaluation || {};
      const score = typeof ev.score === 'number' ? ev.score : 0;
      const isViable = ev.viable;
      const isFlooded = ev.isInundated;

      let tagClass = 'success';
      let tagText = `VIABLE (${score}/100)`;
      if (isFlooded) {
        tagClass = 'danger';
        tagText = 'INUNDATED (0/100)';
      } else if (!isViable) {
        tagClass = 'warning';
        tagText = `UNVIABLE (${score}/100)`;
      }

      if (this.dom.detailPanelTitle) this.dom.detailPanelTitle.textContent = ev.name || feat.name || 'PROPOSED SITE';
      if (this.dom.detailPanelBadge) {
        this.dom.detailPanelBadge.className = `status-pill ${tagClass}`;
        this.dom.detailPanelBadge.textContent = tagText;
      }

      const bd = ev.scoreBreakdown || { clearanceScore: 0, roadScore: 0, slopeScore: 0, proximityScore: 0 };
      const breakdownText = `Clearance: ${bd.clearanceScore}/40 · Road: ${bd.roadScore}/30 · Slope: ${bd.slopeScore}/15 · Proximity: ${bd.proximityScore}/15`;

      const clearanceStr = isFlooded
        ? `<span class="chip-prop-flooded font-mono font-bold">SUBMERGED (${Math.abs(ev.clearanceAboveWater || 0).toFixed(1)}m below water)</span>`
        : `<span class="chip-prop-viable font-mono font-bold">+${(ev.clearanceAboveWater || 0).toFixed(1)}m above water</span>`;

      const roadStatusStr = ev.connectedToRoad
        ? `<span class="chip-prop-viable font-mono">CONNECTED (${Math.round(ev.roadDistanceM || 0)}m)</span>`
        : `<span class="chip-prop-flooded font-mono">DISCONNECTED</span>`;

      this.dom.detailPanelBody.innerHTML = `
        <div class="detail-card">
          <div class="detail-section">
            <div class="detail-section-title">SITE SUITABILITY (${score}/100)</div>
            <div class="detail-meta-grid">
              <div class="detail-row">
                <span class="detail-label">Designated Role:</span>
                <span class="detail-val font-mono">${ev.type === 'shelter' ? 'Proposed Shelter Candidate' : 'Proposed Medical Response Point'}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Est. Evacuee Capacity:</span>
                <span class="detail-val font-mono font-bold">${ev.capacityEst || 0} persons</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Water Clearance:</span>
                <span class="detail-val">${clearanceStr}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Ground / Water MSL:</span>
                <span class="detail-val font-mono">${(ev.groundElevation || 0).toFixed(1)}m / ${(ev.waterElevation || 0).toFixed(1)}m</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Terrain Slope:</span>
                <span class="detail-val font-mono">${(ev.slopeDeg || 0).toFixed(1)}° (${ev.slopeDeg < 5 ? 'Gentle' : ev.slopeDeg < 12 ? 'Moderate' : 'Steep'})</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Road Network Access:</span>
                <span class="detail-val">${roadStatusStr}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Score Breakdown:</span>
                <span class="detail-val text-muted font-mono" style="font-size:10px;">${breakdownText}</span>
              </div>
            </div>
          </div>

          <div class="detail-section data-quality-notice">
            <div class="detail-disclaimer">
              ⚠️ PROPOSED CANDIDATE ONLY: Unverified conceptual site for scenario modeling. Not an officially approved municipal emergency facility.
            </div>
          </div>

          <div class="detail-actions">
            <button class="detail-action-btn btn-shelter" id="btn-card-route-prop" ${!isViable ? 'disabled style="opacity:0.5;cursor:not-allowed;"' : ''}>🏃 Route to Candidate Site</button>
          </div>
        </div>`;

      const cardRouteProp = document.getElementById('btn-card-route-prop');
      if (cardRouteProp && isViable) {
        cardRouteProp.addEventListener('click', () => {
          this.routeToCandidateSite(ev);
        });
      }

    } else {
      // Generic fallback for any other selectable map items
      const title = feat.name || feat.id || 'MAP FEATURE';
      if (this.dom.detailPanelTitle) this.dom.detailPanelTitle.textContent = title;
      if (this.dom.detailPanelBadge) {
        this.dom.detailPanelBadge.className = 'status-pill info';
        this.dom.detailPanelBadge.textContent = (feat.kind || 'FEATURE').toUpperCase();
      }

      const rows = Object.entries(feat)
        .filter(([k, v]) => !['boxes', 'points', 'vertexStart', 'vertexCount', 'center', 'bounds', 'kind'].includes(k) && typeof v !== 'function' && typeof v !== 'object')
        .map(([k, v]) => `
          <div class="detail-row">
            <span class="detail-label">${k}:</span>
            <span class="detail-val font-mono">${v}</span>
          </div>
        `).join('');

      this.dom.detailPanelBody.innerHTML = `
        <div class="detail-card">
          <div class="detail-section">
            <div class="detail-section-title">ATTRIBUTES</div>
            <div class="detail-meta-grid">
              ${rows || '<div class="detail-row"><span class="detail-label">Status:</span><span class="detail-val">Selected</span></div>'}
            </div>
          </div>
        </div>`;
    }
  }

  /**
   * Route to candidate site as destination.
   * @param {Object} candidateEval
   */
  routeToCandidateSite(candidateEval) {
    if (!this.overlayManager || !candidateEval) return;
    const origin = this.resolveOrigin();
    const dest = [{
      x: candidateEval.position.x,
      z: candidateEval.position.z,
      id: candidateEval.id,
      name: `Candidate: ${candidateEval.name}`,
      type: 'shelter',
      provenance: 'proposed',
    }];
    this.overlayManager.routeToNearestDestination(origin, dest, { routeType: 'shelter' });
  }

  /**
   * Resolve an origin coordinate for routing from selected feature or fallback location.
   */
  resolveOrigin() {
    if (this.selectedFeature) {
      const f = this.selectedFeature;
      if (f.center) {
        return { x: f.center.x, z: f.center.z, id: f.id, name: f.name || `Structure ${f.id}` };
      }
      if (f.points && f.points.length > 0) {
        return { x: f.points[0].x, z: f.points[0].z, id: f.id, name: `Road ${f.id}` };
      }
    }
    // Default origin: Dernau residential core
    return { x: -150.0, z: 50.0, id: 'origin-default', name: 'Dernau Residential Core' };
  }

  /**
   * Execute routing to nearest reachable shelter or hospital.
   * @param {'shelter'|'hospital'} routeType
   */
  executeRoute(routeType) {
    if (!this.overlayManager) return;

    const origin = this.resolveOrigin();
    const allFacs = this.overlayManager.facilityLayer?.features || [];

    if (routeType === 'shelter') {
      const shelters = allFacs
        .filter((f) => f.type === 'shelter')
        .map((f) => ({
          x: f.center.x,
          z: f.center.z,
          id: f.id,
          name: f.name || 'Shelter',
          type: 'shelter',
          provenance: f.provenance || 'dataset',
        }));

      if (shelters.length === 0) {
        console.warn('No shelter facilities available in dataset.');
        return;
      }

      this.overlayManager.routeToNearestDestination(origin, shelters, { routeType: 'shelter' });
    } else if (routeType === 'hospital') {
      const hospitals = allFacs
        .filter((f) => f.type === 'hospital')
        .map((f) => ({
          x: f.center.x,
          z: f.center.z,
          id: f.id,
          name: f.name || 'Hospital',
          type: 'hospital',
          provenance: f.provenance || 'simulated',
        }));

      if (hospitals.length === 0) {
        console.warn('No hospital or medical facility records available in dataset.');
        return;
      }

      this.overlayManager.routeToNearestDestination(origin, hospitals, { routeType: 'hospital' });
    }
  }

  /**
   * Toggle between primary and alternative route.
   */
  toggleAlternativeRoute() {
    if (!this.overlayManager || !this.activeAlternative) return;
    this.showAlternative = !this.showAlternative;
    const currentPrimary = this.showAlternative ? this.activeAlternative : this.activeRoute;
    const currentSecondary = this.showAlternative ? this.activeRoute : this.activeAlternative;
    this.overlayManager.routeLayer.displayRoute(currentPrimary, currentSecondary);
    if (this.dom.btnRouteAlt) {
      this.dom.btnRouteAlt.classList.toggle('active', this.showAlternative);
    }
    this.renderRouteSummary(currentPrimary, currentSecondary);
  }

  /**
   * Callback when route is updated or recalculated.
   */
  onRouteUpdated(route, alt) {
    this.activeRoute = route;
    this.activeAlternative = alt;
    this.showAlternative = false;

    if (this.dom.btnRouteAlt) {
      if (alt && alt.isReachable) {
        this.dom.btnRouteAlt.classList.remove('hidden');
        this.dom.btnRouteAlt.classList.remove('active');
        this.dom.btnRouteAlt.title = `Toggle alternative route (${alt.totalDistanceMeters}m, ${alt.status})`;
      } else {
        this.dom.btnRouteAlt.classList.add('hidden');
      }
    }

    if (this.dom.btnRouteShelter) {
      this.dom.btnRouteShelter.classList.toggle('active', route?.routeType === 'shelter');
    }
    if (this.dom.btnRouteHospital) {
      this.dom.btnRouteHospital.classList.toggle('active', route?.routeType === 'hospital');
    }

    if (route) {
      this.renderRouteSummary(route, alt);
    }
  }

  /**
   * Render Route Summary Card into the Feature Details panel.
   * @param {Object} route
   * @param {Object} [alt]
   */
  renderRouteSummary(route, alt = null) {
    if (!this.dom.hudFeatureDetails || !this.dom.detailPanelBody) return;
    this.dom.hudFeatureDetails.classList.remove('hidden');

    const isHospital = route.routeType === 'hospital';
    const isBlocked = !route.isReachable || route.status === 'blocked';
    const isExposed = route.status === 'exposed';

    let tagClass = 'success';
    let tagText = isHospital ? 'HOSPITAL ROUTE' : 'SHELTER EVAC';
    if (isBlocked) {
      tagClass = 'danger';
      tagText = 'ROUTE BLOCKED';
    } else if (isExposed) {
      tagClass = 'warning';
      tagText = 'EXPOSED ROUTE';
    }

    if (this.dom.detailPanelTitle) {
      this.dom.detailPanelTitle.textContent = isHospital ? 'MEDICAL ROUTE' : 'SHELTER EVACUATION';
    }
    if (this.dom.detailPanelBadge) {
      this.dom.detailPanelBadge.className = `status-pill ${tagClass}`;
      this.dom.detailPanelBadge.textContent = tagText;
    }

    const destName = route.destination?.name || (isHospital ? 'Hospital' : 'Shelter');
    const isSimulated = route.destination?.provenance === 'simulated';
    const destVerificationLabel = isHospital
      ? (isSimulated ? `${destName} (Proposed medical-response site — unverified)` : `${destName} (Hospital)`)
      : (destName ? `${destName} (Shelter)` : 'Shelter');

    const distanceStr = isBlocked ? 'Unreachable' : `${route.totalDistanceMeters.toFixed(1)} m`;
    const segmentsStr = isBlocked ? 'N/A' : `${route.edgeCount} segments`;
    const exposureStr = isBlocked
      ? 'Blocked by floodwaters'
      : (route.exposedLengthMeters > 0 ? `${route.exposedLengthMeters.toFixed(1)} m (${Math.round(route.exposedRatio * 100)}%)` : '0.0 m (100% Dry)');

    const maxDepthStr = isBlocked
      ? (route.blockedEdges?.length ? `${(route.blockedEdges[0].maxDepth || 0.15).toFixed(2)}m (Impassable)` : '>=0.15 m')
      : (route.maxWaterDepth > 0 ? `${route.maxWaterDepth.toFixed(2)} m` : '0.00 m (Dry)');

    let altHtml = '';
    if (alt && alt.isReachable) {
      const diffM = Math.round(alt.totalDistanceMeters - route.totalDistanceMeters);
      const sign = diffM >= 0 ? `+${diffM}m` : `${diffM}m`;
      altHtml = `
        <div class="detail-row">
          <span class="detail-label">Alternative Path:</span>
          <span class="detail-val">${alt.totalDistanceMeters.toFixed(0)}m (${sign}) [${alt.status.toUpperCase()}]</span>
        </div>`;
    }

    this.dom.detailPanelBody.innerHTML = `
      <div class="detail-card">
        <div class="detail-section">
          <div class="detail-section-title">ROUTE OVERVIEW</div>
          <div class="detail-meta-grid">
            <div class="detail-row">
              <span class="detail-label">Destination:</span>
              <span class="detail-val font-bold ${isHospital ? 'text-cyan' : 'text-purple'}">${destVerificationLabel}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Origin:</span>
              <span class="detail-val">${route.origin?.name || 'Selected Origin'}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Route Status:</span>
              <span class="detail-val font-bold ${isBlocked ? 'text-rose' : isExposed ? 'text-amber' : 'text-emerald'}">${route.status.toUpperCase()}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Path Length:</span>
              <span class="detail-val">${distanceStr} (${segmentsStr})</span>
            </div>
          </div>
        </div>

        <div class="detail-section">
          <div class="detail-section-title">FLOOD CONDITIONS</div>
          <div class="detail-meta-grid">
            <div class="detail-row">
              <span class="detail-label">Water Exposure:</span>
              <span class="detail-val ${isExposed ? 'text-amber' : ''}">${exposureStr}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Max Road Depth:</span>
              <span class="detail-val">${maxDepthStr}</span>
            </div>
            ${altHtml}
            <div class="detail-row">
              <span class="detail-label">Assessment:</span>
              <span class="detail-val text-muted" style="font-size:10px;line-height:1.3;">${route.explanation}</span>
            </div>
          </div>
        </div>

        <div class="detail-section data-quality-notice">
          <div class="detail-disclaimer">
            ⚠️ Conceptual elevation-based path reachability model. Does not guarantee hydrodynamic safety, flow velocity limits, or physical road structural integrity.
          </div>
        </div>

        <div class="detail-actions">
          <button class="detail-action-btn btn-shelter" id="btn-inspect-evac">🏃 Evac Shelter</button>
          <button class="detail-action-btn btn-hospital" id="btn-inspect-med">🏥 Hospital</button>
          <button class="detail-action-btn btn-clear" id="btn-inspect-clear">✕ Clear</button>
        </div>
      </div>`;

    const btnEvac = document.getElementById('btn-inspect-evac');
    if (btnEvac) btnEvac.addEventListener('click', () => this.executeRoute('shelter'));

    const btnMed = document.getElementById('btn-inspect-med');
    if (btnMed) btnMed.addEventListener('click', () => this.executeRoute('hospital'));

    const btnClear = document.getElementById('btn-inspect-clear');
    if (btnClear) btnClear.addEventListener('click', () => {
      if (this.overlayManager) this.overlayManager.clearRoute();
      this.deselectFeature();
    });
  }

  /**
   * Per-frame telemetry and feature inspection update callback.
   * @param {Object} renderDiagnostics
   */
  updateFrame(renderDiagnostics) {
    const camTelemetry = this.controls.getTelemetry();
    const mouseNdc = this.telemetry.getMouseNdc();
    const surfaceIntersection = this.terrainManager.raycastSurface(mouseNdc, this.viewer.camera);

    this.telemetry.update(camTelemetry, renderDiagnostics, surfaceIntersection);

    // Update cursor style when hovering over interactive 3D assets (throttled to ~15Hz)
    const now = performance.now();
    if (this.overlayManager && now - this.lastInspectUpdate > 65) {
      this.lastInspectUpdate = now;
      const hovered = this.overlayManager.inspectFeature(mouseNdc, this.viewer.camera);
      if (this.dom.viewportContainer) {
        this.dom.viewportContainer.style.cursor = hovered ? 'pointer' : '';
      }
    }
  }

  /**
   * Resolve authoritative current water elevation from FloodWaterManager or DOM slider.
   * @returns {number|null}
   */
  getCurrentWaterLevel() {
    if (this.floodWaterManager) {
      if (typeof this.floodWaterManager.waterLevel === 'number' && !Number.isNaN(this.floodWaterManager.waterLevel)) {
        return this.floodWaterManager.waterLevel;
      }
      if (typeof this.floodWaterManager.currentWaterLevel === 'number' && !Number.isNaN(this.floodWaterManager.currentWaterLevel)) {
        return this.floodWaterManager.currentWaterLevel;
      }
    }
    if (this.dom.waterLevelSlider && this.dom.waterLevelSlider.value !== undefined && this.dom.waterLevelSlider.value !== null && this.dom.waterLevelSlider.value !== '') {
      const parsed = parseFloat(this.dom.waterLevelSlider.value);
      if (!Number.isNaN(parsed)) {
        return parsed;
      }
    }
    return null;
  }

  /**
   * Phase 4: Capture current water level as scenario baseline.
   */
  setBaselineFromCurrent() {
    if (!this.overlayManager) return;
    const currentLevel = this.getCurrentWaterLevel();
    if (typeof currentLevel !== 'number' || Number.isNaN(currentLevel)) return;
    this.overlayManager.setBaselineWaterLevel(currentLevel);
    if (this.dom.scenarioBaselineTag) {
      this.dom.scenarioBaselineTag.textContent = `Baseline: ${currentLevel.toFixed(1)}m`;
    }
    this.overlayManager.updateImpacts();
  }

  /**
   * Phase 4: Toggle 3D warning rings for buildings that lost road network access.
   */
  toggleAccessLostHighlights() {
    if (!this.overlayManager) return;
    this.accessLostActive = !this.accessLostActive;
    this.overlayManager.toggleAccessLostHighlights(this.accessLostActive);
    if (this.dom.btnToggleAccessLost) {
      this.dom.btnToggleAccessLost.classList.toggle('active', this.accessLostActive);
      this.dom.btnToggleAccessLost.textContent = this.accessLostActive ? '⚠️ Access-Lost: ON' : '⚠️ Access-Lost Rings';
    }
  }

  /**
   * Phase 4: Toggle visibility of Building Risk Ranking HUD panel.
   */
  toggleRiskPanel() {
    if (!this.dom.hudRiskPanel) return;
    const isActive = this.dom.hudRiskPanel.classList.toggle('active');
    if (this.dom.btnToggleRiskPanel) {
      this.dom.btnToggleRiskPanel.classList.toggle('active', isActive);
    }
    if (this.dom.btnDockRisk) {
      this.dom.btnDockRisk.classList.toggle('active', isActive);
    }
    if (isActive && this.buildingRiskData) {
      this.updateRiskRankingList();
    }
  }

  /**
   * Phase 4: Switch risk list sorting mode ('risk' | 'depth' | 'lost').
   * @param {'risk'|'depth'|'lost'} mode
   */
  setRiskSortMode(mode) {
    this.riskSortMode = mode;
    [this.dom.sortRisk, this.dom.sortDepth, this.dom.sortLost].forEach(btn => {
      if (btn) btn.classList.remove('active');
    });
    if (mode === 'risk' && this.dom.sortRisk) this.dom.sortRisk.classList.add('active');
    if (mode === 'depth' && this.dom.sortDepth) this.dom.sortDepth.classList.add('active');
    if (mode === 'lost' && this.dom.sortLost) this.dom.sortLost.classList.add('active');
    this.updateRiskRankingList();
  }

  /**
   * Phase 4: Render scenario comparison metrics into top diff HUD.
   * @param {Object} comp - Summary delta from ScenarioComparisonService
   */
  renderScenarioComparison(comp) {
    if (!comp) return;
    this.scenarioDiffData = comp;

    if (this.dom.scenarioBaselineTag) {
      this.dom.scenarioBaselineTag.textContent = `Baseline: ${comp.baselineWaterLevel.toFixed(1)}m`;
    }

    if (this.dom.diffNewBlds && comp.buildings) {
      const b = comp.buildings;
      this.dom.diffNewBlds.textContent = `+${b.newlyAffectedCount} (${b.newlyAffectedPercent}%)`;
    }

    if (this.dom.diffRouteLost && comp.buildings) {
      const b = comp.buildings;
      this.dom.diffRouteLost.textContent = `${b.routeLostCount} (${b.routeLostPercent}%)`;
    }

    if (this.dom.diffNewRoads && comp.roads) {
      const r = comp.roads;
      this.dom.diffNewRoads.textContent = `+${r.newlyImpassable} (${r.newlyImpassablePercent}%)`;
    }

    if (this.dom.diffIsolatedShelters && comp.shelters) {
      const s = comp.shelters;
      this.dom.diffIsolatedShelters.textContent = `${s.isolatedByRoads} isol / ${s.inundated} flood`;
    }
  }

  /**
   * Phase 4: Handle new building risk evaluations from OverlayManager.
   * @param {Array<Object>} ranked
   */
  renderRiskRanking(ranked) {
    this.buildingRiskData = ranked;
    if (this.dom.hudRiskPanel && this.dom.hudRiskPanel.classList.contains('active')) {
      this.updateRiskRankingList();
    }
  }

  /**
   * Phase 4: Update scrollable list in Building Risk Ranking panel.
   */
  updateRiskRankingList() {
    if (!this.dom.riskListContainer || !this.buildingRiskData) return;

    const items = [...this.buildingRiskData];

    if (this.riskSortMode === 'depth') {
      items.sort((a, b) => {
        const depthA = a.exposure?.waterDepth ?? 0;
        const depthB = b.exposure?.waterDepth ?? 0;
        return depthB - depthA;
      });
    } else if (this.riskSortMode === 'lost') {
      items.sort((a, b) => {
        const lostA = a.access?.status === 'route_lost' ? 1 : 0;
        const lostB = b.access?.status === 'route_lost' ? 1 : 0;
        if (lostB !== lostA) return lostB - lostA;
        return (b.risk?.totalScore ?? 0) - (a.risk?.totalScore ?? 0);
      });
    } else {
      // Default: sort by totalScore descending
      items.sort((a, b) => (b.risk?.totalScore ?? 0) - (a.risk?.totalScore ?? 0));
    }

    // Update counts in header if container exists
    if (this.dom.riskSummaryCounts) {
      const crit = items.filter(i => i.risk?.priorityTier === 'CRITICAL').length;
      const high = items.filter(i => i.risk?.priorityTier === 'HIGH').length;
      const mod = items.filter(i => i.risk?.priorityTier === 'MODERATE').length;
      const lost = items.filter(i => i.access?.status === 'route_lost').length;
      this.dom.riskSummaryCounts.innerHTML = `
        <span class="chip-risk-crit">Crit: ${crit}</span>
        <span class="chip-risk-high">High: ${high}</span>
        <span class="chip-risk-mod">Mod: ${mod}</span>
        <span class="chip-access-lost">Lost: ${lost}</span>
      `;
    }

    // Limit rendered items to top 150 for fluid DOM performance
    const displayItems = items.slice(0, 150);

    const html = displayItems.map((item) => {
      const r = item.risk || {};
      const score = r.totalScore ?? 0;
      const tier = r.priorityTier || 'LOW';
      const acc = item.access || {};
      const exp = item.exposure || {};
      const depth = typeof exp.waterDepth === 'number' ? `${exp.waterDepth.toFixed(2)}m` : '0.00m';

      let tierChipClass = 'chip-risk-low';
      if (tier === 'CRITICAL') tierChipClass = 'chip-risk-crit';
      else if (tier === 'HIGH') tierChipClass = 'chip-risk-high';
      else if (tier === 'MODERATE') tierChipClass = 'chip-risk-mod';
      else if (tier === 'UNKNOWN') tierChipClass = 'chip-risk-unk';

      let accChipClass = 'chip-access-conn';
      let accLabel = 'Connected';
      if (acc.status === 'route_lost') {
        accChipClass = 'chip-access-lost';
        accLabel = 'Route Lost';
      } else if (acc.status === 'disconnected_in_source') {
        accChipClass = 'chip-access-disc';
        accLabel = 'Source Disc.';
      } else if (acc.status === 'access_degraded') {
        accChipClass = 'chip-access-deg';
        accLabel = 'Degraded';
      } else if (acc.status === 'unknown') {
        accChipClass = 'chip-access-unk';
        accLabel = 'Unknown';
      }

      return `
        <div class="risk-row" data-bld-id="${item.id}" id="risk-row-${item.id}">
          <div class="risk-row-left">
            <span class="${tierChipClass} font-mono">${tier}</span>
            <span class="risk-row-id font-mono">Bld ${item.id}</span>
          </div>
          <div class="risk-row-right">
            <span class="${accChipClass} font-mono">${accLabel}</span>
            <span class="risk-row-depth font-mono text-muted">${depth}</span>
            <span class="risk-badge ${score >= 70 ? 'score-high' : score >= 40 ? 'score-mid' : 'score-low'} font-mono">${score}</span>
          </div>
        </div>
      `;
    }).join('');

    this.dom.riskListContainer.innerHTML = html;

    // Attach click listeners to rows
    this.dom.riskListContainer.querySelectorAll('.risk-row').forEach(row => {
      row.addEventListener('click', () => {
        const id = row.getAttribute('data-bld-id');
        this.selectBuildingById(id);
      });
    });
  }

  /**
   * Phase 4: Programmatically select building by ID from Risk Ranking list.
   * Highlights in 3D scene and opens full inspection card.
   * @param {string} id
   */
  selectBuildingById(id) {
    if (!this.overlayManager) return;
    const bldLayer = this.overlayManager.buildingLayer;
    const bld = bldLayer?.features?.find(b => b.id === id);
    if (!bld) return;

    const evalData = this.overlayManager.scenarioComparisonService?.getBuildingEvaluation(id);
    const featToInspect = {
      ...bld,
      kind: 'building',
      riskEvaluation: evalData,
    };
    this.selectFeature(featToInspect);

    // Highlight active row in risk list
    if (this.dom.riskListContainer) {
      this.dom.riskListContainer.querySelectorAll('.risk-row').forEach(r => r.classList.remove('active'));
      const activeRow = document.getElementById(`risk-row-${id}`);
      if (activeRow) {
        activeRow.classList.add('active');
        activeRow.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }
  }

  /* ==========================================================================
     Phase 5: Scenario Management & Exportable Reports
     ========================================================================== */

  /**
   * Toggle visibility of the Scenario Management HUD panel.
   */
  toggleScenarioPanel() {
    if (!this.dom.hudScenarioPanel) return;
    const isHidden = this.dom.hudScenarioPanel.classList.toggle('hidden');
    const isActive = !isHidden;
    if (this.dom.btnOpenScenarios) this.dom.btnOpenScenarios.classList.toggle('active', isActive);
    if (this.dom.btnDockScenarios) this.dom.btnDockScenarios.classList.toggle('active', isActive);
    if (isActive) {
      if (this.scenarioManager.storageErrorMessage && this.dom.scenarioStorageNotice) {
        this.dom.scenarioStorageNotice.textContent = `⚠️ ${this.scenarioManager.storageErrorMessage}`;
        this.dom.scenarioStorageNotice.classList.remove('hidden');
      } else if (this.dom.scenarioStorageNotice) {
        this.dom.scenarioStorageNotice.classList.add('hidden');
      }
      this.renderScenarioList();
      this.populateScenarioDropdowns();
    }
  }

  /**
   * Close Scenario Management HUD panel.
   */
  closeScenarioPanel() {
    if (!this.dom.hudScenarioPanel) return;
    this.dom.hudScenarioPanel.classList.add('hidden');
    if (this.dom.btnOpenScenarios) this.dom.btnOpenScenarios.classList.remove('active');
    if (this.dom.btnDockScenarios) this.dom.btnDockScenarios.classList.remove('active');
  }

  /**
   * Render saved scenarios list in HUD panel.
   */
  renderScenarioList() {
    if (!this.dom.scenarioListContainer) return;
    const scenarios = this.scenarioManager.getScenarios();
    if (this.dom.scenarioPanelCount) {
      this.dom.scenarioPanelCount.textContent = `${scenarios.length} Saved`;
    }

    const currentLevel = this.getCurrentWaterLevel() ?? 124.0;

    const html = scenarios.map((scen) => {
      const isActive = Math.abs(scen.waterLevel - currentLevel) < 0.05;
      const dateStr = scen.createdAt ? new Date(scen.createdAt).toLocaleDateString() : '';
      const builtInTag = scen.isBuiltIn ? '<span class="text-cyan font-bold" title="Built-in reference scenario">[REF]</span>' : '';
      const deleteBtn = scen.isBuiltIn 
        ? '' 
        : `<button class="btn-scen-sm btn-del" data-action="delete" data-id="${scen.id}" title="Delete scenario">🗑️</button>`;

      return `
        <div class="scenario-row ${isActive ? 'active' : ''}" data-id="${scen.id}" id="scen-row-${scen.id}">
          <div class="scenario-row-top">
            <span class="scenario-name font-mono" title="${scen.name}">${builtInTag} ${scen.name}</span>
            <span class="scenario-level-tag font-mono">${scen.waterLevel.toFixed(1)}m</span>
          </div>
          <div class="scenario-row-details font-mono">
            <span>Base: ${(scen.baselineWaterLevel ?? 124.0).toFixed(1)}m | ${scen.profileMode || 'planar'}</span>
            <span>${dateStr}</span>
          </div>
          <div class="scenario-row-actions">
            <button class="btn-scen-sm btn-load" data-action="load" data-id="${scen.id}" title="Apply this water level and settings">Apply</button>
            <button class="btn-scen-sm" data-action="compare" data-id="${scen.id}" title="Set as comparison target">Diff Target</button>
            ${deleteBtn}
          </div>
        </div>
      `;
    }).join('');

    this.dom.scenarioListContainer.innerHTML = html;

    // Attach listeners
    this.dom.scenarioListContainer.querySelectorAll('button[data-action]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const action = btn.getAttribute('data-action');
        const id = btn.getAttribute('data-id');
        if (action === 'load') {
          this.loadScenarioById(id);
        } else if (action === 'compare') {
          if (this.dom.selectCompareTarget) {
            this.dom.selectCompareTarget.value = id;
            this.compareSelectedScenarios();
          }
        } else if (action === 'delete') {
          this.promptDeleteScenario(id);
        }
      });
    });
  }

  /**
   * Populate baseline and comparison target scenario dropdowns dynamically.
   * Displays scenario name and water level in metres MSL for all selectors.
   */
  populateScenarioDropdowns() {
    const scenarios = this.scenarioManager.getScenarios();
    if (!scenarios || scenarios.length === 0) return;

    // Pick reasonable defaults: Scenario A = first scenario, Scenario B = second scenario (or last if >=2)
    const defaultA = scenarios[0]?.id;
    const defaultB = scenarios.length > 1 ? scenarios[1]?.id : scenarios[0]?.id;

    const buildOpts = (selectedId) => {
      return scenarios.map(s => {
        const levelStr = `${s.waterLevel.toFixed(1)}m MSL`;
        const displayName = s.name.includes('MSL') ? s.name : `${s.name} (${levelStr})`;
        const isSel = s.id === selectedId;
        return `<option value="${s.id}" title="${escapeHTML(displayName)}" ${isSel ? 'selected' : ''}>${escapeHTML(displayName)}</option>`;
      }).join('');
    };

    // Determine current selections or fall back to defaults
    let currentA = this.dom.hudSelectScenA?.value || this.dom.selectCompareBaseline?.value || defaultA;
    let currentB = this.dom.hudSelectScenB?.value || this.dom.selectCompareTarget?.value || defaultB;

    // Verify current selections exist in available scenarios
    if (!scenarios.some(s => s.id === currentA)) currentA = defaultA;
    if (!scenarios.some(s => s.id === currentB)) currentB = defaultB;

    // If both currently match but we have at least 2 scenarios, assign distinct defaults
    if (currentA === currentB && scenarios.length > 1) {
      currentB = scenarios.find(s => s.id !== currentA)?.id || currentB;
    }

    const syncTitle = (el) => {
      if (!el) return;
      const opt = el.options[el.selectedIndex];
      if (opt) el.title = opt.title || opt.text;
    };

    if (this.dom.hudSelectScenA) {
      this.dom.hudSelectScenA.innerHTML = buildOpts(currentA);
      this.dom.hudSelectScenA.value = currentA;
      syncTitle(this.dom.hudSelectScenA);
    }
    if (this.dom.hudSelectScenB) {
      this.dom.hudSelectScenB.innerHTML = buildOpts(currentB);
      this.dom.hudSelectScenB.value = currentB;
      syncTitle(this.dom.hudSelectScenB);
    }
    if (this.dom.selectCompareBaseline) {
      this.dom.selectCompareBaseline.innerHTML = buildOpts(currentA);
      this.dom.selectCompareBaseline.value = currentA;
      syncTitle(this.dom.selectCompareBaseline);
    }
    if (this.dom.selectCompareTarget) {
      this.dom.selectCompareTarget.innerHTML = buildOpts(currentB);
      this.dom.selectCompareTarget.value = currentB;
      syncTitle(this.dom.selectCompareTarget);
    }

    this.validateScenarioComparisonSelection();
    this.updateHudComparisonMetrics();
  }

  /**
   * Update the 4 quick HUD comparison metrics from the selected Scenario A and Scenario B.
   */
  updateHudComparisonMetrics() {
    const scenAId = this.dom.hudSelectScenA?.value;
    const scenBId = this.dom.hudSelectScenB?.value;
    if (!scenAId || !scenBId || scenAId === scenBId) return;

    const scenA = this.scenarioManager.getScenario(scenAId);
    const scenB = this.scenarioManager.getScenario(scenBId);
    const compService = this.overlayManager?.scenarioComparisonService;
    if (!scenA || !scenB || !compService) return;

    try {
      const detailed = compService.compareTwoScenariosDetailed(scenA, scenB);
      if (!detailed || !detailed.diff) return;

      if (this.dom.scenarioBaselineTag) {
        this.dom.scenarioBaselineTag.textContent = `A: ${scenA.waterLevel.toFixed(1)}m | B: ${scenB.waterLevel.toFixed(1)}m`;
      }

      if (this.dom.diffNewBlds && detailed.diff.buildings) {
        const b = detailed.diff.buildings;
        this.dom.diffNewBlds.textContent = `+${b.newlyAffectedCount} (${b.newlyAffectedPercent}%)`;
      }

      if (this.dom.diffRouteLost && detailed.diff.buildings) {
        const b = detailed.diff.buildings;
        this.dom.diffRouteLost.textContent = `${b.routeLostCount} (${b.routeLostPercent}%)`;
      }

      if (this.dom.diffNewRoads && detailed.diff.roads) {
        const r = detailed.diff.roads;
        this.dom.diffNewRoads.textContent = `+${r.newlyImpassable} (${r.newlyImpassablePercent}%)`;
      }

      if (this.dom.diffIsolatedShelters && detailed.diff.shelters) {
        const s = detailed.diff.shelters;
        this.dom.diffIsolatedShelters.textContent = `${s.newlyIsolatedByRoads} isol / ${s.newlyInundated} flood`;
      }
    } catch (err) {
      // Comparison service may still be initializing overlays
    }
  }

  /**
   * Validate that Scenario A and Scenario B are distinct and synchronize selector states.
   * @param {'hud' | 'panel'} [source]
   * @returns {boolean} True if selection is valid for comparison
   */
  validateScenarioComparisonSelection(source = 'hud') {
    const scenAId = source === 'panel' ? this.dom.selectCompareBaseline?.value : this.dom.hudSelectScenA?.value;
    const scenBId = source === 'panel' ? this.dom.selectCompareTarget?.value : this.dom.hudSelectScenB?.value;

    // Synchronize HUD and panel dropdowns
    if (source === 'panel') {
      if (this.dom.hudSelectScenA && scenAId) this.dom.hudSelectScenA.value = scenAId;
      if (this.dom.hudSelectScenB && scenBId) this.dom.hudSelectScenB.value = scenBId;
    } else {
      if (this.dom.selectCompareBaseline && scenAId) this.dom.selectCompareBaseline.value = scenAId;
      if (this.dom.selectCompareTarget && scenBId) this.dom.selectCompareTarget.value = scenBId;
    }

    const syncTitle = (el) => {
      if (!el) return;
      const opt = el.options[el.selectedIndex];
      if (opt) el.title = opt.title || opt.text;
    };
    syncTitle(this.dom.hudSelectScenA);
    syncTitle(this.dom.hudSelectScenB);
    syncTitle(this.dom.selectCompareBaseline);
    syncTitle(this.dom.selectCompareTarget);

    const isSelfComparison = Boolean(scenAId && scenBId && scenAId === scenBId);

    if (this.dom.hudCompareValidation) {
      this.dom.hudCompareValidation.classList.toggle('hidden', !isSelfComparison);
    }
    if (this.dom.panelCompareValidation) {
      this.dom.panelCompareValidation.classList.toggle('hidden', !isSelfComparison);
    }

    if (this.dom.btnHudCompareScenarios) {
      this.dom.btnHudCompareScenarios.disabled = isSelfComparison;
      this.dom.btnHudCompareScenarios.classList.toggle('disabled', isSelfComparison);
    }
    if (this.dom.btnExecuteCompare) {
      this.dom.btnExecuteCompare.disabled = isSelfComparison;
      this.dom.btnExecuteCompare.classList.toggle('disabled', isSelfComparison);
    }

    const isValid = !isSelfComparison;
    if (isValid) {
      this.updateHudComparisonMetrics();
    }

    return isValid;
  }

  /**
   * Save current water level and settings as a new scenario.
   */
  saveCurrentScenario() {
    if (!this.dom.inputScenarioName) return;
    const name = this.dom.inputScenarioName.value.trim();
    const waterLevel = this.getCurrentWaterLevel();
    if (typeof waterLevel !== 'number' || Number.isNaN(waterLevel)) {
      alert('Could not save scenario: Current water elevation is unavailable.');
      return;
    }
    const profileMode = this.floodWaterManager ? this.floodWaterManager.profileMode : 'planar';
    const connectedOnly = this.floodWaterManager ? this.floodWaterManager.connectedOnly : true;
    const baselineWaterLevel = this.overlayManager?.scenarioComparisonService?.baselineWaterLevel ?? 124.0;

    try {
      this.scenarioManager.saveScenario({
        name: name || undefined,
        waterLevel,
        profileMode,
        connectedOnly,
        baselineWaterLevel,
      });
      this.dom.inputScenarioName.value = '';
      this.renderScenarioList();
      this.populateScenarioDropdowns();
      if (this.scenarioManager.storageErrorMessage && this.dom.scenarioStorageNotice) {
        this.dom.scenarioStorageNotice.textContent = `⚠️ ${this.scenarioManager.storageErrorMessage}`;
        this.dom.scenarioStorageNotice.classList.remove('hidden');
      }
    } catch (err) {
      alert(`Could not save scenario: ${err.message}`);
    }
  }

  /**
   * Reload a saved scenario and restore its settings.
   * @param {string} id
   */
  loadScenarioById(id) {
    const scen = this.scenarioManager.getScenario(id);
    if (!scen) return;

    this.activeScenarioId = id;

    if (this.floodWaterManager) {
      this.floodWaterManager.setWaterLevel(scen.waterLevel);
      if (this.dom.waterLevelSlider) {
        this.dom.waterLevelSlider.value = scen.waterLevel.toFixed(2);
      }
      if (this.dom.waterLevelVal) {
        this.dom.waterLevelVal.textContent = `${scen.waterLevel.toFixed(2)} m`;
      }
      if (scen.profileMode && scen.profileMode !== this.floodWaterManager.profileMode) {
        this.floodWaterManager.setProfileMode(scen.profileMode);
        if (this.dom.btnToggleProfile) {
          this.dom.btnToggleProfile.textContent = scen.profileMode === 'slope' ? '📐 Profile: Slope-Aware' : '📐 Profile: Planar';
          this.dom.btnToggleProfile.classList.toggle('active', scen.profileMode === 'slope');
        }
      }
      if (typeof scen.connectedOnly === 'boolean' && scen.connectedOnly !== this.floodWaterManager.connectedOnly) {
        this.floodWaterManager.connectedOnly = scen.connectedOnly;
        if (this.dom.btnToggleConnectivity) {
          this.dom.btnToggleConnectivity.textContent = scen.connectedOnly ? '🌊 Connected: ON' : '🌊 Connected: OFF';
          this.dom.btnToggleConnectivity.classList.toggle('active', scen.connectedOnly);
        }
      }
    }

    if (this.overlayManager) {
      if (typeof scen.baselineWaterLevel === 'number') {
        this.overlayManager.setBaselineWaterLevel(scen.baselineWaterLevel);
        if (this.dom.scenarioBaselineTag) {
          this.dom.scenarioBaselineTag.textContent = `Baseline: ${scen.baselineWaterLevel.toFixed(1)}m`;
        }
      }
      this.overlayManager.updateImpacts();
    }

    this.renderScenarioList();
  }

  /**
   * Compare two selected scenarios using the data-driven scenario comparison service.
   * Opens the detailed comparison modal without mutating the active simulation stage.
   * @param {'hud' | 'panel'} [source]
   */
  compareSelectedScenarios(source = 'hud') {
    const scenAId = source === 'panel' ? this.dom.selectCompareBaseline?.value : this.dom.hudSelectScenA?.value;
    const scenBId = source === 'panel' ? this.dom.selectCompareTarget?.value : this.dom.hudSelectScenB?.value;

    if (!scenAId || !scenBId) {
      alert('Please select two scenarios to compare.');
      return;
    }

    if (scenAId === scenBId) {
      if (this.dom.hudCompareValidation) this.dom.hudCompareValidation.classList.remove('hidden');
      if (this.dom.panelCompareValidation) this.dom.panelCompareValidation.classList.remove('hidden');
      alert('Validation Error: Scenario A and Scenario B cannot be the same scenario. Please choose two distinct scenarios.');
      return;
    }

    const scenA = this.scenarioManager.getScenario(scenAId);
    const scenB = this.scenarioManager.getScenario(scenBId);
    if (!scenA || !scenB) {
      alert('Selected scenario could not be found.');
      return;
    }

    const compService = this.overlayManager?.scenarioComparisonService;
    if (!compService) {
      alert('Scenario comparison service is not available.');
      return;
    }

    // Run detailed comparison without mutating active scenario or live 3D state
    const report = compService.compareTwoScenariosDetailed(scenA, scenB);
    this.currentComparisonReport = report;

    this.openScenarioComparisonModal(report);
  }

  /**
   * Open the Detailed Scenario Comparison Modal with calculated report.
   * @param {Object} report
   */
  openScenarioComparisonModal(report) {
    if (!this.dom.modalScenarioComparison || !report) return;

    const sA = report.scenarioA || {};
    const sB = report.scenarioB || {};

    if (this.dom.modalBadgeScenA) {
      const nameA = sA.name || 'Scenario A';
      const dispA = nameA.includes('MSL') ? nameA : `${nameA} (${(sA.waterLevel || 124).toFixed(1)}m MSL)`;
      this.dom.modalBadgeScenA.textContent = `Scenario A: ${dispA}`;
    }
    if (this.dom.modalBadgeScenB) {
      const nameB = sB.name || 'Scenario B';
      const dispB = nameB.includes('MSL') ? nameB : `${nameB} (${(sB.waterLevel || 124).toFixed(1)}m MSL)`;
      this.dom.modalBadgeScenB.textContent = `Scenario B: ${dispB}`;
    }
    if (this.dom.modalBadgeDelta) {
      const delta = report.waterLevelDelta ?? 0;
      this.dom.modalBadgeDelta.textContent = `${delta >= 0 ? '+' : ''}${delta.toFixed(2)}m Stage`;
    }

    this.renderComparisonModal(report);
    this.dom.modalScenarioComparison.classList.remove('hidden');
  }

  /**
   * Close Detailed Scenario Comparison Modal.
   */
  closeScenarioComparisonModal() {
    if (this.dom.modalScenarioComparison) {
      this.dom.modalScenarioComparison.classList.add('hidden');
    }
  }

  /**
   * Render complete detailed comparison report inside modal dialog.
   * @param {Object} report
   */
  renderComparisonModal(report) {
    if (!this.dom.comparisonModalBody || !report) return;

    const sA = report.scenarioA || {};
    const sB = report.scenarioB || {};
    const b = report.buildings || {};
    const m = report.medical || {};
    const sh = report.shelters || {};
    const r = report.roads || {};

    this._activeBuildingFilter = 'notable';
    this._comparisonBuildingDeltas = b.deltas || [];

    this.dom.comparisonModalBody.innerHTML = `
      <!-- Executive Change Analysis Banner -->
      <div class="change-analysis-banner font-mono">
        <div class="change-analysis-title">
          <span>⚡</span>
          <span>EXECUTIVE CHANGE ANALYSIS (SCENARIO A ➔ SCENARIO B):</span>
        </div>
        <ul class="change-analysis-list">
          ${(report.changeSummaries || []).map(s => `<li>${escapeHTML(s)}</li>`).join('')}
        </ul>
      </div>

      <!-- High-Level Side-by-Side Impact Overview -->
      <div class="comparison-section font-mono">
        <div class="comparison-section-header">
          <span class="comparison-section-title">OVERALL IMPACT SUMMARY</span>
          <span class="text-cyan font-bold">${b.total} BUILDINGS EVALUATED</span>
        </div>
        
        <div class="comparison-side-by-side">
          <!-- Scenario A Column -->
          <div class="scenario-column-card">
            <div class="scenario-column-title">
              <span>SCENARIO A: ${escapeHTML(sA.name)}</span>
              <span class="text-cyan font-mono">${(sA.waterLevel || 124).toFixed(1)}m MSL</span>
            </div>
            <div class="comparison-kpi-grid">
              <div class="comparison-kpi-card">
                <div class="comparison-kpi-title">Safe Buildings</div>
                <div class="comparison-kpi-val text-emerald">${b.safeA ?? 0}</div>
                <div class="comparison-kpi-sub">${b.total > 0 ? ((b.safeA / b.total) * 100).toFixed(1) : 0}% of structures</div>
              </div>
              <div class="comparison-kpi-card">
                <div class="comparison-kpi-title">Flood-Exposed Buildings</div>
                <div class="comparison-kpi-val text-rose">${b.exposedA ?? 0}</div>
                <div class="comparison-kpi-sub">${b.total > 0 ? ((b.exposedA / b.total) * 100).toFixed(1) : 0}% of structures</div>
              </div>
              <div class="comparison-kpi-card">
                <div class="comparison-kpi-title">Operational Shelters</div>
                <div class="comparison-kpi-val text-cyan">${sh.operationalA ?? 0} / ${sh.total ?? 0}</div>
                <div class="comparison-kpi-sub">${sh.isolatedA ?? 0} road-isolated</div>
              </div>
              <div class="comparison-kpi-card">
                <div class="comparison-kpi-title">Impassable Roads</div>
                <div class="comparison-kpi-val text-rose">${r.impassableA ?? 0} / ${r.total ?? 0}</div>
                <div class="comparison-kpi-sub">${r.passableA ?? 0} passable</div>
              </div>
            </div>
          </div>

          <!-- Scenario B Column -->
          <div class="scenario-column-card">
            <div class="scenario-column-title">
              <span>SCENARIO B: ${escapeHTML(sB.name)}</span>
              <span class="text-cyan font-mono">${(sB.waterLevel || 124).toFixed(1)}m MSL</span>
            </div>
            <div class="comparison-kpi-grid">
              <div class="comparison-kpi-card">
                <div class="comparison-kpi-title">Safe Buildings</div>
                <div class="comparison-kpi-val text-emerald">${b.safeB ?? 0}</div>
                <div class="comparison-kpi-sub">${(b.safeB || 0) - (b.safeA || 0) >= 0 ? '+' : ''}${(b.safeB || 0) - (b.safeA || 0)} net change</div>
              </div>
              <div class="comparison-kpi-card">
                <div class="comparison-kpi-title">Flood-Exposed Buildings</div>
                <div class="comparison-kpi-val text-rose">${b.exposedB ?? 0}</div>
                <div class="comparison-kpi-sub">${(b.exposedB || 0) - (b.exposedA || 0) >= 0 ? '+' : ''}${(b.exposedB || 0) - (b.exposedA || 0)} net change</div>
              </div>
              <div class="comparison-kpi-card">
                <div class="comparison-kpi-title">Operational Shelters</div>
                <div class="comparison-kpi-val text-cyan">${sh.operationalB ?? 0} / ${sh.total ?? 0}</div>
                <div class="comparison-kpi-sub">${sh.isolatedB ?? 0} road-isolated</div>
              </div>
              <div class="comparison-kpi-card">
                <div class="comparison-kpi-title">Impassable Roads</div>
                <div class="comparison-kpi-val text-rose">${r.impassableB ?? 0} / ${r.total ?? 0}</div>
                <div class="comparison-kpi-sub">+${r.newlyImpassableCount ?? 0} new blocked</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Cross-Scenario Delta Breakdown KPI Strip -->
        <div class="comparison-kpi-grid" style="margin-top: 10px;">
          <div class="comparison-kpi-card">
            <div class="comparison-kpi-title">Newly Exposed (A ➔ B)</div>
            <div class="comparison-kpi-val text-rose">+${b.newlyExposed ?? 0}</div>
            <div class="comparison-kpi-sub">Transition from safe to flooded</div>
          </div>
          <div class="comparison-kpi-card">
            <div class="comparison-kpi-title">Newly Safe (A ➔ B)</div>
            <div class="comparison-kpi-val text-emerald">${b.newlySafe ?? 0}</div>
            <div class="comparison-kpi-sub">Recover to safe dry conditions</div>
          </div>
          <div class="comparison-kpi-card">
            <div class="comparison-kpi-title">Remained Exposed in Both</div>
            <div class="comparison-kpi-val text-amber">${b.remainedExposed ?? 0}</div>
            <div class="comparison-kpi-sub">Submerged across both stages</div>
          </div>
          <div class="comparison-kpi-card">
            <div class="comparison-kpi-title">Unchanged Status</div>
            <div class="comparison-kpi-val">${b.unchanged ?? 0}</div>
            <div class="comparison-kpi-sub">Category unaffected by transition</div>
          </div>
          <div class="comparison-kpi-card">
            <div class="comparison-kpi-title">Unknown / NoData DEM</div>
            <div class="comparison-kpi-val text-muted">${b.unknown ?? 0}</div>
            <div class="comparison-kpi-sub">Strictly excluded from safe counts</div>
          </div>
        </div>
      </div>

      <!-- Hospital & Medical Facilities Section -->
      <div class="comparison-section font-mono">
        <div class="comparison-section-header">
          <span class="comparison-section-title">HOSPITAL & MEDICAL FACILITIES SAFETY</span>
          <span class="pill-unverified font-mono">SIMULATED FACILITY DATA</span>
        </div>
        <div class="change-analysis-banner" style="border-left-color: #a855f7; background: rgba(168, 85, 247, 0.08);">
          ⚠️ <strong>DATASET PROVENANCE AUDIT:</strong> ${escapeHTML(m.provenanceNotice || '')}
        </div>
        <div class="comparison-table-wrap">
          <table class="comparison-table font-mono">
            <thead>
              <tr>
                <th>FACILITY ID</th>
                <th>NAME</th>
                <th>TYPE</th>
                <th>PROVENANCE</th>
                <th>GROUND ELEV</th>
                <th>SCENARIO A DEPTH</th>
                <th>SCENARIO A PHYSICAL</th>
                <th>SCENARIO A ACCESS</th>
                <th>SCENARIO B DEPTH</th>
                <th>SCENARIO B PHYSICAL</th>
                <th>SCENARIO B ACCESS</th>
                <th>STATUS CHANGE</th>
              </tr>
            </thead>
            <tbody>
              ${(m.deltas || []).map(item => `
                <tr>
                  <td>${escapeHTML(item.id)}</td>
                  <td><strong>${escapeHTML(item.name)}</strong></td>
                  <td>${escapeHTML(item.type)}</td>
                  <td><span class="pill-unverified">${escapeHTML(item.provenance || 'simulated')}</span></td>
                  <td>${item.groundElevation !== null ? item.groundElevation.toFixed(2) + 'm' : 'Unknown'}</td>
                  <td>${item.depthA !== null ? item.depthA.toFixed(2) + 'm' : 'Dry'}</td>
                  <td><span class="pill-${item.physicalA}">${escapeHTML(item.physicalA)}</span></td>
                  <td><span class="pill-${item.accessA === 'operational' ? 'safe' : item.accessA === 'isolated' ? 'isolated' : 'unknown'}">${escapeHTML(item.accessA)}</span></td>
                  <td>${item.depthB !== null ? item.depthB.toFixed(2) + 'm' : 'Dry'}</td>
                  <td><span class="pill-${item.physicalB}">${escapeHTML(item.physicalB)}</span></td>
                  <td><span class="pill-${item.accessB === 'operational' ? 'safe' : item.accessB === 'isolated' ? 'isolated' : 'unknown'}">${escapeHTML(item.accessB)}</span></td>
                  <td>${escapeHTML(item.changeDesc)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Emergency Shelters Safety & Availability Section -->
      <div class="comparison-section font-mono">
        <div class="comparison-section-header">
          <span class="comparison-section-title">EMERGENCY SHELTER SAFETY & AVAILABILITY</span>
          <span class="text-cyan">${sh.total} SHELTERS</span>
        </div>
        <div class="change-analysis-banner" style="border-left-color: #38bdf8; background: rgba(56, 189, 248, 0.08);">
          ℹ️ <strong>PHYSICAL SITE SAFETY VS ROAD ACCESSIBILITY:</strong> A shelter is physically safe when its ground elevation exceeds the water stage. However, it is classified as <strong>isolated</strong> if its road evacuation corridor is severed by impassable flood waters (depth ≥ 0.15m). Baseline road network disconnections are preserved to prevent false flood failure attribution.
        </div>
        <div class="comparison-table-wrap">
          <table class="comparison-table font-mono">
            <thead>
              <tr>
                <th>SHELTER ID</th>
                <th>NAME</th>
                <th>CAPACITY</th>
                <th>PROVENANCE</th>
                <th>GROUND ELEV</th>
                <th>SCENARIO A CLEARANCE</th>
                <th>SCENARIO A PHYSICAL</th>
                <th>SCENARIO A ROAD ACCESS</th>
                <th>SCENARIO B CLEARANCE</th>
                <th>SCENARIO B PHYSICAL</th>
                <th>SCENARIO B ROAD ACCESS</th>
                <th>TRANSITION DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              ${(sh.deltas || []).map(item => `
                <tr>
                  <td>${escapeHTML(item.id)}</td>
                  <td><strong>${escapeHTML(item.name)}</strong></td>
                  <td>${escapeHTML(item.capacity || 'N/A')}</td>
                  <td><span class="pill-unverified">${escapeHTML(item.provenance || 'simulated')}</span></td>
                  <td>${item.groundElevation !== null ? item.groundElevation.toFixed(2) + 'm' : 'Unknown'}</td>
                  <td>${item.clearanceA !== null ? (item.clearanceA >= 0 ? '+' : '') + item.clearanceA.toFixed(2) + 'm' : 'N/A'}</td>
                  <td><span class="pill-${item.physicalA}">${escapeHTML(item.physicalA)}</span></td>
                  <td><span class="pill-${item.accessA === 'operational' ? 'safe' : item.accessA === 'isolated' ? 'isolated' : 'unknown'}">${escapeHTML(item.accessA)}</span></td>
                  <td>${item.clearanceB !== null ? (item.clearanceB >= 0 ? '+' : '') + item.clearanceB.toFixed(2) + 'm' : 'N/A'}</td>
                  <td><span class="pill-${item.physicalB}">${escapeHTML(item.physicalB)}</span></td>
                  <td><span class="pill-${item.accessB === 'operational' ? 'safe' : item.accessB === 'isolated' ? 'isolated' : 'unknown'}">${escapeHTML(item.accessB)}</span></td>
                  <td>${escapeHTML(item.changeDesc)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Road Network Accessibility Section -->
      <div class="comparison-section font-mono">
        <div class="comparison-section-header">
          <span class="comparison-section-title">ROAD NETWORK PASSABILITY SUMMARY</span>
          <span class="text-cyan">${r.total} EDGES EVALUATED</span>
        </div>
        <div class="comparison-table-wrap">
          <table class="comparison-table font-mono">
            <thead>
              <tr>
                <th>CLASSIFICATION</th>
                <th>SCENARIO A SEGMENTS</th>
                <th>SCENARIO B SEGMENTS</th>
                <th>NET CHANGE (A ➔ B)</th>
                <th>DEPTH CRITERIA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Passable (Unaffected)</strong></td>
                <td>${r.passableA ?? 0}</td>
                <td>${r.passableB ?? 0}</td>
                <td>${(r.passableB || 0) - (r.passableA || 0) >= 0 ? '+' : ''}${(r.passableB || 0) - (r.passableA || 0)}</td>
                <td>Water depth &lt; 0.05m</td>
              </tr>
              <tr>
                <td><strong>Caution (Exposed)</strong></td>
                <td>${r.cautionA ?? 0}</td>
                <td>${r.cautionB ?? 0}</td>
                <td>${(r.cautionB || 0) - (r.cautionA || 0) >= 0 ? '+' : ''}${(r.cautionB || 0) - (r.cautionA || 0)}</td>
                <td>Water depth 0.05m - 0.15m</td>
              </tr>
              <tr>
                <td><strong class="text-rose">Impassable (Blocked)</strong></td>
                <td>${r.impassableA ?? 0}</td>
                <td>${r.impassableB ?? 0}</td>
                <td>${(r.impassableB || 0) - (r.impassableA || 0) >= 0 ? '+' : ''}${(r.impassableB || 0) - (r.impassableA || 0)} (+${r.newlyImpassableCount ?? 0} new blocked)</td>
                <td>Water depth &ge; 0.15m conservative vehicle limit</td>
              </tr>
              <tr>
                <td><strong>Unknown DEM Data</strong></td>
                <td>${r.unknownA ?? 0}</td>
                <td>${r.unknownB ?? 0}</td>
                <td>0</td>
                <td>Missing LiDAR (treated as impassable for safety)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Detailed Building Impact Comparison Table -->
      <div class="comparison-section font-mono">
        <div class="comparison-section-header">
          <span class="comparison-section-title">DETAILED BUILDING IMPACT TRANSITIONS</span>
          <span class="text-cyan font-bold" id="comparison-buildings-count">${b.deltas?.length || 0} Structures</span>
        </div>
        
        <div class="building-filter-bar font-mono" id="comparison-building-filter-bar">
          <button class="building-filter-btn active" data-filter="notable">All Notable Transitions</button>
          <button class="building-filter-btn" data-filter="newly_exposed">Newly Exposed (+${b.newlyExposed ?? 0})</button>
          <button class="building-filter-btn" data-filter="newly_safe">Newly Safe (-${b.newlySafe ?? 0})</button>
          <button class="building-filter-btn" data-filter="remained_exposed">Remained Exposed (${b.remainedExposed ?? 0})</button>
          <button class="building-filter-btn" data-filter="unknown">Unknown DEM (${b.unknown ?? 0})</button>
          <button class="building-filter-btn" data-filter="all">All Evaluated (${b.total ?? 0})</button>
        </div>

        <div class="comparison-table-wrap">
          <table class="comparison-table font-mono" id="comparison-buildings-table">
            <thead>
              <tr>
                <th>BUILDING ID</th>
                <th>BASE ELEV</th>
                <th>SCENARIO A STATUS</th>
                <th>SCENARIO A DEPTH</th>
                <th>SCENARIO A ACCESS</th>
                <th>SCENARIO B STATUS</th>
                <th>SCENARIO B DEPTH</th>
                <th>SCENARIO B ACCESS</th>
                <th>TRANSITION DELTA</th>
                <th>DEPTH CHANGE</th>
              </tr>
            </thead>
            <tbody id="comparison-buildings-tbody">
              <!-- Rendered dynamically -->
            </tbody>
          </table>
        </div>
      </div>

      <!-- Data Quality, Uncertainty & Methodological Limitations -->
      <div class="comparison-section font-mono">
        <div class="comparison-section-header">
          <span class="comparison-section-title">DATA QUALITY, UNCERTAINTY & METHODOLOGICAL LIMITATIONS</span>
          <span class="pill-unknown">AUDITED CAVEATS</span>
        </div>
        <div class="change-analysis-banner" style="border-left-color: #f59e0b; background: rgba(245, 158, 11, 0.08); font-size: 9.5px; line-height: 1.5;">
          <strong>1. CONCEPTUAL ELEVATION MODEL:</strong> HighWater 3D uses a static bare-earth LiDAR DGM1 ground intersection model. It does not model momentum, hydrodynamic wave dissipation, friction, or floodwall breaching.<br>
          <strong>2. DAMAGE VS IMMERSION:</strong> Ground-contact water depth does not establish interior ingress or structural failure.<br>
          <strong>3. DEFINITION OF SAFE:</strong> A building or facility is classified as "Safe" only when confirmed zero positive ground-contact water depth with valid elevation data. Unknown DEM records are never converted to safe.<br>
          <strong>4. EMERGENCY HEALTHCARE:</strong> No verified municipal emergency hospital exists in the open Dernau research dataset; the simulated marker is provided strictly for demonstration and does not prove absence in the real world.<br>
          <strong>5. ROAD NETWORK TOPOLOGY:</strong> 67 disconnected road components present in the baseline OpenStreetMap source data are preserved to avoid falsely attributing pre-existing isolation to floodwaters.
        </div>
      </div>
    `;

    // Render initial building rows
    this.renderComparisonBuildingTable('notable');

    // Attach building filter listener
    const filterBar = this.dom.comparisonModalBody.querySelector('#comparison-building-filter-bar');
    if (filterBar) {
      filterBar.querySelectorAll('.building-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          filterBar.querySelectorAll('.building-filter-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const filter = btn.getAttribute('data-filter');
          this.renderComparisonBuildingTable(filter);
        });
      });
    }
  }

  /**
   * Filter and render building rows in the comparison table.
   * @param {string} filter
   */
  renderComparisonBuildingTable(filter = 'notable') {
    const tbody = document.getElementById('comparison-buildings-tbody');
    const countSpan = document.getElementById('comparison-buildings-count');
    if (!tbody || !this._comparisonBuildingDeltas) return;

    let filtered = this._comparisonBuildingDeltas;
    if (filter === 'newly_exposed') {
      filtered = this._comparisonBuildingDeltas.filter(b => b.deltaType === 'newly_exposed');
    } else if (filter === 'newly_safe') {
      filtered = this._comparisonBuildingDeltas.filter(b => b.deltaType === 'newly_safe');
    } else if (filter === 'remained_exposed') {
      filtered = this._comparisonBuildingDeltas.filter(b => b.deltaType === 'remained_exposed');
    } else if (filter === 'unknown') {
      filtered = this._comparisonBuildingDeltas.filter(b => b.deltaType === 'unknown');
    } else if (filter === 'notable') {
      // Exclude remained_safe (which is 600+ quiet dry buildings) to highlight transitions
      filtered = this._comparisonBuildingDeltas.filter(b => b.deltaType !== 'remained_safe');
    }

    if (countSpan) {
      countSpan.textContent = `${filtered.length} Structures (${filter.replace('_', ' ')})`;
    }

    // Limit to 200 items for snappy rendering in DOM
    const displayList = filtered.slice(0, 200);

    tbody.innerHTML = displayList.map(item => {
      const elevStr = item.baseElevationM !== null && item.baseElevationM !== undefined ? `${item.baseElevationM.toFixed(1)}m` : 'NoData';
      const depthAStr = item.depthA ? `${item.depthA.toFixed(2)}m` : '0.00m';
      const depthBStr = item.depthB ? `${item.depthB.toFixed(2)}m` : '0.00m';
      const deltaDepthStr = `${item.deltaDepthM >= 0 ? '+' : ''}${item.deltaDepthM.toFixed(2)}m`;
      const pillClass = item.deltaType === 'newly_exposed' ? 'pill-exposed' : item.deltaType === 'newly_safe' ? 'pill-safe' : item.deltaType === 'remained_exposed' ? 'pill-isolated' : 'pill-unknown';

      return `
        <tr>
          <td><strong>${escapeHTML(item.id)}</strong></td>
          <td>${elevStr}</td>
          <td><span class="pill-${item.isSafeA ? 'safe' : 'exposed'}">${escapeHTML(item.statusA)}</span></td>
          <td>${depthAStr}</td>
          <td>${escapeHTML(item.accessA)}</td>
          <td><span class="pill-${item.isSafeB ? 'safe' : 'exposed'}">${escapeHTML(item.statusB)}</span></td>
          <td>${depthBStr}</td>
          <td>${escapeHTML(item.accessB)}</td>
          <td><span class="${pillClass}">${escapeHTML(item.deltaType.toUpperCase().replace('_', ' '))}</span></td>
          <td class="${item.deltaDepthM > 0 ? 'text-rose' : item.deltaDepthM < 0 ? 'text-emerald' : ''}">${deltaDepthStr}</td>
        </tr>
      `;
    }).join('');

    if (filtered.length > 200) {
      tbody.innerHTML += `
        <tr>
          <td colspan="10" style="text-align: center; color: var(--text-muted); font-size: 9px; padding: 10px;">
            Showing first 200 of ${filtered.length} structures. Export full CSV report to inspect all records.
          </td>
        </tr>
      `;
    }
  }

  /**
   * Download Detailed Two-Scenario Comparison as RFC 4180 CSV.
   * @param {Object} [report]
   */
  downloadDetailedComparisonCSV(report = this.currentComparisonReport) {
    if (!report) return;
    const csv = this.scenarioManager.generateComparisonCSVReport(report);
    const scenAName = (report.scenarioA?.name || 'scen_a').toLowerCase().replace(/[^a-z0-9]/g, '_');
    const scenBName = (report.scenarioB?.name || 'scen_b').toLowerCase().replace(/[^a-z0-9]/g, '_');
    const filename = `highwater3d_comparison_${scenAName}_vs_${scenBName}.csv`;
    this.scenarioManager.downloadCSV(csv, filename);
  }

  /**
   * Open Detailed Two-Scenario Comparison as print-friendly HTML document.
   * @param {Object} [report]
   */
  exportDetailedComparisonHTML(report = this.currentComparisonReport) {
    if (!report) return;
    const html = this.scenarioManager.generateComparisonHTMLReport(report);
    this.scenarioManager.openPrintReport(html);
  }

  /**
   * Prompt user with confirmation dialog before deleting scenario.
   * @param {string} id
   */
  promptDeleteScenario(id) {
    const scen = this.scenarioManager.getScenario(id);
    if (!scen) return;
    if (scen.isBuiltIn) {
      alert('Reference scenarios are built-in and cannot be deleted.');
      return;
    }

    this.scenarioToDeleteId = id;
    if (this.dom.deleteConfirmText) {
      this.dom.deleteConfirmText.textContent = `Are you sure you want to delete scenario "${scen.name}" (${scen.waterLevel.toFixed(1)}m MSL)? This action cannot be undone.`;
    }
    if (this.dom.deleteConfirmModal) {
      this.dom.deleteConfirmModal.classList.remove('hidden');
    }
  }

  /**
   * Execute scenario deletion after user confirmation.
   */
  executeDeleteScenario() {
    if (!this.scenarioToDeleteId) return;
    this.scenarioManager.deleteScenario(this.scenarioToDeleteId);
    this.scenarioToDeleteId = null;
    if (this.dom.deleteConfirmModal) {
      this.dom.deleteConfirmModal.classList.add('hidden');
    }
    this.renderScenarioList();
    this.populateScenarioDropdowns();
  }

  /**
   * Cancel scenario deletion.
   */
  cancelDeleteScenario() {
    this.scenarioToDeleteId = null;
    if (this.dom.deleteConfirmModal) {
      this.dom.deleteConfirmModal.classList.add('hidden');
    }
  }

  /**
   * Open the Report Export Modal.
   */
  openExportModal() {
    if (!this.dom.reportExportOverlay) return;
    this.dom.reportExportOverlay.classList.remove('hidden');
    this.renderExportPreview();
  }

  /**
   * Close the Report Export Modal.
   */
  closeExportModal() {
    if (!this.dom.reportExportOverlay) return;
    this.dom.reportExportOverlay.classList.add('hidden');
  }

  /**
   * Compile active data snapshot for export.
   * @private
   */
  _getExportData() {
    const currentLevel = this.getCurrentWaterLevel() ?? 124.0;
    const scen = this.scenarioManager.getScenario(this.activeScenarioId) || {
      name: `Simulation Stage ${currentLevel.toFixed(1)}m MSL`,
      waterLevel: currentLevel,
      profileMode: this.floodWaterManager?.profileMode || 'planar',
      connectedOnly: this.floodWaterManager?.connectedOnly !== false,
      baselineWaterLevel: this.overlayManager?.scenarioComparisonService?.baselineWaterLevel ?? 124.0,
    };

    const comparison = this.scenarioDiffData || this.overlayManager?.scenarioComparisonService?.currentComparison || {};
    const rankedBuildings = this.buildingRiskData || this.overlayManager?.scenarioComparisonService?.rankedBuildings || [];
    const shelterAssessments = comparison.shelterAssessments || this.overlayManager?.scenarioComparisonService?.currentComparison?.shelterAssessments || [];
    const dataQuality = this.overlayManager?.scenarioComparisonService?.getDataQualityReport({
      proposedSites: this.overlayManager?.proposedSiteService?.evaluatedSites,
    }) || null;

    return { scenario: { ...scen }, comparison, rankedBuildings, shelterAssessments, dataQuality };
  }

  /**
   * Render live preview cards inside the Export Modal.
   */
  renderExportPreview() {
    if (!this.dom.exportPreviewContainer) return;
    const { scenario, comparison, rankedBuildings, shelterAssessments, dataQuality } = this._getExportData();
    const b = comparison.buildings || {};
    const r = comparison.roads || {};
    const s = comparison.shelters || {};
    const dq = dataQuality || {};

    const critCount = rankedBuildings.filter(x => x.risk?.priorityTier === 'CRITICAL' || x.risk?.priorityTier === 'critical').length;
    const highCount = rankedBuildings.filter(x => x.risk?.priorityTier === 'HIGH' || x.risk?.priorityTier === 'high').length;

    this.dom.exportPreviewContainer.innerHTML = `
      <div class="export-preview-grid">
        <div class="export-preview-card">
          <div class="metric-label">Modeled Scenario</div>
          <div class="metric-val text-cyan">${scenario.name}</div>
          <div class="metric-sub">Water Surface: ${scenario.waterLevel.toFixed(2)}m MSL | Baseline: ${(comparison.baselineWaterLevel ?? 124.0).toFixed(2)}m</div>
        </div>
        <div class="export-preview-card">
          <div class="metric-label">Newly Affected Buildings</div>
          <div class="metric-val text-amber">+${b.newlyAffectedCount ?? 0} (${b.newlyAffectedPercent ?? 0}%)</div>
          <div class="metric-sub">Denominator: ${b.validDenominator ?? 0} valid structures (${b.unknownCount ?? 0} NoData excluded)</div>
        </div>
        <div class="export-preview-card">
          <div class="metric-label">Route Lost (Flood-Isolated)</div>
          <div class="metric-val text-rose">${b.routeLostCount ?? 0} structures (${b.routeLostPercent ?? 0}%)</div>
          <div class="metric-sub">Top Priority: ${critCount} Critical | ${highCount} High</div>
        </div>
        <div class="export-preview-card">
          <div class="metric-label">Road & Shelter Status</div>
          <div class="metric-val text-emerald">+${r.newlyImpassable ?? 0} Impassable Rds</div>
          <div class="metric-sub">Shelters: ${s.operational ?? 0} operational, ${s.isolatedByRoads ?? 0} isolated, ${s.inundated ?? 0} submerged (Simulated)</div>
        </div>
        <div class="export-preview-card">
          <div class="metric-label">Data Quality &amp; Uncertainty Audit</div>
          <div class="metric-val text-cyan">${dq?.demCoverage?.status || 'VERIFIED'} / ${dq?.facilityProvenance?.status || 'UNVERIFIED'}</div>
          <div class="metric-sub">${dq?.roadTopology?.totalComponents || 67} road components · Facilities simulated · No verified hospital</div>
        </div>
      </div>
    `;
  }

  /**
   * Phase 6: Toggle or open Data Quality & Uncertainty Audit panel.
   * @param {boolean} [forceOpen]
   */
  toggleDataQualityPanel(forceOpen) {
    if (!this.dom.hudDataQuality) return;
    const shouldOpen = typeof forceOpen === 'boolean'
      ? forceOpen
      : this.dom.hudDataQuality.classList.contains('hidden');

    if (shouldOpen) {
      this.dom.hudDataQuality.classList.remove('hidden');
      this.renderDataQualityReport();
    } else {
      this.dom.hudDataQuality.classList.add('hidden');
    }
  }

  /**
   * Phase 6: Render live Data Quality, Uncertainty & Provenance indicators.
   */
  renderDataQualityReport() {
    if (!this.dom.dqContent) return;
    const dq = this.overlayManager?.scenarioComparisonService?.getDataQualityReport({
      proposedSites: this.overlayManager?.proposedSiteService?.evaluatedSites,
    });
    if (!dq) {
      this.dom.dqContent.innerHTML = `<div class="font-mono text-muted" style="padding:10px;">Initializing data quality audit...</div>`;
      return;
    }

    const cards = [
      {
        title: 'DEM Topography Coverage',
        tag: dq.demCoverage.status.toLowerCase().includes('verified') ? 'verified' : 'unknown',
        tagLabel: dq.demCoverage.status,
        metrics: `${dq.demCoverage.valid} Valid (${(100 - dq.demCoverage.unknownPercent).toFixed(1)}%) · ${dq.demCoverage.unknown} Unknown NoData`,
        desc: dq.demCoverage.description,
      },
      {
        title: 'Road Flood Classification',
        tag: dq.roadClassification.status.toLowerCase().includes('verified') ? 'verified' : 'unknown',
        tagLabel: dq.roadClassification.status,
        metrics: `${dq.roadClassification.evaluated} Evaluated · ${dq.roadClassification.unknown} Missing/Unknown Edges`,
        desc: dq.roadClassification.description,
      },
      {
        title: 'Road Network Graph Topology',
        tag: dq.roadTopology.status.toLowerCase(),
        tagLabel: dq.roadTopology.status,
        metrics: `${dq.roadTopology.totalComponents} Disconnected Graph Components`,
        desc: dq.roadTopology.description,
      },
      {
        title: 'Emergency Facility Provenance',
        tag: 'unknown',
        tagLabel: dq.facilityProvenance.status,
        metrics: `${dq.facilityProvenance.simulated} Simulated Shelters · 0 Verified Hospitals`,
        desc: dq.facilityProvenance.description,
      },
      {
        title: 'Proposed Emergency Assembly Sites',
        tag: 'proposed',
        tagLabel: dq.proposedSites.status,
        metrics: `${dq.proposedSites.total} Candidate Staging Locations (Unverified Proposals)`,
        desc: dq.proposedSites.description,
      },
      {
        title: 'Spatial Snapping & Proximity',
        tag: 'approximate',
        tagLabel: dq.spatialSnapping.status,
        metrics: `${dq.spatialSnapping.approximateCount} Snapped via Centroid Distance · ${dq.spatialSnapping.disconnectedCount} Disconnected`,
        desc: dq.spatialSnapping.description,
      },
      {
        title: 'Hydraulic Model Boundaries',
        tag: 'approximate',
        tagLabel: dq.modelAssumptions.status,
        metrics: 'Static DEM Bare-Earth Immersion (No hydrodynamic velocity/momentum)',
        desc: dq.modelAssumptions.description,
      },
    ];

    this.dom.dqContent.innerHTML = cards.map(c => `
      <div class="dq-card">
        <div class="dq-card-header">
          <span class="dq-card-title">${c.title}</span>
          <span class="dq-tag ${c.tag}">${c.tagLabel}</span>
        </div>
        <div class="dq-card-metrics font-mono">${c.metrics}</div>
        <div class="dq-card-desc">${c.desc}</div>
      </div>
    `).join('');
  }

  /**
   * Trigger RFC 4180 CSV export download.
   */
  downloadScenarioCSV() {
    const data = this._getExportData();
    const csv = this.scenarioManager.generateCSVReport(data);
    const safeName = (data.scenario.name || 'scenario').toLowerCase().replace(/[^a-z0-9]/g, '_');
    const filename = `highwater3d_${safeName}_${data.scenario.waterLevel.toFixed(1)}m.csv`;
    this.scenarioManager.downloadCSV(csv, filename);
  }

  /**
   * Open print-friendly HTML report in a new tab/window.
   */
  openScenarioPrintReport() {
    const data = this._getExportData();
    const html = this.scenarioManager.generateHTMLReport(data);
    this.scenarioManager.openPrintReport(html);
  }

  dispose() {
    this.eventListeners.forEach(({ target, event, handler }) => {
      target.removeEventListener(event, handler);
    });
    this.eventListeners = [];
  }
}
