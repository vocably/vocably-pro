import { AnalyzePayload, isDirectAnalyzePayload } from '@vocably/model';
import { useCallback, useEffect, useRef, useState } from 'react';
import { getItem, setItem } from '../asyncAppStorage';

const HISTORY_KEY = 'lookUpHistory';
const HISTORY_LIMIT = 10;

export type History =
  | {
      status: 'loading';
    }
  | {
      status: 'loaded';
      history: AnalyzePayload[];
    };

export const getHistoryItemText = (item: AnalyzePayload) =>
  isDirectAnalyzePayload(item) ? item.source : item.target;

const normalize = (text: string) => text.trim().toLowerCase();

const isSimilar = (a: AnalyzePayload, b: AnalyzePayload) =>
  isDirectAnalyzePayload(a) === isDirectAnalyzePayload(b) &&
  a.sourceLanguage === b.sourceLanguage &&
  a.targetLanguage === b.targetLanguage &&
  normalize(getHistoryItemText(a)) === normalize(getHistoryItemText(b));

const loadHistory = async (): Promise<AnalyzePayload[]> => {
  try {
    const value = await getItem(HISTORY_KEY);
    const parsed = value ? JSON.parse(value) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const storeHistory = (history: AnalyzePayload[]) =>
  setItem(HISTORY_KEY, JSON.stringify(history));

/**
 * Most recent look ups come first.
 */
export const useHistory = () => {
  const [history, setHistory] = useState<History>({ status: 'loading' });
  const historyRef = useRef<Promise<AnalyzePayload[]> | null>(null);

  if (historyRef.current === null) {
    historyRef.current = loadHistory();
  }

  useEffect(() => {
    historyRef.current?.then((storedHistory) => {
      setHistory({ status: 'loaded', history: storedHistory });
    });
  }, []);

  // Updates are chained so that calls made before the history
  // is loaded (or in quick succession) are not lost.
  const update = useCallback(
    (fn: (history: AnalyzePayload[]) => AnalyzePayload[]) => {
      historyRef.current = (historyRef.current ?? loadHistory()).then(
        (current) => {
          const updated = fn(current);
          storeHistory(updated);
          setHistory({ status: 'loaded', history: updated });
          return updated;
        }
      );
    },
    []
  );

  const addHistoryItem = useCallback(
    (item: AnalyzePayload) =>
      update((current) =>
        [
          item,
          ...current.filter((existing) => !isSimilar(existing, item)),
        ].slice(0, HISTORY_LIMIT)
      ),
    [update]
  );

  const removeHistoryItem = useCallback(
    (item: AnalyzePayload) =>
      update((current) =>
        current.filter((existing) => !isSimilar(existing, item))
      ),
    [update]
  );

  return { history, addHistoryItem, removeHistoryItem };
};
