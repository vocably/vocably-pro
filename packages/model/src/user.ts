import { SubscriptionStatus } from './subscription';
import { CognitoUser } from '@aws-amplify/auth';
import { CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { getAttributeValue } from '@vocably/sulna';

export type UserData = {
  username: string;
  email: string;
  sub: string;
  status?: SubscriptionStatus;
  updateUrl?: string;
  cancelUrl?: string;
  nextBillDate?: Date;
  unitPrice?: number;
  cancellationDate?: Date;
  productId?: number;
};

export const mapUserAttributes = ({
  user,
  attributes,
}: {
  user: CognitoUser;
  attributes: CognitoUserAttribute[];
}): UserData => {
  const email = attributes.find((a) => a.getName() === 'email');
  const sub = attributes.find((a) => a.getName() === 'sub');
  const status = attributes.find((a) => a.getName() === 'custom:status');
  const cancellationDate = attributes.find(
    (a) => a.getName() === 'custom:cancellation_date'
  );
  const nextBillDate = attributes.find(
    (a) => a.getName() === 'custom:next_bill_date'
  );
  const unitPrice = attributes.find((a) => a.getName() === 'custom:unit_price');
  const updateUrl = attributes.find((a) => a.getName() === 'custom:update_url');
  const cancelUrl = attributes.find((a) => a.getName() === 'custom:cancel_url');
  const productId = attributes.find((a) => a.getName() === 'custom:product_id');

  if (!email || !sub) {
    throw Error('Can find email and sub in user data.');
  }

  return {
    username: user.getUsername(),
    email: email.getValue(),
    sub: sub.getValue(),
    status: getAttributeValue(status),
    updateUrl: getAttributeValue(updateUrl),
    cancelUrl: getAttributeValue(cancelUrl),
    nextBillDate: nextBillDate && new Date(nextBillDate.getValue()),
    unitPrice: unitPrice && parseFloat(unitPrice.getValue()),
    cancellationDate: cancellationDate && new Date(cancellationDate.getValue()),
    productId: productId && parseInt(productId.getValue()),
  };
};
