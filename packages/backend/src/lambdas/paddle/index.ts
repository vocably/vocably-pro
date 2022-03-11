import { lastValueFrom, of, tap } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { buildResponse } from '../../utils/buildResponse';
import { buildErrorResponse } from '../../utils/buildErrorResponse';
import { extractBody } from './extractBody';
import { verifyCaller } from './verifyCaller';
import { extractPaddleEvent } from './extractPaddleEvent';

export const paddle = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> =>
  lastValueFrom(
    of(event).pipe(
      map(extractBody),
      tap((body) => console.info('Event body', body)),
      tap(verifyCaller),
      map(extractPaddleEvent),
      map((paddleEvent) => {
        return buildResponse({ body: JSON.stringify(paddleEvent) });
      }),
      catchError(buildErrorResponse)
    )
  );

exports.paddle = paddle;
