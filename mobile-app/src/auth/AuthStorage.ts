import { AppState } from 'react-native';
import { debounceTime, Subject } from 'rxjs';
import * as asyncAppStorage from '../asyncAppStorage';

const storageKey = 'auth';

type AuthData = Record<string, string>;

let isSynced = false;
let dataMemory: AuthData = {};

const syncAuthStorage = async (): Promise<AuthData> => {
  return asyncAppStorage.getItem(storageKey).then((value) => {
    dataMemory = value ? JSON.parse(value) : {};
    return dataMemory;
  });
};

let syncPromise = syncAuthStorage().then((data) => {
  isSynced = true;
  return data;
});

AppState.addEventListener('change', (nextAppState) => {
  if (nextAppState === 'active') {
    syncPromise = syncAuthStorage();
  }
});

const dataMemory$ = new Subject<AuthData>();

dataMemory$.pipe(debounceTime(500)).subscribe((data) => {
  if (!isSynced) {
    return;
  }
  asyncAppStorage.setItem(storageKey, JSON.stringify(dataMemory));
});

export class AuthStorage {
  setItem(key: string, value: string) {
    dataMemory[key] = value;
    dataMemory$.next(dataMemory);
    return dataMemory[key];
  }

  getItem(key: string): string | undefined {
    return Object.prototype.hasOwnProperty.call(dataMemory, key)
      ? dataMemory[key]
      : undefined;
  }

  removeItem(key: string) {
    const result = delete dataMemory[key];
    dataMemory$.next(dataMemory);
    return result;
  }

  clear() {
    dataMemory = {};
    dataMemory$.next(dataMemory);
    return dataMemory;
  }

  sync(): Promise<AuthData> {
    return syncPromise;
  }
}
