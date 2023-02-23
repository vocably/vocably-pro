import { Auth } from '@aws-amplify/auth';
import { merge } from 'lodash-es';
import { apiOptions } from './config';
import { Result } from '@vocably/model';

export const request = async (
  url: string,
  init: RequestInit
): Promise<Result<any>> => {
  try {
    const session = await Auth.currentSession();
    const response = await fetch(
      apiOptions.baseUrl + url,
      merge(init, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${session.getIdToken().getJwtToken()}`,
        },
      })
    );

    if (!response.ok) {
      return {
        success: false,
        errorCode: 'API_REQUEST_NOT_OK',
        reason: 'The API has returned failed status.',
        extra: response,
      };
    }

    if (
      response.headers.has('Content-Type') &&
      response.headers.get('Content-Type') === 'application/json' &&
      response.headers.get('Content-Length') !== '0'
    ) {
      return {
        success: true,
        value: await response.json(),
      };
    }

    return {
      success: true,
      value: await response.text(),
    };
  } catch (e) {
    return {
      success: false,
      errorCode: 'API_REQUEST_UNHANDLED_ERROR',
      reason: 'Un unexpected error has occurred during the request.',
      extra: e,
    };
  }
};
