import { PaddleSubscriptionCancelled } from '../types';
import { setupCancellationAttributes } from './setupCancellationAttributes';
import { setUpSubscriptionCanceller } from '../subscriptionCancellerDb';

export const handleSubscriptionCancelled = async (
  event: PaddleSubscriptionCancelled
) => {
  await Promise.all([
    setupCancellationAttributes(event),
    setUpSubscriptionCanceller(
      event.passthrough.username,
      event.cancellation_effective_date
    ),
  ]);
};
