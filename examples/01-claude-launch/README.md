# Example 01: Claude Launch Reel (Papercut Explainer)

A 28-second vertical (9:16) explainer video demonstrating Claude Code taking over an open-source repository launch.

## Scene Breakdown

1. **S01Hook (0:00 - 4:70s)**: "Do you want 500 stars on your GitHub repo, but your code is sitting at zero?"
2. **S02Problem (4:70s - 9:57s)**: Three paper cards illustrating common launch mistakes (No banner, 6-step install, 0 issues).
3. **S03Claude (9:57s - 13:33s)**: Claude character appears beside a terminal running `claude --audit-settl-16`.
4. **S04Checklist (13:33s - 18:47s)**: The 16-point launch checklist ticking green.
5. **S05Proof (18:47s - 22:80s)**: Stars counter jumping from 0 to 524 stars and 48 forks.
6. **S06Cta (22:80s - 28:43s)**: Paper smartphone typing the comment keyword REPO to trigger a prompt DM.

## How to Render

```bash
cd examples/01-claude-launch
npm install
npx remotion render src/index.ts ClaudeLaunch out/render.mp4
```
