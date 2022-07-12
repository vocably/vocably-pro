import { isApiGatewayProxyResult } from './isApiGatewayProxyResult';
import { Observable, of } from 'rxjs';
import { APIGatewayProxyResult } from 'aws-lambda';
import { buildResponse } from './buildResponse';
import { isError } from '@vocably/model';

export const buildErrorResponse = (
  e: any
): Observable<APIGatewayProxyResult> => {
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
