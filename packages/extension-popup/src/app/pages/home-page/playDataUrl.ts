import { Result } from '@vocably/model';

export const playDataUrl = async (dataUrl: string): Promise<Result<true>> => {
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
