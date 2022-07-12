import { AnalyzePayload } from '@vocably/model';
import { sanitizeSource } from './sanitizeSource';

export const sanitizePayload = (payload: AnalyzePayload): AnalyzePayload => {
  return {
    ...payload,
    source: sanitizeSource(payload.source),
  };
};
