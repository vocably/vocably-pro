import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Dashboard } from './Dashboard';
import { Header } from './Header';

const Stack = createStackNavigator();

export const DeckStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        header: Header,
      }}
    >
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};
