import { configureApi } from '@vocably/api';
import { AuthContainer } from './auth/AuthContainer';
import { Login } from './auth/Login';
import { LanguagesContainer } from './languages/LanguagesContainer';
import { NavigationContainer } from './NavigationContainer';
import { ThemeProvider } from './ThemeProvider';
// @ts-ignore
import { API_BASE_URL, API_CARDS_BUCKET, API_REGION } from '@env';
import { UserMetadataContainer } from './UserMetadataContainer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SharedGroupPreferences from 'react-native-shared-group-preferences';
import { useEffect } from 'react';

configureApi({
  baseUrl: API_BASE_URL,
  region: API_REGION,
  cardsBucket: API_CARDS_BUCKET,
});

const App = () => {

  useEffect(() => {
    AsyncStorage.getAllKeys()
      .then(keys => {
        AsyncStorage
          .multiGet(keys)
          .then((result) => SharedGroupPreferences.setItem("store", result, 'group.pro.vocably.app'));
      })
  }, [])

  return (
    <ThemeProvider>
      <AuthContainer>
        <Login>
          <UserMetadataContainer>
            <LanguagesContainer>
              <NavigationContainer />
            </LanguagesContainer>
          </UserMetadataContainer>
        </Login>
      </AuthContainer>
    </ThemeProvider>
  );
};

export default App;
