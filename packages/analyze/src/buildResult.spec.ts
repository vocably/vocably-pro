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
    expect(result.value.items[0].translation).toEqual('регулирование');
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
    expect(result.value.items[0].translation).toEqual('регулирование');
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
    expect(result.value.items[0].translation).toEqual('строка, правило, норма');
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
    expect(result.value.items[0].translation).toEqual('уловка, трюк, фокус');
    expect(result.value.items[1].translation).toEqual('обманывать');
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
      '[ korehamesseejidesu ]'
    );
    expect(result.value.items[0].translation.toLowerCase()).toEqual(
      'this is the message'
    );
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

    expect(result.value.items[0].source).toEqual('母親');
    expect(result.value.items[0].definitions[0]).toEqual('[ ははおや ]');
    expect(result.value.items[0].definitions[1]).toEqual('[ hahaoya ]');
    expect(result.value.items[0].translation).toEqual('мать');
    expect(result.value.items[0].partOfSpeech).toEqual('noun');
  });

  it('excludes similar words from translations', async () => {
    const result = await buildResult({
      sourceLanguage: 'ja',
      targetLanguage: 'ru',
      target: 'да',
    });

    expect(result.success).toBeTruthy();
    if (result.success === false) {
      return;
    }

    expect(result.value.items.length).toEqual(3);

    expect(result.value.items[2].translation).toEqual('да, здесь, сейчас');
  });

  it('performs the context translation', async () => {
    const result = await buildResult({
      sourceLanguage: 'en',
      targetLanguage: 'ru',
      source: 'bank',
      context:
        "Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, 'and what is the use of a book,' thought Alice 'without pictures or conversation?'",
    });

    console.log(inspect(result));

    expect(result.success).toBeTruthy();
    if (result.success === false) {
      return;
    }

    expect(result.value.source).toEqual('bank');
    expect(result.value.translation.target).toEqual('берег');
  });

  it('performs the context translation (beginning)', async () => {
    const result = await buildResult({
      sourceLanguage: 'en',
      targetLanguage: 'ru',
      source: 'late',
      context: `There was nothing so very remarkable in that; nor did Alice think it so very much out of the way to hear the Rabbit say to itself, “Oh dear! Oh dear! I shall be late!” (when she thought it over afterwards, it occurred to her that she ought to have wondered at this, but at the time it all seemed quite natural); but when the Rabbit actually took a watch out of its waistcoat-pocket, and looked at it, and then hurried on, Alice started to her feet, for it flashed across her mind that she had never before seen a rabbit with either a waistcoat-pocket, or a watch to take out of it, and burning with curiosity, she ran across the field after it, and fortunately was just in time to see it pop down a large rabbit-hole under the hedge.'`,
    });

    console.log(inspect(result));

    expect(result.success).toBeTruthy();
    if (result.success === false) {
      return;
    }

    expect(result.value.translation.target).toEqual('поздно');
  });

  it('learn the language by using it', async () => {
    const result = await buildResult({
      sourceLanguage: 'en',
      targetLanguage: 'ru',
      source: 'Learn',
      context: `Learn the language by using it'`,
    });

    console.log(inspect(result));

    expect(result.success).toBeTruthy();
    if (result.success === false) {
      return;
    }

    expect(result.value.translation.target).toEqual('Учить');
  });

  it('serbian', async () => {
    const result = await buildResult({
      sourceLanguage: 'sr',
      targetLanguage: 'ru',
      source: 'одржала',
      context: `НОВИ САД – Етно певачица Даница Црногорчевић одржала је у среду концерт на Великој сцени Српског народног позоришта, саопштио је`,
    });

    console.log(inspect(result));

    expect(result.success).toBeTruthy();
    if (result.success === false) {
      return;
    }

    // This is a bad translation, but Serbian is poorly supported by ChatGPT
    expect(result.value.translation.target).toEqual('держал');
  });

  it('long serbian sentence', async () => {
    const result = await buildResult({
      sourceLanguage: 'sr',
      targetLanguage: 'ru',
      source:
        'ЂУРЂЕВ УПОЗОРИО Ако се настави демографска катаклизма, уз грађански рат који нам спремају, Срба у Србији више неће бити!',
      context: `ЂУРЂЕВ УПОЗОРИО Ако се настави демографска катаклизма, уз грађански рат који нам спремају, Срба у Србији више неће бити!`,
    });

    console.log(inspect(result));

    expect(result.success).toBeTruthy();
    if (result.success === false) {
      return;
    }

    expect(result.value.translation.target.length).toBeGreaterThan(110);
  });

  it('tailor - ru', async () => {
    const result = await buildResult({
      sourceLanguage: 'en',
      targetLanguage: 'ru',
      source: 'tailor',
    });

    console.log(inspect(result));

    expect(result.success).toBeTruthy();
    if (result.success === false) {
      return;
    }

    expect(result.value.items[0].partOfSpeech).toEqual('noun');
    expect(result.value.items[0].translation).toEqual('портной');

    expect(result.value.items[1].partOfSpeech).toEqual('verb');
    expect(result.value.items[1].translation).toContain('подгонять');
  });

  it('tailor - uk', async () => {
    const result = await buildResult({
      sourceLanguage: 'en',
      targetLanguage: 'uk',
      source: 'tailor',
    });

    console.log(inspect(result));

    expect(result.success).toBeTruthy();
    if (result.success === false) {
      return;
    }

    expect(result.value.items[0].partOfSpeech).toEqual('noun');
    expect(result.value.items[0].translation).toEqual('кравець');

    expect(result.value.items[1].partOfSpeech).toEqual('verb');
    expect(result.value.items[1].translation).toContain('пристосовувати');
  });

  it('properly joins farsi definitions', async () => {
    const result = await buildResult({
      sourceLanguage: 'en',
      targetLanguage: 'fa',
      source: 'sister',
    });

    console.log(inspect(result));

    expect(result.success).toBeTruthy();
    if (result.success === false) {
      return;
    }

    expect(result.value.items[0].partOfSpeech).toEqual('noun');
    expect(result.value.items[0].translation).toContain('خواهر');
    expect(result.value.items[0].translation).toContain('، ');
  });
});
