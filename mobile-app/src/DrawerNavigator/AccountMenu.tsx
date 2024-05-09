import { Auth } from '@aws-amplify/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FC, useCallback } from 'react';
import { Alert, View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import SharedGroupPreferences from 'react-native-shared-group-preferences';
import { APP_GROUP_ID, ASYNC_STORAGE_KEY } from '../ShareIntent/constants';

type AccountMenu = FC<{}>;

export const AccountMenu: AccountMenu = () => {
  const theme = useTheme();

  const handleSignOut = () => {
    return SharedGroupPreferences
      .setItem(ASYNC_STORAGE_KEY, null, APP_GROUP_ID)
      .then(() => AsyncStorage.clear())
      .then(() => Auth.signOut());
  }

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
            await handleSignOut();
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
        alignItems: 'flex-start',
        justifyContent: 'center',
      }}
    >
      <View
        style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}
      >
        <Text onPress={() => handleSignOut()}>Sign out</Text>
      </View>
      <View
        style={{
          width: '100%',
        }}
      >
        <Text style={{ color: theme.colors.error }} onPress={onDelete}>
          Delete your account
        </Text>
      </View>
    </View>
  );
};
