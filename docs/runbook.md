# Video Production Runbook

Standard operating procedures for rendering and troubleshooting video pipelines on Linux servers.

## Server Prerequisites

- **FFmpeg 6.0+** with `libx264` and `aac` codecs.
- **Node.js 20+** and `npm`.
- **Headless Chromium**: Installed under `CHROME_PATH`. Server flags required:
  `--no-sandbox`, `--disable-setuid-sandbox`, `--disable-dev-shm-usage`.

## Execution Commands

### 1. Generate Voiceover
```bash
python3 scripts/build_voiceover.py --script narration/script.json --provider edge
```

### 2. Render Remotion Composition
```bash
npx remotion render out/cache/bundle ClaudeLaunch out/video.mp4 \
  --browser-executable="$CHROME_PATH" \
  --chromium-options=--no-sandbox,--disable-setuid-sandbox,--disable-dev-shm-usage \
  --concurrency=1
```

### 3. Audio Normalization & Mux
```bash
ffmpeg -y -i out/video.mp4 -i out/audio.wav -c:v copy -c:a aac -b:a 192k -shortest out/final.mp4
```

## Failure Recovery

- **Target Closed / Browser Crash**: Usually caused by memory limits when rendering high-res frames concurrently. Enforce `--concurrency=1` and ensure system swap is active.
- **Missing Audio in Final Export**: Verify `audio.wav` was generated and check duration matching before running FFmpeg copy.
