import { environment } from '../../environments/environment';
import { PassThrough } from '@vocably/model';

declare const Paddle: any;

export type SubscribeOptions = {
  targetClass: string;
  email: string;
  passthrough: PassThrough;
  onSuccess: () => void;
};

export const subscribe = (options: SubscribeOptions): Promise<void> => {
  return new Promise<void>((resolve) => {
    Paddle.Checkout.open({
      method: 'inline',
      product: environment.paddle.productId,
      allowQuantity: false,
      disableLogout: true,
      email: options.email,
      frameTarget: options.targetClass,
      passthrough: options.passthrough,
      frameInitialHeight: 0,
      displayModeTheme: 'dark',
      successCallback: options.onSuccess,
      loadCallback: () => {
        resolve();
      },
      frameStyle:
        'width:100%; min-width:312px; background-color: transparent; border: none;',
    });
  });
};

export type UpdateOptions = {
  override: string;
  email: string;
  passthrough: PassThrough;
};

export const update = (options: UpdateOptions): Promise<void> => {
  return new Promise<void>((resolve) => {
    Paddle.Checkout.open({
      product: environment.paddle.productId,
      allowQuantity: false,
      disableLogout: true,
      email: options.email,
      override: options.override,
      passthrough: options.passthrough,
      loadCallback: () => {
        resolve();
      },
    });
  });
};
