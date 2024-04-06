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

  it('alice', () => {
    const tokens = tokenize(
      `Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, “and what is the use of a book,” thought Alice “without pictures or conversations?”`
    );

    console.log(tokens);

    expect(tokens.length).toEqual(57);
  });

  it('works with non-latin symbols', () => {
    const tokens = tokenize('Привет, мир! Как дела?');
    expect(tokens).toEqual(['Привет', 'мир', 'Как', 'дела']);
  });

  it('trims the shit out', () => {
    const tokens = tokenize(`

                  Привет,

      мир! Как дела?`);
    expect(tokens).toEqual(['Привет', 'мир', 'Как', 'дела']);
  });
});
