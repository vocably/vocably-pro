import { GoogleLanguage, Result } from '@vocably/model';
import { listLanguages } from '@vocably/api';

let cache: {
  readonly timestamp: number;
  readonly list: GoogleLanguage[];
} = {
  timestamp: 0,
  list: [],
};

export const getUserLanguages = async (): Promise<Result<GoogleLanguage[]>> => {
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
    list: result.value as GoogleLanguage[],
  };

  return {
    success: true,
    value: cache.list,
  };
};

export const removeLanguage = (toBeRemoved: GoogleLanguage) => {
  cache = {
    ...cache,
    list: cache.list.filter((language) => language !== toBeRemoved),
  };
};

export const addLanguage = (toBeAdded: GoogleLanguage) => {
  cache = {
    ...cache,
    list: [
      ...cache.list.filter((language) => language !== toBeAdded),
      toBeAdded,
    ],
  };
};
