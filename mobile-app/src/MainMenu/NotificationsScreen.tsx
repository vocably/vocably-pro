import { Auth } from '@aws-amplify/auth';
import { Notifications } from '@aws-amplify/notifications';
import { usePostHog } from 'posthog-react-native';
import { FC, useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { Button, Text, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {};

export const NotificationsScreen: FC<Props> = () => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const [notificationsStatus, setNotificationsStatus] = useState('');

  useEffect(() => {
    const intervalId = setInterval(async () => {
      const status = await Notifications.Push.getPermissionStatus();
      setNotificationsStatus(status);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const postHog = usePostHog();

  const requestPermissions = async () => {
    const user = await Auth.currentAuthenticatedUser();

    Notifications.Push.requestPermissions({
      alert: true,
      badge: true,
      sound: true,
    })
      .then(async (data) => {
        postHog.capture('notification-requested', {
          data,
        });
      })
      .catch((e) => {
        console.log('Notification Error', e);
        postHog.capture('notification-request-error', {
          e,
        });
      });
  };

  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <Text>Notifications</Text>
      <Text>{notificationsStatus}</Text>
      <Button onPress={requestPermissions}>Request Permissions</Button>
    </ScrollView>
  );
};
