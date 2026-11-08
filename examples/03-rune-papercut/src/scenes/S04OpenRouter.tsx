import React from 'react';
import {AbsoluteFill, Img, staticFile, useCurrentFrame} from 'remotion';
import {C} from '../lib/tokens';
import {Room} from '../lib/paper/sets';
import {OrbitCamera, Depth, SnapZoom} from '../lib/paper/camera';
import {Slab, Paper, PopIn, Pill, StampMark} from '../lib/paper/kit';
import {Critter} from '../lib/cast/Critter';
import {cueOf, durOf} from '../scene';

const ID = 'S04OpenRouter';

export const S04OpenRouter: React.FC = () => {
  const cue = cueOf(ID);
  const dur = durOf(ID);
  const f = useCurrentFrame();

  return (
    <AbsoluteFill>
      <SnapZoom at={cue('shipped') || 50} to={1.04}>
        <OrbitCamera dur={dur} yaw={3} push={1.04} origin={[540, 960]}>
          <Depth z={0}>
            <Room color="teal" floorY={1420} floor="wood" />
          </Depth>

          <Depth z={0.5}>
            {/* Real OpenRouter Ori Card */}
            <Paper lift={10}>
              <Slab x={90} y={400} w={900} h={570} color="#FAF7F2" shade={C.creamLo} shadeH={0.03} r={14} rot={1}>
                <div style={{padding: '12px'}}>
                  <Img src={staticFile('assets/ori_card.png')} style={{width: '100%', height: 'auto', borderRadius: 10}} />
                </div>
              </Slab>
            </Paper>

            {/* Claude Mascot (NO text tag) */}
            <Critter
              x={880}
              y={1420}
              size={240}
              color="#D97757"
              shade="#B55B3E"
              expr={f > (cue('ori') || 60) ? 'happy' : 'idle'}
              armL={0.3}
              armLAngle={-20}
              armR={0.2}
              armRAngle={15}
              lean={1}
            />

            <StampMark at={cue('shipped') || 50} x={380} y={1000} text="JUST SHIPPED" color="#0284C7" size={56} rot={-5} />
          </Depth>

          <Depth z={1}>
            <PopIn at={15}>
              <Pill x={540} y={340} text="OPENROUTER ORI · NATIVE DESKTOP HARNESS" bg="#E0F2FE" color="#0369A1" size={38} rot={-1} center />
            </PopIn>
          </Depth>
        </OrbitCamera>
      </SnapZoom>
    </AbsoluteFill>
  );
};
