import { isObject, isString } from 'lodash-es';

export type PassThrough = {
  username: string;
};

export const isPassThrough = (obj: any): obj is PassThrough => {
  // @ts-ignore
  return isObject(obj) && isString(obj.username);
};

export type SubscriptionStatus =
  | 'active'
  | 'trialing'
  | 'past_due'
  | 'paused'
  | 'deleted';
