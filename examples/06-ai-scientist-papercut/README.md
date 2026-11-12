# Example 06: AI Scientist Papercut Explainer

> Stop-motion papercraft explainer breaking down the autonomous research paper review loop that upgrades manuscripts overnight.

## Overview

A 60.8-second vertical video (1080x1920 at 30 fps) built with Remotion. Inspired by Sakana AI's automated research paper benchmark, it illustrates how multi-round AI critiques and automated experiments rescue borderline papers before submission.

## Core Structure

1. **Scene 1 (Paper in Peril):** Draft manuscript floating in papercraft waters with a 5.0 Borderline Reject score and shark circling.
2. **Scene 2 (Automated Reviewer):** Multi-agent peer reviewer dissects baselines, theoretical rigor, and empirical proof.
3. **Scene 3 (Overnight Experiments):** Over 20 automated test sweeps executed; failed claims dropped; score flips from 5.0 to 7.5 Accept.
4. **Scene 4 (The Catch):** GPU compute requirements, simulated rubric boundaries, and mandatory human verification.
5. **Scene 5 (Non-Salesy CTA):** Transparent closing with open-source link to SakanaAI/AI-Scientist.

## Architecture

- Visual Engine: Remotion 4.0 papercraft stop-motion with tactile drop shadows, deckle edges, and camera tracks.
- Voiceover: Single authoritative narrator (Liam via ElevenLabs), mastered to -14 LUFS with procedural Foley effects.
- Captions: Kinetic word-tag paper cutouts with clean lower-middle positioning.

## Quickstart

```bash
# Prepare voiceover and cues
python3 ../../papercut-explainer/library/tools/build_vo.py

# Render composition
npx remotion render src/index.ts AiScientistPapercut out/ai-scientist-papercut.mp4
```
