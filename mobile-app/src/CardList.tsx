import { CardItem } from '@vocably/model';
import { FC } from 'react';
import { useTheme } from 'react-native-paper';
import { CardListItem } from './CardListItem';

type CardList = FC<{
  cards: CardItem[];
}>;

export const CardList: CardList = ({ cards }) => {
  const theme = useTheme();
  return (
    <>
      {cards.map((card, index) => (
        <CardListItem key={card.id} card={card.data} />
      ))}
    </>
  );
};
