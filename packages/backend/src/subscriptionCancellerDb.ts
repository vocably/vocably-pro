import { DynamoDB } from 'aws-sdk';

const ddb = new DynamoDB.DocumentClient();

export const deleteSubscriptionCanceller = async (username: string) => {
  await ddb
    .delete({
      TableName: process.env.CANCELLED_SUBCRIPTIONS_TABLE,
      Key: {
        Username: username,
      },
    })
    .promise();
};

export const setUpSubscriptionCanceller = async (
  username: string,
  cancellationEffectiveDate: string
) => {
  await deleteSubscriptionCanceller(username);

  const cancellationDate = new Date(cancellationEffectiveDate);

  await ddb
    .put({
      TableName: process.env.CANCELLED_SUBCRIPTIONS_TABLE,
      Item: {
        Username: username,
        CancellationTimestamp: Date.UTC(
          cancellationDate.getFullYear(),
          cancellationDate.getMonth(),
          cancellationDate.getDate()
        ),
      },
    })
    .promise();
};

export const getUsernames = (
  cancellationTimestamp: number
): Promise<string[]> => {
  return ddb
    .query({
      TableName: process.env.CANCELLED_SUBCRIPTIONS_TABLE,
      IndexName: 'CancellationTimestampIndex',
      KeyConditionExpression: 'CancellationTimestamp = :timestamp',
      ExpressionAttributeValues: {
        ':timestamp': cancellationTimestamp,
      },
    })
    .promise()
    .then((result) => result.Items.map((item) => item.Username));
};
