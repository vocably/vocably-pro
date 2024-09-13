import { FC } from 'react';

import {
  NavigationContainer,
  Theme,
  useNavigation,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import { MD3Theme, useTheme } from 'react-native-paper';
import { AccountScreen } from './MainMenu/AccountScreen';
import { HowToGroupCardsScreen } from './MainMenu/HowToGroupCardsScreen';
import { MainMenu, MenuMainProps } from './MainMenu/MainMenu';
import { MainMenuHeader } from './MainMenu/MainMenuHeader';

const Stack = createStackNavigator();

const menuComponent =
  (mainMenuProps: MenuMainProps) => (navigationProps: any) =>
    <MainMenu {...mainMenuProps} {...navigationProps} />;

export const DrawerMenuStack: FC = () => {
  const navigation = useNavigation();
  const theme = useTheme() as Theme & MD3Theme;
  return (
    <View
      style={{
        flex: 1,
        overflow: 'hidden',
      }}
    >
      <NavigationContainer independent={true} theme={theme}>
        <Stack.Navigator>
          <Stack.Screen
            name="MainMenu"
            options={{
              headerShown: false,
            }}
            component={menuComponent({
              parentNavigator: navigation,
            })}
          />
          <Stack.Screen
            options={{
              header: MainMenuHeader,
              title: 'Your Account',
            }}
            name="AccountMenu"
            component={AccountScreen}
          />
          <Stack.Screen
            options={{
              header: MainMenuHeader,
              title: 'Grouping Cards',
            }}
            name="HowToGroupCards"
            component={HowToGroupCardsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};
