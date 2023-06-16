import { isEligibleForTrial, UserData } from '@vocably/model';
import { environment } from '../../environments/environment';
import { SubscriptionProduct } from './paddle';

export const getAvailableProducts = (
  userData: UserData
): SubscriptionProduct[] => {
  if (isEligibleForTrial(userData)) {
    return environment.paddle.subscriptionProducts.filter((p) => p.trial > 0);
  } else {
    return environment.paddle.subscriptionProducts.filter((p) => p.trial === 0);
  }
};
