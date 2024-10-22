import { useCallback } from 'react';
import * as asyncAppStorage from '../asyncAppStorage';
import { useAsync } from '../useAsync';

const numberOfRepetitionsKey = 'numberOfRepetitions';

const retrieveNumberOfRepetitions = (): Promise<number> =>
  asyncAppStorage
    .getItem(numberOfRepetitionsKey)
    .then((receivedNumberOfRepetitions) => {
      if (receivedNumberOfRepetitions !== undefined) {
        return parseInt(receivedNumberOfRepetitions, 10);
      } else {
        return 0;
      }
    })
    .catch(() => 0);

const storeNumberOfRepetitions = (numberOfRepetitions: number) =>
  asyncAppStorage.setItem(
    numberOfRepetitionsKey,
    numberOfRepetitions.toString()
  );

export const useNumberOfRepetitions = () => {
  const [numberOfRepetitionsResult, setNumberOfRepetitions] = useAsync(
    retrieveNumberOfRepetitions,
    storeNumberOfRepetitions
  );

  const increase = useCallback(() => {
    if (numberOfRepetitionsResult.status === 'loaded') {
      setNumberOfRepetitions(numberOfRepetitionsResult.value + 1);
    }
  }, [numberOfRepetitionsResult, setNumberOfRepetitions]);

  return [numberOfRepetitionsResult, increase];
};
