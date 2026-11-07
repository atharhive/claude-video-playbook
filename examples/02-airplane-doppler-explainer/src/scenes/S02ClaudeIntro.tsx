// S02ClaudeIntro: Claude MC tells the story of OSINT researcher Colsto
import React from 'react';
import {AbsoluteFill, useCurrentFrame, Img, staticFile} from 'remotion';
import {C, FONT} from '../lib/tokens';
import {Room} from '../lib/paper/sets';
import {OrbitCamera, Depth, SnapZoom} from '../lib/paper/camera';
import {Critter} from '../lib/cast/Critter';
import {Pill, PopIn, StampMark, Paper, Slab} from '../lib/paper/kit';
import {cueOf, durOf} from '../scene';

const ID = 'S02ClaudeIntro';

export const S02ClaudeIntro: React.FC = () => {
  const cue = cueOf(ID);
  const dur = durOf(ID);
  const f = useCurrentFrame();

  return (
    <AbsoluteFill>
      <SnapZoom at={cue('colsto') || 40} to={1.06}>
        <OrbitCamera dur={dur} yaw={4} push={1.04} origin={[540, 1100]}>
          <Depth z={0}>
            <Room color="purple" floorY={1420} floor="wood" />
          </Depth>

          <Depth z={0.5}>
            {/* Visual reference: Colsto YouTube Channel / Research Card */}
            <Paper lift={8}>
              <Slab x={140} y={480} w={800} h={520} color="#0E0B17" shade="#000" shadeH={0.04} r={14} rot={-1}>
                <div style={{padding: '16px 20px'}}>
                  <Img src={staticFile('assets/colsto_channel_card.svg')} style={{width: '100%', height: 'auto', borderRadius: 10}} />
                </div>
              </Slab>
            </Paper>

            {/* Claude MC shifted to far right with arm down */}
            <Critter
              x={920}
              y={1420}
              size={240}
              color="#D97757"
              shade="#B55B3E"
              expr={f > (cue('colsto') || 40) ? 'happy' : 'idle'}
              tag="CLAUDE MC"
              tagColor="#B55B3E"
              armL={0.2}
              armLAngle={15}
              armR={0.2}
              armRAngle={15}
              lean={0}
            />

            <StampMark at={cue('proved') || 80} x={340} y={1020} text="RESEARCH PROVEN" color={C.go} size={64} rot={-8} />
          </Depth>

          <Depth z={1}>
            <PopIn at={15}>
              <Pill x={540} y={380} text="CREATOR: @COLSTO (105K SUBS)" bg={C.sparkYellow} color={C.ink} size={40} rot={-1} center />
            </PopIn>
          </Depth>
        </OrbitCamera>
      </SnapZoom>
    </AbsoluteFill>
  );
};
