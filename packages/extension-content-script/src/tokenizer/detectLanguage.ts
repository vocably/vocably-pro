import { GoogleLanguage } from '@vocably/model';
import { containsChinese } from './containsChinese';
import { containsJapanese } from './containsJapanese';
import { containsKorean } from './containsKorean';

export const detectLanguage = (text: string): GoogleLanguage | '' => {
  if (containsKorean(text)) {
    return 'ko';
  }

  if (containsChinese(text)) {
    return 'zh';
  }

  if (containsJapanese(text)) {
    return 'ja';
  }

  return '';
};
