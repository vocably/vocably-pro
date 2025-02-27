import { Result } from '@vocably/model';
import { APIGatewayProxyEvent } from 'aws-lambda';
import { getNotificationItem } from '../../utils/getNotificationItem';
import { deleteNotificationItem } from './deleteNotificationItem';

export const deleteNotificationTime = async (
  event: APIGatewayProxyEvent
): Promise<Result<any>> => {
  const claims = event.requestContext?.authorizer?.claims ?? {};
  const sub: string = claims['sub'] ?? '';

  if (!sub) {
    return {
      success: false,
      errorCode: 'DELETE_NOTIFICATION_TIME_ERROR',
      reason: 'Unable to get user sub.',
    };
  }

  const language: string = event.queryStringParameters.language;

  if (!language) {
    return {
      success: false,
      errorCode: 'DELETE_NOTIFICATION_TIME_ERROR',
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
      value: true,
    };
  }

  return deleteNotificationItem(itemResult.value.ID.S);
};
