import { SrsCard, SrsItem } from '@vocably/model';

export type SimpleCard = Omit<SrsCard, keyof SrsItem>;
