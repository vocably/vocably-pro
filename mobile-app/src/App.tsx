import React from 'react';
import { Provider as PaperProvider, Text } from 'react-native-paper';
import { AuthContainer } from './auth/AuthContainer';
import { Login } from './auth/Login';

import { configureApi } from '@vocably/api';
import { NavigationContainer } from '@react-navigation/native';
import { LanguagesContainer } from './languages/LanguagesContainer';
import { DeckContainer } from './DeckContainer';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View } from 'react-native';
import { Auth } from '@aws-amplify/auth';
import { TabsNavigator } from './TabsNavigator';
import { RootModalStack } from './RootModalStack';

configureApi({
  baseUrl: 'https://api.dev.env.vocably.pro',
  region: 'eu-central-1',
  cardsBucket: 'vocably-dev-cards',
});

const Drawer = createDrawerNavigator();

function DrawerContent() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text onPress={() => Auth.signOut()}>Sign out</Text>
    </View>
  );
}

const App = () => {
  return (
    <PaperProvider>
      <AuthContainer>
        <Login>
          <LanguagesContainer>
            <DeckContainer>
              <NavigationContainer>
                <Drawer.Navigator drawerContent={() => <DrawerContent />}>
                  <Drawer.Screen
                    name="RootModalStack"
                    component={RootModalStack}
                    options={{ headerShown: false }}
                  />
                </Drawer.Navigator>
              </NavigationContainer>
            </DeckContainer>
          </LanguagesContainer>
        </Login>
      </AuthContainer>
    </PaperProvider>
  );
};

export default App;
