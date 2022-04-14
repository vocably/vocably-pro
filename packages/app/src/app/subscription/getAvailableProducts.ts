import { UserData } from '../auth/auth.service';
import { SubscriptionProduct } from './paddle';
import { isEligibleForTrial } from './isEligibleForTrial';
import { environment } from '../../environments/environment';

export const getAvailableProducts = (
  userData: UserData
): SubscriptionProduct[] => {
  if (isEligibleForTrial(userData)) {
    return environment.paddle.subscriptionProducts.filter((p) => p.trial > 0);
  } else {
    return environment.paddle.subscriptionProducts.filter((p) => p.trial === 0);
  }
};
