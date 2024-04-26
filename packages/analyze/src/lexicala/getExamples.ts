import { LexicalaSearchResultItem } from '../lexicala';

export const getExamples = (senses: LexicalaSearchResultItem['senses']) =>
  senses
    .filter((s) => s.examples)
    .filter((s) => s.examples.length > 0)
    .filter((s) =>
      s.examples.some((e) => typeof e.text === 'string' && e.text.length > 0)
    )
    .slice(0, 3)
    .map((s) =>
      s.examples.filter((e) => typeof e.text === 'string' && e.text.length > 0)
    )
    .map(
      (examples) =>
        examples.sort((a, b) => a.text.length - b.text.length)[0].text
    );
