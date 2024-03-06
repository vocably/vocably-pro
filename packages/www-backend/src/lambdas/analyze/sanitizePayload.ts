import { AnalyzePayload, isDirectAnalyzePayload } from '@vocably/model';
import { sanitizeSource } from './sanitizeSource';

export const sanitizePayload = (payload: AnalyzePayload): AnalyzePayload => {
  if (isDirectAnalyzePayload(payload)) {
    return {
      ...payload,
      source: sanitizeSource(payload.source),
    };
  }

  return payload;
};
