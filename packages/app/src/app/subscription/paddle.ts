import { environment } from '../../environments/environment';
import { PassThrough } from '@vocably/model';

declare const Paddle: any;

export type SubscribeOptions = {
  targetClass: string;
  email: string;
  passthrough: PassThrough;
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
      loadCallback: () => {
        resolve();
      },
      frameStyle:
        'width:100%; min-width:312px; background-color: transparent; border: none;',
    });
  });
};
