import { DynamoDBClient, ScanCommand } from '@aws-sdk/client-dynamodb';
import { NotificationItem, Result, resultify } from '@vocably/model';
const ddb = new DynamoDBClient();

export const getNotificationItem = async (
  sub: string,
  language: string
): Promise<Result<NotificationItem | undefined>> => {
  const notificationResult = await resultify(
    ddb.send(
      new ScanCommand({
        TableName: process.env.NOTIFICATIONS_DYNAMO_TABLE,
        IndexName: 'SubIndex',
        FilterExpression: '#Sub = :sub',
        ExpressionAttributeNames: {
          '#Sub': 'Sub',
        },
        ExpressionAttributeValues: {
          ':sub': {
            S: sub,
          },
        },
      })
    ),
    {
      errorCode: 'GET_NOTIFICATION_TIME_ERROR',
      reason: 'Unable to get notification items from DynamoDB.',
    }
  );

  if (notificationResult.success === false) {
    return notificationResult;
  }

  if (!notificationResult.value.Items) {
    return {
      success: true,
      value: undefined,
    };
  }

  return {
    success: true,
    value: (notificationResult.value.Items as NotificationItem[]).find(
      (item) => item.Language.S === language
    ),
  };
};
