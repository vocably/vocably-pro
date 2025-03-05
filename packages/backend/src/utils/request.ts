import { Result } from '@vocably/model';
import * as https from 'https';

export const request = async (requestOptions: any): Promise<Result<string>> => {
  return new Promise<Result<string>>((resolve) => {
    const request = https.request(requestOptions, (response) => {
      const body = new Array<Buffer | string>();
      response.on('data', (chunk) => body.push(chunk));
      response.on('end', () => {
        const statusCode = response.statusCode ?? 500;
        if (statusCode >= 200 && statusCode <= 299) {
          resolve({
            success: true,
            value: body.join(''),
          });
        } else {
          resolve({
            success: false,
            errorCode: 'HTTP_REQUEST_NOT_OK',
            reason: `The response status code is ${statusCode}`,
            extra: {
              body: body.join(''),
              response,
            },
          });
        }
      });
    });

    request.on('error', (error) =>
      resolve({
        success: false,
        errorCode: 'HTTP_REQUEST_UNCAUGHT',
        reason: `An error during the HTTP request has occurred.`,
        extra: error,
      })
    );

    request.end();
  });
};
