export interface LexicalaSearchResultItem {
  id: string;
  language: string;
  headword: { text?: string; pos?: string };
  senses: { id?: string; definition?: string }[];
}

export interface Translation {
  language: string;
  text: string;
  lexicala?: LexicalaSearchResultItem[];
}

export interface Phrase {
  phrase: string;
  language?: string;
}
