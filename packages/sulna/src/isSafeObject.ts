import { isObject } from 'lodash-es';

export const isSafeObject = (
  variable: any
): variable is Record<string, any> => {
  return isObject(variable);
};
