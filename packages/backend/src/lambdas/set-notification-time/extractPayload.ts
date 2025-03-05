import { Result, SetNotificationTimePayload } from '@vocably/model';
import { APIGatewayProxyEvent } from 'aws-lambda';
import { isValidTimeZone } from '../../utils/isValidTimezone';

const isValidTime = (time: string) => {
  return /^(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])$/.test(time);
};

export const extractPayload = (
  event: APIGatewayProxyEvent
): Result<SetNotificationTimePayload> => {
  try {
    const payload = JSON.parse(event.body ?? '{}');

    if (
      !isValidTimeZone(payload.IANATimezone) ||
      !isValidTime(payload.localTime) ||
      !payload.language
    ) {
      return {
        success: false,
        errorCode: 'SET_NOTIFICATION_TIME_ERROR',
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
      errorCode: 'SET_NOTIFICATION_TIME_ERROR',
      reason: 'Unable to parse payload.',
      extra: e,
    };
  }
};
