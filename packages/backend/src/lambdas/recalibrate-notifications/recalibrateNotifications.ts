import { Result } from '@vocably/model';
import { APIGatewayProxyEvent } from 'aws-lambda';
import { getAllNotificationItems } from '../../utils/getAllNotificationItems';
import { getUTCTime } from '../../utils/getUTCTime';
import { updateNotificationItem } from '../../utils/updateNotificationItem';
import { extractPayload } from './extractPayload';

export const recalibrateNotifications = async (
  event: APIGatewayProxyEvent
): Promise<Result<any>> => {
  const claims = event.requestContext?.authorizer?.claims ?? {};
  const sub: string = claims['sub'] ?? '';

  if (!sub) {
    return {
      success: false,
      errorCode: 'RECALIBRATE_NOTIFICATIONS_ERROR',
      reason: 'Unable to get user sub.',
    };
  }

  const payloadResult = extractPayload(event);

  if (payloadResult.success === false) {
    return payloadResult;
  }

  const notificationItemsResult = await getAllNotificationItems(sub);

  if (notificationItemsResult.success === false) {
    return notificationItemsResult;
  }

  const ttl = Math.floor(Date.now() / 1000) + 90 * 24 * 60 * 60;
  for (let notificationItem of notificationItemsResult.value) {
    const utcTime = getUTCTime(
      notificationItem.LocalTime.S,
      payloadResult.value.IANATimezone
    );

    const updateResult = await updateNotificationItem({
      id: notificationItem.ID.S,
      ttl,
      utcTime,
      ianaTimezone: payloadResult.value.IANATimezone,
      localTime: notificationItem.LocalTime.S,
    });

    if (updateResult.success === false) {
      console.error('Notification update error', updateResult);
    }
  }

  return {
    success: true,
    value: true,
  };
};
