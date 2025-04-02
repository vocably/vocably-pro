import {
  GenerateMnemonicPayload,
  isGoogleLanguage,
  Result,
} from '@vocably/model';
import { APIGatewayProxyEvent } from 'aws-lambda';

export const extractPayload = (
  event: APIGatewayProxyEvent
): Result<GenerateMnemonicPayload> => {
  try {
    const payload = JSON.parse(event.body ?? '{}');

    if (
      !payload.sourceLanguage ||
      !payload.targetLanguage ||
      !payload.card ||
      !isGoogleLanguage(payload.sourceLanguage) ||
      !isGoogleLanguage(payload.targetLanguage)
    ) {
      return {
        success: false,
        errorCode: 'FUCKING_ERROR',
        reason: 'The generate-mnemonic payload is not valid.',
        extra: payload,
      };
    }

    return {
      success: true,
      value: payload,
    };
  } catch (e) {
    return {
      success: false,
      errorCode: 'FUCKING_ERROR',
      reason: 'Unable to parse payload.',
      extra: e,
    };
  }
};
