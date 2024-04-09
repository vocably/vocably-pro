import { TranslationServiceClient } from '@google-cloud/translate';

let cachedTranslationClient: TranslationServiceClient | null = null;
export const getTranslationClient = async () => {
  if (cachedTranslationClient === null) {
    const { TranslationServiceClient } = await import(
      '@google-cloud/translate'
    );
    cachedTranslationClient = new TranslationServiceClient();
  }

  return cachedTranslationClient;
};
