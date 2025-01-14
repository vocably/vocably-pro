import { MobileOnboardingDataCollection } from '@vocably/model';

export const onboardingCollection: MobileOnboardingDataCollection = {
  en: {
    welcomeScreenCard: {
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtevole',
      example: 'una notevole somma di denaro',
      definition: 'meritevole di considerazione',
      translation: 'noteworthy, remarkable, considerable, notable',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'en',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: 'arriˈvare',
          example:
            "* arrivare al successo\n* L'acqua mi arriva al petto.\n* arrivare a mentire",
          definition:
            '* giungere a destinazione o a una meta\n* raggiungere una certa misura, a un determinato livello\n* avere la sfrontatezza di fare qualcosa',
          translation:
            'to arrive, to reach, to achieve, to attain, to go as far as / to go so far as',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'question',
      sourceLanguage: 'it',
      targetLanguage: 'en',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'la domanda',
          ipa: 'doˈmanda',
          example:
            "* fare una domanda\n* domanda in carta bollata\n* la domanda supera l'offerta",
          definition:
            '* frase con cui si chiede qualcosa a qualcuno\n* richiesta formale scritta a un ufficio o autorità\n* quantità di un bene richiesta sul mercato',
          translation: 'question, request, application, claim, demand',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'it',
          source: 'la questione',
          ipa: 'kwesˈtjone',
          example:
            '* una questione giuridica\n* questione di metodo\n* venire a questione',
          definition:
            '* argomento da esaminare con cura\n* contrasto di interessi o di idee\n* scontro verbale',
          translation:
            'question, matter, dispute, controversy, argument, quarrel',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: 'manutenˈtsjone',
          example: 'fare manutenzione alla caldaia',
          definition:
            'operazioni per mantenere in buono stato e funzionante un impianto, un edificio e sim.',
          translation: 'maintenance, service, upkeep',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  es: {
    welcomeScreenCard: {
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtevole',
      example: 'una notevole somma di denaro',
      definition: 'meritevole di considerazione',
      translation: 'notable',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'es',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: 'arriˈvare',
          example:
            "* arrivare al successo\n* L'acqua mi arriva al petto.\n* arrivare a mentire",
          definition:
            '* giungere a destinazione o a una meta\n* raggiungere una certa misura, a un determinato livello\n* avere la sfrontatezza di fare qualcosa',
          translation: 'llegar, alcanzar, atreverse',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'pregunta',
      sourceLanguage: 'it',
      targetLanguage: 'es',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'la domanda',
          ipa: 'doˈmanda',
          example:
            "* fare una domanda\n* domanda in carta bollata\n* la domanda supera l'offerta",
          definition:
            '* frase con cui si chiede qualcosa a qualcuno\n* richiesta formale scritta a un ufficio o autorità\n* quantità di un bene richiesta sul mercato',
          translation: 'pregunta, solicitud, demanda',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'it',
          source: 'interrogativo',
          ipa: '',
          example: '',
          definition: '',
          translation: 'interrogativo',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: 'manutenˈtsjone',
          example: 'fare manutenzione alla caldaia',
          definition:
            'operazioni per mantenere in buono stato e funzionante un impianto, un edificio e sim.',
          translation: 'mantenimiento',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  fr: {
    welcomeScreenCard: {
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtevole',
      example: 'una notevole somma di denaro',
      definition: 'meritevole di considerazione',
      translation: 'remarquable',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'fr',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arriver',
          ipa: '',
          example: '',
          definition: '',
          translation: 'arriver',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'question',
      sourceLanguage: 'it',
      targetLanguage: 'fr',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'la domanda',
          ipa: 'doˈmanda',
          example:
            "* fare una domanda\n* domanda in carta bollata\n* la domanda supera l'offerta",
          definition:
            '* frase con cui si chiede qualcosa a qualcuno\n* richiesta formale scritta a un ufficio o autorità\n* quantità di un bene richiesta sul mercato',
          translation: 'question, demande',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'it',
          source: 'la questione',
          ipa: 'kwesˈtjone',
          example:
            '* una questione giuridica\n* questione di metodo\n* venire a questione',
          definition:
            '* argomento da esaminare con cura\n* contrasto di interessi o di idee\n* scontro verbale',
          translation: 'question, problème, controverse',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: 'manutenˈtsjone',
          example: 'fare manutenzione alla caldaia',
          definition:
            'operazioni per mantenere in buono stato e funzionante un impianto, un edificio e sim.',
          translation: 'entretien',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  de: {
    welcomeScreenCard: {
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtevole',
      example: 'una notevole somma di denaro',
      definition: 'meritevole di considerazione',
      translation: 'beachtenswert, bemerkenswert',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'de',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: 'arriˈvare',
          example:
            "* arrivare al successo\n* L'acqua mi arriva al petto.\n* arrivare a mentire",
          definition:
            '* giungere a destinazione o a una meta\n* raggiungere una certa misura, a un determinato livello\n* avere la sfrontatezza di fare qualcosa',
          translation: 'ankommen, erreichen, wagen',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'frage',
      sourceLanguage: 'it',
      targetLanguage: 'de',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'la domanda',
          ipa: 'doˈmanda',
          example:
            "* fare una domanda\n* domanda in carta bollata\n* la domanda supera l'offerta",
          definition:
            '* frase con cui si chiede qualcosa a qualcuno\n* richiesta formale scritta a un ufficio o autorità\n* quantità di un bene richiesta sul mercato',
          translation: 'Frage, Anfrage, Nachfrage',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'it',
          source: "l'interrogazione",
          ipa: 'interrogaˈtsjone',
          example: "Com'è andata l'interrogazione di storia?",
          definition: 'verifica orale della preparazione di uno studente',
          translation: 'Mündliche Prüfung, abfrage',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: 'manutenˈtsjone',
          example: 'fare manutenzione alla caldaia',
          definition:
            'operazioni per mantenere in buono stato e funzionante un impianto, un edificio e sim.',
          translation: 'Wartung',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  zh: {
    welcomeScreenCard: {
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtevole',
      example: 'una notevole somma di denaro',
      definition: 'meritevole di considerazione',
      translation: '显著的, 值得注意的',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'zh',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: 'arriˈvare',
          example:
            "* arrivare al successo\n* L'acqua mi arriva al petto.\n* arrivare a mentire",
          definition:
            '* giungere a destinazione o a una meta\n* raggiungere una certa misura, a un determinato livello\n* avere la sfrontatezza di fare qualcosa',
          translation: '到达, 达到, 敢于',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: '问题',
      sourceLanguage: 'it',
      targetLanguage: 'zh',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'il problema',
          ipa: 'proˈblɛma',
          example:
            '* problema di geometria\n* problema filosofico\n* avere problemi',
          definition:
            '* quesito da risolvere attraverso calcoli, sulla base di dati noti\n* questione irrisolta\n* situazione difficile da affrontare e da risolvere',
          translation: '问题, 难题',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
        {
          language: 'it',
          source: 'la questione',
          ipa: 'kwesˈtjone',
          example:
            '* una questione giuridica\n* questione di metodo\n* venire a questione',
          definition:
            '* argomento da esaminare con cura\n* contrasto di interessi o di idee\n* scontro verbale',
          translation: '问题, 争议, 争论',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: 'manutenˈtsjone',
          example: 'fare manutenzione alla caldaia',
          definition:
            'operazioni per mantenere in buono stato e funzionante un impianto, un edificio e sim.',
          translation: '维护',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  'zh-TW': {
    welcomeScreenCard: {
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtevole',
      example: 'una notevole somma di denaro',
      definition: 'meritevole di considerazione',
      translation: '值得注意的, 顯著的',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'zh-TW',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: 'arriˈvare',
          example:
            "* arrivare al successo\n* L'acqua mi arriva al petto.\n* arrivare a mentire",
          definition:
            '* giungere a destinazione o a una meta\n* raggiungere una certa misura, a un determinato livello\n* avere la sfrontatezza di fare qualcosa',
          translation: '到達, 達到, 敢於',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: '問題',
      sourceLanguage: 'it',
      targetLanguage: 'zh-TW',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'il problema',
          ipa: 'proˈblɛma',
          example:
            '* problema di geometria\n* problema filosofico\n* avere problemi',
          definition:
            '* quesito da risolvere attraverso calcoli, sulla base di dati noti\n* questione irrisolta\n* situazione difficile da affrontare e da risolvere',
          translation: '問題, 難題',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
        {
          language: 'it',
          source: 'la questione',
          ipa: 'kwesˈtjone',
          example:
            '* una questione giuridica\n* questione di metodo\n* venire a questione',
          definition:
            '* argomento da esaminare con cura\n* contrasto di interessi o di idee\n* scontro verbale',
          translation: '問題, 爭論, 議題',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: 'manutenˈtsjone',
          example: 'fare manutenzione alla caldaia',
          definition:
            'operazioni per mantenere in buono stato e funzionante un impianto, un edificio e sim.',
          translation: '維護',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  ja: {
    welcomeScreenCard: {
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtevole',
      example: 'una notevole somma di denaro',
      definition: 'meritevole di considerazione',
      translation: '著しい, 注目に値する, 顕著な, 注目すべき',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'ja',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: 'arriˈvare',
          example:
            "* arrivare al successo\n* L'acqua mi arriva al petto.\n* arrivare a mentire",
          definition:
            '* giungere a destinazione o a una meta\n* raggiungere una certa misura, a un determinato livello\n* avere la sfrontatezza di fare qualcosa',
          translation:
            '到着（とうちゃく）する, 着（つ）く, やって来（く）る, 届（とど）く, 到達（とうたつ）する, 達（たっ）する, ～するに至（いた）る, ～するまでになる, 厚（あつ）かましくも～する, 到着する',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: '質問',
      sourceLanguage: 'it',
      targetLanguage: 'ja',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'la domanda',
          ipa: 'doˈmanda',
          example:
            "* fare una domanda\n* domanda in carta bollata\n* la domanda supera l'offerta",
          definition:
            '* frase con cui si chiede qualcosa a qualcuno\n* richiesta formale scritta a un ufficio o autorità\n* quantità di un bene richiesta sul mercato',
          translation: '質問, 問い, 設問, 出願, 申請, 請願, 需要',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'it',
          source: "l'interrogazione",
          ipa: 'interrogaˈtsjone',
          example: "Com'è andata l'interrogazione di storia?",
          definition: 'verifica orale della preparazione di uno studente',
          translation: '口頭試験, 質問',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: 'manutenˈtsjone',
          example: 'fare manutenzione alla caldaia',
          definition:
            'operazioni per mantenere in buono stato e funzionante un impianto, un edificio e sim.',
          translation: '点検, 管理, 維持, メンテナンス',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  ru: {
    welcomeScreenCard: {
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtevole',
      example: 'una notevole somma di denaro',
      definition: 'meritevole di considerazione',
      translation: 'значительный, заметный',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'ru',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: 'arriˈvare',
          example:
            "* arrivare al successo\n* L'acqua mi arriva al petto.\n* arrivare a mentire",
          definition:
            '* giungere a destinazione o a una meta\n* raggiungere una certa misura, a un determinato livello\n* avere la sfrontatezza di fare qualcosa',
          translation: 'прибыть, достигнуть, осмелиться',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'вопрос',
      sourceLanguage: 'it',
      targetLanguage: 'ru',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'доманда',
          ipa: '',
          example: '',
          definition: '',
          translation: 'вопрос',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'it',
          source: 'la questione',
          ipa: 'kwesˈtjone',
          example:
            '* una questione giuridica\n* questione di metodo\n* venire a questione',
          definition:
            '* argomento da esaminare con cura\n* contrasto di interessi o di idee\n* scontro verbale',
          translation: 'вопрос, дело, спор',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: 'manutenˈtsjone',
          example: 'fare manutenzione alla caldaia',
          definition:
            'operazioni per mantenere in buono stato e funzionante un impianto, un edificio e sim.',
          translation: 'обслуживание',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  it: {
    welcomeScreenCard: {
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtevole',
      example: 'una notevole somma di denaro',
      definition: 'meritevole di considerazione',
      translation: '',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'it',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: 'arriˈvare',
          example:
            "* arrivare al successo\n* L'acqua mi arriva al petto.\n* arrivare a mentire",
          definition:
            '* giungere a destinazione o a una meta\n* raggiungere una certa misura, a un determinato livello\n* avere la sfrontatezza di fare qualcosa',
          translation: '',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'domanda',
      sourceLanguage: 'it',
      targetLanguage: 'it',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'question',
          ipa: '',
          example: '',
          definition: '',
          translation: 'question',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'it',
          source: 'demand',
          ipa: '',
          example: '',
          definition: '',
          translation: 'demand',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: 'manutenˈtsjone',
          example: 'fare manutenzione alla caldaia',
          definition:
            'operazioni per mantenere in buono stato e funzionante un impianto, un edificio e sim.',
          translation: '',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  pt: {
    welcomeScreenCard: {
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtevole',
      example: 'una notevole somma di denaro',
      definition: 'meritevole di considerazione',
      translation: 'notável',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'pt',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: 'arriˈvare',
          example:
            "* arrivare al successo\n* L'acqua mi arriva al petto.\n* arrivare a mentire",
          definition:
            '* giungere a destinazione o a una meta\n* raggiungere una certa misura, a un determinato livello\n* avere la sfrontatezza di fare qualcosa',
          translation: 'chegar, alcançar, ousar, ter a ousadia',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'pergunta',
      sourceLanguage: 'it',
      targetLanguage: 'pt',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'la domanda',
          ipa: 'doˈmanda',
          example:
            "* fare una domanda\n* domanda in carta bollata\n* la domanda supera l'offerta",
          definition:
            '* frase con cui si chiede qualcosa a qualcuno\n* richiesta formale scritta a un ufficio o autorità\n* quantità di un bene richiesta sul mercato',
          translation: 'pergunta, requerimento, pedido, demanda',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'it',
          source: 'interrogação',
          ipa: '',
          example: '',
          definition: '',
          translation: 'interrogation',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: 'manutenˈtsjone',
          example: 'fare manutenzione alla caldaia',
          definition:
            'operazioni per mantenere in buono stato e funzionante un impianto, un edificio e sim.',
          translation: 'manutenção',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  ar: {
    welcomeScreenCard: {
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtevole',
      example: 'una notevole somma di denaro',
      definition: 'meritevole di considerazione',
      translation: 'ملحوظ',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'ar',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: 'arriˈvare',
          example:
            "* arrivare al successo\n* L'acqua mi arriva al petto.\n* arrivare a mentire",
          definition:
            '* giungere a destinazione o a una meta\n* raggiungere una certa misura, a un determinato livello\n* avere la sfrontatezza di fare qualcosa',
          translation: 'الوصول, البلوغ, التجرؤ, يصل',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'سؤال',
      sourceLanguage: 'it',
      targetLanguage: 'ar',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'la domanda',
          ipa: 'doˈmanda',
          example:
            "* fare una domanda\n* domanda in carta bollata\n* la domanda supera l'offerta",
          definition:
            '* frase con cui si chiede qualcosa a qualcuno\n* richiesta formale scritta a un ufficio o autorità\n* quantità di un bene richiesta sul mercato',
          translation: 'سؤال, طلب, عرض',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: 'manutenˈtsjone',
          example: 'fare manutenzione alla caldaia',
          definition:
            'operazioni per mantenere in buono stato e funzionante un impianto, un edificio e sim.',
          translation: 'صيانة',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  nl: {
    welcomeScreenCard: {
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtevole',
      example: 'una notevole somma di denaro',
      definition: 'meritevole di considerazione',
      translation: 'opmerkelijk',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'nl',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: 'arriˈvare',
          example:
            "* arrivare al successo\n* L'acqua mi arriva al petto.\n* arrivare a mentire",
          definition:
            '* giungere a destinazione o a una meta\n* raggiungere una certa misura, a un determinato livello\n* avere la sfrontatezza di fare qualcosa',
          translation: 'aankomen, bereiken, durven',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'vraag',
      sourceLanguage: 'it',
      targetLanguage: 'nl',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'la domanda',
          ipa: 'doˈmanda',
          example:
            "* fare una domanda\n* domanda in carta bollata\n* la domanda supera l'offerta",
          definition:
            '* frase con cui si chiede qualcosa a qualcuno\n* richiesta formale scritta a un ufficio o autorità\n* quantità di un bene richiesta sul mercato',
          translation: 'vraag, aanvraag, vraagstuk',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'it',
          source: 'la richiesta',
          ipa: 'riˈkjɛsta',
          example:
            "* richiesta di assunzione\n* C'è una forte richiesta di personale paramedico.",
          definition:
            '* atto verbale o scritto con cui si chiede qualcosa\n* domanda di beni o servizi',
          translation: 'verzoek, aanvraag',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: 'manutenˈtsjone',
          example: 'fare manutenzione alla caldaia',
          definition:
            'operazioni per mantenere in buono stato e funzionante un impianto, un edificio e sim.',
          translation: 'onderhoud',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  ko: {
    welcomeScreenCard: {
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtevole',
      example: 'una notevole somma di denaro',
      definition: 'meritevole di considerazione',
      translation: '주목할 만한',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'ko',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: 'arriˈvare',
          example:
            "* arrivare al successo\n* L'acqua mi arriva al petto.\n* arrivare a mentire",
          definition:
            '* giungere a destinazione o a una meta\n* raggiungere una certa misura, a un determinato livello\n* avere la sfrontatezza di fare qualcosa',
          translation: '도착하다, 이르다, 가다',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: '질문',
      sourceLanguage: 'it',
      targetLanguage: 'ko',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'la domanda',
          ipa: 'doˈmanda',
          example:
            "* fare una domanda\n* domanda in carta bollata\n* la domanda supera l'offerta",
          definition:
            '* frase con cui si chiede qualcosa a qualcuno\n* richiesta formale scritta a un ufficio o autorità\n* quantità di un bene richiesta sul mercato',
          translation: '질문, 신청서, 수요',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: 'manutenˈtsjone',
          example: 'fare manutenzione alla caldaia',
          definition:
            'operazioni per mantenere in buono stato e funzionante un impianto, un edificio e sim.',
          translation: '유지보수',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  hi: {
    welcomeScreenCard: {
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtevole',
      example: 'una notevole somma di denaro',
      definition: 'meritevole di considerazione',
      translation: 'महत्वपूर्ण, विशेष',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'hi',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: 'arriˈvare',
          example:
            "* arrivare al successo\n* L'acqua mi arriva al petto.\n* arrivare a mentire",
          definition:
            '* giungere a destinazione o a una meta\n* raggiungere una certa misura, a un determinato livello\n* avere la sfrontatezza di fare qualcosa',
          translation: 'पहुंचना, मिलना, आना',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'सवाल',
      sourceLanguage: 'it',
      targetLanguage: 'hi',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'la domanda',
          ipa: 'doˈmanda',
          example:
            "* fare una domanda\n* domanda in carta bollata\n* la domanda supera l'offerta",
          definition:
            '* frase con cui si chiede qualcosa a qualcuno\n* richiesta formale scritta a un ufficio o autorità\n* quantità di un bene richiesta sul mercato',
          translation: 'प्रश्न, आवेदन, मांग',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'it',
          source: 'interrogativo',
          ipa: '',
          example: '',
          definition: '',
          translation: 'प्रश्नवाचक',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: 'manutenˈtsjone',
          example: 'fare manutenzione alla caldaia',
          definition:
            'operazioni per mantenere in buono stato e funzionante un impianto, un edificio e sim.',
          translation: 'रखरखाव',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  tr: {
    welcomeScreenCard: {
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtevole',
      example: 'una notevole somma di denaro',
      definition: 'meritevole di considerazione',
      translation: 'dikkate değer, önemli',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'tr',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: 'arriˈvare',
          example:
            "* arrivare al successo\n* L'acqua mi arriva al petto.\n* arrivare a mentire",
          definition:
            '* giungere a destinazione o a una meta\n* raggiungere una certa misura, a un determinato livello\n* avere la sfrontatezza di fare qualcosa',
          translation: 'varmak, ulaşmak, gelmek',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'soru',
      sourceLanguage: 'it',
      targetLanguage: 'tr',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'la domanda',
          ipa: 'doˈmanda',
          example:
            "* fare una domanda\n* domanda in carta bollata\n* la domanda supera l'offerta",
          definition:
            '* frase con cui si chiede qualcosa a qualcuno\n* richiesta formale scritta a un ufficio o autorità\n* quantità di un bene richiesta sul mercato',
          translation: 'soru, talep, istek',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: 'manutenˈtsjone',
          example: 'fare manutenzione alla caldaia',
          definition:
            'operazioni per mantenere in buono stato e funzionante un impianto, un edificio e sim.',
          translation: 'bakım',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  sv: {
    welcomeScreenCard: {
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtevole',
      example: 'una notevole somma di denaro',
      definition: 'meritevole di considerazione',
      translation: 'anmärkningsvärd',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'sv',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: 'arriˈvare',
          example:
            "* arrivare al successo\n* L'acqua mi arriva al petto.\n* arrivare a mentire",
          definition:
            '* giungere a destinazione o a una meta\n* raggiungere una certa misura, a un determinato livello\n* avere la sfrontatezza di fare qualcosa',
          translation: 'anlända, nå, våga, ankomma',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'fråga',
      sourceLanguage: 'it',
      targetLanguage: 'sv',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'la domanda',
          ipa: 'doˈmanda',
          example:
            "* fare una domanda\n* domanda in carta bollata\n* la domanda supera l'offerta",
          definition:
            '* frase con cui si chiede qualcosa a qualcuno\n* richiesta formale scritta a un ufficio o autorità\n* quantità di un bene richiesta sul mercato',
          translation: 'fråga, ansökan, efterfrågan',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'it',
          source: 'la richiesta',
          ipa: 'riˈkjɛsta',
          example:
            "* richiesta di assunzione\n* C'è una forte richiesta di personale paramedico.",
          definition:
            '* atto verbale o scritto con cui si chiede qualcosa\n* domanda di beni o servizi',
          translation: 'begäran, förfrågan',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: 'manutenˈtsjone',
          example: 'fare manutenzione alla caldaia',
          definition:
            'operazioni per mantenere in buono stato e funzionante un impianto, un edificio e sim.',
          translation: 'underhåll',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  no: {
    welcomeScreenCard: {
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtevole',
      example: 'una notevole somma di denaro',
      definition: 'meritevole di considerazione',
      translation: 'betydelig, bemerkelsesverdig',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'no',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: 'arriˈvare',
          example:
            "* arrivare al successo\n* L'acqua mi arriva al petto.\n* arrivare a mentire",
          definition:
            '* giungere a destinazione o a una meta\n* raggiungere una certa misura, a un determinato livello\n* avere la sfrontatezza di fare qualcosa',
          translation:
            'å ankomme, å komme frem, å oppnå, å nå, å rekke, å våge, å gå til ytterligheter, å få seg til',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'spørsmål',
      sourceLanguage: 'it',
      targetLanguage: 'no',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'la domanda',
          ipa: 'doˈmanda',
          example:
            "* fare una domanda\n* domanda in carta bollata\n* la domanda supera l'offerta",
          definition:
            '* frase con cui si chiede qualcosa a qualcuno\n* richiesta formale scritta a un ufficio o autorità\n* quantità di un bene richiesta sul mercato',
          translation: 'spørsmål, forespørsel, søknad, krav, etterspørsel',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'it',
          source: "l'interrogativo",
          ipa: 'interrogaˈtivo',
          example:
            '* Sono molti gli interrogativi sulla sua morte.\n* Il futuro è un interrogativo unico.',
          definition:
            "* elemento d'incertezza, che genera perplessità\n* cosa misteriosa",
          translation: 'spørsmål, tvil, perpleksitet, mysterium, gåte',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: 'manutenˈtsjone',
          example: 'fare manutenzione alla caldaia',
          definition:
            'operazioni per mantenere in buono stato e funzionante un impianto, un edificio e sim.',
          translation: 'vedlikehold',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  da: {
    welcomeScreenCard: {
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtevole',
      example: 'una notevole somma di denaro',
      definition: 'meritevole di considerazione',
      translation: 'bemærkelsesværdig',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'da',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: 'arriˈvare',
          example:
            "* arrivare al successo\n* L'acqua mi arriva al petto.\n* arrivare a mentire",
          definition:
            '* giungere a destinazione o a una meta\n* raggiungere una certa misura, a un determinato livello\n* avere la sfrontatezza di fare qualcosa',
          translation: 'ankomme, nå, vove',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'spørgsmål',
      sourceLanguage: 'it',
      targetLanguage: 'da',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'la domanda',
          ipa: 'doˈmanda',
          example:
            "* fare una domanda\n* domanda in carta bollata\n* la domanda supera l'offerta",
          definition:
            '* frase con cui si chiede qualcosa a qualcuno\n* richiesta formale scritta a un ufficio o autorità\n* quantità di un bene richiesta sul mercato',
          translation: 'spørgsmål, anmodning, efterspørgsel',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'it',
          source: "l'interrogativo",
          ipa: 'interrogaˈtivo',
          example:
            '* Sono molti gli interrogativi sulla sua morte.\n* Il futuro è un interrogativo unico.',
          definition:
            "* elemento d'incertezza, che genera perplessità\n* cosa misteriosa",
          translation: 'spørgsmål, mysterium',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: 'manutenˈtsjone',
          example: 'fare manutenzione alla caldaia',
          definition:
            'operazioni per mantenere in buono stato e funzionante un impianto, un edificio e sim.',
          translation: 'vedligeholdelse',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  fi: {
    welcomeScreenCard: {
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtevole',
      example: 'una notevole somma di denaro',
      definition: 'meritevole di considerazione',
      translation: 'merkittävä',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'fi',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: 'arriˈvare',
          example:
            "* arrivare al successo\n* L'acqua mi arriva al petto.\n* arrivare a mentire",
          definition:
            '* giungere a destinazione o a una meta\n* raggiungere una certa misura, a un determinato livello\n* avere la sfrontatezza di fare qualcosa',
          translation: 'saapua, saavuttaa, uskallus',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'kysymys',
      sourceLanguage: 'it',
      targetLanguage: 'fi',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'la domanda',
          ipa: 'doˈmanda',
          example:
            "* fare una domanda\n* domanda in carta bollata\n* la domanda supera l'offerta",
          definition:
            '* frase con cui si chiede qualcosa a qualcuno\n* richiesta formale scritta a un ufficio o autorità\n* quantità di un bene richiesta sul mercato',
          translation: 'kysymys, hakemus, tarjous',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'it',
          source: 'la questione',
          ipa: 'kwesˈtjone',
          example:
            '* una questione giuridica\n* questione di metodo\n* venire a questione',
          definition:
            '* argomento da esaminare con cura\n* contrasto di interessi o di idee\n* scontro verbale',
          translation: 'kysymys, asia, riita',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: 'manutenˈtsjone',
          example: 'fare manutenzione alla caldaia',
          definition:
            'operazioni per mantenere in buono stato e funzionante un impianto, un edificio e sim.',
          translation: 'huolto',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  fa: {
    welcomeScreenCard: {
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtevole',
      example: 'una notevole somma di denaro',
      definition: 'meritevole di considerazione',
      translation: 'قابل توجه',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'fa',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: 'arriˈvare',
          example:
            "* arrivare al successo\n* L'acqua mi arriva al petto.\n* arrivare a mentire",
          definition:
            '* giungere a destinazione o a una meta\n* raggiungere una certa misura, a un determinato livello\n* avere la sfrontatezza di fare qualcosa',
          translation: 'جرأت داشتن، دست یافتن به، رسیدن',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'سوال',
      sourceLanguage: 'it',
      targetLanguage: 'fa',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'la domanda',
          ipa: 'doˈmanda',
          example:
            "* fare una domanda\n* domanda in carta bollata\n* la domanda supera l'offerta",
          definition:
            '* frase con cui si chiede qualcosa a qualcuno\n* richiesta formale scritta a un ufficio o autorità\n* quantità di un bene richiesta sul mercato',
          translation: 'تقاضا، درخواست، سوال',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'it',
          source: 'la questione',
          ipa: 'kwesˈtjone',
          example:
            '* una questione giuridica\n* questione di metodo\n* venire a questione',
          definition:
            '* argomento da esaminare con cura\n* contrasto di interessi o di idee\n* scontro verbale',
          translation: 'بحث، مسئله، موضوع',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: 'manutenˈtsjone',
          example: 'fare manutenzione alla caldaia',
          definition:
            'operazioni per mantenere in buono stato e funzionante un impianto, un edificio e sim.',
          translation: 'نگهداری',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  pl: {
    welcomeScreenCard: {
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtevole',
      example: 'una notevole somma di denaro',
      definition: 'meritevole di considerazione',
      translation: 'znaczący, godny uwagi',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'pl',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: 'arriˈvare',
          example:
            "* arrivare al successo\n* L'acqua mi arriva al petto.\n* arrivare a mentire",
          definition:
            '* giungere a destinazione o a una meta\n* raggiungere una certa misura, a un determinato livello\n* avere la sfrontatezza di fare qualcosa',
          translation: 'przybyć, osiągnąć, mieć czelność',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'pytanie',
      sourceLanguage: 'it',
      targetLanguage: 'pl',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'la domanda',
          ipa: 'doˈmanda',
          example:
            "* fare una domanda\n* domanda in carta bollata\n* la domanda supera l'offerta",
          definition:
            '* frase con cui si chiede qualcosa a qualcuno\n* richiesta formale scritta a un ufficio o autorità\n* quantità di un bene richiesta sul mercato',
          translation: 'pytanie, wniosek, popyt',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: 'manutenˈtsjone',
          example: 'fare manutenzione alla caldaia',
          definition:
            'operazioni per mantenere in buono stato e funzionante un impianto, un edificio e sim.',
          translation: 'konserwacja',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  el: {
    welcomeScreenCard: {
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtevole',
      example: 'una notevole somma di denaro',
      definition: 'meritevole di considerazione',
      translation: 'σημαντικός',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'el',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: 'arriˈvare',
          example:
            "* arrivare al successo\n* L'acqua mi arriva al petto.\n* arrivare a mentire",
          definition:
            '* giungere a destinazione o a una meta\n* raggiungere una certa misura, a un determinato livello\n* avere la sfrontatezza di fare qualcosa',
          translation: 'φτάνω, καταφθάνω, αποφασίζω',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'ερώτηση',
      sourceLanguage: 'it',
      targetLanguage: 'el',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'la domanda',
          ipa: 'doˈmanda',
          example:
            "* fare una domanda\n* domanda in carta bollata\n* la domanda supera l'offerta",
          definition:
            '* frase con cui si chiede qualcosa a qualcuno\n* richiesta formale scritta a un ufficio o autorità\n* quantità di un bene richiesta sul mercato',
          translation: 'ερώτηση, αίτηση, ζήτηση',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: 'manutenˈtsjone',
          example: 'fare manutenzione alla caldaia',
          definition:
            'operazioni per mantenere in buono stato e funzionante un impianto, un edificio e sim.',
          translation: 'συντήρηση',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  he: {
    welcomeScreenCard: {
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtevole',
      example: 'una notevole somma di denaro',
      definition: 'meritevole di considerazione',
      translation: 'בולט, בּוֹלֵט',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'he',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: 'arriˈvare',
          example:
            "* arrivare al successo\n* L'acqua mi arriva al petto.\n* arrivare a mentire",
          definition:
            '* giungere a destinazione o a una meta\n* raggiungere una certa misura, a un determinato livello\n* avere la sfrontatezza di fare qualcosa',
          translation: 'להגיע, לשוב, להעיז, לְהַגִּיעַ',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'שְׁאֵלָה',
      sourceLanguage: 'it',
      targetLanguage: 'he',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'la domanda',
          ipa: 'doˈmanda',
          example:
            "* fare una domanda\n* domanda in carta bollata\n* la domanda supera l'offerta",
          definition:
            '* frase con cui si chiede qualcosa a qualcuno\n* richiesta formale scritta a un ufficio o autorità\n* quantità di un bene richiesta sul mercato',
          translation: 'שאלה, בקשה, דרישה, שָׁאֵלָה',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'it',
          source: 'la richiesta',
          ipa: 'riˈkjɛsta',
          example:
            "* richiesta di assunzione\n* C'è una forte richiesta di personale paramedico.",
          definition:
            '* atto verbale o scritto con cui si chiede qualcosa\n* domanda di beni o servizi',
          translation: 'בקשה, שאלה, בַּקָּשָׁה',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: 'manutenˈtsjone',
          example: 'fare manutenzione alla caldaia',
          definition:
            'operazioni per mantenere in buono stato e funzionante un impianto, un edificio e sim.',
          translation: 'תחזוקה',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  th: {
    welcomeScreenCard: {
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtevole',
      example: 'una notevole somma di denaro',
      definition: 'meritevole di considerazione',
      translation: 'น่าพิจารณา, น่าทึ่ง',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'th',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: 'arriˈvare',
          example:
            "* arrivare al successo\n* L'acqua mi arriva al petto.\n* arrivare a mentire",
          definition:
            '* giungere a destinazione o a una meta\n* raggiungere una certa misura, a un determinato livello\n* avere la sfrontatezza di fare qualcosa',
          translation: 'มาถึง, ไปถึง, ถึง',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'คำถาม',
      sourceLanguage: 'it',
      targetLanguage: 'th',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'la domanda',
          ipa: 'doˈmanda',
          example:
            "* fare una domanda\n* domanda in carta bollata\n* la domanda supera l'offerta",
          definition:
            '* frase con cui si chiede qualcosa a qualcuno\n* richiesta formale scritta a un ufficio o autorità\n* quantità di un bene richiesta sul mercato',
          translation: 'คำถาม, คำร้อง, ความต้องการ',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: 'manutenˈtsjone',
          example: 'fare manutenzione alla caldaia',
          definition:
            'operazioni per mantenere in buono stato e funzionante un impianto, un edificio e sim.',
          translation: 'การบำรุงรักษา',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  vi: {
    welcomeScreenCard: {
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtevole',
      example: 'una notevole somma di denaro',
      definition: 'meritevole di considerazione',
      translation: 'đáng chú ý',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'vi',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: 'arriˈvare',
          example:
            "* arrivare al successo\n* L'acqua mi arriva al petto.\n* arrivare a mentire",
          definition:
            '* giungere a destinazione o a una meta\n* raggiungere una certa misura, a un determinato livello\n* avere la sfrontatezza di fare qualcosa',
          translation: 'đến nơi, đạt được, dám làm',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'câu hỏi',
      sourceLanguage: 'it',
      targetLanguage: 'vi',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'la domanda',
          ipa: 'doˈmanda',
          example:
            "* fare una domanda\n* domanda in carta bollata\n* la domanda supera l'offerta",
          definition:
            '* frase con cui si chiede qualcosa a qualcuno\n* richiesta formale scritta a un ufficio o autorità\n* quantità di un bene richiesta sul mercato',
          translation: 'câu hỏi, đơn xin, nhu cầu',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: 'manutenˈtsjone',
          example: 'fare manutenzione alla caldaia',
          definition:
            'operazioni per mantenere in buono stato e funzionante un impianto, un edificio e sim.',
          translation: 'bảo trì',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  id: {
    welcomeScreenCard: {
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtevole',
      example: 'una notevole somma di denaro',
      definition: 'meritevole di considerazione',
      translation: 'signifikan, menonjol',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'id',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: 'arriˈvare',
          example:
            "* arrivare al successo\n* L'acqua mi arriva al petto.\n* arrivare a mentire",
          definition:
            '* giungere a destinazione o a una meta\n* raggiungere una certa misura, a un determinato livello\n* avere la sfrontatezza di fare qualcosa',
          translation: 'tiba, mencapai, berani',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'pertanyaan',
      sourceLanguage: 'it',
      targetLanguage: 'id',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'la domanda',
          ipa: 'doˈmanda',
          example:
            "* fare una domanda\n* domanda in carta bollata\n* la domanda supera l'offerta",
          definition:
            '* frase con cui si chiede qualcosa a qualcuno\n* richiesta formale scritta a un ufficio o autorità\n* quantità di un bene richiesta sul mercato',
          translation: 'pertanyaan, permohonan, permintaan',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: 'manutenˈtsjone',
          example: 'fare manutenzione alla caldaia',
          definition:
            'operazioni per mantenere in buono stato e funzionante un impianto, un edificio e sim.',
          translation: 'perawatan',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  ms: {
    welcomeScreenCard: {
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtevole',
      example: 'una notevole somma di denaro',
      definition: 'meritevole di considerazione',
      translation: 'ketara',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'ms',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: 'arriˈvare',
          example:
            "* arrivare al successo\n* L'acqua mi arriva al petto.\n* arrivare a mentire",
          definition:
            '* giungere a destinazione o a una meta\n* raggiungere una certa misura, a un determinato livello\n* avere la sfrontatezza di fare qualcosa',
          translation: 'tiba, sampai, mencapai',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'soalan',
      sourceLanguage: 'it',
      targetLanguage: 'ms',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'la domanda',
          ipa: 'doˈmanda',
          example:
            "* fare una domanda\n* domanda in carta bollata\n* la domanda supera l'offerta",
          definition:
            '* frase con cui si chiede qualcosa a qualcuno\n* richiesta formale scritta a un ufficio o autorità\n* quantità di un bene richiesta sul mercato',
          translation: 'soalan, permohonan, permintaan',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: 'manutenˈtsjone',
          example: 'fare manutenzione alla caldaia',
          definition:
            'operazioni per mantenere in buono stato e funzionante un impianto, un edificio e sim.',
          translation: 'penyelenggaraan',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  uk: {
    welcomeScreenCard: {
      language: 'it',
      source: 'notevole',
      ipa: 'noˈtevole',
      example: 'una notevole somma di denaro',
      definition: 'meritevole di considerazione',
      translation: 'значний',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arrivare',
      sourceLanguage: 'it',
      targetLanguage: 'uk',
      isReversed: false,
      results: [
        {
          language: 'it',
          source: 'arrivare',
          ipa: 'arriˈvare',
          example:
            "* arrivare al successo\n* L'acqua mi arriva al petto.\n* arrivare a mentire",
          definition:
            '* giungere a destinazione o a una meta\n* raggiungere una certa misura, a un determinato livello\n* avere la sfrontatezza di fare qualcosa',
          translation: 'прибути, досягти, наважитися, приїхати',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'запитання',
      sourceLanguage: 'it',
      targetLanguage: 'uk',
      isReversed: true,
      results: [
        {
          language: 'it',
          source: 'доманда',
          ipa: '',
          example: '',
          definition: '',
          translation: 'питання',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
      results: [
        {
          language: 'it',
          source: 'la manutenzione',
          ipa: 'manutenˈtsjone',
          example: 'fare manutenzione alla caldaia',
          definition:
            'operazioni per mantenere in buono stato e funzionante un impianto, un edificio e sim.',
          translation: 'обслуговування',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
};
