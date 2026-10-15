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

  let pageTarget = null;
  for (let attempt = 0; attempt < 20; attempt++) {
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

  const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);
  let msgId = 1;
  const pendingRequests = new Map();

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
    }
  };

  await new Promise((resolve) => (ws.onopen = resolve));
  await sendCommand('Runtime.enable');
  await sendCommand('Page.enable');

  await sleep(4000);

  // Lock feature inspection to a flooded building and capture screenshot
  await sendCommand('Runtime.evaluate', {
    expression: `(() => {
      const app = window.highWaterApp;
      app.floodWaterManager.setWaterLevel(132.0);
      const bld = app.overlayManager.buildingLayer.features.find(f => f.flooded && f.currentWaterDepth > 0.5);
      // Temporarily override inspectFeature so render loop doesn't clear it
      app.overlayManager.inspectFeature = () => bld;
      app.ui.renderFeatureInspection(bld);
    })()`,
  });

  await sleep(500);

  const res = await sendCommand('Page.captureScreenshot', { format: 'png' });
  const outPath = path.join(SCREENSHOT_DIR, 'screenshot_m6_inspector_active.png');
  fs.writeFileSync(outPath, Buffer.from(res.data, 'base64'));
  console.log(`Saved locked inspector screenshot to: ${outPath}`);

  ws.close();
  chromeProc.kill();
}

main().catch(console.error);
