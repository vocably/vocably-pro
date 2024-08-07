import {
  AudioPronunciationPayload,
  AudioPronunciationResponse,
  Result,
} from '@vocably/model';
import { request } from './restClient';

export const playSound = async (
  payload: AudioPronunciationPayload
): Promise<Result<AudioPronunciationResponse>> => {
  try {
    return await request('/audio?' + new URLSearchParams(payload), {
      method: 'GET',
    });
  } catch (e) {
    return {
      success: false,
      errorCode: 'API_TRANSLATION_REQUEST_FAILED',
      reason: 'The translation request has failed.',
      extra: e,
    };
  }
};
