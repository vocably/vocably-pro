import { PaddleSubscriptionCreated } from '../types';
import { addToGroup } from './addToGroup';
import { setupUserSubscriptionAttributes } from './setupUserSubscriptionAttributes';
import { deleteSubscriptionCanceller } from '../../../subscriptionCancellerDb';

export const handleSubscriptionCreated = async (
  event: PaddleSubscriptionCreated
) => {
  await Promise.all([
    addToGroup(event.passthrough.username, 'paid'),
    setupUserSubscriptionAttributes(event),
    deleteSubscriptionCanceller(event.passthrough.username),
  ]);
};
