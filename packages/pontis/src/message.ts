import { Message } from './types';

export const message =
  (extensionId: string) =>
  <R, T = undefined | any>(message: Message, data?: T): Promise<R> => {
    if (typeof chrome !== 'object' || chrome === null || !chrome.runtime) {
      return Promise.reject({
        error: 'chrome or chrome.runtime is not defined',
      });
    }

    return new Promise<R>((resolve, reject) => {
      chrome.runtime.sendMessage(
        extensionId,
        {
          message,
          data,
        },
        (response) => {
          if (
            typeof response === 'object' &&
            response !== null &&
            response.hasOwnProperty('error')
          ) {
            reject(response);
            return;
          }

          resolve(response);
        }
      );
    });
  };
