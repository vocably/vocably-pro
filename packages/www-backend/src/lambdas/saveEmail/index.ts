import { lastValueFrom, mergeMap, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { buildResponse } from '../../utils/buildResponse';
import { buildErrorResponse } from '../../utils/buildErrorResponse';

export const saveEmail = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> =>
  lastValueFrom(
    of(event).pipe(
      mergeMap(async () => {
        return buildResponse({
          body: JSON.stringify({ success: true }),
        });
      }),
      catchError(buildErrorResponse)
    )
  );

exports.saveEmail = saveEmail;
