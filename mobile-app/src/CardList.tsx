import { FC } from 'react';
import { CardItem } from '@vocably/model';
import { CardListItem } from './CardListItem';

type CardList = FC<{
  cards: CardItem[];
}>;

export const CardList: CardList = ({ cards }) => {
  return (
    <>
      {cards.map((card, index) => (
        <CardListItem key={card.id} card={card} />
      ))}
    </>
  );
};
