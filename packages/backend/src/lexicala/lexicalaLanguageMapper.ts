import { Language } from '@vocably/model';

export const LexicalaLanguages = [
  'ar',
  'br',
  'cs',
  'de',
  'dk',
  'el',
  'en',
  'es',
  'fr',
  'he',
  'hi',
  'it',
  'ja',
  'ko',
  'la',
  'nl',
  'no',
  'pl',
  'pt',
  'ru',
  'sv',
  'th',
  'tr',
  'tw',
  'zh',
] as const;

export type LexicalaLanguage = typeof LexicalaLanguages[number];

export const languageToLexicalaLanguage = (
  language: Language
): LexicalaLanguage | null => {
  if (language === 'zh-TW') {
    return 'tw';
  }

  if (language === 'da') {
    return 'dk';
  }

  return (
    LexicalaLanguages.find(
      (lexicalaLanguage) => lexicalaLanguage === language
    ) ?? null
  );
};
