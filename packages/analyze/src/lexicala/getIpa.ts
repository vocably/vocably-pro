import { LexicalaSearchResultItemWithNormalHeadword } from './normalizeHeadword';

export const getIpa = (
  item: LexicalaSearchResultItemWithNormalHeadword
): string => {
  if (item.language === 'zh') {
    const pinyin = item.headword.alternative_scripts?.find(
      (a) => a.type === 'pinyin'
    );
    return pinyin ? pinyin?.text : '';
  }

  return item.headword.pronunciation?.value ?? '';
};
