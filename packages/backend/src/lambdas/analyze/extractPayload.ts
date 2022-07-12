import { APIGatewayProxyEvent } from 'aws-lambda';
import { AnalyzePayload, isLanguage } from '@vocably/model';

export const extractPayload = (event: APIGatewayProxyEvent): AnalyzePayload => {
  const payload = JSON.parse(event.body);

  if (!payload || !payload.source) {
    throw {
      success: false,
      errorCode: 'TRANSLATION_REQUEST_MISSING_PHRASE',
      reason: 'The translation phrase is missing.',
    };
  }

  if (payload.sourceLanguage && !isLanguage(payload.sourceLanguage)) {
    throw {
      success: false,
      errorCode: 'TRANSLATION_REQUEST_UNAVAILABLE_REQUESTED_LANGUAGE',
      reason: `The REQUESTED source language (${payload.sourceLanguage}) is not available.`,
    };
  }

  return payload;
};
