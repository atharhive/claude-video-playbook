import React from 'react';
import {AbsoluteFill, Img, staticFile, useCurrentFrame} from 'remotion';
import {C} from '../lib/tokens';
import {Room} from '../lib/paper/sets';
import {OrbitCamera, Depth, SnapZoom} from '../lib/paper/camera';
import {Slab, Paper, PopIn, Pill, StampMark} from '../lib/paper/kit';
import {Critter} from '../lib/cast/Critter';
import {cueOf, durOf} from '../scene';

const ID = 'S02RuneIntro';

export const S02RuneIntro: React.FC = () => {
  const cue = cueOf(ID);
  const dur = durOf(ID);
  const f = useCurrentFrame();

  return (
    <AbsoluteFill>
      <SnapZoom at={cue('rust') || 60} to={1.04}>
        <OrbitCamera dur={dur} yaw={3} push={1.04} origin={[540, 960]}>
          <Depth z={0}>
            <Room color="navy" floorY={1420} floor="wood" />
          </Depth>

          <Depth z={0.5}>
            {/* Real Anomaly Rune Repo Card */}
            <Paper lift={10}>
              <Slab x={90} y={400} w={900} h={570} color="#FAF7F2" shade={C.creamLo} shadeH={0.03} r={14} rot={1}>
                <div style={{padding: '12px'}}>
                  <Img src={staticFile('assets/rune_card.png')} style={{width: '100%', height: 'auto', borderRadius: 10}} />
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
              expr={f > (cue('wgpu') || 80) ? 'happy' : 'idle'}
              armL={0.3}
              armLAngle={-15}
              armR={0.2}
              armRAngle={15}
              lean={1}
            />

            <StampMark at={cue('anomaly') || 90} x={360} y={1000} text="ANOMALY ENGINE" color="#10B981" size={56} rot={-4} />
          </Depth>

          <Depth z={1}>
            <PopIn at={15}>
              <Pill x={540} y={340} text="NATIVE WGPU · RUST UI FRAMEWORK" bg="#DCFCE7" color="#166534" size={38} rot={-1} center />
            </PopIn>
          </Depth>
        </OrbitCamera>
      </SnapZoom>
    </AbsoluteFill>
  );
};
