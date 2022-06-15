import { CognitoIdentityServiceProvider } from 'aws-sdk';
import { PaddleSubscriptionPaymentSucceeded } from '../types';

export const setupPaymentAttributes = async (
  event: PaddleSubscriptionPaymentSucceeded
) => {
  const cognitoIdp = new CognitoIdentityServiceProvider();

  return cognitoIdp
    .adminUpdateUserAttributes({
      Username: event.passthrough.username,
      UserPoolId: process.env.CONGINOT_USER_POOL_ID,
      UserAttributes: [
        { Name: 'custom:plan_name', Value: event.plan_name },
        { Name: 'custom:unit_price', Value: event.next_payment_amount },
        { Name: 'custom:next_bill_date', Value: event.next_bill_date },
        {
          Name: 'custom:status',
          Value: event.status,
        },
      ],
    })
    .promise();
};
