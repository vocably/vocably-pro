import { VocablyErrorCode } from './errors';

type Error = {
  success: false;
  errorCode: VocablyErrorCode;
  reason: string;
  extra?: any;
};

type Success<T> = {
  success: true;
  value: T;
};

export type Result<T> = Success<T> | Error;
