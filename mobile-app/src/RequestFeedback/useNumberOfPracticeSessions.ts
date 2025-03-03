import * as asyncAppStorage from '../asyncAppStorage';
import { AsyncResult, useAsync } from '../useAsync';

const numberOfRepetitionsKey = 'numberOfRepetitions';

const retrieveNumberOfPracticeSessions = (): Promise<number> =>
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

const storeNumberOfPracticeSessions = (numberOfRepetitions: number) =>
  asyncAppStorage.setItem(
    numberOfRepetitionsKey,
    numberOfRepetitions.toString()
  );

export const useNumberOfPracticeSessions = (): [
  AsyncResult<number>,
  () => Promise<any>
] => {
  const [numberOfPracticeSessions, mutateNumberOfPracticeSessions] = useAsync(
    retrieveNumberOfPracticeSessions,
    storeNumberOfPracticeSessions
  );

  const increase = async () => {
    if (numberOfPracticeSessions.status === 'loaded') {
      await mutateNumberOfPracticeSessions(numberOfPracticeSessions.value + 1);
    }
  };

  return [numberOfPracticeSessions, increase];
};
