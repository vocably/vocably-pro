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
}: {
  selected: string;
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

  data.push({
    title: 'Available',
    data: Object.entries(languageList)
      .map(([key, label]) => ({ key, label, selected: false }))
      .filter(({ key }) => key !== selected),
  });

  return data;
};
