import { isReverseAnalysis } from '@vocably/model';
import { inspect } from '@vocably/node-sulna';
import { buildResult } from './buildResult';
import { configureTestAnalyzer } from './test/configureTestAnalyzer';

configureTestAnalyzer();

describe('integration check for translate lambda', () => {
  if (process.env.TEST_SKIP_SPEC === 'true') {
    it('skip spec testing', () => {});
    return;
  }

  it('execute translate lambda', async () => {
    const result = await buildResult({
      source: 'dankjewel',
      targetLanguage: 'en',
    });
    console.log(inspect(result));
    expect(result.success).toEqual(true);
  });

  it('translates texts as is when language does not supported by lexicala', async () => {
    const result = await buildResult({
      source: 'labas rytas',
      sourceLanguage: 'lt',
      targetLanguage: 'en',
    });
    console.log(inspect(result));

    expect(result.success).toBeTruthy();
    if (result.success === false) {
      return;
    }

    expect(result.value.source).toEqual('labas rytas');
    expect(result.value.translation).toBeDefined();
  });

  it('skips translation when source language equals to target language', async () => {
    const result = await buildResult({
      source: 'asylum',
      targetLanguage: 'en',
    });
    console.log({ result });

    expect(result.success).toBeTruthy();
    if (result.success === false) {
      return;
    }

    expect(result.value.source).toEqual('asylum');
    expect(result.value.translation).toBeDefined();
    expect(result.value.items.length).toBeGreaterThan(0);
    expect(result.value.items[0].translation).toEqual('');
  });

  it('adds articles and takes translations from lexicala (nl)', async () => {
    const result = await buildResult({
      source: 'regeling',
      sourceLanguage: 'nl',
      targetLanguage: 'en',
    });
    console.log({ result });

    expect(result.success).toBeTruthy();
    if (result.success === false) {
      return;
    }

    expect(result.value.source).toEqual('regeling');
    expect(result.value.translation).toBeDefined();
    expect(result.value.items[0].source).toEqual('de regeling');
    expect(result.value.items[0].translation).toEqual('regulation, settlement');
  });

  it('adds articles and takes translations from lexicala (de)', async () => {
    const result = await buildResult({
      source: 'katzen',
      sourceLanguage: 'de',
      targetLanguage: 'en',
    });
    console.log({ result });

    expect(result.success).toBeTruthy();
    if (result.success === false) {
      return;
    }

    expect(result.value.source).toEqual('katzen');
    expect(result.value.translation).toBeDefined();
    expect(result.value.items[0].source).toEqual('die Katze');
    expect(result.value.items[0].translation).toEqual('cat');
  });

  it('adds articles and takes translations from google', async () => {
    const result = await buildResult({
      source: 'regeling',
      sourceLanguage: 'nl',
      targetLanguage: 'ru',
    });
    console.log({ result });

    expect(result.success).toBeTruthy();
    if (result.success === false) {
      return;
    }

    expect(result.value.source).toEqual('regeling');
    expect(result.value.translation).toBeDefined();
    expect(result.value.items.length).toEqual(4);
    expect(result.value.items[0].source).toEqual('de regeling');
    expect(result.value.items[0].translation).toEqual('расположение');
  });

  it('trims article before analyzing', async () => {
    const result = await buildResult({
      source: 'de regeling',
      sourceLanguage: 'nl',
      targetLanguage: 'ru',
    });
    console.log({ result });

    expect(result.success).toBeTruthy();
    if (result.success === false) {
      return;
    }

    expect(result.value.source).toEqual('de regeling');
    expect(result.value.translation).toBeDefined();
    expect(result.value.items.length).toEqual(4);
    expect(result.value.items[0].source).toEqual('de regeling');
    expect(result.value.items[0].translation).toEqual('расположение');
  });

  it('skips analyze when source is more than one word', async () => {
    const result = await buildResult({
      source: 'vijf dagen',
      sourceLanguage: 'nl',
      targetLanguage: 'en',
    });
    console.log({ result });

    expect(result.success).toBeTruthy();
    if (result.success === false) {
      return;
    }

    expect(result.value.source).toEqual('vijf dagen');
    expect(result.value.translation).toBeDefined();
    expect(result.value.translation.target).toEqual('five days');
    expect(result.value.items).not.toBeDefined();
  });

  it('performs reverse analyze', async () => {
    const result = await buildResult({
      target: 'правило',
      sourceLanguage: 'nl',
      targetLanguage: 'ru',
    });

    expect(result.success).toBeTruthy();
    if (result.success === false) {
      return;
    }

    expect(isReverseAnalysis(result.value)).toBeTruthy();
    if (!isReverseAnalysis(result.value)) {
      return;
    }

    console.log(inspect(result));
    expect(result.value.target).toEqual('правило');
    expect(result.value.source).toEqual('regel');
    expect(result.value.translation).toBeDefined();
    expect(result.value.reverseTranslation).toBeDefined();
    expect(result.value.items[0].source).toEqual('de regel');
    expect(result.value.items[0].translation).toEqual('правило');
    expect(result.value.items[1].source).toEqual('regelbaar');
    expect(result.value.items[1].translation).toEqual('регулируемый');
  });

  it('should use word dictionary', async () => {
    const result = await buildResult({
      source: 'etymology',
      sourceLanguage: 'en',
      targetLanguage: 'ru',
    });
    console.log(inspect(result));
    expect(result.success).toBeTruthy();
  });

  it('filters out senseless stuff that can not be translated', async () => {
    const result = await buildResult({
      source: 'wake',
      sourceLanguage: 'en',
      targetLanguage: 'en',
    });
    console.log(inspect(result));

    expect(result.success).toBeTruthy();
    if (result.success === false) {
      return;
    }

    expect(result.value.items.length).toEqual(1);
  });

  it('properly translates to non-article languages', async () => {
    const result = await buildResult({
      source: 'trick',
      sourceLanguage: 'en',
      targetLanguage: 'ru',
    });
    console.log(inspect(result));

    expect(result.success).toBeTruthy();
    if (result.success === false) {
      return;
    }

    expect(result.value.items.length).toEqual(2);
    expect(result.value.items[0].translation).toEqual('трюк');
    expect(result.value.items[1].translation).toEqual('обмануть');
  });

  it('properly translates dutch to non-article languages', async () => {
    const result = await buildResult({
      source: 'revalidatie',
      sourceLanguage: 'nl',
      targetLanguage: 'ru',
    });
    console.log(inspect(result));

    expect(result.success).toBeTruthy();
    if (result.success === false) {
      return;
    }

    expect(result.value.items.length).toEqual(1);
    expect(result.value.items[0].translation).toEqual('реабилитация');
  });

  it('avoids duplicates in translations', async () => {
    const result = await buildResult({
      source: 'zijn',
      sourceLanguage: 'nl',
      targetLanguage: 'en',
    });

    expect(result.success).toBeTruthy();
    if (result.success === false) {
      return;
    }

    expect(result.value.items[0].translation).toEqual('be, become');
    expect(result.value.items[1].translation).toEqual('his');
  });

  it('adds romaji for japanese multi translation', async () => {
    const result = await buildResult({
      sourceLanguage: 'ja',
      targetLanguage: 'en',
      target: 'this is a message',
    });

    expect(result.success).toBeTruthy();
    if (result.success === false) {
      return;
    }

    console.log(inspect(result.value));

    expect(result.value.items[0].definitions[0]).toEqual(
      '[korehamesseejidesu]'
    );
    expect(result.value.items[0].translation).toEqual('this is the message');
  });

  it('shows adds harigana, kanji and romanji to results and definitions', async () => {
    const result = await buildResult({
      sourceLanguage: 'ja',
      targetLanguage: 'ru',
      source: '母親',
    });

    expect(result.success).toBeTruthy();
    if (result.success === false) {
      return;
    }

    expect(result.value.items[0].definitions[0]).toEqual('[hahaoya]');
    expect(result.value.items[0].definitions[1]).toEqual('[母親]');
    expect(result.value.items[0].translation).toEqual('мать');
    expect(result.value.items[0].partOfSpeech).toEqual('noun');
  });
});
