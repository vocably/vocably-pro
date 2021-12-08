import { TranslationServiceClient } from '@google-cloud/translate';
import { Result } from './utils/result';

const translationClient = new TranslationServiceClient();
const location = 'global';

type Translation = {
  text: string;
  detectedLanguage: string;
};

export const translateText = async (
  text: string
): Promise<Result<Translation>> => {
  const request = {
    parent: `projects/${process.env.GOOGLE_PROJECT_ID}/locations/${location}`,
    contents: [text],
    mimeType: 'text/plain',
    targetLanguageCode: 'en',
  };

  try {
    const [response] = await translationClient.translateText(request);

    if (response.translations.length === 0) {
      return {
        success: false,
        errorCode: 'AS_IS_TRANSLATION_UNABLE_TO_TRANSLATE',
        reason: `Google Translation API can't find a translation for the text "${text}"`,
      };
    }

    const translation = response.translations[0];

    return {
      success: true,
      value: {
        detectedLanguage: translation.detectedLanguageCode,
        text: translation.translatedText,
      },
    };
  } catch (e) {
    return {
      success: false,
      errorCode: 'AS_IS_TRANSLATION_REQUEST_EXCEPTION',
      reason: `An error during the text translation has occurred.`,
      extra: e,
    };
  }
};
