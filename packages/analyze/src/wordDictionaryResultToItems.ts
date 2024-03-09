import { google } from '@google-cloud/translate/build/protos/protos';
import {
  AnalysisItem,
  DirectAnalyzePayload,
  Translation,
} from '@vocably/model';
import { translateWordDictionaryItem } from './translateWordDictionaryItem';
import { WordDictionaryResponse } from './word-dictionary';
import { getItemDefinitions } from './wordDictionaryItemDefinitions';
import translation = google.cloud.translation;

type Options = {
  result: WordDictionaryResponse;
  payload: DirectAnalyzePayload;
  originalTranslation: Translation;
};

export const wordDictionaryResultToAnalysisItems = ({
  result,
  payload,
  originalTranslation,
}: Options): Promise<AnalysisItem>[] => {
  return Object.entries(result.meaning)
    .filter(([_, definitions]) => definitions.length > 0)
    .map(async ([partOfSpeech, definitions]) => {
      const item = {
        source: result.response,
        definitions: getItemDefinitions(definitions),
        partOfSpeech,
      };
      return {
        ...item,
        translation: await translateWordDictionaryItem({
          ...item,
          payload,
          originalTranslation,
        }),
      };
    });
};
