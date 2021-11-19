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

  setItem(key: string, value: string) {
    setItems(this.storage, { [key]: value });
    dataMemory[key] = value;
    return dataMemory[key];
  }

  getItem(key): string {
    return Object.prototype.hasOwnProperty.call(dataMemory, key)
      ? dataMemory[key]
      : undefined;
  }

  removeItem(key: string) {
    removeItems(this.storage, [key]);
    return delete dataMemory[key];
  }

  clear() {
    clearAll(this.storage);
    dataMemory = {};
    return dataMemory;
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
