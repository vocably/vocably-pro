import { handleSubscriptionCancelled } from './handleEvent/handleSubscriptionCancelled';
import { handleSubscriptionCreated } from './handleEvent/handleSubscriptionCreated';
import { handleSubscriptionPaymentSucceeded } from './handleEvent/handleSubscriptionPaymentSucceeded';
import { handleSubscriptionUpdated } from './handleEvent/handleSubscriptionUpdated';
import {
  alertSubscriptionCancelled,
  alertSubscriptionCreated,
  alertSubscriptionPaymentSucceeded,
  alertSubscriptionUpdated,
  PaddleEvent,
} from './types';

export const handleEvent = async (event: PaddleEvent) => {
  switch (event.alert_name) {
    case alertSubscriptionCreated:
      return handleSubscriptionCreated(event);
    case alertSubscriptionUpdated:
      return handleSubscriptionUpdated(event);
    case alertSubscriptionCancelled:
      return handleSubscriptionCancelled(event);
    case alertSubscriptionPaymentSucceeded:
      return handleSubscriptionPaymentSucceeded(event);
  }
};
