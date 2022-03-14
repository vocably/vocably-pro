import { PaddleEvent } from './types';
import { handleSubscriptionCreated } from './handleEvent/handleSubscriptionCreated';

export const handleEvent = async (event: PaddleEvent) => {
  switch (event.alert_name) {
    case 'subscription_created':
      return handleSubscriptionCreated(event);
  }
};
