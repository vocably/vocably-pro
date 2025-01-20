import { Result } from '@vocably/model';

type Options = {
  retryTimes: number;
  msBetweenRetries: number;
};
export const retry = async <T>(
  call: () => Promise<Result<T>>,
  { retryTimes, msBetweenRetries }: Options
): Promise<Result<T>> => {
  let lastError: any;
  for (let i = 0; i < retryTimes; i++) {
    try {
      const result = await call();
      if (result.success === true) {
        return result;
      }

      console.log('Retry call expectedly failed', result);
      lastError = result;
    } catch (e) {
      console.error('Retry has caught an exception', e);
      lastError = e;
    }
    console.error(
      `The ${
        i + 1
      }th retry has failed. Waiting for ${msBetweenRetries} milliseconds.`
    );
    await new Promise((resolve) => setTimeout(resolve, msBetweenRetries));
  }

  return {
    success: false,
    errorCode: 'RETRY_ERROR',
    reason: `Retry has exceeded the maximum retry times of ${retryTimes}`,
    extra: {
      lastError,
    },
  };
};
