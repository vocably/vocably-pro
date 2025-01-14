import { MobileOnboardingDataCollection } from '@vocably/model';

export const onboardingCollection: MobileOnboardingDataCollection = {
  en: {
    welcomeScreenCard: {
      language: 'tr',
      source: 'olağanüstü',
      ipa: "oɫa'anysty",
      example: '* olağanüstü bir zafer\n* olağanüstü bir manzara',
      definition:
        '* alışılmıştan, benzerlerinden farklı olan\n* büyük bir hayranlığa yol açan',
      translation: 'extraordinary, exceptional',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'varış',
      sourceLanguage: 'tr',
      targetLanguage: 'en',
      isReversed: false,
      results: [
        {
          language: 'tr',
          source: 'varış',
          ipa: "va'ɾɯʃ",
          example: '* Köye varışı çok sürmedi.\n* varışa ulaşan ilk yarışmacı',
          definition:
            '* varma durumu veya biçimi\n* bir yarışın son bulduğu yer',
          translation: 'arrival, finish line',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'varis',
          ipa: "va'ɾis",
          example: 'varis ameliyatı',
          definition: 'bacaklarda görülen toplardamar genişlemesi',
          translation: 'varicose vein',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'question',
      sourceLanguage: 'tr',
      targetLanguage: 'en',
      isReversed: true,
      results: [
        {
          language: 'tr',
          source: 'soru',
          ipa: "so'ɾu",
          example: '* sorunun cevabı\n* soru kâğıdı',
          definition:
            '* bir şey öğrenmek için birine yöneltilen söz veya yazı\n* bir öğrenciye sınavda yöneltilen söz veya yazı',
          translation: 'question, inquiry',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'sorun',
          ipa: "so'ɾun",
          example: '* sorun çözmek\n* sorundan kurtulmak',
          definition: '* mesele, problem\n* sıkıntı veren durum',
          translation: 'issue, problem',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'En sık atlanan *bakım* görevleri toza karşı savaşınızı içerir. Eviniz, toz ve diğer şeyleri yakalayan filtreler ve havalandırmalarla doludur, bu da sistemlerinizin ömrünü uzatır ve havayı temiz tutar. Yılda en az bir kez aşağıdakileri temizlemeli ve değiştirmelisiniz:',
      results: [
        {
          language: 'tr',
          source: 'bakım',
          ipa: "ba'kɯm",
          example: '* arabanın bakımı\n* yaşlıların bakımı',
          definition:
            '* bir şeyi iyi işlemesi için elden geçirme\n* birinin veya bir şeyin gelişmesini veya iyi bir durumda kalmasını sağlama işi',
          translation: 'maintenance, care',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'bakla',
          ipa: "bak'ɫa",
          example: '* bakla üretimi\n* bakla yemeği',
          definition:
            '* yeşil kabuklu ve iri taneli besleyici bir bitki\n* bu bitkinin yaş veya kuru tanesi',
          translation: 'broad bean, bean',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
  },
  es: {
    welcomeScreenCard: {
      language: 'tr',
      source: 'olağanüstü',
      ipa: "oɫa'anysty",
      example: '* olağanüstü bir zafer\n* olağanüstü bir manzara',
      definition:
        '* alışılmıştan, benzerlerinden farklı olan\n* büyük bir hayranlığa yol açan',
      translation: 'extraordinario, increíble',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'varış',
      sourceLanguage: 'tr',
      targetLanguage: 'es',
      isReversed: false,
      results: [
        {
          language: 'tr',
          source: 'varış',
          ipa: "va'ɾɯʃ",
          example: '* Köye varışı çok sürmedi.\n* varışa ulaşan ilk yarışmacı',
          definition:
            '* varma durumu veya biçimi\n* bir yarışın son bulduğu yer',
          translation: 'llegada, fin de la carrera',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'varis',
          ipa: "va'ɾis",
          example: 'varis ameliyatı',
          definition: 'bacaklarda görülen toplardamar genişlemesi',
          translation: 'varices',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'pregunta',
      sourceLanguage: 'tr',
      targetLanguage: 'es',
      isReversed: true,
      results: [
        {
          language: 'tr',
          source: 'soru',
          ipa: "so'ɾu",
          example: '* sorunun cevabı\n* soru kâğıdı',
          definition:
            '* bir şey öğrenmek için birine yöneltilen söz veya yazı\n* bir öğrenciye sınavda yöneltilen söz veya yazı',
          translation: 'pregunta, interrogante',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'En sık atlanan *bakım* görevleri toza karşı savaşınızı içerir. Eviniz, toz ve diğer şeyleri yakalayan filtreler ve havalandırmalarla doludur, bu da sistemlerinizin ömrünü uzatır ve havayı temiz tutar. Yılda en az bir kez aşağıdakileri temizlemeli ve değiştirmelisiniz:',
      results: [
        {
          language: 'tr',
          source: 'bakım',
          ipa: "ba'kɯm",
          example: '* arabanın bakımı\n* yaşlıların bakımı',
          definition:
            '* bir şeyi iyi işlemesi için elden geçirme\n* birinin veya bir şeyin gelişmesini veya iyi bir durumda kalmasını sağlama işi',
          translation: 'cuidado, mantenimiento',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'bakla',
          ipa: "bak'ɫa",
          example: '* bakla üretimi\n* bakla yemeği',
          definition:
            '* yeşil kabuklu ve iri taneli besleyici bir bitki\n* bu bitkinin yaş veya kuru tanesi',
          translation: 'haba, frijol',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
  },
  fr: {
    welcomeScreenCard: {
      language: 'tr',
      source: 'olağanüstü',
      ipa: "oɫa'anysty",
      example: '* olağanüstü bir zafer\n* olağanüstü bir manzara',
      definition:
        '* alışılmıştan, benzerlerinden farklı olan\n* büyük bir hayranlığa yol açan',
      translation: 'extraordinaire',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'varış',
      sourceLanguage: 'tr',
      targetLanguage: 'fr',
      isReversed: false,
      results: [
        {
          language: 'tr',
          source: 'varış',
          ipa: "va'ɾɯʃ",
          example: '* Köye varışı çok sürmedi.\n* varışa ulaşan ilk yarışmacı',
          definition:
            '* varma durumu veya biçimi\n* bir yarışın son bulduğu yer',
          translation: 'arrivée',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'varis',
          ipa: "va'ɾis",
          example: 'varis ameliyatı',
          definition: 'bacaklarda görülen toplardamar genişlemesi',
          translation: 'varice',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'question',
      sourceLanguage: 'tr',
      targetLanguage: 'fr',
      isReversed: true,
      results: [
        {
          language: 'tr',
          source: 'soru',
          ipa: "so'ɾu",
          example: '* sorunun cevabı\n* soru kâğıdı',
          definition:
            '* bir şey öğrenmek için birine yöneltilen söz veya yazı\n* bir öğrenciye sınavda yöneltilen söz veya yazı',
          translation: 'question',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'sorun',
          ipa: "so'ɾun",
          example: '* sorun çözmek\n* sorundan kurtulmak',
          definition: '* mesele, problem\n* sıkıntı veren durum',
          translation: 'problème, question',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'En sık atlanan *bakım* görevleri toza karşı savaşınızı içerir. Eviniz, toz ve diğer şeyleri yakalayan filtreler ve havalandırmalarla doludur, bu da sistemlerinizin ömrünü uzatır ve havayı temiz tutar. Yılda en az bir kez aşağıdakileri temizlemeli ve değiştirmelisiniz:',
      results: [
        {
          language: 'tr',
          source: 'bakım',
          ipa: "ba'kɯm",
          example: '* arabanın bakımı\n* yaşlıların bakımı',
          definition:
            '* bir şeyi iyi işlemesi için elden geçirme\n* birinin veya bir şeyin gelişmesini veya iyi bir durumda kalmasını sağlama işi',
          translation: 'entretien, soin',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'bakla',
          ipa: "bak'ɫa",
          example: '* bakla üretimi\n* bakla yemeği',
          definition:
            '* yeşil kabuklu ve iri taneli besleyici bir bitki\n* bu bitkinin yaş veya kuru tanesi',
          translation: 'fève',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
  },
  de: {
    welcomeScreenCard: {
      language: 'tr',
      source: 'olağanüstü',
      ipa: "oɫa'anysty",
      example: '* olağanüstü bir zafer\n* olağanüstü bir manzara',
      definition:
        '* alışılmıştan, benzerlerinden farklı olan\n* büyük bir hayranlığa yol açan',
      translation:
        'außergewöhnlich, außerordentlich, unglaublich, großartig, faszinierend',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'varış',
      sourceLanguage: 'tr',
      targetLanguage: 'de',
      isReversed: false,
      results: [
        {
          language: 'tr',
          source: 'varış',
          ipa: "va'ɾɯʃ",
          example: '* Köye varışı çok sürmedi.\n* varışa ulaşan ilk yarışmacı',
          definition:
            '* varma durumu veya biçimi\n* bir yarışın son bulduğu yer',
          translation: 'Ankunft, Eintreffen, Ziel',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'varis',
          ipa: "va'ɾis",
          example: 'varis ameliyatı',
          definition: 'bacaklarda görülen toplardamar genişlemesi',
          translation: 'Varix, Varize, Krampfader',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'frage',
      sourceLanguage: 'tr',
      targetLanguage: 'de',
      isReversed: true,
      results: [
        {
          language: 'tr',
          source: 'soru',
          ipa: "so'ɾu",
          example: '* sorunun cevabı\n* soru kâğıdı',
          definition:
            '* bir şey öğrenmek için birine yöneltilen söz veya yazı\n* bir öğrenciye sınavda yöneltilen söz veya yazı',
          translation: 'Frage, Nachfrage, Erkundigung',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'soru sorma',
          ipa: '',
          example: '',
          definition: '',
          translation: 'Fragen stellen',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'En sık atlanan *bakım* görevleri toza karşı savaşınızı içerir. Eviniz, toz ve diğer şeyleri yakalayan filtreler ve havalandırmalarla doludur, bu da sistemlerinizin ömrünü uzatır ve havayı temiz tutar. Yılda en az bir kez aşağıdakileri temizlemeli ve değiştirmelisiniz:',
      results: [
        {
          language: 'tr',
          source: 'bakım',
          ipa: "ba'kɯm",
          example: '* arabanın bakımı\n* yaşlıların bakımı',
          definition:
            '* bir şeyi iyi işlemesi için elden geçirme\n* birinin veya bir şeyin gelişmesini veya iyi bir durumda kalmasını sağlama işi',
          translation: 'Pflege, Wartung, Instandhaltung, Betreuung',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'bakla',
          ipa: "bak'ɫa",
          example: '* bakla üretimi\n* bakla yemeği',
          definition:
            '* yeşil kabuklu ve iri taneli besleyici bir bitki\n* bu bitkinin yaş veya kuru tanesi',
          translation: 'Pferdebohne, Pferdebohnensame',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
  },
  zh: {
    welcomeScreenCard: {
      language: 'tr',
      source: 'olağanüstü',
      ipa: "oɫa'anysty",
      example: '* olağanüstü bir zafer\n* olağanüstü bir manzara',
      definition:
        '* alışılmıştan, benzerlerinden farklı olan\n* büyük bir hayranlığa yol açan',
      translation: '非凡, 惊人',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'varış',
      sourceLanguage: 'tr',
      targetLanguage: 'zh',
      isReversed: false,
      results: [
        {
          language: 'tr',
          source: 'varış',
          ipa: "va'ɾɯʃ",
          example: '* Köye varışı çok sürmedi.\n* varışa ulaşan ilk yarışmacı',
          definition:
            '* varma durumu veya biçimi\n* bir yarışın son bulduğu yer',
          translation: '到达, 抵达',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'varis',
          ipa: "va'ɾis",
          example: 'varis ameliyatı',
          definition: 'bacaklarda görülen toplardamar genişlemesi',
          translation: '静脉曲张',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: '问题',
      sourceLanguage: 'tr',
      targetLanguage: 'zh',
      isReversed: true,
      results: [
        {
          language: 'tr',
          source: 'soru',
          ipa: "so'ɾu",
          example: '* sorunun cevabı\n* soru kâğıdı',
          definition:
            '* bir şey öğrenmek için birine yöneltilen söz veya yazı\n* bir öğrenciye sınavda yöneltilen söz veya yazı',
          translation: '问题, 提问',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'problem',
          ipa: "pɾob'lem",
          example: '* problem çözmek\n* problemin sebepleri',
          definition:
            '* teoremler veya kurallar yardımıyla çözülmesi istenen soru\n* mesele, sorun',
          translation: '问题, 难题',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'En sık atlanan *bakım* görevleri toza karşı savaşınızı içerir. Eviniz, toz ve diğer şeyleri yakalayan filtreler ve havalandırmalarla doludur, bu da sistemlerinizin ömrünü uzatır ve havayı temiz tutar. Yılda en az bir kez aşağıdakileri temizlemeli ve değiştirmelisiniz:',
      results: [
        {
          language: 'tr',
          source: 'bakım',
          ipa: "ba'kɯm",
          example: '* arabanın bakımı\n* yaşlıların bakımı',
          definition:
            '* bir şeyi iyi işlemesi için elden geçirme\n* birinin veya bir şeyin gelişmesini veya iyi bir durumda kalmasını sağlama işi',
          translation: '照顾, 护理, 维护',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'bakla',
          ipa: "bak'ɫa",
          example: '* bakla üretimi\n* bakla yemeği',
          definition:
            '* yeşil kabuklu ve iri taneli besleyici bir bitki\n* bu bitkinin yaş veya kuru tanesi',
          translation: '豌豆, 豆子',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
  },
  'zh-TW': {
    welcomeScreenCard: {
      language: 'tr',
      source: 'olağanüstü',
      ipa: "oɫa'anysty",
      example: '* olağanüstü bir zafer\n* olağanüstü bir manzara',
      definition:
        '* alışılmıştan, benzerlerinden farklı olan\n* büyük bir hayranlığa yol açan',
      translation: '非凡, 卓越',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'varış',
      sourceLanguage: 'tr',
      targetLanguage: 'zh-TW',
      isReversed: false,
      results: [
        {
          language: 'tr',
          source: 'varış',
          ipa: "va'ɾɯʃ",
          example: '* Köye varışı çok sürmedi.\n* varışa ulaşan ilk yarışmacı',
          definition:
            '* varma durumu veya biçimi\n* bir yarışın son bulduğu yer',
          translation: '到達, 終點',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'varis',
          ipa: "va'ɾis",
          example: 'varis ameliyatı',
          definition: 'bacaklarda görülen toplardamar genişlemesi',
          translation: '靜脈曲張',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: '問題',
      sourceLanguage: 'tr',
      targetLanguage: 'zh-TW',
      isReversed: true,
      results: [
        {
          language: 'tr',
          source: 'sorun',
          ipa: "so'ɾun",
          example: '* sorun çözmek\n* sorundan kurtulmak',
          definition: '* mesele, problem\n* sıkıntı veren durum',
          translation: '問題, 困難',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'problem',
          ipa: "pɾob'lem",
          example: '* problem çözmek\n* problemin sebepleri',
          definition:
            '* teoremler veya kurallar yardımıyla çözülmesi istenen soru\n* mesele, sorun',
          translation: '問題, 困難',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'En sık atlanan *bakım* görevleri toza karşı savaşınızı içerir. Eviniz, toz ve diğer şeyleri yakalayan filtreler ve havalandırmalarla doludur, bu da sistemlerinizin ömrünü uzatır ve havayı temiz tutar. Yılda en az bir kez aşağıdakileri temizlemeli ve değiştirmelisiniz:',
      results: [
        {
          language: 'tr',
          source: 'bakım',
          ipa: "ba'kɯm",
          example: '* arabanın bakımı\n* yaşlıların bakımı',
          definition:
            '* bir şeyi iyi işlemesi için elden geçirme\n* birinin veya bir şeyin gelişmesini veya iyi bir durumda kalmasını sağlama işi',
          translation: '照顧, 維護',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'bakla',
          ipa: "bak'ɫa",
          example: '* bakla üretimi\n* bakla yemeği',
          definition:
            '* yeşil kabuklu ve iri taneli besleyici bir bitki\n* bu bitkinin yaş veya kuru tanesi',
          translation: '豌豆, 豆子',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
  },
  ja: {
    welcomeScreenCard: {
      language: 'tr',
      source: 'olağanüstü',
      ipa: "oɫa'anysty",
      example: '* olağanüstü bir zafer\n* olağanüstü bir manzara',
      definition:
        '* alışılmıştan, benzerlerinden farklı olan\n* büyük bir hayranlığa yol açan',
      translation: '異常な, 素晴らしい, 驚異的な',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'varış',
      sourceLanguage: 'tr',
      targetLanguage: 'ja',
      isReversed: false,
      results: [
        {
          language: 'tr',
          source: 'varış',
          ipa: "va'ɾɯʃ",
          example: '* Köye varışı çok sürmedi.\n* varışa ulaşan ilk yarışmacı',
          definition:
            '* varma durumu veya biçimi\n* bir yarışın son bulduğu yer',
          translation: '到着, ゴール',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'varis',
          ipa: "va'ɾis",
          example: 'varis ameliyatı',
          definition: 'bacaklarda görülen toplardamar genişlemesi',
          translation: '静脈瘤',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: '質問',
      sourceLanguage: 'tr',
      targetLanguage: 'ja',
      isReversed: true,
      results: [
        {
          language: 'tr',
          source: 'soru',
          ipa: "so'ɾu",
          example: '* sorunun cevabı\n* soru kâğıdı',
          definition:
            '* bir şey öğrenmek için birine yöneltilen söz veya yazı\n* bir öğrenciye sınavda yöneltilen söz veya yazı',
          translation: '質問, 問題',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'soru sorma',
          ipa: '',
          example: '',
          definition: '',
          translation: '質問する',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'En sık atlanan *bakım* görevleri toza karşı savaşınızı içerir. Eviniz, toz ve diğer şeyleri yakalayan filtreler ve havalandırmalarla doludur, bu da sistemlerinizin ömrünü uzatır ve havayı temiz tutar. Yılda en az bir kez aşağıdakileri temizlemeli ve değiştirmelisiniz:',
      results: [
        {
          language: 'tr',
          source: 'bakım',
          ipa: "ba'kɯm",
          example: '* arabanın bakımı\n* yaşlıların bakımı',
          definition:
            '* bir şeyi iyi işlemesi için elden geçirme\n* birinin veya bir şeyin gelişmesini veya iyi bir durumda kalmasını sağlama işi',
          translation: 'ケア, メンテナンス',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'bakla',
          ipa: "bak'ɫa",
          example: '* bakla üretimi\n* bakla yemeği',
          definition:
            '* yeşil kabuklu ve iri taneli besleyici bir bitki\n* bu bitkinin yaş veya kuru tanesi',
          translation: 'そらまめ, 豆',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
  },
  ru: {
    welcomeScreenCard: {
      language: 'tr',
      source: 'olağanüstü',
      ipa: "oɫa'anysty",
      example: '* olağanüstü bir zafer\n* olağanüstü bir manzara',
      definition:
        '* alışılmıştan, benzerlerinden farklı olan\n* büyük bir hayranlığa yol açan',
      translation: 'необычный, удивительный, необыкновенный',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'varış',
      sourceLanguage: 'tr',
      targetLanguage: 'ru',
      isReversed: false,
      results: [
        {
          language: 'tr',
          source: 'varış',
          ipa: "va'ɾɯʃ",
          example: '* Köye varışı çok sürmedi.\n* varışa ulaşan ilk yarışmacı',
          definition:
            '* varma durumu veya biçimi\n* bir yarışın son bulduğu yer',
          translation: 'прибытие, место финиша, приход',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'varis',
          ipa: "va'ɾis",
          example: 'varis ameliyatı',
          definition: 'bacaklarda görülen toplardamar genişlemesi',
          translation: 'варикоз',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'вопрос',
      sourceLanguage: 'tr',
      targetLanguage: 'ru',
      isReversed: true,
      results: [
        {
          language: 'tr',
          source: 'soru',
          ipa: "so'ɾu",
          example: '* sorunun cevabı\n* soru kâğıdı',
          definition:
            '* bir şey öğrenmek için birine yöneltilen söz veya yazı\n* bir öğrenciye sınavda yöneltilen söz veya yazı',
          translation: 'вопрос, задание',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'En sık atlanan *bakım* görevleri toza karşı savaşınızı içerir. Eviniz, toz ve diğer şeyleri yakalayan filtreler ve havalandırmalarla doludur, bu da sistemlerinizin ömrünü uzatır ve havayı temiz tutar. Yılda en az bir kez aşağıdakileri temizlemeli ve değiştirmelisiniz:',
      results: [
        {
          language: 'tr',
          source: 'bakım',
          ipa: "ba'kɯm",
          example: '* arabanın bakımı\n* yaşlıların bakımı',
          definition:
            '* bir şeyi iyi işlemesi için elden geçirme\n* birinin veya bir şeyin gelişmesini veya iyi bir durumda kalmasını sağlama işi',
          translation: 'уход, обслуживание',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'bakla',
          ipa: "bak'ɫa",
          example: '* bakla üretimi\n* bakla yemeği',
          definition:
            '* yeşil kabuklu ve iri taneli besleyici bir bitki\n* bu bitkinin yaş veya kuru tanesi',
          translation: 'боб, бобовое зерно',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
  },
  it: {
    welcomeScreenCard: {
      language: 'tr',
      source: 'olağanüstü',
      ipa: "oɫa'anysty",
      example: '* olağanüstü bir zafer\n* olağanüstü bir manzara',
      definition:
        '* alışılmıştan, benzerlerinden farklı olan\n* büyük bir hayranlığa yol açan',
      translation: 'straordinario, eccezionale',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'varış',
      sourceLanguage: 'tr',
      targetLanguage: 'it',
      isReversed: false,
      results: [
        {
          language: 'tr',
          source: 'varış',
          ipa: "va'ɾɯʃ",
          example: '* Köye varışı çok sürmedi.\n* varışa ulaşan ilk yarışmacı',
          definition:
            '* varma durumu veya biçimi\n* bir yarışın son bulduğu yer',
          translation: 'arrivo, meta',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'varis',
          ipa: "va'ɾis",
          example: 'varis ameliyatı',
          definition: 'bacaklarda görülen toplardamar genişlemesi',
          translation: 'varice',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'domanda',
      sourceLanguage: 'tr',
      targetLanguage: 'it',
      isReversed: true,
      results: [
        {
          language: 'tr',
          source: 'soru',
          ipa: "so'ɾu",
          example: '* sorunun cevabı\n* soru kâğıdı',
          definition:
            '* bir şey öğrenmek için birine yöneltilen söz veya yazı\n* bir öğrenciye sınavda yöneltilen söz veya yazı',
          translation: 'domanda, quesito',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'talep',
          ipa: "ta'lep",
          example: 'ürüne olan talep',
          definition:
            'Bir kişinin bir şeyi yapmasıyle veya yapmamasıyla ilgili istek, arzu, dilek',
          translation: 'richiesta, domanda',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'En sık atlanan *bakım* görevleri toza karşı savaşınızı içerir. Eviniz, toz ve diğer şeyleri yakalayan filtreler ve havalandırmalarla doludur, bu da sistemlerinizin ömrünü uzatır ve havayı temiz tutar. Yılda en az bir kez aşağıdakileri temizlemeli ve değiştirmelisiniz:',
      results: [
        {
          language: 'tr',
          source: 'bakım',
          ipa: "ba'kɯm",
          example: '* arabanın bakımı\n* yaşlıların bakımı',
          definition:
            '* bir şeyi iyi işlemesi için elden geçirme\n* birinin veya bir şeyin gelişmesini veya iyi bir durumda kalmasını sağlama işi',
          translation: 'cura, manutenzione',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'bakla',
          ipa: "bak'ɫa",
          example: '* bakla üretimi\n* bakla yemeği',
          definition:
            '* yeşil kabuklu ve iri taneli besleyici bir bitki\n* bu bitkinin yaş veya kuru tanesi',
          translation: 'fava, fagiolo',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
  },
  pt: {
    welcomeScreenCard: {
      language: 'tr',
      source: 'olağanüstü',
      ipa: "oɫa'anysty",
      example: '* olağanüstü bir zafer\n* olağanüstü bir manzara',
      definition:
        '* alışılmıştan, benzerlerinden farklı olan\n* büyük bir hayranlığa yol açan',
      translation: 'extraordinário, excepcional',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'varış',
      sourceLanguage: 'tr',
      targetLanguage: 'pt',
      isReversed: false,
      results: [
        {
          language: 'tr',
          source: 'varış',
          ipa: "va'ɾɯʃ",
          example: '* Köye varışı çok sürmedi.\n* varışa ulaşan ilk yarışmacı',
          definition:
            '* varma durumu veya biçimi\n* bir yarışın son bulduğu yer',
          translation: 'chegada, ponto de chegada',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'varis',
          ipa: "va'ɾis",
          example: 'varis ameliyatı',
          definition: 'bacaklarda görülen toplardamar genişlemesi',
          translation: 'varizes',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'pergunta',
      sourceLanguage: 'tr',
      targetLanguage: 'pt',
      isReversed: true,
      results: [
        {
          language: 'tr',
          source: 'soru',
          ipa: "so'ɾu",
          example: '* sorunun cevabı\n* soru kâğıdı',
          definition:
            '* bir şey öğrenmek için birine yöneltilen söz veya yazı\n* bir öğrenciye sınavda yöneltilen söz veya yazı',
          translation: 'pergunta, questão',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'En sık atlanan *bakım* görevleri toza karşı savaşınızı içerir. Eviniz, toz ve diğer şeyleri yakalayan filtreler ve havalandırmalarla doludur, bu da sistemlerinizin ömrünü uzatır ve havayı temiz tutar. Yılda en az bir kez aşağıdakileri temizlemeli ve değiştirmelisiniz:',
      results: [
        {
          language: 'tr',
          source: 'bakım',
          ipa: "ba'kɯm",
          example: '* arabanın bakımı\n* yaşlıların bakımı',
          definition:
            '* bir şeyi iyi işlemesi için elden geçirme\n* birinin veya bir şeyin gelişmesini veya iyi bir durumda kalmasını sağlama işi',
          translation: 'cuidado, manutenção',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'bakla',
          ipa: "bak'ɫa",
          example: '* bakla üretimi\n* bakla yemeği',
          definition:
            '* yeşil kabuklu ve iri taneli besleyici bir bitki\n* bu bitkinin yaş veya kuru tanesi',
          translation: 'fava, feijão',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
  },
  ar: {
    welcomeScreenCard: {
      language: 'tr',
      source: 'olağanüstü',
      ipa: "oɫa'anysty",
      example: '* olağanüstü bir zafer\n* olağanüstü bir manzara',
      definition:
        '* alışılmıştan, benzerlerinden farklı olan\n* büyük bir hayranlığa yol açan',
      translation: 'استثنائي, غير عادي',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'varış',
      sourceLanguage: 'tr',
      targetLanguage: 'ar',
      isReversed: false,
      results: [
        {
          language: 'tr',
          source: 'varış',
          ipa: "va'ɾɯʃ",
          example: '* Köye varışı çok sürmedi.\n* varışa ulaşan ilk yarışmacı',
          definition:
            '* varma durumu veya biçimi\n* bir yarışın son bulduğu yer',
          translation: 'وصول, نهاية السباق, الوصول',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'varis',
          ipa: "va'ɾis",
          example: 'varis ameliyatı',
          definition: 'bacaklarda görülen toplardamar genişlemesi',
          translation: 'دوالي الساقين',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'سؤال',
      sourceLanguage: 'tr',
      targetLanguage: 'ar',
      isReversed: true,
      results: [
        {
          language: 'tr',
          source: 'soru',
          ipa: "so'ɾu",
          example: '* sorunun cevabı\n* soru kâğıdı',
          definition:
            '* bir şey öğrenmek için birine yöneltilen söz veya yazı\n* bir öğrenciye sınavda yöneltilen söz veya yazı',
          translation: 'سؤال, استفسار',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'En sık atlanan *bakım* görevleri toza karşı savaşınızı içerir. Eviniz, toz ve diğer şeyleri yakalayan filtreler ve havalandırmalarla doludur, bu da sistemlerinizin ömrünü uzatır ve havayı temiz tutar. Yılda en az bir kez aşağıdakileri temizlemeli ve değiştirmelisiniz:',
      results: [
        {
          language: 'tr',
          source: 'bakım',
          ipa: "ba'kɯm",
          example: '* arabanın bakımı\n* yaşlıların bakımı',
          definition:
            '* bir şeyi iyi işlemesi için elden geçirme\n* birinin veya bir şeyin gelişmesini veya iyi bir durumda kalmasını sağlama işi',
          translation: 'رعاية, صيانة',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'bakla',
          ipa: "bak'ɫa",
          example: '* bakla üretimi\n* bakla yemeği',
          definition:
            '* yeşil kabuklu ve iri taneli besleyici bir bitki\n* bu bitkinin yaş veya kuru tanesi',
          translation: 'فول, حبوب الفول',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
  },
  nl: {
    welcomeScreenCard: {
      language: 'tr',
      source: 'olağanüstü',
      ipa: "oɫa'anysty",
      example: '* olağanüstü bir zafer\n* olağanüstü bir manzara',
      definition:
        '* alışılmıştan, benzerlerinden farklı olan\n* büyük bir hayranlığa yol açan',
      translation: 'buitengewoon, uitzonderlijk',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'varış',
      sourceLanguage: 'tr',
      targetLanguage: 'nl',
      isReversed: false,
      results: [
        {
          language: 'tr',
          source: 'varış',
          ipa: "va'ɾɯʃ",
          example: '* Köye varışı çok sürmedi.\n* varışa ulaşan ilk yarışmacı',
          definition:
            '* varma durumu veya biçimi\n* bir yarışın son bulduğu yer',
          translation: 'aankomst, finishplaats',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'varis',
          ipa: "va'ɾis",
          example: 'varis ameliyatı',
          definition: 'bacaklarda görülen toplardamar genişlemesi',
          translation: 'aderverwijding',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'vraag',
      sourceLanguage: 'tr',
      targetLanguage: 'nl',
      isReversed: true,
      results: [
        {
          language: 'tr',
          source: 'soru',
          ipa: "so'ɾu",
          example: '* sorunun cevabı\n* soru kâğıdı',
          definition:
            '* bir şey öğrenmek için birine yöneltilen söz veya yazı\n* bir öğrenciye sınavda yöneltilen söz veya yazı',
          translation: 'vraag, ondervraging',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'talep',
          ipa: "ta'lep",
          example: 'ürüne olan talep',
          definition:
            'Bir kişinin bir şeyi yapmasıyle veya yapmamasıyla ilgili istek, arzu, dilek',
          translation: 'verzoek, vraag',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'En sık atlanan *bakım* görevleri toza karşı savaşınızı içerir. Eviniz, toz ve diğer şeyleri yakalayan filtreler ve havalandırmalarla doludur, bu da sistemlerinizin ömrünü uzatır ve havayı temiz tutar. Yılda en az bir kez aşağıdakileri temizlemeli ve değiştirmelisiniz:',
      results: [
        {
          language: 'tr',
          source: 'bakım',
          ipa: "ba'kɯm",
          example: '* arabanın bakımı\n* yaşlıların bakımı',
          definition:
            '* bir şeyi iyi işlemesi için elden geçirme\n* birinin veya bir şeyin gelişmesini veya iyi bir durumda kalmasını sağlama işi',
          translation: 'onderhoud, zorg',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'bakla',
          ipa: "bak'ɫa",
          example: '* bakla üretimi\n* bakla yemeği',
          definition:
            '* yeşil kabuklu ve iri taneli besleyici bir bitki\n* bu bitkinin yaş veya kuru tanesi',
          translation: 'boon, peul',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
  },
  ko: {
    welcomeScreenCard: {
      language: 'tr',
      source: 'olağanüstü',
      ipa: "oɫa'anysty",
      example: '* olağanüstü bir zafer\n* olağanüstü bir manzara',
      definition:
        '* alışılmıştan, benzerlerinden farklı olan\n* büyük bir hayranlığa yol açan',
      translation: '비범한, 놀라운',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'varış',
      sourceLanguage: 'tr',
      targetLanguage: 'ko',
      isReversed: false,
      results: [
        {
          language: 'tr',
          source: 'varış',
          ipa: "va'ɾɯʃ",
          example: '* Köye varışı çok sürmedi.\n* varışa ulaşan ilk yarışmacı',
          definition:
            '* varma durumu veya biçimi\n* bir yarışın son bulduğu yer',
          translation: '도착, 결승점',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'varis',
          ipa: "va'ɾis",
          example: 'varis ameliyatı',
          definition: 'bacaklarda görülen toplardamar genişlemesi',
          translation: '정맥류',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: '질문',
      sourceLanguage: 'tr',
      targetLanguage: 'ko',
      isReversed: true,
      results: [
        {
          language: 'tr',
          source: 'soru',
          ipa: "so'ɾu",
          example: '* sorunun cevabı\n* soru kâğıdı',
          definition:
            '* bir şey öğrenmek için birine yöneltilen söz veya yazı\n* bir öğrenciye sınavda yöneltilen söz veya yazı',
          translation: '질문, 문제',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'En sık atlanan *bakım* görevleri toza karşı savaşınızı içerir. Eviniz, toz ve diğer şeyleri yakalayan filtreler ve havalandırmalarla doludur, bu da sistemlerinizin ömrünü uzatır ve havayı temiz tutar. Yılda en az bir kez aşağıdakileri temizlemeli ve değiştirmelisiniz:',
      results: [
        {
          language: 'tr',
          source: 'bakım',
          ipa: "ba'kɯm",
          example: '* arabanın bakımı\n* yaşlıların bakımı',
          definition:
            '* bir şeyi iyi işlemesi için elden geçirme\n* birinin veya bir şeyin gelişmesini veya iyi bir durumda kalmasını sağlama işi',
          translation: '관리, 보살핌',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'bakla',
          ipa: "bak'ɫa",
          example: '* bakla üretimi\n* bakla yemeği',
          definition:
            '* yeşil kabuklu ve iri taneli besleyici bir bitki\n* bu bitkinin yaş veya kuru tanesi',
          translation: '콩, 완두콩',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
  },
  hi: {
    welcomeScreenCard: {
      language: 'tr',
      source: 'olağanüstü',
      ipa: "oɫa'anysty",
      example: '* olağanüstü bir zafer\n* olağanüstü bir manzara',
      definition:
        '* alışılmıştan, benzerlerinden farklı olan\n* büyük bir hayranlığa yol açan',
      translation: 'असाधारण, अद्भुत',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'varış',
      sourceLanguage: 'tr',
      targetLanguage: 'hi',
      isReversed: false,
      results: [
        {
          language: 'tr',
          source: 'varış',
          ipa: "va'ɾɯʃ",
          example: '* Köye varışı çok sürmedi.\n* varışa ulaşan ilk yarışmacı',
          definition:
            '* varma durumu veya biçimi\n* bir yarışın son bulduğu yer',
          translation: 'आगमन, समापन स्थान',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'varis',
          ipa: "va'ɾis",
          example: 'varis ameliyatı',
          definition: 'bacaklarda görülen toplardamar genişlemesi',
          translation: 'वेरिकोज़ वेन्स',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'सवाल',
      sourceLanguage: 'tr',
      targetLanguage: 'hi',
      isReversed: true,
      results: [
        {
          language: 'tr',
          source: 'soru',
          ipa: "so'ɾu",
          example: '* sorunun cevabı\n* soru kâğıdı',
          definition:
            '* bir şey öğrenmek için birine yöneltilen söz veya yazı\n* bir öğrenciye sınavda yöneltilen söz veya yazı',
          translation: 'प्रश्न, सवाल',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'En sık atlanan *bakım* görevleri toza karşı savaşınızı içerir. Eviniz, toz ve diğer şeyleri yakalayan filtreler ve havalandırmalarla doludur, bu da sistemlerinizin ömrünü uzatır ve havayı temiz tutar. Yılda en az bir kez aşağıdakileri temizlemeli ve değiştirmelisiniz:',
      results: [
        {
          language: 'tr',
          source: 'bakım',
          ipa: "ba'kɯm",
          example: '* arabanın bakımı\n* yaşlıların bakımı',
          definition:
            '* bir şeyi iyi işlemesi için elden geçirme\n* birinin veya bir şeyin gelişmesini veya iyi bir durumda kalmasını sağlama işi',
          translation: 'देखभाल, सुरक्षा',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'bakla',
          ipa: "bak'ɫa",
          example: '* bakla üretimi\n* bakla yemeği',
          definition:
            '* yeşil kabuklu ve iri taneli besleyici bir bitki\n* bu bitkinin yaş veya kuru tanesi',
          translation: 'बेसन, फली',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
  },
  tr: {
    welcomeScreenCard: {
      language: 'tr',
      source: 'olağanüstü',
      ipa: "oɫa'anysty",
      example: '* olağanüstü bir zafer\n* olağanüstü bir manzara',
      definition:
        '* alışılmıştan, benzerlerinden farklı olan\n* büyük bir hayranlığa yol açan',
      translation: '',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'varış',
      sourceLanguage: 'tr',
      targetLanguage: 'tr',
      isReversed: false,
      results: [
        {
          language: 'tr',
          source: 'varış',
          ipa: "va'ɾɯʃ",
          example: '* Köye varışı çok sürmedi.\n* varışa ulaşan ilk yarışmacı',
          definition:
            '* varma durumu veya biçimi\n* bir yarışın son bulduğu yer',
          translation: '',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'vâris',
          ipa: "vaː'ɾis",
          example: 'rahmetli kadının vârisleri',
          definition: 'miras hakkı olan kimse',
          translation: '',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'soru',
      sourceLanguage: 'tr',
      targetLanguage: 'tr',
      isReversed: true,
      results: [
        {
          language: 'tr',
          source: 'question',
          ipa: '',
          example: '',
          definition: '',
          translation: 'question',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'En sık atlanan *bakım* görevleri toza karşı savaşınızı içerir. Eviniz, toz ve diğer şeyleri yakalayan filtreler ve havalandırmalarla doludur, bu da sistemlerinizin ömrünü uzatır ve havayı temiz tutar. Yılda en az bir kez aşağıdakileri temizlemeli ve değiştirmelisiniz:',
      results: [
        {
          language: 'tr',
          source: 'bakım',
          ipa: "ba'kɯm",
          example: '* arabanın bakımı\n* yaşlıların bakımı',
          definition:
            '* bir şeyi iyi işlemesi için elden geçirme\n* birinin veya bir şeyin gelişmesini veya iyi bir durumda kalmasını sağlama işi',
          translation: '',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'bakla',
          ipa: "bak'ɫa",
          example: '* bakla üretimi\n* bakla yemeği',
          definition:
            '* yeşil kabuklu ve iri taneli besleyici bir bitki\n* bu bitkinin yaş veya kuru tanesi',
          translation: '',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
  },
  sv: {
    welcomeScreenCard: {
      language: 'tr',
      source: 'olağanüstü',
      ipa: "oɫa'anysty",
      example: '* olağanüstü bir zafer\n* olağanüstü bir manzara',
      definition:
        '* alışılmıştan, benzerlerinden farklı olan\n* büyük bir hayranlığa yol açan',
      translation: 'extraordinär, exceptionell',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'varış',
      sourceLanguage: 'tr',
      targetLanguage: 'sv',
      isReversed: false,
      results: [
        {
          language: 'tr',
          source: 'varış',
          ipa: "va'ɾɯʃ",
          example: '* Köye varışı çok sürmedi.\n* varışa ulaşan ilk yarışmacı',
          definition:
            '* varma durumu veya biçimi\n* bir yarışın son bulduğu yer',
          translation: 'ankomst, mål',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'varis',
          ipa: "va'ɾis",
          example: 'varis ameliyatı',
          definition: 'bacaklarda görülen toplardamar genişlemesi',
          translation: 'åderbråck',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'fråga',
      sourceLanguage: 'tr',
      targetLanguage: 'sv',
      isReversed: true,
      results: [
        {
          language: 'tr',
          source: 'soru',
          ipa: "so'ɾu",
          example: '* sorunun cevabı\n* soru kâğıdı',
          definition:
            '* bir şey öğrenmek için birine yöneltilen söz veya yazı\n* bir öğrenciye sınavda yöneltilen söz veya yazı',
          translation: 'fråga, examensfråga',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'sormak',
          ipa: '',
          example: '',
          definition: '',
          translation: 'att fråga',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'En sık atlanan *bakım* görevleri toza karşı savaşınızı içerir. Eviniz, toz ve diğer şeyleri yakalayan filtreler ve havalandırmalarla doludur, bu da sistemlerinizin ömrünü uzatır ve havayı temiz tutar. Yılda en az bir kez aşağıdakileri temizlemeli ve değiştirmelisiniz:',
      results: [
        {
          language: 'tr',
          source: 'bakım',
          ipa: "ba'kɯm",
          example: '* arabanın bakımı\n* yaşlıların bakımı',
          definition:
            '* bir şeyi iyi işlemesi için elden geçirme\n* birinin veya bir şeyin gelişmesini veya iyi bir durumda kalmasını sağlama işi',
          translation: 'vård, underhåll',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'bakla',
          ipa: "bak'ɫa",
          example: '* bakla üretimi\n* bakla yemeği',
          definition:
            '* yeşil kabuklu ve iri taneli besleyici bir bitki\n* bu bitkinin yaş veya kuru tanesi',
          translation: 'böna, ärta',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
  },
  no: {
    welcomeScreenCard: {
      language: 'tr',
      source: 'olağanüstü',
      ipa: "oɫa'anysty",
      example: '* olağanüstü bir zafer\n* olağanüstü bir manzara',
      definition:
        '* alışılmıştan, benzerlerinden farklı olan\n* büyük bir hayranlığa yol açan',
      translation: 'ekstraordinær, uvanlig',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'varış',
      sourceLanguage: 'tr',
      targetLanguage: 'no',
      isReversed: false,
      results: [
        {
          language: 'tr',
          source: 'varış',
          ipa: "va'ɾɯʃ",
          example: '* Köye varışı çok sürmedi.\n* varışa ulaşan ilk yarışmacı',
          definition:
            '* varma durumu veya biçimi\n* bir yarışın son bulduğu yer',
          translation: 'ankomst, mål',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'varis',
          ipa: "va'ɾis",
          example: 'varis ameliyatı',
          definition: 'bacaklarda görülen toplardamar genişlemesi',
          translation: 'åreknute',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'spørsmål',
      sourceLanguage: 'tr',
      targetLanguage: 'no',
      isReversed: true,
      results: [
        {
          language: 'tr',
          source: 'soru',
          ipa: "so'ɾu",
          example: '* sorunun cevabı\n* soru kâğıdı',
          definition:
            '* bir şey öğrenmek için birine yöneltilen söz veya yazı\n* bir öğrenciye sınavda yöneltilen söz veya yazı',
          translation: 'spørsmål, eksamensspørsmål',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'En sık atlanan *bakım* görevleri toza karşı savaşınızı içerir. Eviniz, toz ve diğer şeyleri yakalayan filtreler ve havalandırmalarla doludur, bu da sistemlerinizin ömrünü uzatır ve havayı temiz tutar. Yılda en az bir kez aşağıdakileri temizlemeli ve değiştirmelisiniz:',
      results: [
        {
          language: 'tr',
          source: 'bakım',
          ipa: "ba'kɯm",
          example: '* arabanın bakımı\n* yaşlıların bakımı',
          definition:
            '* bir şeyi iyi işlemesi için elden geçirme\n* birinin veya bir şeyin gelişmesini veya iyi bir durumda kalmasını sağlama işi',
          translation: 'vedlikehold, omsorg',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'bakla',
          ipa: "bak'ɫa",
          example: '* bakla üretimi\n* bakla yemeği',
          definition:
            '* yeşil kabuklu ve iri taneli besleyici bir bitki\n* bu bitkinin yaş veya kuru tanesi',
          translation: 'bønne, erter',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
  },
  da: {
    welcomeScreenCard: {
      language: 'tr',
      source: 'olağanüstü',
      ipa: "oɫa'anysty",
      example: '* olağanüstü bir zafer\n* olağanüstü bir manzara',
      definition:
        '* alışılmıştan, benzerlerinden farklı olan\n* büyük bir hayranlığa yol açan',
      translation: 'usædvanlig, extraordinær, ekstraordinær',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'varış',
      sourceLanguage: 'tr',
      targetLanguage: 'da',
      isReversed: false,
      results: [
        {
          language: 'tr',
          source: 'varış',
          ipa: "va'ɾɯʃ",
          example: '* Köye varışı çok sürmedi.\n* varışa ulaşan ilk yarışmacı',
          definition:
            '* varma durumu veya biçimi\n* bir yarışın son bulduğu yer',
          translation: 'ankomst, ankomststed',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'varis',
          ipa: "va'ɾis",
          example: 'varis ameliyatı',
          definition: 'bacaklarda görülen toplardamar genişlemesi',
          translation: 'åreknude',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'spørgsmål',
      sourceLanguage: 'tr',
      targetLanguage: 'da',
      isReversed: true,
      results: [
        {
          language: 'tr',
          source: 'soru',
          ipa: "so'ɾu",
          example: '* sorunun cevabı\n* soru kâğıdı',
          definition:
            '* bir şey öğrenmek için birine yöneltilen söz veya yazı\n* bir öğrenciye sınavda yöneltilen söz veya yazı',
          translation: 'spørgsmål, eksamensspørgsmål',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'En sık atlanan *bakım* görevleri toza karşı savaşınızı içerir. Eviniz, toz ve diğer şeyleri yakalayan filtreler ve havalandırmalarla doludur, bu da sistemlerinizin ömrünü uzatır ve havayı temiz tutar. Yılda en az bir kez aşağıdakileri temizlemeli ve değiştirmelisiniz:',
      results: [
        {
          language: 'tr',
          source: 'bakım',
          ipa: "ba'kɯm",
          example: '* arabanın bakımı\n* yaşlıların bakımı',
          definition:
            '* bir şeyi iyi işlemesi için elden geçirme\n* birinin veya bir şeyin gelişmesini veya iyi bir durumda kalmasını sağlama işi',
          translation: 'vedligeholdelse, omsorg',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'bakla',
          ipa: "bak'ɫa",
          example: '* bakla üretimi\n* bakla yemeği',
          definition:
            '* yeşil kabuklu ve iri taneli besleyici bir bitki\n* bu bitkinin yaş veya kuru tanesi',
          translation: 'bælgfrugt, bælg',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
  },
  fi: {
    welcomeScreenCard: {
      language: 'tr',
      source: 'olağanüstü',
      ipa: "oɫa'anysty",
      example: '* olağanüstü bir zafer\n* olağanüstü bir manzara',
      definition:
        '* alışılmıştan, benzerlerinden farklı olan\n* büyük bir hayranlığa yol açan',
      translation: 'poikkeuksellinen, erityinen',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'varış',
      sourceLanguage: 'tr',
      targetLanguage: 'fi',
      isReversed: false,
      results: [
        {
          language: 'tr',
          source: 'varış',
          ipa: "va'ɾɯʃ",
          example: '* Köye varışı çok sürmedi.\n* varışa ulaşan ilk yarışmacı',
          definition:
            '* varma durumu veya biçimi\n* bir yarışın son bulduğu yer',
          translation: 'saapuminen, maali',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'varis',
          ipa: "va'ɾis",
          example: 'varis ameliyatı',
          definition: 'bacaklarda görülen toplardamar genişlemesi',
          translation: 'suonikohju',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'kysymys',
      sourceLanguage: 'tr',
      targetLanguage: 'fi',
      isReversed: true,
      results: [
        {
          language: 'tr',
          source: 'soru',
          ipa: "so'ɾu",
          example: '* sorunun cevabı\n* soru kâğıdı',
          definition:
            '* bir şey öğrenmek için birine yöneltilen söz veya yazı\n* bir öğrenciye sınavda yöneltilen söz veya yazı',
          translation: 'kysymys, kysymys paperilla',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'En sık atlanan *bakım* görevleri toza karşı savaşınızı içerir. Eviniz, toz ve diğer şeyleri yakalayan filtreler ve havalandırmalarla doludur, bu da sistemlerinizin ömrünü uzatır ve havayı temiz tutar. Yılda en az bir kez aşağıdakileri temizlemeli ve değiştirmelisiniz:',
      results: [
        {
          language: 'tr',
          source: 'bakım',
          ipa: "ba'kɯm",
          example: '* arabanın bakımı\n* yaşlıların bakımı',
          definition:
            '* bir şeyi iyi işlemesi için elden geçirme\n* birinin veya bir şeyin gelişmesini veya iyi bir durumda kalmasını sağlama işi',
          translation: 'huolto, hoito',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'bakla',
          ipa: "bak'ɫa",
          example: '* bakla üretimi\n* bakla yemeği',
          definition:
            '* yeşil kabuklu ve iri taneli besleyici bir bitki\n* bu bitkinin yaş veya kuru tanesi',
          translation: 'herne, palko',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
  },
  fa: {
    welcomeScreenCard: {
      language: 'tr',
      source: 'olağanüstü',
      ipa: "oɫa'anysty",
      example: '* olağanüstü bir zafer\n* olağanüstü bir manzara',
      definition:
        '* alışılmıştan, benzerlerinden farklı olan\n* büyük bir hayranlığa yol açan',
      translation: 'فوق العاده، شگفت‌انگیز، عجیب',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'varış',
      sourceLanguage: 'tr',
      targetLanguage: 'fa',
      isReversed: false,
      results: [
        {
          language: 'tr',
          source: 'varış',
          ipa: "va'ɾɯʃ",
          example: '* Köye varışı çok sürmedi.\n* varışa ulaşan ilk yarışmacı',
          definition:
            '* varma durumu veya biçimi\n* bir yarışın son bulduğu yer',
          translation: 'ورود، مقصد، رسیدن',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'varis',
          ipa: "va'ɾis",
          example: 'varis ameliyatı',
          definition: 'bacaklarda görülen toplardamar genişlemesi',
          translation: 'واریکوس',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'سوال',
      sourceLanguage: 'tr',
      targetLanguage: 'fa',
      isReversed: true,
      results: [
        {
          language: 'tr',
          source: 'soru',
          ipa: "so'ɾu",
          example: '* sorunun cevabı\n* soru kâğıdı',
          definition:
            '* bir şey öğrenmek için birine yöneltilen söz veya yazı\n* bir öğrenciye sınavda yöneltilen söz veya yazı',
          translation: 'پرسش، سوال',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'En sık atlanan *bakım* görevleri toza karşı savaşınızı içerir. Eviniz, toz ve diğer şeyleri yakalayan filtreler ve havalandırmalarla doludur, bu da sistemlerinizin ömrünü uzatır ve havayı temiz tutar. Yılda en az bir kez aşağıdakileri temizlemeli ve değiştirmelisiniz:',
      results: [
        {
          language: 'tr',
          source: 'bakım',
          ipa: "ba'kɯm",
          example: '* arabanın bakımı\n* yaşlıların bakımı',
          definition:
            '* bir şeyi iyi işlemesi için elden geçirme\n* birinin veya bir şeyin gelişmesini veya iyi bir durumda kalmasını sağlama işi',
          translation: 'مراقبت، نگهداری',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'bakla',
          ipa: "bak'ɫa",
          example: '* bakla üretimi\n* bakla yemeği',
          definition:
            '* yeşil kabuklu ve iri taneli besleyici bir bitki\n* bu bitkinin yaş veya kuru tanesi',
          translation: 'دانه باقالی، باقالی',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
  },
  pl: {
    welcomeScreenCard: {
      language: 'tr',
      source: 'olağanüstü',
      ipa: "oɫa'anysty",
      example: '* olağanüstü bir zafer\n* olağanüstü bir manzara',
      definition:
        '* alışılmıştan, benzerlerinden farklı olan\n* büyük bir hayranlığa yol açan',
      translation: 'nadzwyczajny, wyjątkowy',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'varış',
      sourceLanguage: 'tr',
      targetLanguage: 'pl',
      isReversed: false,
      results: [
        {
          language: 'tr',
          source: 'varış',
          ipa: "va'ɾɯʃ",
          example: '* Köye varışı çok sürmedi.\n* varışa ulaşan ilk yarışmacı',
          definition:
            '* varma durumu veya biçimi\n* bir yarışın son bulduğu yer',
          translation: 'przybycie, meta',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'varis',
          ipa: "va'ɾis",
          example: 'varis ameliyatı',
          definition: 'bacaklarda görülen toplardamar genişlemesi',
          translation: 'żylaki',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'pytanie',
      sourceLanguage: 'tr',
      targetLanguage: 'pl',
      isReversed: true,
      results: [
        {
          language: 'tr',
          source: 'soru',
          ipa: "so'ɾu",
          example: '* sorunun cevabı\n* soru kâğıdı',
          definition:
            '* bir şey öğrenmek için birine yöneltilen söz veya yazı\n* bir öğrenciye sınavda yöneltilen söz veya yazı',
          translation: 'pytanie, zapytanie',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'En sık atlanan *bakım* görevleri toza karşı savaşınızı içerir. Eviniz, toz ve diğer şeyleri yakalayan filtreler ve havalandırmalarla doludur, bu da sistemlerinizin ömrünü uzatır ve havayı temiz tutar. Yılda en az bir kez aşağıdakileri temizlemeli ve değiştirmelisiniz:',
      results: [
        {
          language: 'tr',
          source: 'bakım',
          ipa: "ba'kɯm",
          example: '* arabanın bakımı\n* yaşlıların bakımı',
          definition:
            '* bir şeyi iyi işlemesi için elden geçirme\n* birinin veya bir şeyin gelişmesini veya iyi bir durumda kalmasını sağlama işi',
          translation: 'opieka, konserwacja',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'bakla',
          ipa: "bak'ɫa",
          example: '* bakla üretimi\n* bakla yemeği',
          definition:
            '* yeşil kabuklu ve iri taneli besleyici bir bitki\n* bu bitkinin yaş veya kuru tanesi',
          translation: 'bób, ziarno bobu',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
  },
  el: {
    welcomeScreenCard: {
      language: 'tr',
      source: 'olağanüstü',
      ipa: "oɫa'anysty",
      example: '* olağanüstü bir zafer\n* olağanüstü bir manzara',
      definition:
        '* alışılmıştan, benzerlerinden farklı olan\n* büyük bir hayranlığa yol açan',
      translation: 'υπερβολικός, εκπληκτικός, εξαιρετικός',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'varış',
      sourceLanguage: 'tr',
      targetLanguage: 'el',
      isReversed: false,
      results: [
        {
          language: 'tr',
          source: 'varış',
          ipa: "va'ɾɯʃ",
          example: '* Köye varışı çok sürmedi.\n* varışa ulaşan ilk yarışmacı',
          definition:
            '* varma durumu veya biçimi\n* bir yarışın son bulduğu yer',
          translation: 'άφιξη, τερματισμός',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'varis',
          ipa: "va'ɾis",
          example: 'varis ameliyatı',
          definition: 'bacaklarda görülen toplardamar genişlemesi',
          translation: 'φλέβες',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'ερώτηση',
      sourceLanguage: 'tr',
      targetLanguage: 'el',
      isReversed: true,
      results: [
        {
          language: 'tr',
          source: 'soru',
          ipa: "so'ɾu",
          example: '* sorunun cevabı\n* soru kâğıdı',
          definition:
            '* bir şey öğrenmek için birine yöneltilen söz veya yazı\n* bir öğrenciye sınavda yöneltilen söz veya yazı',
          translation: 'ερώτηση, ρωτήση',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'En sık atlanan *bakım* görevleri toza karşı savaşınızı içerir. Eviniz, toz ve diğer şeyleri yakalayan filtreler ve havalandırmalarla doludur, bu da sistemlerinizin ömrünü uzatır ve havayı temiz tutar. Yılda en az bir kez aşağıdakileri temizlemeli ve değiştirmelisiniz:',
      results: [
        {
          language: 'tr',
          source: 'bakım',
          ipa: "ba'kɯm",
          example: '* arabanın bakımı\n* yaşlıların bakımı',
          definition:
            '* bir şeyi iyi işlemesi için elden geçirme\n* birinin veya bir şeyin gelişmesini veya iyi bir durumda kalmasını sağlama işi',
          translation: 'φροντίδα, συντήρηση',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'bakla',
          ipa: "bak'ɫa",
          example: '* bakla üretimi\n* bakla yemeği',
          definition:
            '* yeşil kabuklu ve iri taneli besleyici bir bitki\n* bu bitkinin yaş veya kuru tanesi',
          translation: 'κουκί, φασόλι',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
  },
  he: {
    welcomeScreenCard: {
      language: 'tr',
      source: 'olağanüstü',
      ipa: "oɫa'anysty",
      example: '* olağanüstü bir zafer\n* olağanüstü bir manzara',
      definition:
        '* alışılmıştan, benzerlerinden farklı olan\n* büyük bir hayranlığa yol açan',
      translation: 'יוצא דופן, מדהים',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'varış',
      sourceLanguage: 'tr',
      targetLanguage: 'he',
      isReversed: false,
      results: [
        {
          language: 'tr',
          source: 'varış',
          ipa: "va'ɾɯʃ",
          example: '* Köye varışı çok sürmedi.\n* varışa ulaşan ilk yarışmacı',
          definition:
            '* varma durumu veya biçimi\n* bir yarışın son bulduğu yer',
          translation: 'הגעה, סיום מרוץ',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'varis',
          ipa: "va'ɾis",
          example: 'varis ameliyatı',
          definition: 'bacaklarda görülen toplardamar genişlemesi',
          translation: 'ורידים',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'שְׁאֵלָה',
      sourceLanguage: 'tr',
      targetLanguage: 'he',
      isReversed: true,
      results: [
        {
          language: 'tr',
          source: 'soru',
          ipa: "so'ɾu",
          example: '* sorunun cevabı\n* soru kâğıdı',
          definition:
            '* bir şey öğrenmek için birine yöneltilen söz veya yazı\n* bir öğrenciye sınavda yöneltilen söz veya yazı',
          translation: 'שאלה, שאלת תלמיד',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'sorun',
          ipa: "so'ɾun",
          example: '* sorun çözmek\n* sorundan kurtulmak',
          definition: '* mesele, problem\n* sıkıntı veren durum',
          translation: 'בעיה, סוגיה',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'En sık atlanan *bakım* görevleri toza karşı savaşınızı içerir. Eviniz, toz ve diğer şeyleri yakalayan filtreler ve havalandırmalarla doludur, bu da sistemlerinizin ömrünü uzatır ve havayı temiz tutar. Yılda en az bir kez aşağıdakileri temizlemeli ve değiştirmelisiniz:',
      results: [
        {
          language: 'tr',
          source: 'bakım',
          ipa: "ba'kɯm",
          example: '* arabanın bakımı\n* yaşlıların bakımı',
          definition:
            '* bir şeyi iyi işlemesi için elden geçirme\n* birinin veya bir şeyin gelişmesini veya iyi bir durumda kalmasını sağlama işi',
          translation: 'טיפול, תחזוקה',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'bakla',
          ipa: "bak'ɫa",
          example: '* bakla üretimi\n* bakla yemeği',
          definition:
            '* yeşil kabuklu ve iri taneli besleyici bir bitki\n* bu bitkinin yaş veya kuru tanesi',
          translation: 'שָׁעָשׁ, שָׁעָשׁ יָרֹק',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
  },
  th: {
    welcomeScreenCard: {
      language: 'tr',
      source: 'olağanüstü',
      ipa: "oɫa'anysty",
      example: '* olağanüstü bir zafer\n* olağanüstü bir manzara',
      definition:
        '* alışılmıştan, benzerlerinden farklı olan\n* büyük bir hayranlığa yol açan',
      translation: 'พิเศษ, ยอดเยี่ยม',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'varış',
      sourceLanguage: 'tr',
      targetLanguage: 'th',
      isReversed: false,
      results: [
        {
          language: 'tr',
          source: 'varış',
          ipa: "va'ɾɯʃ",
          example: '* Köye varışı çok sürmedi.\n* varışa ulaşan ilk yarışmacı',
          definition:
            '* varma durumu veya biçimi\n* bir yarışın son bulduğu yer',
          translation: 'การมาถึง, จุดสิ้นสุดของการแข่งขัน',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'varis',
          ipa: "va'ɾis",
          example: 'varis ameliyatı',
          definition: 'bacaklarda görülen toplardamar genişlemesi',
          translation: 'เส้นเลือดขอด',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'คำถาม',
      sourceLanguage: 'tr',
      targetLanguage: 'th',
      isReversed: true,
      results: [
        {
          language: 'tr',
          source: 'soru',
          ipa: "so'ɾu",
          example: '* sorunun cevabı\n* soru kâğıdı',
          definition:
            '* bir şey öğrenmek için birine yöneltilen söz veya yazı\n* bir öğrenciye sınavda yöneltilen söz veya yazı',
          translation: 'คำถาม, ข้อสอบ',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'En sık atlanan *bakım* görevleri toza karşı savaşınızı içerir. Eviniz, toz ve diğer şeyleri yakalayan filtreler ve havalandırmalarla doludur, bu da sistemlerinizin ömrünü uzatır ve havayı temiz tutar. Yılda en az bir kez aşağıdakileri temizlemeli ve değiştirmelisiniz:',
      results: [
        {
          language: 'tr',
          source: 'bakım',
          ipa: "ba'kɯm",
          example: '* arabanın bakımı\n* yaşlıların bakımı',
          definition:
            '* bir şeyi iyi işlemesi için elden geçirme\n* birinin veya bir şeyin gelişmesini veya iyi bir durumda kalmasını sağlama işi',
          translation: 'การดูแล, การบำรุงรักษา',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'bakla',
          ipa: "bak'ɫa",
          example: '* bakla üretimi\n* bakla yemeği',
          definition:
            '* yeşil kabuklu ve iri taneli besleyici bir bitki\n* bu bitkinin yaş veya kuru tanesi',
          translation: 'ถั่วลันเตา, เมล็ดถั่วลันเตา',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
  },
  vi: {
    welcomeScreenCard: {
      language: 'tr',
      source: 'olağanüstü',
      ipa: "oɫa'anysty",
      example: '* olağanüstü bir zafer\n* olağanüstü bir manzara',
      definition:
        '* alışılmıştan, benzerlerinden farklı olan\n* büyük bir hayranlığa yol açan',
      translation: 'phi thường, ngoạn mục',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'varış',
      sourceLanguage: 'tr',
      targetLanguage: 'vi',
      isReversed: false,
      results: [
        {
          language: 'tr',
          source: 'varış',
          ipa: "va'ɾɯʃ",
          example: '* Köye varışı çok sürmedi.\n* varışa ulaşan ilk yarışmacı',
          definition:
            '* varma durumu veya biçimi\n* bir yarışın son bulduğu yer',
          translation: 'điểm đến, địa điểm kết thúc, sự đến',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'varis',
          ipa: "va'ɾis",
          example: 'varis ameliyatı',
          definition: 'bacaklarda görülen toplardamar genişlemesi',
          translation: 'giãn tĩnh mạch',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'câu hỏi',
      sourceLanguage: 'tr',
      targetLanguage: 'vi',
      isReversed: true,
      results: [
        {
          language: 'tr',
          source: 'soru',
          ipa: "so'ɾu",
          example: '* sorunun cevabı\n* soru kâğıdı',
          definition:
            '* bir şey öğrenmek için birine yöneltilen söz veya yazı\n* bir öğrenciye sınavda yöneltilen söz veya yazı',
          translation: 'câu hỏi, hỏi',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'En sık atlanan *bakım* görevleri toza karşı savaşınızı içerir. Eviniz, toz ve diğer şeyleri yakalayan filtreler ve havalandırmalarla doludur, bu da sistemlerinizin ömrünü uzatır ve havayı temiz tutar. Yılda en az bir kez aşağıdakileri temizlemeli ve değiştirmelisiniz:',
      results: [
        {
          language: 'tr',
          source: 'bakım',
          ipa: "ba'kɯm",
          example: '* arabanın bakımı\n* yaşlıların bakımı',
          definition:
            '* bir şeyi iyi işlemesi için elden geçirme\n* birinin veya bir şeyin gelişmesini veya iyi bir durumda kalmasını sağlama işi',
          translation: 'bảo trì, chăm sóc',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'bakla',
          ipa: "bak'ɫa",
          example: '* bakla üretimi\n* bakla yemeği',
          definition:
            '* yeşil kabuklu ve iri taneli besleyici bir bitki\n* bu bitkinin yaş veya kuru tanesi',
          translation: 'đậu xanh, hạt đậu',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
  },
  id: {
    welcomeScreenCard: {
      language: 'tr',
      source: 'olağanüstü',
      ipa: "oɫa'anysty",
      example: '* olağanüstü bir zafer\n* olağanüstü bir manzara',
      definition:
        '* alışılmıştan, benzerlerinden farklı olan\n* büyük bir hayranlığa yol açan',
      translation: 'luar biasa, istimewa',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'varış',
      sourceLanguage: 'tr',
      targetLanguage: 'id',
      isReversed: false,
      results: [
        {
          language: 'tr',
          source: 'varış',
          ipa: "va'ɾɯʃ",
          example: '* Köye varışı çok sürmedi.\n* varışa ulaşan ilk yarışmacı',
          definition:
            '* varma durumu veya biçimi\n* bir yarışın son bulduğu yer',
          translation: 'kedatangan, tujuan',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'varis',
          ipa: "va'ɾis",
          example: 'varis ameliyatı',
          definition: 'bacaklarda görülen toplardamar genişlemesi',
          translation: 'varises',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'pertanyaan',
      sourceLanguage: 'tr',
      targetLanguage: 'id',
      isReversed: true,
      results: [
        {
          language: 'tr',
          source: 'soru',
          ipa: "so'ɾu",
          example: '* sorunun cevabı\n* soru kâğıdı',
          definition:
            '* bir şey öğrenmek için birine yöneltilen söz veya yazı\n* bir öğrenciye sınavda yöneltilen söz veya yazı',
          translation: 'pertanyaan, soal',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'En sık atlanan *bakım* görevleri toza karşı savaşınızı içerir. Eviniz, toz ve diğer şeyleri yakalayan filtreler ve havalandırmalarla doludur, bu da sistemlerinizin ömrünü uzatır ve havayı temiz tutar. Yılda en az bir kez aşağıdakileri temizlemeli ve değiştirmelisiniz:',
      results: [
        {
          language: 'tr',
          source: 'bakım',
          ipa: "ba'kɯm",
          example: '* arabanın bakımı\n* yaşlıların bakımı',
          definition:
            '* bir şeyi iyi işlemesi için elden geçirme\n* birinin veya bir şeyin gelişmesini veya iyi bir durumda kalmasını sağlama işi',
          translation: 'perawatan, pemeliharaan',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'bakla',
          ipa: "bak'ɫa",
          example: '* bakla üretimi\n* bakla yemeği',
          definition:
            '* yeşil kabuklu ve iri taneli besleyici bir bitki\n* bu bitkinin yaş veya kuru tanesi',
          translation: 'kacang, biji kacang',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
  },
  ms: {
    welcomeScreenCard: {
      language: 'tr',
      source: 'olağanüstü',
      ipa: "oɫa'anysty",
      example: '* olağanüstü bir zafer\n* olağanüstü bir manzara',
      definition:
        '* alışılmıştan, benzerlerinden farklı olan\n* büyük bir hayranlığa yol açan',
      translation: 'luar biasa, istimewa',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'varış',
      sourceLanguage: 'tr',
      targetLanguage: 'ms',
      isReversed: false,
      results: [
        {
          language: 'tr',
          source: 'varış',
          ipa: "va'ɾɯʃ",
          example: '* Köye varışı çok sürmedi.\n* varışa ulaşan ilk yarışmacı',
          definition:
            '* varma durumu veya biçimi\n* bir yarışın son bulduğu yer',
          translation: 'ketibaan, tempat tamat',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'varis',
          ipa: "va'ɾis",
          example: 'varis ameliyatı',
          definition: 'bacaklarda görülen toplardamar genişlemesi',
          translation: 'urat varikos',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'soalan',
      sourceLanguage: 'tr',
      targetLanguage: 'ms',
      isReversed: true,
      results: [
        {
          language: 'tr',
          source: 'soru',
          ipa: "so'ɾu",
          example: '* sorunun cevabı\n* soru kâğıdı',
          definition:
            '* bir şey öğrenmek için birine yöneltilen söz veya yazı\n* bir öğrenciye sınavda yöneltilen söz veya yazı',
          translation: 'soalan, pertanyaan',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'En sık atlanan *bakım* görevleri toza karşı savaşınızı içerir. Eviniz, toz ve diğer şeyleri yakalayan filtreler ve havalandırmalarla doludur, bu da sistemlerinizin ömrünü uzatır ve havayı temiz tutar. Yılda en az bir kez aşağıdakileri temizlemeli ve değiştirmelisiniz:',
      results: [
        {
          language: 'tr',
          source: 'bakım',
          ipa: "ba'kɯm",
          example: '* arabanın bakımı\n* yaşlıların bakımı',
          definition:
            '* bir şeyi iyi işlemesi için elden geçirme\n* birinin veya bir şeyin gelişmesini veya iyi bir durumda kalmasını sağlama işi',
          translation: 'penjagaan, perawatan',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'bakla',
          ipa: "bak'ɫa",
          example: '* bakla üretimi\n* bakla yemeği',
          definition:
            '* yeşil kabuklu ve iri taneli besleyici bir bitki\n* bu bitkinin yaş veya kuru tanesi',
          translation: 'kacang hijau, biji kacang',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
  },
  uk: {
    welcomeScreenCard: {
      language: 'tr',
      source: 'olağanüstü',
      ipa: "oɫa'anysty",
      example: '* olağanüstü bir zafer\n* olağanüstü bir manzara',
      definition:
        '* alışılmıştan, benzerlerinden farklı olan\n* büyük bir hayranlığa yol açan',
      translation: 'надзвичайний, вражаючий',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'varış',
      sourceLanguage: 'tr',
      targetLanguage: 'uk',
      isReversed: false,
      results: [
        {
          language: 'tr',
          source: 'вариш',
          ipa: '',
          example: '',
          definition: '',
          translation: 'прибуття',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'запитання',
      sourceLanguage: 'tr',
      targetLanguage: 'uk',
      isReversed: true,
      results: [
        {
          language: 'tr',
          source: 'сору',
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
      text: 'En sık atlanan *bakım* görevleri toza karşı savaşınızı içerir. Eviniz, toz ve diğer şeyleri yakalayan filtreler ve havalandırmalarla doludur, bu da sistemlerinizin ömrünü uzatır ve havayı temiz tutar. Yılda en az bir kez aşağıdakileri temizlemeli ve değiştirmelisiniz:',
      results: [
        {
          language: 'tr',
          source: 'bakım',
          ipa: "ba'kɯm",
          example: '* arabanın bakımı\n* yaşlıların bakımı',
          definition:
            '* bir şeyi iyi işlemesi için elden geçirme\n* birinin veya bir şeyin gelişmesini veya iyi bir durumda kalmasını sağlama işi',
          translation: 'догляд, обслуговування',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'tr',
          source: 'bakla',
          ipa: "bak'ɫa",
          example: '* bakla üretimi\n* bakla yemeği',
          definition:
            '* yeşil kabuklu ve iri taneli besleyici bir bitki\n* bu bitkinin yaş veya kuru tanesi',
          translation: 'боб, бобові',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
  },
};
