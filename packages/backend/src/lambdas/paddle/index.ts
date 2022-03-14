import { lastValueFrom, of, switchMap, tap } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { buildResponse } from '../../utils/buildResponse';
import { buildErrorResponse } from '../../utils/buildErrorResponse';
import { extractBody } from './extractBody';
import { verifyCaller } from './verifyCaller';
import { extractPaddleEvent } from './extractPaddleEvent';
import { handleEvent } from './handleEvent';

export const paddle = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> =>
  lastValueFrom(
    of(event).pipe(
      map(extractBody),
      tap((body) => console.info('Event body', body)),
      tap(verifyCaller),
      map(extractPaddleEvent),
      switchMap(handleEvent),
      map(() => {
        return buildResponse({});
      }),
      catchError(buildErrorResponse)
    )
  );

exports.paddle = paddle;
