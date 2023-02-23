import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { AuthContainer } from './auth/AuthContainer';
import { Login } from './auth/Login';

import { configureApi } from '@vocably/api';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './RootNavigator';
import { LanguagesContainer } from './languages/LanguagesContainer';
import { DeckContainer } from './DeckContainer';
import { createStackNavigator } from '@react-navigation/stack';
import { StudyScreen } from './study/StudyScreen';

configureApi({
  baseUrl: 'https://api.dev.env.vocably.pro',
  region: 'eu-central-1',
  cardsBucket: 'vocably-dev-cards',
});

const RootStack = createStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <AuthContainer>
        <Login>
          <LanguagesContainer>
            <NavigationContainer>
              <RootStack.Navigator>
                <RootStack.Group screenOptions={{ headerShown: false }}>
                  <RootStack.Screen name="Deck" component={RootNavigator} />
                </RootStack.Group>
                <RootStack.Group
                  screenOptions={{
                    presentation: 'modal',
                    headerShown: false,
                  }}
                >
                  <RootStack.Screen name="Study" component={StudyScreen} />
                </RootStack.Group>
              </RootStack.Navigator>
            </NavigationContainer>
          </LanguagesContainer>
        </Login>
      </AuthContainer>
    </PaperProvider>
  );
};

export default App;
