import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useEffect, useState } from 'react';
import SharedGroupPreferences from 'react-native-shared-group-preferences';
import { APP_GROUP_ID, ASYNC_STORAGE_KEY } from './constants';

export const useSharedStorageSync = () => {
  const [storageStatus, setStorageStatus] = useState('loading');

  const handleStorageSynchronisation = useCallback(
    () =>
      SharedGroupPreferences.getItem(ASYNC_STORAGE_KEY, APP_GROUP_ID)
        .then((store) => JSON.parse(store))
        .then((store) => {
          store.length ? AsyncStorage.multiSet(store) : AsyncStorage.clear();
        })
        .then(() => setStorageStatus('loaded'))
        .catch(() => setStorageStatus('error')),
    []
  );

  useEffect(() => {
    handleStorageSynchronisation();
  }, [handleStorageSynchronisation]);

  return {
    status: storageStatus,
    sync: handleStorageSynchronisation,
  };
};
