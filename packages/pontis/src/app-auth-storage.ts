import { StorageHelper } from '@aws-amplify/core';
import { message } from './message';
import { Message } from './types';

export class AppAuthStorage {
  private localStorage = new StorageHelper().getStorage();
  private syncPromise: Promise<void> | null = null;
  private sendMessage: ReturnType<typeof message>;

  constructor(extensionId: string) {
    this.sendMessage = message(extensionId);
  }

  setItem(key: string, value: string) {
    this.localStorage.setItem(key, value);
    this.sendMessage(Message.setItem, { key, value }).catch(() => {});
  }

  getItem(key: string) {
    return this.localStorage.getItem(key);
  }

  removeItem(key: string) {
    this.localStorage.removeItem(key);
    this.sendMessage(Message.removeItem, { key }).catch(() => {});
  }

  clear() {
    this.localStorage.clear();
    this.sendMessage(Message.clear).catch(() => {});
  }

  sync() {
    if (this.syncPromise) {
      return this.syncPromise;
    }

    this.syncPromise = this.sendMessage<Record<string, string>>(Message.getAll)
      .then((data) => {
        Object.entries(data).forEach(([key, value]) => {
          this.localStorage.setItem(key, value);
        });
      })
      .catch(() => {});

    return this.syncPromise;
  }
}
