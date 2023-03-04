import { lastValueFrom, mergeMap, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { buildResponse } from '../../utils/buildResponse';
import { buildErrorResponse } from '../../utils/buildErrorResponse';
import { buildResult } from './buildResult';
import { extractPayload } from './extractPayload';
import { sanitizePayload } from './sanitizePayload';
import { buildFreeResult } from './buildFreeResult';

export const analyze = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> =>
  lastValueFrom(
    of(event).pipe(
      map(extractPayload),
      map(sanitizePayload),
      mergeMap((payload) => {
        return buildResult(payload);
      }),
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
