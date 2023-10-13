import { Result, Translation } from '@vocably/model';
import { LexicalaSearchResultItemWithNormalHeadword } from '../../../lexicala/normalizeHeadword';
import { addArticle } from '../addArticle';
import { translatePartOfSpeech } from '../translatePartOfSpeech';

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

  const translationResult = await translatePartOfSpeech({
    source: item.headword.text,
    partOfSpeech: item.headword.pos,
    originalTranslation: translation,
    sourceWithArticle: addArticle(item.language, item.headword),
  });

  if (translationResult.success === false) {
    return translationResult;
  }

  return {
    success: true,
    value: translationResult.value.target,
  };
};
