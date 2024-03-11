import { Result, Translation } from '@vocably/model';
import { googleTranslate } from '../googleTranslate';
import { JapaneseHeadwords } from './extractJapaneseHeadwords';

type Payload = {
  translation: Translation;
  japaneseHeadwords: JapaneseHeadwords;
};
export const translateJapaneseHeadwords = async ({
  translation,
  japaneseHeadwords,
}: Payload): Promise<Result<string>> => {
  if (Object.values(japaneseHeadwords).includes(translation.source)) {
    return {
      success: true,
      value: translation.target,
    };
  }

  const translationResult = await googleTranslate(
    japaneseHeadwords.kanji ??
      japaneseHeadwords.hiragana ??
      japaneseHeadwords.romaji,
    'ja',
    translation.targetLanguage
  );

  if (translationResult.success === false) {
    return translationResult;
  }

  return {
    success: true,
    value: translationResult.value.target,
  };
};
