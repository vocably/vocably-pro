import { exec } from 'child_process';
import { config } from 'dotenv-flow';
import { promisify } from 'node:util';
import 'zx/globals';

config();

const execute = promisify(exec);

const userEmail = process.argv[2];

const listUsers = `aws cognito-idp list-users --user-pool-id ${process.env.USER_POOL_ID} --filter "email=\\"${userEmail}\\""`;

const users = JSON.parse((await execute(listUsers)).stdout);

const sub = users.Users[0].Attributes.find((attr) => attr.Name === 'sub').Value;

const listNotificationEndpoints = `aws pinpoint get-user-endpoints \\
    --application-id ${process.env.PINPOINT_APPLICATION_ID} \\
    --user-id ${sub}`;

const endpoints = JSON.parse((await execute(listNotificationEndpoints)).stdout)
  .EndpointsResponse.Item;

console.log(endpoints);
