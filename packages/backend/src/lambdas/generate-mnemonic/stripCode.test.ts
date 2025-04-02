import { stripCode } from './stripCode';

describe('stripCode', () => {
  it('code 1', () => {
    expect(stripCode(['```', 'something', '```'].join('\n'))).toEqual(
      'something'
    );
  });

  it('code 2', () => {
    expect(stripCode(['```markdown', 'something', '```'].join('\n'))).toEqual(
      'something'
    );
  });

  it('no code', () => {
    expect(stripCode(['something', 'something else'].join('\n'))).toEqual(
      ['something', 'something else'].join('\n')
    );
  });
});
