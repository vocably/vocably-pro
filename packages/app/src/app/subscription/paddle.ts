import { PassThrough } from '@vocably/model';

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
  duration: number;
  id: number;
  price: number;
  currency: string;
  trial: number;
};
