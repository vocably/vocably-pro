import '@vocably/jest';
import { configureTestAnalyzer } from './test/configureTestAnalyzer';
import { translateUnitOfSpeechClaude } from './translateUnitOfSpeechClaude';

configureTestAnalyzer();

describe('translateUnitOfSpeechClaude', () => {
  if (process.env.TEST_SKIP_SPEC === 'true') {
    it('skip spec testing', () => {});
    return;
  }

  it('claude bank', async () => {
    const translationResult = await translateUnitOfSpeechClaude({
      source: 'bank',
      partOfSpeech: 'noun',
      sourceLanguage: 'en',
      targetLanguage: 'ru',
      definitions: [
        'A financial institution where money and other valuables are stored and managed.',
        'A long, raised mass or mound of earth, especially bordering or paralleling a river or shore.',
        'A set or series of similar or related things, particularly in a row or tier.',
      ],
      examples: [
        'I deposited money in the bank.',
        'The river overflowed its banks.',
        'A bank of computers.',
      ],
    });

    if (translationResult.success === false) {
      console.log(translationResult);
      //@ts-ignore
      expect(translationResult.success).toEqual(true);
      return;
    }

    expect(translationResult.value[0]).toEqual('банк');
    expect(translationResult.value[1]).toEqual('берег');
  }, 60_000);

  it('claude properly translates duck', async () => {
    const translationResult = await translateUnitOfSpeechClaude({
      source: 'duck',
      partOfSpeech: 'verb',
      sourceLanguage: 'en',
      targetLanguage: 'ru',
      definitions: [
        'To lower the head or the body quickly to avoid a blow or so as not to be seen.',
        "To push someone's head under water.",
        'To quickly go somewhere, especially to avoid being seen.',
        'To avoid a duty, an unpleasant task, etc.',
      ],
      examples: [
        'She had to duck to avoid the ball.',
        'He ducked his brother in the pool.',
        'I ducked into the nearest doorway to escape the rain.',
        "He's always trying to duck his responsibilities.",
      ],
    });

    expect(translationResult.success).toEqual(true);
    if (!translationResult.success) {
      return;
    }

    expect(
      translationResult.value.some(
        (v) => v.includes('пригибаться') || v.includes('пригнуться')
      )
    ).toEqual(true);

    expect(translationResult.value.some((v) => v.includes('утка'))).toEqual(
      false
    );
  });

  it('claude consider plurals', async () => {
    const translationResult = await translateUnitOfSpeechClaude({
      source: 'balken',
      partOfSpeech: 'noun',
      sourceLanguage: 'nl',
      targetLanguage: 'ru',
      number: 'plural',
      definitions: [
        'Lange, zware stukken bewerkt hout, metaal of beton gebruikt in de bouw.',
        'Horizontale steunstukken in een constructie.',
      ],
    });

    expect(translationResult.success).toEqual(true);
    if (!translationResult.success) {
      return;
    }

    expect(translationResult.value[0]).toEqual('балки');
  });

  it('claude avoids insane tranlations', async () => {
    const translationResult = await translateUnitOfSpeechClaude({
      source: 'afslaan',
      partOfSpeech: 'verb',
      sourceLanguage: 'nl',
      targetLanguage: 'en',
      definitions: ['van richting veranderen', 'weigeren', 'niet accepteren'],
    });

    expect(translationResult.success).toEqual(true);
    if (!translationResult.success) {
      return;
    }

    expect(translationResult.value.length).not.toBeGreaterThanOrEqual(10);
  });

  it('en to hindi', async () => {
    const translationResult = await translateUnitOfSpeechClaude({
      source: 'perennial',
      partOfSpeech: 'adjective',
      sourceLanguage: 'en',
      targetLanguage: 'hi',
      definitions: [
        'lasting or existing for a long or apparently infinite time',
        'enduring or continually recurring',
      ],
      examples: ['a perennial plant', 'a perennial issue'],
    });

    expect(translationResult.success).toEqual(true);
    if (!translationResult.success) {
      return;
    }

    expect(translationResult.value[0]).toEqual('बारहमासी');
  });

  it('en to turkish', async () => {
    const translationResult = await translateUnitOfSpeechClaude({
      source: 'perennial',
      partOfSpeech: 'adjective',
      sourceLanguage: 'en',
      targetLanguage: 'tr',
      definitions: [
        'lasting or existing for a long or apparently infinite time',
        'enduring or continually recurring',
      ],
      examples: ['a perennial plant', 'a perennial issue'],
    });

    expect(translationResult.success).toEqual(true);
    if (!translationResult.success) {
      return;
    }

    console.log(translationResult.value);

    expect(translationResult.value[0]).toEqual('çok yıllık');
  });
});
