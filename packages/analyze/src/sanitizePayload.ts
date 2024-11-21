import { DirectAnalyzePayload } from '@vocably/model';
import { isOneWord } from './isOneWord';
import { trimSource } from './trimSource';

export const sanitizePayload = (
  payload: DirectAnalyzePayload
): DirectAnalyzePayload => {
  const trimmedSource = trimSource(payload.source);
  if (isOneWord(trimmedSource)) {
    return {
      ...payload,
      source: trimmedSource,
    };
  }

  return {
    ...payload,
    source: payload.source.trim(),
  };
};
