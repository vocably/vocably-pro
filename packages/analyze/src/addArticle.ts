import { isFunction } from 'lodash-es';
import { Headword } from './lexicala';
import { LexicalaLanguage } from './lexicala/lexicalaLanguageMapper';
import { vowels } from './vowels';

type ArticleRules = {
  [gender: string]: string;
  fallback: string;
};

type ArticleFunction = (options: {
  gender: string;
  word: string;
  pronunciation: string;
  number: string;
}) => string;

const languageArticles: Partial<
  Record<LexicalaLanguage, ArticleRules | ArticleFunction>
> = {
  nl: {
    neuter: 'het ',
    'masculine-neuter': 'de/het ',
    fallback: 'de ',
  },
  de: {
    feminine: 'die ',
    masculine: 'der ',
    neuter: 'das ',
    fallback: '',
  },
  no: {
    masculine: 'en ',
    feminine: 'ei ',
    'masculine-feminine': 'ei ',
    neuter: 'et ',
    fallback: '',
  },
  dk: {
    common: 'en ',
    neuter: 'et ',
    fallback: '',
  },
  es: ({ gender, word, pronunciation, number }) => {
    if (number.toLowerCase() === 'plural') {
      return '';
    }

    const lowercasedWord = word.toLowerCase();

    if (
      gender === 'feminine' &&
      (lowercasedWord.startsWith('a') || lowercasedWord.startsWith('ha'))
    ) {
      // Emphasis on the first letter
      if (['ˈ', "'"].includes(pronunciation.at(0) ?? '')) {
        return 'el ';
      } else if (pronunciation) {
        return 'la ';
      } else {
        return '';
      }
    }

    if (lowercasedWord.startsWith('á') || lowercasedWord.startsWith('há')) {
      return 'el ';
    }

    if (gender === 'masculine') {
      return 'el ';
    }

    if (gender === 'feminine') {
      return 'la ';
    }

    return 'el/la ';
  },
  it: ({ gender, word, number }) => {
    if (number.toLowerCase() === 'plural') {
      return '';
    }

    const firstLetter = (word.at(0) ?? '').toLowerCase();
    const secondLetter = (word.at(1) ?? '').toLowerCase();

    if (gender === 'masculine') {
      if (vowels.includes(firstLetter)) {
        return "l'";
      }

      if (firstLetter === 's' && !vowels.includes(secondLetter)) {
        return 'lo ';
      }

      if (['ps', 'gn'].includes(firstLetter + secondLetter)) {
        return 'lo ';
      }

      if (firstLetter === 'x' || firstLetter === 'z') {
        return 'lo ';
      }

      return 'il ';
    }

    if (gender === 'feminine') {
      if (vowels.includes(firstLetter)) {
        return "l'";
      }

      return 'la ';
    }

    return '';
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

  if (isFunction(rules)) {
    return (
      rules({
        gender: headword.gender,
        word: text,
        pronunciation: headword?.pronunciation?.value ?? '',
        number: headword?.number ?? '',
      }) + text
    );
  }

  const article = rules[headword.gender] ?? rules.fallback;

  return `${article}${text}`;
};
