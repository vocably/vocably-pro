import { DirectAnalyzePayload, Translation } from '@vocably/model';
import { translatePartOfSpeech } from './translatePartOfSpeech';

type TranslateOptions = {
  source: string;
  partOfSpeech: string;
  originalTranslation: Translation;
  payload: DirectAnalyzePayload;
};
export const translateWordDictionaryItem = async ({
  source,
  partOfSpeech,
  originalTranslation,
  payload,
}: TranslateOptions): Promise<string> => {
  if (payload.sourceLanguage === payload.targetLanguage) {
    return '';
  }

  const translationResult = await translatePartOfSpeech({
    source,
    partOfSpeech,
    originalTranslation: originalTranslation,
  });

  if (translationResult.success === false) {
    return '';
  }

  return translationResult.value.target;
};
