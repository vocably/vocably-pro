import { Auth } from '@aws-amplify/auth';
import { FC, useCallback } from 'react';
import { Alert, View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';

type AccountMenu = FC<{}>;

export const AccountMenu: AccountMenu = () => {
  const theme = useTheme();
  const onDelete = useCallback(() => {
    Alert.alert(
      'Account Deletion',
      'Are you sure you want to delete your account? This operation cannot be undone.',
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
        alignItems: 'flex-start',
        justifyContent: 'center',
      }}
    >
      <View
        style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}
      >
        <Text onPress={() => Auth.signOut()}>Sign out</Text>
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
