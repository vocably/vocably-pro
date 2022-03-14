import { CognitoIdentityServiceProvider } from 'aws-sdk';

export const addToGroup = async (username: string, group: string) => {
  const cognitoIdp = new CognitoIdentityServiceProvider();
  return cognitoIdp
    .adminAddUserToGroup({
      GroupName: group,
      Username: username,
      UserPoolId: process.env.CONGINOT_USER_POOL_ID,
    })
    .promise();
};
