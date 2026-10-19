import { useCallback, useEffect, useRef, useState } from 'react';
import { getItem, setItem } from '../asyncAppStorage';

const LOOK_UP_COUNT_KEY = 'lookUpCount';

const getLookUpCount = () =>
  getItem(LOOK_UP_COUNT_KEY).then((value) => parseInt(value ?? '0', 10) || 0);

const storeLookUpCount = (count: number) =>
  setItem(LOOK_UP_COUNT_KEY, count.toString());

/**
 * `count` is undefined until the stored value is loaded.
 */
export const useLookUpCount = () => {
  const [count, setCount] = useState<number>();
  const countRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    getLookUpCount().then((storedCount) => {
      countRef.current = storedCount;
      setCount(storedCount);
    });
  }, []);

  const increment = useCallback(() => {
    countRef.current = (countRef.current ?? 0) + 1;
    setCount(countRef.current);
    storeLookUpCount(countRef.current);
  }, []);

  return { count, increment };
};
