// S01Hook: Hook scene. Repo sits at zero stars.
import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {C, ROOM} from '../lib/tokens';
import {Room} from '../lib/paper/sets';
import {OrbitCamera, Depth, SnapZoom} from '../lib/paper/camera';
import {RepoCard} from '../lib/ui/ui';
import {Critter} from '../lib/cast/Critter';
import {StampMark, PopIn, Pill} from '../lib/paper/kit';
import {cueOf, durOf} from '../scene';

const ID = 'S01Hook';

export const S01Hook: React.FC = () => {
  const cue = cueOf(ID);
  const dur = durOf(ID);
  const f = useCurrentFrame();

  return (
    <AbsoluteFill>
      <SnapZoom at={cue('sitting') || 60} to={1.14} settle={1.08}>
        <OrbitCamera dur={dur} yaw={10} push={1.08} origin={[540, 1100]}>
          <Depth z={0}>
            <Room color="grey" floorY={1420} floor="wood" />
          </Depth>

          <Depth z={0.5}>
            <RepoCard
              x={130}
              y={560}
              w={820}
              owner="atharhive"
              repo="quantum-engine"
              desc="Next-generation state vector accelerator"
              starsAt={999}
              stars={0}
              starsFrom={0}
              forks={0}
              rot={-1}
            />

            <PopIn at={cue('code') || 35}>
              <Critter
                x={300}
                y={1420}
                size={280}
                color={C.hero}
                shade={C.heroLo}
                expr={f > (cue('zero') || 70) ? 'worried' : 'idle'}
                acc="cap"
                lean={-4}
              />
            </PopIn>

            <StampMark at={cue('zero') || 75} x={660} y={750} text="0 STARS" color={C.nogo} size={72} rot={-14} />
          </Depth>

          <Depth z={1}>
            <PopIn at={12}>
              <Pill x={540} y={420} text="WANT 500 STARS?" bg={C.amber} color={C.ink} size={42} rot={-2} center />
            </PopIn>
          </Depth>
        </OrbitCamera>
      </SnapZoom>
    </AbsoluteFill>
  );
};
