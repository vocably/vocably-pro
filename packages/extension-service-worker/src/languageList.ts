import { Language, Result } from '@vocably/model';
import { listLanguages } from '@vocably/api';

let cache: {
  readonly timestamp: number;
  readonly list: Language[];
} = {
  timestamp: 0,
  list: [],
};

export const getUserLanguages = async (): Promise<Result<Language[]>> => {
  const currentTimestamp = new Date().getTime();
  if (cache.timestamp > currentTimestamp) {
    return {
      success: true,
      value: cache.list,
    };
  }

  const result = await listLanguages().catch((error) => {
    console.error('List languages error', error);
    throw error;
  });

  if (result.success === false) {
    return result;
  }

  const hour = 60 * 60 * 1000;
  cache = {
    timestamp: currentTimestamp + hour,
    list: result.value as Language[],
  };

  return {
    success: true,
    value: cache.list,
  };
};

export const removeLanguage = (toBeRemoved: Language) => {
  cache = {
    ...cache,
    list: cache.list.filter((language) => language !== toBeRemoved),
  };
};

export const addLanguage = (toBeAdded: Language) => {
  cache = {
    ...cache,
    list: [
      ...cache.list.filter((language) => language !== toBeAdded),
      toBeAdded,
    ],
  };
};
