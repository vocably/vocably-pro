import '@vocably/jest';
import { configureTestAnalyzer } from './test/configureTestAnalyzer';
import { translateDefinitions } from './translateDefinitions';

configureTestAnalyzer();

describe('translateDefinitions', () => {
  if (process.env.TEST_SKIP_SPEC === 'true') {
    it('skip spec testing', () => {});
    return;
  }

  it('bank', async () => {
    const translationResult = await translateDefinitions({
      source: 'bank',
      partOfSpeech: 'noun',
      sourceLanguage: 'en',
      targetLanguage: 'ru',
      definitions: [
        'a financial organization that lends and keeps money',
        'the land at the side of a river',
        'a long mass or row of similar things',
      ],
    });
    expect(translationResult.success).toEqual(true);
    // @ts-ignore
    expect(translationResult.value).toEqual(['банк', 'берег', 'ряд']);
  }, 60_000);

  it('tailor', async () => {
    const translationResult = await translateDefinitions({
      source: 'tailor',
      partOfSpeech: 'verb',
      sourceLanguage: 'en',
      targetLanguage: 'ru',
      definitions: [
        'adjust to a specific need or market',
        'style and tailor in a certain fashion',
        'create (clothes) with cloth',
      ],
    });

    console.log(translationResult);

    expect(translationResult.success).toEqual(true);

    if (!translationResult.success) {
      return;
    }

    // @ts-ignore
    expect(translationResult.value[0]).toEqual('подгонять');
  }, 60_000);

  it('de bron to en', async () => {
    const translationResult = await translateDefinitions({
      source: 'bron',
      partOfSpeech: 'noun',
      sourceLanguage: 'nl',
      targetLanguage: 'en',
      definitions: [
        'plaats waar water uit de grond komt',
        'plaats waar waardevolle stoffen in de grond zijn',
        'ets waar iets uit komt of ontstaat',
      ],
    });
    expect(translationResult.success).toEqual(true);
    // @ts-ignore
    expect(translationResult.value).toEqual(['spring', 'source', 'origin']);
  }, 60_000);

  it('de bron to ru', async () => {
    const translationResult = await translateDefinitions({
      source: 'bron',
      partOfSpeech: 'noun',
      sourceLanguage: 'nl',
      targetLanguage: 'ru',
      definitions: [
        'plaats waar water uit de grond komt',
        'plaats waar waardevolle stoffen in de grond zijn',
      ],
    });
    expect(translationResult.success).toEqual(true);
    if (!translationResult.success) {
      return;
    }
    expect(translationResult.value.length).toEqual(2);
    // @ts-ignore
    expect(translationResult.value[0]).toEqual('источник');
    expect(translationResult.value[1]).toHaveSomeOf(
      'месторождение, рудник, место нахождения'
    );
  }, 60_000);

  it('arrival', async () => {
    const translationResult = await translateDefinitions({
      source: 'arrival',
      partOfSpeech: 'noun',
      sourceLanguage: 'en',
      targetLanguage: 'ru',
      definitions: ['the time of getting to a place', 'the beginning of'],
    });
    expect(translationResult.success).toEqual(true);
    if (!translationResult.success) {
      return;
    }
    expect(translationResult.value.length).toEqual(2);
    // @ts-ignore
    expect(translationResult.value[0]).toEqual('приход');
    expect(translationResult.value[1]).toEqual('прибытие');
  }, 60_000);

  it('bottle', async () => {
    const translationResult = await translateDefinitions({
      source: 'bottle',
      partOfSpeech: 'noun',
      sourceLanguage: 'en',
      targetLanguage: 'ru',
      definitions: ['a container for liquids', 'the amount a bottle can hold'],
    });
    expect(translationResult.success).toEqual(true);
    if (!translationResult.success) {
      return;
    }
    expect(translationResult.value.length).toEqual(2);
    // @ts-ignore
    expect(translationResult.value[0]).toEqual('бутылка');
  }, 60_000);
});
