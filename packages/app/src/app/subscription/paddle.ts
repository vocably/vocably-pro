import { environment } from '../../environments/environment';

declare const Paddle: any;

export type CheckoutOptions = {
  targetClass: string;
  email: string;
};

export const checkout = (options: CheckoutOptions): Promise<void> => {
  return new Promise<void>((resolve) => {
    Paddle.Checkout.open({
      method: 'inline',
      product: environment.paddle.productId,
      allowQuantity: false,
      disableLogout: true,
      email: options.email,
      frameTarget: options.targetClass,
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
