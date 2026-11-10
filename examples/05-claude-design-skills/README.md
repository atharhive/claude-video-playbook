# Example 05: 4 Claude Design Skills (Dark Tech Keynote)

> Production motion graphics explainer showing how to elevate AI-generated code to Apple-grade finish with 4 design skills.

## Overview

A 61.4-second vertical video (1080x1920 at 24 fps) rendered using the Dark Tech Keynote style from lemo-opuscar. The composition features obsidian glass surfaces, a 48px hairline grid, spring motion curves, and precision typography without background music.

## The 4 Design Skills Covered

1. Apple Look: Audits interfaces against Apple Human Interface Guidelines, enforcing strict 8-point spatial grids, SF Pro type scales, and negative space ratios.
2. Better Interface: Refines optical margins, WCAG AAA contrast compliance, micro-typography kerning, and surface step ladders.
3. Apple Design: Replaces stiff linear CSS transitions with natural spring physics, fluid momentum, and tactile micro-interactions.
4. Superfuture Review: Provides senior design director critiques with prioritized, high-leverage fixes before code is pushed.

## Architecture

- Visual Engine: HTML5 Canvas + WebGL compositing rendered via headless Chromium.
- Audio Pipeline: Dual-voice ElevenLabs narration (Will for developer, Liam for Claude) mixed with sub-bass impacts and tactile keystrokes mastered to -14 LUFS.
- Typography: SF Pro Display, Inter, and JetBrains Mono.

## Quickstart

```bash
# Render all frames
node render_full.mjs

# Mux audio and video stream
ffmpeg -framerate 24 -i /tmp/keynote_full_frames/frame_%04d.jpg -i audio/audio_master.wav -c:v libx264 -crf 23 -pix_fmt yuv420p -c:a aac -b:a 192k out/claude_design_skills_master.mp4
```
