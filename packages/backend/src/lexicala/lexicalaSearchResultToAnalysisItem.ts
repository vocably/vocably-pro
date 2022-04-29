import { LexicalaSearchResultItem } from '../lexicala';
import { AnalysisItem } from '@vocably/model';

export const lexicalaSearchResultToAnalysisItem = (
  result: LexicalaSearchResultItem
): AnalysisItem => {
  const headword = Array.isArray(result.headword)
    ? result.headword[0]
    : result.headword;
  return {
    source: headword.text,
    definitions: result.senses
      .filter((s) => s.definition)
      .map((s) => s.definition),
    partOfSpeech: headword.pos,
  };
};
