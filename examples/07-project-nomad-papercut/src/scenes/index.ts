import React from 'react';
import {S01BlackoutHook} from './S01BlackoutHook';
import {S02ProjectNomad} from './S02ProjectNomad';

export type SceneDef = {id: string; component: React.FC; banner: string; band: number};

export const SCENES: SceneDef[] = [
  {id: 'S01BlackoutHook', component: S01BlackoutHook, banner: 'THE WORLD GOES OFFLINE', band: 0},
  {id: 'S02ProjectNomad', component: S02ProjectNomad, banner: 'MADE FOR THAT DAY', band: 0},
];
