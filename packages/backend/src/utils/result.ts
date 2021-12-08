import { VocablyErrorCode } from '@vocably/api-types';

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
