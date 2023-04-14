import { FC } from 'react';
import { CardItem } from '@vocably/model';
import { CardListItem } from './CardListItem';
import { useTheme } from 'react-native-paper';

type CardList = FC<{
  cards: CardItem[];
}>;

export const CardList: CardList = ({ cards }) => {
  const theme = useTheme();
  return (
    <>
      {cards.map((card, index) => (
        <CardListItem
          key={card.id}
          card={card}
          sourceStyle={{ fontSize: 24, color: theme.colors.secondary }}
        />
      ))}
    </>
  );
};
