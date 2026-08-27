import { Disease } from '../../types';
import { TAP3_PART1 } from './tap3Diseases1';
import { TAP3_PART2 } from './tap3Diseases2';
import { TAP3_PART3 } from './tap3Diseases3';
import { TAP3_PART4 } from './tap3Diseases4';

export const TAP3_DISEASES: Disease[] = [
  ...TAP3_PART1,
  ...TAP3_PART2,
  ...TAP3_PART3,
  ...TAP3_PART4,
];

export const TAP3_DISEASE_IDS: string[] = TAP3_DISEASES.map(d => d.id);
