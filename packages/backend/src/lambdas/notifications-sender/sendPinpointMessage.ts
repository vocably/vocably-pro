import {
  PinpointClient,
  SendUsersMessagesCommand,
  SendUsersMessagesCommandInput,
} from '@aws-sdk/client-pinpoint';
import { Result } from '@vocably/model';
import { inspect } from '@vocably/node-sulna';
import { NotificationBody } from './getBody';

const pinpointClient = new PinpointClient({});

export const sendPinpointMessage = async (
  sub: string,
  body: NotificationBody
): Promise<Result<any>> => {
  try {
    const commandInput: SendUsersMessagesCommandInput = {
      ApplicationId: process.env.MOBILE_APP_PINPOINT_PROJECT_ID,

      SendUsersMessageRequest: {
        Users: {
          [sub]: {},
        },
        MessageConfiguration: {
          DefaultPushNotificationMessage: body,
          APNSMessage: {
            Badge: 1,
          },
        },
      },
    };

    const result = await pinpointClient.send(
      new SendUsersMessagesCommand(commandInput)
    );
    console.log('Pinpoint sent result', inspect(result));
    return {
      success: true,
      value: null,
    };
  } catch (error) {
    console.error('Error sending message:', error);
    return {
      success: false,
      errorCode: 'NOTIFICATIONS_PUSH_ERROR',
      reason: 'Error sending message push notification message.',
      extra: error,
    };
  }
};
