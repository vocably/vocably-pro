import { addCardCandidates } from './createCards';
import { CardItem } from '@vocably/model';
import { createSrsItem } from '@vocably/srs';

describe('createCards', () => {
  it('properly adds candidates when no such words exist in dictionary', () => {
    const collection = [];
    const cardItems = addCardCandidates(collection, [
      {
        language: 'en',
        source: 'do',
        definition: 'делать',
        ...createSrsItem(),
      },
      {
        language: 'en',
        source: 'fuck',
        definition: 'пекаться',
        ...createSrsItem(),
      },
    ]);

    expect(collection.length).toEqual(2);
    expect(cardItems[0].data.source).toEqual('do');
    expect(cardItems[1].data.source).toEqual('fuck');
  });

  it('properly returns an existing item if such a candidate already exists', () => {
    const collection: CardItem[] = [];
    addCardCandidates(collection, [
      {
        language: 'en',
        source: 'do',
        definition: 'делать',
        ...createSrsItem(),
      },
      {
        language: 'en',
        source: 'fuck',
        definition: 'пекаться',
        ...createSrsItem(),
      },
    ]);

    const doId = collection[0].id;
    const cardItems = addCardCandidates(collection, [
      {
        language: 'en',
        source: 'fight',
        definition: 'бороться',
        ...createSrsItem(),
      },
      {
        language: 'en',
        source: 'do',
        definition: 'делать',
        ...createSrsItem(),
      },
    ]);

    expect(collection.length).toEqual(3);
    expect(cardItems[0].data.source).toEqual('fight');
    expect(cardItems[1].id).toEqual(doId);
  });

  it('considers parts of speech when adding card candidates', () => {
    const collection: CardItem[] = [];
    addCardCandidates(collection, [
      {
        language: 'nl',
        source: 'naar',
        definition: 'onprettig, onaangenaam',
        partOfSpeech: 'adjective',
        ...createSrsItem(),
      },
      {
        language: 'nl',
        source: 'naar',
        definition: 'in de richting van',
        partOfSpeech: 'preposition',
        ...createSrsItem(),
      },
    ]);
    addCardCandidates(collection, [
      {
        language: 'nl',
        source: 'naar',
        definition: 'zoals',
        partOfSpeech: 'conjunction',
        ...createSrsItem(),
      },
    ]);

    expect(collection.length).toEqual(3);
    expect(collection[0].data.partOfSpeech).toEqual('adjective');
    expect(collection[1].data.partOfSpeech).toEqual('preposition');
    expect(collection[2].data.partOfSpeech).toEqual('conjunction');
  });
});
