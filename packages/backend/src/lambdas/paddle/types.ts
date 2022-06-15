import { PassThrough, SubscriptionStatus } from '@vocably/model';

export type PaddleRawBody = Record<string, string>;

export const alertSubscriptionCreated = 'subscription_created';
export const alertSubscriptionUpdated = 'subscription_updated';
export const alertSubscriptionCancelled = 'subscription_cancelled';
export const alertSubscriptionPaymentSucceeded =
  'subscription_payment_succeeded';

export type PaddleSubscriptionCreated = {
  alert_name: typeof alertSubscriptionCreated;
  cancel_url: string;
  update_url: string;
  passthrough: PassThrough;
  next_bill_date: string;
  status: SubscriptionStatus;
  unit_price: string;
  subscription_plan_id: string;
};

export const isPaddleSubscriptionCreated = (
  obj: any
): obj is PaddleSubscriptionCreated =>
  obj.alert_name && obj.alert_name === alertSubscriptionCreated;

export type PaddleSubscriptionUpdated = {
  alert_name: typeof alertSubscriptionUpdated;
  cancel_url: string;
  update_url: string;
  passthrough: PassThrough;
  next_bill_date: string;
  status: SubscriptionStatus;
  new_unit_price: string;
  subscription_plan_id: string;
};

export type PaddleSubscriptionCancelled = {
  alert_name: typeof alertSubscriptionCancelled;
  passthrough: PassThrough;
  cancellation_effective_date: string;
  status: SubscriptionStatus;
};

export type PaddleSubscriptionPaymentSucceeded = {
  alert_name: typeof alertSubscriptionPaymentSucceeded;
  status: SubscriptionStatus;
  passthrough: PassThrough;
  subscription_plan_id: string;
  next_payment_amount: string;
  next_bill_date: string;
  plan_name: string;
};

export type PaddleEvent =
  | PaddleSubscriptionCreated
  | PaddleSubscriptionUpdated
  | PaddleSubscriptionCancelled
  | PaddleSubscriptionPaymentSucceeded;
