import { Auth } from '@aws-amplify/auth';
import { Notifications } from '@aws-amplify/notifications';
import { Result, resultify } from '@vocably/model';
import { debounce } from 'lodash-es';
import { getFlatAttributes } from './auth/getFlatAttributes';
import { Sentry } from './BetterSentry';

export const notificationsIdentifyUser = debounce(
  async (): Promise<Result<unknown>> => {
    const status = await Notifications.Push.getPermissionStatus();
    if (status !== 'GRANTED') {
      console.log("Notifications permission is not granted. Can't identify.");
      return {
        success: true,
        value: null,
      };
    }

    const userResult = await resultify(Auth.currentAuthenticatedUser(), {
      errorCode: 'AUTH_UNABLE_TO_GET_USER_SESSION',
      reason: 'Unable to get current user',
    });

    if (userResult.success === false) {
      console.log("User is not logged in. Can't identify.", userResult);
      return {
        success: true,
        value: null,
      };
    }

    const attributes = await getFlatAttributes(userResult.value);

    if (!attributes['sub'] || !attributes['email']) {
      console.error('Unable to get user sub and email', attributes);
      Sentry.captureMessage(
        'Unable to get user sub and email in notificationsIdentifyUser'
      );
      return {
        success: false,
        errorCode: 'AUTH_UNABLE_TO_GET_USER_ATTRIBUTES',
        reason: 'Unable to get user sub and email',
      };
    }

    const identifyUserResult = await resultify(
      Notifications.Push.identifyUser(attributes['sub'], {
        attributes: {
          email: [attributes['email']],
        },
      }),
      {
        errorCode: 'NOTIFICATIONS_UNABLE_TO_IDENTIFY_USER',
        reason: 'Unable to identify user',
      }
    );

    if (identifyUserResult.success === false) {
      Sentry.captureMessage('Unable to identify user', {
        extra: identifyUserResult,
      });
    }

    return identifyUserResult;
  },
  1000
);
