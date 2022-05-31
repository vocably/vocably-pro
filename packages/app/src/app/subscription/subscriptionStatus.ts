import { SubscriptionStatus, UserData } from '@vocably/model';

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
