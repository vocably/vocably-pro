import { getUTCTime } from './getUTCTime';

describe('getUTCTime', () => {
  it('works', () => {
    expect(getUTCTime('08:00', 'Europe/Amsterdam')).toEqual('07:00');
    expect(getUTCTime('15:30', 'Asia/Kolkata')).toEqual('10:00');
    expect(getUTCTime('2:00', 'America/Bogota')).toEqual('07:00');
  });
});
