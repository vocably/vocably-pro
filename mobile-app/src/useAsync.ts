import { isError } from '@vocably/model';
import { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { Sentry } from './BetterSentry';

type AsyncSuccess<T> = {
  status: 'loaded';
  value: T;
};

type AsyncFailure = {
  status: 'failed';
  error: any;
};

type AsyncLoading = {
  status: 'loading';
};

export type AsyncResult<T> = AsyncSuccess<T> | AsyncFailure | AsyncLoading;

export const useAsync = <T>(
  load: () => Promise<T>,
  mutate?: (newValue: T) => Promise<any>
): [AsyncResult<T>, (newValue: T) => Promise<any>] => {
  const [result, setResult] = useState<AsyncResult<T>>({
    status: 'loading',
  });

  useEffect(() => {
    load()
      .then((value) => {
        if (isError(value)) {
          setResult({
            status: 'failed',
            error: value,
          });

          Sentry.captureException(
            new Error('Unable to perform async request in the component.'),
            {
              extra: value,
            }
          );

          return;
        }

        setResult({
          status: 'loaded',
          value,
        });
      })
      .catch((error) => {
        Sentry.captureException(error);

        setResult({
          status: 'failed',
          error,
        });
      });
  }, []);

  const update = useCallback(
    async (newValue: T) => {
      const lastResult = result;

      setResult({
        status: 'loaded',
        value: newValue,
      });

      if (!mutate) {
        return;
      }

      return mutate(newValue).catch((error) => {
        Alert.alert('Error', 'Unable to perform the operation.');
        console.error('Mutation failed', error);
        setResult(lastResult);
      });
    },
    [mutate, result, setResult]
  );

  return [result, update];
};
