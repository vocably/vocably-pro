import { CardItem } from '@vocably/model';
import { slice } from './slice';

describe('slice', () => {
  const dueDay0 = 1643151600000;
  const dueDay1 = 1643238000000;
  const dueDay2 = 1643324400000;

  let cards: CardItem[];

  beforeEach(() => {
    cards = [
      {
        id: '3',
        created: 3,
        data: {
          sideA: 'sA3',
          sideB: 'sB3',
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
          sideA: 'sA1',
          sideB: 'sB1',
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
          sideA: 'sA2',
          sideB: 'sB2',
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
          sideA: 'sA3',
          sideB: 'sB3',
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
