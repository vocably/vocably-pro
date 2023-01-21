import { createStackNavigator } from '@react-navigation/stack';

import { Dashboard } from './Dashboard';
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
      initialRouteName="Dashboard"
      screenOptions={{
        header: Header,
      }}
    >
      <Stack.Screen
        name="Dashboard"
        options={{ title: fullLanguage }}
        component={Dashboard}
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
