import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useContext } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DeckStack } from './DeckStack';
import { LanguagesContext } from './languages/LanguagesContainer';
import { LookUpScreen } from './LookUpScreen';
import { WelcomeStack } from './WelcomeStack';

const Tabs = createMaterialBottomTabNavigator();

export const TabsNavigator = () => {
  const { selectedLanguage } = useContext(LanguagesContext);
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="DeckScreen"
        options={{
          title: 'Cards',
          tabBarIcon: ({ color }) => (
            <Icon name="card-multiple-outline" color={color} size={24} />
          ),
        }}
        component={selectedLanguage === '' ? WelcomeStack : DeckStack}
      />
      <Tabs.Screen
        name="LookUp"
        component={LookUpScreen}
        options={{
          title: 'Look up',
          tabBarIcon: ({ color }) => (
            <Icon name="translate" color={color} size={24} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};
