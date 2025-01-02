import '@vocably/jest';
import { configureTestAnalyzer } from './test/configureTestAnalyzer';

configureTestAnalyzer();

describe('exampleGenerator', () => {
  if (process.env.TEST_SKIP_SPEC === 'true') {
    it('skip spec testing', () => {});
    return;
  }

  it('generate', async () => {
    // await generateExamples();
    expect(true).toBe(true);
  }, 1_000_000_000);
});
