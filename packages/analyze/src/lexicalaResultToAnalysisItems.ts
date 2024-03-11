import {
  AnalysisItem,
  DirectAnalyzePayload,
  Translation,
} from '@vocably/model';
import { combineItems } from './combineItems';
import { extractJapaneseHeadwords } from './extractJapaneseHeadwords';
import { extractTranslation } from './extractTranslation';
import { fitsTheSize } from './fitsTheSize';
import { LexicalaSearchResultItem } from './lexicala';
import { lexicalaSearchResultToAnalysisItem } from './lexicala/lexicalaSearchResultToAnalysisItem';
import { normalizeHeadword } from './lexicala/normalizeHeadword';
import { lexicalaItemHasDefinitionOrCanBeTranslated } from './lexicalaItemHasDefinitionOrCanBeTranslated';

type Params = {
  lexicalaItems: LexicalaSearchResultItem[];
  payload: DirectAnalyzePayload;
  translation: Translation;
};
export const lexicalaResultToAnalysisItems = async ({
  lexicalaItems,
  payload,
  translation,
}: Params): Promise<AnalysisItem[]> => {
  if (translation.sourceLanguage === 'ja') {
    return await Promise.all(
      lexicalaItems.map(normalizeHeadword(payload.source)).map(async (item) => {
        const headwords = extractJapaneseHeadwords(item.headword);
        const translationResult = await extractTranslation(translation, item);
        return {
          source: headwords.hiragana,
          definitions: [
            `[${headwords.romaji}]`,
            ...(headwords.kanji ? [`[${headwords.kanji}]`] : []),
          ],
          partOfSpeech: item.headword.pos,
          translation: translationResult.success ? translationResult.value : '',
        };
      })
    );
  }

  return (
    await Promise.all(
      lexicalaItems
        .map(normalizeHeadword(payload.source))
        .filter(fitsTheSize(payload.source))
        .filter(lexicalaItemHasDefinitionOrCanBeTranslated(translation))
        .map(lexicalaSearchResultToAnalysisItem(translation))
    )
  ).reduce(combineItems, []);
};
