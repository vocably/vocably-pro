import { getItem, setItem } from './asyncAppStorage';
import { useAsync } from './useAsync';

const storageKey = 'last-used-tag-ids';

const getTagIds = async (): Promise<string[]> => {
  const itemString = await getItem(storageKey);
  if (itemString === undefined) {
    return [];
  }

  try {
    return JSON.parse(itemString);
  } catch (e) {
    return [];
  }
};

const setTagIds = async (tagIds: string[]) => {
  await setItem(storageKey, JSON.stringify(tagIds));
};

export const useLastUsedTagIds = () => {
  return useAsync(getTagIds, setTagIds);
};
