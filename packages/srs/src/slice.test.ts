import { CardItem } from '@vocably/model';
import { slice } from './slice';

describe('slice', () => {
  const dueDay0 = 1643155200000;
  const dueDay1 = 1643241600000;
  const dueDay2 = 1643328000000;

  let cards: CardItem[];

  beforeEach(() => {
    cards = [
      {
        id: '3',
        created: 3,
        data: {
          source: 'sA3',
          definition: 'sB3',
          translation: '',
          partOfSpeech: '',
          dueDate: dueDay2,
          eFactor: 2.5,
          interval: 0,
          repetition: 0,
          language: 'pt',
        },
      },
      {
        id: '1',
        created: 1,
        data: {
          source: 'sA1',
          definition: 'sB1',
          translation: '',
          partOfSpeech: '',
          dueDate: dueDay1,
          eFactor: 2.5,
          interval: 0,
          repetition: 0,
          language: 'pt',
        },
      },
      {
        id: '2',
        created: 2,
        data: {
          source: 'sA2',
          definition: 'sB2',
          translation: '',
          partOfSpeech: '',
          dueDate: dueDay1,
          eFactor: 2.5,
          interval: 0,
          repetition: 0,
          language: 'pt',
        },
      },
      {
        id: '4',
        created: 4,
        data: {
          source: 'sA3',
          definition: 'sB3',
          translation: '',
          partOfSpeech: '',
          dueDate: dueDay2,
          eFactor: 2.5,
          interval: 0,
          repetition: 0,
          language: 'pt',
        },
      },
    ];
  });

  it('returns slice for the current and previous date only', () => {
    const batch = slice(new Date(dueDay1 + 1), 3, cards);
    expect(batch.length).toEqual(2);
    expect(batch[0].id).toEqual('1');
    expect(batch[1].id).toEqual('2');
  });

  it('considers max cards when the overall list amount is greater', () => {
    const batch = slice(new Date(dueDay2 + 1), 3, cards);
    expect(batch.length).toEqual(3);
    expect(batch[0].id).toEqual('1');
    expect(batch[1].id).toEqual('2');
    expect(batch[2].id).toEqual('3');
  });

  it('greedy returns max cards when the current day is exhausted', () => {
    const batch = slice(new Date(dueDay0 + 1), 5, cards);
    expect(batch.length).toEqual(4);
    expect(batch[0].id).toEqual('1');
    expect(batch[1].id).toEqual('2');
    expect(batch[2].id).toEqual('3');
    expect(batch[3].id).toEqual('4');
  });
});
