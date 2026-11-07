// S03Spectrogram: Demonstrates the Doppler spectrogram curve
import React from 'react';
import {AbsoluteFill, Img, staticFile} from 'remotion';
import {C, FONT} from '../lib/tokens';
import {Room} from '../lib/paper/sets';
import {OrbitCamera, Depth} from '../lib/paper/camera';
import {Slab, Paper, PopIn, Pill} from '../lib/paper/kit';
import {cueOf, durOf} from '../scene';

const ID = 'S03Spectrogram';

export const S03Spectrogram: React.FC = () => {
  const cue = cueOf(ID);
  const dur = durOf(ID);

  return (
    <AbsoluteFill>
      <OrbitCamera dur={dur} yaw={-8} push={1.1} origin={[540, 1000]}>
        <Depth z={0}>
          <Room color="teal" floorY={1420} floor="wood" />
        </Depth>

        <Depth z={0.5}>
          {/* Card housing the spectrogram illustration */}
          <Paper lift={8}>
            <Slab x={140} y={440} w={800} h={520} color="#0D0C15" shade="#000000" shadeH={0.05} r={14} rot={-1}>
              <div style={{padding: '20px 24px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12}}>
                  <span style={{fontFamily: FONT.mono, fontSize: 20, fontWeight: 700, color: '#38BDF8', letterSpacing: '0.06em'}}>
                    AUDIO FREQUENCY SPECTRUM (60Hz - 400Hz)
                  </span>
                  <span style={{padding: '4px 12px', background: '#251D33', borderRadius: 12, fontFamily: FONT.mono, fontSize: 15, color: '#F5C542'}}>
                    DOPPLER SHIFT
                  </span>
                </div>
                <Img src={staticFile('assets/spectrogram_curve.svg')} style={{width: '100%', height: 'auto', borderRadius: 8}} />
              </div>
            </Slab>
          </Paper>
        </Depth>

        <Depth z={1}>
          <PopIn at={cue('frequency') || 30}>
            <Pill x={540} y={340} text="PROPELLER BLADE-PASS HARMONIC" bg={C.brand} color="#FFF" size={38} rot={1.5} center />
          </PopIn>
        </Depth>
      </OrbitCamera>
    </AbsoluteFill>
  );
};
