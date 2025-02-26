import {
  getNotificationTime as getNotificationTimeApi,
  setNotificationTime as setNotificationTimeApi,
} from '@vocably/api';
import { GetNotificationTimeResult, languageList } from '@vocably/model';
import { trimLanguage } from '@vocably/sulna';
import { get } from 'lodash-es';
import { FC } from 'react';
import { View } from 'react-native';
import { getTimeZone } from 'react-native-localize';
import { Switch, Text } from 'react-native-paper';
import { InlineLoader } from '../../loaders/InlineLoader';
import { useAsync } from '../../useAsync';
import { TimePicker } from './TimePicker';

type Props = {
  language: string;
};

const getNotificationTime = (language: string) => async () => {
  const result = await getNotificationTimeApi(language);
  if (result.success === true) {
    return result.value;
  }

  throw new Error(`Unable to get notification time for ${language}`);
};

const setNotificationTime =
  (language: string) => async (payload: GetNotificationTimeResult) => {
    if (payload.exists === true) {
      const result = await setNotificationTimeApi({
        localTime: payload.time,
        language,
        IANATimezone: getTimeZone(),
      });

      if (result.success === false) {
        throw new Error(`Unable to set notification time for ${language}`);
      }
    }
  };

export const NotificationsAllowed: FC<Props> = ({ language }) => {
  const [loadNotificationsResult, mutateNotifications] = useAsync(
    getNotificationTime(language),
    setNotificationTime(language)
  );

  const languageString = trimLanguage(get(languageList, language, ''));

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
      }}
    >
      {loadNotificationsResult.status === 'loading' && (
        <InlineLoader>Loading preset...</InlineLoader>
      )}
      {loadNotificationsResult.status === 'failed' && (
        <>
          <Text>I'm very sorry.</Text>
          <Text>The system can't load the notifications status.</Text>
          <Text>I have already been informed about it.</Text>
          <Text>Please try again later.</Text>
        </>
      )}
      {loadNotificationsResult.status === 'loaded' && (
        <>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              gap: 12,
            }}
          >
            <Text style={{ textAlign: 'center', paddingHorizontal: 38 }}>
              Practice notifications are sent once a day to remind you to review
              your {languageString} cards.
            </Text>
            <View
              style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}
            >
              <Switch value={loadNotificationsResult.value.exists} />
              <Text>Enabled for {languageString}</Text>
            </View>
            <TimePicker
              disabled={!loadNotificationsResult.value.exists}
              time={
                (loadNotificationsResult.value.exists &&
                  loadNotificationsResult.value.time) ||
                '17:00'
              }
              onChange={(time) => {
                mutateNotifications({
                  language: loadNotificationsResult.value.language,
                  time,
                  exists: true,
                });
              }}
            />
          </View>
        </>
      )}
    </View>
  );
};
