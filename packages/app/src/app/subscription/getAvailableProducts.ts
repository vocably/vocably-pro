import { UserData } from '../auth/auth.service';
import { products, SubscriptionProduct } from './paddle';
import { isEligibleForTrial } from './isEligibleForTrial';
import { environment } from '../../environments/environment';

export const getAvailableProducts = (
  userData: UserData
): SubscriptionProduct[] => {
  if (isEligibleForTrial(userData)) {
    return [
      products[environment.paddle.monthlyTrialId],
      products[environment.paddle.yearlyTrialId],
    ];
  } else {
    return [
      products[environment.paddle.monthlyId],
      products[environment.paddle.yearlyId],
    ];
  }
};
