import { Result } from '@vocably/model';
import { APIGatewayProxyEvent } from 'aws-lambda';
import { getNotificationItem } from '../../utils/getNotificationItem';
import { getUTCTime } from '../../utils/getUTCTime';
import { updateNotificationItem } from '../../utils/updateNotificationItem';
import { createNotificationItem } from './createNotificationItem';
import { extractPayload } from './extractPayload';

export const setNotificationTime = async (
  event: APIGatewayProxyEvent
): Promise<Result<any>> => {
  const claims = event.requestContext?.authorizer?.claims ?? {};
  const sub: string = claims['sub'] ?? '';

  if (!sub) {
    return {
      success: false,
      errorCode: 'SET_NOTIFICATION_TIME_ERROR',
      reason: 'Unable to get user sub.',
    };
  }

  const payloadResult = extractPayload(event);

  if (payloadResult.success === false) {
    return payloadResult;
  }

  const itemResult = await getNotificationItem(
    sub,
    payloadResult.value.language
  );

  if (itemResult.success === false) {
    return itemResult;
  }

  const UTCTime = getUTCTime(
    payloadResult.value.localTime,
    payloadResult.value.IANATimezone
  );

  const ttl = Math.floor(Date.now() / 1000) + 90 * 24 * 60 * 60;

  if (!itemResult.value) {
    const result = await createNotificationItem({
      sub,
      language: payloadResult.value.language,
      localTime: payloadResult.value.localTime,
      ianaTimezone: payloadResult.value.IANATimezone,
      utcTime: UTCTime,
      ttl,
    });

    if (result.success === false) {
      return result;
    }
  } else {
    const result = await updateNotificationItem({
      id: itemResult.value.ID.S,
      localTime: payloadResult.value.localTime,
      ianaTimezone: payloadResult.value.IANATimezone,
      utcTime: UTCTime,
      ttl,
    });

    if (result.success === false) {
      return result;
    }
  }

  return {
    success: true,
    value: true,
  };
};
