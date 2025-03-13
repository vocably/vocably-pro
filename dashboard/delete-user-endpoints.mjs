import { exec } from 'child_process';
import { config } from 'dotenv-flow';
import { inspect, promisify } from 'node:util';
import 'zx/globals';

config();

const execute = promisify(exec);

const userEmail = process.argv[2];

console.log(process.env.USER_POOL_ID);

const listUsers = `aws cognito-idp list-users --user-pool-id ${process.env.USER_POOL_ID} --filter "email=\\"${userEmail}\\""`;

const users = JSON.parse((await execute(listUsers)).stdout);

const sub = users.Users[0].Attributes.find((attr) => attr.Name === 'sub').Value;

const sendPushNotification = `aws pinpoint delete-user-endpoints --application-id ${process.env.PINPOINT_APPLICATION_ID} --user-id ${sub}`;

console.log(
  inspect(JSON.parse((await execute(sendPushNotification)).stdout), {
    depth: null,
  })
);
