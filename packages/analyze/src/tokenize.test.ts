import { tokenize } from './tokenize';

describe('tokenize', () => {
  it('works', () => {
    const tokens = tokenize('\n\nHello,   \n  world\n!!!!something-else~!@');
    expect(tokens).toEqual(['Hello', 'world', 'something', 'else']);
  });

  it('long string', () => {
    const tokens = tokenize(
      "I like, however, to argue that architecting your code as if you were to swap out x some day has huge benefits, as it leads to a clearer separation of concerns, and helps you isolate the code that is concerned with your business logic from the code that is concerned with whatever tech you're currently using"
    );
    expect(tokens.length).toEqual(57);
  });
});
