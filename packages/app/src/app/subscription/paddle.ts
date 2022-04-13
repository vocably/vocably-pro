import { PassThrough } from '@vocably/model';
import { environment } from '../../environments/environment';

declare const Paddle: any;

export type SubscribeOptions = {
  productId: number;
  targetClass: string;
  email: string;
  passthrough: PassThrough;
  onSuccess: () => void;
  onClose: () => void;
};

export const subscribe = (options: SubscribeOptions): Promise<void> => {
  return new Promise<void>((resolve) => {
    Paddle.Checkout.open({
      product: options.productId,
      allowQuantity: false,
      disableLogout: true,
      email: options.email,
      passthrough: options.passthrough,
      successCallback: options.onSuccess,
      closeCallback: options.onClose,
      loadCallback: () => {
        resolve();
      },
    });
  });
};

export type UpdateOptions = {
  productId: number;
  override: string;
  email: string;
  passthrough: PassThrough;
  onSuccess?: () => void;
};

export const update = (options: UpdateOptions): Promise<void> => {
  return new Promise<void>((resolve) => {
    Paddle.Checkout.open({
      product: options.productId,
      allowQuantity: false,
      disableLogout: true,
      email: options.email,
      override: options.override,
      passthrough: options.passthrough,
      successCallback: options.onSuccess,
      loadCallback: () => {
        resolve();
      },
    });
  });
};

export type SubscriptionProduct = {
  id: number;
  title: string;
  price: number;
  currency: 'EUR';
  trialDays: number;
  save?: number;
};

const yearlySave =
  1 - environment.paddle.yearlyPrice / (environment.paddle.monthlyPrice * 12);

export const products: Record<number, SubscriptionProduct> = {
  [environment.paddle.monthlyTrialId]: {
    id: environment.paddle.monthlyTrialId,
    title: 'Monthly',
    price: environment.paddle.monthlyPrice,
    currency: 'EUR',
    trialDays: 7,
  },
  [environment.paddle.yearlyTrialId]: {
    id: environment.paddle.yearlyTrialId,
    title: 'Yearly',
    price: environment.paddle.yearlyPrice,
    currency: 'EUR',
    trialDays: 7,
    save: yearlySave,
  },
  [environment.paddle.monthlyId]: {
    id: environment.paddle.monthlyId,
    title: 'Monthly',
    price: environment.paddle.monthlyPrice,
    trialDays: 0,
    currency: 'EUR',
  },
  [environment.paddle.yearlyId]: {
    id: environment.paddle.yearlyId,
    title: 'Yearly',
    price: environment.paddle.yearlyPrice,
    currency: 'EUR',
    trialDays: 0,
    save: yearlySave,
  },
};
