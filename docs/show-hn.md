# Show HN: Claude Video Playbook - Code-first AI video creation with Claude Code

We built `claude-video-playbook` to turn plain prompt ideas into finished, high-production motion graphics and tactile explainer videos using code.

Instead of fighting UI video editors or waiting on non-deterministic generative video models, every frame is authored directly in code (React Remotion, GSAP, SVG, Three.js) and rendered via headless Chromium.

### Why Spoken-Spine Matters
Most automated video pipelines generate visuals first and struggle to sync audio. This playbook reverses the order:
1. Speech stems are generated via ElevenLabs or neural TTS.
2. Word-level timestamps drive the camera parallax and spring curves in React.
3. Audio is automatically ducked under narration with tactile Foley sound effects.

### Architecture Highlights
- **Remotion Stop-Motion**: Pure CSS/SVG papercraft with layered drop shadows and 3D camera tracks.
- **700+ Production Recipes**: Curated database of viral Claude Opus 5.5 prompts for 3D, explainers, and kinetic typography.
- **Headless Server Rendering**: Automated Chromium CDP pipeline running on standard Linux VPS without dedicated GPUs.

Check out the repo and play with the examples: https://github.com/atharhive/claude-video-playbook
