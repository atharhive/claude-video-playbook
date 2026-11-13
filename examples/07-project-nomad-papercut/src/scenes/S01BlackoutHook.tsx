import React from 'react';
import {AbsoluteFill, Img, staticFile} from 'remotion';
import {Room} from '../lib/paper/sets';
import {OrbitCamera, Depth, SnapZoom} from '../lib/paper/camera';
import {Slab, Paper} from '../lib/paper/kit';
import {Critter} from '../lib/cast/Critter';
import {cueOf, durOf} from '../scene';

const ID = 'S01BlackoutHook';

export const S01BlackoutHook: React.FC = () => {
  const cue = cueOf(ID);
  const dur = durOf(ID);

  return (
    <AbsoluteFill>
      <SnapZoom at={cue('down') || 56} to={1.03}>
        <OrbitCamera dur={dur} yaw={3} push={1.04} origin={[540, 960]}>
          <Depth z={0}>
            <Room color="navy" floorY={1420} floor="wood" />
          </Depth>

          <Depth z={0.5}>
            {/* The Blackout Night City & Severed Cable Card */}
            <Paper lift={10}>
              <Slab x={60} y={340} w={960} h={780} color="#0B1120" shade="#020617" shadeH={0.03} r={16} rot={-1}>
                <div style={{padding: '10px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <Img src={staticFile('assets/scene1_blackout.png')} style={{width: '100%', height: 'auto', borderRadius: 12}} />
                </div>
              </Slab>
            </Paper>

            {/* Papercraft Character (salmon/orange, miner cap with lamp) */}
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
          </Depth>
        </OrbitCamera>
      </SnapZoom>
    </AbsoluteFill>
  );
};
