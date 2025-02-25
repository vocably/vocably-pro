import { APIGatewayProxyEvent } from 'aws-lambda';
import { lastValueFrom, mergeMap, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { buildErrorResponse } from '../../utils/buildErrorResponse';
import { buildResponse } from '../../utils/buildResponse';
import { recalibrateNotifications } from './recalibrateNotifications';

export const recalibrateNotificationsLambdaFunction = async (
  event: APIGatewayProxyEvent
): Promise<any> =>
  lastValueFrom(
    of(event).pipe(
      mergeMap(recalibrateNotifications),
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

exports.recalibrateNotifications = recalibrateNotificationsLambdaFunction;
