import { AudioPronunciationPayload, Result } from '@vocably/model';
import { api } from './api';

const playDataUrl = async (dataUrl: string): Promise<Result<true>> => {
  return await new Promise((resolve) => {
    try {
      const audio = new Audio(dataUrl);
      audio.addEventListener('ended', () => {
        resolve({
          success: true,
          value: true,
        });
      });
      audio.play().catch((e) => {
        resolve({
          success: false,
          errorCode: 'UNABLE_TO_PLAY_AUDIO_DATA_URL',
          reason: 'An error occurred while playing the offscreen audio',
          extra: e,
        });
      });
    } catch (e) {
      resolve({
        success: false,
        errorCode: 'UNABLE_TO_PLAY_AUDIO_DATA_URL',
        reason: 'An error occurred while playing the offscreen audio',
        extra: e,
      });
    }
  });
};

export const playAudioPronunciation = async (
  payload: AudioPronunciationPayload
): Promise<Result<true>> => {
  const canPlayOffScreen = await api.canPlayOffScreen();
  if (canPlayOffScreen) {
    return api.playAudioPronunciation(payload);
  }

  const result = await api.getAudioPronunciation(payload);

  if (result.success === false) {
    return result;
  }

  return playDataUrl(result.value.url);
};
