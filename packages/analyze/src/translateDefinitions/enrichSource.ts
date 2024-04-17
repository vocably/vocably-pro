import { GoogleLanguage } from '@vocably/model';

export const enrichSource = (
  source: string,
  partOfSpeech: string,
  language: GoogleLanguage
) => {
  if (partOfSpeech === 'verb' && language === 'en') {
    return `to ${source}`;
  }

  if (partOfSpeech === 'verb' && language === 'nl') {
    return `te ${source}`;
  }

  return source;
};
