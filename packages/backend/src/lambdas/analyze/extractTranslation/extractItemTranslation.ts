import {
  LexicalaSearchResultItem,
  LexicalaTranslation,
} from '../../../lexicala';
import { LexicalaLanguage } from '../../../lexicala/lexicalaLanguageMapper';

export const extractItemTranslation = (
  item: LexicalaSearchResultItem,
  targetLanguage: LexicalaLanguage
): string | null => {
  const refinedLanguage = targetLanguage === 'pt' ? 'br' : targetLanguage;

  const translations: LexicalaTranslation[] = item.senses
    .map((sense) => {
      if (!sense.translations || !sense.translations[refinedLanguage]) {
        return [];
      }

      if (Array.isArray(sense.translations[refinedLanguage])) {
        // @ts-ignore
        return sense.translations[refinedLanguage] as LexicalaTranslation[];
      }

      // @ts-ignore
      return [sense.translations[refinedLanguage] as LexicalaTranslation];
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
