import { GoogleLanguage } from './language';

export type LanguagePair = {
  currentTargetLanguage: GoogleLanguage;
  possibleTargetLanguages: GoogleLanguage[];
};

export type LanguagePairs = Partial<Record<GoogleLanguage, LanguagePair>>;
