import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import SharedGroupPreferences from 'react-native-shared-group-preferences';
import { mobilePlatform } from '../mobilePlatform';
import { Platform } from 'react-native';

export const useAsyncStorageSync = (factor: any) => {
  useEffect(() => {
    if (Platform.OS !== 'ios') return;
    AsyncStorage.getAllKeys().then((keys) => {
      AsyncStorage.multiGet(keys).then((result) => {
        SharedGroupPreferences.setItem(
          'store',
          result,
          'group.pro.vocably.app'
        );
      });
    });
  }, [factor]);
};
