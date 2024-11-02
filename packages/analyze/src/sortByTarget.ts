import { AnalysisItem } from '@vocably/model';

export const sortByTarget =
  (target: string) =>
  (
    a: Pick<AnalysisItem, 'translation'>,
    b: Pick<AnalysisItem, 'translation'>
  ): number => {
    const lowerTarget = target.toLowerCase().trim();
    const lowerA = a.translation.toLowerCase();
    const lowerB: string = b.translation.toLowerCase();

    if (lowerA === lowerTarget && lowerB === lowerTarget) {
      return 0;
    }

    if (lowerA === lowerTarget) {
      return -1;
    }

    if (lowerB === lowerTarget) {
      return 1;
    }

    const includesA = lowerA.includes(lowerTarget);
    const includesB = lowerB.includes(lowerTarget);

    if (includesA && includesB) {
      return 0;
    }

    if (includesA) {
      return -1;
    }

    if (includesB) {
      return 1;
    }

    return 0;
  };
