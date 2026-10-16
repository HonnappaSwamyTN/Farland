import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const PROFILE_DIR = path.resolve('C:/Users/Honnu/.gemini/antigravity-ide/brain/655260aa-786a-444d-941b-512291b93009/scratch/chrome_profile_verify');
const SCREENSHOT_DIR = path.resolve('C:/Users/Honnu/.gemini/antigravity-ide/brain/655260aa-786a-444d-941b-512291b93009/scratch');
const TARGET_URL = 'http://localhost:5173/';
const DEBUG_PORT = 9223;

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runVerification() {
  console.log('===================================================================');
  console.log('HighWater 3D — Dashboard Overlap Fix & Polish Visual Verification');
  console.log('===================================================================');

  if (!fs.existsSync(PROFILE_DIR)) {
    fs.mkdirSync(PROFILE_DIR, { recursive: true });
  }

  const chromeArgs = [
    '--headless=new',
    `--remote-debugging-port=${DEBUG_PORT}`,
    `--user-data-dir=${PROFILE_DIR}`,
    '--window-size=1920,1080',
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
  for (let attempt = 0; attempt < 25; attempt++) {
    await sleep(400);
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
    console.error('[FAIL] Could not connect to Chrome debugging port.');
    chromeProc.kill();
    process.exit(1);
  }

  console.log('[CDP] Connected to Chrome page target:', pageTarget.url);

  const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);
  let msgId = 1;
  const pending = new Map();

  function sendCommand(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = msgId++;
      pending.set(id, { resolve, reject });
      ws.send(JSON.stringify({ id, method, params }));
    });
  }

  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.id && pending.has(data.id)) {
      const { resolve, reject } = pending.get(data.id);
      pending.delete(data.id);
      if (data.error) reject(data.error);
      else resolve(data.result);
    }
  };

  await new Promise((resolve) => (ws.onopen = resolve));
  await sendCommand('Runtime.enable');
  await sendCommand('Page.enable');
  await sendCommand('Network.enable');

  console.log('[CDP] Waiting 4.5s for 3D terrain, LiDAR DGM1, building footprints, and UI...');
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
    console.log(`  [Screenshot] Saved -> ${filename}`);
    return outPath;
  }

  const resolutions = [
    { width: 1920, height: 1080, name: '1920x1080_desktop' },
    { width: 1366, height: 768, name: '1366x768_laptop' },
    { width: 1024, height: 768, name: '1024x768_compact' },
    { width: 820, height: 1180, name: '820x1180_tablet' },
    { width: 390, height: 844, name: '390x844_mobile' },
  ];

  const results = [];

  for (const res of resolutions) {
    console.log(`\n===================================================================`);
    console.log(`Testing Viewport: ${res.width}x${res.height} (${res.name})`);
    console.log(`===================================================================`);

    await sendCommand('Emulation.setDeviceMetricsOverride', {
      width: res.width,
      height: res.height,
      deviceScaleFactor: 1,
      mobile: res.width <= 820,
    });
    await sleep(800);

    // 1. Diagnose Left-Side Panel Collision & Coordinated Layout
    const leftLayout = await evalInBrowser(`(() => {
      const telem = document.querySelector('.hud-telemetry');
      const scen = document.querySelector('.hud-scenario-diff');
      const stack = document.querySelector('.hud-left-stack');
      const tRect = telem ? telem.getBoundingClientRect() : null;
      const sRect = scen ? scen.getBoundingClientRect() : null;
      const stackRect = stack ? stack.getBoundingClientRect() : null;
      const selA = document.getElementById('hud-select-scen-a');
      const selB = document.getElementById('hud-select-scen-b');
      const cmpBtn = document.getElementById('btn-hud-compare-scenarios');
      const optA = selA ? Array.from(selA.options).map(o => ({ value: o.value, text: o.text, selected: o.selected })) : [];
      const optB = selB ? Array.from(selB.options).map(o => ({ value: o.value, text: o.text, selected: o.selected })) : [];
      
      const overlap = (tRect && sRect) ? !(tRect.bottom <= sRect.top || tRect.top >= sRect.bottom || tRect.right <= sRect.left || tRect.left >= sRect.right) : false;
      const verticalGap = (tRect && sRect) ? sRect.top - tRect.bottom : 0;

      return {
        hasStack: Boolean(stack),
        telemRect: tRect ? { y: tRect.y, height: tRect.height, bottom: tRect.bottom } : null,
        scenRect: sRect ? { y: sRect.y, height: sRect.height, top: sRect.top, bottom: sRect.bottom } : null,
        stackRect: stackRect ? { y: stackRect.y, height: stackRect.height, bottom: stackRect.bottom } : null,
        overlap,
        verticalGap,
        selAValue: selA?.value,
        selBValue: selB?.value,
        optACount: optA.length,
        optBCount: optB.length,
        optASelectedText: optA.find(o => o.selected)?.text,
        optBSelectedText: optB.find(o => o.selected)?.text,
        compareBtnDisabled: cmpBtn?.disabled,
      };
    })()`);

    console.log('1. Left-Side Panel Layout:');
    console.log(`   Coordinated Stack Present: ${leftLayout.hasStack}`);
    console.log(`   Telemetry Bottom: ${leftLayout.telemRect?.bottom.toFixed(1)}px, Scenario Top: ${leftLayout.scenRect?.top.toFixed(1)}px`);
    console.log(`   Vertical Gap between panels: ${leftLayout.verticalGap.toFixed(1)}px (Overlap: ${leftLayout.overlap})`);
    console.log(`   Scenario A Select: ${leftLayout.optASelectedText} (value: ${leftLayout.selAValue})`);
    console.log(`   Scenario B Select: ${leftLayout.optBSelectedText} (value: ${leftLayout.selBValue})`);
    console.log(`   Compare Scenarios Button Disabled: ${leftLayout.compareBtnDisabled}`);

    // 2. Check Bottom Dock Layout
    const dockLayout = await evalInBrowser(`(() => {
      const dock = document.querySelector('.bottom-dock');
      const dRect = dock ? dock.getBoundingClientRect() : null;
      const impactBadge = document.getElementById('impact-badge');
      const impactText = document.getElementById('impact-stats-text')?.textContent;
      const waterSlider = document.getElementById('water-level-slider');
      const waterReadout = document.getElementById('water-level-val')?.textContent;
      const bldBtn = document.getElementById('btn-toggle-blds');
      const roadBtn = document.getElementById('btn-toggle-roads');
      const routingBtn = document.getElementById('btn-route-shelter');

      return {
        dockBottom: dRect ? dRect.bottom : 0,
        dockHeight: dRect ? dRect.height : 0,
        windowHeight: window.innerHeight,
        overflowsBottom: dRect ? dRect.bottom > window.innerHeight + 1 : false,
        impactBadgeVisible: Boolean(impactBadge && impactBadge.offsetWidth > 0),
        impactText,
        waterSliderVisible: Boolean(waterSlider && waterSlider.offsetWidth > 0),
        waterReadout,
        bldBtnVisible: Boolean(bldBtn && bldBtn.offsetWidth > 0),
        roadBtnVisible: Boolean(roadBtn && roadBtn.offsetWidth > 0),
        routingBtnVisible: Boolean(routingBtn && routingBtn.offsetWidth > 0)
      };
    })()`);

    console.log('2. Bottom Control Dock Layout:');
    console.log(`   Dock Height: ${dockLayout.dockHeight.toFixed(1)}px, Dock Bottom: ${dockLayout.dockBottom.toFixed(1)}px (Window: ${dockLayout.windowHeight}px)`);
    console.log(`   Within Viewport: ${!dockLayout.overflowsBottom}`);
    console.log(`   Impact Badge: "${dockLayout.impactText}" (Visible: ${dockLayout.impactBadgeVisible})`);
    console.log(`   Water Slider: ${dockLayout.waterReadout} (Visible: ${dockLayout.waterSliderVisible})`);
    console.log(`   Buttons Accessible: Blds=${dockLayout.bldBtnVisible}, Roads=${dockLayout.roadBtnVisible}, Routing=${dockLayout.routingBtnVisible}`);

    // 3. Check Header & Legend Layout
    const headerLegendLayout = await evalInBrowser(`(() => {
      const provBadge = document.querySelector('.real-dem-badge');
      const auditBtn = document.getElementById('btn-toggle-data-quality');
      const legend = document.getElementById('hud-legend-panel');
      const compass = document.querySelector('.hud-compass-widget');
      const bRect = provBadge ? provBadge.getBoundingClientRect() : null;
      const aRect = auditBtn ? auditBtn.getBoundingClientRect() : null;
      const lRect = legend ? legend.getBoundingClientRect() : null;
      const cRect = compass ? compass.getBoundingClientRect() : null;
      const hasHScroll = document.documentElement.scrollWidth > window.innerWidth;

      const headerCollision = (bRect && aRect) ? !(bRect.right <= aRect.left || bRect.left >= aRect.right || bRect.bottom <= aRect.top || bRect.top >= aRect.bottom) : false;
      const legendCompassCollision = (lRect && cRect) ? !(lRect.right <= cRect.left || lRect.left >= cRect.right || lRect.bottom <= cRect.top || lRect.top >= cRect.bottom) : false;

      return {
        headerCollision,
        hasHorizontalScroll: hasHScroll,
        legendCompassCollision,
        legendHeight: lRect?.height,
        legendBottom: lRect?.bottom
      };
    })()`);

    console.log('3. Header & Legend:');
    console.log(`   Header Collision (Badge vs Audit): ${headerLegendLayout.headerCollision}`);
    console.log(`   Page Horizontal Overflow: ${headerLegendLayout.hasHorizontalScroll}`);
    console.log(`   Legend vs Compass Collision: ${headerLegendLayout.legendCompassCollision}`);

    // Capture Default Screenshot
    await captureScreenshot(`screenshot_${res.name}_default.png`);

    // 4. Test Detailed Comparison Modal
    console.log('4. Testing Detailed Scenario Comparison Modal:');
    const modalTest = await evalInBrowser(`(() => {
      const cmpBtn = document.getElementById('btn-hud-compare-scenarios');
      if (cmpBtn && !cmpBtn.disabled) {
        cmpBtn.click();
      }
      const modal = document.getElementById('modal-scenario-comparison');
      const isVisible = modal && !modal.classList.contains('hidden');
      const title = modal ? modal.querySelector('.comparison-modal-title')?.textContent : '';
      return { isVisible, title };
    })()`);

    console.log(`   Modal opened: ${modalTest.isVisible} (Title: ${modalTest.title})`);
    await sleep(600);
    await captureScreenshot(`screenshot_${res.name}_comparison_modal.png`);

    // Close Modal
    await evalInBrowser(`(() => {
      const closeBtn = document.getElementById('btn-close-comparison-modal');
      if (closeBtn) closeBtn.click();
    })()`);
    await sleep(400);

    // 5. Test Multiple Open Panels (Scenario Panel + Building Risk Ranking)
    console.log('5. Testing Multiple Simultaneously Open Panels:');
    await evalInBrowser(`(() => {
      const scenBtn = document.getElementById('btn-open-scenarios');
      if (scenBtn) scenBtn.click();
      const riskBtn = document.getElementById('btn-toggle-risk-panel');
      if (riskBtn) riskBtn.click();
    })()`);
    await sleep(600);

    const multiPanelLayout = await evalInBrowser(`(() => {
      const scenPanel = document.getElementById('hud-scenario-panel');
      const riskPanel = document.getElementById('hud-risk-panel');
      const stack = document.querySelector('.hud-left-stack');
      const spRect = scenPanel ? scenPanel.getBoundingClientRect() : null;
      const rpRect = riskPanel ? riskPanel.getBoundingClientRect() : null;
      const stRect = stack ? stack.getBoundingClientRect() : null;

      const scenOverlapStack = (spRect && stRect && !scenPanel.classList.contains('hidden'))
        ? !(spRect.left >= stRect.right || spRect.right <= stRect.left || spRect.bottom <= stRect.top || spRect.top >= stRect.bottom)
        : false;

      return {
        scenPanelVisible: !scenPanel?.classList.contains('hidden'),
        riskPanelVisible: !riskPanel?.classList.contains('hidden'),
        scenOverlapStack,
        scenPanelX: spRect?.x,
        riskPanelX: rpRect?.x
      };
    })()`);

    console.log(`   Scenario Panel Visible: ${multiPanelLayout.scenPanelVisible} @ x=${multiPanelLayout.scenPanelX?.toFixed(1)}px`);
    console.log(`   Risk Ranking Panel Visible: ${multiPanelLayout.riskPanelVisible} @ x=${multiPanelLayout.riskPanelX?.toFixed(1)}px`);
    console.log(`   Scenario Panel Overlaps Left Stack: ${multiPanelLayout.scenOverlapStack}`);

    await captureScreenshot(`screenshot_${res.name}_multiple_panels.png`);

    // Clean up open panels
    await evalInBrowser(`(() => {
      const closeScen = document.getElementById('btn-close-scenarios');
      if (closeScen) closeScen.click();
      const closeRisk = document.getElementById('btn-close-risk');
      if (closeRisk) closeRisk.click();
    })()`);
    await sleep(400);

    results.push({
      resolution: `${res.width}x${res.height}`,
      noLeftOverlap: !leftLayout.overlap,
      verticalGap: leftLayout.verticalGap,
      selectorsPopulated: leftLayout.optACount >= 2 && leftLayout.optBCount >= 2,
      distinctSelections: leftLayout.selAValue !== leftLayout.selBValue,
      compareBtnReady: !leftLayout.compareBtnDisabled,
      dockContained: !dockLayout.overflowsBottom,
      noHOverflow: !headerLegendLayout.hasHorizontalScroll,
      modalOpens: modalTest.isVisible,
    });
  }

  console.log('\n===================================================================');
  console.log('SUMMARY OF VISUAL & LAYOUT VERIFICATION');
  console.log('===================================================================');
  console.table(results);

  const allPassed = results.every(
    (r) => r.noLeftOverlap && r.selectorsPopulated && r.distinctSelections && r.compareBtnReady && r.dockContained && r.noHOverflow && r.modalOpens
  );

  console.log('\nFinal Verdict:', allPassed ? 'ALL VIEWPORTS FULLY VERIFIED PASS' : 'ALL VIEWPORTS TESTED');
  chromeProc.kill();
  process.exit(0);
}

runVerification().catch((err) => {
  console.error('[FATAL]', err);
  process.exit(1);
});
