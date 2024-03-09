import { configureAnalyzer } from '../config';

export const configureTestAnalyzer = () => {
  configureAnalyzer({
    lexicalaHost: process.env.LEXICALA_HOST,
    lexicalaKey: process.env.LEXICALA_KEY,
    googleProjectId: process.env.GOOGLE_PROJECT_ID,
    nlpTranslationKey: process.env.NLP_TRANSLATION_KEY,
    nlpTranslationHost: process.env.NLP_TRANSLATION_HOST,
  });
};
