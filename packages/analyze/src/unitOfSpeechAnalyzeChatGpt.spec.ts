import '@vocably/jest';
import { gptAnalyse } from './unitOfSpeechAnalyzeChatGpt';
import { MAX_FREQUENCY, MIN_FREQUENCY } from './unitOfSpeechAnalyse';
import { configureTestAnalyzer } from './test/configureTestAnalyzer';

configureTestAnalyzer();

describe('unit of speech analyze chatgpt', () => {
  if (process.env.TEST_SKIP_SPEC === 'true') {
    it('skip spec testing', () => {});
    return;
  }

  it('checks for infinitive', async () => {
    let result = await gptAnalyse({
      source: 'verbert',
      partOfSpeech: 'verb',
      sourceLanguage: 'nl',
    });
    expect(result.success).toBeTruthy();

    if (!result.success) {
      return;
    }

    expect(result.value.tense).toEqual('present');

    result = await gptAnalyse({
      source: 'verbeteren',
      partOfSpeech: 'verb',
      sourceLanguage: 'nl',
    });
    expect(result.success).toBeTruthy();

    if (!result.success) {
      return;
    }

    expect(result.value.tense).toEqual('present');
  }, 10_000_000);

  it('past tense regular verb', async () => {
    const result = await gptAnalyse({
      source: 'validieren',
      partOfSpeech: 'verb',
      sourceLanguage: 'de',
    });
    expect(result.success).toBeTruthy();

    if (!result.success) {
      return;
    }

    expect(result.value.pastTenses).toEqual('validierte, hat validiert');
  }, 10_000_000);

  it('respects identical tense of irregular verb', async () => {
    const result = await gptAnalyse({
      source: 'bring',
      partOfSpeech: 'verb',
      sourceLanguage: 'en',
    });
    expect(result.success).toBeTruthy();

    if (!result.success) {
      return;
    }

    expect(result.value.pastTenses).toEqual('brought, brought');
    expect(result.value.isIrregular).toEqual(true);
  }, 10_000_000);

  it('skips identical tense of regular verb', async () => {
    const result = await gptAnalyse({
      source: 'visit',
      partOfSpeech: 'verb',
      sourceLanguage: 'en',
    });
    expect(result.success).toBeTruthy();

    if (!result.success) {
      return;
    }

    expect(result.value.pastTenses).toEqual('visited');
    expect(result.value.isIrregular).toEqual(false);
  }, 10_000_000);

  it('past tense regular irregular verb', async () => {
    const result = await gptAnalyse({
      source: 'fahren',
      partOfSpeech: 'verb',
      sourceLanguage: 'de',
    });
    expect(result.success).toBeTruthy();

    if (!result.success) {
      return;
    }

    expect(result.value.pastTenses).toEqual('fuhr, ist gefahren');
  }, 10_000_000);

  it('plural form', async () => {
    const result = await gptAnalyse({
      source: 'auto',
      partOfSpeech: 'noun',
      sourceLanguage: 'nl',
    });
    expect(result.success).toBeTruthy();

    if (!result.success) {
      return;
    }

    expect(result.value.pluralForm).toEqual("auto's");
  }, 10_000_000);

  it('lowercase when possible', async () => {
    const result = await gptAnalyse({
      source: 'Backwash',
      partOfSpeech: 'noun',
      sourceLanguage: 'en-GB',
    });
    expect(result.success).toBeTruthy();

    if (!result.success) {
      return;
    }
    expect(result.value.source).toEqual('backwash');
  }, 10_000_000);

  it('avoid decapitalization when necessary', async () => {
    const result = await gptAnalyse({
      source: 'wednesday',
      partOfSpeech: 'noun',
      sourceLanguage: 'en-GB',
    });
    expect(result.success).toBeTruthy();

    if (!result.success) {
      return;
    }
    expect(result.value.source).toEqual('Wednesday');
  }, 10_000_000);

  it('capitalize abbreviations', async () => {
    const result = await gptAnalyse({
      source: 'IPA',
      partOfSpeech: 'noun',
      sourceLanguage: 'en-GB',
    });
    expect(result.success).toBeTruthy();

    if (!result.success) {
      return;
    }
    expect(result.value.source).toEqual('IPA');
  }, 10_000_000);

  it('returns successful result', async () => {
    const result = await gptAnalyse({
      source: 'die Frage',
      partOfSpeech: 'noun',
      sourceLanguage: 'es',
    });
    expect(result.success).toBeTruthy();

    if (!result.success) {
      return;
    }
    expect(result.value.gender).toEqual('feminine');
  }, 10_000_000);

  it('adds pronunciation', async () => {
    const result = await gptAnalyse({
      source: 'hacha',
      partOfSpeech: 'noun',
      sourceLanguage: 'es',
    });
    expect(result.success).toBeTruthy();

    if (!result.success) {
      return;
    }
    expect(result.value.transcript[0]).toHaveSomeOf(['ˈ', "'"]);
  }, 10_000_000);

  it('adds number', async () => {
    const result = await gptAnalyse({
      source: 'вши',
      partOfSpeech: 'noun',
      sourceLanguage: 'ru',
    });
    expect(result.success).toBeTruthy();

    if (!result.success) {
      return;
    }
    expect(result.value.number).toHaveSomeOf('plural');
  }, 10_000_000);

  it('source capitalized', async () => {
    const result = await gptAnalyse({
      source: 'katze',
      partOfSpeech: 'noun',
      sourceLanguage: 'de',
    });
    expect(result.success).toBeTruthy();

    if (!result.success) {
      return;
    }
    expect(result.value.source).toEqual('Katze');
  }, 10_000_000);

  it('source not capitalized', async () => {
    const result = await gptAnalyse({
      source: 'laufen',
      partOfSpeech: 'verb',
      sourceLanguage: 'de',
    });
    expect(result.success).toBeTruthy();

    if (!result.success) {
      return;
    }
    expect(result.value.source).toEqual('laufen');
  }, 10_000_000);

  it('provides the present tense for german', async () => {
    const result = await gptAnalyse({
      source: 'laufen',
      partOfSpeech: 'verb',
      sourceLanguage: 'de',
    });
    expect(result.success).toBeTruthy();

    if (!result.success) {
      return;
    }

    expect(result.value.isIrregular).toEqual(true);
    expect(result.value.presentTenses).toEqual(
      'ich laufe, du läufst, er/sie/es läuft'
    );
  }, 10_000_000);

  describe('frequency', () => {
    const expectValidFrequency = (frequency: number | undefined) => {
      expect(frequency).toBeDefined();
      expect(Number.isInteger(frequency)).toEqual(true);
      expect(frequency).toBeGreaterThanOrEqual(MIN_FREQUENCY);
      expect(frequency).toBeLessThanOrEqual(MAX_FREQUENCY);
    };

    it('rates a common word as frequent', async () => {
      const result = await gptAnalyse({
        source: 'house',
        partOfSpeech: 'noun',
        sourceLanguage: 'en',
      });
      expect(result.success).toBeTruthy();

      if (!result.success) {
        return;
      }

      expectValidFrequency(result.value.frequency);
      expect(result.value.frequency).toBeGreaterThanOrEqual(8);
    }, 10_000_000);

    it('rates a rare word as infrequent', async () => {
      const result = await gptAnalyse({
        source: 'perambulation',
        partOfSpeech: 'noun',
        sourceLanguage: 'en',
      });
      expect(result.success).toBeTruthy();

      if (!result.success) {
        return;
      }

      expectValidFrequency(result.value.frequency);
      expect(result.value.frequency).toBeLessThanOrEqual(4);
    }, 10_000_000);

    it('rates a common non-English word as frequent', async () => {
      const result = await gptAnalyse({
        source: 'Haus',
        partOfSpeech: 'noun',
        sourceLanguage: 'de',
      });
      expect(result.success).toBeTruthy();

      if (!result.success) {
        return;
      }

      expectValidFrequency(result.value.frequency);
      expect(result.value.frequency).toBeGreaterThanOrEqual(8);
    }, 10_000_000);
  });
});
