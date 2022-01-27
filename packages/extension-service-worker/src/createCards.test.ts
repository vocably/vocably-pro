import { addCardCandidates } from './createCards';
import { CardItem } from '@vocably/model';
import { createSrsItem } from '@vocably/srs';

describe('createCards', () => {
  it('properly adds candidates when no such words exist in dictionary', () => {
    const collection = [];
    const cardItems = addCardCandidates(collection, [
      { language: 'en', sideA: 'do', sideB: 'делать', ...createSrsItem() },
      { language: 'en', sideA: 'fuck', sideB: 'пекаться', ...createSrsItem() },
    ]);

    expect(collection.length).toEqual(2);
    expect(cardItems[0].data.sideA).toEqual('do');
    expect(cardItems[1].data.sideA).toEqual('fuck');
  });

  it('properly returns an existing item if such a candidate already exists', () => {
    const collection: CardItem[] = [];
    addCardCandidates(collection, [
      { language: 'en', sideA: 'do', sideB: 'делать', ...createSrsItem() },
      { language: 'en', sideA: 'fuck', sideB: 'пекаться', ...createSrsItem() },
    ]);

    const doId = collection[0].id;
    const cardItems = addCardCandidates(collection, [
      { language: 'en', sideA: 'fight', sideB: 'бороться', ...createSrsItem() },
      { language: 'en', sideA: 'do', sideB: 'делать', ...createSrsItem() },
    ]);

    expect(collection.length).toEqual(3);
    expect(cardItems[0].data.sideA).toEqual('fight');
    expect(cardItems[1].id).toEqual(doId);
  });
});
