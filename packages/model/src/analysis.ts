export type Headword = { text?: string; pos?: string };

export type LexicalaSearchResultItem = {
  id: string;
  language: string;
  headword: Headword | Headword[];
  senses: { id?: string; definition?: string }[];
};

export type Translation = {
  source: string;
  sourceLanguage: string;
  target: string;
  targetLanguage: string;
};

export type AnalyzePayload = {
  source: string;
  sourceLanguage?: string;
};

export type Analysis = {
  source: string;
  translation: Translation;
  lexicala?: LexicalaSearchResultItem[];
  normalized?: Translation[];
};
