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
              <Slab x={140} y={540} w={800} h={400} color="#FAF7F2" shade={C.creamLo} shadeH={0.03} r={14} rot={-1.5}>
                <div style={{padding: '36px 44px'}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16}}>
                    <div style={{width: 22, height: 22, borderRadius: '50%', background: '#EF4444'}} />
                    <span style={{fontFamily: FONT.mono, fontSize: 22, fontWeight: 700, color: '#EF4444', letterSpacing: '0.08em'}}>
                      URGENT PRIVACY ALERT
                    </span>
                  </div>
                  <div style={{fontFamily: FONT.label, fontSize: 34, fontWeight: 800, color: C.ink, lineHeight: 1.25}}>
                    "Your exact physical location can be revealed from a voice clip, video, or livestream."
                  </div>
                  <div style={{marginTop: 20, display: 'flex', gap: 12}}>
                    <span style={{padding: '6px 16px', background: '#F1EDE4', borderRadius: 20, fontFamily: FONT.mono, fontSize: 18, color: C.inkSoft}}>
                      ACOUSTIC SURVEILLANCE
                    </span>
                  </div>
                </div>
              </Slab>
            </Paper>

            {/* Anxious User Critter */}
            <Critter
              x={320}
              y={1420}
              size={280}
              color="#4E6378"
              shade="#334455"
              expr={f > (cue('exposed') || 50) ? 'shock' : 'worried'}
              acc="none"
              armL={0.7}
              armLAngle={-40}
              lean={-6}
            />

            <StampMark at={cue('livestream') || 100} x={660} y={720} text="LOCATION EXPOSED" color={C.nogo} size={64} rot={-12} />
          </Depth>

          <Depth z={1}>
            <PopIn at={10}>
              <Pill x={540} y={440} text="NO GPS NEEDED" bg={C.amber} color={C.ink} size={40} rot={-2} center />
            </PopIn>
          </Depth>
        </OrbitCamera>
      </SnapZoom>
    </AbsoluteFill>
  );
};
