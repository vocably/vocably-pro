import { LexicalaSearchResultItem, LexicalaTranslation } from '../lexicala';
import { LexicalaLanguage } from '../lexicala/lexicalaLanguageMapper';

export const extractItemTranslation = (
  item: Pick<LexicalaSearchResultItem, 'senses'>,
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

  return [...new Set(translations.map((translation) => translation.text))].join(
    ', '
  );
};
