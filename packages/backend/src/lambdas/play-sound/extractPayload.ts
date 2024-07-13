import {
  AudioPronunciationPayload,
  isAudioPronunciationPayload,
} from '@vocably/model';
import { APIGatewayProxyEvent } from 'aws-lambda';

export const extractPayload = (
  event: APIGatewayProxyEvent
): AudioPronunciationPayload => {
  const payload = event.queryStringParameters;

  if (!isAudioPronunciationPayload(payload)) {
    throw {
      success: false,
      errorCode: 'PLAY_SOUND_REQUEST_MALFORMED_PAYLOAD',
      reason: 'Unable to detect the play sound payload type',
      extra: { payload },
    };
  }

  return payload;
};
