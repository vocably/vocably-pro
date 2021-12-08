export const Errors = [
  'AS_IS_TRANSLATION_REQUEST_EXCEPTION',
  'AS_IS_TRANSLATION_UNABLE_TO_TRANSLATE',
  'TRANSLATION_REQUEST_MISSING_PHRASE',
] as const;

export type VocablyErrorCode = typeof Errors[number];
