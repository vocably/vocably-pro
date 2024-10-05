import { createDrawerNavigator } from '@react-navigation/drawer';
import { MainMenuNavigationStack } from './MainMenu/MainMenuNavigationStack';
import { TabsNavigator } from './TabsNavigator';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={() => <MainMenuNavigationStack />}
      screenOptions={{
        swipeEdgeWidth: 0,
      }}
    >
      <Drawer.Screen
        name="TabsNavigator"
        component={TabsNavigator}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};
