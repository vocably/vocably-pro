import { DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb';
import { Result, resultify } from '@vocably/model';
import { randomBytes } from 'node:crypto';
const ddb = new DynamoDBClient();

type Params = {
  sub: string;
  language: string;
  utcTime: string;
  ianaTimezone: string;
  localTime: string;
  ttl: number;
};

export const createNotificationItem = async (
  params: Params
): Promise<Result<any>> => {
  const id = randomBytes(16).toString('hex');
  return resultify(
    ddb.send(
      new PutItemCommand({
        TableName: process.env.NOTIFICATIONS_DYNAMO_TABLE,
        Item: {
          ID: {
            S: id,
          },
          Sub: { S: params.sub },
          Language: { S: params.language },
          UTCTime: { S: params.utcTime },
          SentTimestamp: { N: '0' },
          IANATimezone: { S: params.ianaTimezone },
          LocalTime: { S: params.localTime },
          TTL: { N: params.ttl.toString() },
        },
      })
    ),
    {
      errorCode: 'SET_NOTIFICATION_TIME_ERROR',
      reason: 'Failed to create new notification item.',
    }
  );
};
