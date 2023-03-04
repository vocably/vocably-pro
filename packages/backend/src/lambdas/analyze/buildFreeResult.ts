import {
  AnalyzePayload,
  Result,
  Analysis,
  isDirectAnalyzePayload,
} from '@vocably/model';
import { cheapTranslate } from '../../cheapTranslate';

export const buildFreeResult = async (
  payload: AnalyzePayload
): Promise<Result<Analysis>> => {
  if (!isDirectAnalyzePayload(payload)) {
    return {
      success: false,
      errorCode: 'FREE_ANALYSE_NON_DIRECT_PAYLOAD',
      reason:
        'The current version of free analyze accepts only the direct payload.',
    };
  }

  if (payload.sourceLanguage === undefined) {
    return {
      success: false,
      errorCode: 'FREE_ANALYSE_SOURCE_LANGUAGE_MISSING',
      reason: 'Source language must be specified for the free analyse',
    };
  }

  const translation = await cheapTranslate(
    payload.source,
    payload.sourceLanguage,
    payload.targetLanguage
  );

  if (translation.success === false) {
    return translation;
  }

  return {
    success: true,
    value: {
      source: payload.source,
      translation: translation.value,
    },
  };
};
