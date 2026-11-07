// S04Checklist: The 16-Item Checklist in action
import React from 'react';
import {AbsoluteFill} from 'remotion';
import {C, FONT} from '../lib/tokens';
import {Room} from '../lib/paper/sets';
import {OrbitCamera, Depth} from '../lib/paper/camera';
import {Slab, Paper, PopIn, Pill} from '../lib/paper/kit';
import {cueOf, durOf} from '../scene';

const ID = 'S04Checklist';

const ITEMS = [
  '01 Vector Hero Banner',
  '02 One-Command Quickstart',
  '03 Interactive Live Demo',
  '04 Permissive OSS License',
  '05 Automated CI Build Passes',
  '06 3-5 Good First Issues',
];

export const S04Checklist: React.FC = () => {
  const cue = cueOf(ID);
  const dur = durOf(ID);

  return (
    <AbsoluteFill>
      <OrbitCamera dur={dur} yaw={-10} push={1.12} origin={[540, 1000]}>
        <Depth z={0}>
          <Room color="teal" floorY={1420} floor="wood" />
        </Depth>

        <Depth z={0.5}>
          {/* Dossier Card */}
          <Paper lift={8}>
            <Slab x={140} y={480} w={800} h={640} color="#FAF7F2" shade={C.creamLo} shadeH={0.03} r={16} rot={-1}>
              <div style={{padding: '40px 48px'}}>
                <div style={{fontFamily: FONT.banner, fontSize: 36, color: C.ink, letterSpacing: '0.05em', marginBottom: 24}}>
                  16-POINT LAUNCH AUDIT
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
                  {ITEMS.map((item, idx) => (
                    <div key={item} style={{display: 'flex', alignItems: 'center', gap: 16, fontFamily: FONT.mono, fontSize: 28, color: C.inkSoft}}>
                      <div style={{width: 32, height: 32, borderRadius: 6, background: C.go, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontWeight: 800, fontSize: 20}}>
                        ✓
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Slab>
          </Paper>
        </Depth>

        <Depth z={1}>
          <PopIn at={cue('banners') || 40}>
            <Pill x={540} y={380} text="ALL 16 CHECKS VERIFIED" bg={C.go} color="#FFF" size={42} rot={2} center />
          </PopIn>
        </Depth>
      </OrbitCamera>
    </AbsoluteFill>
  );
};
