import { Result } from '@vocably/model';

export const fallback = async <T>(
  promise: Promise<Result<T>>,
  fallback: () => Promise<Result<T>>
): Promise<Result<T>> => {
  const result = await promise;

  if (result.success === true) {
    return result;
  }

  return fallback();
};
