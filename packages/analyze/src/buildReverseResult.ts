import { Result, ReverseAnalysis, ReverseAnalyzePayload } from '@vocably/model';
import { buildDirectResult } from './buildDirectResult';
import { googleTranslate } from './googleTranslate';

export const buildReverseResult = async (
  payload: ReverseAnalyzePayload
): Promise<Result<ReverseAnalysis>> => {
  const translationResult = await googleTranslate(
    payload.target,
    payload.targetLanguage,
    payload.sourceLanguage
  );

  if (translationResult.success === false) {
    return translationResult;
  }

  const directResult = await buildDirectResult({
    source: translationResult.value.target,
    sourceLanguage: payload.sourceLanguage,
    targetLanguage: payload.targetLanguage,
  });

  if (directResult.success === false) {
    return directResult;
  }

  return {
    success: true,
    value: {
      target: payload.target,
      reverseTranslation: translationResult.value,
      ...directResult.value,
    },
  };
};
