import { VocablyErrorCode } from './errors';

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
