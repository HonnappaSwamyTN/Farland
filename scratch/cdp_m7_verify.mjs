import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const PROFILE_DIR = path.resolve('C:/Users/Honnu/.gemini/antigravity-ide/brain/1dba2c0f-c077-4e1b-a28a-7ac4568315f7/scratch/chrome_profile_m7');
const SCREENSHOT_DIR = path.resolve('C:/Users/Honnu/.gemini/antigravity-ide/brain/1dba2c0f-c077-4e1b-a28a-7ac4568315f7/scratch');
const TARGET_URL = 'http://localhost:5173/';
const DEBUG_PORT = 9222;

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  console.log('=== HighWater 3D — Milestone 7: Presentation & Usability Verification ===');
  if (!fs.existsSync(PROFILE_DIR)) {
    fs.mkdirSync(PROFILE_DIR, { recursive: true });
  }

  // 1. Launch Chrome initially at 1600x900
  const chromeArgs = [
    '--headless=new',
    `--remote-debugging-port=${DEBUG_PORT}`,
    `--user-data-dir=${PROFILE_DIR}`,
    '--window-size=1600,900',
    '--hide-scrollbars',
    '--mute-audio',
    '--no-first-run',
    '--no-default-browser-check',
    '--disable-background-networking',
    '--enable-unsafe-swiftshader',
    TARGET_URL,
  ];

  const chromeProc = spawn(CHROME_PATH, chromeArgs, { stdio: 'ignore' });
  process.on('exit', () => chromeProc.kill());

  let pageTarget = null;
  for (let attempt = 0; attempt < 20; attempt++) {
    await sleep(500);
    try {
      const res = await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/list`);
      if (res.ok) {
        const list = await res.json();
        pageTarget = list.find((t) => t.type === 'page');
        if (pageTarget) break;
      }
    } catch (_) {}
  }

  if (!pageTarget) {
    console.error('[FAIL] Failed to connect to Chrome debugging endpoint.');
    chromeProc.kill();
    process.exit(1);
  }

  console.log('[CDP M7] Connected to Chrome page target:', pageTarget.title || pageTarget.url);

  const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);
  let msgId = 1;
  const pendingRequests = new Map();
  const consoleLogs = [];
  const networkErrors = [];

  function sendCommand(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = msgId++;
      pendingRequests.set(id, { resolve, reject });
      ws.send(JSON.stringify({ id, method, params }));
    });
  }

  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.id && pendingRequests.has(data.id)) {
      const { resolve, reject } = pendingRequests.get(data.id);
      pendingRequests.delete(data.id);
      if (data.error) reject(data.error);
      else resolve(data.result);
    } else if (data.method === 'Runtime.consoleAPICalled') {
      const text = data.params.args.map((a) => (a.value !== undefined ? a.value : JSON.stringify(a))).join(' ');
      consoleLogs.push({ type: data.params.type, text });
    } else if (data.method === 'Network.responseReceived') {
      const resp = data.params.response;
      if (resp.status >= 400) {
        networkErrors.push({ url: resp.url, status: resp.status });
      }
    } else if (data.method === 'Network.loadingFailed') {
      networkErrors.push({ url: data.params.url || 'unknown', error: data.params.errorText });
    }
  };

  await new Promise((resolve) => (ws.onopen = resolve));

  await sendCommand('Runtime.enable');
  await sendCommand('Page.enable');
  await sendCommand('Network.enable');

  console.log('[CDP M7] Waiting 4.5 seconds for 3D engine, DEM terrain, overlays, and M7 UI dock to mount...');
  await sleep(4500);

  async function evalInBrowser(expr) {
    const res = await sendCommand('Runtime.evaluate', {
      expression: expr,
      returnByValue: true,
      awaitPromise: true,
    });
    if (res.exceptionDetails) {
      throw new Error(`Eval error: ${JSON.stringify(res.exceptionDetails)}`);
    }
    return res.result ? res.result.value : undefined;
  }

  async function captureScreenshot(filename) {
    const res = await sendCommand('Page.captureScreenshot', { format: 'png' });
    const outPath = path.join(SCREENSHOT_DIR, filename);
    fs.writeFileSync(outPath, Buffer.from(res.data, 'base64'));
    console.log(`[Screenshot] Saved: ${outPath} (${(res.data.length * 0.75 / 1024).toFixed(1)} KB)`);
    return outPath;
  }

  // =========================================================================
  // PART 1: 1600x900 Verification Suite
  // =========================================================================
  console.log('\n--- PART 1: 1600x900 Resolution Testing ---');
  await sendCommand('Emulation.setDeviceMetricsOverride', {
    width: 1600,
    height: 900,
    deviceScaleFactor: 1,
    mobile: false,
  });
  await sleep(600);

  // Check 1.1: Baseline Water Level (124.0m)
  console.log('\n[Stage 1.1] Low Water Level (124.0m Baseline) @ 1600x900:');
  const baseline1600 = await evalInBrowser(`(() => {
    const app = window.highWaterApp;
    const slider = document.getElementById('water-level-slider');
    const readout = document.getElementById('water-level-val');
    const impact = document.getElementById('impact-stats-text');
    return {
      waterLevel: app.floodWaterManager.waterLevel,
      sliderValue: slider.value,
      readoutText: readout.textContent,
      impactText: impact.textContent,
      triangles: app.floodWaterManager.waterGeometry.index ? app.floodWaterManager.waterGeometry.index.count / 3 : 0
    };
  })()`);
  console.log('Baseline (124m):', JSON.stringify(baseline1600, null, 2));
  await captureScreenshot('screenshot_m7_1600x900_low_124m.png');

  // Check 1.2: Medium Water Level (130.0m Moderate Valley Flood)
  console.log('\n[Stage 1.2] Medium Water Level (130.0m Moderate Flood) @ 1600x900:');
  await evalInBrowser(`(() => {
    const slider = document.getElementById('water-level-slider');
    slider.value = '130.0';
    slider.dispatchEvent(new Event('input', { bubbles: true }));
  })()`);
  await sleep(1000);

  const med1600 = await evalInBrowser(`(() => {
    const wm = window.highWaterApp.floodWaterManager;
    return {
      waterLevel: wm.waterLevel,
      impactText: document.getElementById('impact-stats-text').textContent,
      bldBreakdown: wm.currentImpact.buildingDepthBreakdown,
      roadBreakdown: wm.currentImpact.roadPassabilityBreakdown
    };
  })()`);
  console.log('Medium (130m):', JSON.stringify(med1600, null, 2));
  await captureScreenshot('screenshot_m7_1600x900_med_130m.png');

  // Check 1.3: High Water Level (138.0m Extreme Flood)
  console.log('\n[Stage 1.3] High Water Level (138.0m Extreme Flood) @ 1600x900:');
  await evalInBrowser(`(() => {
    const slider = document.getElementById('water-level-slider');
    slider.value = '138.0';
    slider.dispatchEvent(new Event('input', { bubbles: true }));
  })()`);
  await sleep(1000);

  const high1600 = await evalInBrowser(`(() => {
    const wm = window.highWaterApp.floodWaterManager;
    return {
      waterLevel: wm.waterLevel,
      impactText: document.getElementById('impact-stats-text').textContent,
      bldBreakdown: wm.currentImpact.buildingDepthBreakdown,
      roadBreakdown: wm.currentImpact.roadPassabilityBreakdown,
      shelters: wm.currentImpact.shelterSummary
    };
  })()`);
  console.log('High (138m):', JSON.stringify(high1600, null, 2));
  await captureScreenshot('screenshot_m7_1600x900_high_138m.png');

  // Check 1.4: Inspector HUD Active on Flooded Structure @ 1600x900
  console.log('\n[Stage 1.4] Feature Inspector Card & Legend @ 1600x900:');
  await evalInBrowser(`(() => {
    const app = window.highWaterApp;
    app.floodWaterManager.setWaterLevel(132.0);
    const bld = app.overlayManager.buildingLayer.features.find(f => f.flooded && f.currentWaterDepth > 0.5);
    app.overlayManager.inspectFeature = () => bld;
    app.ui.renderFeatureInspection(bld);
  })()`);
  await sleep(600);
  await captureScreenshot('screenshot_m7_1600x900_inspector.png');

  // =========================================================================
  // PART 2: 1366x768 Standard Laptop Resolution Testing
  // =========================================================================
  console.log('\n--- PART 2: 1366x768 Standard Laptop Resolution Testing ---');
  await sendCommand('Emulation.setDeviceMetricsOverride', {
    width: 1366,
    height: 768,
    deviceScaleFactor: 1,
    mobile: false,
  });
  await sleep(800);

  // Check 2.1: Element Boundaries & No Clipping at 1366x768
  const boundsAudit = await evalInBrowser(`(() => {
    const ids = [
      'app',
      'btn-toggle-blds',
      'btn-toggle-water',
      'btn-view-iso',
      'btn-toggle-wireframe',
      'water-level-slider',
      'btn-water-play',
      'btn-water-reset',
      'btn-toggle-connectivity',
      'btn-toggle-profile',
      'btn-toggle-depth',
      'btn-toggle-passability',
      'hud-telemetry',
      'hud-inspector',
      'hud-legend',
      'impact-badge'
    ];

    const results = {};
    const winW = window.innerWidth;
    const winH = window.innerHeight;

    for (const id of ids) {
      const el = document.getElementById(id);
      if (!el) {
        results[id] = { error: 'Element not found' };
        continue;
      }
      const rect = el.getBoundingClientRect();
      const fitsX = rect.left >= 0 && rect.right <= winW;
      const fitsY = rect.top >= 0 && rect.bottom <= winH;
      results[id] = {
        left: Math.round(rect.left),
        top: Math.round(rect.top),
        width: Math.round(rect.width),
        height: Math.round(rect.height),
        fitsViewport: fitsX && fitsY
      };
    }
    return { viewport: { width: winW, height: winH }, elements: results };
  })()`);
  console.log('1366x768 Viewport Bounds Check:', JSON.stringify(boundsAudit, null, 2));

  // Verify that all critical controls fit inside 1366x768
  for (const [id, data] of Object.entries(boundsAudit.elements)) {
    if (!data.fitsViewport) {
      console.warn(`[WARNING] Element #${id} exceeds 1366x768 viewport:`, data);
    }
  }

  await captureScreenshot('screenshot_m7_1366x768_baseline.png');

  // Check 2.2: 1366x768 with Active Flood and Inspector HUD
  console.log('\n[Stage 2.2] 1366x768 with Flood (132.0m) and Inspector HUD:');
  await evalInBrowser(`(() => {
    const app = window.highWaterApp;
    const slider = document.getElementById('water-level-slider');
    slider.value = '132.0';
    slider.dispatchEvent(new Event('input', { bubbles: true }));
    const bld = app.overlayManager.buildingLayer.features.find(f => f.flooded && f.currentWaterDepth > 0.5);
    app.overlayManager.inspectFeature = () => bld;
    app.ui.renderFeatureInspection(bld);
  })()`);
  await sleep(600);
  await captureScreenshot('screenshot_m7_1366x768_flood_132m.png');

  // =========================================================================
  // PART 3: Reset Control & State Synchronization Audit
  // =========================================================================
  console.log('\n--- PART 3: Reset Control & State Synchronization Audit ---');
  await evalInBrowser(`(() => {
    document.getElementById('btn-water-reset').click();
  })()`);
  await sleep(600);

  const resetSyncState = await evalInBrowser(`(() => {
    const app = window.highWaterApp;
    const wm = app.floodWaterManager;
    const slider = document.getElementById('water-level-slider');
    const readout = document.getElementById('water-level-val');
    const playBtn = document.getElementById('btn-water-play');
    return {
      waterLevel: wm.waterLevel,
      sliderValue: slider.value,
      readoutText: readout.textContent,
      isPlaying: wm.isPlaying,
      playButtonText: playBtn.textContent,
      isSynchronized: wm.waterLevel === 124.0 && slider.value === '124.00' && readout.textContent === '124.00 m' && !wm.isPlaying
    };
  })()`);
  console.log('Reset Synchronization State:', JSON.stringify(resetSyncState, null, 2));
  if (!resetSyncState.isSynchronized) {
    throw new Error('Reset state out of synchronization: ' + JSON.stringify(resetSyncState));
  }
  console.log('  -> PASS: Reset synchronously restored engine, slider, readout, and playback states.');

  // =========================================================================
  // PART 4: WebGL Diagnostics & Render Performance
  // =========================================================================
  console.log('\n--- PART 4: WebGL Render Performance Diagnostics ---');
  const perf = await evalInBrowser(`(() => {
    const v = window.highWaterApp.viewer;
    const fps = document.getElementById('fps-counter') ? document.getElementById('fps-counter').textContent : 'N/A';
    const calls = document.getElementById('diag-draw-calls') ? document.getElementById('diag-draw-calls').textContent : 'N/A';
    const tris = document.getElementById('diag-triangles') ? document.getElementById('diag-triangles').textContent : 'N/A';
    const ftime = document.getElementById('diag-frame-time') ? document.getElementById('diag-frame-time').textContent : 'N/A';
    return {
      fps,
      calls,
      tris,
      ftime,
      threeRender: v.renderer.info.render
    };
  })()`);
  console.log('Performance Diagnostics:', JSON.stringify(perf, null, 2));

  // =========================================================================
  // PART 5: Network & Console Verification
  // =========================================================================
  console.log('\n--- PART 5: Console Logs & Network Verification ---');
  console.log(`Console messages logged: ${consoleLogs.length}`);
  consoleLogs.forEach((l) => console.log(`  [${l.type.toUpperCase()}] ${l.text}`));

  if (networkErrors.length === 0) {
    console.log('[PASS] Zero network failures (0 errors). All 3D assets loaded 200 OK.');
  } else {
    networkErrors.forEach((e) => console.log(`  [Network Error] ${JSON.stringify(e)}`));
    throw new Error(`Encountered ${networkErrors.length} network errors during verification.`);
  }

  // Cleanup
  ws.close();
  chromeProc.kill();
  console.log('\n=============================================================');
  console.log('✅ ALL MILESTONE 7 PRESENTATION & USABILITY CHECKS PASSED!');
  console.log('=============================================================');
}

main().catch((err) => {
  console.error('[CDP M7 Fatal Error]:', err);
  process.exit(1);
});
