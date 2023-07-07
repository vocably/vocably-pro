import { Result } from '@vocably/model';
import { APIGatewayProxyEvent } from 'aws-lambda';
import { DynamoDB, SES } from 'aws-sdk';

const ddb = new DynamoDB.DocumentClient();
const ses = new SES();

export const saveFeedback = async (
  event: APIGatewayProxyEvent
): Promise<Result<null>> => {
  const { feedback, metadata = {} } = JSON.parse(event.body);

  const timestamp = new Date().toISOString();
  const claims = event.requestContext?.authorizer?.claims ?? {};
  const username = claims['cognito:username'] ?? '';

  metadata['claims'] = claims;

  await ses
    .sendEmail({
      Destination: { ToAddresses: ['d@vocably.pro'] },
      Message: {
        Subject: {
          Charset: 'UTF-8',
          Data: `${
            process.env.FEEDBACK_NOTIFICATION_PREFIX ?? ''
          }User feedback received`,
        },
        Body: {
          Text: {
            Charset: 'UTF-8',
            Data: `Username: ${username}\n\n${feedback}\n\n${JSON.stringify(
              metadata,
              null,
              4
            )}`,
          },
        },
      },
      Source: 'd@vocably.pro',
    })
    .promise();

  await ddb
    .put({
      TableName: process.env.USER_FEEDBACK_TABLE,
      Item: {
        Username: username,
        Timestamp: timestamp,
        Feedback: feedback,
      },
    })
    .promise();

  return {
    success: true,
    value: null,
  };
};
