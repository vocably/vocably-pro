import { APIGatewayProxyResult } from 'aws-lambda';
import { Observable, of } from 'rxjs';
import { buildResponse } from './buildResponse';
import { isApiGatewayProxyResult } from './isApiGatewayProxyResult';

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
