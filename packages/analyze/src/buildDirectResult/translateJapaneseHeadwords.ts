import { Result, Translation } from '@vocably/model';
import { extractItemTranslation } from '../extractTranslation/extractItemTranslation';
import { googleTranslate } from '../googleTranslate';
import { LexicalaSearchResultItem } from '../lexicala';
import { languageToLexicalaLanguage } from '../lexicala/lexicalaLanguageMapper';
import { JapaneseHeadwords } from './extractJapaneseHeadwords';

type Payload = {
  translation: Translation;
  japaneseHeadwords: JapaneseHeadwords;
  lexicalaItem: Pick<LexicalaSearchResultItem, 'senses'>;
};
export const translateJapaneseHeadwords = async ({
  translation,
  japaneseHeadwords,
  lexicalaItem,
}: Payload): Promise<Result<string>> => {
  const lexicalaTargetLanguage = languageToLexicalaLanguage(
    translation.targetLanguage
  );

  let translations: string | null = null;

  if (lexicalaTargetLanguage) {
    translations = extractItemTranslation(lexicalaItem, lexicalaTargetLanguage);
  }

  if (translations !== null) {
    return {
      success: true,
      value: translations,
    };
  }

  if (japaneseHeadwords.kanji) {
    const kanjiTranslationResult = await googleTranslate(
      japaneseHeadwords.kanji,
      'ja',
      translation.targetLanguage
    );

    if (kanjiTranslationResult.success === false) {
      return kanjiTranslationResult;
    }

    return {
      success: true,
      value: kanjiTranslationResult.value.target,
    };
  }

  const englishTranslation = extractItemTranslation(lexicalaItem, 'en');

  if (englishTranslation === null) {
    return {
      success: true,
      value: '',
    };
  }

  const englishTranslationResult = await googleTranslate(
    englishTranslation,
    'en',
    translation.targetLanguage
  );

  if (englishTranslationResult.success === false) {
    return englishTranslationResult;
  }

  return {
    success: true,
    // Sometimes Google translates different English words similarly
    value: [...new Set(englishTranslationResult.value.target.split(', '))].join(
      ', '
    ),
  };
};
