import { CardItem } from '@vocably/model';
import { grade, slice, SrsScore } from '@vocably/srs';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { useSelectedDeck } from '../languageDeck/useSelectedDeck';
import { Loader } from '../loaders/Loader';
import { getMultiChoiceEnabled } from '../MainMenu/PracticeSettingsScreen';
import { useNumberOfRepetitions } from '../RequestFeedback/useNumberOfRepetitions';
import { useAsync } from '../useAsync';
import { Completed } from './Completed';
import { Grade } from './Grade';

const maxCardsToStudy = 10;

type Props = {
  onExit: () => void;
  autoPlay: boolean;
};

export const Study: FC<Props> = ({ onExit, autoPlay }) => {
  const {
    status,
    update,
    filteredCards,
    deck: { cards: allCards },
  } = useSelectedDeck();
  const [cards, setCards] = useState<CardItem[]>();
  const [cardsStudied, setCardsStudied] = useState(0);
  const [numberOfRepetitions, increaseNumberOfRepetitions] =
    useNumberOfRepetitions();

  const totalCardsToStudy = Math.min(maxCardsToStudy, filteredCards.length);

  const [isMultiChoiceEnabledResult] = useAsync(getMultiChoiceEnabled);

  useEffect(() => {
    if (cardsStudied === 0) {
      setCards(slice(new Date(), maxCardsToStudy, filteredCards));
    }
  }, [filteredCards, cardsStudied]);

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
              isMultiChoiceEnabled={
                isMultiChoiceEnabledResult.status === 'loaded'
                  ? isMultiChoiceEnabledResult.value
                  : false
              }
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
