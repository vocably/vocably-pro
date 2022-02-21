import { TranslationServiceClient } from '@google-cloud/translate';
import { Result, Translation } from '@vocably/model';

const translationClient = new TranslationServiceClient();
const location = 'global';

const targetLanguage = 'en';

export const translateText = async (
  source: string,
  sourceLanguage: string | null = null
): Promise<Result<Translation>> => {
  const request = {
    parent: `projects/${process.env.GOOGLE_PROJECT_ID}/locations/${location}`,
    contents: [source],
    mimeType: 'text/plain',
    targetLanguageCode: targetLanguage,
    sourceLanguageCode: sourceLanguage,
  };

  try {
    const [response] = await translationClient.translateText(request);

    if (response.translations.length === 0) {
      return {
        success: false,
        errorCode: 'AS_IS_TRANSLATION_UNABLE_TO_TRANSLATE',
        reason: `Google Translation API can't find a translation for the text "${source}"`,
      };
    }

    const translation = response.translations[0];
    const mayBeDetected = sourceLanguage ?? translation.detectedLanguageCode;

    if (!mayBeDetected) {
      return {
        success: false,
        errorCode: 'AS_IS_TRANSLATION_UNDETECTABLE_LANGUAGE',
        reason: `Google Translation API can't detect language for the text "${source}"`,
      };
    }

    return {
      success: true,
      value: {
        source,
        sourceLanguage: mayBeDetected,
        target: translation.translatedText,
        targetLanguage,
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
