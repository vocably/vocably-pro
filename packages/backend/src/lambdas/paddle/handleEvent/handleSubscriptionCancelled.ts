import { PaddleSubscriptionCancelled } from '../types';
import { setupCancellationAttributes } from './setupCancellationAttributes';

export const handleSubscriptionCancelled = async (
  event: PaddleSubscriptionCancelled
) => {
  await setupCancellationAttributes(event);
};
