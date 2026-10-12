import '@vocably/jest';
import {
  aiAnalyse,
  getAnalyseCacheFileName,
  MAX_FREQUENCY,
  MIN_FREQUENCY,
} from './unitOfSpeechAnalyse';
import { configureTestAnalyzer } from './test/configureTestAnalyzer';

configureTestAnalyzer();

describe('unit of speech analyze', () => {
  if (process.env.TEST_SKIP_SPEC === 'true') {
    it('skip spec testing', () => {});
    return;
  }

  describe('aiAnalyse', () => {
    it('returns successful result', async () => {
      const result = await aiAnalyse({
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

    it('returns frequency within the range', async () => {
      const result = await aiAnalyse({
        source: 'house',
        partOfSpeech: 'noun',
        sourceLanguage: 'en',
      });
      expect(result.success).toBeTruthy();

      if (!result.success) {
        return;
      }

      // Analyses cached in S3 before frequency was introduced don't have it.
      if (result.value.frequency === undefined) {
        return;
      }

      expect(Number.isInteger(result.value.frequency)).toEqual(true);
      expect(result.value.frequency).toBeGreaterThanOrEqual(MIN_FREQUENCY);
      expect(result.value.frequency).toBeLessThanOrEqual(MAX_FREQUENCY);
    }, 10_000_000);
  });

  describe('filename', () => {
    it('removes slashes', () => {
      const result = getAnalyseCacheFileName({
        sourceLanguage: 'en',
        source: 'some/file/name',
        partOfSpeech: 'noun/verb',
      });
      expect(result).toEqual(
        'en/units-of-speech/some-file-name/noun-verb.json'
      );
    });

    it('woks okay', () => {
      const result = getAnalyseCacheFileName({
        sourceLanguage: 'hy',
        source: 'խնձոր',
        partOfSpeech: 'noun',
      });
      expect(result).toEqual('hy/units-of-speech/խնձոր/noun.json');
    });
  });
});
