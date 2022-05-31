import { SubscriptionProduct } from './paddle';
import { isEligibleForTrial } from './isEligibleForTrial';
import { environment } from '../../environments/environment';
import { UserData } from '@vocably/model';

export const getAvailableProducts = (
  userData: UserData
): SubscriptionProduct[] => {
  if (isEligibleForTrial(userData)) {
    return environment.paddle.subscriptionProducts.filter((p) => p.trial > 0);
  } else {
    return environment.paddle.subscriptionProducts.filter((p) => p.trial === 0);
  }
};
