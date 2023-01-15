import { createStackNavigator } from '@react-navigation/stack';

import { Dashboard } from './Dashboard';
import { Header } from './Header';
import { EditDeck } from './EditDeck';
import { useContext } from 'react';
import { LanguagesContext } from './languages/LanguagesContainer';
import { getFullLanguageName } from '@vocably/model';

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
        component={EditDeck}
      />
    </Stack.Navigator>
  );
};
