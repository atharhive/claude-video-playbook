import React from 'react';
import {S01PaperInPeril} from './S01PaperInPeril';
import {S02AutomatedReviewer} from './S02AutomatedReviewer';
import {S03OvernightExperiments} from './S03OvernightExperiments';
import {S04TheCatch} from './S04TheCatch';
import {S05CtaNiche} from './S05CtaNiche';

export type SceneDef = {id: string; component: React.FC; banner: string; band: number};

export const SCENES: SceneDef[] = [
  {id: 'S01PaperInPeril', component: S01PaperInPeril, banner: 'SAVED FROM A REJECT', band: 0},
  {id: 'S02AutomatedReviewer', component: S02AutomatedReviewer, banner: 'THE OVERNIGHT REVIEW LOOP', band: 0},
  {id: 'S03OvernightExperiments', component: S03OvernightExperiments, banner: 'SCORE JUMP: 5.0 TO 7.5 ACCEPT', band: 0},
  {id: 'S04TheCatch', component: S04TheCatch, banner: 'THE PRACTICAL REALITY', band: 0},
  {id: 'S05CtaNiche', component: S05CtaNiche, banner: 'COMMENT REJECT FOR REPO', band: 0},
];
