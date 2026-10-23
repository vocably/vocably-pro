import { trimArticle } from '@vocably/sulna';

// Mirrors mobile-app/src/maskTheWord.ts

const levenshtein = (a: string, b: string): number => {
  let previous = Array.from({ length: b.length + 1 }, (_, i) => i);

  for (let i = 1; i <= a.length; i++) {
    const current = [i];
    for (let j = 1; j <= b.length; j++) {
      current[j] = Math.min(
        previous[j] + 1,
        current[j - 1] + 1,
        previous[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
      );
    }
    previous = current;
  }

  return previous[b.length];
};

const escapeRegExp = (text: string) =>
  text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export const compareWords = (a: string, b: string): boolean => {
  const minLength = Math.min(a.length, b.length);
  const maxLength = Math.max(a.length, b.length);

  if (minLength <= 3 && maxLength >= 5) {
    return false;
  }

  const upperA = a.toUpperCase();
  const upperB = b.toUpperCase();
  if (upperA === upperB) {
    return true;
  }

  if (upperA.includes(upperB) || upperB.includes(upperA)) {
    return true;
  }

  return minLength / levenshtein(a, b) >= 2;
};

type Result = {
  masked: boolean;
  value: string;
};

export const maskTheWord =
  (word: string, language: string) =>
  (sentence: string): Result => {
    const { source } = trimArticle(language, word);
    let masked = false;
    let value = sentence;

    if (value.indexOf(' ') !== -1) {
      value = value
        .split(' ')
        .map((sentenceWord) => {
          if (sentenceWord === '') {
            return sentenceWord;
          }

          if (compareWords(source, sentenceWord)) {
            masked = true;
            return '_'.repeat(sentenceWord.length);
          }

          return sentenceWord;
        })
        .join(' ');
    }

    const replaceRegEx = new RegExp(escapeRegExp(source), 'img');
    value = value.replace(replaceRegEx, () => {
      masked = true;
      return '_'.repeat(source.length);
    });

    return {
      masked,
      value,
    };
  };
