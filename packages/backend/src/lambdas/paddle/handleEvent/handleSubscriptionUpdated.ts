import { PaddleSubscriptionUpdated } from '../types';
import { setupUserSubscriptionAttributes } from './setupUserSubscriptionAttributes';

export const handleSubscriptionUpdated = async (
  event: PaddleSubscriptionUpdated
) => {
  await setupUserSubscriptionAttributes(event);
};
