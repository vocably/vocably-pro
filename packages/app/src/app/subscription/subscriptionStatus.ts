import { SubscriptionStatus } from '@vocably/model';
import { UserData } from '../auth/auth.service';

const eligibleForUpdate: SubscriptionStatus[] = [
  'active',
  'trialing',
  'past_due',
];

export const isUnsubscribed = (data: UserData) => data.status === undefined;

export const isCancelled = (data: UserData): boolean =>
  !!data.status && data.status === 'deleted';

export const isActive = (data: UserData): boolean =>
  !!data.status && eligibleForUpdate.includes(data.status);
