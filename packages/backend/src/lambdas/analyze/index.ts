import { lastValueFrom, mergeMap, of, tap } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { buildResponse } from '../../utils/buildResponse';
import { buildErrorResponse } from '../../utils/buildErrorResponse';
import { buildResult } from './buildResult';
import { validatePermissions } from './validatePermissions';
import { extractPayload } from './extractPayload';
import { sanitizePayload } from './sanitizePayload';

export const analyze = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> =>
  lastValueFrom(
    of(event).pipe(
      tap(validatePermissions),
      map(extractPayload),
      map(sanitizePayload),
      mergeMap(buildResult),
      map((result) => {
        if (result.success === false) {
          throw result;
        }

        return buildResponse({
          body: JSON.stringify(result.value),
        });
      }),
      catchError(buildErrorResponse)
    )
  );

exports.analyze = analyze;
