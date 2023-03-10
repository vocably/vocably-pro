import { sanitizeSource } from './sanitizeSource';
import { BackendPayload } from './extractPayload';
import { isDirectAnalyzePayload } from '@vocably/model';

export const sanitizePayload = (payload: BackendPayload): BackendPayload => {
  if (isDirectAnalyzePayload(payload)) {
    return {
      ...payload,
      source: sanitizeSource(payload.source),
    };
  }

  return payload;
};
