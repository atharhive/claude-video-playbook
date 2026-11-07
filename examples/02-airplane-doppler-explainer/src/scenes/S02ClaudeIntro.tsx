// S02ClaudeIntro: Claude MC explains the breakthrough
import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {C, FONT} from '../lib/tokens';
import {Room} from '../lib/paper/sets';
import {OrbitCamera, Depth, SnapZoom} from '../lib/paper/camera';
import {Critter} from '../lib/cast/Critter';
import {Terminal} from '../lib/ui/ui';
import {Pill, PopIn, StampMark} from '../lib/paper/kit';
import {cueOf, durOf} from '../scene';

const ID = 'S02ClaudeIntro';

export const S02ClaudeIntro: React.FC = () => {
  const cue = cueOf(ID);
  const dur = durOf(ID);
  const f = useCurrentFrame();

  return (
    <AbsoluteFill>
      <SnapZoom at={cue('hundred') || 100} to={1.12}>
        <OrbitCamera dur={dur} yaw={12} push={1.12} origin={[540, 1100]}>
          <Depth z={0}>
            <Room color="purple" floorY={1420} floor="wood" />
          </Depth>

          <Depth z={0.5}>
            {/* Terminal executing acoustic analysis */}
            <Terminal
              w={760}
              h={520}
              title="claude-osint-warden"
              size={26}
              fpc={1.2}
              lines={[
                {at: 10, text: '> osint-audio --detect doppler', kind: 'you'},
                {at: (cue('proved') || 50), text: '✓ 5 Aircraft flyover signatures identified', kind: 'ok'},
                {at: (cue('location') || 80), text: '⚡ Viterbi harmonic ridge tracking active...', kind: 'warn'},
                {at: (cue('hundred') || 110), text: '✓ Accuracy confirmed: ~100 meters', kind: 'ok'},
              ]}
            />

            {/* Claude MC */}
            <Critter
              x={780}
              y={1420}
              size={340}
              color="#D97757"
              shade="#B55B3E"
              expr={f > (cue('proved') || 50) ? 'happy' : 'idle'}
              tag="CLAUDE MC"
              tagColor="#B55B3E"
              armL={0.8}
              armLAngle={-30}
              lean={-6}
            />

            <StampMark at={cue('hundred') || 115} x={360} y={1050} text="100M ACCURACY" color={C.go} size={64} rot={-8} />
          </Depth>

          <Depth z={1}>
            <PopIn at={15}>
              <Pill x={540} y={380} text="YES: OSINT RESEARCH CONFIRMED" bg={C.sparkYellow} color={C.ink} size={42} rot={-1} center />
            </PopIn>
          </Depth>
        </OrbitCamera>
      </SnapZoom>
    </AbsoluteFill>
  );
};
