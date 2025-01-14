import { MobileOnboardingDataCollection } from '@vocably/model';

export const onboardingCollection: MobileOnboardingDataCollection = {
  en: {
    welcomeScreenCard: {
      language: 'de',
      source: 'bemerkenswert',
      ipa: 'bəˈmɛrkənsveːɐt',
      example:
        '* bemerkenswerte Fortschritte machen\n* Das ist nur insofern bemerkenswert, als ...',
      definition:
        '* in positiver Weise auffallend\n* so interessant, dass man sich darüber äußert',
      translation: 'remarkable, notable',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'ankommen',
      sourceLanguage: 'de',
      targetLanguage: 'en',
      isReversed: false,
      results: [
        {
          language: 'de',
          source: 'ankommen',
          ipa: 'ˈankɔmən',
          example:
            '* Wann kommt der Zug an?\n* Komm mir dann aber nicht an und bitte um mehr Geld.',
          definition:
            '* das Ziel eines Weges, einer Fahrt erreichen\n* sich an jemanden wenden und ihn belästigen',
          translation: 'to arrive, to come',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'question',
      sourceLanguage: 'de',
      targetLanguage: 'en',
      isReversed: true,
      results: [
        {
          language: 'de',
          source: 'die Frage',
          ipa: 'ˈfraːgə',
          example: '* Prüfungsfrage\n* eine Frage anschneiden',
          definition:
            '* sprachliche Äußerung, mit der man um Informationen bittet\n* ein Problem, eine Angelegenheit oder ein Thema, mit dem man sich beschäftigt',
          translation: 'question, matter, issue, topic',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'de',
          source: 'die Anfrage',
          ipa: 'ˈanfraːgə',
          example:
            '* Zu ihrer Anfrage teilen wir Ihnen mit, dass ...\n* eine parlamentarische Anfrage',
          definition: 'schriftliche Frage von Abgeordneten an die Regierung',
          translation: 'inquiry, request, question',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Die am *häufigsten* übersehenen Wartungsaufgaben betreffen den Kampf gegen Staub. Ihr Haus ist voller Filter und Belüftungsöffnungen, die Staub und andere Dinge auffangen, die Lebensdauer Ihrer Systeme verlängern und die Luft sauber halten. Mindestens einmal im Jahr sollten Sie Folgendes reinigen und ersetzen:',
      results: [
        {
          language: 'de',
          source: 'häufigsten',
          ipa: '',
          example: '',
          definition: '',
          translation: 'most frequently',
          partOfSpeech: 'adverb',
          tags: [],
        },
        {
          language: 'de',
          source: 'häufig',
          ipa: 'ˈhɔyfɪç',
          example: 'ein häufiger Fehler',
          definition: 'oft auftretend',
          translation: 'frequent, common',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
  },
  es: {
    welcomeScreenCard: {
      language: 'de',
      source: 'bemerkenswert',
      ipa: 'bəˈmɛrkənsveːɐt',
      example:
        '* bemerkenswerte Fortschritte machen\n* Das ist nur insofern bemerkenswert, als ...',
      definition:
        '* in positiver Weise auffallend\n* so interessant, dass man sich darüber äußert',
      translation: 'notable, destacable',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'ankommen',
      sourceLanguage: 'de',
      targetLanguage: 'es',
      isReversed: false,
      results: [
        {
          language: 'de',
          source: 'ankommen',
          ipa: 'ˈankɔmən',
          example:
            '* Wann kommt der Zug an?\n* Komm mir dann aber nicht an und bitte um mehr Geld.',
          definition:
            '* das Ziel eines Weges, einer Fahrt erreichen\n* sich an jemanden wenden und ihn belästigen',
          translation: 'llegar, molestar',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'pregunta',
      sourceLanguage: 'de',
      targetLanguage: 'es',
      isReversed: true,
      results: [
        {
          language: 'de',
          source: 'die Frage',
          ipa: 'ˈfraːgə',
          example: '* Prüfungsfrage\n* eine Frage anschneiden',
          definition:
            '* sprachliche Äußerung, mit der man um Informationen bittet\n* ein Problem, eine Angelegenheit oder ein Thema, mit dem man sich beschäftigt',
          translation: 'pregunta, cuestión',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'de',
          source: 'die Anfrage',
          ipa: 'ˈanfraːgə',
          example:
            '* Zu ihrer Anfrage teilen wir Ihnen mit, dass ...\n* eine parlamentarische Anfrage',
          definition: 'schriftliche Frage von Abgeordneten an die Regierung',
          translation: 'pregunta escrita, consulta',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Die am *häufigsten* übersehenen Wartungsaufgaben betreffen den Kampf gegen Staub. Ihr Haus ist voller Filter und Belüftungsöffnungen, die Staub und andere Dinge auffangen, die Lebensdauer Ihrer Systeme verlängern und die Luft sauber halten. Mindestens einmal im Jahr sollten Sie Folgendes reinigen und ersetzen:',
      results: [
        {
          language: 'de',
          source: 'häufigsten',
          ipa: '',
          example: '',
          definition: '',
          translation: 'más frecuentes',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'de',
          source: 'häufig',
          ipa: 'ˈhɔyfɪç',
          example: 'ein häufiger Fehler',
          definition: 'oft auftretend',
          translation: 'frecuente',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
  },
  fr: {
    welcomeScreenCard: {
      language: 'de',
      source: 'bemerkenswert',
      ipa: 'bəˈmɛrkənsveːɐt',
      example:
        '* bemerkenswerte Fortschritte machen\n* Das ist nur insofern bemerkenswert, als ...',
      definition:
        '* in positiver Weise auffallend\n* so interessant, dass man sich darüber äußert',
      translation: 'remarquable, notable',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'ankommen',
      sourceLanguage: 'de',
      targetLanguage: 'fr',
      isReversed: false,
      results: [
        {
          language: 'de',
          source: 'ankommen',
          ipa: 'ˈankɔmən',
          example:
            '* Wann kommt der Zug an?\n* Komm mir dann aber nicht an und bitte um mehr Geld.',
          definition:
            '* das Ziel eines Weges, einer Fahrt erreichen\n* sich an jemanden wenden und ihn belästigen',
          translation: 'arriver, importuner',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'question',
      sourceLanguage: 'de',
      targetLanguage: 'fr',
      isReversed: true,
      results: [
        {
          language: 'de',
          source: 'die Frage',
          ipa: 'ˈfraːgə',
          example: '* Prüfungsfrage\n* eine Frage anschneiden',
          definition:
            '* sprachliche Äußerung, mit der man um Informationen bittet\n* ein Problem, eine Angelegenheit oder ein Thema, mit dem man sich beschäftigt',
          translation: 'question, problème',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'de',
          source: 'Fragen',
          ipa: '',
          example: '',
          definition: '',
          translation: 'questions',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Die am *häufigsten* übersehenen Wartungsaufgaben betreffen den Kampf gegen Staub. Ihr Haus ist voller Filter und Belüftungsöffnungen, die Staub und andere Dinge auffangen, die Lebensdauer Ihrer Systeme verlängern und die Luft sauber halten. Mindestens einmal im Jahr sollten Sie Folgendes reinigen und ersetzen:',
      results: [
        {
          language: 'de',
          source: 'häufigsten',
          ipa: '',
          example: '',
          definition: '',
          translation: 'le plus fréquent',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'de',
          source: 'häufig',
          ipa: 'ˈhɔyfɪç',
          example: 'ein häufiger Fehler',
          definition: 'oft auftretend',
          translation: 'fréquent',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
  },
  de: {
    welcomeScreenCard: {
      language: 'de',
      source: 'bemerkenswert',
      ipa: 'bəˈmɛrkənsveːɐt',
      example:
        '* bemerkenswerte Fortschritte machen\n* Das ist nur insofern bemerkenswert, als ...',
      definition:
        '* in positiver Weise auffallend\n* so interessant, dass man sich darüber äußert',
      translation: '',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'ankommen',
      sourceLanguage: 'de',
      targetLanguage: 'de',
      isReversed: false,
      results: [
        {
          language: 'de',
          source: 'ankommen',
          ipa: 'ˈankɔmən',
          example:
            '* Wann kommt der Zug an?\n* Komm mir dann aber nicht an und bitte um mehr Geld.',
          definition:
            '* das Ziel eines Weges, einer Fahrt erreichen\n* sich an jemanden wenden und ihn belästigen',
          translation: '',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'frage',
      sourceLanguage: 'de',
      targetLanguage: 'de',
      isReversed: true,
      results: [
        {
          language: 'de',
          source: 'question',
          ipa: '',
          example: '',
          definition: '',
          translation: 'question',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'de',
          source: 'to ask',
          ipa: '',
          example: '',
          definition: '',
          translation: 'to ask',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Die am *häufigsten* übersehenen Wartungsaufgaben betreffen den Kampf gegen Staub. Ihr Haus ist voller Filter und Belüftungsöffnungen, die Staub und andere Dinge auffangen, die Lebensdauer Ihrer Systeme verlängern und die Luft sauber halten. Mindestens einmal im Jahr sollten Sie Folgendes reinigen und ersetzen:',
      results: [
        {
          language: 'de',
          source: 'häufigsten',
          ipa: '',
          example: '',
          definition: '',
          translation: 'häufigsten',
          partOfSpeech: '',
          tags: [],
        },
        {
          language: 'de',
          source: 'häufig',
          ipa: 'ˈhɔyfɪç',
          example: 'ein häufiger Fehler',
          definition: 'oft auftretend',
          translation: '',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
  },
  zh: {
    welcomeScreenCard: {
      language: 'de',
      source: 'bemerkenswert',
      ipa: 'bəˈmɛrkənsveːɐt',
      example:
        '* bemerkenswerte Fortschritte machen\n* Das ist nur insofern bemerkenswert, als ...',
      definition:
        '* in positiver Weise auffallend\n* so interessant, dass man sich darüber äußert',
      translation: '显著的, 值得注意的',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'ankommen',
      sourceLanguage: 'de',
      targetLanguage: 'zh',
      isReversed: false,
      results: [
        {
          language: 'de',
          source: 'ankommen',
          ipa: 'ˈankɔmən',
          example:
            '* Wann kommt der Zug an?\n* Komm mir dann aber nicht an und bitte um mehr Geld.',
          definition:
            '* das Ziel eines Weges, einer Fahrt erreichen\n* sich an jemanden wenden und ihn belästigen',
          translation: '到达, 打扰',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: '问题',
      sourceLanguage: 'de',
      targetLanguage: 'zh',
      isReversed: true,
      results: [
        {
          language: 'de',
          source: 'die Frage',
          ipa: 'ˈfraːgə',
          example: '* Prüfungsfrage\n* eine Frage anschneiden',
          definition:
            '* sprachliche Äußerung, mit der man um Informationen bittet\n* ein Problem, eine Angelegenheit oder ein Thema, mit dem man sich beschäftigt',
          translation: '问题, 询问',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'de',
          source: 'das Problem',
          ipa: 'proˈbleːm',
          example: '* ein Problem lösen\n* Problemmüll',
          definition:
            '* komplizierte Aufgabe, schwierige Frage o. Ä.\n* etwas, das unangenehm ist, stört',
          translation: '问题, 难题',
          partOfSpeech: 'noun',
          g: 'n',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Die am *häufigsten* übersehenen Wartungsaufgaben betreffen den Kampf gegen Staub. Ihr Haus ist voller Filter und Belüftungsöffnungen, die Staub und andere Dinge auffangen, die Lebensdauer Ihrer Systeme verlängern und die Luft sauber halten. Mindestens einmal im Jahr sollten Sie Folgendes reinigen und ersetzen:',
      results: [
        {
          language: 'de',
          source: 'häufigsten',
          ipa: '',
          example: '',
          definition: '',
          translation: '最常见的',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'de',
          source: 'häufig',
          ipa: 'ˈhɔyfɪç',
          example: 'ein häufiger Fehler',
          definition: 'oft auftretend',
          translation: '频繁',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
  },
  'zh-TW': {
    welcomeScreenCard: {
      language: 'de',
      source: 'bemerkenswert',
      ipa: 'bəˈmɛrkənsveːɐt',
      example:
        '* bemerkenswerte Fortschritte machen\n* Das ist nur insofern bemerkenswert, als ...',
      definition:
        '* in positiver Weise auffallend\n* so interessant, dass man sich darüber äußert',
      translation: '值得注意的, 引人注目的',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'ankommen',
      sourceLanguage: 'de',
      targetLanguage: 'zh-TW',
      isReversed: false,
      results: [
        {
          language: 'de',
          source: 'ankommen',
          ipa: 'ˈankɔmən',
          example:
            '* Wann kommt der Zug an?\n* Komm mir dann aber nicht an und bitte um mehr Geld.',
          definition:
            '* das Ziel eines Weges, einer Fahrt erreichen\n* sich an jemanden wenden und ihn belästigen',
          translation: '到達, 打擾',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: '問題',
      sourceLanguage: 'de',
      targetLanguage: 'zh-TW',
      isReversed: true,
      results: [
        {
          language: 'de',
          source: 'die Frage',
          ipa: 'ˈfraːgə',
          example: '* Prüfungsfrage\n* eine Frage anschneiden',
          definition:
            '* sprachliche Äußerung, mit der man um Informationen bittet\n* ein Problem, eine Angelegenheit oder ein Thema, mit dem man sich beschäftigt',
          translation: '問題, 詢問',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'de',
          source: 'das Problem',
          ipa: 'proˈbleːm',
          example: '* ein Problem lösen\n* Problemmüll',
          definition:
            '* komplizierte Aufgabe, schwierige Frage o. Ä.\n* etwas, das unangenehm ist, stört',
          translation: '問題, 困難',
          partOfSpeech: 'noun',
          g: 'n',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Die am *häufigsten* übersehenen Wartungsaufgaben betreffen den Kampf gegen Staub. Ihr Haus ist voller Filter und Belüftungsöffnungen, die Staub und andere Dinge auffangen, die Lebensdauer Ihrer Systeme verlängern und die Luft sauber halten. Mindestens einmal im Jahr sollten Sie Folgendes reinigen und ersetzen:',
      results: [
        {
          language: 'de',
          source: 'häufigsten',
          ipa: '',
          example: '',
          definition: '',
          translation: '最常見的',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'de',
          source: 'häufig',
          ipa: 'ˈhɔyfɪç',
          example: 'ein häufiger Fehler',
          definition: 'oft auftretend',
          translation: '常見',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
  },
  ja: {
    welcomeScreenCard: {
      language: 'de',
      source: 'bemerkenswert',
      ipa: 'bəˈmɛrkənsveːɐt',
      example:
        '* bemerkenswerte Fortschritte machen\n* Das ist nur insofern bemerkenswert, als ...',
      definition:
        '* in positiver Weise auffallend\n* so interessant, dass man sich darüber äußert',
      translation:
        '著（いちじる）しい, 注目（ちゅうもく）に値（あたい）する, 注目すべき',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'ankommen',
      sourceLanguage: 'de',
      targetLanguage: 'ja',
      isReversed: false,
      results: [
        {
          language: 'de',
          source: 'ankommen',
          ipa: 'ˈankɔmən',
          example:
            '* Wann kommt der Zug an?\n* Komm mir dann aber nicht an und bitte um mehr Geld.',
          definition:
            '* das Ziel eines Weges, einer Fahrt erreichen\n* sich an jemanden wenden und ihn belästigen',
          translation: '着（つ）く, 面倒（めんどう）をかける, 到着する',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: '質問',
      sourceLanguage: 'de',
      targetLanguage: 'ja',
      isReversed: true,
      results: [
        {
          language: 'de',
          source: 'die Frage',
          ipa: 'ˈfraːgə',
          example: '* Prüfungsfrage\n* eine Frage anschneiden',
          definition:
            '* sprachliche Äußerung, mit der man um Informationen bittet\n* ein Problem, eine Angelegenheit oder ein Thema, mit dem man sich beschäftigt',
          translation: '質問（しつもん）, 問題（もんだい）',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'de',
          source: 'die Anfrage',
          ipa: 'ˈanfraːgə',
          example:
            '* Zu ihrer Anfrage teilen wir Ihnen mit, dass ...\n* eine parlamentarische Anfrage',
          definition: 'schriftliche Frage von Abgeordneten an die Regierung',
          translation:
            '問（と）い合（あ）わせ, 質問状（しつもんじょう）, 問い合わせ',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Die am *häufigsten* übersehenen Wartungsaufgaben betreffen den Kampf gegen Staub. Ihr Haus ist voller Filter und Belüftungsöffnungen, die Staub und andere Dinge auffangen, die Lebensdauer Ihrer Systeme verlängern und die Luft sauber halten. Mindestens einmal im Jahr sollten Sie Folgendes reinigen und ersetzen:',
      results: [
        {
          language: 'de',
          source: 'häufigsten',
          ipa: '',
          example: '',
          definition: '',
          translation: '最も頻繁に',
          partOfSpeech: 'adverb',
          tags: [],
        },
        {
          language: 'de',
          source: 'häufig',
          ipa: 'ˈhɔyfɪç',
          example: 'ein häufiger Fehler',
          definition: 'oft auftretend',
          translation: '度重（たびかさ）なる',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
  },
  ru: {
    welcomeScreenCard: {
      language: 'de',
      source: 'bemerkenswert',
      ipa: 'bəˈmɛrkənsveːɐt',
      example:
        '* bemerkenswerte Fortschritte machen\n* Das ist nur insofern bemerkenswert, als ...',
      definition:
        '* in positiver Weise auffallend\n* so interessant, dass man sich darüber äußert',
      translation: 'замечательный, выдающийся',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'ankommen',
      sourceLanguage: 'de',
      targetLanguage: 'ru',
      isReversed: false,
      results: [
        {
          language: 'de',
          source: 'ankommen',
          ipa: 'ˈankɔmən',
          example:
            '* Wann kommt der Zug an?\n* Komm mir dann aber nicht an und bitte um mehr Geld.',
          definition:
            '* das Ziel eines Weges, einer Fahrt erreichen\n* sich an jemanden wenden und ihn belästigen',
          translation: 'прибывать, доставать',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'вопрос',
      sourceLanguage: 'de',
      targetLanguage: 'ru',
      isReversed: true,
      results: [
        {
          language: 'de',
          source: 'die Frage',
          ipa: 'ˈfraːgə',
          example: '* Prüfungsfrage\n* eine Frage anschneiden',
          definition:
            '* sprachliche Äußerung, mit der man um Informationen bittet\n* ein Problem, eine Angelegenheit oder ein Thema, mit dem man sich beschäftigt',
          translation: 'вопрос, проблема',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Die am *häufigsten* übersehenen Wartungsaufgaben betreffen den Kampf gegen Staub. Ihr Haus ist voller Filter und Belüftungsöffnungen, die Staub und andere Dinge auffangen, die Lebensdauer Ihrer Systeme verlängern und die Luft sauber halten. Mindestens einmal im Jahr sollten Sie Folgendes reinigen und ersetzen:',
      results: [
        {
          language: 'de',
          source: 'häufigsten',
          ipa: '',
          example: '',
          definition: '',
          translation: 'наиболее часто',
          partOfSpeech: 'adverb',
          tags: [],
        },
        {
          language: 'de',
          source: 'häufig',
          ipa: 'ˈhɔyfɪç',
          example: 'ein häufiger Fehler',
          definition: 'oft auftretend',
          translation: 'часто',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
  },
  it: {
    welcomeScreenCard: {
      language: 'de',
      source: 'bemerkenswert',
      ipa: 'bəˈmɛrkənsveːɐt',
      example:
        '* bemerkenswerte Fortschritte machen\n* Das ist nur insofern bemerkenswert, als ...',
      definition:
        '* in positiver Weise auffallend\n* so interessant, dass man sich darüber äußert',
      translation: 'notevole, significativo',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'ankommen',
      sourceLanguage: 'de',
      targetLanguage: 'it',
      isReversed: false,
      results: [
        {
          language: 'de',
          source: 'ankommen',
          ipa: 'ˈankɔmən',
          example:
            '* Wann kommt der Zug an?\n* Komm mir dann aber nicht an und bitte um mehr Geld.',
          definition:
            '* das Ziel eines Weges, einer Fahrt erreichen\n* sich an jemanden wenden und ihn belästigen',
          translation: 'arrivare, rivolgersi',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'domanda',
      sourceLanguage: 'de',
      targetLanguage: 'it',
      isReversed: true,
      results: [
        {
          language: 'de',
          source: 'die Frage',
          ipa: 'ˈfraːgə',
          example: '* Prüfungsfrage\n* eine Frage anschneiden',
          definition:
            '* sprachliche Äußerung, mit der man um Informationen bittet\n* ein Problem, eine Angelegenheit oder ein Thema, mit dem man sich beschäftigt',
          translation: 'domanda, questione',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'de',
          source: 'die Anfrage',
          ipa: 'ˈanfraːgə',
          example:
            '* Zu ihrer Anfrage teilen wir Ihnen mit, dass ...\n* eine parlamentarische Anfrage',
          definition: 'schriftliche Frage von Abgeordneten an die Regierung',
          translation: 'interrogazione, richiesta',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Die am *häufigsten* übersehenen Wartungsaufgaben betreffen den Kampf gegen Staub. Ihr Haus ist voller Filter und Belüftungsöffnungen, die Staub und andere Dinge auffangen, die Lebensdauer Ihrer Systeme verlängern und die Luft sauber halten. Mindestens einmal im Jahr sollten Sie Folgendes reinigen und ersetzen:',
      results: [
        {
          language: 'de',
          source: 'häufigsten',
          ipa: '',
          example: '',
          definition: '',
          translation: 'più frequenti',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'de',
          source: 'häufig',
          ipa: 'ˈhɔyfɪç',
          example: 'ein häufiger Fehler',
          definition: 'oft auftretend',
          translation: 'frequente',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
  },
  pt: {
    welcomeScreenCard: {
      language: 'de',
      source: 'bemerkenswert',
      ipa: 'bəˈmɛrkənsveːɐt',
      example:
        '* bemerkenswerte Fortschritte machen\n* Das ist nur insofern bemerkenswert, als ...',
      definition:
        '* in positiver Weise auffallend\n* so interessant, dass man sich darüber äußert',
      translation: 'notável',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'ankommen',
      sourceLanguage: 'de',
      targetLanguage: 'pt',
      isReversed: false,
      results: [
        {
          language: 'de',
          source: 'ankommen',
          ipa: 'ˈankɔmən',
          example:
            '* Wann kommt der Zug an?\n* Komm mir dann aber nicht an und bitte um mehr Geld.',
          definition:
            '* das Ziel eines Weges, einer Fahrt erreichen\n* sich an jemanden wenden und ihn belästigen',
          translation: 'chegar, vir',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'pergunta',
      sourceLanguage: 'de',
      targetLanguage: 'pt',
      isReversed: true,
      results: [
        {
          language: 'de',
          source: 'die Frage',
          ipa: 'ˈfraːgə',
          example: '* Prüfungsfrage\n* eine Frage anschneiden',
          definition:
            '* sprachliche Äußerung, mit der man um Informationen bittet\n* ein Problem, eine Angelegenheit oder ein Thema, mit dem man sich beschäftigt',
          translation: 'pergunta, questão',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Die am *häufigsten* übersehenen Wartungsaufgaben betreffen den Kampf gegen Staub. Ihr Haus ist voller Filter und Belüftungsöffnungen, die Staub und andere Dinge auffangen, die Lebensdauer Ihrer Systeme verlängern und die Luft sauber halten. Mindestens einmal im Jahr sollten Sie Folgendes reinigen und ersetzen:',
      results: [
        {
          language: 'de',
          source: 'häufigsten',
          ipa: '',
          example: '',
          definition: '',
          translation: 'mais frequentes',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'de',
          source: 'häufig',
          ipa: 'ˈhɔyfɪç',
          example: 'ein häufiger Fehler',
          definition: 'oft auftretend',
          translation: 'frequente',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
  },
  ar: {
    welcomeScreenCard: {
      language: 'de',
      source: 'bemerkenswert',
      ipa: 'bəˈmɛrkənsveːɐt',
      example:
        '* bemerkenswerte Fortschritte machen\n* Das ist nur insofern bemerkenswert, als ...',
      definition:
        '* in positiver Weise auffallend\n* so interessant, dass man sich darüber äußert',
      translation:
        '‎مُتَمَيِّزٌ‎, ‎‏ مُمَيَّزٌ ‏‎, مَلْحُوظٌ, ‎جَدِيرٌ بِالذِّكْرِ‎, ‎جَدِيرٌ بِالْمُلَاحَظَةِ‎, ملحوظ',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'ankommen',
      sourceLanguage: 'de',
      targetLanguage: 'ar',
      isReversed: false,
      results: [
        {
          language: 'de',
          source: 'ankommen',
          ipa: 'ˈankɔmən',
          example:
            '* Wann kommt der Zug an?\n* Komm mir dann aber nicht an und bitte um mehr Geld.',
          definition:
            '* das Ziel eines Weges, einer Fahrt erreichen\n* sich an jemanden wenden und ihn belästigen',
          translation:
            '‎وَصَلَ‎, ‎قَدِمَ‎, ‎أَثْقَلَ عَلَى‎, ‎ضَايَقَ‎, ‎أَزْعَجَ‎, يصل',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'سؤال',
      sourceLanguage: 'de',
      targetLanguage: 'ar',
      isReversed: true,
      results: [
        {
          language: 'de',
          source: 'die Frage',
          ipa: 'ˈfraːgə',
          example: '* Prüfungsfrage\n* eine Frage anschneiden',
          definition:
            '* sprachliche Äußerung, mit der man um Informationen bittet\n* ein Problem, eine Angelegenheit oder ein Thema, mit dem man sich beschäftigt',
          translation: '‎سُؤَالٌ‎, ‎مَسْأَلَةٌ‎, ‎قَضِيَّةٌ‎, سؤال',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Die am *häufigsten* übersehenen Wartungsaufgaben betreffen den Kampf gegen Staub. Ihr Haus ist voller Filter und Belüftungsöffnungen, die Staub und andere Dinge auffangen, die Lebensdauer Ihrer Systeme verlängern und die Luft sauber halten. Mindestens einmal im Jahr sollten Sie Folgendes reinigen und ersetzen:',
      results: [
        {
          language: 'de',
          source: 'häufigsten',
          ipa: '',
          example: '',
          definition: '',
          translation: 'الأكثر شيوعًا',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'de',
          source: 'häufig',
          ipa: 'ˈhɔyfɪç',
          example: 'ein häufiger Fehler',
          definition: 'oft auftretend',
          translation: '‎مُتَكَرِّرٌ‎',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
  },
  nl: {
    welcomeScreenCard: {
      language: 'de',
      source: 'bemerkenswert',
      ipa: 'bəˈmɛrkənsveːɐt',
      example:
        '* bemerkenswerte Fortschritte machen\n* Das ist nur insofern bemerkenswert, als ...',
      definition:
        '* in positiver Weise auffallend\n* so interessant, dass man sich darüber äußert',
      translation: 'opmerkelijk',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'ankommen',
      sourceLanguage: 'de',
      targetLanguage: 'nl',
      isReversed: false,
      results: [
        {
          language: 'de',
          source: 'ankommen',
          ipa: 'ˈankɔmən',
          example:
            '* Wann kommt der Zug an?\n* Komm mir dann aber nicht an und bitte um mehr Geld.',
          definition:
            '* das Ziel eines Weges, einer Fahrt erreichen\n* sich an jemanden wenden und ihn belästigen',
          translation: 'aankomen, een verzoek',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'vraag',
      sourceLanguage: 'de',
      targetLanguage: 'nl',
      isReversed: true,
      results: [
        {
          language: 'de',
          source: 'die Frage',
          ipa: 'ˈfraːgə',
          example: '* Prüfungsfrage\n* eine Frage anschneiden',
          definition:
            '* sprachliche Äußerung, mit der man um Informationen bittet\n* ein Problem, eine Angelegenheit oder ein Thema, mit dem man sich beschäftigt',
          translation: 'vraag, vraagstuk',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'de',
          source: 'die Anfrage',
          ipa: 'ˈanfraːgə',
          example:
            '* Zu ihrer Anfrage teilen wir Ihnen mit, dass ...\n* eine parlamentarische Anfrage',
          definition: 'schriftliche Frage von Abgeordneten an die Regierung',
          translation: '(aan)vraag, interpellatie, aanvraag',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Die am *häufigsten* übersehenen Wartungsaufgaben betreffen den Kampf gegen Staub. Ihr Haus ist voller Filter und Belüftungsöffnungen, die Staub und andere Dinge auffangen, die Lebensdauer Ihrer Systeme verlängern und die Luft sauber halten. Mindestens einmal im Jahr sollten Sie Folgendes reinigen und ersetzen:',
      results: [
        {
          language: 'de',
          source: 'häufigsten',
          ipa: '',
          example: '',
          definition: '',
          translation: 'meest voorkomende',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'de',
          source: 'häufig',
          ipa: 'ˈhɔyfɪç',
          example: 'ein häufiger Fehler',
          definition: 'oft auftretend',
          translation: 'veelvuldig',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
  },
  ko: {
    welcomeScreenCard: {
      language: 'de',
      source: 'bemerkenswert',
      ipa: 'bəˈmɛrkənsveːɐt',
      example:
        '* bemerkenswerte Fortschritte machen\n* Das ist nur insofern bemerkenswert, als ...',
      definition:
        '* in positiver Weise auffallend\n* so interessant, dass man sich darüber äußert',
      translation: '주목할 만한, 눈에 띄는',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'ankommen',
      sourceLanguage: 'de',
      targetLanguage: 'ko',
      isReversed: false,
      results: [
        {
          language: 'de',
          source: 'ankommen',
          ipa: 'ˈankɔmən',
          example:
            '* Wann kommt der Zug an?\n* Komm mir dann aber nicht an und bitte um mehr Geld.',
          definition:
            '* das Ziel eines Weges, einer Fahrt erreichen\n* sich an jemanden wenden und ihn belästigen',
          translation: '도착하다, 접근하다',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: '질문',
      sourceLanguage: 'de',
      targetLanguage: 'ko',
      isReversed: true,
      results: [
        {
          language: 'de',
          source: 'die Frage',
          ipa: 'ˈfraːgə',
          example: '* Prüfungsfrage\n* eine Frage anschneiden',
          definition:
            '* sprachliche Äußerung, mit der man um Informationen bittet\n* ein Problem, eine Angelegenheit oder ein Thema, mit dem man sich beschäftigt',
          translation: '질문, 문제',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Die am *häufigsten* übersehenen Wartungsaufgaben betreffen den Kampf gegen Staub. Ihr Haus ist voller Filter und Belüftungsöffnungen, die Staub und andere Dinge auffangen, die Lebensdauer Ihrer Systeme verlängern und die Luft sauber halten. Mindestens einmal im Jahr sollten Sie Folgendes reinigen und ersetzen:',
      results: [
        {
          language: 'de',
          source: 'häufigsten',
          ipa: '',
          example: '',
          definition: '',
          translation: '가장 자주',
          partOfSpeech: 'adverb',
          tags: [],
        },
        {
          language: 'de',
          source: 'häufig',
          ipa: 'ˈhɔyfɪç',
          example: 'ein häufiger Fehler',
          definition: 'oft auftretend',
          translation: '자주',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
  },
  hi: {
    welcomeScreenCard: {
      language: 'de',
      source: 'bemerkenswert',
      ipa: 'bəˈmɛrkənsveːɐt',
      example:
        '* bemerkenswerte Fortschritte machen\n* Das ist nur insofern bemerkenswert, als ...',
      definition:
        '* in positiver Weise auffallend\n* so interessant, dass man sich darüber äußert',
      translation: 'महत्वपूर्ण, ध्यान देने योग्य',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'ankommen',
      sourceLanguage: 'de',
      targetLanguage: 'hi',
      isReversed: false,
      results: [
        {
          language: 'de',
          source: 'ankommen',
          ipa: 'ˈankɔmən',
          example:
            '* Wann kommt der Zug an?\n* Komm mir dann aber nicht an und bitte um mehr Geld.',
          definition:
            '* das Ziel eines Weges, einer Fahrt erreichen\n* sich an jemanden wenden und ihn belästigen',
          translation: 'पहुंचना, बात करना, आना',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'सवाल',
      sourceLanguage: 'de',
      targetLanguage: 'hi',
      isReversed: true,
      results: [
        {
          language: 'de',
          source: 'die Frage',
          ipa: 'ˈfraːgə',
          example: '* Prüfungsfrage\n* eine Frage anschneiden',
          definition:
            '* sprachliche Äußerung, mit der man um Informationen bittet\n* ein Problem, eine Angelegenheit oder ein Thema, mit dem man sich beschäftigt',
          translation: 'प्रश्न, सवाल',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'de',
          source: 'die Anfrage',
          ipa: 'ˈanfraːgə',
          example:
            '* Zu ihrer Anfrage teilen wir Ihnen mit, dass ...\n* eine parlamentarische Anfrage',
          definition: 'schriftliche Frage von Abgeordneten an die Regierung',
          translation: 'प्रश्न, अनुरोध',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Die am *häufigsten* übersehenen Wartungsaufgaben betreffen den Kampf gegen Staub. Ihr Haus ist voller Filter und Belüftungsöffnungen, die Staub und andere Dinge auffangen, die Lebensdauer Ihrer Systeme verlängern und die Luft sauber halten. Mindestens einmal im Jahr sollten Sie Folgendes reinigen und ersetzen:',
      results: [
        {
          language: 'de',
          source: 'häufigsten',
          ipa: '',
          example: '',
          definition: '',
          translation: 'सबसे सामान्य',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'de',
          source: 'häufig',
          ipa: 'ˈhɔyfɪç',
          example: 'ein häufiger Fehler',
          definition: 'oft auftretend',
          translation: 'अक्सर',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
  },
  tr: {
    welcomeScreenCard: {
      language: 'de',
      source: 'bemerkenswert',
      ipa: 'bəˈmɛrkənsveːɐt',
      example:
        '* bemerkenswerte Fortschritte machen\n* Das ist nur insofern bemerkenswert, als ...',
      definition:
        '* in positiver Weise auffallend\n* so interessant, dass man sich darüber äußert',
      translation: 'önemli, dikkate şayan, kayda değer, mühim, dikkate değer',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'ankommen',
      sourceLanguage: 'de',
      targetLanguage: 'tr',
      isReversed: false,
      results: [
        {
          language: 'de',
          source: 'ankommen',
          ipa: 'ˈankɔmən',
          example:
            '* Wann kommt der Zug an?\n* Komm mir dann aber nicht an und bitte um mehr Geld.',
          definition:
            '* das Ziel eines Weges, einer Fahrt erreichen\n* sich an jemanden wenden und ihn belästigen',
          translation: 'gelmek, varmak, ulaşmak',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'soru',
      sourceLanguage: 'de',
      targetLanguage: 'tr',
      isReversed: true,
      results: [
        {
          language: 'de',
          source: 'die Frage',
          ipa: 'ˈfraːgə',
          example: '* Prüfungsfrage\n* eine Frage anschneiden',
          definition:
            '* sprachliche Äußerung, mit der man um Informationen bittet\n* ein Problem, eine Angelegenheit oder ein Thema, mit dem man sich beschäftigt',
          translation: 'soru, sual, konu, mesele',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Die am *häufigsten* übersehenen Wartungsaufgaben betreffen den Kampf gegen Staub. Ihr Haus ist voller Filter und Belüftungsöffnungen, die Staub und andere Dinge auffangen, die Lebensdauer Ihrer Systeme verlängern und die Luft sauber halten. Mindestens einmal im Jahr sollten Sie Folgendes reinigen und ersetzen:',
      results: [
        {
          language: 'de',
          source: 'häufigsten',
          ipa: '',
          example: '',
          definition: '',
          translation: 'en sık',
          partOfSpeech: 'adverb',
          tags: [],
        },
        {
          language: 'de',
          source: 'häufig',
          ipa: 'ˈhɔyfɪç',
          example: 'ein häufiger Fehler',
          definition: 'oft auftretend',
          translation: 'sık, yaygın',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
  },
  sv: {
    welcomeScreenCard: {
      language: 'de',
      source: 'bemerkenswert',
      ipa: 'bəˈmɛrkənsveːɐt',
      example:
        '* bemerkenswerte Fortschritte machen\n* Das ist nur insofern bemerkenswert, als ...',
      definition:
        '* in positiver Weise auffallend\n* so interessant, dass man sich darüber äußert',
      translation: 'anmärkningsvärd, beaktansvärd, betydelsefull',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'ankommen',
      sourceLanguage: 'de',
      targetLanguage: 'sv',
      isReversed: false,
      results: [
        {
          language: 'de',
          source: 'ankommen',
          ipa: 'ˈankɔmən',
          example:
            '* Wann kommt der Zug an?\n* Komm mir dann aber nicht an und bitte um mehr Geld.',
          definition:
            '* das Ziel eines Weges, einer Fahrt erreichen\n* sich an jemanden wenden und ihn belästigen',
          translation:
            'komma, komma fram, anlända, komma dragande, komma och störa, ankomma',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'fråga',
      sourceLanguage: 'de',
      targetLanguage: 'sv',
      isReversed: true,
      results: [
        {
          language: 'de',
          source: 'die Frage',
          ipa: 'ˈfraːgə',
          example: '* Prüfungsfrage\n* eine Frage anschneiden',
          definition:
            '* sprachliche Äußerung, mit der man um Informationen bittet\n* ein Problem, eine Angelegenheit oder ein Thema, mit dem man sich beschäftigt',
          translation: 'fråga, problem',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'de',
          source: 'fragen',
          ipa: 'ˈfraːgən',
          example:
            '* Ich frage ihn mal, ob er Zeit hat.\n* Ich frage mich, wie lange das noch dauert.',
          definition:
            '* sich mit einer Frage an jemanden wenden\n* sich über etwas Gedanken machen',
          translation: 'fråga, fråga sig',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Die am *häufigsten* übersehenen Wartungsaufgaben betreffen den Kampf gegen Staub. Ihr Haus ist voller Filter und Belüftungsöffnungen, die Staub und andere Dinge auffangen, die Lebensdauer Ihrer Systeme verlängern und die Luft sauber halten. Mindestens einmal im Jahr sollten Sie Folgendes reinigen und ersetzen:',
      results: [
        {
          language: 'de',
          source: 'häufigsten',
          ipa: '',
          example: '',
          definition: '',
          translation: 'oftast',
          partOfSpeech: 'adverb',
          tags: [],
        },
        {
          language: 'de',
          source: 'häufig',
          ipa: 'ˈhɔyfɪç',
          example: 'ein häufiger Fehler',
          definition: 'oft auftretend',
          translation: 'ofta förekommande, vanlig',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
  },
  no: {
    welcomeScreenCard: {
      language: 'de',
      source: 'bemerkenswert',
      ipa: 'bəˈmɛrkənsveːɐt',
      example:
        '* bemerkenswerte Fortschritte machen\n* Das ist nur insofern bemerkenswert, als ...',
      definition:
        '* in positiver Weise auffallend\n* so interessant, dass man sich darüber äußert',
      translation: 'betydningsfull, bemerkelsesverdig, påfallende',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'ankommen',
      sourceLanguage: 'de',
      targetLanguage: 'no',
      isReversed: false,
      results: [
        {
          language: 'de',
          source: 'ankommen',
          ipa: 'ˈankɔmən',
          example:
            '* Wann kommt der Zug an?\n* Komm mir dann aber nicht an und bitte um mehr Geld.',
          definition:
            '* das Ziel eines Weges, einer Fahrt erreichen\n* sich an jemanden wenden und ihn belästigen',
          translation: '(an)komme, nå fram, komme her, ankomme',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'spørsmål',
      sourceLanguage: 'de',
      targetLanguage: 'no',
      isReversed: true,
      results: [
        {
          language: 'de',
          source: 'die Frage',
          ipa: 'ˈfraːgə',
          example: '* Prüfungsfrage\n* eine Frage anschneiden',
          definition:
            '* sprachliche Äußerung, mit der man um Informationen bittet\n* ein Problem, eine Angelegenheit oder ein Thema, mit dem man sich beschäftigt',
          translation: 'spørsmål',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Die am *häufigsten* übersehenen Wartungsaufgaben betreffen den Kampf gegen Staub. Ihr Haus ist voller Filter und Belüftungsöffnungen, die Staub und andere Dinge auffangen, die Lebensdauer Ihrer Systeme verlängern und die Luft sauber halten. Mindestens einmal im Jahr sollten Sie Folgendes reinigen und ersetzen:',
      results: [
        {
          language: 'de',
          source: 'häufigsten',
          ipa: '',
          example: '',
          definition: '',
          translation: 'hyppigst',
          partOfSpeech: 'adverb',
          tags: [],
        },
        {
          language: 'de',
          source: 'häufig',
          ipa: 'ˈhɔyfɪç',
          example: 'ein häufiger Fehler',
          definition: 'oft auftretend',
          translation: 'hyppig, ofte forekommende, utbredt',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
  },
  da: {
    welcomeScreenCard: {
      language: 'de',
      source: 'bemerkenswert',
      ipa: 'bəˈmɛrkənsveːɐt',
      example:
        '* bemerkenswerte Fortschritte machen\n* Das ist nur insofern bemerkenswert, als ...',
      definition:
        '* in positiver Weise auffallend\n* so interessant, dass man sich darüber äußert',
      translation: 'bemærkelsesværdig, interessant',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'ankommen',
      sourceLanguage: 'de',
      targetLanguage: 'da',
      isReversed: false,
      results: [
        {
          language: 'de',
          source: 'ankommen',
          ipa: 'ˈankɔmən',
          example:
            '* Wann kommt der Zug an?\n* Komm mir dann aber nicht an und bitte um mehr Geld.',
          definition:
            '* das Ziel eines Weges, einer Fahrt erreichen\n* sich an jemanden wenden und ihn belästigen',
          translation: 'ankomme, henvende sig',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'spørgsmål',
      sourceLanguage: 'de',
      targetLanguage: 'da',
      isReversed: true,
      results: [
        {
          language: 'de',
          source: 'die Frage',
          ipa: 'ˈfraːgə',
          example: '* Prüfungsfrage\n* eine Frage anschneiden',
          definition:
            '* sprachliche Äußerung, mit der man um Informationen bittet\n* ein Problem, eine Angelegenheit oder ein Thema, mit dem man sich beschäftigt',
          translation: 'spørgsmål, problem',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'de',
          source: 'die Anfrage',
          ipa: 'ˈanfraːgə',
          example:
            '* Zu ihrer Anfrage teilen wir Ihnen mit, dass ...\n* eine parlamentarische Anfrage',
          definition: 'schriftliche Frage von Abgeordneten an die Regierung',
          translation: 'forespørgsel',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Die am *häufigsten* übersehenen Wartungsaufgaben betreffen den Kampf gegen Staub. Ihr Haus ist voller Filter und Belüftungsöffnungen, die Staub und andere Dinge auffangen, die Lebensdauer Ihrer Systeme verlängern und die Luft sauber halten. Mindestens einmal im Jahr sollten Sie Folgendes reinigen und ersetzen:',
      results: [
        {
          language: 'de',
          source: 'häufigsten',
          ipa: '',
          example: '',
          definition: '',
          translation: 'hyppigst',
          partOfSpeech: 'adverb',
          tags: [],
        },
        {
          language: 'de',
          source: 'häufig',
          ipa: 'ˈhɔyfɪç',
          example: 'ein häufiger Fehler',
          definition: 'oft auftretend',
          translation: 'hyppig',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
  },
  fi: {
    welcomeScreenCard: {
      language: 'de',
      source: 'bemerkenswert',
      ipa: 'bəˈmɛrkənsveːɐt',
      example:
        '* bemerkenswerte Fortschritte machen\n* Das ist nur insofern bemerkenswert, als ...',
      definition:
        '* in positiver Weise auffallend\n* so interessant, dass man sich darüber äußert',
      translation: 'huomattava, merkittävä, huomionarvoinen',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'ankommen',
      sourceLanguage: 'de',
      targetLanguage: 'fi',
      isReversed: false,
      results: [
        {
          language: 'de',
          source: 'ankommen',
          ipa: 'ˈankɔmən',
          example:
            '* Wann kommt der Zug an?\n* Komm mir dann aber nicht an und bitte um mehr Geld.',
          definition:
            '* das Ziel eines Weges, einer Fahrt erreichen\n* sich an jemanden wenden und ihn belästigen',
          translation: 'saapua, lähestyä',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'kysymys',
      sourceLanguage: 'de',
      targetLanguage: 'fi',
      isReversed: true,
      results: [
        {
          language: 'de',
          source: 'die Frage',
          ipa: 'ˈfraːgə',
          example: '* Prüfungsfrage\n* eine Frage anschneiden',
          definition:
            '* sprachliche Äußerung, mit der man um Informationen bittet\n* ein Problem, eine Angelegenheit oder ein Thema, mit dem man sich beschäftigt',
          translation: 'kysymys, asia',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Die am *häufigsten* übersehenen Wartungsaufgaben betreffen den Kampf gegen Staub. Ihr Haus ist voller Filter und Belüftungsöffnungen, die Staub und andere Dinge auffangen, die Lebensdauer Ihrer Systeme verlängern und die Luft sauber halten. Mindestens einmal im Jahr sollten Sie Folgendes reinigen und ersetzen:',
      results: [
        {
          language: 'de',
          source: 'häufigsten',
          ipa: '',
          example: '',
          definition: '',
          translation: 'yleisimmät',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'de',
          source: 'häufig',
          ipa: 'ˈhɔyfɪç',
          example: 'ein häufiger Fehler',
          definition: 'oft auftretend',
          translation: 'usein',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
  },
  fa: {
    welcomeScreenCard: {
      language: 'de',
      source: 'bemerkenswert',
      ipa: 'bəˈmɛrkənsveːɐt',
      example:
        '* bemerkenswerte Fortschritte machen\n* Das ist nur insofern bemerkenswert, als ...',
      definition:
        '* in positiver Weise auffallend\n* so interessant, dass man sich darüber äußert',
      translation: 'جالب، قابل توجه',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'ankommen',
      sourceLanguage: 'de',
      targetLanguage: 'fa',
      isReversed: false,
      results: [
        {
          language: 'de',
          source: 'ankommen',
          ipa: 'ˈankɔmən',
          example:
            '* Wann kommt der Zug an?\n* Komm mir dann aber nicht an und bitte um mehr Geld.',
          definition:
            '* das Ziel eines Weges, einer Fahrt erreichen\n* sich an jemanden wenden und ihn belästigen',
          translation: 'مزاحم شدن، رسیدن',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'سوال',
      sourceLanguage: 'de',
      targetLanguage: 'fa',
      isReversed: true,
      results: [
        {
          language: 'de',
          source: 'die Frage',
          ipa: 'ˈfraːgə',
          example: '* Prüfungsfrage\n* eine Frage anschneiden',
          definition:
            '* sprachliche Äußerung, mit der man um Informationen bittet\n* ein Problem, eine Angelegenheit oder ein Thema, mit dem man sich beschäftigt',
          translation: 'پرسش، سوال',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Die am *häufigsten* übersehenen Wartungsaufgaben betreffen den Kampf gegen Staub. Ihr Haus ist voller Filter und Belüftungsöffnungen, die Staub und andere Dinge auffangen, die Lebensdauer Ihrer Systeme verlängern und die Luft sauber halten. Mindestens einmal im Jahr sollten Sie Folgendes reinigen und ersetzen:',
      results: [
        {
          language: 'de',
          source: 'häufigsten',
          ipa: '',
          example: '',
          definition: '',
          translation: 'بیشترین',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'de',
          source: 'häufig',
          ipa: 'ˈhɔyfɪç',
          example: 'ein häufiger Fehler',
          definition: 'oft auftretend',
          translation: 'مکرر',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
  },
  pl: {
    welcomeScreenCard: {
      language: 'de',
      source: 'bemerkenswert',
      ipa: 'bəˈmɛrkənsveːɐt',
      example:
        '* bemerkenswerte Fortschritte machen\n* Das ist nur insofern bemerkenswert, als ...',
      definition:
        '* in positiver Weise auffallend\n* so interessant, dass man sich darüber äußert',
      translation: 'godny uwagi, zauważalny',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'ankommen',
      sourceLanguage: 'de',
      targetLanguage: 'pl',
      isReversed: false,
      results: [
        {
          language: 'de',
          source: 'ankommen',
          ipa: 'ˈankɔmən',
          example:
            '* Wann kommt der Zug an?\n* Komm mir dann aber nicht an und bitte um mehr Geld.',
          definition:
            '* das Ziel eines Weges, einer Fahrt erreichen\n* sich an jemanden wenden und ihn belästigen',
          translation: 'przybyć, natarczywie zwracać się',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'pytanie',
      sourceLanguage: 'de',
      targetLanguage: 'pl',
      isReversed: true,
      results: [
        {
          language: 'de',
          source: 'die Frage',
          ipa: 'ˈfraːgə',
          example: '* Prüfungsfrage\n* eine Frage anschneiden',
          definition:
            '* sprachliche Äußerung, mit der man um Informationen bittet\n* ein Problem, eine Angelegenheit oder ein Thema, mit dem man sich beschäftigt',
          translation: 'pytanie, kwestia',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Die am *häufigsten* übersehenen Wartungsaufgaben betreffen den Kampf gegen Staub. Ihr Haus ist voller Filter und Belüftungsöffnungen, die Staub und andere Dinge auffangen, die Lebensdauer Ihrer Systeme verlängern und die Luft sauber halten. Mindestens einmal im Jahr sollten Sie Folgendes reinigen und ersetzen:',
      results: [
        {
          language: 'de',
          source: 'häufigsten',
          ipa: '',
          example: '',
          definition: '',
          translation: 'najczęściej',
          partOfSpeech: 'adverb',
          tags: [],
        },
        {
          language: 'de',
          source: 'häufig',
          ipa: 'ˈhɔyfɪç',
          example: 'ein häufiger Fehler',
          definition: 'oft auftretend',
          translation: 'częsty',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
  },
  el: {
    welcomeScreenCard: {
      language: 'de',
      source: 'bemerkenswert',
      ipa: 'bəˈmɛrkənsveːɐt',
      example:
        '* bemerkenswerte Fortschritte machen\n* Das ist nur insofern bemerkenswert, als ...',
      definition:
        '* in positiver Weise auffallend\n* so interessant, dass man sich darüber äußert',
      translation: 'εντυπωσιακός, σημαντικός',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'ankommen',
      sourceLanguage: 'de',
      targetLanguage: 'el',
      isReversed: false,
      results: [
        {
          language: 'de',
          source: 'ankommen',
          ipa: 'ˈankɔmən',
          example:
            '* Wann kommt der Zug an?\n* Komm mir dann aber nicht an und bitte um mehr Geld.',
          definition:
            '* das Ziel eines Weges, einer Fahrt erreichen\n* sich an jemanden wenden und ihn belästigen',
          translation: 'φτάνω, ενοχλώ',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'ερώτηση',
      sourceLanguage: 'de',
      targetLanguage: 'el',
      isReversed: true,
      results: [
        {
          language: 'de',
          source: 'die Frage',
          ipa: 'ˈfraːgə',
          example: '* Prüfungsfrage\n* eine Frage anschneiden',
          definition:
            '* sprachliche Äußerung, mit der man um Informationen bittet\n* ein Problem, eine Angelegenheit oder ein Thema, mit dem man sich beschäftigt',
          translation: 'ερώτηση, θέμα',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Die am *häufigsten* übersehenen Wartungsaufgaben betreffen den Kampf gegen Staub. Ihr Haus ist voller Filter und Belüftungsöffnungen, die Staub und andere Dinge auffangen, die Lebensdauer Ihrer Systeme verlängern und die Luft sauber halten. Mindestens einmal im Jahr sollten Sie Folgendes reinigen und ersetzen:',
      results: [
        {
          language: 'de',
          source: 'häufigsten',
          ipa: '',
          example: '',
          definition: '',
          translation: 'συχνότερα',
          partOfSpeech: 'adverb',
          tags: [],
        },
        {
          language: 'de',
          source: 'häufig',
          ipa: 'ˈhɔyfɪç',
          example: 'ein häufiger Fehler',
          definition: 'oft auftretend',
          translation: 'συχνός',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
  },
  he: {
    welcomeScreenCard: {
      language: 'de',
      source: 'bemerkenswert',
      ipa: 'bəˈmɛrkənsveːɐt',
      example:
        '* bemerkenswerte Fortschritte machen\n* Das ist nur insofern bemerkenswert, als ...',
      definition:
        '* in positiver Weise auffallend\n* so interessant, dass man sich darüber äußert',
      translation: 'מרשים, ש值得 לציין, ראוי לציון',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'ankommen',
      sourceLanguage: 'de',
      targetLanguage: 'he',
      isReversed: false,
      results: [
        {
          language: 'de',
          source: 'ankommen',
          ipa: 'ˈankɔmən',
          example:
            '* Wann kommt der Zug an?\n* Komm mir dann aber nicht an und bitte um mehr Geld.',
          definition:
            '* das Ziel eines Weges, einer Fahrt erreichen\n* sich an jemanden wenden und ihn belästigen',
          translation: 'להגיע, להטריד',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'שְׁאֵלָה',
      sourceLanguage: 'de',
      targetLanguage: 'he',
      isReversed: true,
      results: [
        {
          language: 'de',
          source: 'die Frage',
          ipa: 'ˈfraːgə',
          example: '* Prüfungsfrage\n* eine Frage anschneiden',
          definition:
            '* sprachliche Äußerung, mit der man um Informationen bittet\n* ein Problem, eine Angelegenheit oder ein Thema, mit dem man sich beschäftigt',
          translation: 'שאלה, נושא',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'de',
          source: 'die Anfrage',
          ipa: 'ˈanfraːgə',
          example:
            '* Zu ihrer Anfrage teilen wir Ihnen mit, dass ...\n* eine parlamentarische Anfrage',
          definition: 'schriftliche Frage von Abgeordneten an die Regierung',
          translation: 'שאלה, בקשה',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Die am *häufigsten* übersehenen Wartungsaufgaben betreffen den Kampf gegen Staub. Ihr Haus ist voller Filter und Belüftungsöffnungen, die Staub und andere Dinge auffangen, die Lebensdauer Ihrer Systeme verlängern und die Luft sauber halten. Mindestens einmal im Jahr sollten Sie Folgendes reinigen und ersetzen:',
      results: [
        {
          language: 'de',
          source: 'häufigsten',
          ipa: '',
          example: '',
          definition: '',
          translation: 'הנפוצים ביותר',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'de',
          source: 'häufig',
          ipa: 'ˈhɔyfɪç',
          example: 'ein häufiger Fehler',
          definition: 'oft auftretend',
          translation: 'תדיר',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
  },
  th: {
    welcomeScreenCard: {
      language: 'de',
      source: 'bemerkenswert',
      ipa: 'bəˈmɛrkənsveːɐt',
      example:
        '* bemerkenswerte Fortschritte machen\n* Das ist nur insofern bemerkenswert, als ...',
      definition:
        '* in positiver Weise auffallend\n* so interessant, dass man sich darüber äußert',
      translation: 'น่าทึ่ง, น่าสนใจ, น่าจดจำ',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'ankommen',
      sourceLanguage: 'de',
      targetLanguage: 'th',
      isReversed: false,
      results: [
        {
          language: 'de',
          source: 'ankommen',
          ipa: 'ˈankɔmən',
          example:
            '* Wann kommt der Zug an?\n* Komm mir dann aber nicht an und bitte um mehr Geld.',
          definition:
            '* das Ziel eines Weges, einer Fahrt erreichen\n* sich an jemanden wenden und ihn belästigen',
          translation: 'มาถึง, เข้าหา',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'คำถาม',
      sourceLanguage: 'de',
      targetLanguage: 'th',
      isReversed: true,
      results: [
        {
          language: 'de',
          source: 'die Frage',
          ipa: 'ˈfraːgə',
          example: '* Prüfungsfrage\n* eine Frage anschneiden',
          definition:
            '* sprachliche Äußerung, mit der man um Informationen bittet\n* ein Problem, eine Angelegenheit oder ein Thema, mit dem man sich beschäftigt',
          translation: 'คำถาม, ปัญหา',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Die am *häufigsten* übersehenen Wartungsaufgaben betreffen den Kampf gegen Staub. Ihr Haus ist voller Filter und Belüftungsöffnungen, die Staub und andere Dinge auffangen, die Lebensdauer Ihrer Systeme verlängern und die Luft sauber halten. Mindestens einmal im Jahr sollten Sie Folgendes reinigen und ersetzen:',
      results: [
        {
          language: 'de',
          source: 'häufigsten',
          ipa: '',
          example: '',
          definition: '',
          translation: 'บ่อยที่สุด',
          partOfSpeech: 'adverb',
          tags: [],
        },
        {
          language: 'de',
          source: 'häufig',
          ipa: 'ˈhɔyfɪç',
          example: 'ein häufiger Fehler',
          definition: 'oft auftretend',
          translation: 'บ่อย',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
  },
  vi: {
    welcomeScreenCard: {
      language: 'de',
      source: 'bemerkenswert',
      ipa: 'bəˈmɛrkənsveːɐt',
      example:
        '* bemerkenswerte Fortschritte machen\n* Das ist nur insofern bemerkenswert, als ...',
      definition:
        '* in positiver Weise auffallend\n* so interessant, dass man sich darüber äußert',
      translation: 'đáng chú ý, nổi bật',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'ankommen',
      sourceLanguage: 'de',
      targetLanguage: 'vi',
      isReversed: false,
      results: [
        {
          language: 'de',
          source: 'ankommen',
          ipa: 'ˈankɔmən',
          example:
            '* Wann kommt der Zug an?\n* Komm mir dann aber nicht an und bitte um mehr Geld.',
          definition:
            '* das Ziel eines Weges, einer Fahrt erreichen\n* sich an jemanden wenden und ihn belästigen',
          translation: 'đến nơi, gây phiền',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'câu hỏi',
      sourceLanguage: 'de',
      targetLanguage: 'vi',
      isReversed: true,
      results: [
        {
          language: 'de',
          source: 'die Frage',
          ipa: 'ˈfraːgə',
          example: '* Prüfungsfrage\n* eine Frage anschneiden',
          definition:
            '* sprachliche Äußerung, mit der man um Informationen bittet\n* ein Problem, eine Angelegenheit oder ein Thema, mit dem man sich beschäftigt',
          translation: 'câu hỏi, vấn đề',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Die am *häufigsten* übersehenen Wartungsaufgaben betreffen den Kampf gegen Staub. Ihr Haus ist voller Filter und Belüftungsöffnungen, die Staub und andere Dinge auffangen, die Lebensdauer Ihrer Systeme verlängern und die Luft sauber halten. Mindestens einmal im Jahr sollten Sie Folgendes reinigen und ersetzen:',
      results: [
        {
          language: 'de',
          source: 'häufigsten',
          ipa: '',
          example: '',
          definition: '',
          translation: 'thường xuyên nhất',
          partOfSpeech: 'adverb',
          tags: [],
        },
        {
          language: 'de',
          source: 'häufig',
          ipa: 'ˈhɔyfɪç',
          example: 'ein häufiger Fehler',
          definition: 'oft auftretend',
          translation: 'thường xuyên',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
  },
  id: {
    welcomeScreenCard: {
      language: 'de',
      source: 'bemerkenswert',
      ipa: 'bəˈmɛrkənsveːɐt',
      example:
        '* bemerkenswerte Fortschritte machen\n* Das ist nur insofern bemerkenswert, als ...',
      definition:
        '* in positiver Weise auffallend\n* so interessant, dass man sich darüber äußert',
      translation: 'menarik, patut dicatat',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'ankommen',
      sourceLanguage: 'de',
      targetLanguage: 'id',
      isReversed: false,
      results: [
        {
          language: 'de',
          source: 'ankommen',
          ipa: 'ˈankɔmən',
          example:
            '* Wann kommt der Zug an?\n* Komm mir dann aber nicht an und bitte um mehr Geld.',
          definition:
            '* das Ziel eines Weges, einer Fahrt erreichen\n* sich an jemanden wenden und ihn belästigen',
          translation: 'tiba, mengganggu',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'pertanyaan',
      sourceLanguage: 'de',
      targetLanguage: 'id',
      isReversed: true,
      results: [
        {
          language: 'de',
          source: 'die Frage',
          ipa: 'ˈfraːgə',
          example: '* Prüfungsfrage\n* eine Frage anschneiden',
          definition:
            '* sprachliche Äußerung, mit der man um Informationen bittet\n* ein Problem, eine Angelegenheit oder ein Thema, mit dem man sich beschäftigt',
          translation: 'pertanyaan, masalah',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Die am *häufigsten* übersehenen Wartungsaufgaben betreffen den Kampf gegen Staub. Ihr Haus ist voller Filter und Belüftungsöffnungen, die Staub und andere Dinge auffangen, die Lebensdauer Ihrer Systeme verlängern und die Luft sauber halten. Mindestens einmal im Jahr sollten Sie Folgendes reinigen und ersetzen:',
      results: [
        {
          language: 'de',
          source: 'häufigsten',
          ipa: '',
          example: '',
          definition: '',
          translation: 'paling sering',
          partOfSpeech: 'adverb',
          tags: [],
        },
        {
          language: 'de',
          source: 'häufig',
          ipa: 'ˈhɔyfɪç',
          example: 'ein häufiger Fehler',
          definition: 'oft auftretend',
          translation: 'sering',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
  },
  ms: {
    welcomeScreenCard: {
      language: 'de',
      source: 'bemerkenswert',
      ipa: 'bəˈmɛrkənsveːɐt',
      example:
        '* bemerkenswerte Fortschritte machen\n* Das ist nur insofern bemerkenswert, als ...',
      definition:
        '* in positiver Weise auffallend\n* so interessant, dass man sich darüber äußert',
      translation: 'menarik, hebat',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'ankommen',
      sourceLanguage: 'de',
      targetLanguage: 'ms',
      isReversed: false,
      results: [
        {
          language: 'de',
          source: 'ankommen',
          ipa: 'ˈankɔmən',
          example:
            '* Wann kommt der Zug an?\n* Komm mir dann aber nicht an und bitte um mehr Geld.',
          definition:
            '* das Ziel eines Weges, einer Fahrt erreichen\n* sich an jemanden wenden und ihn belästigen',
          translation: 'tiba, datang',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'soalan',
      sourceLanguage: 'de',
      targetLanguage: 'ms',
      isReversed: true,
      results: [
        {
          language: 'de',
          source: 'die Frage',
          ipa: 'ˈfraːgə',
          example: '* Prüfungsfrage\n* eine Frage anschneiden',
          definition:
            '* sprachliche Äußerung, mit der man um Informationen bittet\n* ein Problem, eine Angelegenheit oder ein Thema, mit dem man sich beschäftigt',
          translation: 'soalan, pertanyaan',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Die am *häufigsten* übersehenen Wartungsaufgaben betreffen den Kampf gegen Staub. Ihr Haus ist voller Filter und Belüftungsöffnungen, die Staub und andere Dinge auffangen, die Lebensdauer Ihrer Systeme verlängern und die Luft sauber halten. Mindestens einmal im Jahr sollten Sie Folgendes reinigen und ersetzen:',
      results: [
        {
          language: 'de',
          source: 'häufigsten',
          ipa: '',
          example: '',
          definition: '',
          translation: 'paling sering',
          partOfSpeech: 'adverb',
          tags: [],
        },
        {
          language: 'de',
          source: 'häufig',
          ipa: 'ˈhɔyfɪç',
          example: 'ein häufiger Fehler',
          definition: 'oft auftretend',
          translation: 'sering',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
  },
  uk: {
    welcomeScreenCard: {
      language: 'de',
      source: 'bemerkenswert',
      ipa: 'bəˈmɛrkənsveːɐt',
      example:
        '* bemerkenswerte Fortschritte machen\n* Das ist nur insofern bemerkenswert, als ...',
      definition:
        '* in positiver Weise auffallend\n* so interessant, dass man sich darüber äußert',
      translation: 'помітний, значний',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'ankommen',
      sourceLanguage: 'de',
      targetLanguage: 'uk',
      isReversed: false,
      results: [
        {
          language: 'de',
          source: 'ankommen',
          ipa: 'ˈankɔmən',
          example:
            '* Wann kommt der Zug an?\n* Komm mir dann aber nicht an und bitte um mehr Geld.',
          definition:
            '* das Ziel eines Weges, einer Fahrt erreichen\n* sich an jemanden wenden und ihn belästigen',
          translation: 'прибути, набридати',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'запитання',
      sourceLanguage: 'de',
      targetLanguage: 'uk',
      isReversed: true,
      results: [
        {
          language: 'de',
          source: 'die Frage',
          ipa: 'ˈfraːgə',
          example: '* Prüfungsfrage\n* eine Frage anschneiden',
          definition:
            '* sprachliche Äußerung, mit der man um Informationen bittet\n* ein Problem, eine Angelegenheit oder ein Thema, mit dem man sich beschäftigt',
          translation: 'питання, запит',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Die am *häufigsten* übersehenen Wartungsaufgaben betreffen den Kampf gegen Staub. Ihr Haus ist voller Filter und Belüftungsöffnungen, die Staub und andere Dinge auffangen, die Lebensdauer Ihrer Systeme verlängern und die Luft sauber halten. Mindestens einmal im Jahr sollten Sie Folgendes reinigen und ersetzen:',
      results: [
        {
          language: 'de',
          source: 'häufigsten',
          ipa: '',
          example: '',
          definition: '',
          translation: 'найчастіше',
          partOfSpeech: 'adverb',
          tags: [],
        },
        {
          language: 'de',
          source: 'häufig',
          ipa: 'ˈhɔyfɪç',
          example: 'ein häufiger Fehler',
          definition: 'oft auftretend',
          translation: 'частий',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
  },
};
