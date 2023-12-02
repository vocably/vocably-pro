import { getBackupFolder } from './getBackupFolder';

describe('getBackupFolder', () => {
  it('works', () => {
    const date = new Date('2021-12-23');
    expect(getBackupFolder(date)).toEqual('2021-12-23');
  });
});
