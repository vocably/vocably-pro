import AWS from 'aws-sdk';
import { AdminGetUserResponse } from 'aws-sdk/clients/cognitoidentityserviceprovider';

export const adminGetUser = async ({
  userPoolId,
  username,
}: {
  userPoolId: string;
  username: string;
}): Promise<AdminGetUserResponse> => {
  const cognitoIdp = new AWS.CognitoIdentityServiceProvider();
  return cognitoIdp
    .adminGetUser({
      UserPoolId: userPoolId,
      Username: username,
    })
    .promise();
};
