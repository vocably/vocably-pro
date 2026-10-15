import {
  DeleteItemCommand,
  DynamoDBClient,
  GetItemCommand,
  PutItemCommand,
  QueryCommand,
} from '@aws-sdk/client-dynamodb';
import { PushChannelType, Result, resultify } from '@vocably/model';

const ddb = new DynamoDBClient();

// Tokens are refreshed on every app launch, so a token that
// hasn't been seen for this long belongs to an abandoned device.
const PUSH_TOKEN_TTL_SECONDS = 180 * 24 * 60 * 60;

export type PushToken = {
  token: string;
  sub: string;
  channelType: PushChannelType;
};

export const putPushToken = async (
  pushToken: PushToken
): Promise<Result<unknown>> => {
  const now = Math.floor(Date.now() / 1000);
  return resultify(
    ddb.send(
      new PutItemCommand({
        TableName: process.env.PUSH_TOKENS_DYNAMO_TABLE,
        Item: {
          Token: { S: pushToken.token },
          Sub: { S: pushToken.sub },
          ChannelType: { S: pushToken.channelType },
          UpdatedAt: { N: now.toString() },
          TTL: { N: (now + PUSH_TOKEN_TTL_SECONDS).toString() },
        },
      })
    ),
    {
      errorCode: 'PUSH_TOKENS_TABLE_ERROR',
      reason: 'Failed to put push token.',
    }
  );
};

export const getPushTokensBySub = async (
  sub: string
): Promise<Result<PushToken[]>> => {
  const result = await resultify(
    ddb.send(
      new QueryCommand({
        TableName: process.env.PUSH_TOKENS_DYNAMO_TABLE,
        IndexName: 'SubIndex',
        // "Sub" is a DynamoDB reserved word, so it must be aliased.
        KeyConditionExpression: '#sub = :sub',
        ExpressionAttributeNames: {
          '#sub': 'Sub',
        },
        ExpressionAttributeValues: {
          ':sub': { S: sub },
        },
      })
    ),
    {
      errorCode: 'PUSH_TOKENS_TABLE_ERROR',
      reason: 'Failed to query push tokens.',
    }
  );

  if (result.success === false) {
    return result;
  }

  return {
    success: true,
    value: (result.value.Items ?? []).map((item) => ({
      token: item.Token.S as string,
      sub: item.Sub.S as string,
      channelType: item.ChannelType.S as PushChannelType,
    })),
  };
};

export const getPushTokenOwner = async (
  token: string
): Promise<Result<string | undefined>> => {
  const result = await resultify(
    ddb.send(
      new GetItemCommand({
        TableName: process.env.PUSH_TOKENS_DYNAMO_TABLE,
        Key: { Token: { S: token } },
      })
    ),
    {
      errorCode: 'PUSH_TOKENS_TABLE_ERROR',
      reason: 'Failed to get push token.',
    }
  );

  if (result.success === false) {
    return result;
  }

  return {
    success: true,
    value: result.value.Item?.Sub?.S,
  };
};

export const deletePushToken = async (
  token: string
): Promise<Result<unknown>> =>
  resultify(
    ddb.send(
      new DeleteItemCommand({
        TableName: process.env.PUSH_TOKENS_DYNAMO_TABLE,
        Key: { Token: { S: token } },
      })
    ),
    {
      errorCode: 'PUSH_TOKENS_TABLE_ERROR',
      reason: 'Failed to delete push token.',
    }
  );
