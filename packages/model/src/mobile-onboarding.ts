import { GoogleLanguage } from './language';
import { Card } from './language-deck';

export type MobileOnboardingData = {
  welcomeScreenCard: Card;
  directTranslationExample: {
    sourceLanguage: GoogleLanguage;
    targetLanguage: GoogleLanguage;
    isReversed: boolean;
    text: string;
    results: [Card, ...Card[]];
  };
  reverseTranslationExample: {
    sourceLanguage: GoogleLanguage;
    targetLanguage: GoogleLanguage;
    isReversed: boolean;
    text: string;
    results: [Card, ...Card[]];
  };
  contextTranslationExample: {
    text: string;
    results: [Card, ...Card[]];
  };
  isFallback?: boolean;
};

export type MobileOnboardingDataCollection = {
  en: MobileOnboardingData;
  isFallback?: boolean;
} & Partial<Record<GoogleLanguage, MobileOnboardingData>>;
