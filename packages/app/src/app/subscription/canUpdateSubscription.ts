import { SubscriptionStatus } from '@vocably/model';
import { UserData } from '../auth/auth.service';

const eligibleForUpdate: SubscriptionStatus[] = [
  'active',
  'trialing',
  'past_due',
];

export const canUpdateSubscription = (data: UserData): boolean =>
  !!data.status && eligibleForUpdate.includes(data.status);
