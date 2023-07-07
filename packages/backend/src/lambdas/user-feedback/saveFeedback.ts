import { APIGatewayProxyEvent } from 'aws-lambda';
import { DynamoDB, SES } from 'aws-sdk';

const ddb = new DynamoDB.DocumentClient();
const ses = new SES();

export const saveFeedback = async (event: APIGatewayProxyEvent) => {
  console.log('Saving feedback', event.body);

  const { feedback } = JSON.parse(event.body);
  const timestamp = new Date().toISOString();
  const username = event.requestContext.authorizer?.username;

  await ses
    .sendEmail({
      Destination: { ToAddresses: ['d@vocably.pro'] },
      Message: {
        Subject: {
          Charset: 'UTF-8',
          Data: `${process.env.FEEDBACK_NOTIFICATION_PREFIX}User feedback received`,
        },
        Body: {
          Text: {
            Charset: 'UTF-8',
            Data: `Username: ${username}\n\n${feedback}`,
          },
        },
      },
      Source: 'd@vocably.pro',
    })
    .promise();

  // await ddb
  //   .put({
  //     TableName: process.env.USER_FEEDBACK_TABLE,
  //     Item: {
  //       Username: username,
  //       Timestamp: timestamp,
  //       Feedback: feedback,
  //     },
  //   })
  //   .promise();

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true }),
  };
};
