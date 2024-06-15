import * as asyncAppStorage from '../asyncAppStorage';

const STORAGE_KEY_PREFIX = '@fcAuth:';

type AuthData = Record<string, string>;

let dataMemory: AuthData = {};

export class AuthStorage {
  private syncPromise: null | Promise<AuthData> = null;

  setItem(key: string, value: string) {
    asyncAppStorage.setItem(STORAGE_KEY_PREFIX + key, value).then();
    dataMemory[key] = value;
    return dataMemory[key];
  }

  getItem(key: string): string | undefined {
    return Object.prototype.hasOwnProperty.call(dataMemory, key)
      ? dataMemory[key]
      : undefined;
  }

  removeItem(key: string) {
    asyncAppStorage.removeItem(STORAGE_KEY_PREFIX + key).then();
    return delete dataMemory[key];
  }

  clear() {
    const storageKeys = Object.keys(dataMemory).map(
      (key) => STORAGE_KEY_PREFIX + key
    );
    asyncAppStorage.clear(storageKeys).then();
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
