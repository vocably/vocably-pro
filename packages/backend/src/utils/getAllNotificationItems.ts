import { DynamoDBClient, ScanCommand } from '@aws-sdk/client-dynamodb';
import { NotificationItem, Result, resultify } from '@vocably/model';
const ddb = new DynamoDBClient();

export const getAllNotificationItems = async (
  sub: string
): Promise<Result<NotificationItem[]>> => {
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
      errorCode: 'GET_ALL_NOTIFICATIONS_ERROR',
      reason: 'Unable to get notification items from DynamoDB.',
    }
  );

  if (notificationResult.success === false) {
    return notificationResult;
  }

  if (!notificationResult.value.Items) {
    return {
      success: true,
      value: [],
    };
  }

  return {
    success: true,
    value: notificationResult.value.Items as NotificationItem[],
  };
};
