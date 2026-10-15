import { registerPushToken as apiRegisterPushToken } from '@vocably/api';
import { PushChannelType, Result } from '@vocably/model';
import { getPermissionStatus } from 'aws-amplify/push-notifications';
import { debounce } from 'lodash-es';
import { Platform } from 'react-native';
import { safeFetchAuthSession } from './auth/safeFunctions';
import { Sentry } from './BetterSentry';

let pushToken: string | undefined;

export const setPushToken = (token: string) => {
  pushToken = token;
};

// Matches the channel type Amplify uses for the same token.
const getChannelType = (): PushChannelType => {
  if (Platform.OS === 'android') {
    return 'GCM';
  }

  return __DEV__ ? 'APNS_SANDBOX' : 'APNS';
};

export const registerPushToken = debounce(
  async (): Promise<Result<unknown>> => {
    console.log('Registering push token');
    if (!pushToken) {
      console.log("Push token hasn't been received yet. Can't register.");
      return {
        success: true,
        value: null,
      };
    }

    const status = await getPermissionStatus();
    if (status !== 'granted') {
      console.log("Notifications permission is not granted. Can't register.");
      return {
        success: true,
        value: null,
      };
    }

    const session = await safeFetchAuthSession().catch(() => undefined);
    if (!session?.tokens || !session.userSub) {
      console.log("User is not logged in. Can't register.");
      return {
        success: true,
        value: null,
      };
    }

    const registerResult = await apiRegisterPushToken({
      token: pushToken,
      channelType: getChannelType(),
    });

    if (registerResult.success === false) {
      Sentry.captureMessage('Unable to register push token', {
        extra: registerResult,
      });
    }

    return registerResult;
  },
  1000
);
