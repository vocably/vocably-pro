import { GoogleLanguage } from './language';

export type Translation = {
  source: string;
  sourceLanguage: GoogleLanguage;
  target: string;
  targetLanguage: GoogleLanguage;
};

export type DirectAnalyzePayload = {
  source: string;
  sourceLanguage?: GoogleLanguage;
  targetLanguage: GoogleLanguage;
};

export type ReverseAnalyzePayload = {
  target: string;
  sourceLanguage: GoogleLanguage;
  targetLanguage: GoogleLanguage;
};

export type AnalyzePayload = DirectAnalyzePayload | ReverseAnalyzePayload;

export const isDirectAnalyzePayload = (o: any): o is DirectAnalyzePayload => {
  return !(!o || !o.source || !o.targetLanguage);
};

export const isReverseAnalyzePayload = (o: any): o is DirectAnalyzePayload => {
  return !(!o || !o.target || !o.targetLanguage || !o.targetLanguage);
};

export type AnalysisItem = {
  source: string;
  definitions: string[];
  translation: string;
  partOfSpeech?: string;
};

export type DirectAnalysis = {
  source: string;
  translation: Translation;
  items?: AnalysisItem[];
};

export type ReverseAnalysis = DirectAnalysis & {
  target: string;
  reverseTranslation: Translation;
};

export type Analysis = DirectAnalysis | ReverseAnalysis;
