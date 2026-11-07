// S05Heatmap: 100-meter pinpoint acoustic heatmap
import React from 'react';
import {AbsoluteFill, Img, staticFile} from 'remotion';
import {C, FONT} from '../lib/tokens';
import {Room} from '../lib/paper/sets';
import {OrbitCamera, Depth, SnapZoom} from '../lib/paper/camera';
import {Slab, Paper, PopIn, Pill, StampMark} from '../lib/paper/kit';
import {cueOf, durOf} from '../scene';

const ID = 'S05Heatmap';

export const S05Heatmap: React.FC = () => {
  const cue = cueOf(ID);
  const dur = durOf(ID);

  return (
    <AbsoluteFill>
      <SnapZoom at={cue('pinpoint') || 35} to={1.14}>
        <OrbitCamera dur={dur} yaw={-10} push={1.12} origin={[540, 1000]}>
          <Depth z={0}>
            <Room color="mustard" floorY={1420} floor="wood" />
          </Depth>

          <Depth z={0.5}>
            <Paper lift={8}>
              <Slab x={140} y={480} w={800} h={580} color="#0D1117" shade="#000" shadeH={0.04} r={14} rot={-1}>
                <div style={{padding: '24px 28px'}}>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16}}>
                    <span style={{fontFamily: FONT.mono, fontSize: 22, fontWeight: 700, color: '#EF4444', letterSpacing: '0.06em'}}>
                      RADAR ACOUSTIC TRIANGULATION
                    </span>
                    <span style={{padding: '4px 12px', background: '#37181E', borderRadius: 12, fontFamily: FONT.mono, fontSize: 16, color: '#F87171'}}>
                      LOCATED
                    </span>
                  </div>
                  <Img src={staticFile('assets/heatmap_radar.svg')} style={{width: '100%', height: 'auto', borderRadius: 8}} />
                </div>
              </Slab>
            </Paper>

            <StampMark at={cue('pinpoint') || 35} x={680} y={1020} text="100M HEATMAP" color={C.nogo} size={64} rot={-10} />
          </Depth>

          <Depth z={1}>
            <PopIn at={10}>
              <Pill x={540} y={380} text="PRECISE LOCATION SOLVED" bg={C.nogo} color="#FFF" size={42} rot={-2} center />
            </PopIn>
          </Depth>
        </OrbitCamera>
      </SnapZoom>
    </AbsoluteFill>
  );
};
