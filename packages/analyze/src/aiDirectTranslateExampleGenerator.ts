import { ChatGPTLanguage, ChatGPTLanguages } from '@vocably/model';
import { cloneDeep } from 'lodash-es';
import { AiTranslation, resultExamples } from './aiDirectTranslateConstants';
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
  af: 'hart',
  am: 'ልብ',
  hy: 'սիրտ',
  az: 'ürək',
  eu: 'bihotza',
  be: 'сэрца',
  bn: 'হৃদয়',
  bs: 'srce',
  bg: 'сърце',
  ca: 'cor',
  co: 'core',
  haw: 'Puʻuwai',
  hr: 'srce',
  cs: 'srdce',
  eo: 'koro',
  fy: 'hert',
  gl: 'corazón',
  ka: 'გული',
  gu: 'હૃદય',
  ht: 'kè',
  ha: 'zuciya',
  hu: 'szív',
  hmn: 'plawv',
  is: 'hjarta',
  ig: 'obi',
  ga: 'croí',
  jv: 'ati',
  kn: 'ಹೃದಯ',
  kk: 'жүрек',
  km: 'បេះដូង',
  rw: 'umutima',
  ku: 'dil',
  ky: 'жүрөк',
  lo: 'ຫົວໃຈ',
  lv: 'sirds',
  lt: 'širdies',
  lb: 'Häerz',
  mk: 'срцето',
  mg: 'FO',
  ml: 'ഹൃദയം',
  mt: 'qalb',
  mi: 'ngakau',
  mr: 'हृदय',
  mn: 'зүрх',
  my: 'နှလုံး',
  ne: 'मुटु',
  ny: 'mtima',
  or: 'ହୃଦୟ',
  ps: 'هرات',
  pa: 'ਦਿਲ',
  ro: 'inima',
  sm: 'loto',
  gd: 'cridhe',
  sr: 'срце',
  st: 'pelo',
  sn: 'mwoyo',
  sd: 'دل',
  si: 'හදවත',
  sk: 'srdce',
  sl: 'srce',
  so: 'wadnaha',
  su: 'haté',
  sw: 'moyo',
  tl: 'puso',
  tg: 'дил',
  ta: 'இதயம்',
  tt: 'йөрәк',
  te: 'గుండె',
  tk: 'ýürek',
  ur: 'دل',
  ug: 'يۈرەك',
  uz: 'yurak',
  cy: 'calon',
  xh: 'intliziyo',
  yi: 'הארץ',
  yo: 'okan',
  zu: 'inhliziyo',
};

export const generateExamples = async () => {
  const result: Partial<
    Record<ChatGPTLanguage, Partial<Record<ChatGPTLanguage, AiTranslation>>>
  > = cloneDeep(resultExamples);
  for (let [fromLanguage, noun] of Object.entries(nouns)) {
    for (let toLanguage of ChatGPTLanguages) {
      if (result[fromLanguage] && result[fromLanguage][toLanguage]) {
        continue;
      }
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
