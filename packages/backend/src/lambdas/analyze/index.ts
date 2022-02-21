import { lastValueFrom, mergeMap, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { buildResponse } from '../../utils/buildResponse';
import { buildErrorResponse } from '../../utils/buildErrorResponse';
import { buildResult } from './buildResult';

export const analyze = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> =>
  lastValueFrom(
    of(event).pipe(
      mergeMap(buildResult),
      map((result) => {
        if (result.success === false) {
          return buildResponse({
            statusCode: 500,
            body: JSON.stringify({
              error: result.errorCode,
            }),
          });
        }

        return buildResponse({
          body: JSON.stringify(result.value),
        });
      }),
      catchError(buildErrorResponse)
    )
  );

exports.analyze = analyze;
