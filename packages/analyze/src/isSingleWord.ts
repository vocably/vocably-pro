import { DirectAnalyzePayload } from '@vocably/model';
import { trimArticle } from '@vocably/sulna';
import { getWords } from './isOneWord';

export const isSingleWord = (payload: DirectAnalyzePayload): boolean => {
  return (
    getWords(trimArticle(payload.sourceLanguage, payload.source).source)
      .length === 1
  );
};
