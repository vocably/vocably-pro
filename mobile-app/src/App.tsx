import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { AuthContainer } from './auth/AuthContainer';
import { Login } from './auth/Login';

import { configureApi } from '@vocably/api';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './RootNavigator';
import { LanguagesContainer } from './languages/LanguagesContainer';

configureApi({
  baseUrl: 'https://api.dev.env.vocably.pro',
  region: 'eu-central-1',
  cardsBucket: 'vocably-dev-cards',
});

const App = () => {
  return (
    <PaperProvider>
      <AuthContainer>
        <Login>
          <LanguagesContainer>
            <NavigationContainer>
              <RootNavigator />
            </NavigationContainer>
          </LanguagesContainer>
        </Login>
      </AuthContainer>
    </PaperProvider>
  );
};

export default App;
