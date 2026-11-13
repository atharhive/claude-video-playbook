import React from 'react';
import {AbsoluteFill, Img, staticFile} from 'remotion';
import {Room} from '../lib/paper/sets';
import {OrbitCamera, Depth, SnapZoom} from '../lib/paper/camera';
import {Slab, Paper} from '../lib/paper/kit';
import {Critter} from '../lib/cast/Critter';
import {cueOf, durOf} from '../scene';

const ID = 'S06HardwareSpecs';

export const S06HardwareSpecs: React.FC = () => {
  const cue = cueOf(ID);
  const dur = durOf(ID);

  return (
    <AbsoluteFill>
      <SnapZoom at={cue('wants') || 164} to={1.03}>
        <OrbitCamera dur={dur} yaw={3} push={1.04} origin={[540, 960]}>
          <Depth z={0}>
            <Room color="purple" floorY={1420} floor="wood" />
          </Depth>

          <Depth z={0.5}>
            <Paper lift={10}>
              <Slab x={60} y={340} w={960} h={800} color="#181216" shade="#020617" shadeH={0.03} r={16} rot={1}>
                <div style={{padding: '10px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <Img src={staticFile('assets/scene6_hardware.png')} style={{width: '100%', height: 'auto', borderRadius: 12}} />
                </div>
              </Slab>
            </Paper>

            <Critter
              x={920}
              y={1420}
              size={240}
              color="#D97757"
              shade="#B55B3E"
              expr="idle"
              armL={0.2}
              armLAngle={15}
              armR={0.3}
              armRAngle={-15}
              lean={-1}
            />
          </Depth>
        </OrbitCamera>
      </SnapZoom>
    </AbsoluteFill>
  );
};
