import React, { useContext } from 'react';
import { View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text } from 'react-native-paper';
import { DeckStack } from './DeckStack';
import { Auth } from '@aws-amplify/auth';
import { LanguagesContext } from './languages/LanguagesContainer';
import { WelcomeStack } from './WelcomeStack';

const Drawer = createDrawerNavigator();

function DrawerContent() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text onPress={() => Auth.signOut()}>Sign out</Text>
    </View>
  );
}

export const RootNavigator = () => {
  const { selectedLanguage } = useContext(LanguagesContext);
  return (
    <Drawer.Navigator drawerContent={() => <DrawerContent />}>
      <Drawer.Screen
        name="DeckStack"
        component={selectedLanguage === '' ? WelcomeStack : DeckStack}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};
