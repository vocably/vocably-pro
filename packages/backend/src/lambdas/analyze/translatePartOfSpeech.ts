import { GoogleLanguage, Result, Translation } from '@vocably/model';
import { googleTranslate } from '../../googleTranslate';

type Options = {
  partOfSpeech: string;
  source: string;
  originalTranslation: Translation;
  sourceWithArticle?: string;
};

const noArticles: GoogleLanguage[] = [
  'be',
  'zh',
  'zh-TW',
  'cs',
  'es',
  'fi',
  'ka',
  'ja',
  'ko',
  'lv',
  'lt',
  'pl',
  'ru',
  'sr',
  'hr',
  'sk',
  'sl',
  'sw',
  'ta',
  'th',
];

export const translatePartOfSpeech = ({
  source,
  partOfSpeech,
  originalTranslation,
  sourceWithArticle,
}: Options): Promise<Result<Translation>> => {
  if (
    originalTranslation.sourceLanguage === 'en' &&
    noArticles.includes(originalTranslation.targetLanguage) &&
    partOfSpeech === 'noun'
  ) {
    return googleTranslate(
      `a ${source}`,
      originalTranslation.sourceLanguage,
      originalTranslation.targetLanguage
    );
  }

  if (
    originalTranslation.sourceLanguage === 'en' &&
    noArticles.includes(originalTranslation.targetLanguage) &&
    partOfSpeech === 'verb'
  ) {
    return googleTranslate(
      `to ${source}`,
      originalTranslation.sourceLanguage,
      originalTranslation.targetLanguage
    );
  }

  if (
    originalTranslation.sourceLanguage === 'nl' &&
    partOfSpeech === 'noun' &&
    noArticles.includes(originalTranslation.targetLanguage)
  ) {
    return googleTranslate(
      sourceWithArticle ? sourceWithArticle : `een ${source}`,
      originalTranslation.sourceLanguage,
      originalTranslation.targetLanguage
    );
  }

  if (
    originalTranslation.sourceLanguage === 'nl' &&
    partOfSpeech === 'verb' &&
    noArticles.includes(originalTranslation.targetLanguage)
  ) {
    return googleTranslate(
      `te ${source}`,
      originalTranslation.sourceLanguage,
      originalTranslation.targetLanguage
    );
  }

  if (source.toLowerCase() === originalTranslation.source.toLowerCase()) {
    return Promise.resolve({
      success: true,
      value: originalTranslation,
    });
  }

  return googleTranslate(
    source,
    originalTranslation.sourceLanguage,
    originalTranslation.targetLanguage
  );
};
