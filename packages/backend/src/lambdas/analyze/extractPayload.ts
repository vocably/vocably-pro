import {
  AnalyzePayload,
  isDirectAnalyzePayload,
  isGoogleLanguage,
  isReverseAnalyzePayload,
} from '@vocably/model';
import { APIGatewayProxyEvent } from 'aws-lambda';
import { get } from 'lodash-es';

export type BackendPayload = AnalyzePayload & {
  isPaid: boolean;
};

export const extractPayload = (event: APIGatewayProxyEvent): BackendPayload => {
  const payload = JSON.parse(event.body ?? '{}');

  if (!isDirectAnalyzePayload(payload) && !isReverseAnalyzePayload(payload)) {
    throw {
      success: false,
      errorCode: 'TRANSLATION_REQUEST_MALFORMED_PAYLOAD',
      reason: 'Unable to detect the translation payload type',
      extra: { payload },
    };
  }

  if (payload.sourceLanguage && !isGoogleLanguage(payload.sourceLanguage)) {
    throw {
      success: false,
      errorCode: 'TRANSLATION_REQUEST_UNAVAILABLE_SOURCE_LANGUAGE',
      reason: `The REQUESTED source language (${payload.sourceLanguage}) is not available.`,
    };
  }

  if (payload.targetLanguage && !isGoogleLanguage(payload.targetLanguage)) {
    throw {
      success: false,
      errorCode: 'TRANSLATION_REQUEST_UNAVAILABLE_TARGET_LANGUAGE',
      reason: `The REQUESTED source language (${payload.targetLanguage}) is not available.`,
    };
  }

  return {
    ...payload,
    isPaid: get(event, 'requestContext.authorizer.claims.cognito:groups', '')
      .split(',')
      .includes('paid'),
  };
};
