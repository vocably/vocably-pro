import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
import * as iosGroupStorage from './asyncAppStorage/iosGroupStorage';

export const getItem = async (key: string): Promise<string | undefined> => {
  if (Platform.OS === 'ios') {
    return iosGroupStorage.getItem(key);
  }

  return AsyncStorage.getItem(key).then((value) => value ?? undefined);
};

export const setItem = async (key: string, value: string): Promise<void> => {
  if (Platform.OS === 'ios') {
    return iosGroupStorage.setItem(key, value);
  }

  return AsyncStorage.setItem(key, value);
};

export const removeItem = async (key: string): Promise<void> => {
  if (Platform.OS === 'ios') {
    return iosGroupStorage.removeItem(key);
  }

  return AsyncStorage.removeItem(key);
};

export const clear = async (keys: string[]): Promise<void> => {
  if (Platform.OS === 'ios') {
    return iosGroupStorage.clear(keys);
  }

  return AsyncStorage.multiRemove(keys);
};

export const clearAll = async (): Promise<void> => {
  if (Platform.OS === 'ios') {
    return iosGroupStorage.clearAll();
  }

  const allKeys = (await AsyncStorage.getAllKeys()).filter(
    (key) => key !== 'auth'
  );
  await AsyncStorage.multiRemove(allKeys);
};
