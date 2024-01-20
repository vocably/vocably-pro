import { slice } from './slice';
describe('slice', () => {
  const dueDay0 = 1643155200000;
  const dueDay1 = 1643241600000;
  const dueDay2 = 1643328000000;

  it('returns slice for the current and previous date only', () => {
    const cards = [
      { id: '3', data: { dueDate: dueDay2 } },
      { id: '1', data: { dueDate: dueDay1 } },
      { id: '2', data: { dueDate: dueDay1 } },
      { id: '4', data: { dueDate: dueDay2 } },
    ];
    const batch = slice(new Date(dueDay1 + 1), 3, cards);
    expect(batch.length).toEqual(2);
    expect(batch[0].id).toEqual('1');
    expect(batch[1].id).toEqual('2');
  });

  it('considers max cards when the overall list amount is greater', () => {
    const cards = [
      { id: '3', data: { dueDate: dueDay2 } },
      { id: '1', data: { dueDate: dueDay1 } },
      { id: '2', data: { dueDate: dueDay1 } },
      { id: '4', data: { dueDate: dueDay2 } },
    ];
    const batch = slice(new Date(dueDay2 + 1), 3, cards);
    expect(batch.length).toEqual(3);
    expect(batch[0].id).toEqual('3');
    expect(batch[1].id).toEqual('4');
    expect(batch[2].id).toEqual('1');
  });

  it('greedy returns max cards when the current day is exhausted', () => {
    const cards = [
      { id: '3', data: { dueDate: dueDay2 } },
      { id: '1', data: { dueDate: dueDay1 } },
      { id: '2', data: { dueDate: dueDay1 } },
      { id: '4', data: { dueDate: dueDay2 } },
    ];
    const batch = slice(new Date(dueDay0 + 1), 5, cards);
    expect(batch.length).toEqual(4);
    expect(batch[0].id).toEqual('1');
    expect(batch[1].id).toEqual('2');
    expect(batch[2].id).toEqual('3');
    expect(batch[3].id).toEqual('4');
  });

  it('should pick today, and sort older than today by desk, and ignore future', () => {
    const cards = [
      { id: '1', data: { dueDate: dueDay2 + 1 } },
      { id: '2', data: { dueDate: dueDay2 } },
      { id: '3', data: { dueDate: dueDay0 } },
      { id: '4', data: { dueDate: dueDay0 + 1 } },
      { id: '5', data: { dueDate: dueDay1 } },
      { id: '6', data: { dueDate: dueDay1 } },
    ];

    const batch = slice(new Date(dueDay1 + 1), 5, cards);
    expect(batch.length).toEqual(4);
    expect(batch[0].id).toEqual('5');
    expect(batch[1].id).toEqual('6');
    expect(batch[2].id).toEqual('4');
    expect(batch[3].id).toEqual('3');
  });

  it('should sort past by desk, and future by ask', () => {
    const cards = [
      { id: '1', data: { dueDate: dueDay2 + 1 } },
      { id: '2', data: { dueDate: dueDay2 } },
      { id: '3', data: { dueDate: dueDay0 } },
      { id: '4', data: { dueDate: dueDay0 + 1 } },
    ];

    const batch = slice(new Date(dueDay1 + 1), 5, cards);
    expect(batch.length).toEqual(4);
    expect(batch[0].id).toEqual('4');
    expect(batch[1].id).toEqual('3');
    expect(batch[2].id).toEqual('2');
    expect(batch[3].id).toEqual('1');
  });
});
