import { AnalyzePayload, isDirectAnalyzePayload } from '@vocably/model';
import { homepageText } from '../../homepage-text';

export const validatePayload = (payload: AnalyzePayload): void => {
  if (!isDirectAnalyzePayload(payload)) {
    throw {
      success: false,
      errorCode: 'WWW_ANALYZE_NOT_DIRECT_REQUEST',
      reason: `The requested payload is not the direct analyze.`,
    };
  }

  if (payload.sourceLanguage !== 'en') {
    throw {
      success: false,
      errorCode: 'WWW_ANALYZE_LANGUAGE_NOT_SUPPORTED',
      reason: `The REQUESTED source language (${payload.sourceLanguage}) is not available.`,
    };
  }

  if (!homepageText.includes(payload.source.toLowerCase())) {
    throw {
      success: false,
      errorCode: 'WWW_ANALYZE_SOURCE_IS_NOT_PRESENT_AT_THE_HOMEPAGE',
      reason: 'The payload source is not present on the homepage.',
    };
  }
};
