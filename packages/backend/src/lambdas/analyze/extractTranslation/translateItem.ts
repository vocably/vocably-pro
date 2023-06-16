import { Result, Translation } from '@vocably/model';
import { googleTranslate } from '../../../googleTranslate';
import { LexicalaSearchResultItem } from '../../../lexicala';
import { extractHeadword } from '../../../lexicala/extractHeadword';

export const translateItem = async (
  item: LexicalaSearchResultItem,
  translation: Translation
): Promise<Result<string>> => {
  if (translation.sourceLanguage === translation.targetLanguage) {
    return {
      success: true,
      value: '',
    };
  }

  const headword = extractHeadword(item);
  if (headword.text.toLowerCase() == translation.source.toLowerCase()) {
    return {
      success: true,
      value: translation.target,
    };
  }

  const translationResult = await googleTranslate(
    headword.text,
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
