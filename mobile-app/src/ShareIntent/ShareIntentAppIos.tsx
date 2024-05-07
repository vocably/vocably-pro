import { API_BASE_URL, API_CARDS_BUCKET, API_REGION } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { configureApi } from '@vocably/api';
import { PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { useTheme } from 'react-native-paper';
import SharedGroupPreferences from 'react-native-shared-group-preferences';
import { AuthContainer } from '../auth/AuthContainer';
import { Login } from '../auth/Login';
import { Error } from '../Error';
import { LanguagesContainer } from '../languages/LanguagesContainer';
import { LanguageSelectorModal } from '../LanguageSelectorModal';
import { Loader } from '../loaders/Loader';
import { LookUpScreen } from '../LookUpScreen';
import { ThemeProvider } from '../ThemeProvider';

configureApi({
  baseUrl: API_BASE_URL,
  region: API_REGION,
  cardsBucket: API_CARDS_BUCKET,
});

const Stack = createStackNavigator();

const useSharedStorageSync = () => {
  const [storageStatus, setStorageStatus] = useState('loading');

  const handleStorageSynchronisation = useCallback(
    () =>
      SharedGroupPreferences.getItem('store', 'group.pro.vocably.app')
        .then((store) => JSON.parse(store))
        .then((store) => {
          store.length ? AsyncStorage.multiSet(store) : AsyncStorage.clear()
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
    sync: handleStorageSynchronisation
  }
}

const StorageProvider = (props: PropsWithChildren) => {
  const sharedStorage = useSharedStorageSync();

  if (sharedStorage.status === 'error') {
    return (
      <Error onRetry={sharedStorage.sync}>
        Oops! Something went wrong.
      </Error>
    );
  } else if (sharedStorage.status === 'loading') {
    return <Loader>Synchronizing...</Loader>;
  } else {
    return props.children;
  }
};

const ShareIntentApp = () => {
  return (
    <StorageProvider>
    <ThemeProvider>
      <AuthContainer>
        <Login>
          <LanguagesContainer>
            <NavigationContainer theme={useTheme()}>
              <Stack.Navigator>
                <Stack.Screen
                  name="Main"
                  component={LookUpScreen}
                  options={{
                    headerShown: false,
                    presentation: 'card',
                  }}
                />
                <Stack.Screen
                  name="LanguageSelector"
                  component={LanguageSelectorModal}
                  options={{
                    headerShown: false,
                    presentation: 'transparentModal',
                  }}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </LanguagesContainer>
        </Login>
      </AuthContainer>
    </ThemeProvider>
    </StorageProvider>

  );
};

export default ShareIntentApp;
