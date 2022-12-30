import React, { FC, useEffect, useState } from 'react';
import { View } from 'react-native';
import { CardItem } from '@vocably/model';
import { loadLanguageDeck } from '@vocably/api';
import { slice } from '@vocably/srs';
import { Loader } from '../Loader';
import { Card } from './Card';
import { SwipeScore } from './SwipeScore';

export const Study: FC = () => {
  const [cards, setCards] = useState<undefined | CardItem[]>();
  useEffect(() => {
    loadLanguageDeck('nl').then((deckResult) => {
      if (deckResult.success === false) {
        return;
      }

      setCards(slice(new Date(), 10, deckResult.value.cards));
    });
  }, []);

  if (cards === undefined) {
    return <Loader></Loader>;
  }

  return (
    <View
      style={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {cards.slice(0, 1).map((card) => (
        <SwipeScore onScore={() => setCards(cards.slice(1))} key={card.id}>
          <Card card={card} />
        </SwipeScore>
      ))}
    </View>
  );
};
