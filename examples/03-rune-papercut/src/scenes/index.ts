import React from 'react';
import {S01AnxiousHook} from './S01AnxiousHook';
import {S02RuneIntro} from './S02RuneIntro';
import {S03Benchmark} from './S03Benchmark';
import {S04OpenRouter} from './S04OpenRouter';
import {S05Headless} from './S05Headless';
import {S06CtaPin} from './S06CtaPin';

export type SceneDef = {id: string; component: React.FC; banner: string; band: number};

export const SCENES: SceneDef[] = [
  {id: 'S01AnxiousHook', component: S01AnxiousHook, banner: 'ELECTRON MEMORY CRISIS', band: 0},
  {id: 'S02RuneIntro', component: S02RuneIntro, banner: 'RUNE GPU ARCHITECTURE', band: 0},
  {id: 'S03Benchmark', component: S03Benchmark, banner: '-95% IDLE RAM BENCHMARK', band: 0},
  {id: 'S04OpenRouter', component: S04OpenRouter, banner: 'OPENROUTER ORI JUST SHIPPED', band: 0},
  {id: 'S05Headless', component: S05Headless, banner: 'HEADLESS AGENT UI TESTER', band: 0},
  {id: 'S06CtaPin', component: S06CtaPin, banner: 'COMMENT RUNE • CHECK PINNED COMMENT', band: 0},
];
