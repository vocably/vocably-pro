import React, { FC, useEffect, useState } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { CardItem } from '@vocably/model';
import { loadLanguageDeck } from '@vocably/api';
import { slice } from '@vocably/srs';
import { Loader } from '../Loader';
import { Card } from './Card';
import { SwipeResponse } from './SwipeResponse';

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
      onPointerEnter={() => console.log('piu')}
    >
      <SwipeResponse>
        <Card card={cards[0]}></Card>
      </SwipeResponse>
    </View>
  );
};
