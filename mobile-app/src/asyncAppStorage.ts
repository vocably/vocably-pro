import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
import SharedGroupPreferences from 'react-native-shared-group-preferences';

const appGroupStorageKey = 'app';
const appGroupId = 'group.vocably.app';

type AllGroupStorageValues = Record<string, string>;

const getAllGroupStorageValues = async (): Promise<AllGroupStorageValues> => {
  return SharedGroupPreferences.getItem(appGroupStorageKey, appGroupId)
    .then((values) => {
      return values ? JSON.parse(values) : {};
    })
    .catch((errorCode: 0 | 1) => {
      if (errorCode === 1) {
        return {};
      }
    });
};

export const getItem = async (key: string): Promise<string | undefined> => {
  if (Platform.OS === 'ios') {
    const groupStorageValues = await getAllGroupStorageValues();
    return groupStorageValues[key] ?? undefined;
  }

  return AsyncStorage.getItem(key).then((value) => value ?? undefined);
};

export const setItem = async (key: string, value: string): Promise<void> => {
  if (Platform.OS === 'ios') {
    const groupStorageValues = await getAllGroupStorageValues();
    groupStorageValues[key] = value;
    return SharedGroupPreferences.setItem(
      appGroupStorageKey,
      JSON.stringify(groupStorageValues),
      appGroupId
    );
  }

  return AsyncStorage.setItem(key, value);
};

export const removeItem = async (key: string): Promise<void> => {
  if (Platform.OS === 'ios') {
    const groupStorageValues = await getAllGroupStorageValues();
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
    const groupStorageValues = await getAllGroupStorageValues();
    keys.forEach((key) => delete groupStorageValues[key]);
    return SharedGroupPreferences.setItem(
      appGroupStorageKey,
      JSON.stringify(groupStorageValues),
      appGroupId
    );
  }

  return AsyncStorage.multiRemove(keys);
};
