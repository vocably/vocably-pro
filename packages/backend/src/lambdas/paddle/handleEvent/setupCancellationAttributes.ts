import { CognitoIdentityServiceProvider } from 'aws-sdk';
import { PaddleSubscriptionCancelled } from '../types';

export const setupCancellationAttributes = async (
  event: PaddleSubscriptionCancelled
) => {
  const cognitoIdp = new CognitoIdentityServiceProvider();
  return cognitoIdp
    .adminUpdateUserAttributes({
      Username: event.passthrough.username,
      UserPoolId: process.env.CONGINOT_USER_POOL_ID,
      UserAttributes: [
        { Name: 'custom:status', Value: event.status },
        {
          Name: 'custom:cancellation_date',
          Value: event.cancellation_effective_date,
        },
      ],
    })
    .promise();
};
