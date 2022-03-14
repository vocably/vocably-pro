import { PaddleSubscriptionCreated } from '../types';
import { addToGroup } from './addToGroup';
import { setupUserAttributes } from './setupUserAttributes';

export const handleSubscriptionCreated = async (
  event: PaddleSubscriptionCreated
) => {
  await Promise.all([
    addToGroup(event.passthrough.username, 'paid'),
    setupUserAttributes(event),
  ]);
};
