import { getItemDefinitions } from "./wordDictionaryItemDefinitions";

describe('wordDictionaryItemDefinitions', () => {
  it('should return empty array when no definitions found', () => {
    expect(getItemDefinitions('')).toEqual([]);
  })

  it('should return a single item', () => {
    expect(getItemDefinitions('(adj) first (brakets) item')).toEqual(['first (brakets) item']);
  });

  it('should return multiple items', () => {
    expect(getItemDefinitions('(nou) a history of a word\n(nou) the study of the sources and development of words (brekets)')).toEqual([
      'a history of a word',
      'the study of the sources and development of words (brekets)'
    ]);
  })
})
