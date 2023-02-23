import React, { FC, useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import { CardItem } from '@vocably/model';
import { grade, slice, SrsScore } from '@vocably/srs';
import { Card } from './Card';
import { SwipeGrade } from './SwipeGrade';
import { Completed } from './Completed';
import { Loader } from '../Loader';
import { useLanguageDeck } from '../useLanguageDeck';

export const Study: FC = () => {
  const { status, deck, update, reload } = useLanguageDeck();
  const [cards, setCards] = useState<CardItem[]>();

  useEffect(() => {
    setCards(slice(new Date(), 2, deck.cards));
  }, [deck.cards]);

  const onGrade = useCallback(
    (score: SrsScore) => {
      if (cards === undefined) {
        return;
      }

      if (cards.length === 0) {
        return;
      }

      update(cards[0].id, grade(cards[0].data, score), { silent: true }).then();

      setCards(cards.slice(1));
    },
    [cards]
  );

  if (status === 'loading') {
    return <Loader>Loading cards...</Loader>;
  }

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
          <SwipeGrade onGrade={onGrade} key={card.id}>
            <Card card={card} />
          </SwipeGrade>
        ))}
      {cards.length === 0 && <Completed onStudyAgain={reload}></Completed>}
    </View>
  );
};
