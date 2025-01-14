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
};

export type MobileOnboardingDataCollection = Partial<
  Record<GoogleLanguage, MobileOnboardingData>
>;
