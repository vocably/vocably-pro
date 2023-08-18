import AWS from 'aws-sdk';

export const adminAddUserToGroup = async ({
  userPoolId,
  username,
  groupName,
}: {
  userPoolId: string;
  username: string;
  groupName: string;
}): Promise<{
  $response: AWS.Response<Record<string, string>, AWS.AWSError>;
}> => {
  const params = {
    GroupName: groupName,
    UserPoolId: userPoolId,
    Username: username,
  };

  const cognitoIdp = new AWS.CognitoIdentityServiceProvider();
  return cognitoIdp.adminAddUserToGroup(params).promise();
};
