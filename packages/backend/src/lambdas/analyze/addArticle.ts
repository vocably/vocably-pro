import { Headword } from '../../lexicala';
import { LexicalaLanguage } from '../../lexicala/lexicalaLanguageMapper';

type ArticleRules = {
  [gender: string]: string;
  fallback: string;
};

const languageArticles: Partial<Record<LexicalaLanguage, ArticleRules>> = {
  nl: {
    neuter: 'het ',
    'masculine-neuter': 'de/het ',
    fallback: 'de ',
  },
};

export const addArticle = (
  language: LexicalaLanguage,
  headword: Headword
): string => {
  const text = headword.text ?? '';

  if (headword.pos !== 'noun' || !headword.gender) {
    return text;
  }

  const rules = languageArticles[language];

  if (rules === undefined) {
    return text;
  }

  const article = rules[headword.gender] ?? rules.fallback;

  return `${article}${text}`;
};
