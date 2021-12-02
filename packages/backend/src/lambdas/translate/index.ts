import { lastValueFrom, mergeMap, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { buildResponse } from '../../utils/buildResponse';
import { buildErrorResponse } from '../../utils/buildErrorResponse';
import { translateText } from './translateText';

export const translate = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> =>
  lastValueFrom(
    of(event).pipe(
      mergeMap(translateText),
      map((data) =>
        buildResponse({
          body: JSON.stringify(data),
        })
      ),
      catchError(buildErrorResponse)
    )
  );

exports.translate = translate;
