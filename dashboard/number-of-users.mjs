import 'zx/globals';
import { config } from 'dotenv-flow';

config();

console.log(process.env);

const userPool = JSON.parse(
  await $`aws cognito-idp describe-user-pool --user-pool-id ${process.env.USER_POOL_ID}`
);

console.log(
  'Estimated Number Of Users',
  userPool.UserPool.EstimatedNumberOfUsers
);
