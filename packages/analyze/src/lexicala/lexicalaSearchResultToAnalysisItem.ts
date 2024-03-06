import { AnalysisItem, Translation } from '@vocably/model';
import { addArticle } from '../addArticle';
import { extractTranslation } from '../extractTranslation';
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
      definitions: item.senses
        .slice(0, 3)
        .filter((s) => s.definition)
        .map((s) => s.definition),
      partOfSpeech: item.headword.pos,
      translation: translationResult.success ? translationResult.value : '',
    };
  };
