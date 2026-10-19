import { mmkvStorage } from './mmkvStorage';

export const getItem = async (key: string): Promise<string | undefined> => {
  return mmkvStorage.getString(key);
};

export const setItem = async (key: string, value: string): Promise<void> => {
  mmkvStorage.set(key, value);
};

export const removeItem = async (key: string): Promise<void> => {
  mmkvStorage.remove(key);
};

export const clear = async (keys: string[]): Promise<void> => {
  for (const key of keys.filter((key) => key !== 'mmkvMigrated')) {
    mmkvStorage.remove(key);
  }
};

export const clearAll = async (): Promise<void> => {
  const allKeys = mmkvStorage.getAllKeys();
  await clear(allKeys);
};

export const getAll = async (): Promise<Record<string, string>> => {
  const allKeys = mmkvStorage.getAllKeys();
  let allValues: Record<string, string> = {};
  for (const key of allKeys) {
    const value = mmkvStorage.getString(key);
    if (value !== undefined) {
      allValues[key] = value;
    }
  }
  return allValues;
};
