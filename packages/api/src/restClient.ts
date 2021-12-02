import { Auth } from '@aws-amplify/auth';
import { merge } from 'lodash-es';

let baseUrl = '';

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
    .then((initWithHeaders) => fetch(baseUrl + url, initWithHeaders))
    .then((response) => response.json());
};

type ClientOptions = {
  baseUrl: string;
};

export const configureClient = (options: ClientOptions) => {
  baseUrl = options.baseUrl;
};
