import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Dashboard } from './Dashboard';
import { Header } from './Header';
import { LanguagesContext } from './languages/LanguagesContainer';

const Stack = createStackNavigator();

export const DeckStack = () => {
  const { languages } = useContext(LanguagesContext);
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
