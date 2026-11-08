import puppeteer from '/home/ubuntu/claude-video-playbook/examples/02-airplane-doppler-explainer/node_modules/puppeteer-core/lib/esm/puppeteer/puppeteer-core.js';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = '/home/ubuntu/.hermes/tools/chromium-1208/chrome-linux64/chrome';
const HTML_PATH = 'file:///home/ubuntu/claude-video-playbook/world-cel/index.html';
const OUT_FRAMES = '/tmp/cel_frames';

if (!fs.existsSync(OUT_FRAMES)) {
  fs.mkdirSync(OUT_FRAMES, { recursive: true });
}

async function render() {
  console.log('Launching Chrome...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1920, deviceScaleFactor: 1 });
  await page.goto(HTML_PATH, { waitUntil: 'load' });
  await new Promise(r => setTimeout(r, 1000));

  // Render a verification still first
  await page.evaluate('window.renderFrame(45)');
  await page.screenshot({ path: '/tmp/cel_scene_fixed_teen.png' });
  console.log('Saved /tmp/cel_scene_fixed_teen.png');

  // Render video frames (15.6s @ 24fps = 374 frames)
  // Let's render 15.6s @ 24fps for smooth cel playback
  const totalFrames = Math.floor(15.6 * 24);
  console.log(`Rendering ${totalFrames} frames...`);

  for (let f = 0; f < totalFrames; f++) {
    await page.evaluate(`window.renderFrame(${f})`);
    const fPath = path.join(OUT_FRAMES, `frame_${String(f).padStart(4, '0')}.jpg`);
    await page.screenshot({ path: fPath, type: 'jpeg', quality: 90 });
    if (f % 50 === 0) {
      console.log(`Rendered frame ${f}/${totalFrames}`);
    }
  }

  await browser.close();
  console.log('Finished rendering all cel frames!');
}

render().catch(err => {
  console.error('Render error:', err);
  process.exit(1);
});
