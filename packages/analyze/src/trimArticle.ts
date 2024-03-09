import { LexicalaLanguage } from './lexicala/lexicalaLanguageMapper';

type TrimArticleResult = {
  source: string;
  article?: string;
};

const trimRegexes: Partial<Record<LexicalaLanguage, RegExp>> = {
  nl: /^(de|het)\s/i,
};

export const trimArticle = (
  language: LexicalaLanguage,
  source: string
): TrimArticleResult => {
  if (trimRegexes[language] === undefined) {
    return {
      source,
    };
  }

  const articleMatch = source.match(trimRegexes[language]);

  if (articleMatch === null) {
    return {
      source,
    };
  }

  const article = articleMatch[0].trim().toLowerCase();

  return {
    article,
    source: source.replace(trimRegexes[language], '').trim(),
  };
};
