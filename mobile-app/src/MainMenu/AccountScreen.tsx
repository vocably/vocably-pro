import { Auth } from '@aws-amplify/auth';
import { FC, useCallback } from 'react';
import { Alert, View } from 'react-native';
import { Button, useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {};

export const AccountScreen: FC<Props> = () => {
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
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 16,
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Button
          style={{ width: '100%' }}
          mode="outlined"
          onPress={() => Auth.signOut()}
        >
          Sign out
        </Button>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Button textColor={theme.colors.error} onPress={onDelete}>
          Delete your account
        </Button>
      </View>
    </SafeAreaView>
  );
};
