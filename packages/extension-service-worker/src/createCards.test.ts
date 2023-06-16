import { CardItem } from '@vocably/model';
import { createSrsItem } from '@vocably/srs';
import { addCardCandidates, combineCards } from './createCards';

describe('createCards', () => {
  describe('addCardCandidates', () => {
    it('properly adds candidates when no such words exist in dictionary', () => {
      const collection = [];
      const cardItems = addCardCandidates(collection, [
        {
          language: 'en',
          source: 'do',
          definition: 'делать',
          translation: '',
          partOfSpeech: '',
          ...createSrsItem(),
        },
        {
          language: 'en',
          source: 'swim',
          definition: 'плавать',
          translation: '',
          partOfSpeech: '',
          ...createSrsItem(),
        },
      ]);

      expect(collection.length).toEqual(2);
      expect(cardItems[0].data.source).toEqual('do');
      expect(cardItems[1].data.source).toEqual('swim');
    });

    it('properly returns an existing item if such a candidate already exists', () => {
      const collection: CardItem[] = [];
      addCardCandidates(collection, [
        {
          language: 'en',
          source: 'do',
          definition: 'делать',
          translation: '',
          partOfSpeech: '',
          ...createSrsItem(),
        },
        {
          language: 'en',
          source: 'swim',
          definition: 'плавать',
          translation: '',
          partOfSpeech: '',
          ...createSrsItem(),
        },
      ]);

      const doId = collection[0].id;
      const cardItems = addCardCandidates(collection, [
        {
          language: 'en',
          source: 'fight',
          definition: 'бороться',
          translation: '',
          partOfSpeech: '',
          ...createSrsItem(),
        },
        {
          language: 'en',
          source: 'do',
          definition: 'делать',
          translation: '',
          partOfSpeech: '',
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
          translation: '',
          ...createSrsItem(),
        },
        {
          language: 'nl',
          source: 'naar',
          definition: 'in de richting van',
          partOfSpeech: 'preposition',
          translation: '',
          ...createSrsItem(),
        },
      ]);
      addCardCandidates(collection, [
        {
          language: 'nl',
          source: 'naar',
          definition: 'zoals',
          partOfSpeech: 'conjunction',
          translation: '',
          ...createSrsItem(),
        },
      ]);

      expect(collection.length).toEqual(3);
      expect(collection[0].data.partOfSpeech).toEqual('adjective');
      expect(collection[1].data.partOfSpeech).toEqual('preposition');
      expect(collection[2].data.partOfSpeech).toEqual('conjunction');
    });
  });

  describe('combineCards', () => {
    it('works as expected with the collections of cards', () => {
      const existingItems = [
        {
          language: 'nl',
          source: 'aanwezig',
          partOfSpeech: 'adjective',
          definition: 'als je er bij bent',
          translation: 'present',
          ...createSrsItem(),
        },
      ];

      const newItem = {
        language: 'nl',
        source: 'worden',
        partOfSpeech: 'verb',
        definition: `koppelwerkwoord dat aangeeft dat iets in een bepaalde toestand komt, begint te zijn of in de toekomst zal zijn`,
        translation: 'become',
        ...createSrsItem(),
      };

      expect(combineCards(existingItems, newItem)).toEqual([
        ...existingItems,
        newItem,
      ]);
    });

    it('adds up the definition', () => {
      const existingItems = [
        {
          language: 'nl',
          source: 'inzetten',
          partOfSpeech: 'verb',
          definition: 'moeite doen (voor iets of iemand)',
          translation: 'to stake',
          ...createSrsItem(),
        },
        {
          language: 'nl',
          source: 'aanwezig',
          partOfSpeech: 'adjective',
          definition: 'als je er bij bent',
          translation: 'present',
          ...createSrsItem(),
        },
      ];

      const newItem = {
        language: 'nl',
        source: 'inzetten',
        partOfSpeech: 'verb',
        definition: `* iets ergens in plaatsen
* (iemand) inschakelen (bij iets)`,
        translation: 'become',
        ...createSrsItem(),
      };

      expect(combineCards(existingItems, newItem)).toEqual([
        {
          ...existingItems[0],
          definition: `* moeite doen (voor iets of iemand)
* iets ergens in plaatsen
* (iemand) inschakelen (bij iets)`,
        },
        existingItems[1],
      ]);
    });
  });
});
