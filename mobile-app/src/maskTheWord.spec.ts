import { compareWords, maskTheWord } from './maskTheWord';

describe('maskTheWord', () => {
  it('masks the word as is', () => {
    const result = maskTheWord('word', 'en')('word something wORd');
    expect(result).toEqual({
      masked: true,
      value: '____ something ____',
    });
  });

  it('masks the word as a root', () => {
    const result = maskTheWord(
      'de onvrede',
      'nl'
    )('ontevreden gevoel over iets');
    expect(result).toEqual({
      masked: true,
      value: '__________ gevoel over iets',
    });
  });

  it('masks the word as derivative', () => {
    const result = maskTheWord('glimlachende', 'nl')('Glimlachen as een kat');
    expect(result).toEqual({
      masked: true,
      value: '__________ as een kat',
    });
  });

  it('masks chinese word', () => {
    const result = maskTheWord('房', 'zh')('房子');
    expect(result).toEqual({
      masked: true,
      value: '_子',
    });
  });

  describe('compareWords', () => {
    it('wOrd - word', () => {
      expect(compareWords('wOrd', 'word')).toEqual(true);
    });

    it('visit - visited', () => {
      expect(compareWords('visit', 'visited')).toEqual(true);
    });

    it('visited - visit', () => {
      expect(compareWords('visited', 'visit')).toEqual(true);
    });

    it('afschaffing - afschaft', () => {
      expect(compareWords('afschaffing', 'afschaft')).toEqual(true);
    });

    it('afschaft - afschaffing', () => {
      expect(compareWords('afschaft', 'afschaffing')).toEqual(true);
    });
  });
});
