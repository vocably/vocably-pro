import {
  AdminAddUserToGroupCommand,
  AdminAddUserToGroupCommandOutput,
  CognitoIdentityProviderClient,
} from '@aws-sdk/client-cognito-identity-provider';

const client = new CognitoIdentityProviderClient();

export const adminAddUserToGroup = async ({
  userPoolId,
  username,
  groupName,
}: {
  userPoolId: string;
  username: string;
  groupName: string;
}): Promise<AdminAddUserToGroupCommandOutput> => {
  const input = {
    GroupName: groupName,
    UserPoolId: userPoolId,
    Username: username,
  };

  const command = new AdminAddUserToGroupCommand(input);
  return client.send(command);
};
