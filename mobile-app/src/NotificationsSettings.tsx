import { Notifications } from '@aws-amplify/notifications';
import { usePostHog } from 'posthog-react-native';
import { FC, useEffect, useState } from 'react';
import { View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { InlineLoader } from './loaders/InlineLoader';

type Props = {};

export const NotificationsSettings: FC<Props> = () => {
  const theme = useTheme();
  const [notificationsStatus, setNotificationsStatus] = useState('UNDEFINED');

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
    <View style={{ borderColor: '#f00', borderWidth: 1 }}>
      <InlineLoader>Checking notifications status...</InlineLoader>
      <Text>Test</Text>
      {/*<Text>Notifications</Text>*/}
      {/*<Text>{notificationsStatus}</Text>*/}
      {/*<Button onPress={requestPermissions}>Request Permissions</Button>*/}
    </View>
  );
};
