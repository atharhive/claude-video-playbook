import React from 'react';
import {AbsoluteFill, Img, staticFile} from 'remotion';
import {C} from '../lib/tokens';
import {Room} from '../lib/paper/sets';
import {OrbitCamera, Depth, SnapZoom} from '../lib/paper/camera';
import {Slab, Paper, PopIn, Pill, StampMark} from '../lib/paper/kit';
import {Critter} from '../lib/cast/Critter';
import {cueOf, durOf} from '../scene';

const ID = 'S01PaperInPeril';

export const S01PaperInPeril: React.FC = () => {
  const cue = cueOf(ID);
  const dur = durOf(ID);

  return (
    <AbsoluteFill>
      <SnapZoom at={cue('sleep') || 130} to={1.04}>
        <OrbitCamera dur={dur} yaw={3} push={1.04} origin={[540, 960]}>
          <Depth z={0}>
            <Room color="purple" floorY={1420} floor="wood" />
          </Depth>

          <Depth z={0.5}>
            {/* Draft Paper in Peril Card */}
            <Paper lift={10}>
              <Slab x={90} y={400} w={900} h={570} color="#FAF7F2" shade={C.creamLo} shadeH={0.03} r={14} rot={-1}>
                <div style={{padding: '12px'}}>
                  <Img src={staticFile('assets/card1_paper_in_peril.png')} style={{width: '100%', height: 'auto', borderRadius: 10}} />
                </div>
              </Slab>
            </Paper>

            {/* Papercraft Mascot (No text badge) */}
            <Critter
              x={920}
              y={1420}
              size={230}
              color="#D97757"
              shade="#B55B3E"
              expr="worried"
              armL={0.3}
              armLAngle={-20}
              armR={0.3}
              armRAngle={-20}
              lean={-2}
            />

            <StampMark at={cue('stress') || 50} x={420} y={1000} text="5.0 REJECT" color="#EF4444" size={60} rot={-6} />
          </Depth>

          <Depth z={1}>
            <PopIn at={15}>
              <Pill x={540} y={340} text="AUTONOMOUS RESEARCH PAPER RESCUE" bg="#FEE2E2" color="#991B1B" size={38} rot={-1} center />
            </PopIn>
          </Depth>
        </OrbitCamera>
      </SnapZoom>
    </AbsoluteFill>
  );
};
