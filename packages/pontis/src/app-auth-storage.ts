import { StorageHelper } from '@aws-amplify/core';
import { removeItem, setItem, clear, getAll } from './extension-operations';
import {
  setItem as cacheStorageSetItem,
  getAll as cacheStorageGetAll,
  removeItem as cacheStorageRemoveItem,
  clearAll as cacheStorageClearAll,
} from './cache-storage';
import { message } from './message';
import { Message } from './types';

export class AppAuthStorage {
  private localStorage = new StorageHelper().getStorage();
  private syncPromise: Promise<void> | null = null;
  private sendMessage: ReturnType<typeof message>;

  constructor(private extensionId: string) {
    this.sendMessage = message(extensionId);
  }

  setItem(key: string, value: string) {
    this.localStorage.setItem(key, value);
    setItem(this.extensionId, { key, value }).catch(() => {});
    this.sendMessage(Message.setItem, { key, value }).catch(() => {});
    cacheStorageSetItem(key, value).catch(() => {});
  }

  getItem(key: string) {
    return this.localStorage.getItem(key);
  }

  removeItem(key: string) {
    this.localStorage.removeItem(key);
    removeItem(this.extensionId, key).catch(() => {});
    this.sendMessage(Message.removeItem, { key }).catch(() => {});
    cacheStorageRemoveItem(key).catch(() => {});
  }

  clear() {
    this.localStorage.clear();
    clear(this.extensionId).catch(() => {});
    this.sendMessage(Message.clear).catch(() => {});
    cacheStorageClearAll().catch(() => {});
  }

  sync() {
    if (this.syncPromise) {
      return this.syncPromise;
    }

    this.syncPromise = new Promise<void>((resolve) => {
      let isResolved = false;

      getAll(this.extensionId)
        .catch(() => {
          return cacheStorageGetAll();
        })
        .then((data) => {
          Object.entries(data).forEach(([key, value]) => {
            this.localStorage.setItem(key, value);
          });
          isResolved = true;
          resolve();
        })
        .catch(() => {
          isResolved = true;
          resolve();
        });

      setTimeout(() => {
        if (isResolved) {
          return;
        }

        this.sendMessage<Record<string, string>>(Message.getAll)
          .then((data) => {
            Object.entries(data).forEach(([key, value]) => {
              this.localStorage.setItem(key, value);
            });
            resolve();
          })
          .catch(() => {
            resolve();
          });
      }, 500);
    });

    return this.syncPromise;
  }
}
