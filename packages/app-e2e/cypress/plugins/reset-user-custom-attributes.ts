import { CognitoIdentityServiceProvider } from 'aws-sdk';

const cognito = new CognitoIdentityServiceProvider();

export const resetUserCustomAttributes = async (userSub = process.env.SUB) => {
  const response = await cognito
    .listUsers({
      Filter: `sub = "${userSub}"`,
      UserPoolId: process.env.USER_POOL_ID,
    })
    .promise();

  if (response.Users === undefined || response.Users[0] === undefined) {
    console.error(`Cant find user with sub ${userSub}`);
  }

  const user = response.Users[0];

  await cognito
    .adminDeleteUserAttributes({
      Username: user.Username,
      UserPoolId: process.env.USER_POOL_ID,
      UserAttributeNames: user.Attributes.filter((attribute) =>
        attribute.Name.startsWith('custom:')
      ).map((attribute) => attribute.Name),
    })
    .promise();

  return null;
};
