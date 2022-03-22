import { PaddleEvent } from './types';
import { handleSubscriptionCreated } from './handleEvent/handleSubscriptionCreated';
import { handleSubscriptionUpdated } from './handleEvent/handleSubscriptionUpdated';
import { handleSubscriptionCancelled } from './handleEvent/handleSubscriptionCancelled';

export const handleEvent = async (event: PaddleEvent) => {
  switch (event.alert_name) {
    case 'subscription_created':
      return handleSubscriptionCreated(event);
    case 'subscription_updated':
      return handleSubscriptionUpdated(event);
    case 'subscription_cancelled':
      return handleSubscriptionCancelled(event);
  }
};
