import { AppState } from 'react-native';
import { concatMap, debounceTime, map, merge, Subject } from 'rxjs';
import * as asyncAppStorage from '../asyncAppStorage';

const storageKey = 'auth';

type AuthData = Record<string, string>;

let isSynced = false;
let dataMemory: AuthData = {};

const syncAuthStorage = async (): Promise<AuthData> => {
  const value = await asyncAppStorage.getItem(storageKey);
  dataMemory = value ? JSON.parse(value) : {};
  isSynced = true;
  return dataMemory;
};

let syncPromise: Promise<AuthData>;

const updateValues$ = new Subject<void>();
const syncAuthStorage$ = new Subject<void>();

merge(
  updateValues$.pipe(
    debounceTime(10),
    map(() => async () => {
      if (!isSynced) {
        return;
      }

      await asyncAppStorage.setItem(storageKey, JSON.stringify(dataMemory));
    })
  ),
  syncAuthStorage$.pipe(
    map(() => async () => {
      syncPromise = syncAuthStorage();
      await syncPromise;
    })
  )
)
  .pipe(concatMap((operation) => operation()))
  .subscribe();

AppState.addEventListener('change', (nextAppState) => {
  if (nextAppState === 'active') {
    syncAuthStorage$.next();
  }
});

syncAuthStorage$.next();

export class AuthStorage {
  setItem(key: string, value: string) {
    dataMemory[key] = value;
    updateValues$.next();
    return dataMemory[key];
  }

  getItem(key: string): string | undefined {
    return Object.prototype.hasOwnProperty.call(dataMemory, key)
      ? dataMemory[key]
      : undefined;
  }

  removeItem(key: string) {
    const result = delete dataMemory[key];
    updateValues$.next();
    return result;
  }

  clear() {
    dataMemory = {};
    updateValues$.next();
    return dataMemory;
  }

  sync(): Promise<AuthData> {
    return syncPromise;
  }
}
