// S05Proof: Stars explosion & Show HN trending
import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {C} from '../lib/tokens';
import {Room} from '../lib/paper/sets';
import {OrbitCamera, Depth, SnapZoom} from '../lib/paper/camera';
import {RepoCard} from '../lib/ui/ui';
import {Critter} from '../lib/cast/Critter';
import {StampMark, PopIn, Pill} from '../lib/paper/kit';
import {cueOf, durOf} from '../scene';

const ID = 'S05Proof';

export const S05Proof: React.FC = () => {
  const cue = cueOf(ID);
  const dur = durOf(ID);
  const f = useCurrentFrame();

  const starHit = cue('jumped') || 44;

  return (
    <AbsoluteFill>
      <SnapZoom at={starHit} to={1.16}>
        <OrbitCamera dur={dur} yaw={12} push={1.12} origin={[540, 1100]}>
          <Depth z={0}>
            <Room color="mustard" floorY={1420} floor="wood" />
          </Depth>

          <Depth z={0.5}>
            {/* Repo Card showing 524 stars */}
            <RepoCard
              x={130}
              y={560}
              w={820}
              owner="atharhive"
              repo="quantum-engine"
              desc="Next-generation state vector accelerator"
              starsAt={15}
              stars={524}
              starsFrom={0}
              forks={48}
              starDur={25}
              rot={1}
            />

            {/* Celebrating Claude */}
            <Critter
              x={780}
              y={1420}
              size={320}
              color="#D97757"
              shade="#B55B3E"
              expr={f > starHit ? 'happy' : 'idle'}
              tag="CLAUDE"
              tagColor="#B55B3E"
              armR={0.9}
              armRAngle={-50}
              armL={0.9}
              armLAngle={-50}
              lean={6}
            />

            <StampMark at={(cue('stars') || 80)} x={640} y={750} text="#1 SHOW HN" color={C.go} size={68} rot={-10} />
          </Depth>

          <Depth z={1}>
            <PopIn at={cue('overnight') || 10}>
              <Pill x={540} y={480} text="500+ STARS OVERNIGHT" bg={C.sparkYellow} color={C.ink} size={42} rot={-2} center />
            </PopIn>
          </Depth>
        </OrbitCamera>
      </SnapZoom>
    </AbsoluteFill>
  );
};
