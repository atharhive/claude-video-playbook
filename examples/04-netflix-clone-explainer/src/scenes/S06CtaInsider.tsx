import React from 'react';
import {AbsoluteFill} from 'remotion';
import {C, FONT} from '../lib/tokens';
import {Room} from '../lib/paper/sets';
import {OrbitCamera, Depth, SnapZoom} from '../lib/paper/camera';
import {Slab, Paper, PopIn, Pill, StampMark} from '../lib/paper/kit';
import {Critter} from '../lib/cast/Critter';
import {cueOf, durOf} from '../scene';

const ID = 'S06CtaInsider';

export const S06CtaInsider: React.FC = () => {
  const cue = cueOf(ID);
  const dur = durOf(ID);

  return (
    <AbsoluteFill>
      <SnapZoom at={cue('pinned') || 80} to={1.04}>
        <OrbitCamera dur={dur} yaw={3} push={1.04} origin={[540, 960]}>
          <Depth z={0}>
            <Room color="cream" floorY={1420} floor="wood" />
          </Depth>

          <Depth z={0.5}>
            {/* CTA Master Paper Slab */}
            <Paper lift={12}>
              <Slab x={100} y={400} w={880} h={580} color="#FAF7F2" shade={C.creamLo} shadeH={0.03} r={16} rot={-1}>
                <div style={{padding: '36px 44px', textAlign: 'center'}}>
                  <div style={{display: 'inline-block', padding: '8px 24px', background: '#FEF3C7', borderRadius: 24, border: '2px solid #F59E0B', marginBottom: 24}}>
                    <span style={{fontFamily: FONT.banner, fontSize: 24, color: '#92400E'}}>
                      📌 CHECK PINNED COMMENT
                    </span>
                  </div>

                  <div style={{fontFamily: FONT.banner, fontSize: 62, color: C.ink, fontWeight: 900, marginBottom: 16}}>
                    COMMENT "INSIDER"
                  </div>

                  <div style={{fontFamily: FONT.banner, fontSize: 26, color: '#4B5563', marginBottom: 28}}>
                    FOR 4 TECH BLOGS · CLAUDE PROMPTS · DM TEMPLATE
                  </div>

                  <div style={{display: 'inline-block', padding: '14px 32px', background: '#D97757', borderRadius: 12}}>
                    <span style={{fontFamily: FONT.mono, fontSize: 24, color: '#FFFFFF', fontWeight: 700}}>
                      github.com/atharhive/claude-video-playbook
                    </span>
                  </div>
                </div>
              </Slab>
            </Paper>

            {/* Claude Mascot (NO text tag) */}
            <Critter
              x={920}
              y={1420}
              size={240}
              color="#D97757"
              shade="#B55B3E"
              expr="happy"
              armL={0.3}
              armLAngle={-25}
              armR={0.3}
              armRAngle={-25}
              lean={0}
            />

            <StampMark at={cue('comment') || 10} x={420} y={1010} text="TOOLKIT DROP" color="#D97757" size={60} rot={-5} />
          </Depth>

          <Depth z={1}>
            <PopIn at={10}>
              <Pill x={540} y={330} text="FULL BREAKDOWN & PROMPT AUTOMATION" bg="#FDE047" color="#713F12" size={38} rot={-1} center />
            </PopIn>
          </Depth>
        </OrbitCamera>
      </SnapZoom>
    </AbsoluteFill>
  );
};
