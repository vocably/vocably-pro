import { Phrase, Translation, VocablyErrorCode } from '@vocably/api-types';
import { Result } from '../../utils/result';
import { APIGatewayProxyEvent } from 'aws-lambda';
import { translateText } from '../../translateText';

export const buildResult = async (
  event: APIGatewayProxyEvent
): Promise<Result<Translation>> => {
  const phrase: Phrase = JSON.parse(event.body);

  if (!phrase || !phrase.phrase) {
    return {
      success: false,
      errorCode: VocablyErrorCode.TRANSLATION_REQUEST_MISSING_PHRASE,
      reason: 'The translation phrase is missing.',
    };
  }

  const asIsTranslationResult = await translateText(phrase.phrase);
  if (asIsTranslationResult.success === false) {
    return asIsTranslationResult;
  }

  return {
    success: true,
    value: {
      text: asIsTranslationResult.value.text,
      language: asIsTranslationResult.value.detectedLanguage,
      cards: [],
    },
  };
};
