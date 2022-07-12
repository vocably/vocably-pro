import { Language } from './language';

export type Translation = {
  source: string;
  sourceLanguage: Language;
  target: string;
  targetLanguage: Language;
};

export type AnalyzePayload = {
  source: string;
  sourceLanguage?: Language;
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
