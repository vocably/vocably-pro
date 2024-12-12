import '@vocably/jest';
import { isReverseAnalysis } from '@vocably/model';
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
    expect(result.success).toEqual(true);
  });

  it('translates texts as is when language does not supported by lexicala', async () => {
    const result = await buildResult({
      source: 'labas rytas',
      sourceLanguage: 'lt',
      targetLanguage: 'en',
    });

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

    expect(result.success).toBeTruthy();
    if (result.success === false) {
      return;
    }

    expect(result.value.source).toEqual('katzen');
    expect(result.value.translation).toBeDefined();
    expect(result.value.items[0].source).toEqual('katzen');
    expect(result.value.items[0].translation).toEqual('cats');
    expect(result.value.items[1].source).toEqual('die Katze');
    expect(result.value.items[1].translation).toEqual('cat');
  });

  it('adds articles and takes translations from google', async () => {
    const result = await buildResult({
      source: 'regeling',
      sourceLanguage: 'nl',
      targetLanguage: 'ru',
    });

    expect(result.success).toBeTruthy();
    if (result.success === false) {
      return;
    }

    expect(result.value.source).toEqual('regeling');
    expect(result.value.translation).toBeDefined();
    expect(result.value.items.length).toEqual(4);
    expect(result.value.items[0].source).toEqual('de regeling');
    expect(result.value.items[0].translation).toHaveSomeOf(
      'регулирование, соглашение'
    );
  });

  it('trims article before analyzing', async () => {
    const result = await buildResult({
      source: 'de regeling',
      sourceLanguage: 'nl',
      targetLanguage: 'ru',
    });

    expect(result.success).toBeTruthy();
    if (result.success === false) {
      return;
    }

    expect(result.value.source).toEqual('de regeling');
    expect(result.value.translation).toBeDefined();
    expect(result.value.items.length).toEqual(4);
    expect(result.value.items[0].source).toEqual('de regeling');
    expect(result.value.items[0].translation).toEqual(
      'регулирование, расположение'
    );
  });

  it('skips analyze when source is more than one word', async () => {
    const result = await buildResult({
      source: 'vijf dagen',
      sourceLanguage: 'nl',
      targetLanguage: 'en',
    });

    expect(result.success).toBeTruthy();
    if (result.success === false) {
      return;
    }

    expect(result.value.source).toEqual('vijf dagen');
    expect(result.value.translation).toBeDefined();
    expect(result.value.translation.target).toEqual('five days');
    expect(result.value.items).toEqual([
      {
        source: 'vijf dagen',
        translation: 'five days',
        partOfSpeech: undefined,
        definitions: [],
        examples: [],
      },
    ]);
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

    expect(result.value.target).toEqual('правило');
    expect(result.value.source).toEqual('regel');
    expect(result.value.translation).toBeDefined();
    expect(result.value.reverseTranslations).toBeDefined();
    expect(result.value.items[0].source).toEqual('de regel');
    expect(result.value.items[0].translation).toHaveSomeOf(
      'строка, норма, правило, условие, линия'
    );
    expect(result.value.items[1].source).toEqual('het principe');
  });

  it('selects only one transcription', async () => {
    const result = await buildResult({
      source: 'hilarious',
      sourceLanguage: 'en',
      targetLanguage: 'ru',
    });

    expect(result.success).toBeTruthy();
    if (result.success === false) {
      return;
    }

    expect(result.value.translation).toBeDefined();
    expect(result.value.items[0].ipa).toEqual('hɪˈlɛəriəs');
  });

  it('should use word dictionary', async () => {
    const result = await buildResult({
      source: 'etymology',
      sourceLanguage: 'en',
      targetLanguage: 'ru',
    });
    expect(result.success).toBeTruthy();
  });

  it('filters out senseless stuff that can not be translated', async () => {
    const result = await buildResult({
      source: 'wake',
      sourceLanguage: 'en',
      targetLanguage: 'en',
    });

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

    expect(result.success).toBeTruthy();
    if (result.success === false) {
      return;
    }

    expect(result.value.items.length).toEqual(2);
    expect(result.value.items[0].translation).toHaveSomeOf(
      'трюк, прием, уловка, фокус'
    );
    expect(result.value.items[1].translation).toHaveSomeOf('обмануть');
  });

  it('properly translates dutch to non-article languages', async () => {
    const result = await buildResult({
      source: 'revalidatie',
      sourceLanguage: 'nl',
      targetLanguage: 'ru',
    });

    expect(result.success).toBeTruthy();
    if (result.success === false) {
      return;
    }

    expect(result.value.items.length).toEqual(1);
    expect(result.value.items[0].translation).toContain('реабилитация');
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

    expect(result.value.items[0].translation).toEqual('his');
    expect(result.value.items[1].translation).toEqual('be, become');
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

    expect(result.value.items[0].definitions[0]).toEqual(
      '[ korehamesseejidesu ]'
    );
    expect(result.value.items[0].translation.toLowerCase()).toEqual(
      'this is a message'
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

    expect(result.value.items.length).toBeGreaterThanOrEqual(5);
    expect(result.value.items[0].translation.toLowerCase()).toHaveSomeOf(
      'да, здесь, настоящее, сейчас'
    );
  });

  it('performs the context translation', async () => {
    const result = await buildResult({
      sourceLanguage: 'en',
      targetLanguage: 'ru',
      source: 'bank',
      context:
        "Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, 'and what is the use of a book,' thought Alice 'without pictures or conversation?'",
    });

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

    expect(result.success).toBeTruthy();
    if (result.success === false) {
      return;
    }

    expect(result.value.translation.target).toEqual('опоздать');
  });

  it('learn the language by using it', async () => {
    const result = await buildResult({
      sourceLanguage: 'en',
      targetLanguage: 'ru',
      source: 'Learn',
      context: `Learn the language by using it'`,
    });

    expect(result.success).toBeTruthy();
    if (result.success === false) {
      return;
    }

    expect(result.value.translation.target).toHaveSomeOf('учите, учить');
  });

  it('serbian', async () => {
    const result = await buildResult({
      sourceLanguage: 'sr',
      targetLanguage: 'ru',
      source: 'одржала',
      context: `НОВИ САД – Етно певачица Даница Црногорчевић одржала је у среду концерт на Великој сцени Српског народног позоришта, саопштио је`,
    });

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

    expect(result.success).toBeTruthy();
    if (result.success === false) {
      return;
    }

    expect(result.value.items[0].partOfSpeech).toEqual('noun');
    expect(result.value.items[0].translation).toEqual('кравець');

    expect(result.value.items[1].partOfSpeech).toEqual('verb');
    expect(result.value.items[1].translation).toHaveSomeOf(
      'пристосувати, стилізувати, шити'
    );
  });

  it('properly joins farsi definitions', async () => {
    const result = await buildResult({
      sourceLanguage: 'en',
      targetLanguage: 'fa',
      source: 'sister',
    });

    expect(result.success).toBeTruthy();
    if (result.success === false) {
      return;
    }

    expect(result.value.items[0].partOfSpeech).toEqual('noun');
    expect(result.value.items[0].translation).toEqual('خواهر');
  });

  it('provides lexicala examples', async () => {
    const result = await buildResult({
      sourceLanguage: 'en',
      targetLanguage: 'ru',
      source: 'sister',
    });

    expect(result.success).toBeTruthy();
    if (result.success === false) {
      return;
    }

    expect(result.value.items[0].examples).toBeDefined();
    expect(result.value.items[0].examples.length).toBeGreaterThan(0);
  });

  it('provides ipa in result', async () => {
    const result = await buildResult({
      sourceLanguage: 'en',
      targetLanguage: 'ru',
      source: 'sister',
    });

    expect(result.success).toBeTruthy();
    if (result.success === false) {
      return;
    }

    expect(result.value.items[0].ipa).toEqual('ˈsɪstər');
  });

  it('provides ipa in result for word dictionary', async () => {
    const result = await buildResult({
      sourceLanguage: 'en',
      targetLanguage: 'ru',
      source: 'etymology',
    });

    expect(result.success).toBeTruthy();
    if (result.success === false) {
      return;
    }

    expect(result.value.items[0].ipa).toEqual('ˌetɪˈmɒlədʒi');
  });

  it('zh - pinyin', async () => {
    const result = await buildResult({
      sourceLanguage: 'zh',
      targetLanguage: 'ru',
      source: '你好',
    });

    expect(result.success).toBeTruthy();
    if (result.success === false) {
      return;
    }

    expect(result.value.items[0].ipa).toEqual('nǐhǎo');
    expect(result.value.items[0].translation).toEqual('привет');
  });

  it('provides context translation', async () => {
    const result = await buildResult({
      source: 'bank',
      sourceLanguage: 'en',
      targetLanguage: 'ru',
      context:
        "Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, 'and what is the use of a book,' thought Alice 'without pictures or conversation?'",
    });
    if (result.success === false) {
      throw 'Unexpected result';
    }
    expect(result.value.translation.target).toEqual('берег');
  });

  it('sort: by part of speech', async () => {
    const result = await buildResult({
      source: 'peeped',
      sourceLanguage: 'en',
      targetLanguage: 'ru',
      context:
        "Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, 'and what is the use of a book,' thought Alice 'without pictures or conversation?'",
    });
    if (result.success === false) {
      throw 'Unexpected result';
    }

    expect(result.value.items[0].source).toEqual('peeped');
    expect(result.value.items[0].partOfSpeech).toEqual('verb');
    expect(result.value.items[1].source).toEqual('peep');
    expect(result.value.items[1].partOfSpeech).toEqual('verb');
  });

  it('sorts: put conversation before the conversion', async () => {
    const result = await buildResult({
      source: 'conversations',
      sourceLanguage: 'en',
      targetLanguage: 'ru',
      context:
        "Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, 'and what is the use of a book,' thought Alice 'without pictures or conversation?'",
    });
    if (result.success === false) {
      throw 'Unexpected result';
    }

    expect(result.value.items[0].source).toEqual('conversations');
    expect(result.value.items[0].partOfSpeech).toEqual('noun');
    expect(result.value.items[1].source).toEqual('conversation');
    expect(result.value.items[1].partOfSpeech).toEqual('noun');
  });

  it('removes similar items', async () => {
    const result = await buildResult({
      target: 'something',
      sourceLanguage: 'nl',
      targetLanguage: 'en',
    });
    if (result.success === false) {
      throw 'Unexpected result';
    }

    expect(result.value.items.length).toBeGreaterThanOrEqual(2);
  });

  it('removes "to" from english verbs', async () => {
    const result = await buildResult({
      target: 'идти',
      sourceLanguage: 'en',
      targetLanguage: 'ru',
    });
    if (result.success === false) {
      throw 'Unexpected result';
    }

    expect(result.value.items[0].source).not.toContain('to ');
  });

  it('keeps the punctuation for sentences', async () => {
    const result = await buildResult({
      source: 'Something, and something else.',
      sourceLanguage: 'en',
      targetLanguage: 'ru',
    });
    if (result.success === false) {
      throw 'Unexpected result';
    }

    expect(result.value.items[0].source).toEqual(
      'Something, and something else.'
    );
  });

  it('removes punctuation for single words', async () => {
    const result = await buildResult({
      source: 'something.',
      sourceLanguage: 'en',
      targetLanguage: 'ru',
    });
    if (result.success === false) {
      throw 'Unexpected result';
    }

    expect(result.value.items[0].source).toEqual('something');
  });

  it('uses lexicala to translate phrasal verbs', async () => {
    const result = await buildResult({
      source: 'get along',
      sourceLanguage: 'en',
      targetLanguage: 'ru',
    });
    if (result.success === false) {
      throw 'Unexpected result';
    }

    expect(result.value.items[0].source).toEqual('get along');
    expect(result.value.items[0].translation).toEqual('ладить');
    expect(result.value.items[0].definitions.length).toBeGreaterThan(0);
  });
});
