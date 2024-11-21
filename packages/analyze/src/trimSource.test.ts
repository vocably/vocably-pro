import { trimSource } from './trimSource';

describe('sanitizeSource', () => {
  it('works as expected', () => {
    expect(trimSource('')).toEqual('');
    expect(trimSource('test')).toEqual('test');
    expect(trimSource(', test')).toEqual('test');
    expect(trimSource('test,')).toEqual('test');
    expect(trimSource(', test test,')).toEqual('test test');
    expect(trimSource(', test, test,')).toEqual('test, test');
    expect(trimSource(', test, test.')).toEqual('test, test');
  });
});
