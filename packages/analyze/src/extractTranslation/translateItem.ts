import { isChatGPTLanguage, Result, Translation } from '@vocably/model';
import { addArticle } from '../addArticle';
import { joinDefinitions } from '../joinDefinitions';
import { getDefinitions } from '../lexicala/getDefinitions';
import { LexicalaSearchResultItemWithNormalHeadword } from '../lexicala/normalizeHeadword';
import { translateDefinitions } from '../translateDefinitions';
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

  const definitions = getDefinitions(item.senses);
  if (
    definitions.length > 0 &&
    isChatGPTLanguage(translation.sourceLanguage) &&
    isChatGPTLanguage(translation.targetLanguage)
  ) {
    const translationResult = await translateDefinitions({
      // @ts-ignore
      sourceLanguage: translation.sourceLanguage,
      // @ts-ignore
      targetLanguage: translation.targetLanguage,
      source: item.headword.text,
      partOfSpeech: item.headword.pos,
      definitions,
    });

    if (translationResult.success === true) {
      return {
        success: true,
        value: joinDefinitions(
          translationResult.value,
          translation.targetLanguage
        ),
      };
    }
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
