import { LexicalaSearchResultItem } from '../../../lexicala';
import { Result, Translation } from '@vocably/model';
import { extractHeadword } from '../../../lexicala/extractHeadword';
import { translateText } from '../../../translateText';

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

  const translationResult = await translateText(
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
