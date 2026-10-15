import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const PROFILE_DIR = path.resolve('C:/Users/Honnu/.gemini/antigravity-ide/brain/1dba2c0f-c077-4e1b-a28a-7ac4568315f7/scratch/chrome_profile');
const SCREENSHOT_DIR = path.resolve('C:/Users/Honnu/.gemini/antigravity-ide/brain/1dba2c0f-c077-4e1b-a28a-7ac4568315f7/scratch');
const TARGET_URL = 'http://localhost:5173/';
const DEBUG_PORT = 9222;

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  console.log('[CDP M6 Verification] Starting Chrome headless session for Milestone 6...');
  if (!fs.existsSync(PROFILE_DIR)) {
    fs.mkdirSync(PROFILE_DIR, { recursive: true });
  }

  // 1. Launch Chrome
  const chromeArgs = [
    '--headless=new',
    `--remote-debugging-port=${DEBUG_PORT}`,
    `--user-data-dir=${PROFILE_DIR}`,
    '--window-size=1600,1000',
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

  // 2. Poll until debug endpoint is up
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
    console.error('[CDP M6 Verification] Failed to connect to Chrome debugging endpoint.');
    chromeProc.kill();
    process.exit(1);
  }

  console.log('[CDP M6 Verification] Connected to Chrome page target:', pageTarget.title || pageTarget.url);

  // 3. Connect via WebSocket
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
      if (data.error) {
        reject(data.error);
      } else {
        resolve(data.result);
      }
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

  // Enable CDP domains
  await sendCommand('Runtime.enable');
  await sendCommand('Page.enable');
  await sendCommand('Network.enable');

  console.log('[CDP M6 Verification] Waiting 4.5 seconds for 3D engine, DEM, overlays, and M6 impact modules to mount...');
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

  // --- STAGE 1: Low Water Stage (124.0m Baseline) ---
  console.log('\n======================================================');
  console.log('STAGE 1: Low Water Level (124.0m Normal Baseline)');
  console.log('======================================================');
  const lowState = await evalInBrowser(`(() => {
    const app = window.highWaterApp;
    const wm = app.floodWaterManager;
    const impactText = document.getElementById('impact-stats-text');
    return {
      waterLevel: wm.waterLevel,
      profileMode: wm.profileMode,
      impactText: impactText ? impactText.textContent : null,
      impact: wm.currentImpact
    };
  })()`);
  console.log('Low Stage State:', JSON.stringify(lowState, null, 2));
  await captureScreenshot('screenshot_m6_low_124m.png');

  // --- STAGE 2: Medium Water Stage (130.0m Moderate Flood) ---
  console.log('\n======================================================');
  console.log('STAGE 2: Medium Water Level (130.0m Moderate Inundation)');
  console.log('======================================================');
  await evalInBrowser(`(() => {
    const slider = document.getElementById('water-level-slider');
    slider.value = '130.0';
    slider.dispatchEvent(new Event('input', { bubbles: true }));
  })()`);
  await sleep(1000);

  const medState = await evalInBrowser(`(() => {
    const app = window.highWaterApp;
    const wm = app.floodWaterManager;
    const impactText = document.getElementById('impact-stats-text');
    return {
      waterLevel: wm.waterLevel,
      profileMode: wm.profileMode,
      impactText: impactText.textContent,
      buildingBreakdown: wm.currentImpact.buildingDepthBreakdown,
      roadBreakdown: wm.currentImpact.roadPassabilityBreakdown,
      shelterBreakdown: wm.currentImpact.shelterAccessibilityBreakdown
    };
  })()`);
  console.log('Medium Stage State:', JSON.stringify(medState, null, 2));
  await captureScreenshot('screenshot_m6_med_130m.png');

  // --- STAGE 3: High Water Stage (138.0m Extreme Catastrophe) ---
  console.log('\n======================================================');
  console.log('STAGE 3: High Water Level (138.0m Catastrophic Inundation)');
  console.log('======================================================');
  await evalInBrowser(`(() => {
    const slider = document.getElementById('water-level-slider');
    slider.value = '138.0';
    slider.dispatchEvent(new Event('input', { bubbles: true }));
  })()`);
  await sleep(1000);

  const highState = await evalInBrowser(`(() => {
    const app = window.highWaterApp;
    const wm = app.floodWaterManager;
    const impactText = document.getElementById('impact-stats-text');
    return {
      waterLevel: wm.waterLevel,
      profileMode: wm.profileMode,
      impactText: impactText.textContent,
      buildingBreakdown: wm.currentImpact.buildingDepthBreakdown,
      roadBreakdown: wm.currentImpact.roadPassabilityBreakdown,
      shelterBreakdown: wm.currentImpact.shelterAccessibilityBreakdown
    };
  })()`);
  console.log('High Stage State:', JSON.stringify(highState, null, 2));
  await captureScreenshot('screenshot_m6_high_138m.png');

  // --- STAGE 4: Slope-Aware Valley Thalweg Profile Mode ---
  console.log('\n======================================================');
  console.log('STAGE 4: Slope-Aware Profile Mode Toggle');
  console.log('======================================================');
  await evalInBrowser(`(() => {
    const btnProfile = document.getElementById('btn-toggle-profile');
    btnProfile.click();
  })()`);
  await sleep(1000);

  const slopeProfileState = await evalInBrowser(`(() => {
    const app = window.highWaterApp;
    const wm = app.floodWaterManager;
    const btn = document.getElementById('btn-toggle-profile');
    const surfWest = wm.getWaterSurfaceAtWorld(-1000, 700);
    const surfEast = wm.getWaterSurfaceAtWorld(900, -1100);
    return {
      profileMode: wm.profileMode,
      btnText: btn.textContent,
      btnActive: btn.classList.contains('active'),
      surfWestM: Math.round(surfWest * 100) / 100,
      surfEastM: Math.round(surfEast * 100) / 100,
      valleyDropM: Math.round((surfWest - surfEast) * 100) / 100,
      impact: wm.currentImpact
    };
  })()`);
  console.log('Slope-Aware Profile State:', JSON.stringify(slopeProfileState, null, 2));
  await captureScreenshot('screenshot_m6_slope_profile.png');

  // --- STAGE 5: Building Depth Shading & Passability Visualization ---
  console.log('\n======================================================');
  console.log('STAGE 5: Building Depth & Road Passability Shading Verification');
  console.log('======================================================');
  await evalInBrowser(`(() => {
    // Set to 132m for rich color distribution
    const slider = document.getElementById('water-level-slider');
    slider.value = '132.0';
    slider.dispatchEvent(new Event('input', { bubbles: true }));
    const btnDepth = document.getElementById('btn-toggle-depth');
    const btnPass = document.getElementById('btn-toggle-passability');
    if (!btnDepth.classList.contains('active')) btnDepth.click();
    if (!btnPass.classList.contains('active')) btnPass.click();
  })()`);
  await sleep(1000);

  const depthPassState = await evalInBrowser(`(() => {
    const app = window.highWaterApp;
    const bldLayer = app.overlayManager.buildingLayer;
    const roadLayer = app.overlayManager.roadLayer;
    const facLayer = app.overlayManager.facilityLayer;
    return {
      buildingDepthMode: bldLayer.depthColorMode,
      roadPassabilityMode: roadLayer.passabilityMode,
      buildingDepthStats: bldLayer.depthStats,
      roadPassabilityStats: roadLayer.passabilityStats,
      shelterSummary: app.floodWaterManager.currentImpact.shelterSummary
    };
  })()`);
  console.log('Depth & Passability Shading State:', JSON.stringify(depthPassState, null, 2));
  await captureScreenshot('screenshot_m6_depth_shading.png');

  // --- STAGE 6: Feature Hover Inspection Card with M6 Disclaimers ---
  console.log('\n======================================================');
  console.log('STAGE 6: Inspect Feature HUD (Building & Shelter Disclaimers)');
  console.log('======================================================');
  const inspectCardState = await evalInBrowser(`(() => {
    const app = window.highWaterApp;
    const bld = app.overlayManager.buildingLayer.features.find(f => f.flooded && f.currentWaterDepth > 0.5);
    app.ui.renderFeatureInspection(bld);
    const hud = document.getElementById('hud-inspector');
    const tag = document.getElementById('inspect-tag');
    const content = document.getElementById('inspect-content');
    return {
      hudVisible: !hud.classList.contains('hidden'),
      tagText: tag.textContent,
      contentHtmlSnippet: content.innerHTML.substring(0, 300)
    };
  })()`);
  console.log('Inspect Card State:', JSON.stringify(inspectCardState, null, 2));
  await captureScreenshot('screenshot_m6_inspector_active.png');

  // --- STAGE 7: Performance & WebGL Telemetry ---
  console.log('\n======================================================');
  console.log('STAGE 7: Render Diagnostics & WebGL Frame Performance');
  console.log('======================================================');
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

  // --- STAGE 8: Console & Network Logs ---
  console.log('\n======================================================');
  console.log('STAGE 8: Browser Console & Network Verification');
  console.log('======================================================');
  console.log(`Console Messages Logged: ${consoleLogs.length}`);
  consoleLogs.forEach((l) => console.log(`  [${l.type.toUpperCase()}] ${l.text}`));

  if (networkErrors.length === 0) {
    console.log('[PASS] 0 network failures. All assets loaded successfully.');
  } else {
    networkErrors.forEach((e) => console.log(`  [Network Error] ${JSON.stringify(e)}`));
  }

  // Cleanup
  ws.close();
  chromeProc.kill();
  console.log('\n[CDP M6 Verification] Verification completed successfully.');
}

main().catch((err) => {
  console.error('[CDP M6 Fatal Error]:', err);
  process.exit(1);
});
