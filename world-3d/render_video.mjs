import puppeteer from '/home/ubuntu/claude-video-playbook/examples/02-airplane-doppler-explainer/node_modules/puppeteer-core/lib/esm/puppeteer/puppeteer-core.js';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = '/home/ubuntu/.hermes/tools/chromium-1208/chrome-linux64/chrome';
const HTML_PATH = 'file:///home/ubuntu/claude-video-playbook/world-3d/index.html';
const OUT_FRAMES = '/tmp/living_room_frames';

if (!fs.existsSync(OUT_FRAMES)) {
  fs.mkdirSync(OUT_FRAMES, { recursive: true });
}

async function render() {
  console.log('Launching headless Chrome...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--use-gl=angle',
      '--use-angle=swiftshader',
      '--enable-webgl',
      '--enable-unsafe-webgl'
    ]
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1920, deviceScaleFactor: 1 });
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.message));

  console.log('Navigating to HTML page...');
  await page.goto(HTML_PATH, { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 2000));

  await page.evaluate(() => {
    const scene = window.scene;
    const camera = window.camera;
    const renderer = window.renderer;

    camera.fov = 72;
    camera.position.set(0, 1.5, 3.6);
    camera.lookAt(0, 0.95, 0);
    camera.updateProjectionMatrix();

    const fp = scene.children.find(c => c.children && c.children.some(ch => ch.geometry && ch.geometry.type === 'ConeGeometry'));
    if (fp) {
      fp.position.set(-1.3, 0, 0.4);
      fp.rotation.y = Math.PI / 4;
    }

    const claude = scene.children.find(c => c.children && c.position.x > 0.3 && c.position.x < 0.8);
    if (claude) {
      claude.traverse(o => {
        if (o.isMesh && o.geometry && o.geometry.type === 'SphereGeometry' && o.position.z < 0.1) {
          o.material = new THREE.MeshStandardMaterial({ color: 0xd97757, roughness: 0.4 });
        }
      });
    }

    const subEl = document.getElementById('subtitles');

    window.renderFrame = function(f) {
      const t = f / 30.0;
      const win = scene.children.find(c => c.children && c.children.some(ch => ch.isPoints));
      if (win) {
        const sPts = win.children.find(ch => ch.isPoints);
        if (sPts) {
          const pos = sPts.geometry.attributes.position.array;
          for (let i = 0; i < pos.length / 3; i++) {
            let y = pos[i * 3 + 1] - 0.02;
            if (y < -1.0) y = 1.0;
            pos[i * 3 + 1] = y;
            pos[i * 3] += Math.sin(t * 2 + i) * 0.001;
          }
          sPts.geometry.attributes.position.needsUpdate = true;
        }
      }

      if (fp) {
        const flk = Math.sin(t * 24) * 0.15 + Math.cos(t * 36) * 0.1;
        fp.scale.y = 1.0 + flk;
        fp.scale.x = 1.0 - flk * 0.5;
      }

      const teen = scene.children.find(c => c.children && c.position.x < 0 && c.position.x > -1);
      if (t < 5.8) {
        if (teen && teen.children[1]) {
          teen.children[1].rotation.x = Math.sin(t * 14) * 0.05;
          teen.children[1].rotation.y = 0.15 + Math.sin(t * 2) * 0.08;
        }
        if (claude && claude.children[1]) {
          claude.children[1].rotation.y = -0.32;
          claude.children[1].rotation.z = 0.08;
        }
        subEl.innerHTML = '<span class="speaker-pill spk-teen">TEENAGER</span><br>"Look at the snow piling up outside! How can code even build a cozy place like this out of nowhere?"';
      } else {
        if (claude && claude.children[1]) {
          claude.children[1].rotation.x = Math.sin(t * 16) * 0.06;
          claude.children[1].rotation.y = -0.25 + Math.sin(t * 1.5) * 0.12;
          claude.children[1].rotation.z = 0.10 + Math.cos(t * 2) * 0.04;
        }
        if (teen && teen.children[1]) {
          teen.children[1].rotation.y = 0.35;
          teen.children[1].rotation.x = 0;
        }
        subEl.innerHTML = '<span class="speaker-pill spk-claude">CLAUDE</span><br>"Is it not fascinating? Every warm spark from the chimney and every drifting snowflake is just physics, light, and geometry speaking together."';
      }

    window.renderer.render(window.scene, window.camera);
    };
  });

  const totalFrames = Math.floor(15.6 * 15); // 234 frames @ 15fps
  console.log(`Rendering frames (resuming from 146 to ${totalFrames})...`);

  for (let f = 146; f < totalFrames; f++) {
    await page.evaluate(`window.renderFrame(${f * 2})`);
    const fPath = path.join(OUT_FRAMES, `frame_${String(f).padStart(4, '0')}.jpg`);
    await page.screenshot({ path: fPath, type: 'jpeg', quality: 85 });
    if (f % 20 === 0) {
      console.log(`Rendered frame ${f}/${totalFrames}`);
    }
  }

  await browser.close();
  console.log('Finished rendering all frames!');
}

render().catch(err => {
  console.error('Render failed:', err);
  process.exit(1);
});
