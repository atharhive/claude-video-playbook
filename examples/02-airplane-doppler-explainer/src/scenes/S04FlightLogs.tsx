// S04FlightLogs: Matches the curve against ADS-B logs
import React from 'react';
import {AbsoluteFill} from 'remotion';
import {C, FONT} from '../lib/tokens';
import {Room} from '../lib/paper/sets';
import {OrbitCamera, Depth} from '../lib/paper/camera';
import {Slab, Paper, PopIn, Pill, StampMark} from '../lib/paper/kit';
import {cueOf, durOf} from '../scene';

const ID = 'S04FlightLogs';

const LOG_ROWS = [
  {time: '14:22:10 UTC', icao: 'N4927V', type: 'C172', alt: '2,400 ft', spd: '118 kts', match: '98.4%'},
  {time: '14:37:30 UTC', icao: 'N8103A', type: 'PA-28', alt: '3,100 ft', spd: '124 kts', match: '99.1%'},
  {time: '14:52:05 UTC', icao: 'N104SK', type: 'SR22', alt: '4,500 ft', spd: '162 kts', match: '94.8%'},
];

export const S04FlightLogs: React.FC = () => {
  const cue = cueOf(ID);
  const dur = durOf(ID);

  return (
    <AbsoluteFill>
      <OrbitCamera dur={dur} yaw={10} push={1.12} origin={[540, 1000]}>
        <Depth z={0}>
          <Room color="navy" floorY={1420} floor="wood" />
        </Depth>

        <Depth z={0.5}>
          <Paper lift={8}>
            <Slab x={140} y={480} w={800} h={600} color="#FAF7F2" shade={C.creamLo} shadeH={0.03} r={14} rot={1}>
              <div style={{padding: '36px 44px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24}}>
                  <span style={{fontFamily: FONT.banner, fontSize: 30, color: C.ink}}>
                    PUBLIC ADS-B FLIGHT RADAR
                  </span>
                  <span style={{padding: '4px 12px', background: '#DCFCE7', borderRadius: 12, fontFamily: FONT.mono, fontSize: 16, color: '#166534', fontWeight: 700}}>
                    SURVEILLANCE MATCH
                  </span>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', gap: 14}}>
                  {LOG_ROWS.map((row, idx) => (
                    <PopIn key={row.icao} at={(cue('match') || 40) + idx * 10}>
                      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 18px', background: '#F4EFEA', borderRadius: 8, border: '1px solid #E5DFD5'}}>
                        <div style={{fontFamily: FONT.mono, fontSize: 20, color: C.ink, fontWeight: 700}}>
                          {row.icao} <span style={{fontSize: 16, color: '#6E6A64'}}>({row.type})</span>
                        </div>
                        <div style={{fontFamily: FONT.mono, fontSize: 18, color: '#4B5563'}}>
                          {row.alt} • {row.spd}
                        </div>
                        <div style={{padding: '4px 10px', background: C.go, borderRadius: 6, color: '#FFF', fontFamily: FONT.mono, fontSize: 16, fontWeight: 800}}>
                          {row.match}
                        </div>
                      </div>
                    </PopIn>
                  ))}
                </div>
              </div>
            </Slab>
          </Paper>

          <StampMark at={cue('public') || 60} x={660} y={1000} text="RADAR MATCH" color={C.go} size={64} rot={-10} />
        </Depth>

        <Depth z={1}>
          <PopIn at={12}>
            <Pill x={540} y={380} text="ADS-B FLIGHT TELEMETRY" bg={C.sparkYellow} color={C.ink} size={42} rot={-1} center />
          </PopIn>
        </Depth>
      </OrbitCamera>
    </AbsoluteFill>
  );
};
