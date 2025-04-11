import { HardcodedTranslations } from './hardcodedTranslations/types';

type Payload = {
  source: string;
  partOfSpeech: string;
  sourceLanguage: string;
  targetLanguage: string;
};

const getTranslations = async (
  sourceLanguage: string,
  targetLanguage: string
): Promise<HardcodedTranslations | null> => {
  if (sourceLanguage === 'nl' && targetLanguage === 'en') {
    return (await import('./hardcodedTranslations/nl-en')).default;
  }

  return null;
};

export const hardcodeTranslate = async ({
  sourceLanguage,
  targetLanguage,
  source,
  partOfSpeech,
}: Payload): Promise<string | null> => {
  const hardcodedTranslations = await getTranslations(
    sourceLanguage,
    targetLanguage
  );

  if (!hardcodedTranslations) {
    return null;
  }

  if (!hardcodedTranslations[source]) {
    return null;
  }

  return hardcodedTranslations[source][partOfSpeech] ?? null;
};
