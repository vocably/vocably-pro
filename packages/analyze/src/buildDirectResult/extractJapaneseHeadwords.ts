import { toHiragana } from 'wanakana';
import { Headword } from '../lexicala';

export type JapaneseHeadwords = {
  romaji: string;
  hiragana: string;
  kanji?: string;
};

export const extractJapaneseHeadwords = (
  headword: Headword
): JapaneseHeadwords => {
  const romaji = headword.text;
  const alternativeScripts = headword.alternative_scripts ?? [];
  const hiragana = alternativeScripts.find((a) => a.type === 'hiragana');
  const kanji = alternativeScripts.find((a) => a.type === 'kanji');

  return {
    romaji,
    hiragana: hiragana ? hiragana.text : toHiragana(romaji),
    kanji: kanji && kanji.text,
  };
};
