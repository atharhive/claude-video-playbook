import React from 'react';
import {S01BlackoutHook} from './S01BlackoutHook';
import {S02ProjectNomad} from './S02ProjectNomad';
import {S03TheCatch} from './S03TheCatch';
import {S04AllInOne} from './S04AllInOne';
import {S05ToolsStore} from './S05ToolsStore';
import {S06HardwareSpecs} from './S06HardwareSpecs';
import {S07CtaPinned} from './S07CtaPinned';

export type SceneDef = {id: string; component: React.FC; banner: string; band: number};

export const SCENES: SceneDef[] = [
  {id: 'S01BlackoutHook', component: S01BlackoutHook, banner: 'THE WORLD GOES OFFLINE', band: 0},
  {id: 'S02ProjectNomad', component: S02ProjectNomad, banner: 'MADE FOR THAT DAY', band: 0},
  {id: 'S03TheCatch', component: S03TheCatch, banner: 'THE ONE CATCH', band: 0},
  {id: 'S04AllInOne', component: S04AllInOne, banner: 'ALL IN ONE MACHINE', band: 0},
  {id: 'S05ToolsStore', component: S05ToolsStore, banner: 'NOTES, DATA, A TOOL STORE', band: 0},
  {id: 'S06HardwareSpecs', component: S06HardwareSpecs, banner: 'THE AI NEEDS A STRONG PC', band: 0},
  {id: 'S07CtaPinned', component: S07CtaPinned, banner: 'FREE AND OPEN SOURCE', band: 0},
];
