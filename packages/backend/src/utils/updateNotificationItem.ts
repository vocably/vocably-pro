import { DynamoDBClient, UpdateItemCommand } from '@aws-sdk/client-dynamodb';
import { Result, resultify } from '@vocably/model';
const ddb = new DynamoDBClient();

type Params = {
  id: string;
  utcTime: string;
  ianaTimezone: string;
  localTime: string;
  ttl: number;
};

export const updateNotificationItem = async (
  params: Params
): Promise<Result<any>> => {
  return resultify(
    ddb.send(
      new UpdateItemCommand({
        TableName: process.env.NOTIFICATIONS_DYNAMO_TABLE,
        Key: {
          ID: {
            S: params.id,
          },
        },
        UpdateExpression:
          'SET #IANATimezone = :ianaTimezone, #LocalTime = :localTime, #UTCTime = :utcTime, #TTL = :ttl',
        ExpressionAttributeNames: {
          '#IANATimezone': 'IANATimezone',
          '#LocalTime': 'LocalTime',
          '#UTCTime': 'UTCTime',
          '#TTL': 'TTL',
        },
        ExpressionAttributeValues: {
          ':ianaTimezone': {
            S: params.ianaTimezone,
          },
          ':localTime': {
            S: params.localTime,
          },
          ':utcTime': {
            S: params.utcTime,
          },
          ':ttl': {
            N: params.ttl.toString(),
          },
        },
        ReturnValues: 'NONE',
      })
    ),
    {
      errorCode: 'SET_NOTIFICATION_TIME_ERROR',
      reason: 'Failed to update existing notification item.',
    }
  );
};
