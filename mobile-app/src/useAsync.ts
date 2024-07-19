import { useCallback, useEffect, useState } from 'react';

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

type AsyncResult<T> = AsyncSuccess<T> | AsyncFailure | AsyncLoading;

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
        setResult({
          status: 'loaded',
          value,
        });
      })
      .catch((error) => {
        setResult({
          status: 'failed',
          error,
        });
      });
  }, [load]);

  const update = useCallback(
    async (newValue: T) => {
      if (!mutate) {
        setResult({
          status: 'loaded',
          value: newValue,
        });

        return;
      }

      mutate(newValue)
        .then(() => {
          setResult({
            status: 'loaded',
            value: newValue,
          });
        })
        .catch((error) => {
          setResult({
            status: 'failed',
            error,
          });
        });
    },
    [mutate, result, setResult]
  );

  return [result, update];
};
