import { Result } from '@vocably/model';
import { APIGatewayProxyEvent } from 'aws-lambda';
import { putPushToken } from '../../utils/pushTokens';
import { extractPayload } from './extractPayload';

export const registerPushToken = async (
  event: APIGatewayProxyEvent
): Promise<Result<any>> => {
  const claims = event.requestContext?.authorizer?.claims ?? {};
  const sub: string = claims['sub'] ?? '';

  if (!sub) {
    return {
      success: false,
      errorCode: 'REGISTER_PUSH_TOKEN_ERROR',
      reason: 'Unable to get user sub.',
    };
  }

  const payloadResult = extractPayload(event);

  if (payloadResult.success === false) {
    return payloadResult;
  }

  const result = await putPushToken({
    sub,
    token: payloadResult.value.token,
    channelType: payloadResult.value.channelType,
  });

  if (result.success === false) {
    return result;
  }

  return {
    success: true,
    value: true,
  };
};
