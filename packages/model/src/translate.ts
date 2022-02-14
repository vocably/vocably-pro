type Headword = { text?: string; pos?: string };

export type LexicalaSearchResultItem = {
  id: string;
  language: string;
  headword: Headword | Headword[];
  senses: { id?: string; definition?: string }[];
};

export type Translation = {
  language: string;
  text: string;
  lexicala?: LexicalaSearchResultItem[];
};

export type Phrase = {
  phrase: string;
  language?: string;
};
