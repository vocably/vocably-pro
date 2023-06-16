import { CognitoIdentityServiceProvider } from 'aws-sdk';
import { AttributeType } from 'aws-sdk/clients/cognitoidentityserviceprovider';
import {
  isPaddleSubscriptionCreated,
  PaddleSubscriptionCreated,
  PaddleSubscriptionUpdated,
} from '../types';

export const setupUserSubscriptionAttributes = async (
  event: PaddleSubscriptionCreated | PaddleSubscriptionUpdated
) => {
  const cognitoIdp = new CognitoIdentityServiceProvider();

  const attributes: AttributeType[] = [];

  if (!isPaddleSubscriptionCreated(event)) {
    attributes.push(
      { Name: 'custom:status', Value: event.status },
      { Name: 'custom:next_bill_date', Value: event.next_bill_date }
    );
  }

  return cognitoIdp
    .adminUpdateUserAttributes({
      Username: event.passthrough.username,
      UserPoolId: process.env.CONGINOT_USER_POOL_ID,
      UserAttributes: [
        ...attributes,
        { Name: 'custom:update_url', Value: event.update_url },
        { Name: 'custom:cancel_url', Value: event.cancel_url },
        {
          Name: 'custom:product_id',
          Value: event.subscription_plan_id,
        },
      ],
    })
    .promise();
};
