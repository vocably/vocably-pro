import { GoogleLanguage, Result, Translation } from '@vocably/model';
import { googleTranslate } from './googleTranslate';
import { isContextPayload, translateFromContext } from './translateFromContext';

type Payload = {
  source: string;
  targetLanguage: GoogleLanguage;
  sourceLanguage?: GoogleLanguage;
  context?: string;
};

export const translate = async (
  payload: Payload
): Promise<Result<Translation>> => {
  if (!isContextPayload(payload)) {
    return googleTranslate(payload.source, null, payload.targetLanguage);
  }

  const contextTranslation = await translateFromContext(payload);
  if (contextTranslation.success === true) {
    return contextTranslation;
  }

  return googleTranslate(
    payload.source,
    payload.sourceLanguage,
    payload.targetLanguage
  );
};
