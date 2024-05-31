import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { Platform } from 'react-native';
import SharedGroupPreferences from 'react-native-shared-group-preferences';
import { APP_GROUP_ID, ASYNC_STORAGE_KEY } from './constants';

export const useAsyncStorageSync = (...factors: any[]) => {
  useEffect(() => {
    if (Platform.OS !== 'ios') return;
    AsyncStorage.getAllKeys().then((keys) => {
      AsyncStorage.multiGet(keys).then((result) => {
        SharedGroupPreferences.setItem(ASYNC_STORAGE_KEY, result, APP_GROUP_ID);
      });
    });
  }, factors);
};
