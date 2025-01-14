import { MobileOnboardingDataCollection } from '@vocably/model';

export const onboardingCollection: MobileOnboardingDataCollection = {
  en: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: 'rɪˈmɑrkəbəl',
      example: 'a remarkable achievement',
      definition: 'extraordinary or outstanding',
      translation: '',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'en',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: 'əˈraɪv',
          example:
            "* What time do you arrive?\n* when rock 'n' roll arrived in the 60s\n* The baby arrived early.",
          definition: '* to reach a place\n* to begin to exist\n* to be born',
          translation: '',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'en',
          source: 'arrival',
          ipa: 'əˈraɪvəl',
          example: "* the train's arrival\n* the arrival of summer",
          definition: '* the time of getting to a place\n* the beginning of',
          translation: '',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'question',
      sourceLanguage: 'en',
      targetLanguage: 'en',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: 'ˈkwɛstʃən',
          example:
            '* to ask/answer a question\n* a test/competition question\n* to discuss the question of global warming',
          definition:
            '* something that is asked in order to get information\n* something asked to find out what you know\n* something people disagree about',
          translation: '',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'query',
          ipa: 'ˈkwɪəri',
          example: 'I have a query about the arrangements for the trip.',
          definition: 'a question',
          translation: '',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* She saw him approaching.\n* They approached her about working for them.\n* It depends how you approach the problem.',
          definition:
            '* to move closer in distance or time\n* to come to somebody with an offer\n* to deal with somebody or something in a particular way',
          translation: '',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            "* a new/modern approach\n* the train's approach\n* to make an approach to the bank for financial assistance",
          definition:
            '* a way of doing something\n* the fact of coming closer in distance or time\n* the action of offering or proposing',
          translation: '',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
  },
  es: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: 'rɪˈmɑrkəbəl',
      example: 'a remarkable achievement',
      definition: 'extraordinary or outstanding',
      translation: 'extraordinario, excepcional, notable',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'es',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: 'əˈraɪv',
          example:
            "* What time do you arrive?\n* when rock 'n' roll arrived in the 60s\n* The baby arrived early.",
          definition: '* to reach a place\n* to begin to exist\n* to be born',
          translation: 'llegar, nacer',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'en',
          source: 'arrival',
          ipa: 'əˈraɪvəl',
          example: "* the train's arrival\n* the arrival of summer",
          definition: '* the time of getting to a place\n* the beginning of',
          translation: 'llegada',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'pregunta',
      sourceLanguage: 'en',
      targetLanguage: 'es',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: 'ˈkwɛstʃən',
          example:
            '* to ask/answer a question\n* a test/competition question\n* to discuss the question of global warming',
          definition:
            '* something that is asked in order to get information\n* something asked to find out what you know\n* something people disagree about',
          translation: 'pregunta, reto, problema, duda',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'ask',
          ipa: 'æsk',
          example:
            '* to ask for money\n* to ask a question\n* How much are they asking for the car?',
          definition:
            '* to make a request\n* to say something to get information\n* to expect somebody to do something',
          translation: 'pedir, preguntar, invitar',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            "* a new/modern approach\n* the train's approach\n* to make an approach to the bank for financial assistance",
          definition:
            '* a way of doing something\n* the fact of coming closer in distance or time\n* the action of offering or proposing',
          translation: 'enfoque, llegada, aproximación, propuesta, oferta',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* She saw him approaching.\n* They approached her about working for them.\n* It depends how you approach the problem.',
          definition:
            '* to move closer in distance or time\n* to come to somebody with an offer\n* to deal with somebody or something in a particular way',
          translation:
            'acercarse a, aproximarse a, acercarse, aproximarse, proponer, ofrecer, abordar',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  fr: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: 'rɪˈmɑrkəbəl',
      example: 'a remarkable achievement',
      definition: 'extraordinary or outstanding',
      translation: 'remarquable',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'fr',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: 'əˈraɪv',
          example:
            "* What time do you arrive?\n* when rock 'n' roll arrived in the 60s\n* The baby arrived early.",
          definition: '* to reach a place\n* to begin to exist\n* to be born',
          translation: 'arriver, apparaître',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'en',
          source: 'arrival',
          ipa: 'əˈraɪvəl',
          example: "* the train's arrival\n* the arrival of summer",
          definition: '* the time of getting to a place\n* the beginning of',
          translation: 'arrivée, apparition',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'question',
      sourceLanguage: 'en',
      targetLanguage: 'fr',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: 'ˈkwɛstʃən',
          example:
            '* to ask/answer a question\n* a test/competition question\n* to discuss the question of global warming',
          definition:
            '* something that is asked in order to get information\n* something asked to find out what you know\n* something people disagree about',
          translation: 'question, doute',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'query',
          ipa: 'ˈkwɪəri',
          example: 'I have a query about the arrangements for the trip.',
          definition: 'a question',
          translation: 'question, requête',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* She saw him approaching.\n* They approached her about working for them.\n* It depends how you approach the problem.',
          definition:
            '* to move closer in distance or time\n* to come to somebody with an offer\n* to deal with somebody or something in a particular way',
          translation:
            "(s')approcher de, proposer à, démarcher, aborder, approcher",
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            "* a new/modern approach\n* the train's approach\n* to make an approach to the bank for financial assistance",
          definition:
            '* a way of doing something\n* the fact of coming closer in distance or time\n* the action of offering or proposing',
          translation:
            "approche, façon d'aborder, arrivée, proposition, démarche",
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
  },
  de: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: 'rɪˈmɑrkəbəl',
      example: 'a remarkable achievement',
      definition: 'extraordinary or outstanding',
      translation: 'bemerkenswert',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'de',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: 'əˈraɪv',
          example:
            "* What time do you arrive?\n* when rock 'n' roll arrived in the 60s\n* The baby arrived early.",
          definition: '* to reach a place\n* to begin to exist\n* to be born',
          translation: 'ankommen, entstehen, geboren werden',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'en',
          source: 'arrival',
          ipa: 'əˈraɪvəl',
          example: "* the train's arrival\n* the arrival of summer",
          definition: '* the time of getting to a place\n* the beginning of',
          translation: 'Ankunft, Beginn',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'frage',
      sourceLanguage: 'en',
      targetLanguage: 'de',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: 'ˈkwɛstʃən',
          example:
            '* to ask/answer a question\n* a test/competition question\n* to discuss the question of global warming',
          definition:
            '* something that is asked in order to get information\n* something asked to find out what you know\n* something people disagree about',
          translation: 'Frage, Anfrage, Streitfrage',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'inquiry',
          ipa: 'ɪnˈkwaɪəri',
          example:
            '* to make an inquiry about something\n* an inquiry into the explosion',
          definition:
            '* the act of asking about something\n* an official investigation',
          translation: 'Anfrage, Ermittlung',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            "* a new/modern approach\n* the train's approach\n* to make an approach to the bank for financial assistance",
          definition:
            '* a way of doing something\n* the fact of coming closer in distance or time\n* the action of offering or proposing',
          translation: 'Ansatz, Annäherung, Vorschlag, Herangehensweise',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* She saw him approaching.\n* They approached her about working for them.\n* It depends how you approach the problem.',
          definition:
            '* to move closer in distance or time\n* to come to somebody with an offer\n* to deal with somebody or something in a particular way',
          translation: 'nähern, herantreten, angehen',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  zh: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: 'rɪˈmɑrkəbəl',
      example: 'a remarkable achievement',
      definition: 'extraordinary or outstanding',
      translation: '卓越, 非凡, 显著的',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'zh',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: 'əˈraɪv',
          example:
            "* What time do you arrive?\n* when rock 'n' roll arrived in the 60s\n* The baby arrived early.",
          definition: '* to reach a place\n* to begin to exist\n* to be born',
          translation: '到达, 出现, 出生',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'en',
          source: 'arrival',
          ipa: 'əˈraɪvəl',
          example: "* the train's arrival\n* the arrival of summer",
          definition: '* the time of getting to a place\n* the beginning of',
          translation: '到达, 抵达',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: '问题',
      sourceLanguage: 'en',
      targetLanguage: 'zh',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: 'ˈkwɛstʃən',
          example:
            '* to ask/answer a question\n* a test/competition question\n* to discuss the question of global warming',
          definition:
            '* something that is asked in order to get information\n* something asked to find out what you know\n* something people disagree about',
          translation: '问题, 疑问',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'problem',
          ipa: 'ˈprɒbləm',
          example: '* the problem of underage drinking\n* a math problem',
          definition:
            '* something that causes difficulty\n* a puzzle or question for which you have to find an answer',
          translation: '问题, 难题',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* She saw him approaching.\n* They approached her about working for them.\n* It depends how you approach the problem.',
          definition:
            '* to move closer in distance or time\n* to come to somebody with an offer\n* to deal with somebody or something in a particular way',
          translation: '接近, 靠近, 处理',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            "* a new/modern approach\n* the train's approach\n* to make an approach to the bank for financial assistance",
          definition:
            '* a way of doing something\n* the fact of coming closer in distance or time\n* the action of offering or proposing',
          translation: '方法, 接近, 提议',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
  },
  'zh-TW': {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: 'rɪˈmɑrkəbəl',
      example: 'a remarkable achievement',
      definition: 'extraordinary or outstanding',
      translation: '卓越, 非凡, 卓越的',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'zh-TW',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: 'əˈraɪv',
          example:
            "* What time do you arrive?\n* when rock 'n' roll arrived in the 60s\n* The baby arrived early.",
          definition: '* to reach a place\n* to begin to exist\n* to be born',
          translation: '到達, 出現, 出生',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'en',
          source: 'arrival',
          ipa: 'əˈraɪvəl',
          example: "* the train's arrival\n* the arrival of summer",
          definition: '* the time of getting to a place\n* the beginning of',
          translation: '到達, 抵達',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: '問題',
      sourceLanguage: 'en',
      targetLanguage: 'zh-TW',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'problem',
          ipa: 'ˈprɒbləm',
          example: '* the problem of underage drinking\n* a math problem',
          definition:
            '* something that causes difficulty\n* a puzzle or question for which you have to find an answer',
          translation: '問題, 難題',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'question',
          ipa: 'ˈkwɛstʃən',
          example:
            '* to ask/answer a question\n* a test/competition question\n* to discuss the question of global warming',
          definition:
            '* something that is asked in order to get information\n* something asked to find out what you know\n* something people disagree about',
          translation: '問題, 詢問, 疑問',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* She saw him approaching.\n* They approached her about working for them.\n* It depends how you approach the problem.',
          definition:
            '* to move closer in distance or time\n* to come to somebody with an offer\n* to deal with somebody or something in a particular way',
          translation: '接近, 靠近, 處理',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            "* a new/modern approach\n* the train's approach\n* to make an approach to the bank for financial assistance",
          definition:
            '* a way of doing something\n* the fact of coming closer in distance or time\n* the action of offering or proposing',
          translation: '方法, 接近, 提議',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
  },
  ja: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: 'rɪˈmɑrkəbəl',
      example: 'a remarkable achievement',
      definition: 'extraordinary or outstanding',
      translation: '素晴（すば）らしい, 注目すべき',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'ja',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: 'əˈraɪv',
          example:
            "* What time do you arrive?\n* when rock 'n' roll arrived in the 60s\n* The baby arrived early.",
          definition: '* to reach a place\n* to begin to exist\n* to be born',
          translation:
            '到着（とうちゃく）する, 時期（じき）が来（く）る, 生（う）まれる, 到着する',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'en',
          source: 'arrival',
          ipa: 'əˈraɪvəl',
          example: "* the train's arrival\n* the arrival of summer",
          definition: '* the time of getting to a place\n* the beginning of',
          translation: '到着（とうちゃく）, 始（はじ）まり',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: '質問',
      sourceLanguage: 'en',
      targetLanguage: 'ja',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: 'ˈkwɛstʃən',
          example:
            '* to ask/answer a question\n* a test/competition question\n* to discuss the question of global warming',
          definition:
            '* something that is asked in order to get information\n* something asked to find out what you know\n* something people disagree about',
          translation: '質問（しつもん）, 問題（もんだい）, 疑（うたが）い',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'query',
          ipa: 'ˈkwɪəri',
          example: 'I have a query about the arrangements for the trip.',
          definition: 'a question',
          translation: '質問（しつもん）, クエリ',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            "* a new/modern approach\n* the train's approach\n* to make an approach to the bank for financial assistance",
          definition:
            '* a way of doing something\n* the fact of coming closer in distance or time\n* the action of offering or proposing',
          translation:
            '方法（ほうほう）, 接近（せっきん）, 申（もう）し出（で）, アプローチ',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* She saw him approaching.\n* They approached her about working for them.\n* It depends how you approach the problem.',
          definition:
            '* to move closer in distance or time\n* to come to somebody with an offer\n* to deal with somebody or something in a particular way',
          translation:
            '近付（ちかづ）く, 話（はなし）を持（も）ちかける, 対応（たいおう）する, ~に近（ちか）い',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  ru: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: 'rɪˈmɑrkəbəl',
      example: 'a remarkable achievement',
      definition: 'extraordinary or outstanding',
      translation: 'замечательный',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'ru',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: 'əˈraɪv',
          example:
            "* What time do you arrive?\n* when rock 'n' roll arrived in the 60s\n* The baby arrived early.",
          definition: '* to reach a place\n* to begin to exist\n* to be born',
          translation: 'прибыть, появиться, родиться',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'en',
          source: 'arrival',
          ipa: 'əˈraɪvəl',
          example: "* the train's arrival\n* the arrival of summer",
          definition: '* the time of getting to a place\n* the beginning of',
          translation: 'приход, прибытие',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'вопрос',
      sourceLanguage: 'en',
      targetLanguage: 'ru',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: 'ˈkwɛstʃən',
          example:
            '* to ask/answer a question\n* a test/competition question\n* to discuss the question of global warming',
          definition:
            '* something that is asked in order to get information\n* something asked to find out what you know\n* something people disagree about',
          translation: 'вопрос, задача, спор',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'query',
          ipa: 'ˈkwɪəri',
          example: 'I have a query about the arrangements for the trip.',
          definition: 'a question',
          translation: 'вопрос, запрос',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            "* a new/modern approach\n* the train's approach\n* to make an approach to the bank for financial assistance",
          definition:
            '* a way of doing something\n* the fact of coming closer in distance or time\n* the action of offering or proposing',
          translation: 'подход, приближение, предложение',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* She saw him approaching.\n* They approached her about working for them.\n* It depends how you approach the problem.',
          definition:
            '* to move closer in distance or time\n* to come to somebody with an offer\n* to deal with somebody or something in a particular way',
          translation: 'подходить, обратиться, рассматривать',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  it: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: 'rɪˈmɑrkəbəl',
      example: 'a remarkable achievement',
      definition: 'extraordinary or outstanding',
      translation: 'notevole, straordinario',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'it',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: 'əˈraɪv',
          example:
            "* What time do you arrive?\n* when rock 'n' roll arrived in the 60s\n* The baby arrived early.",
          definition: '* to reach a place\n* to begin to exist\n* to be born',
          translation: 'arrivare, nascere',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'en',
          source: 'arrival',
          ipa: 'əˈraɪvəl',
          example: "* the train's arrival\n* the arrival of summer",
          definition: '* the time of getting to a place\n* the beginning of',
          translation: 'arrivo, inizio di',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'domanda',
      sourceLanguage: 'en',
      targetLanguage: 'it',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: 'ˈkwɛstʃən',
          example:
            '* to ask/answer a question\n* a test/competition question\n* to discuss the question of global warming',
          definition:
            '* something that is asked in order to get information\n* something asked to find out what you know\n* something people disagree about',
          translation: 'domanda, quesito, interrogativo',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'demand',
          ipa: 'dɪˈmænd',
          example:
            '* demands for better health care\n* the laws of supply and demand',
          definition:
            "* a strong statement asking for something\n* consumers' needs or desires",
          translation: 'richiesta, domanda',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            "* a new/modern approach\n* the train's approach\n* to make an approach to the bank for financial assistance",
          definition:
            '* a way of doing something\n* the fact of coming closer in distance or time\n* the action of offering or proposing',
          translation: 'approccio, avvicinamento, proposta',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* She saw him approaching.\n* They approached her about working for them.\n* It depends how you approach the problem.',
          definition:
            '* to move closer in distance or time\n* to come to somebody with an offer\n* to deal with somebody or something in a particular way',
          translation: 'avvicinarsi, rivolgersi, trattare',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  pt: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: 'rɪˈmɑrkəbəl',
      example: 'a remarkable achievement',
      definition: 'extraordinary or outstanding',
      translation: 'incrível, notável',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'pt',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: 'əˈraɪv',
          example:
            "* What time do you arrive?\n* when rock 'n' roll arrived in the 60s\n* The baby arrived early.",
          definition: '* to reach a place\n* to begin to exist\n* to be born',
          translation: 'chegar, surgir, nascer',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'en',
          source: 'arrival',
          ipa: 'əˈraɪvəl',
          example: "* the train's arrival\n* the arrival of summer",
          definition: '* the time of getting to a place\n* the beginning of',
          translation: 'chegada',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'pergunta',
      sourceLanguage: 'en',
      targetLanguage: 'pt',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: 'ˈkwɛstʃən',
          example:
            '* to ask/answer a question\n* a test/competition question\n* to discuss the question of global warming',
          definition:
            '* something that is asked in order to get information\n* something asked to find out what you know\n* something people disagree about',
          translation: 'questão, pergunta, dúvida',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'ask',
          ipa: 'æsk',
          example:
            '* to ask for money\n* to ask a question\n* How much are they asking for the car?',
          definition:
            '* to make a request\n* to say something to get information\n* to expect somebody to do something',
          translation: 'pedir, perguntar, convidar',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* She saw him approaching.\n* They approached her about working for them.\n* It depends how you approach the problem.',
          definition:
            '* to move closer in distance or time\n* to come to somebody with an offer\n* to deal with somebody or something in a particular way',
          translation: 'aproximar-se, abordar, lidar com',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            "* a new/modern approach\n* the train's approach\n* to make an approach to the bank for financial assistance",
          definition:
            '* a way of doing something\n* the fact of coming closer in distance or time\n* the action of offering or proposing',
          translation: 'abordagem, aproximação, proposta',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
  },
  ar: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: 'rɪˈmɑrkəbəl',
      example: 'a remarkable achievement',
      definition: 'extraordinary or outstanding',
      translation: 'استثنائي, بارز, ملحوظ',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'ar',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: 'əˈraɪv',
          example:
            "* What time do you arrive?\n* when rock 'n' roll arrived in the 60s\n* The baby arrived early.",
          definition: '* to reach a place\n* to begin to exist\n* to be born',
          translation: 'يصل, يبدأ الوجود, يولد',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'en',
          source: 'arrival',
          ipa: 'əˈraɪvəl',
          example: "* the train's arrival\n* the arrival of summer",
          definition: '* the time of getting to a place\n* the beginning of',
          translation: 'وصول, بداية',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'سؤال',
      sourceLanguage: 'en',
      targetLanguage: 'ar',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: 'ˈkwɛstʃən',
          example:
            '* to ask/answer a question\n* a test/competition question\n* to discuss the question of global warming',
          definition:
            '* something that is asked in order to get information\n* something asked to find out what you know\n* something people disagree about',
          translation: 'سؤال, استفسار, مسألة',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            "* a new/modern approach\n* the train's approach\n* to make an approach to the bank for financial assistance",
          definition:
            '* a way of doing something\n* the fact of coming closer in distance or time\n* the action of offering or proposing',
          translation: 'طريقة, اقتراب, عرض, نهج',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* She saw him approaching.\n* They approached her about working for them.\n* It depends how you approach the problem.',
          definition:
            '* to move closer in distance or time\n* to come to somebody with an offer\n* to deal with somebody or something in a particular way',
          translation: 'يقترب, يتقدم, يتعامل مع',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  nl: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: 'rɪˈmɑrkəbəl',
      example: 'a remarkable achievement',
      definition: 'extraordinary or outstanding',
      translation: 'opmerkelijk',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'nl',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: 'əˈraɪv',
          example:
            "* What time do you arrive?\n* when rock 'n' roll arrived in the 60s\n* The baby arrived early.",
          definition: '* to reach a place\n* to begin to exist\n* to be born',
          translation: 'aankomen, verschijnen, geboren worden',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'en',
          source: 'arrival',
          ipa: 'əˈraɪvəl',
          example: "* the train's arrival\n* the arrival of summer",
          definition: '* the time of getting to a place\n* the beginning of',
          translation: 'aankomst, begin',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'vraag',
      sourceLanguage: 'en',
      targetLanguage: 'nl',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: 'ˈkwɛstʃən',
          example:
            '* to ask/answer a question\n* a test/competition question\n* to discuss the question of global warming',
          definition:
            '* something that is asked in order to get information\n* something asked to find out what you know\n* something people disagree about',
          translation: 'vraag, ondervraging, discussie',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'ask',
          ipa: 'æsk',
          example:
            '* to ask for money\n* to ask a question\n* How much are they asking for the car?',
          definition:
            '* to make a request\n* to say something to get information\n* to expect somebody to do something',
          translation: 'vragen, vragen om, verwachten',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            "* a new/modern approach\n* the train's approach\n* to make an approach to the bank for financial assistance",
          definition:
            '* a way of doing something\n* the fact of coming closer in distance or time\n* the action of offering or proposing',
          translation: 'benadering, nadering, aanbieding',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* She saw him approaching.\n* They approached her about working for them.\n* It depends how you approach the problem.',
          definition:
            '* to move closer in distance or time\n* to come to somebody with an offer\n* to deal with somebody or something in a particular way',
          translation: 'benaderen, naderen, aankloppen',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  ko: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: 'rɪˈmɑrkəbəl',
      example: 'a remarkable achievement',
      definition: 'extraordinary or outstanding',
      translation: '주목할 만한, 놀라운',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'ko',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: 'əˈraɪv',
          example:
            "* What time do you arrive?\n* when rock 'n' roll arrived in the 60s\n* The baby arrived early.",
          definition: '* to reach a place\n* to begin to exist\n* to be born',
          translation: '도착하다, 생기다, 태어나다',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'en',
          source: 'arrival',
          ipa: 'əˈraɪvəl',
          example: "* the train's arrival\n* the arrival of summer",
          definition: '* the time of getting to a place\n* the beginning of',
          translation: '도착, 도착 시점',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: '질문',
      sourceLanguage: 'en',
      targetLanguage: 'ko',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: 'ˈkwɛstʃən',
          example:
            '* to ask/answer a question\n* a test/competition question\n* to discuss the question of global warming',
          definition:
            '* something that is asked in order to get information\n* something asked to find out what you know\n* something people disagree about',
          translation: '질문, 문제',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'query',
          ipa: 'ˈkwɪəri',
          example: 'I have a query about the arrangements for the trip.',
          definition: 'a question',
          translation: '질문, 질의',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* She saw him approaching.\n* They approached her about working for them.\n* It depends how you approach the problem.',
          definition:
            '* to move closer in distance or time\n* to come to somebody with an offer\n* to deal with somebody or something in a particular way',
          translation: '접근하다, 다가가다, 대처하다',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            "* a new/modern approach\n* the train's approach\n* to make an approach to the bank for financial assistance",
          definition:
            '* a way of doing something\n* the fact of coming closer in distance or time\n* the action of offering or proposing',
          translation: '접근법, 접근, 제안',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
  },
  hi: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: 'rɪˈmɑrkəbəl',
      example: 'a remarkable achievement',
      definition: 'extraordinary or outstanding',
      translation: 'असाधारण, विशिष्ट',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'hi',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: 'əˈraɪv',
          example:
            "* What time do you arrive?\n* when rock 'n' roll arrived in the 60s\n* The baby arrived early.",
          definition: '* to reach a place\n* to begin to exist\n* to be born',
          translation: 'पहुंचना, उदित होना, जन्म लेना',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'en',
          source: 'arrival',
          ipa: 'əˈraɪvəl',
          example: "* the train's arrival\n* the arrival of summer",
          definition: '* the time of getting to a place\n* the beginning of',
          translation: 'आगमन, पहचान',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'सवाल',
      sourceLanguage: 'en',
      targetLanguage: 'hi',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: 'ˈkwɛstʃən',
          example:
            '* to ask/answer a question\n* a test/competition question\n* to discuss the question of global warming',
          definition:
            '* something that is asked in order to get information\n* something asked to find out what you know\n* something people disagree about',
          translation: 'प्रश्न, सवाल, जिज्ञासा',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'query',
          ipa: 'ˈkwɪəri',
          example: 'I have a query about the arrangements for the trip.',
          definition: 'a question',
          translation: 'प्रश्न, सवाल',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* She saw him approaching.\n* They approached her about working for them.\n* It depends how you approach the problem.',
          definition:
            '* to move closer in distance or time\n* to come to somebody with an offer\n* to deal with somebody or something in a particular way',
          translation: 'नज़दीक आना, प्रस्ताव देना, संबंधित होना, नज़दीकियाँ',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            "* a new/modern approach\n* the train's approach\n* to make an approach to the bank for financial assistance",
          definition:
            '* a way of doing something\n* the fact of coming closer in distance or time\n* the action of offering or proposing',
          translation: 'पद्धति, निकटता, प्रस्ताव',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
  },
  tr: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: 'rɪˈmɑrkəbəl',
      example: 'a remarkable achievement',
      definition: 'extraordinary or outstanding',
      translation: 'olağanüstü, dikkate değer',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'tr',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: 'əˈraɪv',
          example:
            "* What time do you arrive?\n* when rock 'n' roll arrived in the 60s\n* The baby arrived early.",
          definition: '* to reach a place\n* to begin to exist\n* to be born',
          translation: 'varmak, ulaşmak, doğmak',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'en',
          source: 'arrival',
          ipa: 'əˈraɪvəl',
          example: "* the train's arrival\n* the arrival of summer",
          definition: '* the time of getting to a place\n* the beginning of',
          translation: 'varış, geliş',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'soru',
      sourceLanguage: 'en',
      targetLanguage: 'tr',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: 'ˈkwɛstʃən',
          example:
            '* to ask/answer a question\n* a test/competition question\n* to discuss the question of global warming',
          definition:
            '* something that is asked in order to get information\n* something asked to find out what you know\n* something people disagree about',
          translation: 'soru, sorular, tartışma',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            "* a new/modern approach\n* the train's approach\n* to make an approach to the bank for financial assistance",
          definition:
            '* a way of doing something\n* the fact of coming closer in distance or time\n* the action of offering or proposing',
          translation: 'yaklaşım, yaklaşma, teklif',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* She saw him approaching.\n* They approached her about working for them.\n* It depends how you approach the problem.',
          definition:
            '* to move closer in distance or time\n* to come to somebody with an offer\n* to deal with somebody or something in a particular way',
          translation: 'yaklaşmak, teklif etmek, ele almak',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  sv: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: 'rɪˈmɑrkəbəl',
      example: 'a remarkable achievement',
      definition: 'extraordinary or outstanding',
      translation: 'anmärkningsvärd, slående, enastående',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'sv',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: 'əˈraɪv',
          example:
            "* What time do you arrive?\n* when rock 'n' roll arrived in the 60s\n* The baby arrived early.",
          definition: '* to reach a place\n* to begin to exist\n* to be born',
          translation: 'anlända, komma fram, födas, komma, ankomma',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'en',
          source: 'arrival',
          ipa: 'əˈraɪvəl',
          example: "* the train's arrival\n* the arrival of summer",
          definition: '* the time of getting to a place\n* the beginning of',
          translation: 'ankomsttider, ankomst, uppkomst',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'fråga',
      sourceLanguage: 'en',
      targetLanguage: 'sv',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: 'ˈkwɛstʃən',
          example:
            '* to ask/answer a question\n* a test/competition question\n* to discuss the question of global warming',
          definition:
            '* something that is asked in order to get information\n* something asked to find out what you know\n* something people disagree about',
          translation:
            'fråga, testfråga, tävlingsfråga, diskussionsfråga, ifrågasättande, tvekan',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'ask',
          ipa: 'æsk',
          example:
            '* to ask for money\n* to ask a question\n* How much are they asking for the car?',
          definition:
            '* to make a request\n* to say something to get information\n* to expect somebody to do something',
          translation:
            'be om, fråga, ställa en fråga, fråga om, underätta sig, begära, be',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            "* a new/modern approach\n* the train's approach\n* to make an approach to the bank for financial assistance",
          definition:
            '* a way of doing something\n* the fact of coming closer in distance or time\n* the action of offering or proposing',
          translation:
            'strategi, hållning till, närma sig något, närmande, annalkande, begära, tillvägagångssätt',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* She saw him approaching.\n* They approached her about working for them.\n* It depends how you approach the problem.',
          definition:
            '* to move closer in distance or time\n* to come to somebody with an offer\n* to deal with somebody or something in a particular way',
          translation: 'närma sig, vända sig till, möta, nå, uppnå',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  no: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: 'rɪˈmɑrkəbəl',
      example: 'a remarkable achievement',
      definition: 'extraordinary or outstanding',
      translation: 'bemerkelsesverdig',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'no',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: 'əˈraɪv',
          example:
            "* What time do you arrive?\n* when rock 'n' roll arrived in the 60s\n* The baby arrived early.",
          definition: '* to reach a place\n* to begin to exist\n* to be born',
          translation:
            'komme, ankomme, komme frem, dukke opp, gjøre inntog, gjøre sin nedkomst, bli født',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'en',
          source: 'arrival',
          ipa: 'əˈraɪvəl',
          example: "* the train's arrival\n* the arrival of summer",
          definition: '* the time of getting to a place\n* the beginning of',
          translation: 'ankomst, fremkomst, fremvekst',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'spørsmål',
      sourceLanguage: 'en',
      targetLanguage: 'no',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: 'ˈkwɛstʃən',
          example:
            '* to ask/answer a question\n* a test/competition question\n* to discuss the question of global warming',
          definition:
            '* something that is asked in order to get information\n* something asked to find out what you know\n* something people disagree about',
          translation: 'spørsmål, problem, sak, tvil',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            "* a new/modern approach\n* the train's approach\n* to make an approach to the bank for financial assistance",
          definition:
            '* a way of doing something\n* the fact of coming closer in distance or time\n* the action of offering or proposing',
          translation: 'tilnærming, angrepsmåte, ankomst, henvendelse',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* She saw him approaching.\n* They approached her about working for them.\n* It depends how you approach the problem.',
          definition:
            '* to move closer in distance or time\n* to come to somebody with an offer\n* to deal with somebody or something in a particular way',
          translation:
            'å komme nærmere, å nærme seg, henvende seg, spørre, ta kontakt, gripe an, nærme seg',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  da: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: 'rɪˈmɑrkəbəl',
      example: 'a remarkable achievement',
      definition: 'extraordinary or outstanding',
      translation: 'bemærkelsesværdig',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'da',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: 'əˈraɪv',
          example:
            "* What time do you arrive?\n* when rock 'n' roll arrived in the 60s\n* The baby arrived early.",
          definition: '* to reach a place\n* to begin to exist\n* to be born',
          translation: 'ankomme, fødes',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'en',
          source: 'arrival',
          ipa: 'əˈraɪvəl',
          example: "* the train's arrival\n* the arrival of summer",
          definition: '* the time of getting to a place\n* the beginning of',
          translation: 'ankomst, ankomsttid',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'spørgsmål',
      sourceLanguage: 'en',
      targetLanguage: 'da',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: 'ˈkwɛstʃən',
          example:
            '* to ask/answer a question\n* a test/competition question\n* to discuss the question of global warming',
          definition:
            '* something that is asked in order to get information\n* something asked to find out what you know\n* something people disagree about',
          translation: 'spørgsmål, forespørgsel, diskussion',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            "* a new/modern approach\n* the train's approach\n* to make an approach to the bank for financial assistance",
          definition:
            '* a way of doing something\n* the fact of coming closer in distance or time\n* the action of offering or proposing',
          translation: 'tilgang, nærmelse, forslag',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* She saw him approaching.\n* They approached her about working for them.\n* It depends how you approach the problem.',
          definition:
            '* to move closer in distance or time\n* to come to somebody with an offer\n* to deal with somebody or something in a particular way',
          translation: 'nærme, tilgå, håndtere',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  fi: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: 'rɪˈmɑrkəbəl',
      example: 'a remarkable achievement',
      definition: 'extraordinary or outstanding',
      translation: 'poikkeuksellinen, huomattava',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'fi',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: 'əˈraɪv',
          example:
            "* What time do you arrive?\n* when rock 'n' roll arrived in the 60s\n* The baby arrived early.",
          definition: '* to reach a place\n* to begin to exist\n* to be born',
          translation: 'saapua, ilmestyä, syntyä',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'en',
          source: 'arrival',
          ipa: 'əˈraɪvəl',
          example: "* the train's arrival\n* the arrival of summer",
          definition: '* the time of getting to a place\n* the beginning of',
          translation: 'saapuminen, saapumisaika',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'kysymys',
      sourceLanguage: 'en',
      targetLanguage: 'fi',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: 'ˈkwɛstʃən',
          example:
            '* to ask/answer a question\n* a test/competition question\n* to discuss the question of global warming',
          definition:
            '* something that is asked in order to get information\n* something asked to find out what you know\n* something people disagree about',
          translation: 'kysymys',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* She saw him approaching.\n* They approached her about working for them.\n* It depends how you approach the problem.',
          definition:
            '* to move closer in distance or time\n* to come to somebody with an offer\n* to deal with somebody or something in a particular way',
          translation: 'lähestyä, lähestyä tarjouksella, käsitellä',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            "* a new/modern approach\n* the train's approach\n* to make an approach to the bank for financial assistance",
          definition:
            '* a way of doing something\n* the fact of coming closer in distance or time\n* the action of offering or proposing',
          translation: 'lähestymistapa, lähestyminen, ehdotus',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
  },
  fa: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: 'rɪˈmɑrkəbəl',
      example: 'a remarkable achievement',
      definition: 'extraordinary or outstanding',
      translation: 'قابل توجه، استثنایی، شگفت‌انگیز',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'fa',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: 'əˈraɪv',
          example:
            "* What time do you arrive?\n* when rock 'n' roll arrived in the 60s\n* The baby arrived early.",
          definition: '* to reach a place\n* to begin to exist\n* to be born',
          translation: 'متولد شدن، پدید آمدن، رسیدن',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'en',
          source: 'arrival',
          ipa: 'əˈraɪvəl',
          example: "* the train's arrival\n* the arrival of summer",
          definition: '* the time of getting to a place\n* the beginning of',
          translation: 'رسیدن، ورود',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'سوال',
      sourceLanguage: 'en',
      targetLanguage: 'fa',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: 'ˈkwɛstʃən',
          example:
            '* to ask/answer a question\n* a test/competition question\n* to discuss the question of global warming',
          definition:
            '* something that is asked in order to get information\n* something asked to find out what you know\n* something people disagree about',
          translation: 'پرسش، سوال',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            "* a new/modern approach\n* the train's approach\n* to make an approach to the bank for financial assistance",
          definition:
            '* a way of doing something\n* the fact of coming closer in distance or time\n* the action of offering or proposing',
          translation: 'پیشنهاد، نزدیک شدن، رویکرد',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* She saw him approaching.\n* They approached her about working for them.\n* It depends how you approach the problem.',
          definition:
            '* to move closer in distance or time\n* to come to somebody with an offer\n* to deal with somebody or something in a particular way',
          translation: 'برخورد کردن، مراجعه کردن، نزدیک شدن',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  pl: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: 'rɪˈmɑrkəbəl',
      example: 'a remarkable achievement',
      definition: 'extraordinary or outstanding',
      translation:
        'niesamowity/niesamowita/niesamowite, niezwykły/niezwykła/niezwykłe, nadzwyczajny',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'pl',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: 'əˈraɪv',
          example:
            "* What time do you arrive?\n* when rock 'n' roll arrived in the 60s\n* The baby arrived early.",
          definition: '* to reach a place\n* to begin to exist\n* to be born',
          translation: 'przybyć, przyjechać, pojawić się, urodzić się',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'en',
          source: 'arrival',
          ipa: 'əˈraɪvəl',
          example: "* the train's arrival\n* the arrival of summer",
          definition: '* the time of getting to a place\n* the beginning of',
          translation: 'przyjazd, przybycie, nadejście',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'pytanie',
      sourceLanguage: 'en',
      targetLanguage: 'pl',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: 'ˈkwɛstʃən',
          example:
            '* to ask/answer a question\n* a test/competition question\n* to discuss the question of global warming',
          definition:
            '* something that is asked in order to get information\n* something asked to find out what you know\n* something people disagree about',
          translation: 'pytanie, kwestia, wątpliwość',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            "* a new/modern approach\n* the train's approach\n* to make an approach to the bank for financial assistance",
          definition:
            '* a way of doing something\n* the fact of coming closer in distance or time\n* the action of offering or proposing',
          translation: 'podejście, nadejście, nadjechanie, zwrócenie',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* She saw him approaching.\n* They approached her about working for them.\n* It depends how you approach the problem.',
          definition:
            '* to move closer in distance or time\n* to come to somebody with an offer\n* to deal with somebody or something in a particular way',
          translation: 'zbliżać się, zwrócić się, podejść',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  el: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: 'rɪˈmɑrkəbəl',
      example: 'a remarkable achievement',
      definition: 'extraordinary or outstanding',
      translation: 'σημαντικός, εξαιρετικός, εντυπωσιακό',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'el',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: 'əˈraɪv',
          example:
            "* What time do you arrive?\n* when rock 'n' roll arrived in the 60s\n* The baby arrived early.",
          definition: '* to reach a place\n* to begin to exist\n* to be born',
          translation: 'φτάνω, καταφθάνω',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'en',
          source: 'arrival',
          ipa: 'əˈraɪvəl',
          example: "* the train's arrival\n* the arrival of summer",
          definition: '* the time of getting to a place\n* the beginning of',
          translation: 'άφιξη, έναρξη',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'ερώτηση',
      sourceLanguage: 'en',
      targetLanguage: 'el',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: 'ˈkwɛstʃən',
          example:
            '* to ask/answer a question\n* a test/competition question\n* to discuss the question of global warming',
          definition:
            '* something that is asked in order to get information\n* something asked to find out what you know\n* something people disagree about',
          translation: 'ερώτηση, ζητούμενο',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            "* a new/modern approach\n* the train's approach\n* to make an approach to the bank for financial assistance",
          definition:
            '* a way of doing something\n* the fact of coming closer in distance or time\n* the action of offering or proposing',
          translation: 'προσέγγιση, μέθοδος, προτάση',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* She saw him approaching.\n* They approached her about working for them.\n* It depends how you approach the problem.',
          definition:
            '* to move closer in distance or time\n* to come to somebody with an offer\n* to deal with somebody or something in a particular way',
          translation: 'πλησιάζω, προσεγγίζω',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  he: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: 'rɪˈmɑrkəbəl',
      example: 'a remarkable achievement',
      definition: 'extraordinary or outstanding',
      translation: 'מרשים, מְיוּחָד',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'he',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: 'əˈraɪv',
          example:
            "* What time do you arrive?\n* when rock 'n' roll arrived in the 60s\n* The baby arrived early.",
          definition: '* to reach a place\n* to begin to exist\n* to be born',
          translation: 'להגיע, להיוולד, לְהַגִּיעַ',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'en',
          source: 'arrival',
          ipa: 'əˈraɪvəl',
          example: "* the train's arrival\n* the arrival of summer",
          definition: '* the time of getting to a place\n* the beginning of',
          translation: 'הגעה, תחילת',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'שְׁאֵלָה',
      sourceLanguage: 'en',
      targetLanguage: 'he',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: 'ˈkwɛstʃən',
          example:
            '* to ask/answer a question\n* a test/competition question\n* to discuss the question of global warming',
          definition:
            '* something that is asked in order to get information\n* something asked to find out what you know\n* something people disagree about',
          translation: 'שאלה, שאלת מידע, שאלת מחלוקת, שְׁאֵלָה',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'inquiry',
          ipa: 'ɪnˈkwaɪəri',
          example:
            '* to make an inquiry about something\n* an inquiry into the explosion',
          definition:
            '* the act of asking about something\n* an official investigation',
          translation: 'שאלה, חקירה',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            "* a new/modern approach\n* the train's approach\n* to make an approach to the bank for financial assistance",
          definition:
            '* a way of doing something\n* the fact of coming closer in distance or time\n* the action of offering or proposing',
          translation: 'גישה, התקרבות, הצעה',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* She saw him approaching.\n* They approached her about working for them.\n* It depends how you approach the problem.',
          definition:
            '* to move closer in distance or time\n* to come to somebody with an offer\n* to deal with somebody or something in a particular way',
          translation: 'לגשת, להתקרב, לטפל',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  th: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: 'rɪˈmɑrkəbəl',
      example: 'a remarkable achievement',
      definition: 'extraordinary or outstanding',
      translation: 'น่าทึ่ง',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'th',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: 'əˈraɪv',
          example:
            "* What time do you arrive?\n* when rock 'n' roll arrived in the 60s\n* The baby arrived early.",
          definition: '* to reach a place\n* to begin to exist\n* to be born',
          translation: 'มาถึง, เกิด, เริ่มมี',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'en',
          source: 'arrival',
          ipa: 'əˈraɪvəl',
          example: "* the train's arrival\n* the arrival of summer",
          definition: '* the time of getting to a place\n* the beginning of',
          translation: 'การมาถึง, การเริ่มต้น',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'คำถาม',
      sourceLanguage: 'en',
      targetLanguage: 'th',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: 'ˈkwɛstʃən',
          example:
            '* to ask/answer a question\n* a test/competition question\n* to discuss the question of global warming',
          definition:
            '* something that is asked in order to get information\n* something asked to find out what you know\n* something people disagree about',
          translation: 'คำถาม, ข้อสงสัย, ปัญหา',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* She saw him approaching.\n* They approached her about working for them.\n* It depends how you approach the problem.',
          definition:
            '* to move closer in distance or time\n* to come to somebody with an offer\n* to deal with somebody or something in a particular way',
          translation: 'เข้าใกล้, เข้าหา, จัดการ',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            "* a new/modern approach\n* the train's approach\n* to make an approach to the bank for financial assistance",
          definition:
            '* a way of doing something\n* the fact of coming closer in distance or time\n* the action of offering or proposing',
          translation: 'วิธีการ, การเข้ามาใกล้, การเสนอ',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
  },
  vi: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: 'rɪˈmɑrkəbəl',
      example: 'a remarkable achievement',
      definition: 'extraordinary or outstanding',
      translation: 'đáng chú ý',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'vi',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: 'əˈraɪv',
          example:
            "* What time do you arrive?\n* when rock 'n' roll arrived in the 60s\n* The baby arrived early.",
          definition: '* to reach a place\n* to begin to exist\n* to be born',
          translation: 'đến, xuất hiện, ra đời',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'en',
          source: 'arrival',
          ipa: 'əˈraɪvəl',
          example: "* the train's arrival\n* the arrival of summer",
          definition: '* the time of getting to a place\n* the beginning of',
          translation: 'sự đến, sự xuất hiện',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'câu hỏi',
      sourceLanguage: 'en',
      targetLanguage: 'vi',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: 'ˈkwɛstʃən',
          example:
            '* to ask/answer a question\n* a test/competition question\n* to discuss the question of global warming',
          definition:
            '* something that is asked in order to get information\n* something asked to find out what you know\n* something people disagree about',
          translation: 'câu hỏi, thắc mắc',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* She saw him approaching.\n* They approached her about working for them.\n* It depends how you approach the problem.',
          definition:
            '* to move closer in distance or time\n* to come to somebody with an offer\n* to deal with somebody or something in a particular way',
          translation: 'tiếp cận, đến gần, xử lý',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            "* a new/modern approach\n* the train's approach\n* to make an approach to the bank for financial assistance",
          definition:
            '* a way of doing something\n* the fact of coming closer in distance or time\n* the action of offering or proposing',
          translation: 'cách tiếp cận, sự tiếp cận, đề xuất',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
  },
  id: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: 'rɪˈmɑrkəbəl',
      example: 'a remarkable achievement',
      definition: 'extraordinary or outstanding',
      translation: 'luar biasa, istimewa, menakjubkan',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'id',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: 'əˈraɪv',
          example:
            "* What time do you arrive?\n* when rock 'n' roll arrived in the 60s\n* The baby arrived early.",
          definition: '* to reach a place\n* to begin to exist\n* to be born',
          translation: 'datang, tiba, lahir',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'en',
          source: 'arrival',
          ipa: 'əˈraɪvəl',
          example: "* the train's arrival\n* the arrival of summer",
          definition: '* the time of getting to a place\n* the beginning of',
          translation: 'kedatangan, awal',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'pertanyaan',
      sourceLanguage: 'en',
      targetLanguage: 'id',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: 'ˈkwɛstʃən',
          example:
            '* to ask/answer a question\n* a test/competition question\n* to discuss the question of global warming',
          definition:
            '* something that is asked in order to get information\n* something asked to find out what you know\n* something people disagree about',
          translation: 'pertanyaan, tanya, soal',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            "* a new/modern approach\n* the train's approach\n* to make an approach to the bank for financial assistance",
          definition:
            '* a way of doing something\n* the fact of coming closer in distance or time\n* the action of offering or proposing',
          translation: 'pendekatan, pendekatan waktu, usulan',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* She saw him approaching.\n* They approached her about working for them.\n* It depends how you approach the problem.',
          definition:
            '* to move closer in distance or time\n* to come to somebody with an offer\n* to deal with somebody or something in a particular way',
          translation: 'mendekati, mendatangi, menangani',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  ms: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: 'rɪˈmɑrkəbəl',
      example: 'a remarkable achievement',
      definition: 'extraordinary or outstanding',
      translation: 'luar biasa, hebat, menakjubkan',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'ms',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: 'əˈraɪv',
          example:
            "* What time do you arrive?\n* when rock 'n' roll arrived in the 60s\n* The baby arrived early.",
          definition: '* to reach a place\n* to begin to exist\n* to be born',
          translation: 'tiba, sampai, lahir',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'en',
          source: 'arrival',
          ipa: 'əˈraɪvəl',
          example: "* the train's arrival\n* the arrival of summer",
          definition: '* the time of getting to a place\n* the beginning of',
          translation: 'ketibaan, awal',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'soalan',
      sourceLanguage: 'en',
      targetLanguage: 'ms',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: 'ˈkwɛstʃən',
          example:
            '* to ask/answer a question\n* a test/competition question\n* to discuss the question of global warming',
          definition:
            '* something that is asked in order to get information\n* something asked to find out what you know\n* something people disagree about',
          translation: 'soalan, pertanyaan, tanya',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            "* a new/modern approach\n* the train's approach\n* to make an approach to the bank for financial assistance",
          definition:
            '* a way of doing something\n* the fact of coming closer in distance or time\n* the action of offering or proposing',
          translation: 'pendekatan, tawaran',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* She saw him approaching.\n* They approached her about working for them.\n* It depends how you approach the problem.',
          definition:
            '* to move closer in distance or time\n* to come to somebody with an offer\n* to deal with somebody or something in a particular way',
          translation: 'mendekati, menghampiri, menangani',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  uk: {
    welcomeScreenCard: {
      language: 'en',
      source: 'remarkable',
      ipa: 'rɪˈmɑrkəbəl',
      example: 'a remarkable achievement',
      definition: 'extraordinary or outstanding',
      translation: 'видатний',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrive',
      sourceLanguage: 'en',
      targetLanguage: 'uk',
      isReversed: false,
      results: [
        {
          language: 'en',
          source: 'arrive',
          ipa: 'əˈraɪv',
          example:
            "* What time do you arrive?\n* when rock 'n' roll arrived in the 60s\n* The baby arrived early.",
          definition: '* to reach a place\n* to begin to exist\n* to be born',
          translation: "прибути, з'явитися, народитися",
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'en',
          source: 'arrival',
          ipa: 'əˈraɪvəl',
          example: "* the train's arrival\n* the arrival of summer",
          definition: '* the time of getting to a place\n* the beginning of',
          translation: 'прибуття, початок',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'запитання',
      sourceLanguage: 'en',
      targetLanguage: 'uk',
      isReversed: true,
      results: [
        {
          language: 'en',
          source: 'question',
          ipa: 'ˈkwɛstʃən',
          example:
            '* to ask/answer a question\n* a test/competition question\n* to discuss the question of global warming',
          definition:
            '* something that is asked in order to get information\n* something asked to find out what you know\n* something people disagree about',
          translation: 'питання, запит, суперечка',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
      results: [
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            "* a new/modern approach\n* the train's approach\n* to make an approach to the bank for financial assistance",
          definition:
            '* a way of doing something\n* the fact of coming closer in distance or time\n* the action of offering or proposing',
          translation: 'підхід, наближення, пропозиція',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'en',
          source: 'approach',
          ipa: 'əˈproʊtʃ',
          example:
            '* She saw him approaching.\n* They approached her about working for them.\n* It depends how you approach the problem.',
          definition:
            '* to move closer in distance or time\n* to come to somebody with an offer\n* to deal with somebody or something in a particular way',
          translation: 'підходити, звертатися, стосуватися',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
};
