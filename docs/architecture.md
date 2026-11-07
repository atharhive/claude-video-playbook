# Production AI Video Playbook

This playbook documents the modern stack, architecture, and recipes for autonomous video creation with Claude Code and AI coding agents.

## Core Workflow

```
1. Story & Script      2. Vocal Stems         3. Code Animation      4. Headless Mux
   (Claude Code)   --> (ElevenLabs / TTS) --> (Remotion / GSAP)  --> (Chromium + FFmpeg)
```

### Stage 1: Spoken Spine First

Never animate first. In top-tier motion graphics, the spoken duration dictates all scene cuts and camera movements:
1. Write `narration/script.json` with clean scene IDs and concise text.
2. Generate studio audio stems using `scripts/build_voiceover.py`.
3. Compute exact word-level timestamp boundaries to drive CSS animations and Remotion springs.

### Stage 2: Programmatic Animation Engines

Use code-first rendering rather than manual GUI timelines:
- **Remotion**: Full programmatic MP4 video rendered from React and TypeScript components.
- **GSAP & Three.js**: WebGL and DOM canvas motion with smooth bezier curves.
- **Procedural Canvas**: Pixel-perfect vector generation without generative image model artifacts.

### Stage 3: Sound Design & Foley

Silent motion graphics feel flat. Integrate layered audio:
- **Music Bed**: Ducked automatically under dialogue using envelope followers.
- **Foley SFX**: Tactile clicks, paper tears, and whooshes timed within 3 frames of visual actions.
- **Mastering**: Normalize to EBU R128 (-14 LUFS) with ceiling limiters.
