import { PaddleSubscriptionUpdated } from '../types';
import { setupUserAttributes } from './setupUserAttributes';

export const handleSubscriptionUpdated = async (
  event: PaddleSubscriptionUpdated
) => {
  await setupUserAttributes(event);
};
