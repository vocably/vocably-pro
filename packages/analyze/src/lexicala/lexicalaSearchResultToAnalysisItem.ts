import { AnalysisItem, Translation } from '@vocably/model';
import { addArticle } from '../addArticle';
import { extractTranslation } from '../extractTranslation';
import { getDefinitions } from './getDefinitions';
import { LexicalaSearchResultItemWithNormalHeadword } from './normalizeHeadword';

export const lexicalaSearchResultToAnalysisItem =
  (originalTranslation: Translation) =>
  async (
    item: LexicalaSearchResultItemWithNormalHeadword
  ): Promise<AnalysisItem> => {
    const translationResult = await extractTranslation(
      originalTranslation,
      item
    );
    return {
      source: addArticle(item.language, item.headword),
      definitions: getDefinitions(item.senses),
      partOfSpeech: item.headword.pos,
      translation: translationResult.success ? translationResult.value : '',
    };
  };
