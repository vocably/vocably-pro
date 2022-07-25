import { GoogleLanguage } from './language';

export type Translation = {
  source: string;
  sourceLanguage: GoogleLanguage;
  target: string;
  targetLanguage: GoogleLanguage;
};

export type AnalyzePayload = {
  source: string;
  sourceLanguage?: GoogleLanguage;
  targetLanguage: GoogleLanguage;
};

export type AnalysisItem = {
  source: string;
  definitions: string[];
  translation: string;
  partOfSpeech?: string;
};

export type Analysis = {
  source: string;
  translation: Translation;
  items?: AnalysisItem[];
};
