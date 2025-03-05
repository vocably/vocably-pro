import { Auth } from '@aws-amplify/auth';
import {
  Notifications,
  PushNotificationPermissionStatus,
} from '@aws-amplify/notifications';
import { languageList } from '@vocably/model';
import { trimLanguage } from '@vocably/sulna';
import { get } from 'lodash-es';
import { usePostHog } from 'posthog-react-native';
import { FC, useEffect, useState } from 'react';
import { Alert, Platform, ScrollView } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelectedDeck } from '../languageDeck/useSelectedDeck';
import { InlineLoader } from '../loaders/InlineLoader';
import { NotificationsAllowed } from './notifications/NotificationsAllowed';
import { NotificationsDenied } from './notifications/NotificationsDenied';

type Props = {};

export const NotificationsScreen: FC<Props> = () => {
  const insets = useSafeAreaInsets();
  const [notificationsStatus, setNotificationsStatus] = useState<
    PushNotificationPermissionStatus | 'LOADING'
  >('LOADING');

  const {
    deck: { language },
  } = useSelectedDeck({ autoReload: false });

  const languageString = trimLanguage(get(languageList, language, ''));

  const postHog = usePostHog();

  useEffect(() => {
    const intervalId = setInterval(async () => {
      const status = await Notifications.Push.getPermissionStatus();
      setNotificationsStatus(status);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    postHog.capture('notificationsScreenShow', {
      language,
    });
  }, []);

  const requestPermissions = async () => {
    const user = await Auth.currentAuthenticatedUser();

    Notifications.Push.requestPermissions({
      alert: true,
      badge: true,
      sound: true,
    })
      .then(async (enabled) => {
        if (!enabled) {
          Alert.alert(
            'Notifications failed',
            Platform.OS === 'android'
              ? "Notifications can't be set through the app. Please enable them in the App Info settings."
              : "Notifications can't be set through the app. Please enable them in Settings → Vocably."
          );
        }
        postHog.capture('notificationsOSRequested', {
          enabled,
          language,
        });
      })
      .catch((e) => {
        console.log('Notification Error', e);
        postHog.capture('notificationOSRequestError', {
          e,
          language,
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
        height: '100%',
        gap: 12,
      }}
    >
      {notificationsStatus === 'LOADING' && (
        <InlineLoader>Checking...</InlineLoader>
      )}
      {notificationsStatus === 'GRANTED' && (
        <NotificationsAllowed language={language} />
      )}
      {notificationsStatus === 'DENIED' && <NotificationsDenied />}
      {(notificationsStatus === 'SHOULD_EXPLAIN_THEN_REQUEST' ||
        notificationsStatus === 'SHOULD_REQUEST') && (
        <>
          <Text style={{ textAlign: 'center', paddingHorizontal: 38 }}>
            Practice notifications are sent once a day to remind you to review
            your {languageString} cards.
          </Text>
          <Button onPress={requestPermissions} mode="contained">
            Enable Notifications
          </Button>
        </>
      )}
    </ScrollView>
  );
};
