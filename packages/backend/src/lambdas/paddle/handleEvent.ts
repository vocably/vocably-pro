import { PaddleEvent } from './types';
import { handleSubscriptionCreated } from './handleEvent/handleSubscriptionCreated';
import { handleSubscriptionUpdated } from './handleEvent/handleSubscriptionUpdated';

export const handleEvent = async (event: PaddleEvent) => {
  switch (event.alert_name) {
    case 'subscription_created':
      return handleSubscriptionCreated(event);
    case 'subscription_updated':
      return handleSubscriptionUpdated(event);
  }
};
