import puppeteer from '/home/ubuntu/claude-video-playbook/examples/02-airplane-doppler-explainer/node_modules/puppeteer-core/lib/esm/puppeteer/puppeteer-core.js';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = '/home/ubuntu/.hermes/tools/chromium-1208/chrome-linux64/chrome';
const HTML_PATH = 'file:///home/ubuntu/claude-video-playbook/examples/05-claude-design-skills/index.html';
const OUT_FRAMES = '/tmp/keynote_full_frames';

if (!fs.existsSync(OUT_FRAMES)) {
  fs.mkdirSync(OUT_FRAMES, { recursive: true });
}

async function render() {
  console.log('Starting full Dark Tech Keynote render...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1920, deviceScaleFactor: 1 });
  await page.goto(HTML_PATH, { waitUntil: 'load' });
  await new Promise(r => setTimeout(r, 1200));

  // Render 61.41s @ 24fps = 1,474 frames
  const totalFrames = Math.floor(61.41 * 24);
  console.log(`Total frames to render: ${totalFrames}`);

  const startT = Date.now();
  for (let f = 0; f < totalFrames; f++) {
    await page.evaluate(`window.renderFrame(${f})`);
    const fPath = path.join(OUT_FRAMES, `frame_${String(f).padStart(4, '0')}.jpg`);
    await page.screenshot({ path: fPath, type: 'jpeg', quality: 90 });

    if (f % 100 === 0 || f === totalFrames - 1) {
      const elapsed = (Date.now() - startT) / 1000;
      const fps = (f + 1) / elapsed;
      const rem = (totalFrames - f - 1) / (fps || 1);
      console.log(`Rendered frame ${f}/${totalFrames} (${(f/totalFrames*100).toFixed(1)}%) - ${fps.toFixed(1)} fps, rem: ${(rem/60).toFixed(1)}m`);
    }
  }

  await browser.close();
  console.log('Finished rendering all frames!');
}

render().catch(err => {
  console.error('Render error:', err);
  process.exit(1);
});
