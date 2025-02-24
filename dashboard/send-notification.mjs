import { exec } from 'child_process';
import { config } from 'dotenv-flow';
import { inspect, promisify } from 'node:util';
import 'zx/globals';

config();

const execute = promisify(exec);

const userEmail = process.argv[2];
const messageTitle = process.argv[3] ?? 'Test Title';
const messageBody = process.argv[4] ?? 'Test Body';

console.log('Sending notification...', {
  messageTitle,
  messageBody,
});

console.log(process.env.USER_POOL_ID);

const listUsers = `aws cognito-idp list-users --user-pool-id ${process.env.USER_POOL_ID} --filter "email=\\"${userEmail}\\""`;

const users = JSON.parse((await execute(listUsers)).stdout);

const sub = users.Users[0].Attributes.find((attr) => attr.Name === 'sub').Value;

const sendRequest = {
  ApplicationId: `${process.env.PINPOINT_APPLICATION_ID}`,
  SendUsersMessageRequest: {
    MessageConfiguration: {
      DefaultPushNotificationMessage: {
        Title: messageTitle,
        Body: messageBody,
      },
      APNSMessage: {
        Badge: 1,
      },
    },
    Users: {
      [sub]: {},
    },
  },
};
const sendPushNotification = `aws pinpoint send-users-messages --cli-input-json '${JSON.stringify(
  sendRequest
)}'`;

console.log(
  inspect(JSON.parse((await execute(sendPushNotification)).stdout), {
    depth: null,
  })
);
