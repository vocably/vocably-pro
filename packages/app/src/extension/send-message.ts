import { environment } from '../environments/environment';
import { isObject } from 'lodash-es';

type RejectReason = {
  error: string;
};

export const sendMessage = <R, T = undefined | any>(
  message: string,
  data?: T
): Promise<R> => {
  if (!chrome || !chrome.runtime) {
    return Promise.reject({ error: 'chrome or chrome.runtime is not defined' });
  }

  return new Promise<R>((resolve, reject) => {
    chrome.runtime.sendMessage(
      environment.chromeExtensionId,
      {
        message,
        data,
      },
      (response) => {
        if (isObject(response) && response.hasOwnProperty('error')) {
          reject(response);
          return;
        }

        resolve(response);
      }
    );
  });
};
