import { buildBulkAnalysisResult, configureAnalyzer } from '@vocably/analyze';
import {
  type APIGatewayProxyEvent,
  type APIGatewayProxyResult,
} from 'aws-lambda';
import { lastValueFrom, mergeMap, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { buildErrorResponse } from '../../utils/buildErrorResponse';
import { buildResponse } from '../../utils/buildResponse';
import { extractPayload } from './extractPayload';

configureAnalyzer({
  lexicalaHost: process.env.LEXICALA_HOST as string,
  lexicalaKey: process.env.LEXICALA_KEY as string,
  googleProjectId: process.env.GOOGLE_PROJECT_ID as string,
  nlpTranslationKey: process.env.NLP_TRANSLATION_KEY as string,
  nlpTranslationHost: process.env.NLP_TRANSLATION_HOST as string,
  openaiApiKey: process.env.OPENAI_API_KEY as string,
});

export const bulkAnalyze = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> =>
  lastValueFrom(
    of(event).pipe(
      map(extractPayload),
      mergeMap((payload) => {
        return buildBulkAnalysisResult(payload);
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

exports.bulkAnalize = bulkAnalyze;
