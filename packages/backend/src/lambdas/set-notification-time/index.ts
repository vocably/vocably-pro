import { APIGatewayProxyEvent } from 'aws-lambda';
import { lastValueFrom, mergeMap, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { buildErrorResponse } from '../../utils/buildErrorResponse';
import { buildResponse } from '../../utils/buildResponse';
import { setNotificationTime } from './setNotificationTime';

export const setNotificationTimeLambdaFunction = async (
  event: APIGatewayProxyEvent
): Promise<any> =>
  lastValueFrom(
    of(event).pipe(
      mergeMap(setNotificationTime),
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

exports.setNotificationTime = setNotificationTimeLambdaFunction;
