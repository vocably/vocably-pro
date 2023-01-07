import React, { FC, useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import { CardItem } from '@vocably/model';
import { slice } from '@vocably/srs';
import { Card } from './Card';
import { SwipeGrade } from './SwipeGrade';
import { Completed } from './Completed';
import { DeckContext } from '../DeckContainer';

export const Study: FC = () => {
  const { deck } = useContext(DeckContext);
  const [cards, setCards] = useState<CardItem[]>();

  useEffect(() => {
    setCards(slice(new Date(), 10, deck.cards));
  }, [deck]);

  if (cards === undefined) {
    return <></>;
  }

  return (
    <View
      style={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {cards.length > 0 &&
        cards.slice(0, 1).map((card) => (
          <SwipeGrade onGrade={() => setCards(cards.slice(1))} key={card.id}>
            <Card card={card} />
          </SwipeGrade>
        ))}
      {cards.length === 0 && <Completed onStudyAgain={() => {}}></Completed>}
    </View>
  );
};
