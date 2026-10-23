const LAST_LANGUAGE_KEY = 'deckStorage.lastLanguage';

export const getLastLanguage = (): string | null =>
  localStorage.getItem(LAST_LANGUAGE_KEY);

export const setLastLanguage = (language: string) =>
  localStorage.setItem(LAST_LANGUAGE_KEY, language);
