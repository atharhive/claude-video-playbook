import React from 'react';
import {AbsoluteFill, Img, staticFile, useCurrentFrame} from 'remotion';
import {C} from '../lib/tokens';
import {Room} from '../lib/paper/sets';
import {OrbitCamera, Depth, SnapZoom} from '../lib/paper/camera';
import {Slab, Paper, PopIn, Pill, StampMark} from '../lib/paper/kit';
import {Critter} from '../lib/cast/Critter';
import {cueOf, durOf} from '../scene';

const ID = 'S03OvernightExperiments';

export const S03OvernightExperiments: React.FC = () => {
  const cue = cueOf(ID);
  const dur = durOf(ID);
  const f = useCurrentFrame();

  return (
    <AbsoluteFill>
      <SnapZoom at={cue('seven') || 390} to={1.04}>
        <OrbitCamera dur={dur} yaw={3} push={1.04} origin={[540, 960]}>
          <Depth z={0}>
            <Room color="teal" floorY={1420} floor="wood" />
          </Depth>

          <Depth z={0.5}>
            {/* Overnight Benchmark Score Jump Card */}
            <Paper lift={10}>
              <Slab x={90} y={400} w={900} h={570} color="#FAF7F2" shade={C.creamLo} shadeH={0.03} r={14} rot={-1}>
                <div style={{padding: '12px'}}>
                  <Img src={staticFile('assets/card3_overnight_benchmark.png')} style={{width: '100%', height: 'auto', borderRadius: 10}} />
                </div>
              </Slab>
            </Paper>

            {/* Papercraft Mascot (No text badge) */}
            <Critter
              x={920}
              y={1420}
              size={240}
              color="#D97757"
              shade="#B55B3E"
              expr={f > (cue('jumped') || 330) ? 'happy' : 'idle'}
              armL={0.3}
              armLAngle={-25}
              armR={0.3}
              armRAngle={-25}
              lean={1}
            />

            <StampMark at={cue('seven') || 390} x={420} y={1000} text="7.5 ACCEPT" color="#10B981" size={56} rot={-5} />
          </Depth>

          <Depth z={1}>
            <PopIn at={15}>
              <Pill x={540} y={340} text="24 EXPERIMENTS · FLIPPED REJECT TO ACCEPT" bg="#DCFCE7" color="#166534" size={38} rot={-1} center />
            </PopIn>
          </Depth>
        </OrbitCamera>
      </SnapZoom>
    </AbsoluteFill>
  );
};
