import { Card } from '@vocably/model';

export type Column = Exclude<keyof Card, 'language'>;

export const columnLabels: Record<Column, string> = {
  source: 'Word/Phrase',
  translation: 'Translation',
  partOfSpeech: 'Part of Speech',
  g: 'Gender',
  ipa: 'IPA',
  definition: 'Definition',
  example: 'Example',
  tags: 'Tags',
};
