import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { useSelectedDeck } from '../languageDeck/useSelectedDeck';
import { ASK_FOR_REVIEW_AFTER } from './isOkayToAsk';

const numberOfRepetitionsKey = 'numberOfRepetitions';

let storedNumberOfRepetitions: number | null | undefined = undefined;

AsyncStorage.getItem(numberOfRepetitionsKey).then(
  (receivedNumberOfRepetitions) => {
    if (receivedNumberOfRepetitions !== null) {
      storedNumberOfRepetitions = parseInt(receivedNumberOfRepetitions, 10);
    } else {
      storedNumberOfRepetitions = null;
    }
  }
);

export const useNumberOfRepetitions = () => {
  const [numberOfRepetitions, setNumberOfRepetitions] = useState<number>();

  const { status, deck } = useSelectedDeck();

  useEffect(() => {
    if (status === 'loaded' && storedNumberOfRepetitions === null) {
      setNumberOfRepetitions(
        deck.cards.length > 10 ? ASK_FOR_REVIEW_AFTER - 1 : 0
      );
    } else {
      setNumberOfRepetitions(storedNumberOfRepetitions ?? 0);
    }
  }, [status]);

  useEffect(() => {
    if (numberOfRepetitions !== undefined) {
      storedNumberOfRepetitions = numberOfRepetitions;
      AsyncStorage.setItem(
        numberOfRepetitionsKey,
        numberOfRepetitions.toString()
      );
    }
  }, [numberOfRepetitions]);

  return [numberOfRepetitions, setNumberOfRepetitions];
};
