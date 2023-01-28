import { createStackNavigator } from '@react-navigation/stack';

import { DashboardScreen } from './DashboardScreen';
import { Header } from './Header';
import { EditDeckScreen } from './EditDeckScreen';
import { useContext } from 'react';
import { LanguagesContext } from './languages/LanguagesContainer';
import { getFullLanguageName } from '@vocably/model';
import { EditCardScreen } from './EditCardScreen';

const Stack = createStackNavigator();

export const DeckStack = () => {
  const { selectedLanguage } = useContext(LanguagesContext);
  const fullLanguage = getFullLanguageName(selectedLanguage);
  return (
    <Stack.Navigator
      screenOptions={{
        header: Header,
      }}
    >
      <Stack.Screen
        name="Dashboard"
        options={{ title: fullLanguage }}
        component={DashboardScreen}
      />
      <Stack.Screen
        name="EditDeck"
        options={{ title: `Edit ${fullLanguage}` }}
        component={EditDeckScreen}
      />
      <Stack.Screen
        name="EditCard"
        options={{ title: `Edit Card` }}
        component={EditCardScreen}
      />
    </Stack.Navigator>
  );
};
