import {
  AdminGetUserCommand,
  AdminGetUserResponse,
  CognitoIdentityProviderClient,
} from '@aws-sdk/client-cognito-identity-provider';

const client = new CognitoIdentityProviderClient();

export const adminGetUser = async ({
  userPoolId,
  username,
}: {
  userPoolId: string;
  username: string;
}): Promise<AdminGetUserResponse> => {
  return client.send(
    new AdminGetUserCommand({
      UserPoolId: userPoolId,
      Username: username,
    })
  );
};
