import {
  AnalyzePayload,
  Result,
  Analysis,
  Translation,
  isDirectAnalyzePayload,
} from '@vocably/model';
import { googleTranslate } from '../../googleTranslate';
import { lexicala } from '../../lexicala';
import { languageToLexicalaLanguage } from '../../lexicala/lexicalaLanguageMapper';
import { lexicalaSearchResultToAnalysisItem } from '../../lexicala/lexicalaSearchResultToAnalysisItem';
import { trimArticle } from './trimArticle';
import { buildDirectResult } from './buildDirectResult';
import { buildReverseResult } from './buildReverseResult';

export const buildResult = async (
  payload: AnalyzePayload
): Promise<Result<Analysis>> => {
  if (isDirectAnalyzePayload(payload)) {
    return buildDirectResult(payload);
  } else {
    return buildReverseResult(payload);
  }
};
