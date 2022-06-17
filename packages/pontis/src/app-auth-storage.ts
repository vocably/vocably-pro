import { StorageHelper } from '@aws-amplify/core';
import { removeItem, setItem, clear, getAll } from './extension-operations';

export class AppAuthStorage {
  private localStorage = new StorageHelper().getStorage();
  private syncPromise: Promise<void> | null = null;

  constructor(private extensionId: string) {}

  setItem(key: string, value: string) {
    this.localStorage.setItem(key, value);
    setItem(this.extensionId, { key, value }).catch(() => {});
  }

  getItem(key: string) {
    return this.localStorage.getItem(key);
  }

  removeItem(key: string) {
    this.localStorage.removeItem(key);
    removeItem(this.extensionId, key).catch(() => {});
  }

  clear() {
    this.localStorage.clear();
    clear(this.extensionId).catch(() => {});
  }

  sync() {
    if (this.syncPromise) {
      return this.syncPromise;
    }

    this.syncPromise = getAll(this.extensionId)
      .then((data) => {
        Object.entries(data).forEach(([key, value]) => {
          this.localStorage.setItem(key, value);
        });
      })
      .catch(() => {});

    return this.syncPromise;
  }
}
