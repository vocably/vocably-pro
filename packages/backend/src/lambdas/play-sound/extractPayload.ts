import {
  AnalyzePayload,
  isPlaySoundPayload,
  PlaySoundPayload,
} from '@vocably/model';
import { APIGatewayProxyEvent } from 'aws-lambda';

export type BackendPayload = AnalyzePayload & {
  isPaid: boolean;
};

export const extractPayload = (
  event: APIGatewayProxyEvent
): PlaySoundPayload => {
  const payload = event.queryStringParameters;

  if (!isPlaySoundPayload(payload)) {
    throw {
      success: false,
      errorCode: 'PLAY_SOUND_REQUEST_MALFORMED_PAYLOAD',
      reason: 'Unable to detect the play sound payload type',
      extra: { payload },
    };
  }

  return payload;
};
