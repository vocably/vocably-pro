import { Auth } from '@aws-amplify/auth';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useCallback } from 'react';
import { Alert, View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { TabsNavigator } from './TabsNavigator';

const Drawer = createDrawerNavigator();

function DrawerContent() {
  const theme = useTheme();

  const onDelete = useCallback(() => {
    Alert.alert(
      'Account Deletion',
      'Are you sure you want to delete your account? This operation can not be undone.',
      [
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            await Auth.deleteUser();
            await Auth.signOut();
          },
        },
        {
          text: 'Cancel',
        },
      ]
    );
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.background,
      }}
    >
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text onPress={() => Auth.signOut()}>Sign out</Text>
      </View>
      <View
        style={{
          paddingBottom: 64,
          width: '100%',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: theme.colors.error }} onPress={onDelete}>
          Delete your account
        </Text>
      </View>
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
