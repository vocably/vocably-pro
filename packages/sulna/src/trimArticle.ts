type TrimArticleResult = {
  source: string;
  article?: string;
};

const trimRegexes: Partial<Record<string, RegExp>> = {
  nl: /^(de|het|de.het|het.de)\s/i,
  de: /^(der|die|das)\s/i,
};

export const trimArticle = (
  language: string,
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
