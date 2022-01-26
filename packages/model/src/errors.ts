export const Errors = [
  'AS_IS_TRANSLATION_REQUEST_EXCEPTION',
  'AS_IS_TRANSLATION_UNABLE_TO_TRANSLATE',
  'TRANSLATION_REQUEST_MISSING_PHRASE',
  'TRANSLATION_REQUEST_UNAVAILABLE_REQUESTED_LANGUAGE',
  'TRANSLATION_REQUEST_UNAVAILABLE_DETECTED_LANGUAGE',
  'CARD_COLLECTION_UPDATE_MISSING_CARD',
  'LANGUAGE_DECK_SAVE_ERROR',
  'LANGUAGE_DECK_LOAD_ERROR',
  'LANGUAGE_DECK_DELETE_ERROR',
  'LANGUAGE_DECKS_LIST_ERROR',
  'LEXICALA_UNSUCCESSFUL_FETCH',
  'LEXICALA_UNCAUGHT_ERROR',
  'HTTP_REQUEST_NOT_OK',
  'HTTP_REQUEST_UNCAUGHT',
  'API_TRANSLATION_REQUEST_FAILED',
  'EXTENSION_SERVICE_WORKER_ERROR_CREATING_CARDS',
  'API_REQUEST_NOT_OK',
  'API_REQUEST_UNHANDLED_ERROR',
  'AUTH_INVALID_USER_CREDENTIALS',
] as const;

export type VocablyErrorCode = typeof Errors[number];