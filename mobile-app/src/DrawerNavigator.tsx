import { createDrawerNavigator } from '@react-navigation/drawer';
import { View } from 'react-native';
import { Auth } from '@aws-amplify/auth';
import { TabsNavigator } from './TabsNavigator';
import { Text } from 'react-native-paper';

const Drawer = createDrawerNavigator();

function DrawerContent() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text onPress={() => Auth.signOut()}>Sign out</Text>
    </View>
  );
}

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={() => <DrawerContent />}>
      <Drawer.Screen
        name="TabsNavigator"
        component={TabsNavigator}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};
