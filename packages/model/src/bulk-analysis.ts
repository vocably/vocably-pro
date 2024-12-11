import { isArray, isObject, isString } from 'lodash-es';
import { GoogleLanguage, isGoogleLanguage } from './language';

export type BulkAnalysisPayload = {
  sourceLanguage: GoogleLanguage;
  sources: string[];
};

export type BulkAnalysis = {
  sourceLanguage: GoogleLanguage;
  analysis: Array<{
    source: string;
    partOfSpeech: string;
  }>;
};

export const isBulkAnalysisPayload = (
  data: any
): data is BulkAnalysisPayload => {
  if (!isObject(data)) {
    return false;
  }

  if (!isGoogleLanguage(data['sourceLanguage'])) {
    return false;
  }

  if (!isArray(data['sources'])) {
    return false;
  }

  return data['sources'].every((source) => isString(source));
};
