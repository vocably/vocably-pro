import { GoogleTTSLanguage, isGoogleTTSLanguage } from './text-to-speech';

export type AudioPronunciationPayload = {
  text: string;
  language: GoogleTTSLanguage;
};

export type AudioPronunciationResponse = {
  url: string;
};

export const isAudioPronunciationPayload = (
  payload: any
): payload is AudioPronunciationPayload => {
  return (
    !(!payload || !payload.text || !payload.language) &&
    typeof payload.text === 'string' &&
    isGoogleTTSLanguage(payload.language)
  );
};
