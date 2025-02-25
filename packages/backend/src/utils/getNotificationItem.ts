import { NotificationItem, Result } from '@vocably/model';
import { getAllNotificationItems } from './getAllNotificationItems';

export const getNotificationItem = async (
  sub: string,
  language: string
): Promise<Result<NotificationItem | undefined>> => {
  const notificationResult = await getAllNotificationItems(sub);

  if (notificationResult.success === false) {
    return notificationResult;
  }

  return {
    success: true,
    value: notificationResult.value.find(
      (item) => item.Language.S === language
    ),
  };
};
