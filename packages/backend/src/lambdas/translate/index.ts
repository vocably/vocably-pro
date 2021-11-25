import { lastValueFrom, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { buildResponse } from '../../utils/buildResponse';
import { buildErrorResponse } from '../../utils/buildErrorResponse';

export const translate = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> =>
  lastValueFrom(
    of(event).pipe(
      map((event) => ({ time: new Date().toISOString(), event })),
      map((data) =>
        buildResponse({
          body: JSON.stringify(data),
        })
      ),
      catchError(buildErrorResponse)
    )
  );

exports.translate = translate;
