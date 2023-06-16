import { Result, Translation } from '@vocably/model';
import { googleTranslate } from '../../../googleTranslate';
import { LexicalaSearchResultItemWithNormalHeadword } from '../../../lexicala/normalizeHeadword';

export const translateItem = async (
  item: LexicalaSearchResultItemWithNormalHeadword,
  translation: Translation
): Promise<Result<string>> => {
  if (translation.sourceLanguage === translation.targetLanguage) {
    return {
      success: true,
      value: '',
    };
  }

  if (item.headword.text.toLowerCase() == translation.source.toLowerCase()) {
    return {
      success: true,
      value: translation.target,
    };
  }

  const translationResult = await googleTranslate(
    item.headword.text,
    translation.sourceLanguage,
    translation.targetLanguage
  );

  if (translationResult.success === false) {
    return translationResult;
  }

  return {
    success: true,
    value: translationResult.value.target,
  };
};
