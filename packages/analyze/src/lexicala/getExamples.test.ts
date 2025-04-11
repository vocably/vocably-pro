import { getExamples } from './getExamples';

describe('getExamples', () => {
  it('should return the first three examples sorted by length', () => {
    const senses = [
      {
        examples: [
          { text: 'This is a longer example.' },
          { text: 'This is an example.' },
        ],
      },
      {},
      {
        examples: [
          { text: 'This is another example.' },
          { text: 'This is another long example.' },
        ],
      },
    ];
    expect(getExamples(senses)).toEqual([
      'This is an example.',
      'This is another example.',
    ]);
  });

  it('works on empty examples', () => {
    const senses = [
      {
        examples: [],
      },
      {},
      {
        examples: [
          { text: 'This is another example.' },
          { text: 'This is another long example.' },
        ],
      },
    ];
    expect(getExamples(senses)).toEqual(['This is another example.']);
  });

  it('works on undefined examples', () => {
    const senses = [
      {},
      {},
      {
        examples: [
          { text: 'This is another example.' },
          { text: 'This is another long example.' },
        ],
      },
    ];
    expect(getExamples(senses)).toEqual(['This is another example.']);
  });

  it('works on empty array', () => {
    const senses: any[] = [];
    expect(getExamples(senses)).toEqual([]);
  });

  it('works on non-string example text', () => {
    const senses = [
      {
        examples: [{ text: 1 }],
      },
      {
        examples: [{ text: ['This is another example.'] }],
      },
      {
        examples: [{ text: '' }],
      },
      {
        examples: [{ text: null }],
      },
      {
        examples: [{ text: 'the only decent example' }],
      },
    ];
    // @ts-ignore
    expect(getExamples(senses)).toEqual(['the only decent example']);
  });
});
