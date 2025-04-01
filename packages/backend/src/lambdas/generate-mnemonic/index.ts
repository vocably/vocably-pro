import { APIGatewayProxyEvent } from 'aws-lambda';
import { lastValueFrom, mergeMap, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { buildErrorResponse } from '../../utils/buildErrorResponse';
import { buildResponse } from '../../utils/buildResponse';
import { extractPayload } from './extractPayload';
import { generateMnemonic } from './generateMnemonic';

export const generateMnemonicFunction = async (
  event: APIGatewayProxyEvent
): Promise<any> =>
  lastValueFrom(
    of(event).pipe(
      map(extractPayload),
      mergeMap(async (payloadResult) => {
        if (payloadResult.success === false) {
          return payloadResult;
        }

        return generateMnemonic(payloadResult.value);
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

exports.generateMnemonic = generateMnemonicFunction;
