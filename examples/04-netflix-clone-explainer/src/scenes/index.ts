import React from 'react';
import {S01CloneHook} from './S01CloneHook';
import {S02TechBlogs} from './S02TechBlogs';
import {S03ChaosMonkey} from './S03ChaosMonkey';
import {S04BuildTiny} from './S04BuildTiny';
import {S05ReachOut} from './S05ReachOut';
import {S06CtaInsider} from './S06CtaInsider';

export type SceneDef = {id: string; component: React.FC; banner: string; band: number};

export const SCENES: SceneDef[] = [
  {id: 'S01CloneHook', component: S01CloneHook, banner: 'THE PORTFOLIO CLONE TRAP', band: 0},
  {id: 'S02TechBlogs', component: S02TechBlogs, banner: 'READ REAL TECH BLOGS', band: 0},
  {id: 'S03ChaosMonkey', component: S03ChaosMonkey, banner: 'NETFLIX CHAOS MONKEY', band: 0},
  {id: 'S04BuildTiny', component: S04BuildTiny, banner: 'BUILD THE TINY VERSION', band: 0},
  {id: 'S05ReachOut', component: S05ReachOut, banner: 'MESSAGE THE ENGINEER', band: 0},
  {id: 'S06CtaInsider', component: S06CtaInsider, banner: 'COMMENT INSIDER • CHECK PINNED COMMENT', band: 0},
];
