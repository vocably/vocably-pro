import { CognitoIdentityServiceProvider } from 'aws-sdk';
import {
  isPaddleSubscriptionCreated,
  PaddleSubscriptionCreated,
  PaddleSubscriptionUpdated,
} from '../types';

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
        { Name: 'custom:next_bill_date', Value: event.next_bill_date },
        {
          Name: 'custom:unit_price',
          Value: isPaddleSubscriptionCreated(event)
            ? event.unit_price
            : event.new_unit_price,
        },
      ],
    })
    .promise();
};
