import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerMenuStack } from './DrawerMenuStack';
import { TabsNavigator } from './TabsNavigator';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={() => <DrawerMenuStack />}>
      <Drawer.Screen
        name="TabsNavigator"
        component={TabsNavigator}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};
