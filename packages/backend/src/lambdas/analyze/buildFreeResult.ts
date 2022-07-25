import { AnalyzePayload, Result, Analysis } from '@vocably/model';
import { cheapTranslate } from '../../cheapTranslate';

export const buildFreeResult = async (
  payload: AnalyzePayload
): Promise<Result<Analysis>> => {
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
