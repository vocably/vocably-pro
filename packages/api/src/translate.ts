import { request } from './restClient';
import { Phrase, Translation } from '@vocably/api-types';

export const translate = (phrase: Phrase): Promise<Translation> => {
  return request('/translate', {
    method: 'POST',
    body: JSON.stringify(phrase),
  });
};
