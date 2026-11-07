import React from 'react';
import {S01AnxiousHook} from './S01AnxiousHook';
import {S02ClaudeIntro} from './S02ClaudeIntro';
import {S03Spectrogram} from './S03Spectrogram';
import {S04FlightLogs} from './S04FlightLogs';
import {S05Heatmap} from './S05Heatmap';
import {S06CtaPin} from './S06CtaPin';

export type SceneDef = {id: string; component: React.FC; banner: string; band: number};

export const SCENES: SceneDef[] = [
  {id: 'S01AnxiousHook', component: S01AnxiousHook, banner: 'AUDIO SURVEILLANCE THREAT', band: 0},
  {id: 'S02ClaudeIntro', component: S02ClaudeIntro, banner: 'COLSTO OSINT BREAKTHROUGH', band: 0},
  {id: 'S03Spectrogram', component: S03Spectrogram, banner: 'DOPPLER FREQUENCY RIDGE CURVE', band: 0},
  {id: 'S04FlightLogs', component: S04FlightLogs, banner: 'ADS-B FLIGHT RADAR MATCHING', band: 0},
  {id: 'S05Heatmap', component: S05Heatmap, banner: '100-METER PINPOINT HEATMAP', band: 0},
  {id: 'S06CtaPin', component: S06CtaPin, banner: 'COMMENT RADAR • CHECK PINNED COMMENT', band: 0},
];
