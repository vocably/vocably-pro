import { getItem, setItem } from './asyncAppStorage';

const autoPlayStateKey = 'autoPlay';

export const getAutoPlayFromStorage = async (): Promise<boolean> => {
  const result = await getItem(autoPlayStateKey);
  if (result === undefined) {
    return false;
  }
  return result === 'true';
};

export const saveAutoPlayToStorage = async (value: boolean) => {
  return setItem(autoPlayStateKey, JSON.stringify(value));
};
