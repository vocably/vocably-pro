import { ValidAnalysisItems } from '@vocably/model';

export const makeUniqueItems = (
  items: ValidAnalysisItems
): ValidAnalysisItems => {
  const hash: Record<string, number> = {};
  const result = [];
  items.forEach((item) => {
    const hashKey = `${item.source}${item.partOfSpeech}`;
    if (hash[hashKey]) {
      return;
    }

    hash[hashKey] = 1;
    result.push(item);
  });

  return [result[0], ...result.slice(1)];
};
