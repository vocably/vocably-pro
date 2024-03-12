import {
  AnalysisItem,
  DirectAnalysis,
  Result,
  Translation,
} from '@vocably/model';
import { isRomaji, toRomaji } from 'wanakana';
import { lexicala } from '../lexicala';
import { normalizeHeadword } from '../lexicala/normalizeHeadword';
import { extractJapaneseHeadwords } from './extractJapaneseHeadwords';
import { translateJapaneseHeadwords } from './translateJapaneseHeadwords';

const buildTranslationResult = (translation: Translation): DirectAnalysis => {
  const romaji = toRomaji(translation.source);
  let definitions: string[] | undefined;

  if (isRomaji(romaji)) {
    definitions = [`[${romaji}]`];
  }

  return {
    source: translation.source,
    translation,
    items: [
      {
        source: translation.source,
        translation: translation.target,
        definitions,
      },
    ],
  };
};

type Payload = {
  translation: Translation;
};

export const buildDirectJapaneseResult = async ({
  translation,
}: Payload): Promise<Result<DirectAnalysis>> => {
  const lexicalaResult = await lexicala('ja', translation.source, {
    analyzed: 'false',
    morph: 'false',
  });

  if (lexicalaResult.success === false || lexicalaResult.value.length === 0) {
    return {
      success: true,
      value: buildTranslationResult(translation),
    };
  }

  const analysisItemsResults: Result<AnalysisItem>[] = await Promise.all(
    lexicalaResult.value
      .map(normalizeHeadword(translation.source))
      .map(async (lexicalaItem): Promise<Result<AnalysisItem>> => {
        const japaneseHeadwords = extractJapaneseHeadwords(
          lexicalaItem.headword
        );
        const translationResult = await translateJapaneseHeadwords({
          translation,
          japaneseHeadwords,
          lexicalaItem,
        });

        if (translationResult.success === false) {
          return translationResult;
        }

        const definitions = [`[${japaneseHeadwords.romaji}]`];

        let source = '';
        if (japaneseHeadwords.kanji) {
          source = japaneseHeadwords.kanji;
        }

        if (source.length > 0) {
          source += ` [ ${japaneseHeadwords.hiragana} ]`;
        } else {
          source = japaneseHeadwords.hiragana;
        }

        return {
          success: true,
          value: {
            source,
            definitions,
            partOfSpeech: lexicalaItem.headword.pos,
            translation: translationResult.value,
          },
        };
      })
  );

  const analysisItems: AnalysisItem[] = analysisItemsResults
    .filter((r) => r.success === true)
    // @ts-ignore
    .map((r) => r.value);

  if (analysisItems.length === 0) {
    return {
      success: true,
      value: buildTranslationResult(translation),
    };
  }

  return {
    success: true,
    value: {
      source: translation.source,
      translation,
      items: analysisItems,
    },
  };
};
