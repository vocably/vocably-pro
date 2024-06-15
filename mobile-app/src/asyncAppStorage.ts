import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
import SharedGroupPreferences from 'react-native-shared-group-preferences';
import { firstValueFrom, ReplaySubject } from 'rxjs';

const appGroupStorageKey = 'app';
const appGroupId = 'group.vocably.app';

const groupStorageValues$ = new ReplaySubject<Record<string, any>>();

if (Platform.OS === 'ios') {
  SharedGroupPreferences.getItem(appGroupStorageKey, appGroupId)
    .then((values) => {
      groupStorageValues$.next(values ? JSON.parse(values) : {});
    })
    .catch((errorCode: 0 | 1) => {
      if (errorCode === 1) {
        groupStorageValues$.next({});
      }
    });
}

export const getItem = async (key: string): Promise<string | undefined> => {
  if (Platform.OS === 'ios') {
    const groupStorageValues = await firstValueFrom(groupStorageValues$);
    return groupStorageValues[key] ?? undefined;
  }

  return AsyncStorage.getItem(key).then((value) => value ?? undefined);
};

export const setItem = async (key: string, value: string): Promise<void> => {
  if (Platform.OS === 'ios') {
    const groupStorageValues = await firstValueFrom(groupStorageValues$);
    groupStorageValues[key] = value;
    return SharedGroupPreferences.setItem(
      appGroupStorageKey,
      JSON.stringify(groupStorageValues),
      appGroupId
    );
  }

  return AsyncStorage.setItem(key, value);
};

export const getAllKeys = async (): Promise<readonly string[]> => {
  if (Platform.OS === 'ios') {
    const groupStorageValues = await firstValueFrom(groupStorageValues$);
    return Object.keys(groupStorageValues);
  }

  return AsyncStorage.getAllKeys();
};

export const removeItem = async (key: string): Promise<void> => {
  if (Platform.OS === 'ios') {
    const groupStorageValues = await firstValueFrom(groupStorageValues$);
    delete groupStorageValues[key];
    return SharedGroupPreferences.setItem(
      appGroupStorageKey,
      JSON.stringify(groupStorageValues),
      appGroupId
    );
  }

  return AsyncStorage.removeItem(key);
};

export const clear = async (keys: string[]): Promise<void> => {
  if (Platform.OS === 'ios') {
    const groupStorageValues = await firstValueFrom(groupStorageValues$);
    keys.forEach((key) => delete groupStorageValues[key]);
    return SharedGroupPreferences.setItem(
      appGroupStorageKey,
      JSON.stringify(groupStorageValues),
      appGroupId
    );
  }

  return AsyncStorage.multiRemove(keys);
};

export const getMulti = (
  keys: readonly string[]
): Promise<Record<string, any>> => {
  return Promise.all(keys.map((key) => getItem(key))).then((values) =>
    values.reduce((acc, value, index) => {
      acc[keys[index]] = value;
      return acc;
    }, {} as Record<string, any>)
  );
};
