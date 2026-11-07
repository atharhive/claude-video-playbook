// S06Cta: High-impact keyword comment CTA
import React from 'react';
import {Card} from '../lib/paper/kit';
import {CtaPhoneDM} from '../lib/scenes/CtaPhoneDM';
import {cueOf, durOf} from '../scene';

const ID = 'S06Cta';

export const S06Cta: React.FC = () => {
  const cue = cueOf(ID);

  return (
    <CtaPhoneDM
      dur={durOf(ID)}
      keyword="REPO"
      typeAt={cue('REPO') || 16}
      sendAt={cue('send') || 55}
      landAt={(cue('send') || 55) + 8}
      sparkleAt={(cue('send') || 55) + 14}
      whip={false}
      itemW={320}
      itemH={400}
      items={[
        <Card key="prompt" x={0} y={0} w={320} h={400} lines={6} seed="claude_prompt">
          <div style={{padding: '16px', fontWeight: 800, fontSize: '20px', color: '#1C1B17'}}>
            CLAUDE LAUNCH PROMPT
          </div>
        </Card>,
      ]}
    />
  );
};
