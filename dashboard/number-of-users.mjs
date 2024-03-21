import { config } from 'dotenv-flow';
import 'zx/globals';

config();

const userPool = JSON.parse(
  await $`aws cognito-idp describe-user-pool --user-pool-id ${process.env.USER_POOL_ID}`
);

console.log(
  'Users after the Reddit post',
  userPool.UserPool.EstimatedNumberOfUsers - 18
);
