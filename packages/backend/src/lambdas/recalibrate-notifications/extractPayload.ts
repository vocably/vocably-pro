import { RecalibrateNotificationsPayload, Result } from '@vocably/model';
import { APIGatewayProxyEvent } from 'aws-lambda';
import { isValidTimeZone } from '../../utils/isValidTimezone';

export const extractPayload = (
  event: APIGatewayProxyEvent
): Result<RecalibrateNotificationsPayload> => {
  try {
    const payload = JSON.parse(event.body ?? '{}');

    if (!isValidTimeZone(payload.IANATimezone)) {
      return {
        success: false,
        errorCode: 'RECALIBRATE_NOTIFICATIONS_ERROR',
        reason: 'The payload is invalid.',
        extra: payload,
      };
    }

    return {
      success: true,
      value: payload,
    };
  } catch (e) {
    return {
      success: false,
      errorCode: 'RECALIBRATE_NOTIFICATIONS_ERROR',
      reason: 'Unable to parse payload.',
      extra: e,
    };
  }
};
