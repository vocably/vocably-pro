import { sanitizeSource } from './sanitizeSource';
import { BackendPayload } from './extractPayload';

export const sanitizePayload = (payload: BackendPayload): BackendPayload => {
  return {
    ...payload,
    source: sanitizeSource(payload.source),
  };
};
