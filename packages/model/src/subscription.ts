import { isObject, isString } from 'lodash-es';

export type PassThrough = {
  sub: string;
};

export const isPassThrough = (obj: any): obj is PassThrough => {
  // @ts-ignore
  return isObject(obj) && isString(obj.sub);
};
