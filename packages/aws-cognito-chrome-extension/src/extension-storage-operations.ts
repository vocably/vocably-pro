export type StorageType = 'sync' | 'local';
export type Storage = typeof chrome.storage.sync | typeof chrome.storage.local;

const keyPrefix = '@Auth_';

const createStorageKey = (key: string): string => `${keyPrefix}${key}`;

const isStorageKey = (key: string): boolean => key.startsWith(keyPrefix);

const getKey = (storageKey: string): string =>
  storageKey.replace(keyPrefix, '');

export const setItems = (storage: Storage, items: Record<string, string>) =>
  storage.set(
    Object.entries(items).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [createStorageKey(key)]: value,
      }),
      {}
    )
  );

export const removeItems = (storage: Storage, keys: string[]) =>
  storage.remove(keys.map(createStorageKey));

export const getAll = (storage: Storage) =>
  storage.get().then((data) =>
    Object.entries(data).reduce((acc, [storageKey, value]) => {
      if (!isStorageKey(storageKey)) {
        return acc;
      }

      return {
        ...acc,
        [getKey(storageKey)]: value,
      };
    }, {})
  );

export const clearAll = (storage: Storage) =>
  storage
    .get()
    .then((allData) =>
      storage.remove(Object.keys(allData).filter(isStorageKey))
    );
