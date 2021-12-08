export const AvailableLanguages = [
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

export type AvailableLanguage = typeof AvailableLanguages[number];

export const isAvailableLanguage = (
  language: string
): language is AvailableLanguage =>
  AvailableLanguages.indexOf(language as AvailableLanguage) !== -1;
