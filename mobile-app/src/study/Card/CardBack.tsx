import { CardItem } from '@vocably/model';
import React, { FC } from 'react';
import { CardDefinition } from '../../CardDefinition';

export const CardBack: FC<{ card: CardItem }> = ({ card }) => {
  return <CardDefinition card={card.data} textStyle={{ fontSize: 24 }} />;
};
