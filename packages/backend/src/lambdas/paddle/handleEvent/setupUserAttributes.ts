import { CognitoIdentityServiceProvider } from 'aws-sdk';
import { PaddleSubscriptionCreated, PaddleSubscriptionUpdated } from '../types';

export const setupUserAttributes = async (
  event: PaddleSubscriptionCreated | PaddleSubscriptionUpdated
) => {
  const cognitoIdp = new CognitoIdentityServiceProvider();
  return cognitoIdp
    .adminUpdateUserAttributes({
      Username: event.passthrough.username,
      UserPoolId: process.env.CONGINOT_USER_POOL_ID,
      UserAttributes: [
        { Name: 'custom:status', Value: event.status },
        { Name: 'custom:update_url', Value: event.update_url },
        { Name: 'custom:cancel_url', Value: event.cancel_url },
      ],
    })
    .promise();
};
