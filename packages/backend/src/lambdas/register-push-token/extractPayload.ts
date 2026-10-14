import {
  PushChannelType,
  RegisterPushTokenPayload,
  Result,
} from '@vocably/model';
import { APIGatewayProxyEvent } from 'aws-lambda';

const channelTypes: PushChannelType[] = ['APNS', 'APNS_SANDBOX', 'GCM'];

export const extractPayload = (
  event: APIGatewayProxyEvent
): Result<RegisterPushTokenPayload> => {
  try {
    const payload = JSON.parse(event.body ?? '{}');

    if (
      typeof payload.token !== 'string' ||
      payload.token.length === 0 ||
      payload.token.length > 4096 ||
      !channelTypes.includes(payload.channelType)
    ) {
      return {
        success: false,
        errorCode: 'REGISTER_PUSH_TOKEN_ERROR',
        reason: 'The payload is invalid.',
        extra: payload,
      };
    }

    return {
      success: true,
      value: {
        token: payload.token,
        channelType: payload.channelType,
      },
    };
  } catch (e) {
    return {
      success: false,
      errorCode: 'REGISTER_PUSH_TOKEN_ERROR',
      reason: 'Unable to parse payload.',
      extra: e,
    };
  }
};
