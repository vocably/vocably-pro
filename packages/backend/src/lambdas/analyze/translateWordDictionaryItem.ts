import { DirectAnalyzePayload, Translation } from "@vocably/model";
import { googleTranslate } from "../../googleTranslate";

type TranslateOptions = {
  source: string;
  partOfSpeech: string;
  originalTranslation: Translation;
  payload: DirectAnalyzePayload;
}
export const translateWordDictionaryItem = async ({source, originalTranslation, payload}: TranslateOptions): Promise<string> => {
  if (payload.sourceLanguage === payload.targetLanguage) {
    return '';
  }

  if (source.toLowerCase() === originalTranslation.source.toLowerCase()) {
    return originalTranslation.target;
  }

  const translationResult = await googleTranslate(
    source,
    payload.sourceLanguage,
    payload.targetLanguage,
  );

  if (translationResult.success === false) {
    return '';
  }

  return translationResult.value.target;
}
