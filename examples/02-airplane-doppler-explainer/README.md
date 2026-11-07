# Example 02: Airplane Doppler Geolocation Explainer

A 41.5-second investigative explainer reel demonstrating how background aircraft Doppler audio leaks physical geolocation to within 100 meters.

## Narrative Arc & Dual Voiceover

- **Voice 1 (Anxious User / Charlie `IKne3meq5aSn9XLyUdCD`)**:
  - *"Wait, Claude, can someone actually find my exact home address just from background airplane noise?"*
- **Voice 2 (Claude MC / Liam `TX3LPaxmHKxFdv7VOQHJ`)**:
  - Explains the acoustic science: Viterbi harmonic ridge extraction (60Hz–400Hz), closest point of approach (t_CPA), frequency drops, and ADS-B flight telemetry matching.
  - Showcases the resulting 100-meter pinpoint heatmap over Oyster Bay, NY.
  - Delivers the call-to-action asking viewers to comment **RADAR** and check the pinned comment for the full open-source toolkit.

## Audio Engineering Standards

- **Zero Music**: No distracting background score; pure speech focus.
- **Sound Design & Foley**: Procedural whooshes, tape tears, mechanical clicks, sonar pings, and stamp impacts aligned to visual cuts.
- **Mastering**: +4 dB gain boost with brickwall ceiling limiter and EBU R128 (-14 LUFS) loudness normalization.

## Project Structure

```
02-airplane-doppler-explainer/
├── episode.json             # Episode metadata, scene timings, and cut definitions
├── package.json             # Remotion dependencies
├── remotion.config.ts       # Remotion compiler configuration
├── tsconfig.json            # TypeScript configuration
├── narration/
│   ├── script.json          # Dual-speaker spoken spine
│   ├── timing_narrator.js   # Word-level timestamp alignments
│   └── voice/final_narrator # Studio 48kHz mono WAV voiceover stems
├── public/
│   ├── assets/              # High-contrast spectrogram and radar heatmap SVGs
│   └── audio/               # Master Foley and mixed audio stems
└── src/
    ├── Root.tsx             # Remotion root composition (1080x1920, 30fps)
    ├── PapercutVideo.tsx    # Scene coordinator and dynamic caption renderer
    ├── plan.json            # Exact frame cuts and scene boundaries
    └── scenes/              # Scene React components (S01 to S06)
```

## How to Render

```bash
cd examples/02-airplane-doppler-explainer
npm install
npx remotion render src/index.ts DopplerExplainer out/render.mp4
```
