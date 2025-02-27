import { DeleteItemCommand, DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { Result, resultify } from '@vocably/model';
const ddb = new DynamoDBClient();

export const deleteNotificationItem = async (
  id: string
): Promise<Result<any>> => {
  return resultify(
    ddb.send(
      new DeleteItemCommand({
        TableName: process.env.NOTIFICATIONS_DYNAMO_TABLE,
        Key: {
          ID: {
            S: id,
          },
        },
      })
    ),
    {
      errorCode: 'DELETE_NOTIFICATION_TIME_ERROR',
      reason: 'Failed to delete new notification item.',
    }
  );
};
