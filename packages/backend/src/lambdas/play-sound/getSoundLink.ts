import { PlaySoundPayload, Result } from '@vocably/model';

export const getSoundLink = async (
  payload: PlaySoundPayload
): Promise<Result<string>> => {
  return {
    success: true,
    value: `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(
      payload.text
    )}&tl=${payload.language}&client=tw-ob`,
  };
};
