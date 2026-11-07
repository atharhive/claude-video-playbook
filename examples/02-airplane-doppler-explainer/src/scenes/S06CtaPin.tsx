// S06CtaPin: Call to action to comment RADAR and check pinned comments
import React from 'react';
import {Card} from '../lib/paper/kit';
import {CtaPhoneDM} from '../lib/scenes/CtaPhoneDM';
import {cueOf, durOf} from '../scene';

const ID = 'S06CtaPin';

export const S06CtaPin: React.FC = () => {
  const cue = cueOf(ID);

  return (
    <CtaPhoneDM
      dur={durOf(ID)}
      keyword="RADAR"
      typeAt={cue('radar') || 17}
      sendAt={cue('script') || 125}
      landAt={(cue('script') || 125) + 15}
      sparkleAt={cue('pinned') || 167}
      whip={false}
      itemW={320}
      itemH={420}
      items={[
        <Card key="radar_kit" x={0} y={0} w={320} h={420} lines={5} seed="radar_dossier">
          <div style={{padding: '16px', fontWeight: 800, fontSize: '18px', color: '#1C1B17'}}>
            AIRCRAFT DOPPLER OSINT TOOLKIT
          </div>
          <div style={{padding: '0 16px', fontSize: '13px', color: '#B55B3E', fontWeight: 700}}>
            CHECK PINNED COMMENT
          </div>
        </Card>,
      ]}
    />
  );
};
