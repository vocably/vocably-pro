import { APIGatewayProxyEvent } from 'aws-lambda';
import { AnalyzePayload, isGoogleLanguage } from '@vocably/model';
import { get } from 'lodash-es';

export type BackendPayload = AnalyzePayload & {
  isPaid: boolean;
};

export const extractPayload = (event: APIGatewayProxyEvent): BackendPayload => {
  const payload = JSON.parse(event.body);

  if (!payload || !payload.source) {
    throw {
      success: false,
      errorCode: 'TRANSLATION_REQUEST_MISSING_PHRASE',
      reason: 'The translation phrase is missing.',
    };
  }

  if (payload.sourceLanguage && !isGoogleLanguage(payload.sourceLanguage)) {
    throw {
      success: false,
      errorCode: 'TRANSLATION_REQUEST_UNAVAILABLE_REQUESTED_LANGUAGE',
      reason: `The REQUESTED source language (${payload.sourceLanguage}) is not available.`,
    };
  }

  payload.isPaid = get(
    event,
    'requestContext.authorizer.claims.cognito:groups',
    ''
  )
    .split(',')
    .includes('paid');

  return payload;
};
