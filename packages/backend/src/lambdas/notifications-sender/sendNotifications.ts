import { Result } from '@vocably/model';
import { getDeck } from './decks';
import { getBody } from './getBody';
import {
  getUtcTimestampInSeconds,
  roundNotificationDate,
} from './notificationDate';
import { getNotificationItems, updateSentTimestamp } from './notificationItems';
import { sendPinpointMessage } from './sendPinpointMessage';

export const sendNotifications = async (): Promise<Result<any>> => {
  const notificationDate = roundNotificationDate(new Date());

  const notificationItemsResult = await getNotificationItems();

  if (notificationItemsResult.success === false) {
    return notificationItemsResult;
  }

  for (let item of notificationItemsResult.value) {
    const sub = item.Sub.S;
    const cardsDeckResult = await getDeck(sub, item.Language.S);
    if (cardsDeckResult.success === false) {
      console.error('Get card deck error', cardsDeckResult);
      continue;
    }

    const sendMessageResult = await sendPinpointMessage(
      sub,
      getBody(cardsDeckResult.value)
    );

    if (sendMessageResult.success === false) {
      console.error(
        'Sending a message ended up with an error',
        sendMessageResult
      );
    }

    const updateItemResult = await updateSentTimestamp(
      item.ID.S,
      getUtcTimestampInSeconds(notificationDate)
    );
    if (updateItemResult.success === false) {
      console.error('Update notification item error', updateItemResult);
    }
  }

  return {
    success: true,
    value: null,
  };
};
