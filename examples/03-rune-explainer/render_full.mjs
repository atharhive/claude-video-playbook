import puppeteer from '/home/ubuntu/claude-video-playbook/examples/02-airplane-doppler-explainer/node_modules/puppeteer-core/lib/esm/puppeteer/puppeteer-core.js';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = '/home/ubuntu/.hermes/tools/chromium-1208/chrome-linux64/chrome';
const HTML_PATH = 'file:///home/ubuntu/claude-video-playbook/examples/03-rune-explainer/index.html';
const OUT_FRAMES = '/tmp/rune_full_frames';

if (!fs.existsSync(OUT_FRAMES)) {
  fs.mkdirSync(OUT_FRAMES, { recursive: true });
}

async function render() {
  console.log('Launching headless Chrome for full render...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1920, deviceScaleFactor: 1 });
  await page.goto(HTML_PATH, { waitUntil: 'load' });
  await new Promise(r => setTimeout(r, 1500));

  // Render 47.6s @ 24fps = 1,142 frames
  const totalFrames = Math.floor(47.6 * 24);
  console.log(`Rendering ${totalFrames} frames...`);

  for (let f = 0; f < totalFrames; f++) {
    await page.evaluate(`window.renderFrame(${f})`);
    const fPath = path.join(OUT_FRAMES, `frame_${String(f).padStart(4, '0')}.jpg`);
    await page.screenshot({ path: fPath, type: 'jpeg', quality: 90 });
    if (f % 100 === 0) {
      console.log(`Rendered ${f}/${totalFrames} frames (${(f/totalFrames*100).toFixed(1)}%)`);
    }
  }

  await browser.close();
  console.log('All full frames rendered successfully!');
}

render().catch(err => {
  console.error('Render error:', err);
  process.exit(1);
});
