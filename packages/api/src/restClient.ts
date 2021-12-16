import { Auth } from '@aws-amplify/auth';
import { merge } from 'lodash-es';
import { apiOptions } from './config';

export const request = (url: string, init: RequestInit): Promise<any> => {
  return Auth.currentSession()
    .then((session) => {
      return merge(init, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${session.getIdToken().getJwtToken()}`,
        },
      });
    })
    .then((initWithHeaders) => fetch(apiOptions.baseUrl + url, initWithHeaders))
    .then((response) => response.json());
};
