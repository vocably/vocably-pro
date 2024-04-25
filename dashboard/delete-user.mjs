import { exec } from 'child_process';
import { config } from 'dotenv-flow';
import { inspect, promisify } from 'node:util';
import 'zx/globals';

config();

const execute = promisify(exec);

const userEmail = process.argv[2];

const listUsers = `aws cognito-idp list-users --user-pool-id ${process.env.USER_POOL_ID} --filter "email=\\"${userEmail}\\""`;

const listUsersResult = JSON.parse((await execute(listUsers)).stdout);

console.log('User to be deleted', inspect(listUsersResult, { depth: null }));

const sub = listUsersResult.Users[0].Attributes.find(
  (attr) => attr.Name === 'sub'
).Value;

console.log(
  await execute(
    `aws cognito-idp admin-delete-user --user-pool-id ${process.env.USER_POOL_ID} --username ${listUsersResult.Users[0].Username}`
  ).stdout
);
