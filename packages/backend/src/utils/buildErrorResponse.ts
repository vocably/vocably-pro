import { isError } from '@vocably/model';
import { APIGatewayProxyResult } from 'aws-lambda';
import { Observable, of } from 'rxjs';
import { buildResponse } from './buildResponse';
import { isApiGatewayProxyResult } from './isApiGatewayProxyResult';

export const buildErrorResponse = (
  e: any
): Observable<APIGatewayProxyResult> => {
  console.error('An error occurred', e);

  if (isApiGatewayProxyResult(e)) {
    return of(e);
  }

  if (isError(e)) {
    return of(
      buildResponse({
        statusCode: 500,
        body: JSON.stringify({
          error: e.errorCode,
        }),
      })
    );
  }

  return of<APIGatewayProxyResult>(
    buildResponse({
      statusCode: 500,
      body: JSON.stringify({
        error_description: 'An unexpected error occurred.',
      }),
    })
  );
};
