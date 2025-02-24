import {
  PinpointClient,
  SendUsersMessagesCommand,
  SendUsersMessagesCommandInput,
} from '@aws-sdk/client-pinpoint';
import { CardItem, Result } from '@vocably/model';

const pinpointClient = new PinpointClient({});

export const sendPinpointMessage = async (
  sub: string,
  card: CardItem
): Promise<Result<any>> => {
  try {
    const commandInput: SendUsersMessagesCommandInput = {
      ApplicationId: process.env.MOBILE_APP_PINPOINT_PROJECT_ID,

      SendUsersMessageRequest: {
        Users: {
          [sub]: {},
        },
        MessageConfiguration: {
          DefaultPushNotificationMessage: {
            Title: `Time to learn`,
            Body: `${card.data.source}`,
          },
          APNSMessage: {
            Badge: 1,
          },
        },
      },
    };

    await pinpointClient.send(new SendUsersMessagesCommand(commandInput));
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
