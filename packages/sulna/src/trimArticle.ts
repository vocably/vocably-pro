type TrimArticleResult = {
  source: string;
  article?: string;
};

const trimRegexes: Partial<Record<string, RegExp>> = {
  en: /^(a)\s/i,
  nl: /^(de|het|de.het|het.de)\s/i,
  de: /^(der|die|das|ein|eine)\s/i,
  es: /^(el|la|los|las)\s/i,
  fr: /^(le|la|les|un|une|des|du|de)\s/i,
  it: /^(il|lo|la|i|gli|le|un|uno|una)\s/i,
  pt: /^(o|a|os|as|um|uma|uns|umas)\s/i,
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
