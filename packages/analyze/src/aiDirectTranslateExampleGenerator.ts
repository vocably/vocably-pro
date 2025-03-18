import { ChatGPTLanguage, ChatGPTLanguages } from '@vocably/model';
import { AiTranslation } from './aiDirectTranslateConstants';
import { googleTranslate } from './googleTranslate';

const nouns: Record<ChatGPTLanguage, string> = {
  en: 'table',
  es: 'corazón',
  fr: 'légume',
  de: 'füße',
  zh: '书',
  'zh-TW': '燈籠',
  ja: 'お箸',
  ru: 'ёж',
  it: 'città',
  pt: 'óculos',
  ar: 'مَكتَبَة',
  nl: 'inspanning',
  ko: '젓가락',
  hi: 'क़लम',
  tr: 'çalışkan',
  sv: 'fjäder',
  no: 'fjøs',
  da: 'sø',
  fi: 'käärme',
  fa: 'ساختمان',
  pl: 'żółw',
  el: 'καρδιά',
  he: 'שָׁלוֹם',
  th: 'ช้าง',
  vi: 'bánh mì',
  id: 'meja',
  ms: 'laut',
  uk: 'їжак',
  et: 'öö',
  sq: 'iriq',
};

export const generateExamples = async () => {
  const result: Partial<
    Record<ChatGPTLanguage, Partial<Record<ChatGPTLanguage, AiTranslation>>>
  > = {};
  for (let [fromLanguage, noun] of Object.entries(nouns)) {
    for (let toLanguage of ChatGPTLanguages) {
      const translationResult = await googleTranslate(
        noun,
        fromLanguage as ChatGPTLanguage,
        toLanguage
      );
      if (translationResult.success === false) {
        throw 'Bad';
      }

      if (!result[fromLanguage]) {
        result[fromLanguage] = {};
      }

      result[fromLanguage][toLanguage] = {
        fixedSource: noun,
        translation: translationResult.value.target.toLowerCase(),
        partOfSpeech: 'noun',
      };
    }
  }

  console.log(JSON.stringify(result));
};
