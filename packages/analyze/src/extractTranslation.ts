import { Result, Translation } from '@vocably/model';
import { extractItemTranslation } from './extractTranslation/extractItemTranslation';
import { translateItem } from './extractTranslation/translateItem';
import { languageToLexicalaLanguage } from './lexicala/lexicalaLanguageMapper';
import { LexicalaSearchResultItemWithNormalHeadword } from './lexicala/normalizeHeadword';

export const extractTranslation = async (
  originalTranslation: Translation,
  item: LexicalaSearchResultItemWithNormalHeadword
): Promise<Result<string>> => {
  if (
    originalTranslation.sourceLanguage === originalTranslation.targetLanguage
  ) {
    return {
      success: true,
      value: '',
    };
  }

  const lexicalaTargetLanguage = languageToLexicalaLanguage(
    originalTranslation.targetLanguage
  );

  if (lexicalaTargetLanguage === null) {
    return translateItem(item, originalTranslation);
  }

  const lexicalaTranslation = extractItemTranslation(
    item,
    lexicalaTargetLanguage
  );

  if (lexicalaTranslation !== null) {
    return {
      success: true,
      value: lexicalaTranslation,
    };
  }

  return translateItem(item, originalTranslation);
};
