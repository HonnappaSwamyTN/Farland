import { Telemetry } from './Telemetry.js';

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

    this.cacheDOMElements();
    this.telemetry = new Telemetry(this.dom);

    this.hoveredFeature = null;
    this.selectedFeature = null;
    this.lastInspectUpdate = 0;

    this.eventListeners = [];
    this.bindEvents();
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

      // Feature Inspector
      hudInspector: document.getElementById('hud-inspector'),
      inspectTag: document.getElementById('inspect-tag'),
      inspectContent: document.getElementById('inspect-content'),

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

    // 5. Mouse movement over 3D viewport for coordinate sampling & feature raycasting
    this.addEvent(this.dom.viewportContainer, 'mousemove', (e) => {
      const rect = this.dom.viewportContainer.getBoundingClientRect();
      this.telemetry.setMouseCoords(e.clientX, e.clientY, rect);
    });

    // 6. Viewport click to pin / select feature for presentation
    this.addEvent(this.dom.viewportContainer, 'click', (e) => {
      if (!this.overlayManager || !this.viewer) return;
      const rect = this.dom.viewportContainer.getBoundingClientRect();
      const mouseNdc = {
        x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
        y: -((e.clientY - rect.top) / rect.height) * 2 + 1,
      };
      const clicked = this.overlayManager.inspectFeature(mouseNdc, this.viewer.camera);
      this.selectedFeature = clicked;
      this.renderFeatureInspection(clicked);
    });

    // 7. Error Retry
    this.addEvent(this.dom.btnErrorRetry, 'click', () => {
      window.location.reload();
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
   * Programmatically pin/select a feature for presentation or inspection.
   * @param {Object|null} feat
   */
  selectFeature(feat) {
    this.selectedFeature = feat;
    this.renderFeatureInspection(feat);
  }

  /**
   * Render feature inspection card when hovering over an interactive asset.
   * @param {Object|null} feat
   */
  renderFeatureInspection(feat) {
    if (!this.dom.inspectContent || !this.dom.inspectTag) return;

    if (!feat) {
      if (this.hoveredFeature !== null) {
        this.hoveredFeature = null;
        this.dom.inspectTag.className = 'status-pill info';
        this.dom.inspectTag.textContent = 'HOVER OVER OBJECT';
        this.dom.inspectContent.innerHTML = `
          <p class="inspect-placeholder font-mono text-muted">
            Hover over a 3D building, road segment, or emergency facility pin to inspect verified attributes.
          </p>`;
        if (this.dom.hudInspector) this.dom.hudInspector.classList.remove('active');
      }
      return;
    }

    // Avoid rebuilding DOM if hovering the exact same feature
    if (this.hoveredFeature && this.hoveredFeature.id === feat.id) return;
    this.hoveredFeature = feat;

    if (this.dom.hudInspector) this.dom.hudInspector.classList.add('active');

    if (feat.kind === 'building') {
      const isHistoricalFlooded = feat.flooded;
      const modeledWater = typeof feat.modeledWaterElev === 'number'
        ? feat.modeledWaterElev
        : (this.floodWaterManager ? Math.round(this.floodWaterManager.getWaterElevationAt(feat.center.x, feat.center.z) * 100) / 100 : null);
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

      this.dom.inspectTag.className = `status-pill ${tagClass}`;
      this.dom.inspectTag.textContent = depthBadge;

      this.dom.inspectContent.innerHTML = `
        <div class="inspect-card">
          <div class="inspect-title-row">
            <span class="inspect-title font-mono">Structure ${feat.id}</span>
            <span class="inspect-val font-mono">${feat.areaSqM} m²</span>
          </div>
          <div class="inspect-meta-grid">
            <div class="inspect-row">
              <span class="inspect-label">Modeled Depth:</span>
              <span class="inspect-val ${isSimFlooded ? 'text-amber' : ''}">${depth > 0.05 ? `${depth.toFixed(2)} m` : '0.00 m (Dry)'}</span>
            </div>
            <div class="inspect-row">
              <span class="inspect-label">Base Elevation:</span>
              <span class="inspect-val">${feat.baseElevationM} m MSL</span>
            </div>
            <div class="inspect-row">
              <span class="inspect-label">Water Surface:</span>
              <span class="inspect-val">${modeledWater !== null ? `${modeledWater.toFixed(2)} m MSL` : 'Off'}</span>
            </div>
            <div class="inspect-row">
              <span class="inspect-label">SpaceNet 8 (Jul 2021):</span>
              <span class="inspect-val">${isHistoricalFlooded ? 'Flooded' : 'Normal'}</span>
            </div>
            <div class="inspect-row">
              <span class="inspect-label">Structure Height:</span>
              <span class="inspect-val">${feat.heightM} m (2 storeys)</span>
            </div>
          </div>
          <div class="inspect-disclaimer">
            ⚠️ Ground-contact depth only. Does not establish interior flooding, structural damage, or occupant risk.
          </div>
        </div>`;
    } else if (feat.kind === 'road') {
      const isHistoricalFlooded = feat.flooded;
      const depth = typeof feat.maxWaterDepth === 'number' ? feat.maxWaterDepth : 0;
      const status = feat.passabilityStatus || (depth > 0.15 ? 'submerged' : depth > 0 ? 'waterlogged' : 'passable');

      let tagClass = 'success';
      let tagText = 'PASSABLE';
      if (status === 'submerged') {
        tagClass = 'danger';
        tagText = `SUBMERGED (${depth.toFixed(2)}m)`;
      } else if (status === 'waterlogged') {
        tagClass = 'info';
        tagText = `WATERLOGGED (${depth.toFixed(2)}m)`;
      }

      this.dom.inspectTag.className = `status-pill ${tagClass}`;
      this.dom.inspectTag.textContent = tagText;

      this.dom.inspectContent.innerHTML = `
        <div class="inspect-card">
          <div class="inspect-title-row">
            <span class="inspect-title font-mono">Road Segment ${feat.id}</span>
            <span class="inspect-val font-mono">${feat.lengthMeters} m</span>
          </div>
          <div class="inspect-meta-grid">
            <div class="inspect-row">
              <span class="inspect-label">Model Passability:</span>
              <span class="inspect-val ${status !== 'passable' ? 'text-amber' : ''}">${status.toUpperCase()} (Max: ${depth.toFixed(2)}m)</span>
            </div>
            <div class="inspect-row">
              <span class="inspect-label">SpaceNet 8 Label:</span>
              <span class="inspect-val">${isHistoricalFlooded ? 'Flooded Cutoff' : 'Passable Route'}</span>
            </div>
            <div class="inspect-row">
              <span class="inspect-label">Elevation Range:</span>
              <span class="inspect-val">${feat.points && feat.points.length ? `${Math.round(feat.points[0].y)}m – ${Math.round(feat.points[feat.points.length - 1].y)}m` : 'N/A'}</span>
            </div>
          </div>
          <div class="inspect-disclaimer">
            ⚠️ Model-estimated terrain passability. Coarse model does not guarantee route safety or structural integrity.
          </div>
        </div>`;
    } else if (feat.kind === 'facility') {
      const status = feat.accessibilityStatus || 'operational';
      let tagClass = 'success';
      let tagText = 'OPERATIONAL';
      if (status === 'inundated') {
        tagClass = 'danger';
        tagText = 'SITE INUNDATED';
      } else if (status === 'isolated') {
        tagClass = 'info';
        tagText = 'ACCESS ISOLATED';
      }

      this.dom.inspectTag.className = `status-pill ${tagClass}`;
      this.dom.inspectTag.textContent = tagText;

      const depth = typeof feat.siteWaterDepth === 'number' ? feat.siteWaterDepth : 0;

      this.dom.inspectContent.innerHTML = `
        <div class="inspect-card">
          <div class="inspect-title-row">
            <span class="inspect-title font-mono">${feat.name}</span>
            <span class="inspect-val font-mono">${feat.id}</span>
          </div>
          <div class="inspect-meta-grid">
            <div class="inspect-row">
              <span class="inspect-label">Accessibility:</span>
              <span class="inspect-val ${status !== 'operational' ? 'text-amber' : ''}">${status.toUpperCase()}</span>
            </div>
            <div class="inspect-row">
              <span class="inspect-label">Site Ground Depth:</span>
              <span class="inspect-val">${depth > 0.05 ? `${depth.toFixed(2)} m` : 'Dry (0.00m)'}</span>
            </div>
            <div class="inspect-row">
              <span class="inspect-label">Nearby Roads (250m):</span>
              <span class="inspect-val">${feat.nearbyRoadStatus || 'Evaluated'}</span>
            </div>
            <div class="inspect-row">
              <span class="inspect-label">Ground Elevation:</span>
              <span class="inspect-val">${feat.elevationM} m MSL</span>
            </div>
          </div>
          <div class="inspect-disclaimer">
            ⚠️ Local 250m access corridor analysis. Regional network routing blocked by 58 disconnected road graph components.
          </div>
        </div>`;
    }
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

    // Feature inspection raycasting (throttled to ~15Hz)
    const now = performance.now();
    if (this.overlayManager && now - this.lastInspectUpdate > 65) {
      this.lastInspectUpdate = now;
      if (!this.selectedFeature) {
        const hovered = this.overlayManager.inspectFeature(mouseNdc, this.viewer.camera);
        this.renderFeatureInspection(hovered);
      }
    }
  }

  dispose() {
    this.eventListeners.forEach(({ target, event, handler }) => {
      target.removeEventListener(event, handler);
    });
    this.eventListeners = [];
  }
}
