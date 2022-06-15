import { PaddleSubscriptionPaymentSucceeded } from '../types';
import { setupPaymentAttributes } from './setupPaymentAttributes';

export const handleSubscriptionPaymentSucceeded = async (
  event: PaddleSubscriptionPaymentSucceeded
) => {
  return setupPaymentAttributes(event);
};
