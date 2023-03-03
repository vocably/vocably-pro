import { GoogleLanguage, languageList } from '@vocably/model';

export type LanguageListItem = {
  selected: boolean;
  key: string;
  label: string;
};

export type LanguageList = {
  title: string;
  data: LanguageListItem[];
}[];

export const createLanguageList = ({
  selected,
  preferred,
  preferredTitle,
}: {
  selected: string;
  preferred: string[];
  preferredTitle: string;
}): LanguageList => {
  const data: LanguageList = [];

  if (selected && languageList[selected as GoogleLanguage]) {
    data.push({
      title: 'Current',
      data: [
        {
          key: selected,
          label: languageList[selected as GoogleLanguage],
          selected: true,
        },
      ],
    });
  }

  const filteredPreferred = preferred.filter((l) => l !== selected);

  if (filteredPreferred.length > 0) {
    data.push({
      title: preferredTitle,
      data: filteredPreferred.map((key) => ({
        key,
        selected: false,
        label: languageList[key as GoogleLanguage],
      })),
    });
  }

  data.push({
    title: 'Available',
    data: Object.entries(languageList)
      .map(([key, label]) => ({ key, label, selected: false }))
      .filter(({ key }) => key !== selected && !preferred.includes(key)),
  });

  return data;
};
