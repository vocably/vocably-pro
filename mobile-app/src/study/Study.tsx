import { Notifications } from '@aws-amplify/notifications';
import { CardItem, GoogleLanguage } from '@vocably/model';
import { grade, slice, SrsScore } from '@vocably/srs';
import { shuffle } from 'lodash-es';
import { usePostHog } from 'posthog-react-native';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { useSelectedDeck } from '../languageDeck/useSelectedDeck';
import { Loader } from '../loaders/Loader';
import { useNumberOfPracticeSessions } from '../RequestFeedback/useNumberOfPracticeSessions';
import { useCardsAnsweredToday } from './cardsAnsweredToday';
import { Completed } from './Completed';
import { craftTheStrategy } from './craftTheStrategy';
import { getPredefinedMultiChoiceOptions } from './getPredefinedMultiChoiceOptions';
import { Grade } from './Grade';
import { useTranslationLanguage } from './useTranslationLanguage';

type Props = {
  onExit: () => void;
  autoPlay: boolean;
  isRandomizerEnabled: boolean;
  isMultiChoiceEnabled: boolean;
  preferMultiChoiceEnabled: boolean;
  maximumCardsPerSession: number;
};

export const Study: FC<Props> = ({
  onExit,
  autoPlay,
  isRandomizerEnabled,
  isMultiChoiceEnabled,
  preferMultiChoiceEnabled,
  maximumCardsPerSession,
}) => {
  const {
    status,
    update,
    filteredCards,
    deck: { language, cards: allCards },
  } = useSelectedDeck({
    autoReload: false,
  });
  const [cards, setCards] = useState<CardItem[]>();
  const [cardsStudied, setCardsStudied] = useState(0);
  const [numberOfRepetitions, increaseNumberOfRepetitions] =
    useNumberOfPracticeSessions();
  const [cardsAnsweredToday, increaseCardsAnsweredToday] =
    useCardsAnsweredToday();

  const translationLanguage = useTranslationLanguage(
    language as GoogleLanguage
  );

  useEffect(() => {
    if (
      cardsAnsweredToday !== null &&
      cardsAnsweredToday.answers > 0 &&
      cardsAnsweredToday.answers % maximumCardsPerSession === 0
    ) {
      Notifications.Push.setBadgeCount(0);
    }
  }, [cardsAnsweredToday]);

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

      const { strategy } = craftTheStrategy({
        isMultiChoiceEnabled,
        preferMultiChoiceEnabled,
        card: cards[0],
        allCards,
        prerenderedCards: translationLanguage
          ? getPredefinedMultiChoiceOptions(
              language as GoogleLanguage,
              translationLanguage
            )
          : [],
      });

      update(cards[0].id, grade(cards[0].data, score, strategy)).then(
        (result) => {
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
        }
      );

      increaseCardsAnsweredToday();
      const followingCards = cards.slice(1);
      setCards(followingCards);
      setCardsStudied((cardsStudied) => cardsStudied + 1);

      if (followingCards.length === 0) {
        Notifications.Push.setBadgeCount(0);
        increaseNumberOfRepetitions();
      }
    },
    [cards, increaseNumberOfRepetitions, increaseCardsAnsweredToday]
  );

  const posthog = usePostHog();

  useEffect(() => {
    posthog.capture('study_started', {
      isRandomizerEnabled,
      isMultiChoiceEnabled,
      preferMultiChoiceEnabled,
      maximumCardsPerSession,
      language,
    });
  }, [posthog]);

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
              preferMultiChoiceEnabled={preferMultiChoiceEnabled}
              card={card}
              onGrade={onGrade}
              autoPlay={autoPlay}
              existingCards={allCards}
              prerenderedCards={
                translationLanguage
                  ? getPredefinedMultiChoiceOptions(
                      language as GoogleLanguage,
                      translationLanguage
                    )
                  : []
              }
            />
          ))}
      {cards.length === 0 && (
        <Completed
          cards={allCards}
          onDone={onExit}
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
