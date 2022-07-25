import { Errors, VocablyErrorCode } from './errors';

export type Error = {
  success: false;
  errorCode: VocablyErrorCode;
  reason: string;
  extra?: any;
};

export type Success<T> = {
  success: true;
  value: T;
};

export type Result<T> = Success<T> | Error;

export const isSuccess = <T>(result: Result<T>): result is Success<T> =>
  result.success === true;

export const isError = (object: any): object is Error => {
  if (typeof object !== 'object' || object === null) {
    return false;
  }

  return (
    object.success === false &&
    Errors.includes(object.errorCode) &&
    object.reason
  );
};
