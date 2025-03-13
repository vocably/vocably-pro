import { KeyValueStorageInterface } from '@aws-amplify/core';
import { debounce } from 'lodash-es';
import * as asyncAppStorage from '../asyncAppStorage';

type AuthCollection = Record<string, string>;

const storageKey = 'auth';

export class AuthStorage implements KeyValueStorageInterface {
  private collectionSynchronizedTimestamp: number = 0;
  private collection: AuthCollection = {};

  private getCollection = async (): Promise<AuthCollection> => {
    const currentTimestamp = Date.now();
    if (currentTimestamp - this.collectionSynchronizedTimestamp < 5_000) {
      return this.collection;
    }
    this.collection = JSON.parse(
      (await asyncAppStorage.getItem(storageKey)) ?? '{}'
    );
    this.collectionSynchronizedTimestamp = currentTimestamp;
    return this.collection;
  };

  private saveCollection = debounce(async (collection: AuthCollection) => {
    await asyncAppStorage.setItem(storageKey, JSON.stringify(collection));
    this.collection = collection;
    this.collectionSynchronizedTimestamp = Date.now();
  }, 1000);

  async setItem(key: string, value: string) {
    const collection = await this.getCollection();
    collection[key] = value;
    await this.saveCollection(collection);
  }

  async getItem(key: string) {
    const collection = await this.getCollection();
    return collection[key] ?? null;
  }

  async removeItem(key: string) {
    const collection = await this.getCollection();
    delete collection[key];
    await this.saveCollection(collection);
  }

  async clear() {
    await asyncAppStorage.removeItem(storageKey);
  }
}
