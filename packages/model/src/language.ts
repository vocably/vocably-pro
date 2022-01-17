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

export const isLexicalaLanguage = (
  language: string
): language is LexicalaLanguage =>
  LexicalaLanguages.indexOf(language as LexicalaLanguage) !== -1;
