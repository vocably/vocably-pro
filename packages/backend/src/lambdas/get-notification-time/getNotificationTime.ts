import { GetNotificationTimeResult, Result } from '@vocably/model';
import { APIGatewayProxyEvent } from 'aws-lambda';
import { getNotificationItem } from '../../utils/getNotificationItem';

export const getNotificationTime = async (
  event: APIGatewayProxyEvent
): Promise<Result<GetNotificationTimeResult>> => {
  const claims = event.requestContext?.authorizer?.claims ?? {};
  const sub: string = claims['sub'] ?? '';

  if (!sub) {
    return {
      success: false,
      errorCode: 'GET_NOTIFICATION_TIME_ERROR',
      reason: 'Unable to get user sub.',
    };
  }

  const language: string = event.queryStringParameters.language;

  if (!language) {
    return {
      success: false,
      errorCode: 'GET_NOTIFICATION_TIME_ERROR',
      reason: 'Unable to extract the language.',
    };
  }

  const itemResult = await getNotificationItem(sub, language);

  if (itemResult.success === false) {
    return itemResult;
  }

  if (!itemResult.value) {
    return {
      success: true,
      value: {
        exists: false,
        language,
      },
    };
  }

  return {
    success: true,
    value: {
      exists: true,
      language,
      time: itemResult.value.LocalTime.S,
    },
  };
};
