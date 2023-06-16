import { setUpSubscriptionCanceller } from '../../../subscriptionCancellerDb';
import { PaddleSubscriptionCancelled } from '../types';
import { setupCancellationAttributes } from './setupCancellationAttributes';

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
