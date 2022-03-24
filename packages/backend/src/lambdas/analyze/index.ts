import { lastValueFrom, mergeMap, of, tap } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { buildResponse } from '../../utils/buildResponse';
import { buildErrorResponse } from '../../utils/buildErrorResponse';
import { buildResult } from './buildResult';
import { validatePermissions } from './validatePermissions';

export const analyze = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> =>
  lastValueFrom(
    of(event).pipe(
      tap(validatePermissions),
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
