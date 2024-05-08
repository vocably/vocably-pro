import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";
import SharedGroupPreferences from "react-native-shared-group-preferences";

export const useSharedStorageSync = () => {
    const [storageStatus, setStorageStatus] = useState('loading');
  
    const handleStorageSynchronisation = useCallback(
      () =>
        SharedGroupPreferences.getItem('store', 'group.pro.vocably.app')
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