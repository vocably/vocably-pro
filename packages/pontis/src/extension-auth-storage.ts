import {
  Storage,
  setItems,
  removeItems,
  clearAll,
  getAll,
} from './extension-storage-operations';

let dataMemory = {};

export class ExtensionAuthStorage {
  private readonly storage: Storage;
  private syncPromise: null | Promise<void> = null;

  constructor(storage: Storage) {
    this.storage = storage;
  }

  async setItem(key: string, value: string) {
    await setItems(this.storage, { [key]: value });
    dataMemory[key] = value;
    return dataMemory[key];
  }

  getItem(key): string {
    return Object.prototype.hasOwnProperty.call(dataMemory, key)
      ? dataMemory[key]
      : undefined;
  }

  async removeItem(key: string) {
    await removeItems(this.storage, [key]);
    return delete dataMemory[key];
  }

  async clear() {
    await clearAll(this.storage);
    dataMemory = {};
    return dataMemory;
  }

  async getAll(): Promise<Record<string, string>> {
    return getAll(this.storage);
  }

  sync(): Promise<void> {
    if (this.syncPromise) {
      return this.syncPromise;
    }

    this.syncPromise = getAll(this.storage).then((data) => {
      dataMemory = data;
    });

    return this.syncPromise;
  }
}
