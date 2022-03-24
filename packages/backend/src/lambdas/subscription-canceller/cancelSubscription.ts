import { CognitoIdentityServiceProvider } from 'aws-sdk';
import { deleteSubscriptionCanceller } from '../../subscriptionCancellerDb';

export const removeFromGroup = async (username: string, group: string) => {
  const cognitoIdp = new CognitoIdentityServiceProvider();
  return cognitoIdp
    .adminRemoveUserFromGroup({
      GroupName: group,
      Username: username,
      UserPoolId: process.env.CONGINOT_USER_POOL_ID,
    })
    .promise();
};

export const cancelSubscription = async (username: string) => {
  await Promise.all([
    removeFromGroup(username, 'paid'),
    deleteSubscriptionCanceller(username),
  ]);
};
