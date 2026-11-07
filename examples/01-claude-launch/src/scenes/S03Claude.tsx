// S03Claude: Claude Code takes the wheel as Main Character
import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {C} from '../lib/tokens';
import {Room} from '../lib/paper/sets';
import {OrbitCamera, Depth, SnapZoom} from '../lib/paper/camera';
import {Critter} from '../lib/cast/Critter';
import {Terminal} from '../lib/ui/ui';
import {Pill, PopIn} from '../lib/paper/kit';
import {cueOf, durOf} from '../scene';

const ID = 'S03Claude';

export const S03Claude: React.FC = () => {
  const cue = cueOf(ID);
  const dur = durOf(ID);
  const f = useCurrentFrame();

  return (
    <AbsoluteFill>
      <SnapZoom at={cue('sixteen') || 50} to={1.12}>
        <OrbitCamera dur={dur} yaw={14} push={1.12} origin={[540, 1100]}>
          <Depth z={0}>
            <Room color="purple" floorY={1420} floor="wood" />
          </Depth>

          <Depth z={0.5}>
            {/* Terminal window running Claude */}
            <Terminal
              w={760}
              h={520}
              title="claude-code"
              size={28}
              fpc={1.2}
              lines={[
                {at: 10, text: '> claude --audit-settl-16', kind: 'you'},
                {at: (cue('rules') || 60), text: '✓ Auditing repository structure...', kind: 'ok'},
                {at: (cue('rules') || 60) + 15, text: '✓ 16/16 launch rules loaded', kind: 'ok'},
                {at: (cue('rules') || 60) + 30, text: '⚡ Synthesizing SVG banner & CI...', kind: 'out'},
              ]}
            />

            {/* Claude Critter character */}
            <Critter
              x={780}
              y={1420}
              size={340}
              color="#D97757"
              shade="#B55B3E"
              expr={f > (cue('rules') || 60) ? 'happy' : 'idle'}
              tag="CLAUDE"
              tagColor="#B55B3E"
              armL={0.8}
              armLAngle={-30}
              lean={-6}
            />
          </Depth>

          <Depth z={1}>
            <PopIn at={cue('sixteen') || 50}>
              <Pill x={540} y={380} text="CLAUDE CODE: MC MODE" bg={C.sparkYellow} color={C.ink} size={44} rot={-1} center />
            </PopIn>
          </Depth>
        </OrbitCamera>
      </SnapZoom>
    </AbsoluteFill>
  );
};
