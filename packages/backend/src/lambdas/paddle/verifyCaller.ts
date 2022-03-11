import { verifyPaddleWebhook } from 'verify-paddle-webhook';

export const verifyCaller = (body: Record<string, string>) => {
  if (!verifyPaddleWebhook(process.env.PADDLE_PUBLIC_KEY, body)) {
    console.error('The webhook data can not be verified', body);
    throw Error('The webhook data can not be verified');
  }
};
