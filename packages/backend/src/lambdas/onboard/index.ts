import { APIGatewayProxyEvent } from 'aws-lambda';
import { lastValueFrom, mergeMap, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { buildErrorResponse } from '../../utils/buildErrorResponse';
import { buildResponse } from '../../utils/buildResponse';
import { extractUsefulData } from './extractUsefulData';
import { handleAction } from './handleAction';

export const onboard = async (event: APIGatewayProxyEvent): Promise<any> =>
  lastValueFrom(
    of(event).pipe(
      map(extractUsefulData),
      mergeMap((usefulDataResult) => {
        if (usefulDataResult.success === false) {
          throw usefulDataResult;
        }
        return handleAction(usefulDataResult.value);
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

exports.languageSet = onboard;
