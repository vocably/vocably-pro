import React from 'react';
import { View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text } from 'react-native-paper';
import { DeckStack } from './DeckStack';
import { Auth } from '@aws-amplify/auth';

const Drawer = createDrawerNavigator();

function DrawerContent() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text onPress={() => Auth.signOut()}>Sign out</Text>
    </View>
  );
}

export const RootNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={() => <DrawerContent />}>
      <Drawer.Screen
        name="DeckStack"
        component={DeckStack}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};
