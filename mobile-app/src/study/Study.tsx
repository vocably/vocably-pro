import { CardItem } from '@vocably/model';
import { grade, slice, SrsScore } from '@vocably/srs';
import { shuffle } from 'lodash-es';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { useSelectedDeck } from '../languageDeck/useSelectedDeck';
import { Loader } from '../loaders/Loader';
import { useNumberOfRepetitions } from '../RequestFeedback/useNumberOfRepetitions';
import { Completed } from './Completed';
import { Grade } from './Grade';

type Props = {
  onExit: () => void;
  autoPlay: boolean;
  isRandomizerEnabled: boolean;
  isMultiChoiceEnabled: boolean;
  maximumCardsPerSession: number;
};

export const Study: FC<Props> = ({
  onExit,
  autoPlay,
  isRandomizerEnabled,
  isMultiChoiceEnabled,
  maximumCardsPerSession,
}) => {
  const {
    status,
    update,
    filteredCards,
    deck: { cards: allCards },
  } = useSelectedDeck({
    autoReload: false,
  });
  const [cards, setCards] = useState<CardItem[]>();
  const [cardsStudied, setCardsStudied] = useState(0);
  const [numberOfRepetitions, increaseNumberOfRepetitions] =
    useNumberOfRepetitions();

  const totalCardsToStudy = Math.min(
    maximumCardsPerSession,
    filteredCards.length
  );

  useEffect(() => {
    if (cardsStudied === 0) {
      if (isRandomizerEnabled) {
        setCards(shuffle(filteredCards).slice(0, maximumCardsPerSession));
      } else {
        setCards(slice(new Date(), maximumCardsPerSession, filteredCards));
      }
    }
  }, [status, filteredCards, cardsStudied, isRandomizerEnabled]);

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
      setCardsStudied((cardsStudied) => cardsStudied + 1);

      if (followingCards.length === 0) {
        increaseNumberOfRepetitions();
      }
    },
    [cards, increaseNumberOfRepetitions]
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
        cards
          .slice(0, 1)
          .map((card) => (
            <Grade
              key={card.id}
              isMultiChoiceEnabled={isMultiChoiceEnabled}
              card={card}
              onGrade={onGrade}
              autoPlay={autoPlay}
              existingCards={allCards}
            />
          ))}
      {totalCardsToStudy === cardsStudied && (
        <Completed
          numberOfRepetitions={
            numberOfRepetitions.status === 'loaded'
              ? numberOfRepetitions.value
              : 0
          }
          onStudyAgain={() => setCardsStudied(0)}
        ></Completed>
      )}
    </View>
  );
};
