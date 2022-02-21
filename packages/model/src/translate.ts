export type Headword = { text?: string; pos?: string };

export type LexicalaSearchResultItem = {
  id: string;
  language: string;
  headword: Headword | Headword[];
  senses: { id?: string; definition?: string }[];
};

export type NormalizedTranslation = {
  phrase: string;
  translation: string;
  language: string;
};

export type Translation = {
  language: string;
  text: string;
  lexicala?: LexicalaSearchResultItem[];
  normalized?: NormalizedTranslation[];
};

export type Phrase = {
  phrase: string;
  language?: string;
};
