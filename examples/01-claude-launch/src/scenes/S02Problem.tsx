// S02Problem: The 3 Fatal Traps
import React from 'react';
import {AbsoluteFill} from 'remotion';
import {C} from '../lib/tokens';
import {Room} from '../lib/paper/sets';
import {OrbitCamera, Depth} from '../lib/paper/camera';
import {NumberCard} from '../lib/props/council';
import {StampMark, PopIn} from '../lib/paper/kit';
import {cueOf, durOf} from '../scene';

const ID = 'S02Problem';

export const S02Problem: React.FC = () => {
  const cue = cueOf(ID);
  const dur = durOf(ID);

  return (
    <AbsoluteFill>
      <OrbitCamera dur={dur} yaw={-12} push={1.1} origin={[540, 1000]}>
        <Depth z={0}>
          <Room color="slate" floorY={1420} floor="wood" />
        </Depth>

        <Depth z={0.5}>
          {/* Card 1: No Hero Visual */}
          <PopIn at={cue('hero') || 8}>
            <NumberCard
              x={120}
              y={560}
              w={260}
              h={360}
              big="01"
              small="NO BANNER"
              color="#F5EFE6"
              ink={C.ink}
              rot={-3}
              tape
            />
          </PopIn>

          {/* Card 2: 6-Step Messy Install */}
          <PopIn at={cue('six-step') || 38}>
            <NumberCard
              x={410}
              y={540}
              w={260}
              h={360}
              big="02"
              small="6-STEP SETUP"
              color="#F5EFE6"
              ink={C.ink}
              rot={2}
              tape
            />
          </PopIn>

          {/* Card 3: Empty Issues */}
          <PopIn at={cue('empty') || 70}>
            <NumberCard
              x={700}
              y={570}
              w={260}
              h={360}
              big="03"
              small="0 ISSUES"
              color="#F5EFE6"
              ink={C.ink}
              rot={-2}
              tape
            />
          </PopIn>

          <StampMark at={cue('tracker') || 95} x={540} y={1100} text="DEATH SENTENCE" color={C.nogo} size={64} rot={-8} />
        </Depth>
      </OrbitCamera>
    </AbsoluteFill>
  );
};