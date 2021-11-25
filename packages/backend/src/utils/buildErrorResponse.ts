import { isApiGatewayProxyResult } from './isApiGatewayProxyResult';
import { Observable, of } from 'rxjs';
import { APIGatewayProxyResult } from 'aws-lambda';
import { buildResponse } from './buildResponse';

export const buildErrorResponse = (
  e: any
): Observable<APIGatewayProxyResult> => {
  if (isApiGatewayProxyResult(e)) {
    return of(e);
  }

  console.error(e);

  return of<APIGatewayProxyResult>(
    buildResponse({
      statusCode: 500,
      body: JSON.stringify({
        error_description: 'An unexpected error occurred.',
      }),
    })
  );
};
