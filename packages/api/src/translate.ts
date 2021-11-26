import { restClient } from './restClient';

export const translate = (): Promise<any> => {
  return restClient.post('/translate');
};
