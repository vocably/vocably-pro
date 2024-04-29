import { AnalysisItem, Translation } from '@vocably/model';

export const translationToAnalysisItem = (
  translation: Translation
): AnalysisItem => {
  return {
    source: translation.source,
    translation: translation.target,
    partOfSpeech: translation.partOfSpeech,
    definitions: [],
    examples: [],
  };
};
