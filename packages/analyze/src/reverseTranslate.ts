import { GoogleLanguage, Result, Translation } from '@vocably/model';
import { aiReverseTranslate } from './aiReverseTranslate';
import { googleTranslate } from './googleTranslate';

type Payload = {
  target: string;
  sourceLanguage: GoogleLanguage;
  targetLanguage: GoogleLanguage;
};

type ValidTranslations = [Translation, ...Translation[]];

export const reverseTranslate = async (
  payload: Payload
): Promise<Result<ValidTranslations>> => {
  const aiTranslationResult = await aiReverseTranslate(payload);

  if (aiTranslationResult.success === true) {
    return aiTranslationResult;
  }

  const googleResult = await googleTranslate(
    payload.target,
    payload.targetLanguage,
    payload.sourceLanguage
  );

  if (googleResult.success === false) {
    return googleResult;
  }

  return {
    success: true,
    value: [googleResult.value],
  };
};
