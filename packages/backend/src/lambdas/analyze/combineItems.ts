import { AnalysisItem } from '@vocably/model';

export const equalItems =
  (a: AnalysisItem) =>
  (b: AnalysisItem): boolean =>
    a.source.toLowerCase() === b.source.toLowerCase() &&
    a.partOfSpeech === b.partOfSpeech;

export const combineTranslations = (t1: string, t2: string): string => {
  const words1 = t1.split(',').map((w) => w.trim());
  const words2 = t2.split(',').map((w) => w.trim());

  return words2
    .reduce((acc, word) => {
      if (
        acc.findIndex((word1) => word1.toLowerCase() === word.toLowerCase()) !==
        -1
      ) {
        return acc;
      }

      return [...acc, word];
    }, words1)
    .join(', ');
};

export const combineDefinitions = (d1: string[], d2: string[]): string[] => {
  return d2.reduce((acc, definition) => {
    if (
      acc.findIndex((d) => d.toLowerCase() === definition.toLowerCase()) !== -1
    ) {
      return acc;
    }

    return [...acc, definition];
  }, d1);
};

export const combineItems = (
  items: AnalysisItem[],
  item: AnalysisItem
): AnalysisItem[] => {
  const existingIndex = items.findIndex(equalItems(item));
  if (existingIndex === -1) {
    return [...items, item];
  }

  return items.map((existingItem, index) => {
    if (index !== existingIndex) {
      return existingItem;
    }

    return {
      ...existingItem,
      definitions: combineDefinitions(
        existingItem.definitions,
        item.definitions
      ),
      translation: combineTranslations(
        existingItem.translation,
        item.translation
      ),
    };
  });
};
