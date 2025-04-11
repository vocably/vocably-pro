import { TranslationServiceClient } from '@google-cloud/translate';
import { GoogleLanguage, Result, Translation } from '@vocably/model';
import { config } from './config';
import {
  GoogleTranslateLanguage,
  googleTranslateLanguageToLanguage,
  languageToGoogleTranslateLanguage,
} from './translateText/googleLanguageMapper';

const translationClient = new TranslationServiceClient();
const location = 'global';

export const googleTranslate = async (
  source: string,
  sourceLanguage: GoogleLanguage | null = null,
  targetLanguage: GoogleLanguage
): Promise<Result<Translation>> => {
  if (sourceLanguage === targetLanguage) {
    return {
      success: true,
      value: {
        source,
        sourceLanguage,
        targetLanguage,
        target: source,
      },
    };
  }

  const request = {
    parent: `projects/${config.googleProjectId}/locations/${location}`,
    contents: [source],
    mimeType: 'text/plain',
    targetLanguageCode: targetLanguage,
    sourceLanguageCode:
      sourceLanguage === null
        ? null
        : languageToGoogleTranslateLanguage(sourceLanguage),
  };

  try {
    const [response] = await translationClient.translateText(request);

    const translations = response.translations ?? [];

    if (translations.length === 0) {
      return {
        success: false,
        errorCode: 'AS_IS_TRANSLATION_UNABLE_TO_TRANSLATE',
        reason: `Google Translation API can't find a translation for the text "${source}"`,
      };
    }

    const translation = translations[0];
    const mayBeDetected =
      sourceLanguage ??
      googleTranslateLanguageToLanguage(
        translation.detectedLanguageCode as GoogleTranslateLanguage
      );

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
        target: translation.translatedText ?? '',
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
