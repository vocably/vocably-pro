import { isDirectAnalyzePayload } from '@vocably/model';
import { BackendPayload } from './extractPayload';
import { sanitizeSource } from './sanitizeSource';

export const sanitizePayload = (payload: BackendPayload): BackendPayload => {
  if (isDirectAnalyzePayload(payload)) {
    return {
      ...payload,
      source: sanitizeSource(payload.source),
    };
  }

  return payload;
};
