import { GoogleTTSLanguage, isGoogleTTSLanguage } from './text-to-speech';

export type PlaySoundPayload = {
  text: string;
  language: GoogleTTSLanguage;
};

export const isPlaySoundPayload = (
  payload: any
): payload is PlaySoundPayload => {
  return (
    !(!payload || !payload.text || !payload.language) &&
    typeof payload.text === 'string' &&
    isGoogleTTSLanguage(payload.language)
  );
};
