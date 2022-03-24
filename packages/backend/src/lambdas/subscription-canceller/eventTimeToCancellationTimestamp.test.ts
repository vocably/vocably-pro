import { eventTimeToCancellationTimestamp } from './eventTimeToCancellationTimestamp';

describe('eventTimeToCancellationTimestamp', () => {
  it('works', async () => {
    expect(eventTimeToCancellationTimestamp('2022-04-24T18:05:24Z')).toEqual(
      1650758400000
    );
  });
});
