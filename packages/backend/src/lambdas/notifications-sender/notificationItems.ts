import {
  DynamoDBClient,
  ScanCommand,
  ScanInput,
  UpdateItemCommand,
} from '@aws-sdk/client-dynamodb';
import { NotificationItem, Result, resultify } from '@vocably/model';

const ddb = new DynamoDBClient();

export const getNotificationItems = async (): Promise<
  Result<NotificationItem[]>
> => {
  const scanInput: ScanInput = {
    TableName: process.env.NOTIFICATIONS_DYNAMO_TABLE,
  };

  const result = await resultify(ddb.send(new ScanCommand(scanInput)), {
    errorCode: 'NOTIFICATIONS_TABLE_SCAN_ERROR',
    reason: 'Unable to perform table scan',
  });

  if (result.success === false) {
    return result;
  }

  return {
    success: true,
    value: result.value.Items as NotificationItem[],
  };
};

export const updateSentTimestamp = async (
  ID: string,
  sentTimestamp: number
): Promise<Result<any>> => {
  const updateCommand = new UpdateItemCommand({
    TableName: process.env.NOTIFICATIONS_DYNAMO_TABLE,
    Key: {
      ID: {
        S: ID,
      },
    },
    UpdateExpression: 'SET #SentTimestamp = :sentTimestamp',
    ExpressionAttributeNames: { '#SentTimestamp': 'SentTimestamp' },
    ExpressionAttributeValues: {
      ':sentTimestamp': {
        N: sentTimestamp.toString(),
      },
    },
    ReturnValues: 'ALL_NEW',
  });

  return resultify(ddb.send(updateCommand), {
    errorCode: 'NOTIFICATIONS_TABLE_UPDATE_ERROR',
    reason: 'Unable to set sent timestamp',
  });
};
