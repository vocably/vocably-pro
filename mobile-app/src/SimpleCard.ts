import { Card, SrsItem } from '@vocably/model';

export type SimpleCard = Omit<Card, keyof SrsItem>;
