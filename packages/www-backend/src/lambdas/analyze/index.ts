import { buildResult, configureAnalyzer } from '@vocably/analyze';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { lastValueFrom, mergeMap, of, tap } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { buildErrorResponse } from '../../utils/buildErrorResponse';
import { buildResponse } from '../../utils/buildResponse';
import { extractPayload } from './extractPayload';
import { sanitizePayload } from './sanitizePayload';
import { validatePayload } from './validatePayload';

configureAnalyzer({
  lexicalaHost: process.env.LEXICALA_HOST,
  lexicalaKey: process.env.LEXICALA_KEY,
  googleProjectId: process.env.GOOGLE_PROJECT_ID,
  nlpTranslationKey: process.env.NLP_TRANSLATION_KEY,
  nlpTranslationHost: process.env.NLP_TRANSLATION_HOST,
});

export const analyze = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> =>
  lastValueFrom(
    of(event).pipe(
      map(extractPayload),
      map(sanitizePayload),
      tap(validatePayload),
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
