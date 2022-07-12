import {
  LexicalaSearchResultItem,
  LexicalaTranslation,
} from '../../../lexicala';
import { LexicalaLanguage } from '../../../lexicala/lexicalaLanguageMapper';

export const extractItemTranslation = (
  item: LexicalaSearchResultItem,
  targetLanguage: LexicalaLanguage
): string | null => {
  const translations: LexicalaTranslation[] = item.senses
    .map((sense) => {
      if (!sense.translations || !sense.translations[targetLanguage]) {
        return [];
      }

      if (Array.isArray(sense.translations[targetLanguage])) {
        // @ts-ignore
        return sense.translations[targetLanguage] as LexicalaTranslation[];
      }

      // @ts-ignore
      return [sense.translations[targetLanguage] as LexicalaTranslation];
    })
    .flat();

  if (translations.length === 0) {
    return null;
  }

  return translations.reduce((acc, translation) => {
    if (acc.length > 0) {
      return `${acc}, ${translation.text}`;
    }

    return translation.text;
  }, '');
};
