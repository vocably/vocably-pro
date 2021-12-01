import { request } from './restClient';

export const translate = (): Promise<any> => {
  return request('/translate', {
    method: 'POST',
  });
};
