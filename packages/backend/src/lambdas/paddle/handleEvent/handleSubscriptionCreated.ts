import { PaddleSubscriptionCreated } from '../types';
import { addToGroup } from './addToGroup';
import { setupUserAttributes } from './setupUserAttributes';
import { deleteSubscriptionCanceller } from '../subscriptionCancellerDb';

export const handleSubscriptionCreated = async (
  event: PaddleSubscriptionCreated
) => {
  await Promise.all([
    addToGroup(event.passthrough.username, 'paid'),
    setupUserAttributes(event),
    deleteSubscriptionCanceller(event.passthrough.username),
  ]);
};
