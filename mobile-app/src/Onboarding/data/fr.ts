import { MobileOnboardingDataCollection } from '@vocably/model';

export const onboardingCollection: MobileOnboardingDataCollection = {
  en: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʀəmaʀkabl',
      example: 'un travail remarquable',
      definition: "d'une grande qualité",
      translation: 'remarkable',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'en',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'aʀive',
          example:
            "* Le train arrivera à l'heure.\n* Le printemps arrive.\n* arriver à faire quelque chose",
          definition:
            '* parvenir à destination\n* venir, approcher\n* réussir\n* se produire',
          translation:
            'to arrive, to be coming, to succeed, to happen, to come up to, to reach',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'question',
      sourceLanguage: 'fr',
      targetLanguage: 'en',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'question',
          ipa: 'kɛstjɔ̃',
          example: '* poser une question à quelqu’un\n* une question délicate',
          definition: "* ce que l'on demande\n* sujet qui pose un problème",
          translation: 'question',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'fr',
          source: 'interrogation',
          ipa: 'ɛ̃teʀɔgasjɔ̃',
          example:
            '* répondre à une interrogation\n* une interrogationécrite / orale',
          definition:
            "* ce qu'on demande à quelqu’un\n* examen, évaluation des connaissances",
          translation: 'question, test, interrogation',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃tʀətjɛ̃',
          example:
            "* l'entretien de la piscine\n* passer un entretien d'embauche",
          definition:
            '* action de maintenir en bon état\n* conversation qui a un but précis',
          translation: 'maintenance, interview',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  es: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʀəmaʀkabl',
      example: 'un travail remarquable',
      definition: "d'une grande qualité",
      translation: 'asombroso, remarcable',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'es',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'aʀive',
          example:
            "* Le train arrivera à l'heure.\n* Le printemps arrive.\n* arriver à faire quelque chose",
          definition:
            '* parvenir à destination\n* venir, approcher\n* réussir\n* se produire',
          translation: 'arribar, acercarse, triunfar, suceder, ocurrir, llegar',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'pregunta',
      sourceLanguage: 'fr',
      targetLanguage: 'es',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'question',
          ipa: 'kɛstjɔ̃',
          example: '* poser une question à quelqu’un\n* une question délicate',
          definition: "* ce que l'on demande\n* sujet qui pose un problème",
          translation: 'pregunta, cuestión',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'fr',
          source: 'demande',
          ipa: 'dəmɑ̃d',
          example: "les demandes d'emploi",
          definition: "action de dire à quelqu’un ce que l'on veut",
          translation: 'pedido, solicitud',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃tʀətjɛ̃',
          example:
            "* l'entretien de la piscine\n* passer un entretien d'embauche",
          definition:
            '* action de maintenir en bon état\n* conversation qui a un but précis',
          translation: 'conservación, entrevista, mantenimiento',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  fr: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʀəmaʀkabl',
      example: 'un travail remarquable',
      definition: "d'une grande qualité",
      translation: '',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'fr',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'aʀive',
          example:
            "* Le train arrivera à l'heure.\n* Le printemps arrive.\n* arriver à faire quelque chose",
          definition:
            '* parvenir à destination\n* venir, approcher\n* réussir\n* se produire',
          translation: '',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'question',
      sourceLanguage: 'fr',
      targetLanguage: 'fr',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'question',
          ipa: 'kɛstjɔ̃',
          example: '* poser une question à quelqu’un\n* une question délicate',
          definition: "* ce que l'on demande\n* sujet qui pose un problème",
          translation: '',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'fr',
          source: 'interrogation',
          ipa: 'ɛ̃teʀɔgasjɔ̃',
          example:
            '* répondre à une interrogation\n* une interrogationécrite / orale',
          definition:
            "* ce qu'on demande à quelqu’un\n* examen, évaluation des connaissances",
          translation: '',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃tʀətjɛ̃',
          example:
            "* l'entretien de la piscine\n* passer un entretien d'embauche",
          definition:
            '* action de maintenir en bon état\n* conversation qui a un but précis',
          translation: '',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  de: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʀəmaʀkabl',
      example: 'un travail remarquable',
      definition: "d'une grande qualité",
      translation: 'bemerkenswert',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'de',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'aʀive',
          example:
            "* Le train arrivera à l'heure.\n* Le printemps arrive.\n* arriver à faire quelque chose",
          definition:
            '* parvenir à destination\n* venir, approcher\n* réussir\n* se produire',
          translation: 'ankommen, sich nähern, schaffen, vorkommen',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'frage',
      sourceLanguage: 'fr',
      targetLanguage: 'de',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'question',
          ipa: 'kɛstjɔ̃',
          example: '* poser une question à quelqu’un\n* une question délicate',
          definition: "* ce que l'on demande\n* sujet qui pose un problème",
          translation: 'Frage, Angelegenheit',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'fr',
          source: 'demande',
          ipa: 'dəmɑ̃d',
          example: "les demandes d'emploi",
          definition: "action de dire à quelqu’un ce que l'on veut",
          translation: 'Bitte, anfrage',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃tʀətjɛ̃',
          example:
            "* l'entretien de la piscine\n* passer un entretien d'embauche",
          definition:
            '* action de maintenir en bon état\n* conversation qui a un but précis',
          translation: 'Pflege, Wartung, Gespräch',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  zh: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʀəmaʀkabl',
      example: 'un travail remarquable',
      definition: "d'une grande qualité",
      translation: '非凡的, 卓越的, 显著的',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'zh',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'aʀive',
          example:
            "* Le train arrivera à l'heure.\n* Le printemps arrive.\n* arriver à faire quelque chose",
          definition:
            '* parvenir à destination\n* venir, approcher\n* réussir\n* se produire',
          translation: '到达, 抵达, 走近, 过来, 达到 ;终于, 发生',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: '问题',
      sourceLanguage: 'fr',
      targetLanguage: 'zh',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'problème',
          ipa: 'pʀɔblɛm',
          example:
            "* Ses difficultés posent problème.\n* un problème d'algèbre",
          definition:
            '* difficulté à résoudre\n* question, exercice dont il faut trouver la solution',
          translation: '问题,难题, 题目 ;习题',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
        {
          language: 'fr',
          source: 'question',
          ipa: 'kɛstjɔ̃',
          example: '* poser une question à quelqu’un\n* une question délicate',
          definition: "* ce que l'on demande\n* sujet qui pose un problème",
          translation: '问题,问话, (需要考虑,讨论,解决的)问题',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃tʀətjɛ̃',
          example:
            "* l'entretien de la piscine\n* passer un entretien d'embauche",
          definition:
            '* action de maintenir en bon état\n* conversation qui a un but précis',
          translation: '保养, 维护, 维修, 交谈, 面试',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  'zh-TW': {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʀəmaʀkabl',
      example: 'un travail remarquable',
      definition: "d'une grande qualité",
      translation: '卓越的',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'zh-TW',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'aʀive',
          example:
            "* Le train arrivera à l'heure.\n* Le printemps arrive.\n* arriver à faire quelque chose",
          definition:
            '* parvenir à destination\n* venir, approcher\n* réussir\n* se produire',
          translation: '到達, 接近, 成功, 發生',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: '問題',
      sourceLanguage: 'fr',
      targetLanguage: 'zh-TW',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'problème',
          ipa: 'pʀɔblɛm',
          example:
            "* Ses difficultés posent problème.\n* un problème d'algèbre",
          definition:
            '* difficulté à résoudre\n* question, exercice dont il faut trouver la solution',
          translation: '問題, 難題',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
        {
          language: 'fr',
          source: 'question',
          ipa: 'kɛstjɔ̃',
          example: '* poser une question à quelqu’un\n* une question délicate',
          definition: "* ce que l'on demande\n* sujet qui pose un problème",
          translation: '問題, 詢問',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃tʀətjɛ̃',
          example:
            "* l'entretien de la piscine\n* passer un entretien d'embauche",
          definition:
            '* action de maintenir en bon état\n* conversation qui a un but précis',
          translation: '維護, 會談',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  ja: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʀəmaʀkabl',
      example: 'un travail remarquable',
      definition: "d'une grande qualité",
      translation: '傑出（けっしゅつ）した、すばらしい, 注目すべき',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'ja',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'aʀive',
          example:
            "* Le train arrivera à l'heure.\n* Le printemps arrive.\n* arriver à faire quelque chose",
          definition:
            '* parvenir à destination\n* venir, approcher\n* réussir\n* se produire',
          translation:
            '到着（とうちゃく）する, やって来（く）る, うまくできる, 起（お）こる, 到着する',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: '質問',
      sourceLanguage: 'fr',
      targetLanguage: 'ja',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'question',
          ipa: 'kɛstjɔ̃',
          example: '* poser une question à quelqu’un\n* une question délicate',
          definition: "* ce que l'on demande\n* sujet qui pose un problème",
          translation: '質問（しつもん）, 問題（もんだい）',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃tʀətjɛ̃',
          example:
            "* l'entretien de la piscine\n* passer un entretien d'embauche",
          definition:
            '* action de maintenir en bon état\n* conversation qui a un but précis',
          translation:
            '維持（いじ）、保守（ほしゅ）, 会談（かいだん）、面接（めんせつ）, メンテナンス',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  ru: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʀəmaʀkabl',
      example: 'un travail remarquable',
      definition: "d'une grande qualité",
      translation: 'замеча́тельный, замечательный',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'ru',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'aʀive',
          example:
            "* Le train arrivera à l'heure.\n* Le printemps arrive.\n* arriver à faire quelque chose",
          definition:
            '* parvenir à destination\n* venir, approcher\n* réussir\n* se produire',
          translation:
            'прибыва́ть, приезжа́ть, приходи́ть, приближа́ться, удава́ться, случа́ться, происходить, происходи́ть, приходить',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'вопрос',
      sourceLanguage: 'fr',
      targetLanguage: 'ru',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'question',
          ipa: 'kɛstjɔ̃',
          example: '* poser une question à quelqu’un\n* une question délicate',
          definition: "* ce que l'on demande\n* sujet qui pose un problème",
          translation: 'вопро́с, вопрос',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃tʀətjɛ̃',
          example:
            "* l'entretien de la piscine\n* passer un entretien d'embauche",
          definition:
            '* action de maintenir en bon état\n* conversation qui a un but précis',
          translation: 'содержа́ние в поря́дке, собесе́дование, обслуживание',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  it: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʀəmaʀkabl',
      example: 'un travail remarquable',
      definition: "d'une grande qualité",
      translation: 'straordinario, notevole',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'it',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'aʀive',
          example:
            "* Le train arrivera à l'heure.\n* Le printemps arrive.\n* arriver à faire quelque chose",
          definition:
            '* parvenir à destination\n* venir, approcher\n* réussir\n* se produire',
          translation: 'arrivare, giungere, riuscire, capitare, succedere',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'domanda',
      sourceLanguage: 'fr',
      targetLanguage: 'it',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'domanda',
          ipa: '',
          example: '',
          definition: '',
          translation: 'domanda',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'fr',
          source: 'demande',
          ipa: 'dəmɑ̃d',
          example: "les demandes d'emploi",
          definition: "action de dire à quelqu’un ce que l'on veut",
          translation: 'domanda, richiesta',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃tʀətjɛ̃',
          example:
            "* l'entretien de la piscine\n* passer un entretien d'embauche",
          definition:
            '* action de maintenir en bon état\n* conversation qui a un but précis',
          translation: 'manutenzione, conversazione, colloquio',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  pt: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarcável',
      ipa: '',
      example: '',
      definition: '',
      translation: 'remarkable',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'pt',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'aʀive',
          example:
            "* Le train arrivera à l'heure.\n* Le printemps arrive.\n* arriver à faire quelque chose",
          definition:
            '* parvenir à destination\n* venir, approcher\n* réussir\n* se produire',
          translation: 'chegar, conseguir, acontecer',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'pergunta',
      sourceLanguage: 'fr',
      targetLanguage: 'pt',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'questão',
          ipa: '',
          example: '',
          definition: '',
          translation: 'questão',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃tʀətjɛ̃',
          example:
            "* l'entretien de la piscine\n* passer un entretien d'embauche",
          definition:
            '* action de maintenir en bon état\n* conversation qui a un but précis',
          translation: 'manutenção, entrevista',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  ar: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʀəmaʀkabl',
      example: 'un travail remarquable',
      definition: "d'une grande qualité",
      translation: 'قيِّم, ملحوظ',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'ar',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'aʀive',
          example:
            "* Le train arrivera à l'heure.\n* Le printemps arrive.\n* arriver à faire quelque chose",
          definition:
            '* parvenir à destination\n* venir, approcher\n* réussir\n* se produire',
          translation: 'وصل, إقترب, نجح, حصل, حدث, يصل',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'سؤال',
      sourceLanguage: 'fr',
      targetLanguage: 'ar',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'question',
          ipa: 'kɛstjɔ̃',
          example: '* poser une question à quelqu’un\n* une question délicate',
          definition: "* ce que l'on demande\n* sujet qui pose un problème",
          translation: 'سؤال, موضوع',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃tʀətjɛ̃',
          example:
            "* l'entretien de la piscine\n* passer un entretien d'embauche",
          definition:
            '* action de maintenir en bon état\n* conversation qui a un but précis',
          translation: 'صيانة, مقابلة',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  nl: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʀəmaʀkabl',
      example: 'un travail remarquable',
      definition: "d'une grande qualité",
      translation: 'voortreffelijk, opmerkelijk',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'nl',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'aʀive',
          example:
            "* Le train arrivera à l'heure.\n* Le printemps arrive.\n* arriver à faire quelque chose",
          definition:
            '* parvenir à destination\n* venir, approcher\n* réussir\n* se produire',
          translation: 'aankomen, eraan komen, slagen, gebeuren',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'vraag',
      sourceLanguage: 'fr',
      targetLanguage: 'nl',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'question',
          ipa: 'kɛstjɔ̃',
          example: '* poser une question à quelqu’un\n* une question délicate',
          definition: "* ce que l'on demande\n* sujet qui pose un problème",
          translation: 'vraag, vraagstuk, kwestie',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'fr',
          source: 'demande',
          ipa: 'dəmɑ̃d',
          example: "les demandes d'emploi",
          definition: "action de dire à quelqu’un ce que l'on veut",
          translation: 'verzoek',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃tʀətjɛ̃',
          example:
            "* l'entretien de la piscine\n* passer un entretien d'embauche",
          definition:
            '* action de maintenir en bon état\n* conversation qui a un but précis',
          translation: 'onderhoud, gesprek',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  ko: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʀəmaʀkabl',
      example: 'un travail remarquable',
      definition: "d'une grande qualité",
      translation: '주목할 만한',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'ko',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'aʀive',
          example:
            "* Le train arrivera à l'heure.\n* Le printemps arrive.\n* arriver à faire quelque chose",
          definition:
            '* parvenir à destination\n* venir, approcher\n* réussir\n* se produire',
          translation: '도착하다, 다가가다, 성공하다, 발생하다',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: '질문',
      sourceLanguage: 'fr',
      targetLanguage: 'ko',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'question',
          ipa: 'kɛstjɔ̃',
          example: '* poser une question à quelqu’un\n* une question délicate',
          definition: "* ce que l'on demande\n* sujet qui pose un problème",
          translation: '질문, 문제',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃tʀətjɛ̃',
          example:
            "* l'entretien de la piscine\n* passer un entretien d'embauche",
          definition:
            '* action de maintenir en bon état\n* conversation qui a un but précis',
          translation: '유지 관리, 대화, 유지보수',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  hi: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʀəmaʀkabl',
      example: 'un travail remarquable',
      definition: "d'une grande qualité",
      translation: 'उत्कृष्ट, उल्लेखनीय',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'hi',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'aʀive',
          example:
            "* Le train arrivera à l'heure.\n* Le printemps arrive.\n* arriver à faire quelque chose",
          definition:
            '* parvenir à destination\n* venir, approcher\n* réussir\n* se produire',
          translation: 'पहुंचना, आना, सफल होना, घटना',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'सवाल',
      sourceLanguage: 'fr',
      targetLanguage: 'hi',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'question',
          ipa: 'kɛstjɔ̃',
          example: '* poser une question à quelqu’un\n* une question délicate',
          definition: "* ce que l'on demande\n* sujet qui pose un problème",
          translation: 'प्रश्न, सवाल',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃tʀətjɛ̃',
          example:
            "* l'entretien de la piscine\n* passer un entretien d'embauche",
          definition:
            '* action de maintenir en bon état\n* conversation qui a un but précis',
          translation: 'रखरखाव, साक्षात्कार',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  tr: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʀəmaʀkabl',
      example: 'un travail remarquable',
      definition: "d'une grande qualité",
      translation: 'olağanüstü, dikkate değer',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'tr',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'aʀive',
          example:
            "* Le train arrivera à l'heure.\n* Le printemps arrive.\n* arriver à faire quelque chose",
          definition:
            '* parvenir à destination\n* venir, approcher\n* réussir\n* se produire',
          translation: 'varmak, gelmek, başarmak, olmak',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'soru',
      sourceLanguage: 'fr',
      targetLanguage: 'tr',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'question',
          ipa: 'kɛstjɔ̃',
          example: '* poser une question à quelqu’un\n* une question délicate',
          definition: "* ce que l'on demande\n* sujet qui pose un problème",
          translation: 'soru',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃tʀətjɛ̃',
          example:
            "* l'entretien de la piscine\n* passer un entretien d'embauche",
          definition:
            '* action de maintenir en bon état\n* conversation qui a un but précis',
          translation: 'bakım, görüşme',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  sv: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʀəmaʀkabl',
      example: 'un travail remarquable',
      definition: "d'une grande qualité",
      translation: 'utomordentlig, anmärkningsvärd',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'sv',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'aʀive',
          example:
            "* Le train arrivera à l'heure.\n* Le printemps arrive.\n* arriver à faire quelque chose",
          definition:
            '* parvenir à destination\n* venir, approcher\n* réussir\n* se produire',
          translation: 'komma, ankomma, anlända, lyckas, klara av, hända',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'fråga',
      sourceLanguage: 'fr',
      targetLanguage: 'sv',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'question',
          ipa: 'kɛstjɔ̃',
          example: '* poser une question à quelqu’un\n* une question délicate',
          definition: "* ce que l'on demande\n* sujet qui pose un problème",
          translation: 'fråga, problem',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'fr',
          source: 'demande',
          ipa: 'dəmɑ̃d',
          example: "les demandes d'emploi",
          definition: "action de dire à quelqu’un ce que l'on veut",
          translation: 'begäran, förfrågan, ansökan',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃tʀətjɛ̃',
          example:
            "* l'entretien de la piscine\n* passer un entretien d'embauche",
          definition:
            '* action de maintenir en bon état\n* conversation qui a un but précis',
          translation: 'underhåll, skötsel, samtal',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  no: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʀəmaʀkabl',
      example: 'un travail remarquable',
      definition: "d'une grande qualité",
      translation: 'fremragende, mesterlig, bemerkelsesverdig',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'no',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'aʀive',
          example:
            "* Le train arrivera à l'heure.\n* Le printemps arrive.\n* arriver à faire quelque chose",
          definition:
            '* parvenir à destination\n* venir, approcher\n* réussir\n* se produire',
          translation: 'å komme fram, å ankomme, å komme, å klare, å hende',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'spørsmål',
      sourceLanguage: 'fr',
      targetLanguage: 'no',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'question',
          ipa: 'kɛstjɔ̃',
          example: '* poser une question à quelqu’un\n* une question délicate',
          definition: "* ce que l'on demande\n* sujet qui pose un problème",
          translation: 'spørsmål',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃tʀətjɛ̃',
          example:
            "* l'entretien de la piscine\n* passer un entretien d'embauche",
          definition:
            '* action de maintenir en bon état\n* conversation qui a un but précis',
          translation: 'vedlikehold, intervju',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  da: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʀəmaʀkabl',
      example: 'un travail remarquable',
      definition: "d'une grande qualité",
      translation: 'bemærkelsesværdig',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'da',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'aʀive',
          example:
            "* Le train arrivera à l'heure.\n* Le printemps arrive.\n* arriver à faire quelque chose",
          definition:
            '* parvenir à destination\n* venir, approcher\n* réussir\n* se produire',
          translation: 'ankomme, nærme sig, lykkes, ske',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'spørgsmål',
      sourceLanguage: 'fr',
      targetLanguage: 'da',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'question',
          ipa: 'kɛstjɔ̃',
          example: '* poser une question à quelqu’un\n* une question délicate',
          definition: "* ce que l'on demande\n* sujet qui pose un problème",
          translation: 'spørgsmål, problemstilling',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃tʀətjɛ̃',
          example:
            "* l'entretien de la piscine\n* passer un entretien d'embauche",
          definition:
            '* action de maintenir en bon état\n* conversation qui a un but précis',
          translation: 'vedligeholdelse, samtale',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  fi: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʀəmaʀkabl',
      example: 'un travail remarquable',
      definition: "d'une grande qualité",
      translation: 'huomattava',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'fi',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'aʀive',
          example:
            "* Le train arrivera à l'heure.\n* Le printemps arrive.\n* arriver à faire quelque chose",
          definition:
            '* parvenir à destination\n* venir, approcher\n* réussir\n* se produire',
          translation: 'saapua, lähestyä, onnistua, tapahtua',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'kysymys',
      sourceLanguage: 'fr',
      targetLanguage: 'fi',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'question',
          ipa: 'kɛstjɔ̃',
          example: '* poser une question à quelqu’un\n* une question délicate',
          definition: "* ce que l'on demande\n* sujet qui pose un problème",
          translation: 'kysymys, ongelma',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃tʀətjɛ̃',
          example:
            "* l'entretien de la piscine\n* passer un entretien d'embauche",
          definition:
            '* action de maintenir en bon état\n* conversation qui a un but précis',
          translation: 'huolto, keskustelu',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  fa: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʀəmaʀkabl',
      example: 'un travail remarquable',
      definition: "d'une grande qualité",
      translation: 'قابل توجه',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'fa',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'aʀive',
          example:
            "* Le train arrivera à l'heure.\n* Le printemps arrive.\n* arriver à faire quelque chose",
          definition:
            '* parvenir à destination\n* venir, approcher\n* réussir\n* se produire',
          translation: 'موفق شدن، نزدیک شدن، رسیدن, رخ دادن',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'سوال',
      sourceLanguage: 'fr',
      targetLanguage: 'fa',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'question',
          ipa: 'kɛstjɔ̃',
          example: '* poser une question à quelqu’un\n* une question délicate',
          definition: "* ce que l'on demande\n* sujet qui pose un problème",
          translation: 'پرسش، سوال',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃tʀətjɛ̃',
          example:
            "* l'entretien de la piscine\n* passer un entretien d'embauche",
          definition:
            '* action de maintenir en bon état\n* conversation qui a un but précis',
          translation: 'گفتگو، نگهداری',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  pl: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʀəmaʀkabl',
      example: 'un travail remarquable',
      definition: "d'une grande qualité",
      translation: 'zdumiewający, wyjątkowy',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'pl',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'aʀive',
          example:
            "* Le train arrivera à l'heure.\n* Le printemps arrive.\n* arriver à faire quelque chose",
          definition:
            '* parvenir à destination\n* venir, approcher\n* réussir\n* se produire',
          translation:
            'przyjeżdżać, przyjechać, nadchodzić, zdołać, zdarzyć się, mieć miejsce, przybyć',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'pytanie',
      sourceLanguage: 'fr',
      targetLanguage: 'pl',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'question',
          ipa: 'kɛstjɔ̃',
          example: '* poser une question à quelqu’un\n* une question délicate',
          definition: "* ce que l'on demande\n* sujet qui pose un problème",
          translation: 'pytanie, kwestia',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃tʀətjɛ̃',
          example:
            "* l'entretien de la piscine\n* passer un entretien d'embauche",
          definition:
            '* action de maintenir en bon état\n* conversation qui a un but précis',
          translation: 'utrzymanie, rozmowa, konserwacja',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  el: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʀəmaʀkabl',
      example: 'un travail remarquable',
      definition: "d'une grande qualité",
      translation: 'εκπληκτικός, εξαιρετικός',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'el',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'aʀive',
          example:
            "* Le train arrivera à l'heure.\n* Le printemps arrive.\n* arriver à faire quelque chose",
          definition:
            '* parvenir à destination\n* venir, approcher\n* réussir\n* se produire',
          translation: 'φτάνω, έρχομαι, πλησιάζω, καταφέρνω, συμβαίνω, συμβαίν',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'ερώτηση',
      sourceLanguage: 'fr',
      targetLanguage: 'el',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'question',
          ipa: 'kɛstjɔ̃',
          example: '* poser une question à quelqu’un\n* une question délicate',
          definition: "* ce que l'on demande\n* sujet qui pose un problème",
          translation: 'ερώτηση, ζήτημα, θέμα',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃tʀətjɛ̃',
          example:
            "* l'entretien de la piscine\n* passer un entretien d'embauche",
          definition:
            '* action de maintenir en bon état\n* conversation qui a un but précis',
          translation: 'συντήρηση, συνέντευξη',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  he: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʀəmaʀkabl',
      example: 'un travail remarquable',
      definition: "d'une grande qualité",
      translation: 'מצוין, מצוינת, מרשים, מרשימה, מְרַשֵּׁם',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'he',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'aʀive',
          example:
            "* Le train arrivera à l'heure.\n* Le printemps arrive.\n* arriver à faire quelque chose",
          definition:
            '* parvenir à destination\n* venir, approcher\n* réussir\n* se produire',
          translation: 'להגיע, להתקרב, להצליח, להתרחש, לקרות, לְהַגִּיעַ',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'שְׁאֵלָה',
      sourceLanguage: 'fr',
      targetLanguage: 'he',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'question',
          ipa: 'kɛstjɔ̃',
          example: '* poser une question à quelqu’un\n* une question délicate',
          definition: "* ce que l'on demande\n* sujet qui pose un problème",
          translation: 'שאלה, סוגיה, שָׁאֵלָה',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'fr',
          source: 'demande',
          ipa: 'dəmɑ̃d',
          example: "les demandes d'emploi",
          definition: "action de dire à quelqu’un ce que l'on veut",
          translation: 'בקשה, בַּקָּשָׁה',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃tʀətjɛ̃',
          example:
            "* l'entretien de la piscine\n* passer un entretien d'embauche",
          definition:
            '* action de maintenir en bon état\n* conversation qui a un but précis',
          translation: 'תחזוקה, טיפוח, ראיון',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  th: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʀəmaʀkabl',
      example: 'un travail remarquable',
      definition: "d'une grande qualité",
      translation: 'โดดเด่น',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'th',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'aʀive',
          example:
            "* Le train arrivera à l'heure.\n* Le printemps arrive.\n* arriver à faire quelque chose",
          definition:
            '* parvenir à destination\n* venir, approcher\n* réussir\n* se produire',
          translation: 'มาถึง, เข้ามา, ประสบความสำเร็จ, เกิดขึ้น',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'คำถาม',
      sourceLanguage: 'fr',
      targetLanguage: 'th',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'question',
          ipa: 'kɛstjɔ̃',
          example: '* poser une question à quelqu’un\n* une question délicate',
          definition: "* ce que l'on demande\n* sujet qui pose un problème",
          translation: 'คำถาม, ประเด็น',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃tʀətjɛ̃',
          example:
            "* l'entretien de la piscine\n* passer un entretien d'embauche",
          definition:
            '* action de maintenir en bon état\n* conversation qui a un but précis',
          translation: 'การบำรุงรักษา, การสนทนา',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  vi: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʀəmaʀkabl',
      example: 'un travail remarquable',
      definition: "d'une grande qualité",
      translation: 'nổi bật, đáng chú ý',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'vi',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'aʀive',
          example:
            "* Le train arrivera à l'heure.\n* Le printemps arrive.\n* arriver à faire quelque chose",
          definition:
            '* parvenir à destination\n* venir, approcher\n* réussir\n* se produire',
          translation: 'đến, đến gần, thành công, xảy ra',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'câu hỏi',
      sourceLanguage: 'fr',
      targetLanguage: 'vi',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'question',
          ipa: 'kɛstjɔ̃',
          example: '* poser une question à quelqu’un\n* une question délicate',
          definition: "* ce que l'on demande\n* sujet qui pose un problème",
          translation: 'câu hỏi, vấn đề',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃tʀətjɛ̃',
          example:
            "* l'entretien de la piscine\n* passer un entretien d'embauche",
          definition:
            '* action de maintenir en bon état\n* conversation qui a un but précis',
          translation: 'bảo trì, cuộc trò chuyện',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  id: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʀəmaʀkabl',
      example: 'un travail remarquable',
      definition: "d'une grande qualité",
      translation: 'hebat, luar biasa, menonjol',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'id',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'aʀive',
          example:
            "* Le train arrivera à l'heure.\n* Le printemps arrive.\n* arriver à faire quelque chose",
          definition:
            '* parvenir à destination\n* venir, approcher\n* réussir\n* se produire',
          translation: 'tiba, datang, berhasil, terjadi',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'pertanyaan',
      sourceLanguage: 'fr',
      targetLanguage: 'id',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'question',
          ipa: 'kɛstjɔ̃',
          example: '* poser une question à quelqu’un\n* une question délicate',
          definition: "* ce que l'on demande\n* sujet qui pose un problème",
          translation: 'pertanyaan, masalah',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃tʀətjɛ̃',
          example:
            "* l'entretien de la piscine\n* passer un entretien d'embauche",
          definition:
            '* action de maintenir en bon état\n* conversation qui a un but précis',
          translation: 'perawatan, wawancara',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  ms: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʀəmaʀkabl',
      example: 'un travail remarquable',
      definition: "d'une grande qualité",
      translation: 'cemerlang, menarik',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'ms',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'aʀive',
          example:
            "* Le train arrivera à l'heure.\n* Le printemps arrive.\n* arriver à faire quelque chose",
          definition:
            '* parvenir à destination\n* venir, approcher\n* réussir\n* se produire',
          translation: 'tiba, datang, berjaya, berlaku',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'soalan',
      sourceLanguage: 'fr',
      targetLanguage: 'ms',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'question',
          ipa: 'kɛstjɔ̃',
          example: '* poser une question à quelqu’un\n* une question délicate',
          definition: "* ce que l'on demande\n* sujet qui pose un problème",
          translation: 'soalan, pertanyaan',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃tʀətjɛ̃',
          example:
            "* l'entretien de la piscine\n* passer un entretien d'embauche",
          definition:
            '* action de maintenir en bon état\n* conversation qui a un but précis',
          translation: 'penyelenggaraan, perbualan',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
  uk: {
    welcomeScreenCard: {
      language: 'fr',
      source: 'remarquable',
      ipa: 'ʀəmaʀkabl',
      example: 'un travail remarquable',
      definition: "d'une grande qualité",
      translation: 'видатний, помітний',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'arriver',
      sourceLanguage: 'fr',
      targetLanguage: 'uk',
      isReversed: false,
      results: [
        {
          language: 'fr',
          source: 'arriver',
          ipa: 'aʀive',
          example:
            "* Le train arrivera à l'heure.\n* Le printemps arrive.\n* arriver à faire quelque chose",
          definition:
            '* parvenir à destination\n* venir, approcher\n* réussir\n* se produire',
          translation: 'прибути, підходити, досягти, відбуватися, приходити',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'запитання',
      sourceLanguage: 'fr',
      targetLanguage: 'uk',
      isReversed: true,
      results: [
        {
          language: 'fr',
          source: 'question',
          ipa: 'kɛstjɔ̃',
          example: '* poser une question à quelqu’un\n* une question délicate',
          definition: "* ce que l'on demande\n* sujet qui pose un problème",
          translation: 'питання, тема, що викликає проблему',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
      results: [
        {
          language: 'fr',
          source: 'entretien',
          ipa: 'ɑ̃tʀətjɛ̃',
          example:
            "* l'entretien de la piscine\n* passer un entretien d'embauche",
          definition:
            '* action de maintenir en bon état\n* conversation qui a un but précis',
          translation: 'обслуговування, розмова',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
  },
};
