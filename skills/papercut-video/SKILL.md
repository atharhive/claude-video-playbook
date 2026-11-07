---
name: papercut-video
description: Programmatic tactile stop-motion explainer video pipeline using Remotion, layered paper aesthetics, 3D camera parallax, and word-synced subtitles.
metadata:
  category: video-motion
  tags: [remotion, papercut, stop-motion, explainer, react]
---

# Papercut Video Pipeline

Builds full 9:16 vertical explainer reels with physical papercraft textures, drop shadows, and kinetic typography.

## Architecture

- **React Remotion Compositions**: Modular scene components (`S01Hook`, `S02Problem`, etc.) assembled along a timeline plan (`src/plan.json`).
- **Tactile Paper UI Components**: `RepoCard`, `NumberCard`, `Terminal`, `Critter`, `StampMark`, and `Pill`.
- **Camera Tracks**: Parallax `OrbitCamera`, `SnapZoom`, and `Depth` z-indexing layers.
- **Dynamic Subtitles**: Word-level kinetic pop-in cards driven by vocal cadence.
