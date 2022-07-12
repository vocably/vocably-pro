import { sanitizeSource } from './sanitizeSource';

describe('sanitizeSource', () => {
  it('works as expected', () => {
    expect(sanitizeSource('')).toEqual('');
    expect(sanitizeSource('test')).toEqual('test');
    expect(sanitizeSource(', test')).toEqual('test');
    expect(sanitizeSource('test,')).toEqual('test');
    expect(sanitizeSource(', test test,')).toEqual('test test');
    expect(sanitizeSource(', test, test,')).toEqual('test, test');
    expect(sanitizeSource(', test, test.')).toEqual('test, test');
  });
});
