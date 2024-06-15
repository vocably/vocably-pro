import * as asyncAppStorage from '../asyncAppStorage';

const STORAGE_KEY_PREFIX = '@fcAuth:';

type AuthData = Record<string, string>;

let dataMemory: AuthData = {};

export class AuthStorage {
  private syncPromise: null | Promise<AuthData> = null;

  async setItem(key: string, value: string) {
    await asyncAppStorage.setItem(STORAGE_KEY_PREFIX + key, value);
    dataMemory[key] = value;
    return dataMemory[key];
  }

  getItem(key: string): string | undefined {
    return Object.prototype.hasOwnProperty.call(dataMemory, key)
      ? dataMemory[key]
      : undefined;
  }

  async removeItem(key: string) {
    await asyncAppStorage.removeItem(STORAGE_KEY_PREFIX + key);
    return delete dataMemory[key];
  }

  async clear() {
    const storageKeys = Object.keys(dataMemory).map(
      (key) => STORAGE_KEY_PREFIX + key
    );
    await asyncAppStorage.clear(storageKeys);
    dataMemory = {};
    return dataMemory;
  }

  sync(): Promise<AuthData> {
    if (this.syncPromise) {
      return this.syncPromise;
    }

    this.syncPromise = asyncAppStorage
      .getAllKeys()
      .then((allKeys) =>
        allKeys.filter((key) => key.startsWith(STORAGE_KEY_PREFIX))
      )
      .then((authKeys) => asyncAppStorage.getMulti(authKeys))
      .then((authStorageData) => {
        dataMemory = Object.fromEntries(
          Object.entries(authStorageData).map(([key, value]) => [
            key.replace(STORAGE_KEY_PREFIX, ''),
            value,
          ])
        );

        return dataMemory;
      });

    return this.syncPromise;
  }
}
