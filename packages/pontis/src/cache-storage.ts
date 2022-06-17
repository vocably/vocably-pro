import {
  getAll as cacheStorageGetAll,
  setAll as cacheStorageSetAll,
} from './cache-storage-operations';

export const setItem = async (key: string, value: string) => {
  const items = await cacheStorageGetAll();
  items[key] = value;
  return cacheStorageSetAll(items);
};

export const removeItem = async (key) => {
  const items = await cacheStorageGetAll();
  delete items[key];
  return cacheStorageSetAll(items);
};

export const clearAll = async () => {
  return cacheStorageSetAll({});
};

export const getAll = async (): Promise<Record<string, string>> => {
  return cacheStorageGetAll();
};
