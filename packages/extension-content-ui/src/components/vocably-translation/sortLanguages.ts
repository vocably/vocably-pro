import { Language } from '@vocably/model';

export const sortLanguages =
  (existingLanguages: Language[]) =>
  (
    entryA: [code: Language, name: string],
    entryB: [code: Language, name: string]
  ): number => {
    const isEntryAExists = existingLanguages.includes(entryA[0]);
    const isEntryBExists = existingLanguages.includes(entryB[0]);

    if (isEntryAExists && !isEntryBExists) {
      return -1;
    }

    if (!isEntryAExists && isEntryBExists) {
      return 1;
    }

    return entryA[1].localeCompare(entryB[1]);
  };
