import React from 'react';
import {AbsoluteFill} from 'remotion';
import {C, FONT} from '../lib/tokens';
import {Room} from '../lib/paper/sets';
import {OrbitCamera, Depth, SnapZoom} from '../lib/paper/camera';
import {Slab, Paper, PopIn, Pill, StampMark} from '../lib/paper/kit';
import {Critter} from '../lib/cast/Critter';
import {cueOf, durOf} from '../scene';

const ID = 'S05CtaNiche';

export const S05CtaNiche: React.FC = () => {
  const cue = cueOf(ID);
  const dur = durOf(ID);

  return (
    <AbsoluteFill>
      <SnapZoom at={cue('reject') || 80} to={1.04}>
        <OrbitCamera dur={dur} yaw={3} push={1.04} origin={[540, 960]}>
          <Depth z={0}>
            <Room color="cream" floorY={1420} floor="wood" />
          </Depth>

          <Depth z={0.5}>
            {/* CTA Master Paper Slab */}
            <Paper lift={12}>
              <Slab x={100} y={380} w={880} h={620} color="#FAF7F2" shade={C.creamLo} shadeH={0.03} r={16} rot={-1}>
                <div style={{padding: '36px 44px', textAlign: 'center'}}>
                  <div style={{display: 'inline-block', padding: '8px 24px', background: '#F1F5F9', borderRadius: 24, border: '2px solid #CBD5E1', marginBottom: 20}}>
                    <span style={{fontFamily: FONT.banner, fontSize: 22, color: '#475569', fontWeight: 800}}>
                      YOU DO NOT EVEN HAVE TO FOLLOW ME
                    </span>
                  </div>

                  <div style={{fontFamily: FONT.banner, fontSize: 64, color: C.ink, fontWeight: 900, marginBottom: 14}}>
                    COMMENT "REJECT"
                  </div>

                  <div style={{fontFamily: FONT.banner, fontSize: 22, color: '#334155', fontWeight: 700, marginBottom: 12, lineHeight: 1.4}}>
                    FOR THE GITHUB REPOSITORY AND CLAUDE SETUP
                  </div>

                  <div style={{fontFamily: FONT.caption, fontSize: 20, color: '#64748B', marginBottom: 24, fontStyle: 'italic'}}>
                    I share niche engineering tools and deep tech workflows daily. Drop a follow if you want to see them on your feed.
                  </div>

                  <div style={{display: 'inline-block', padding: '14px 32px', background: '#D97757', borderRadius: 12}}>
                    <span style={{fontFamily: FONT.mono, fontSize: 24, color: '#FFFFFF', fontWeight: 700}}>
                      github.com/SakanaAI/AI-Scientist
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

            <StampMark at={cue('comment') || 69} x={420} y={1040} text="OPEN SOURCE" color="#D97757" size={60} rot={-5} />
          </Depth>

          <Depth z={1}>
            <PopIn at={10}>
              <Pill x={540} y={310} text="18,000+ STARS ON GITHUB · MIT LICENSED" bg="#FDE047" color="#713F12" size={38} rot={-1} center />
            </PopIn>
          </Depth>
        </OrbitCamera>
      </SnapZoom>
    </AbsoluteFill>
  );
};
