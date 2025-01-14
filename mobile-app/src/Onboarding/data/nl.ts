import { MobileOnboardingDataCollection } from '@vocably/model';

export const onboardingCollection: MobileOnboardingDataCollection = {
  en: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrkələk',
      example:
        'De snel groeiende belangstelling voor de golfsport is een opmerkelijk verschijnsel.',
      definition: 'opvallend',
      translation: 'striking, remarkable, notable',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'en',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈankomə(n)',
          example:
            '* De trein komt over een kwartier aan.\n* Dat akelige bericht is hard bij haar aangekomen.\n* in een maand vijf kilo aangekomen zijn',
          definition: '* komen waar je moet zijn\n* raken\n* dikker worden',
          translation:
            'arrive, get, strike, hit, gain weight, fatten up, to arrive',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'nl',
          source: 'aankomend',
          ipa: 'ˈankomənt',
          example: '* aankomende donderdag\n* een aankomend arts',
          definition: '* eerstkomend\n* toekomstig',
          translation:
            'next, following, coming, budding, prospective, up-and-coming',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'question',
      sourceLanguage: 'nl',
      targetLanguage: 'en',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'de vraag',
          ipa: 'vrax',
          example:
            '* vragenlijst\n* Er is veel vraag naar geschoolde arbeidskrachten.',
          definition:
            '* iets wat je zegt tegen iemand van wie je iets wilt weten\n* belangstelling voor producten, diensten, mensen enz. die je graag wilt hebben of gebruiken',
          translation: 'query, question, call, demand',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
        {
          language: 'nl',
          source: 'vragen',
          ipa: "'vraxə(n)",
          example:
            '* Ze keek me vragend aan.\n* (om) geld vragen\n* Het trainen van vaardigheden vraagt tijd.',
          definition:
            '* (tegen iemand) (iets) in de vorm van een vraag (1) zeggen\n* (tegen iemand) (iets) in de vorm van een verzoek zeggen\n* nodig hebben',
          translation: 'ask, inquire, enquire, request, require, take, to ask',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: '',
          example: '',
          definition: '',
          translation: 'skipped',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˈovərslan',
          example:
            '* bij het voorlezen een hele alinea overslaan\n* Zijn stem sloeg over van de zenuwen.\n* De vlammen van de brandende schuur sloegen over op de boerderij.',
          definition:
            '* geen aandacht besteden aan (een gedeelte)\n* (van je stem) ineens veel hoger worden\n* van het ene naar het andere gaan',
          translation:
            'miss, leave out, skip, break, crack, be infectious, spread, be catching',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  es: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrkələk',
      example:
        'De snel groeiende belangstelling voor de golfsport is een opmerkelijk verschijnsel.',
      definition: 'opvallend',
      translation: 'notable',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'es',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈankomə(n)',
          example:
            '* De trein komt over een kwartier aan.\n* Dat akelige bericht is hard bij haar aangekomen.\n* in een maand vijf kilo aangekomen zijn',
          definition: '* komen waar je moet zijn\n* raken\n* dikker worden',
          translation:
            'llegar, arribar, afectar, engordar(se), aumentar de peso',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'nl',
          source: 'aankomend',
          ipa: 'ˈankomənt',
          example: '* aankomende donderdag\n* een aankomend arts',
          definition: '* eerstkomend\n* toekomstig',
          translation: 'próximo, principiante',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'pregunta',
      sourceLanguage: 'nl',
      targetLanguage: 'es',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'de vraag',
          ipa: 'vrax',
          example:
            '* vragenlijst\n* Er is veel vraag naar geschoolde arbeidskrachten.',
          definition:
            '* iets wat je zegt tegen iemand van wie je iets wilt weten\n* belangstelling voor producten, diensten, mensen enz. die je graag wilt hebben of gebruiken',
          translation: 'pregunta, demanda',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: '',
          example: '',
          definition: '',
          translation: 'omitido',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˈovərslan',
          example:
            '* bij het voorlezen een hele alinea overslaan\n* Zijn stem sloeg over van de zenuwen.\n* De vlammen van de brandende schuur sloegen over op de boerderij.',
          definition:
            '* geen aandacht besteden aan (een gedeelte)\n* (van je stem) ineens veel hoger worden\n* van het ene naar het andere gaan',
          translation: 'saltar, tener la voz aguda, propagarse',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  fr: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrkələk',
      example:
        'De snel groeiende belangstelling voor de golfsport is een opmerkelijk verschijnsel.',
      definition: 'opvallend',
      translation: 'marquant, remarquable, de façon marquante, remarquablement',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'fr',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈankomə(n)',
          example:
            '* De trein komt over een kwartier aan.\n* Dat akelige bericht is hard bij haar aangekomen.\n* in een maand vijf kilo aangekomen zijn',
          definition: '* komen waar je moet zijn\n* raken\n* dikker worden',
          translation: 'arriver, frapper, prendre du poids',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'nl',
          source: 'aankomend',
          ipa: 'ˈankomənt',
          example: '* aankomende donderdag\n* een aankomend arts',
          definition: '* eerstkomend\n* toekomstig',
          translation: 'prochain, futur',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'question',
      sourceLanguage: 'nl',
      targetLanguage: 'fr',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'de vraag',
          ipa: 'vrax',
          example:
            '* vragenlijst\n* Er is veel vraag naar geschoolde arbeidskrachten.',
          definition:
            '* iets wat je zegt tegen iemand van wie je iets wilt weten\n* belangstelling voor producten, diensten, mensen enz. die je graag wilt hebben of gebruiken',
          translation: 'question, demande',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
        {
          language: 'nl',
          source: 'ondervraging',
          ipa: '',
          example: '',
          definition: '',
          translation: 'interrogatoire',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: '',
          example: '',
          definition: '',
          translation: 'sauté',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˈovərslan',
          example:
            '* bij het voorlezen een hele alinea overslaan\n* Zijn stem sloeg over van de zenuwen.\n* De vlammen van de brandende schuur sloegen over op de boerderij.',
          definition:
            '* geen aandacht besteden aan (een gedeelte)\n* (van je stem) ineens veel hoger worden\n* van het ene naar het andere gaan',
          translation:
            'sauter, omettre, déraper dans les aigus, se propager, gagner',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  de: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrkələk',
      example:
        'De snel groeiende belangstelling voor de golfsport is een opmerkelijk verschijnsel.',
      definition: 'opvallend',
      translation: 'ungewöhnlich, bemerkenswert',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'de',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈankomə(n)',
          example:
            '* De trein komt over een kwartier aan.\n* Dat akelige bericht is hard bij haar aangekomen.\n* in een maand vijf kilo aangekomen zijn',
          definition: '* komen waar je moet zijn\n* raken\n* dikker worden',
          translation: 'ankommen, eintreffen, berühren, treffen, zunehmen',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'nl',
          source: 'aankomend',
          ipa: 'ˈankomənt',
          example: '* aankomende donderdag\n* een aankomend arts',
          definition: '* eerstkomend\n* toekomstig',
          translation: 'kommend, nächst, angehend, (zu)künftig',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'frage',
      sourceLanguage: 'nl',
      targetLanguage: 'de',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'de vraag',
          ipa: 'vrax',
          example:
            '* vragenlijst\n* Er is veel vraag naar geschoolde arbeidskrachten.',
          definition:
            '* iets wat je zegt tegen iemand van wie je iets wilt weten\n* belangstelling voor producten, diensten, mensen enz. die je graag wilt hebben of gebruiken',
          translation: 'Frage, Nachfrage, Bedarf',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: '',
          example: '',
          definition: '',
          translation: 'übersprungene',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˈovərslan',
          example:
            '* bij het voorlezen een hele alinea overslaan\n* Zijn stem sloeg over van de zenuwen.\n* De vlammen van de brandende schuur sloegen over op de boerderij.',
          definition:
            '* geen aandacht besteden aan (een gedeelte)\n* (van je stem) ineens veel hoger worden\n* van het ene naar het andere gaan',
          translation:
            'auslassen, überschlagen, sich überschlagen, übergreifen',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  zh: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrkələk',
      example:
        'De snel groeiende belangstelling voor de golfsport is een opmerkelijk verschijnsel.',
      definition: 'opvallend',
      translation: '显著的',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'zh',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈankomə(n)',
          example:
            '* De trein komt over een kwartier aan.\n* Dat akelige bericht is hard bij haar aangekomen.\n* in een maand vijf kilo aangekomen zijn',
          definition: '* komen waar je moet zijn\n* raken\n* dikker worden',
          translation: '到达, 碰到, 增重',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'nl',
          source: 'aankomend',
          ipa: 'ˈankomənt',
          example: '* aankomende donderdag\n* een aankomend arts',
          definition: '* eerstkomend\n* toekomstig',
          translation: '即将到来, 未来的',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: '问题',
      sourceLanguage: 'nl',
      targetLanguage: 'zh',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'het probleem',
          ipa: 'proˈblem',
          example: 'fileprobleem',
          definition: 'onwenselijke, moeilijke situatie',
          translation: '问题',
          partOfSpeech: 'noun',
          g: 'n',
          tags: [],
        },
        {
          language: 'nl',
          source: 'de vraag',
          ipa: 'vrax',
          example:
            '* vragenlijst\n* Er is veel vraag naar geschoolde arbeidskrachten.',
          definition:
            '* iets wat je zegt tegen iemand van wie je iets wilt weten\n* belangstelling voor producten, diensten, mensen enz. die je graag wilt hebben of gebruiken',
          translation: '问题, 询问',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: '',
          example: '',
          definition: '',
          translation: '被忽视的',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˈovərslan',
          example:
            '* bij het voorlezen een hele alinea overslaan\n* Zijn stem sloeg over van de zenuwen.\n* De vlammen van de brandende schuur sloegen over op de boerderij.',
          definition:
            '* geen aandacht besteden aan (een gedeelte)\n* (van je stem) ineens veel hoger worden\n* van het ene naar het andere gaan',
          translation: '跳过, 省略',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  'zh-TW': {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrkələk',
      example:
        'De snel groeiende belangstelling voor de golfsport is een opmerkelijk verschijnsel.',
      definition: 'opvallend',
      translation: '引人注目, 引人注目的',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'zh-TW',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈankomə(n)',
          example:
            '* De trein komt over een kwartier aan.\n* Dat akelige bericht is hard bij haar aangekomen.\n* in een maand vijf kilo aangekomen zijn',
          definition: '* komen waar je moet zijn\n* raken\n* dikker worden',
          translation: '到達, 碰到, 變胖',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'nl',
          source: 'aankomend',
          ipa: 'ˈankomənt',
          example: '* aankomende donderdag\n* een aankomend arts',
          definition: '* eerstkomend\n* toekomstig',
          translation: '即將, 未來的',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: '問題',
      sourceLanguage: 'nl',
      targetLanguage: 'zh-TW',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'het probleem',
          ipa: 'proˈblem',
          example: 'fileprobleem',
          definition: 'onwenselijke, moeilijke situatie',
          translation: '問題',
          partOfSpeech: 'noun',
          g: 'n',
          tags: [],
        },
        {
          language: 'nl',
          source: 'de vraag',
          ipa: 'vrax',
          example:
            '* vragenlijst\n* Er is veel vraag naar geschoolde arbeidskrachten.',
          definition:
            '* iets wat je zegt tegen iemand van wie je iets wilt weten\n* belangstelling voor producten, diensten, mensen enz. die je graag wilt hebben of gebruiken',
          translation: '問題, 詢問',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: '',
          example: '',
          definition: '',
          translation: '被忽略的',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˈovərslan',
          example:
            '* bij het voorlezen een hele alinea overslaan\n* Zijn stem sloeg over van de zenuwen.\n* De vlammen van de brandende schuur sloegen over op de boerderij.',
          definition:
            '* geen aandacht besteden aan (een gedeelte)\n* (van je stem) ineens veel hoger worden\n* van het ene naar het andere gaan',
          translation: '跳過, 跳升, 轉換',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  ja: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrkələk',
      example:
        'De snel groeiende belangstelling voor de golfsport is een opmerkelijk verschijnsel.',
      definition: 'opvallend',
      translation: '注目すべき',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'ja',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈankomə(n)',
          example:
            '* De trein komt over een kwartier aan.\n* Dat akelige bericht is hard bij haar aangekomen.\n* in een maand vijf kilo aangekomen zijn',
          definition: '* komen waar je moet zijn\n* raken\n* dikker worden',
          translation: '到着する, 触れる, 太る',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'nl',
          source: 'aankomend',
          ipa: 'ˈankomənt',
          example: '* aankomende donderdag\n* een aankomend arts',
          definition: '* eerstkomend\n* toekomstig',
          translation: '来るべき, 未来の',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: '質問',
      sourceLanguage: 'nl',
      targetLanguage: 'ja',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'de vraag',
          ipa: 'vrax',
          example:
            '* vragenlijst\n* Er is veel vraag naar geschoolde arbeidskrachten.',
          definition:
            '* iets wat je zegt tegen iemand van wie je iets wilt weten\n* belangstelling voor producten, diensten, mensen enz. die je graag wilt hebben of gebruiken',
          translation: '質問, 問い',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: '',
          example: '',
          definition: '',
          translation: '省略された',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˈovərslan',
          example:
            '* bij het voorlezen een hele alinea overslaan\n* Zijn stem sloeg over van de zenuwen.\n* De vlammen van de brandende schuur sloegen over op de boerderij.',
          definition:
            '* geen aandacht besteden aan (een gedeelte)\n* (van je stem) ineens veel hoger worden\n* van het ene naar het andere gaan',
          translation: '無視する, 急上昇する, 移動する',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  ru: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrkələk',
      example:
        'De snel groeiende belangstelling voor de golfsport is een opmerkelijk verschijnsel.',
      definition: 'opvallend',
      translation: 'заметный, замечательный',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'ru',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈankomə(n)',
          example:
            '* De trein komt over een kwartier aan.\n* Dat akelige bericht is hard bij haar aangekomen.\n* in een maand vijf kilo aangekomen zijn',
          definition: '* komen waar je moet zijn\n* raken\n* dikker worden',
          translation:
            'придти́, прибы́ть, прие́хать, приня́ть, порази́ть, пополне́ть, потолсте́ть, попра́виться, прибыть',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'nl',
          source: 'aankomend',
          ipa: 'ˈankomənt',
          example: '* aankomende donderdag\n* een aankomend arts',
          definition: '* eerstkomend\n* toekomstig',
          translation: 'предстоя́щий, сле́дующий, бу́дущий',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'вопрос',
      sourceLanguage: 'nl',
      targetLanguage: 'ru',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'de vraag',
          ipa: 'vrax',
          example:
            '* vragenlijst\n* Er is veel vraag naar geschoolde arbeidskrachten.',
          definition:
            '* iets wat je zegt tegen iemand van wie je iets wilt weten\n* belangstelling voor producten, diensten, mensen enz. die je graag wilt hebben of gebruiken',
          translation: 'вопрос, запрос',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: '',
          example: '',
          definition: '',
          translation: 'пропущенные',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˈovərslan',
          example:
            '* bij het voorlezen een hele alinea overslaan\n* Zijn stem sloeg over van de zenuwen.\n* De vlammen van de brandende schuur sloegen over op de boerderij.',
          definition:
            '* geen aandacht besteden aan (een gedeelte)\n* (van je stem) ineens veel hoger worden\n* van het ene naar het andere gaan',
          translation: 'пропустить, перейти',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  it: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrkələk',
      example:
        'De snel groeiende belangstelling voor de golfsport is een opmerkelijk verschijnsel.',
      definition: 'opvallend',
      translation: 'notevole, eccellente',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'it',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈankomə(n)',
          example:
            '* De trein komt over een kwartier aan.\n* Dat akelige bericht is hard bij haar aangekomen.\n* in een maand vijf kilo aangekomen zijn',
          definition: '* komen waar je moet zijn\n* raken\n* dikker worden',
          translation: 'arrivare, colpire, ingrassare',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'nl',
          source: 'aankomend',
          ipa: 'ˈankomənt',
          example: '* aankomende donderdag\n* een aankomend arts',
          definition: '* eerstkomend\n* toekomstig',
          translation: 'prossimo, futuro',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'domanda',
      sourceLanguage: 'nl',
      targetLanguage: 'it',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'de vraag',
          ipa: 'vrax',
          example:
            '* vragenlijst\n* Er is veel vraag naar geschoolde arbeidskrachten.',
          definition:
            '* iets wat je zegt tegen iemand van wie je iets wilt weten\n* belangstelling voor producten, diensten, mensen enz. die je graag wilt hebben of gebruiken',
          translation: 'domanda, richiesta',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
        {
          language: 'nl',
          source: 'ondervraging',
          ipa: '',
          example: '',
          definition: '',
          translation: 'interrogatorio',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: '',
          example: '',
          definition: '',
          translation: 'saltato',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˈovərslan',
          example:
            '* bij het voorlezen een hele alinea overslaan\n* Zijn stem sloeg over van de zenuwen.\n* De vlammen van de brandende schuur sloegen over op de boerderij.',
          definition:
            '* geen aandacht besteden aan (een gedeelte)\n* (van je stem) ineens veel hoger worden\n* van het ene naar het andere gaan',
          translation: 'saltare, tralasciare, passare',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  pt: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrkələk',
      example:
        'De snel groeiende belangstelling voor de golfsport is een opmerkelijk verschijnsel.',
      definition: 'opvallend',
      translation: 'notável, remarkável',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'pt',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈankomə(n)',
          example:
            '* De trein komt over een kwartier aan.\n* Dat akelige bericht is hard bij haar aangekomen.\n* in een maand vijf kilo aangekomen zijn',
          definition: '* komen waar je moet zijn\n* raken\n* dikker worden',
          translation: 'chegar, tocar, engordar',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'nl',
          source: 'aankomend',
          ipa: 'ˈankomənt',
          example: '* aankomende donderdag\n* een aankomend arts',
          definition: '* eerstkomend\n* toekomstig',
          translation: 'próximo, futuro',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'pergunta',
      sourceLanguage: 'nl',
      targetLanguage: 'pt',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'de vraag',
          ipa: 'vrax',
          example:
            '* vragenlijst\n* Er is veel vraag naar geschoolde arbeidskrachten.',
          definition:
            '* iets wat je zegt tegen iemand van wie je iets wilt weten\n* belangstelling voor producten, diensten, mensen enz. die je graag wilt hebben of gebruiken',
          translation: 'pergunta, interesse',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: '',
          example: '',
          definition: '',
          translation: 'omitido',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˈovərslan',
          example:
            '* bij het voorlezen een hele alinea overslaan\n* Zijn stem sloeg over van de zenuwen.\n* De vlammen van de brandende schuur sloegen over op de boerderij.',
          definition:
            '* geen aandacht besteden aan (een gedeelte)\n* (van je stem) ineens veel hoger worden\n* van het ene naar het andere gaan',
          translation: 'pular, saltar',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  ar: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrkələk',
      example:
        'De snel groeiende belangstelling voor de golfsport is een opmerkelijk verschijnsel.',
      definition: 'opvallend',
      translation: 'ملحوظ',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'ar',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈankomə(n)',
          example:
            '* De trein komt over een kwartier aan.\n* Dat akelige bericht is hard bij haar aangekomen.\n* in een maand vijf kilo aangekomen zijn',
          definition: '* komen waar je moet zijn\n* raken\n* dikker worden',
          translation: 'الوصول, الزيادة في الوزن',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'nl',
          source: 'aankomend',
          ipa: 'ˈankomənt',
          example: '* aankomende donderdag\n* een aankomend arts',
          definition: '* eerstkomend\n* toekomstig',
          translation: 'قادم, مستقبلي',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'سؤال',
      sourceLanguage: 'nl',
      targetLanguage: 'ar',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'de vraag',
          ipa: 'vrax',
          example:
            '* vragenlijst\n* Er is veel vraag naar geschoolde arbeidskrachten.',
          definition:
            '* iets wat je zegt tegen iemand van wie je iets wilt weten\n* belangstelling voor producten, diensten, mensen enz. die je graag wilt hebben of gebruiken',
          translation: 'سؤال, استفسار',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: '',
          example: '',
          definition: '',
          translation: 'المهام التي تم تخطيها',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˈovərslan',
          example:
            '* bij het voorlezen een hele alinea overslaan\n* Zijn stem sloeg over van de zenuwen.\n* De vlammen van de brandende schuur sloegen over op de boerderij.',
          definition:
            '* geen aandacht besteden aan (een gedeelte)\n* (van je stem) ineens veel hoger worden\n* van het ene naar het andere gaan',
          translation: 'تجاهل, تجاوز',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  nl: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrkələk',
      example:
        'De snel groeiende belangstelling voor de golfsport is een opmerkelijk verschijnsel.',
      definition: 'opvallend',
      translation: '',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'nl',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈankomə(n)',
          example:
            '* De trein komt over een kwartier aan.\n* Dat akelige bericht is hard bij haar aangekomen.\n* in een maand vijf kilo aangekomen zijn',
          definition: '* komen waar je moet zijn\n* raken\n* dikker worden',
          translation: '',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'nl',
          source: 'aankomend',
          ipa: 'ˈankomənt',
          example: '* aankomende donderdag\n* een aankomend arts',
          definition: '* eerstkomend\n* toekomstig',
          translation: '',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'vraag',
      sourceLanguage: 'nl',
      targetLanguage: 'nl',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'question',
          ipa: '',
          example: '',
          definition: '',
          translation: 'question',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'nl',
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
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: '',
          example: '',
          definition: '',
          translation: 'overgeslagen',
          partOfSpeech: '',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˈovərslan',
          example:
            '* bij het voorlezen een hele alinea overslaan\n* Zijn stem sloeg over van de zenuwen.\n* De vlammen van de brandende schuur sloegen over op de boerderij.',
          definition:
            '* geen aandacht besteden aan (een gedeelte)\n* (van je stem) ineens veel hoger worden\n* van het ene naar het andere gaan',
          translation: '',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  ko: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrkələk',
      example:
        'De snel groeiende belangstelling voor de golfsport is een opmerkelijk verschijnsel.',
      definition: 'opvallend',
      translation: '주목할 만한',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'ko',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈankomə(n)',
          example:
            '* De trein komt over een kwartier aan.\n* Dat akelige bericht is hard bij haar aangekomen.\n* in een maand vijf kilo aangekomen zijn',
          definition: '* komen waar je moet zijn\n* raken\n* dikker worden',
          translation: '도착하다, 닿다, 살찌다',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'nl',
          source: 'aankomend',
          ipa: 'ˈankomənt',
          example: '* aankomende donderdag\n* een aankomend arts',
          definition: '* eerstkomend\n* toekomstig',
          translation: '다가오는, 미래의',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: '질문',
      sourceLanguage: 'nl',
      targetLanguage: 'ko',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'de vraag',
          ipa: 'vrax',
          example:
            '* vragenlijst\n* Er is veel vraag naar geschoolde arbeidskrachten.',
          definition:
            '* iets wat je zegt tegen iemand van wie je iets wilt weten\n* belangstelling voor producten, diensten, mensen enz. die je graag wilt hebben of gebruiken',
          translation: '질문, 요청',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: '',
          example: '',
          definition: '',
          translation: '건너뛴',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˈovərslan',
          example:
            '* bij het voorlezen een hele alinea overslaan\n* Zijn stem sloeg over van de zenuwen.\n* De vlammen van de brandende schuur sloegen over op de boerderij.',
          definition:
            '* geen aandacht besteden aan (een gedeelte)\n* (van je stem) ineens veel hoger worden\n* van het ene naar het andere gaan',
          translation: '건너뛰다, 건너가다',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  hi: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrkələk',
      example:
        'De snel groeiende belangstelling voor de golfsport is een opmerkelijk verschijnsel.',
      definition: 'opvallend',
      translation: 'विशेष, ध्यान आकर्षित करने वाला, महत्वपूर्ण',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'hi',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈankomə(n)',
          example:
            '* De trein komt over een kwartier aan.\n* Dat akelige bericht is hard bij haar aangekomen.\n* in een maand vijf kilo aangekomen zijn',
          definition: '* komen waar je moet zijn\n* raken\n* dikker worden',
          translation: 'आना, पहुंचना, बढ़ना',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'nl',
          source: 'aankomend',
          ipa: 'ˈankomənt',
          example: '* aankomende donderdag\n* een aankomend arts',
          definition: '* eerstkomend\n* toekomstig',
          translation: 'आगामी, भविष्य का',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'सवाल',
      sourceLanguage: 'nl',
      targetLanguage: 'hi',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'de vraag',
          ipa: 'vrax',
          example:
            '* vragenlijst\n* Er is veel vraag naar geschoolde arbeidskrachten.',
          definition:
            '* iets wat je zegt tegen iemand van wie je iets wilt weten\n* belangstelling voor producten, diensten, mensen enz. die je graag wilt hebben of gebruiken',
          translation: 'प्रश्न, सवाल',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: '',
          example: '',
          definition: '',
          translation: 'छोड़ दिया गया',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˈovərslan',
          example:
            '* bij het voorlezen een hele alinea overslaan\n* Zijn stem sloeg over van de zenuwen.\n* De vlammen van de brandende schuur sloegen over op de boerderij.',
          definition:
            '* geen aandacht besteden aan (een gedeelte)\n* (van je stem) ineens veel hoger worden\n* van het ene naar het andere gaan',
          translation: 'छोड़ना, उच्च होना, जाना',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  tr: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrkələk',
      example:
        'De snel groeiende belangstelling voor de golfsport is een opmerkelijk verschijnsel.',
      definition: 'opvallend',
      translation: 'dikkate değer',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'tr',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈankomə(n)',
          example:
            '* De trein komt over een kwartier aan.\n* Dat akelige bericht is hard bij haar aangekomen.\n* in een maand vijf kilo aangekomen zijn',
          definition: '* komen waar je moet zijn\n* raken\n* dikker worden',
          translation: 'gelmek, ulaşmak, şişmanlamak, varmak',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'nl',
          source: 'aankomend',
          ipa: 'ˈankomənt',
          example: '* aankomende donderdag\n* een aankomend arts',
          definition: '* eerstkomend\n* toekomstig',
          translation: 'gelecek, yaklaşan',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'soru',
      sourceLanguage: 'nl',
      targetLanguage: 'tr',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'de vraag',
          ipa: 'vrax',
          example:
            '* vragenlijst\n* Er is veel vraag naar geschoolde arbeidskrachten.',
          definition:
            '* iets wat je zegt tegen iemand van wie je iets wilt weten\n* belangstelling voor producten, diensten, mensen enz. die je graag wilt hebben of gebruiken',
          translation: 'soru, talep',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: '',
          example: '',
          definition: '',
          translation: 'atlanan',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˈovərslan',
          example:
            '* bij het voorlezen een hele alinea overslaan\n* Zijn stem sloeg over van de zenuwen.\n* De vlammen van de brandende schuur sloegen over op de boerderij.',
          definition:
            '* geen aandacht besteden aan (een gedeelte)\n* (van je stem) ineens veel hoger worden\n* van het ene naar het andere gaan',
          translation: 'atlamak, geçmek',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  sv: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrkələk',
      example:
        'De snel groeiende belangstelling voor de golfsport is een opmerkelijk verschijnsel.',
      definition: 'opvallend',
      translation: 'anmärkningsvärd',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'sv',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈankomə(n)',
          example:
            '* De trein komt over een kwartier aan.\n* Dat akelige bericht is hard bij haar aangekomen.\n* in een maand vijf kilo aangekomen zijn',
          definition: '* komen waar je moet zijn\n* raken\n* dikker worden',
          translation: 'ankomma, nå',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'nl',
          source: 'aankomend',
          ipa: 'ˈankomənt',
          example: '* aankomende donderdag\n* een aankomend arts',
          definition: '* eerstkomend\n* toekomstig',
          translation: 'nästa, framtida',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'fråga',
      sourceLanguage: 'nl',
      targetLanguage: 'sv',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'de vraag',
          ipa: 'vrax',
          example:
            '* vragenlijst\n* Er is veel vraag naar geschoolde arbeidskrachten.',
          definition:
            '* iets wat je zegt tegen iemand van wie je iets wilt weten\n* belangstelling voor producten, diensten, mensen enz. die je graag wilt hebben of gebruiken',
          translation: 'fråga, intresse',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
        {
          language: 'nl',
          source: 'vragen',
          ipa: "'vraxə(n)",
          example:
            '* Ze keek me vragend aan.\n* (om) geld vragen\n* Het trainen van vaardigheden vraagt tijd.',
          definition:
            '* (tegen iemand) (iets) in de vorm van een vraag (1) zeggen\n* (tegen iemand) (iets) in de vorm van een verzoek zeggen\n* nodig hebben',
          translation: 'att fråga, att be, behöva',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: '',
          example: '',
          definition: '',
          translation: 'överskådade',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˈovərslan',
          example:
            '* bij het voorlezen een hele alinea overslaan\n* Zijn stem sloeg over van de zenuwen.\n* De vlammen van de brandende schuur sloegen over op de boerderij.',
          definition:
            '* geen aandacht besteden aan (een gedeelte)\n* (van je stem) ineens veel hoger worden\n* van het ene naar het andere gaan',
          translation: 'att hoppa över, att öka, att gå vidare',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  no: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrkələk',
      example:
        'De snel groeiende belangstelling voor de golfsport is een opmerkelijk verschijnsel.',
      definition: 'opvallend',
      translation: 'bemerkelsesverdig',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'no',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈankomə(n)',
          example:
            '* De trein komt over een kwartier aan.\n* Dat akelige bericht is hard bij haar aangekomen.\n* in een maand vijf kilo aangekomen zijn',
          definition: '* komen waar je moet zijn\n* raken\n* dikker worden',
          translation: 'komme, nå, øke i vekt, ankomme',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'nl',
          source: 'aankomend',
          ipa: 'ˈankomənt',
          example: '* aankomende donderdag\n* een aankomend arts',
          definition: '* eerstkomend\n* toekomstig',
          translation: 'nærstående, fremtidig',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'spørsmål',
      sourceLanguage: 'nl',
      targetLanguage: 'no',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'de vraag',
          ipa: 'vrax',
          example:
            '* vragenlijst\n* Er is veel vraag naar geschoolde arbeidskrachten.',
          definition:
            '* iets wat je zegt tegen iemand van wie je iets wilt weten\n* belangstelling voor producten, diensten, mensen enz. die je graag wilt hebben of gebruiken',
          translation: 'spørsmål, forespørsel',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: '',
          example: '',
          definition: '',
          translation: 'utelatt',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˈovərslan',
          example:
            '* bij het voorlezen een hele alinea overslaan\n* Zijn stem sloeg over van de zenuwen.\n* De vlammen van de brandende schuur sloegen over op de boerderij.',
          definition:
            '* geen aandacht besteden aan (een gedeelte)\n* (van je stem) ineens veel hoger worden\n* van het ene naar het andere gaan',
          translation:
            'å hoppe over, å bli høyere, å gå fra det ene til det andre',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  da: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrkələk',
      example:
        'De snel groeiende belangstelling voor de golfsport is een opmerkelijk verschijnsel.',
      definition: 'opvallend',
      translation: 'bemærkelsesværdig',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'da',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈankomə(n)',
          example:
            '* De trein komt over een kwartier aan.\n* Dat akelige bericht is hard bij haar aangekomen.\n* in een maand vijf kilo aangekomen zijn',
          definition: '* komen waar je moet zijn\n* raken\n* dikker worden',
          translation: 'ankomme, ramme, tage på',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'nl',
          source: 'aankomend',
          ipa: 'ˈankomənt',
          example: '* aankomende donderdag\n* een aankomend arts',
          definition: '* eerstkomend\n* toekomstig',
          translation: 'næste, fremtidig',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'spørgsmål',
      sourceLanguage: 'nl',
      targetLanguage: 'da',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'de vraag',
          ipa: 'vrax',
          example:
            '* vragenlijst\n* Er is veel vraag naar geschoolde arbeidskrachten.',
          definition:
            '* iets wat je zegt tegen iemand van wie je iets wilt weten\n* belangstelling voor producten, diensten, mensen enz. die je graag wilt hebben of gebruiken',
          translation: 'spørgsmål, interesse',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: '',
          example: '',
          definition: '',
          translation: 'forsømte',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˈovərslan',
          example:
            '* bij het voorlezen een hele alinea overslaan\n* Zijn stem sloeg over van de zenuwen.\n* De vlammen van de brandende schuur sloegen over op de boerderij.',
          definition:
            '* geen aandacht besteden aan (een gedeelte)\n* (van je stem) ineens veel hoger worden\n* van het ene naar het andere gaan',
          translation:
            'at springe over, at hæve stemmen, at gå fra det ene til det andet',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  fi: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrkələk',
      example:
        'De snel groeiende belangstelling voor de golfsport is een opmerkelijk verschijnsel.',
      definition: 'opvallend',
      translation: 'huomattava',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'fi',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈankomə(n)',
          example:
            '* De trein komt over een kwartier aan.\n* Dat akelige bericht is hard bij haar aangekomen.\n* in een maand vijf kilo aangekomen zijn',
          definition: '* komen waar je moet zijn\n* raken\n* dikker worden',
          translation: 'saapua, koskea, lihoa',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'nl',
          source: 'aankomend',
          ipa: 'ˈankomənt',
          example: '* aankomende donderdag\n* een aankomend arts',
          definition: '* eerstkomend\n* toekomstig',
          translation: 'ensimmäinen, tuleva',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'kysymys',
      sourceLanguage: 'nl',
      targetLanguage: 'fi',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'de vraag',
          ipa: 'vrax',
          example:
            '* vragenlijst\n* Er is veel vraag naar geschoolde arbeidskrachten.',
          definition:
            '* iets wat je zegt tegen iemand van wie je iets wilt weten\n* belangstelling voor producten, diensten, mensen enz. die je graag wilt hebben of gebruiken',
          translation: 'kysymys, kysyntä',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: '',
          example: '',
          definition: '',
          translation: 'ohitetut',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˈovərslan',
          example:
            '* bij het voorlezen een hele alinea overslaan\n* Zijn stem sloeg over van de zenuwen.\n* De vlammen van de brandende schuur sloegen over op de boerderij.',
          definition:
            '* geen aandacht besteden aan (een gedeelte)\n* (van je stem) ineens veel hoger worden\n* van het ene naar het andere gaan',
          translation: 'ohittaa, hypätä, siirtyä',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  fa: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrkələk',
      example:
        'De snel groeiende belangstelling voor de golfsport is een opmerkelijk verschijnsel.',
      definition: 'opvallend',
      translation: 'قابل توجه',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'fa',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈankomə(n)',
          example:
            '* De trein komt over een kwartier aan.\n* Dat akelige bericht is hard bij haar aangekomen.\n* in een maand vijf kilo aangekomen zijn',
          definition: '* komen waar je moet zijn\n* raken\n* dikker worden',
          translation: 'چاق شدن، خوردن، رسیدن',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'nl',
          source: 'aankomend',
          ipa: 'ˈankomənt',
          example: '* aankomende donderdag\n* een aankomend arts',
          definition: '* eerstkomend\n* toekomstig',
          translation: 'نزدیک، آینده',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'سوال',
      sourceLanguage: 'nl',
      targetLanguage: 'fa',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'de vraag',
          ipa: 'vrax',
          example:
            '* vragenlijst\n* Er is veel vraag naar geschoolde arbeidskrachten.',
          definition:
            '* iets wat je zegt tegen iemand van wie je iets wilt weten\n* belangstelling voor producten, diensten, mensen enz. die je graag wilt hebben of gebruiken',
          translation: 'پرسش، سوال',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: '',
          example: '',
          definition: '',
          translation: 'نادیده گرفته شده',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˈovərslan',
          example:
            '* bij het voorlezen een hele alinea overslaan\n* Zijn stem sloeg over van de zenuwen.\n* De vlammen van de brandende schuur sloegen over op de boerderij.',
          definition:
            '* geen aandacht besteden aan (een gedeelte)\n* (van je stem) ineens veel hoger worden\n* van het ene naar het andere gaan',
          translation: 'انتقال، ناگهان بالا رفتن، نادیده گرفتن',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  pl: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrkələk',
      example:
        'De snel groeiende belangstelling voor de golfsport is een opmerkelijk verschijnsel.',
      definition: 'opvallend',
      translation: 'zauważalny',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'pl',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈankomə(n)',
          example:
            '* De trein komt over een kwartier aan.\n* Dat akelige bericht is hard bij haar aangekomen.\n* in een maand vijf kilo aangekomen zijn',
          definition: '* komen waar je moet zijn\n* raken\n* dikker worden',
          translation: 'przybyć, dotknąć, przytyć',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'nl',
          source: 'aankomend',
          ipa: 'ˈankomənt',
          example: '* aankomende donderdag\n* een aankomend arts',
          definition: '* eerstkomend\n* toekomstig',
          translation: 'nadchodzący, przyszły',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'pytanie',
      sourceLanguage: 'nl',
      targetLanguage: 'pl',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'de vraag',
          ipa: 'vrax',
          example:
            '* vragenlijst\n* Er is veel vraag naar geschoolde arbeidskrachten.',
          definition:
            '* iets wat je zegt tegen iemand van wie je iets wilt weten\n* belangstelling voor producten, diensten, mensen enz. die je graag wilt hebben of gebruiken',
          translation: 'pytanie, zapytanie',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: '',
          example: '',
          definition: '',
          translation: 'pomiń',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˈovərslan',
          example:
            '* bij het voorlezen een hele alinea overslaan\n* Zijn stem sloeg over van de zenuwen.\n* De vlammen van de brandende schuur sloegen over op de boerderij.',
          definition:
            '* geen aandacht besteden aan (een gedeelte)\n* (van je stem) ineens veel hoger worden\n* van het ene naar het andere gaan',
          translation: 'pominąć, przeskoczyć, przejść',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  el: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrkələk',
      example:
        'De snel groeiende belangstelling voor de golfsport is een opmerkelijk verschijnsel.',
      definition: 'opvallend',
      translation: 'εντυπωσιακός',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'el',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈankomə(n)',
          example:
            '* De trein komt over een kwartier aan.\n* Dat akelige bericht is hard bij haar aangekomen.\n* in een maand vijf kilo aangekomen zijn',
          definition: '* komen waar je moet zijn\n* raken\n* dikker worden',
          translation: 'έρχομαι, χτυπώ, παχαίνω, φτάνω',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'nl',
          source: 'aankomend',
          ipa: 'ˈankomənt',
          example: '* aankomende donderdag\n* een aankomend arts',
          definition: '* eerstkomend\n* toekomstig',
          translation: 'ερχόμενος, μελλοντικός',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'ερώτηση',
      sourceLanguage: 'nl',
      targetLanguage: 'el',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'de vraag',
          ipa: 'vrax',
          example:
            '* vragenlijst\n* Er is veel vraag naar geschoolde arbeidskrachten.',
          definition:
            '* iets wat je zegt tegen iemand van wie je iets wilt weten\n* belangstelling voor producten, diensten, mensen enz. die je graag wilt hebben of gebruiken',
          translation: 'ερώτηση, ζήτηση',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: '',
          example: '',
          definition: '',
          translation: 'παραλειφθείσες',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˈovərslan',
          example:
            '* bij het voorlezen een hele alinea overslaan\n* Zijn stem sloeg over van de zenuwen.\n* De vlammen van de brandende schuur sloegen over op de boerderij.',
          definition:
            '* geen aandacht besteden aan (een gedeelte)\n* (van je stem) ineens veel hoger worden\n* van het ene naar het andere gaan',
          translation: 'παραλείπω, υψώνομαι, μεταβαίνω',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  he: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrkələk',
      example:
        'De snel groeiende belangstelling voor de golfsport is een opmerkelijk verschijnsel.',
      definition: 'opvallend',
      translation: 'בולט, מְרַשֵּׁם',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'he',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈankomə(n)',
          example:
            '* De trein komt over een kwartier aan.\n* Dat akelige bericht is hard bij haar aangekomen.\n* in een maand vijf kilo aangekomen zijn',
          definition: '* komen waar je moet zijn\n* raken\n* dikker worden',
          translation: 'להגיע, לגעת, להשמין, לְהַגִּיעַ',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'nl',
          source: 'aankomend',
          ipa: 'ˈankomənt',
          example: '* aankomende donderdag\n* een aankomend arts',
          definition: '* eerstkomend\n* toekomstig',
          translation: 'קרוב, עתידי',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'שְׁאֵלָה',
      sourceLanguage: 'nl',
      targetLanguage: 'he',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'de vraag',
          ipa: 'vrax',
          example:
            '* vragenlijst\n* Er is veel vraag naar geschoolde arbeidskrachten.',
          definition:
            '* iets wat je zegt tegen iemand van wie je iets wilt weten\n* belangstelling voor producten, diensten, mensen enz. die je graag wilt hebben of gebruiken',
          translation: 'שאלה, עניין, שְׁאֵלָה',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
        {
          language: 'nl',
          source: 'ondervraging',
          ipa: '',
          example: '',
          definition: '',
          translation: 'חֲקִירָה',
          partOfSpeech: 'noun',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: '',
          example: '',
          definition: '',
          translation: 'מוזנח',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˈovərslan',
          example:
            '* bij het voorlezen een hele alinea overslaan\n* Zijn stem sloeg over van de zenuwen.\n* De vlammen van de brandende schuur sloegen over op de boerderij.',
          definition:
            '* geen aandacht besteden aan (een gedeelte)\n* (van je stem) ineens veel hoger worden\n* van het ene naar het andere gaan',
          translation: 'לדלג, להחמיץ, לעבור',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  th: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrkələk',
      example:
        'De snel groeiende belangstelling voor de golfsport is een opmerkelijk verschijnsel.',
      definition: 'opvallend',
      translation: 'น่าสังเกต, น่าทึ่ง',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'th',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈankomə(n)',
          example:
            '* De trein komt over een kwartier aan.\n* Dat akelige bericht is hard bij haar aangekomen.\n* in een maand vijf kilo aangekomen zijn',
          definition: '* komen waar je moet zijn\n* raken\n* dikker worden',
          translation: 'มาถึง, แตะ, อ้วนขึ้น',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'nl',
          source: 'aankomend',
          ipa: 'ˈankomənt',
          example: '* aankomende donderdag\n* een aankomend arts',
          definition: '* eerstkomend\n* toekomstig',
          translation: 'ที่กำลังจะมา, อนาคต',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'คำถาม',
      sourceLanguage: 'nl',
      targetLanguage: 'th',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'de vraag',
          ipa: 'vrax',
          example:
            '* vragenlijst\n* Er is veel vraag naar geschoolde arbeidskrachten.',
          definition:
            '* iets wat je zegt tegen iemand van wie je iets wilt weten\n* belangstelling voor producten, diensten, mensen enz. die je graag wilt hebben of gebruiken',
          translation: 'คำถาม, ข้อสงสัย',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: '',
          example: '',
          definition: '',
          translation: 'ที่ถูกข้ามไป',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˈovərslan',
          example:
            '* bij het voorlezen een hele alinea overslaan\n* Zijn stem sloeg over van de zenuwen.\n* De vlammen van de brandende schuur sloegen over op de boerderij.',
          definition:
            '* geen aandacht besteden aan (een gedeelte)\n* (van je stem) ineens veel hoger worden\n* van het ene naar het andere gaan',
          translation: 'ข้าม, ละเว้น, เปลี่ยน',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  vi: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrkələk',
      example:
        'De snel groeiende belangstelling voor de golfsport is een opmerkelijk verschijnsel.',
      definition: 'opvallend',
      translation: 'đáng chú ý',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'vi',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈankomə(n)',
          example:
            '* De trein komt over een kwartier aan.\n* Dat akelige bericht is hard bij haar aangekomen.\n* in een maand vijf kilo aangekomen zijn',
          definition: '* komen waar je moet zijn\n* raken\n* dikker worden',
          translation: 'đến, gặp, tăng cân, đến nơi',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'nl',
          source: 'aankomend',
          ipa: 'ˈankomənt',
          example: '* aankomende donderdag\n* een aankomend arts',
          definition: '* eerstkomend\n* toekomstig',
          translation: 'sắp tới, tương lai',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'câu hỏi',
      sourceLanguage: 'nl',
      targetLanguage: 'vi',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'de vraag',
          ipa: 'vrax',
          example:
            '* vragenlijst\n* Er is veel vraag naar geschoolde arbeidskrachten.',
          definition:
            '* iets wat je zegt tegen iemand van wie je iets wilt weten\n* belangstelling voor producten, diensten, mensen enz. die je graag wilt hebben of gebruiken',
          translation: 'câu hỏi, thắc mắc',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: '',
          example: '',
          definition: '',
          translation: 'bị bỏ qua',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˈovərslan',
          example:
            '* bij het voorlezen een hele alinea overslaan\n* Zijn stem sloeg over van de zenuwen.\n* De vlammen van de brandende schuur sloegen over op de boerderij.',
          definition:
            '* geen aandacht besteden aan (een gedeelte)\n* (van je stem) ineens veel hoger worden\n* van het ene naar het andere gaan',
          translation: 'bỏ qua, nhảy lên, chuyển tiếp',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  id: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrkələk',
      example:
        'De snel groeiende belangstelling voor de golfsport is een opmerkelijk verschijnsel.',
      definition: 'opvallend',
      translation: 'menarik, mencolok',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'id',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈankomə(n)',
          example:
            '* De trein komt over een kwartier aan.\n* Dat akelige bericht is hard bij haar aangekomen.\n* in een maand vijf kilo aangekomen zijn',
          definition: '* komen waar je moet zijn\n* raken\n* dikker worden',
          translation: 'datang, menyentuh, menambah berat badan, tiba',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'nl',
          source: 'aankomend',
          ipa: 'ˈankomənt',
          example: '* aankomende donderdag\n* een aankomend arts',
          definition: '* eerstkomend\n* toekomstig',
          translation: 'akan datang, masa depan',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'pertanyaan',
      sourceLanguage: 'nl',
      targetLanguage: 'id',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'de vraag',
          ipa: 'vrax',
          example:
            '* vragenlijst\n* Er is veel vraag naar geschoolde arbeidskrachten.',
          definition:
            '* iets wat je zegt tegen iemand van wie je iets wilt weten\n* belangstelling voor producten, diensten, mensen enz. die je graag wilt hebben of gebruiken',
          translation: 'pertanyaan, minat',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: '',
          example: '',
          definition: '',
          translation: 'terlewatkan',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˈovərslan',
          example:
            '* bij het voorlezen een hele alinea overslaan\n* Zijn stem sloeg over van de zenuwen.\n* De vlammen van de brandende schuur sloegen over op de boerderij.',
          definition:
            '* geen aandacht besteden aan (een gedeelte)\n* (van je stem) ineens veel hoger worden\n* van het ene naar het andere gaan',
          translation: 'mengabaikan, melompati, berpindah',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  ms: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrkələk',
      example:
        'De snel groeiende belangstelling voor de golfsport is een opmerkelijk verschijnsel.',
      definition: 'opvallend',
      translation: 'menarik',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'ms',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈankomə(n)',
          example:
            '* De trein komt over een kwartier aan.\n* Dat akelige bericht is hard bij haar aangekomen.\n* in een maand vijf kilo aangekomen zijn',
          definition: '* komen waar je moet zijn\n* raken\n* dikker worden',
          translation: 'datang, mendekati, menjadi lebih gemuk, tiba',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'nl',
          source: 'aankomend',
          ipa: 'ˈankomənt',
          example: '* aankomende donderdag\n* een aankomend arts',
          definition: '* eerstkomend\n* toekomstig',
          translation: 'akan datang, masa depan',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'soalan',
      sourceLanguage: 'nl',
      targetLanguage: 'ms',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'de vraag',
          ipa: 'vrax',
          example:
            '* vragenlijst\n* Er is veel vraag naar geschoolde arbeidskrachten.',
          definition:
            '* iets wat je zegt tegen iemand van wie je iets wilt weten\n* belangstelling voor producten, diensten, mensen enz. die je graag wilt hebben of gebruiken',
          translation: 'soalan, pertanyaan',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: '',
          example: '',
          definition: '',
          translation: 'terlepas',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˈovərslan',
          example:
            '* bij het voorlezen een hele alinea overslaan\n* Zijn stem sloeg over van de zenuwen.\n* De vlammen van de brandende schuur sloegen over op de boerderij.',
          definition:
            '* geen aandacht besteden aan (een gedeelte)\n* (van je stem) ineens veel hoger worden\n* van het ene naar het andere gaan',
          translation: 'mengabaikan, melompat, berpindah',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
  uk: {
    welcomeScreenCard: {
      language: 'nl',
      source: 'opmerkelijk',
      ipa: 'ɔpˈmɛrkələk',
      example:
        'De snel groeiende belangstelling voor de golfsport is een opmerkelijk verschijnsel.',
      definition: 'opvallend',
      translation: 'помітний',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'aankomen',
      sourceLanguage: 'nl',
      targetLanguage: 'uk',
      isReversed: false,
      results: [
        {
          language: 'nl',
          source: 'aankomen',
          ipa: 'ˈankomə(n)',
          example:
            '* De trein komt over een kwartier aan.\n* Dat akelige bericht is hard bij haar aangekomen.\n* in een maand vijf kilo aangekomen zijn',
          definition: '* komen waar je moet zijn\n* raken\n* dikker worden',
          translation: 'приходити, достигати, товстіти, прибути',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'nl',
          source: 'aankomend',
          ipa: 'ˈankomənt',
          example: '* aankomende donderdag\n* een aankomend arts',
          definition: '* eerstkomend\n* toekomstig',
          translation: 'найближчий, майбутній',
          partOfSpeech: 'adjective',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'запитання',
      sourceLanguage: 'nl',
      targetLanguage: 'uk',
      isReversed: true,
      results: [
        {
          language: 'nl',
          source: 'de vraag',
          ipa: 'vrax',
          example:
            '* vragenlijst\n* Er is veel vraag naar geschoolde arbeidskrachten.',
          definition:
            '* iets wat je zegt tegen iemand van wie je iets wilt weten\n* belangstelling voor producten, diensten, mensen enz. die je graag wilt hebben of gebruiken',
          translation: 'питання, запит',
          partOfSpeech: 'noun',
          g: 'f-m',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
      results: [
        {
          language: 'nl',
          source: 'overgeslagen',
          ipa: '',
          example: '',
          definition: '',
          translation: 'пропущений',
          partOfSpeech: 'adjective',
          tags: [],
        },
        {
          language: 'nl',
          source: 'overslaan',
          ipa: 'ˈovərslan',
          example:
            '* bij het voorlezen een hele alinea overslaan\n* Zijn stem sloeg over van de zenuwen.\n* De vlammen van de brandende schuur sloegen over op de boerderij.',
          definition:
            '* geen aandacht besteden aan (een gedeelte)\n* (van je stem) ineens veel hoger worden\n* van het ene naar het andere gaan',
          translation: 'пропустити, перейти',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
  },
};
