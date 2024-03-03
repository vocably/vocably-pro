import { CardItem } from '@vocably/model';
import { grade, slice, SrsScore } from '@vocably/srs';
import React, { FC, useCallback, useContext, useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { useNumberOfRepetitions } from '../AskForReview/useNumberOfRepetitions.ts';
import { useLanguageDeck } from '../languageDeck/useLanguageDeck';
import { LanguagesContext } from '../languages/LanguagesContainer';
import { Loader } from '../loaders/Loader';
import { Card } from './Card';
import { Completed } from './Completed';
import { SwipeGrade } from './SwipeGrade';

const maxCardsToStudy = 10;

type Study = FC<{
  onExit: () => void;
}>;

export const Study: Study = ({ onExit }) => {
  const { selectedLanguage } = useContext(LanguagesContext);
  const { status, deck, update } = useLanguageDeck(selectedLanguage);
  const [cards, setCards] = useState<CardItem[]>();
  const [cardsStudied, setCardsStudied] = useState(0);
  const [numberOfRepetitions, setNumberOfRepetitions] =
    useNumberOfRepetitions();

  const totalCardsToStudy = Math.min(maxCardsToStudy, deck.cards.length);

  useEffect(() => {
    if (cardsStudied === 0) {
      setCards(slice(new Date(), maxCardsToStudy, deck.cards));
    }
  }, [deck.cards, cardsStudied]);

  const onGrade = useCallback(
    (score: SrsScore) => {
      if (cards === undefined) {
        return;
      }

      if (cards.length === 0) {
        return;
      }

      update(cards[0].id, grade(cards[0].data, score)).then((result) => {
        if (result.success === false) {
          Alert.alert(
            `Error: Card update failed`,
            // `Oops! Unable to continue practice session due to a technical issue. Please try again later or contact support for assistance.`,
            `Oops! Unable to continue practice session due to a technical issue. Please try again later.`,
            [
              {
                text: 'Exit practice session',
                onPress: onExit,
              },
            ]
          );
        }
      });

      const followingCards = cards.slice(1);
      setCards(followingCards);

      if (followingCards.length === 0) {
        if (numberOfRepetitions !== undefined) {
          setNumberOfRepetitions(numberOfRepetitions + 1);
        }
      }

      setCardsStudied(cardsStudied + 1);
    },
    [cards, numberOfRepetitions]
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
      {totalCardsToStudy === cardsStudied && (
        <Completed
          numberOfRepetitions={numberOfRepetitions}
          onStudyAgain={() => setCardsStudied(0)}
        ></Completed>
      )}
    </View>
  );
};
