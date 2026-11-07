// S01AnxiousHook: Anxious user asking Claude if audio can leak their location
import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {C, FONT} from '../lib/tokens';
import {Room} from '../lib/paper/sets';
import {OrbitCamera, Depth, SnapZoom} from '../lib/paper/camera';
import {Critter} from '../lib/cast/Critter';
import {StampMark, PopIn, Pill, Paper, Slab} from '../lib/paper/kit';
import {cueOf, durOf} from '../scene';

const ID = 'S01AnxiousHook';

export const S01AnxiousHook: React.FC = () => {
  const cue = cueOf(ID);
  const dur = durOf(ID);
  const f = useCurrentFrame();

  return (
    <AbsoluteFill>
      <SnapZoom at={cue('exact') || 50} to={1.12}>
        <OrbitCamera dur={dur} yaw={-10} push={1.1} origin={[540, 1100]}>
          <Depth z={0}>
            <Room color="slate" floorY={1420} floor="wood" />
          </Depth>

          <Depth z={0.5}>
            {/* Surveillance Alert Card */}
            <Paper lift={8}>
              <Slab x={140} y={540} w={800} h={460} color="#FAF7F2" shade={C.creamLo} shadeH={0.03} r={14} rot={-1.5}>
                <div style={{padding: '36px 44px'}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20}}>
                    <div style={{width: 24, height: 24, borderRadius: '50%', background: '#EF4444'}} />
                    <span style={{fontFamily: FONT.mono, fontSize: 24, fontWeight: 700, color: '#EF4444', letterSpacing: '0.08em'}}>
                      AUDIO SURVEILLANCE WARNING
                    </span>
                  </div>
                  <div style={{fontFamily: FONT.label, fontSize: 36, fontWeight: 800, color: C.ink, lineHeight: 1.25}}>
                    "Can airplane sounds in background audio reveal your home address?"
                  </div>
                  <div style={{marginTop: 28, display: 'flex', gap: 14}}>
                    <span style={{padding: '6px 16px', background: '#F1EDE4', borderRadius: 20, fontFamily: FONT.mono, fontSize: 20, color: C.inkSoft}}>
                      OSINT ACOUSTIC FORENSICS
                    </span>
                  </div>
                </div>
              </Slab>
            </Paper>

            {/* Anxious User Critter */}
            <Critter
              x={320}
              y={1420}
              size={300}
              color="#4E6378"
              shade="#334455"
              expr={f > (cue('exact') || 50) ? 'shock' : 'worried'}
              acc="none"
              armL={0.7}
              armLAngle={-40}
              lean={-6}
            />

            <StampMark at={cue('airplane') || 95} x={640} y={780} text="LOCATION LEAK" color={C.nogo} size={64} rot={-12} />
          </Depth>

          <Depth z={1}>
            <PopIn at={10}>
              <Pill x={540} y={400} text="IS YOUR HOME LEAKED?" bg={C.amber} color={C.ink} size={42} rot={-2} center />
            </PopIn>
          </Depth>
        </OrbitCamera>
      </SnapZoom>
    </AbsoluteFill>
  );
};
