import { MobileOnboardingDataCollection } from '@vocably/model';

export const onboardingCollection: MobileOnboardingDataCollection = {
  en: {
    welcomeScreenCard: {
      language: 'es',
      source: 'notable',
      ipa: "no'taβle",
      example:
        '* comportamiento notable\n* un científico notable\n* Es notable el crecimiento de tu hijo.',
      definition:
        '* que se destaca del resto por su importancia o interés\n* que se destaca en una profesión o ámbito determinado\n* que puede ser percibido',
      translation: 'outstanding, distinguished, remarkable, notable',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'llegar',
      sourceLanguage: 'es',
      targetLanguage: 'en',
      isReversed: false,
      results: [
        {
          language: 'es',
          source: 'llegar',
          ipa: "ʎe'γaɾ",
          example:
            '* Llegamos al puerto a mediodía.\n* Llegó el día de la boda.\n* Esta chica llegará lejos.',
          definition:
            '* pasar a estar en el término de un desplazamiento o trayectoria\n* producirse o aparecer un suceso o circunstancia\n* alcanzar un objetivo determinado, en especial profesional',
          translation:
            'to arrive, to come, to become, to reach, to come/go up/down to, to manage, to mean something, to say something, to get through to',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'es',
          source: 'llegarse',
          ipa: "ʎe'γaɾse",
          example: 'Llégate a por el periódico.',
          definition: 'ir hasta un lugar que está próximo',
          translation: 'to go round',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'question',
      sourceLanguage: 'es',
      targetLanguage: 'en',
      isReversed: true,
      results: [
        {
          language: 'es',
          source: 'la pregunta',
          ipa: "pɾe'γunta",
          example: '* hacer una pregunta\n* un examen con diez preguntas',
          definition:
            '* enunciado interrogativo que se emite con intención de obtener una información\n* cada una de las actividades de un examen',
          translation: 'question',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'es',
          source: 'la cuestión',
          ipa: "kwes'tjon",
          example:
            '* La cuestión era difícil de solucionar.\n* Es una cuestión muy difícil de resolver.',
          definition:
            '* pregunta incluida en un cuestionario\n* asunto o tema de interés general o polémico',
          translation: 'question',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Las *tareas* de mantenimiento que más comúnmente se pasan por alto son las relacionadas con la lucha contra el polvo. Su casa está llena de filtros y conductos de ventilación que capturan el polvo y otras sustancias, lo que aumenta la vida útil de sus sistemas y mantiene el aire limpio. Al menos una vez al año, debe limpiar y reemplazar lo siguiente:',
      results: [
        {
          language: 'es',
          source: 'la tarea',
          ipa: "ta'ɾea",
          example:
            '* una tarea monótona\n* Debes hacer la tarea antes de acostarte.',
          definition:
            '* trabajo o labor que realiza una persona\n* trabajo que debe terminarse en un tiempo determinado',
          translation: 'task, job, homework',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  es: {
    welcomeScreenCard: {
      language: 'es',
      source: 'notable',
      ipa: "no'taβle",
      example:
        '* comportamiento notable\n* un científico notable\n* Es notable el crecimiento de tu hijo.',
      definition:
        '* que se destaca del resto por su importancia o interés\n* que se destaca en una profesión o ámbito determinado\n* que puede ser percibido',
      translation: '',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'llegar',
      sourceLanguage: 'es',
      targetLanguage: 'es',
      isReversed: false,
      results: [
        {
          language: 'es',
          source: 'llegar',
          ipa: "ʎe'γaɾ",
          example:
            '* Llegamos al puerto a mediodía.\n* Llegó el día de la boda.\n* Esta chica llegará lejos.',
          definition:
            '* pasar a estar en el término de un desplazamiento o trayectoria\n* producirse o aparecer un suceso o circunstancia\n* alcanzar un objetivo determinado, en especial profesional',
          translation: '',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'es',
          source: 'la llegada',
          ipa: "ʎe'γaða",
          example:
            '* Esperamos la llegada de los huéspedes.\n* Cruzó la llegada y se desplomó.',
          definition:
            '* acción de alcanzar el término de un desplazamiento\n* meta de una carrera',
          translation: '',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'pregunta',
      sourceLanguage: 'es',
      targetLanguage: 'es',
      isReversed: true,
      results: [
        {
          language: 'es',
          source: 'question',
          ipa: '',
          example: '',
          definition: '',
          translation: 'question',
          partOfSpeech: 'noun',
          tags: [],
        },
        {
          language: 'es',
          source: 'ask',
          ipa: '',
          example: '',
          definition: '',
          translation: 'ask',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Las *tareas* de mantenimiento que más comúnmente se pasan por alto son las relacionadas con la lucha contra el polvo. Su casa está llena de filtros y conductos de ventilación que capturan el polvo y otras sustancias, lo que aumenta la vida útil de sus sistemas y mantiene el aire limpio. Al menos una vez al año, debe limpiar y reemplazar lo siguiente:',
      results: [
        {
          language: 'es',
          source: 'la tarea',
          ipa: "ta'ɾea",
          example:
            '* una tarea monótona\n* Debes hacer la tarea antes de acostarte.',
          definition:
            '* trabajo o labor que realiza una persona\n* trabajo que debe terminarse en un tiempo determinado',
          translation: '',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  fr: {
    welcomeScreenCard: {
      language: 'es',
      source: 'notable',
      ipa: "no'taβle",
      example:
        '* comportamiento notable\n* un científico notable\n* Es notable el crecimiento de tu hijo.',
      definition:
        '* que se destaca del resto por su importancia o interés\n* que se destaca en una profesión o ámbito determinado\n* que puede ser percibido',
      translation: 'remarquable, notable',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'llegar',
      sourceLanguage: 'es',
      targetLanguage: 'fr',
      isReversed: false,
      results: [
        {
          language: 'es',
          source: 'llegar',
          ipa: "ʎe'γaɾ",
          example:
            '* Llegamos al puerto a mediodía.\n* Llegó el día de la boda.\n* Esta chica llegará lejos.',
          definition:
            '* pasar a estar en el término de un desplazamiento o trayectoria\n* producirse o aparecer un suceso o circunstancia\n* alcanzar un objetivo determinado, en especial profesional',
          translation: 'arriver, atteindre',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'es',
          source: 'llegarse',
          ipa: "ʎe'γaɾse",
          example: 'Llégate a por el periódico.',
          definition: 'ir hasta un lugar que está próximo',
          translation: "s'approcher",
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'question',
      sourceLanguage: 'es',
      targetLanguage: 'fr',
      isReversed: true,
      results: [
        {
          language: 'es',
          source: 'la pregunta',
          ipa: "pɾe'γunta",
          example: '* hacer una pregunta\n* un examen con diez preguntas',
          definition:
            '* enunciado interrogativo que se emite con intención de obtener una información\n* cada una de las actividades de un examen',
          translation: 'question, interrogation',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'es',
          source: 'la cuestión',
          ipa: "kwes'tjon",
          example:
            '* La cuestión era difícil de solucionar.\n* Es una cuestión muy difícil de resolver.',
          definition:
            '* pregunta incluida en un cuestionario\n* asunto o tema de interés general o polémico',
          translation: 'question, sujet',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Las *tareas* de mantenimiento que más comúnmente se pasan por alto son las relacionadas con la lucha contra el polvo. Su casa está llena de filtros y conductos de ventilación que capturan el polvo y otras sustancias, lo que aumenta la vida útil de sus sistemas y mantiene el aire limpio. Al menos una vez al año, debe limpiar y reemplazar lo siguiente:',
      results: [
        {
          language: 'es',
          source: 'la tarea',
          ipa: "ta'ɾea",
          example:
            '* una tarea monótona\n* Debes hacer la tarea antes de acostarte.',
          definition:
            '* trabajo o labor que realiza una persona\n* trabajo que debe terminarse en un tiempo determinado',
          translation: 'tâche, devoir',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  de: {
    welcomeScreenCard: {
      language: 'es',
      source: 'notable',
      ipa: "no'taβle",
      example:
        '* comportamiento notable\n* un científico notable\n* Es notable el crecimiento de tu hijo.',
      definition:
        '* que se destaca del resto por su importancia o interés\n* que se destaca en una profesión o ámbito determinado\n* que puede ser percibido',
      translation: 'bedeutend, auffällig, wahrnehmbar, bemerkenswert',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'llegar',
      sourceLanguage: 'es',
      targetLanguage: 'de',
      isReversed: false,
      results: [
        {
          language: 'es',
          source: 'llegar',
          ipa: "ʎe'γaɾ",
          example:
            '* Llegamos al puerto a mediodía.\n* Llegó el día de la boda.\n* Esta chica llegará lejos.',
          definition:
            '* pasar a estar en el término de un desplazamiento o trayectoria\n* producirse o aparecer un suceso o circunstancia\n* alcanzar un objetivo determinado, en especial profesional',
          translation: 'ankommen, eintrafen, erreichen',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'es',
          source: 'llegarse',
          ipa: "ʎe'γaɾse",
          example: 'Llégate a por el periódico.',
          definition: 'ir hasta un lugar que está próximo',
          translation: 'hingehen',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'frage',
      sourceLanguage: 'es',
      targetLanguage: 'de',
      isReversed: true,
      results: [
        {
          language: 'es',
          source: 'la pregunta',
          ipa: "pɾe'γunta",
          example: '* hacer una pregunta\n* un examen con diez preguntas',
          definition:
            '* enunciado interrogativo que se emite con intención de obtener una información\n* cada una de las actividades de un examen',
          translation: 'Frage, Aufgabe',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'es',
          source: 'el interrogante',
          ipa: "intero'γante",
          example:
            '* El orador respondió a los interrogantes del público una vez terminada la conferencia.\n* Su espíritu estaba lleno de interrogantes de índole religiosa.',
          definition:
            '* enunciado emitido con intenciones de obtener una información de su receptor\n* cuestión desconocida que genera dudas',
          translation: 'Frage, Unklarheit, Fragezeichen',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Las *tareas* de mantenimiento que más comúnmente se pasan por alto son las relacionadas con la lucha contra el polvo. Su casa está llena de filtros y conductos de ventilación que capturan el polvo y otras sustancias, lo que aumenta la vida útil de sus sistemas y mantiene el aire limpio. Al menos una vez al año, debe limpiar y reemplazar lo siguiente:',
      results: [
        {
          language: 'es',
          source: 'la tarea',
          ipa: "ta'ɾea",
          example:
            '* una tarea monótona\n* Debes hacer la tarea antes de acostarte.',
          definition:
            '* trabajo o labor que realiza una persona\n* trabajo que debe terminarse en un tiempo determinado',
          translation: 'Aufgabe, Arbeit',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  zh: {
    welcomeScreenCard: {
      language: 'es',
      source: 'notable',
      ipa: "no'taβle",
      example:
        '* comportamiento notable\n* un científico notable\n* Es notable el crecimiento de tu hijo.',
      definition:
        '* que se destaca del resto por su importancia o interés\n* que se destaca en una profesión o ámbito determinado\n* que puede ser percibido',
      translation: '显著, 卓越, 可察觉, 显著的',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'llegar',
      sourceLanguage: 'es',
      targetLanguage: 'zh',
      isReversed: false,
      results: [
        {
          language: 'es',
          source: 'llegar',
          ipa: "ʎe'γaɾ",
          example:
            '* Llegamos al puerto a mediodía.\n* Llegó el día de la boda.\n* Esta chica llegará lejos.',
          definition:
            '* pasar a estar en el término de un desplazamiento o trayectoria\n* producirse o aparecer un suceso o circunstancia\n* alcanzar un objetivo determinado, en especial profesional',
          translation: '到达, 出现, 达到',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'es',
          source: 'llegarse',
          ipa: "ʎe'γaɾse",
          example: 'Llégate a por el periódico.',
          definition: 'ir hasta un lugar que está próximo',
          translation: '到达',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: '问题',
      sourceLanguage: 'es',
      targetLanguage: 'zh',
      isReversed: true,
      results: [
        {
          language: 'es',
          source: 'la pregunta',
          ipa: "pɾe'γunta",
          example: '* hacer una pregunta\n* un examen con diez preguntas',
          definition:
            '* enunciado interrogativo que se emite con intención de obtener una información\n* cada una de las actividades de un examen',
          translation: '问题, 考试题',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'es',
          source: 'el problema',
          ipa: "pɾo'βlema",
          example:
            '* plantear un problema\n* Resuelvan estos problemas como deberes.\n* Tiene problemas económicos.',
          definition:
            '* cuestión difícil que se intenta resolver o explicar\n* ejercicio consistente en encontrar un dato desconocido a partir de otros conocidos\n* conjunto de circunstancias que dificultan alcanzar un fin',
          translation: '问题, 难题',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Las *tareas* de mantenimiento que más comúnmente se pasan por alto son las relacionadas con la lucha contra el polvo. Su casa está llena de filtros y conductos de ventilación que capturan el polvo y otras sustancias, lo que aumenta la vida útil de sus sistemas y mantiene el aire limpio. Al menos una vez al año, debe limpiar y reemplazar lo siguiente:',
      results: [
        {
          language: 'es',
          source: 'la tarea',
          ipa: "ta'ɾea",
          example:
            '* una tarea monótona\n* Debes hacer la tarea antes de acostarte.',
          definition:
            '* trabajo o labor que realiza una persona\n* trabajo que debe terminarse en un tiempo determinado',
          translation: '任务, 作业',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  'zh-TW': {
    welcomeScreenCard: {
      language: 'es',
      source: 'notable',
      ipa: "no'taβle",
      example:
        '* comportamiento notable\n* un científico notable\n* Es notable el crecimiento de tu hijo.',
      definition:
        '* que se destaca del resto por su importancia o interés\n* que se destaca en una profesión o ámbito determinado\n* que puede ser percibido',
      translation: '顯著, 卓越, 明顯, 著名的',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'llegar',
      sourceLanguage: 'es',
      targetLanguage: 'zh-TW',
      isReversed: false,
      results: [
        {
          language: 'es',
          source: 'llegar',
          ipa: "ʎe'γaɾ",
          example:
            '* Llegamos al puerto a mediodía.\n* Llegó el día de la boda.\n* Esta chica llegará lejos.',
          definition:
            '* pasar a estar en el término de un desplazamiento o trayectoria\n* producirse o aparecer un suceso o circunstancia\n* alcanzar un objetivo determinado, en especial profesional',
          translation: '到達, 出現, 達成',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'es',
          source: 'llegarse',
          ipa: "ʎe'γaɾse",
          example: 'Llégate a por el periódico.',
          definition: 'ir hasta un lugar que está próximo',
          translation: '到達',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: '問題',
      sourceLanguage: 'es',
      targetLanguage: 'zh-TW',
      isReversed: true,
      results: [
        {
          language: 'es',
          source: 'el problema',
          ipa: "pɾo'βlema",
          example:
            '* plantear un problema\n* Resuelvan estos problemas como deberes.\n* Tiene problemas económicos.',
          definition:
            '* cuestión difícil que se intenta resolver o explicar\n* ejercicio consistente en encontrar un dato desconocido a partir de otros conocidos\n* conjunto de circunstancias que dificultan alcanzar un fin',
          translation: '問題, 困難',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
        {
          language: 'es',
          source: 'la cuestión',
          ipa: "kwes'tjon",
          example:
            '* La cuestión era difícil de solucionar.\n* Es una cuestión muy difícil de resolver.',
          definition:
            '* pregunta incluida en un cuestionario\n* asunto o tema de interés general o polémico',
          translation: '問題, 議題',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Las *tareas* de mantenimiento que más comúnmente se pasan por alto son las relacionadas con la lucha contra el polvo. Su casa está llena de filtros y conductos de ventilación que capturan el polvo y otras sustancias, lo que aumenta la vida útil de sus sistemas y mantiene el aire limpio. Al menos una vez al año, debe limpiar y reemplazar lo siguiente:',
      results: [
        {
          language: 'es',
          source: 'la tarea',
          ipa: "ta'ɾea",
          example:
            '* una tarea monótona\n* Debes hacer la tarea antes de acostarte.',
          definition:
            '* trabajo o labor que realiza una persona\n* trabajo que debe terminarse en un tiempo determinado',
          translation: '工作, 任務',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  ja: {
    welcomeScreenCard: {
      language: 'es',
      source: 'notable',
      ipa: "no'taβle",
      example:
        '* comportamiento notable\n* un científico notable\n* Es notable el crecimiento de tu hijo.',
      definition:
        '* que se destaca del resto por su importancia o interés\n* que se destaca en una profesión o ámbito determinado\n* que puede ser percibido',
      translation:
        '注目（ちゅうもく）に値（あたい）する, 高名（こうめい）な, 目（め）を見張（みは）る, 注目すべき',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'llegar',
      sourceLanguage: 'es',
      targetLanguage: 'ja',
      isReversed: false,
      results: [
        {
          language: 'es',
          source: 'llegar',
          ipa: "ʎe'γaɾ",
          example:
            '* Llegamos al puerto a mediodía.\n* Llegó el día de la boda.\n* Esta chica llegará lejos.',
          definition:
            '* pasar a estar en el término de un desplazamiento o trayectoria\n* producirse o aparecer un suceso o circunstancia\n* alcanzar un objetivo determinado, en especial profesional',
          translation:
            '着（つ）く, 到達（とうちゃく）する、来（く）る, 到達（とうたつ）する, 到達（とうたつ）する、来（く）る, ～するに至（いた）る, 到達（とうたつ）する、並（なら）ぶ, 響（ひび）く, 到着する',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'es',
          source: 'llegarse',
          ipa: "ʎe'γaɾse",
          example: 'Llégate a por el periódico.',
          definition: 'ir hasta un lugar que está próximo',
          translation: '近（ちか）づく、寄（よ）る',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: '質問',
      sourceLanguage: 'es',
      targetLanguage: 'ja',
      isReversed: true,
      results: [
        {
          language: 'es',
          source: 'la pregunta',
          ipa: "pɾe'γunta",
          example: '* hacer una pregunta\n* un examen con diez preguntas',
          definition:
            '* enunciado interrogativo que se emite con intención de obtener una información\n* cada una de las actividades de un examen',
          translation:
            '質問（しつもん） 、問（と）い, 問題（もんだい） 、質問（しつもん）',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'es',
          source: 'el interrogante',
          ipa: "intero'γante",
          example:
            '* El orador respondió a los interrogantes del público una vez terminada la conferencia.\n* Su espíritu estaba lleno de interrogantes de índole religiosa.',
          definition:
            '* enunciado emitido con intenciones de obtener una información de su receptor\n* cuestión desconocida que genera dudas',
          translation: '疑問, 質問',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Las *tareas* de mantenimiento que más comúnmente se pasan por alto son las relacionadas con la lucha contra el polvo. Su casa está llena de filtros y conductos de ventilación que capturan el polvo y otras sustancias, lo que aumenta la vida útil de sus sistemas y mantiene el aire limpio. Al menos una vez al año, debe limpiar y reemplazar lo siguiente:',
      results: [
        {
          language: 'es',
          source: 'la tarea',
          ipa: "ta'ɾea",
          example:
            '* una tarea monótona\n* Debes hacer la tarea antes de acostarte.',
          definition:
            '* trabajo o labor que realiza una persona\n* trabajo que debe terminarse en un tiempo determinado',
          translation:
            '仕事（しごと）、作業（さぎょう）, 仕事（しごと）、宿題（しゅくだい）、課題（かだい）, タスク',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  ru: {
    welcomeScreenCard: {
      language: 'es',
      source: 'notable',
      ipa: "no'taβle",
      example:
        '* comportamiento notable\n* un científico notable\n* Es notable el crecimiento de tu hijo.',
      definition:
        '* que se destaca del resto por su importancia o interés\n* que se destaca en una profesión o ámbito determinado\n* que puede ser percibido',
      translation: 'заметный, выдающийся, значительный',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'llegar',
      sourceLanguage: 'es',
      targetLanguage: 'ru',
      isReversed: false,
      results: [
        {
          language: 'es',
          source: 'llegar',
          ipa: "ʎe'γaɾ",
          example:
            '* Llegamos al puerto a mediodía.\n* Llegó el día de la boda.\n* Esta chica llegará lejos.',
          definition:
            '* pasar a estar en el término de un desplazamiento o trayectoria\n* producirse o aparecer un suceso o circunstancia\n* alcanzar un objetivo determinado, en especial profesional',
          translation: 'прибыть, достигнуть, наступить, приходить',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'es',
          source: 'llegarse',
          ipa: "ʎe'γaɾse",
          example: 'Llégate a por el periódico.',
          definition: 'ir hasta un lugar que está próximo',
          translation: 'подойти',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'вопрос',
      sourceLanguage: 'es',
      targetLanguage: 'ru',
      isReversed: true,
      results: [
        {
          language: 'es',
          source: 'la pregunta',
          ipa: "pɾe'γunta",
          example: '* hacer una pregunta\n* un examen con diez preguntas',
          definition:
            '* enunciado interrogativo que se emite con intención de obtener una información\n* cada una de las actividades de un examen',
          translation: 'вопрос, задание',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'es',
          source: 'el interrogante',
          ipa: "intero'γante",
          example:
            '* El orador respondió a los interrogantes del público una vez terminada la conferencia.\n* Su espíritu estaba lleno de interrogantes de índole religiosa.',
          definition:
            '* enunciado emitido con intenciones de obtener una información de su receptor\n* cuestión desconocida que genera dudas',
          translation: 'вопрос, неизвестность',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Las *tareas* de mantenimiento que más comúnmente se pasan por alto son las relacionadas con la lucha contra el polvo. Su casa está llena de filtros y conductos de ventilación que capturan el polvo y otras sustancias, lo que aumenta la vida útil de sus sistemas y mantiene el aire limpio. Al menos una vez al año, debe limpiar y reemplazar lo siguiente:',
      results: [
        {
          language: 'es',
          source: 'la tarea',
          ipa: "ta'ɾea",
          example:
            '* una tarea monótona\n* Debes hacer la tarea antes de acostarte.',
          definition:
            '* trabajo o labor que realiza una persona\n* trabajo que debe terminarse en un tiempo determinado',
          translation: 'задача, работа',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  it: {
    welcomeScreenCard: {
      language: 'es',
      source: 'notable',
      ipa: "no'taβle",
      example:
        '* comportamiento notable\n* un científico notable\n* Es notable el crecimiento de tu hijo.',
      definition:
        '* que se destaca del resto por su importancia o interés\n* que se destaca en una profesión o ámbito determinado\n* que puede ser percibido',
      translation: 'notevole, significativo',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'llegar',
      sourceLanguage: 'es',
      targetLanguage: 'it',
      isReversed: false,
      results: [
        {
          language: 'es',
          source: 'llegar',
          ipa: "ʎe'γaɾ",
          example:
            '* Llegamos al puerto a mediodía.\n* Llegó el día de la boda.\n* Esta chica llegará lejos.',
          definition:
            '* pasar a estar en el término de un desplazamiento o trayectoria\n* producirse o aparecer un suceso o circunstancia\n* alcanzar un objetivo determinado, en especial profesional',
          translation: 'arrivare, giungere',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'es',
          source: 'llegarse',
          ipa: "ʎe'γaɾse",
          example: 'Llégate a por el periódico.',
          definition: 'ir hasta un lugar que está próximo',
          translation: 'arrivare',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'domanda',
      sourceLanguage: 'es',
      targetLanguage: 'it',
      isReversed: true,
      results: [
        {
          language: 'es',
          source: 'la pregunta',
          ipa: "pɾe'γunta",
          example: '* hacer una pregunta\n* un examen con diez preguntas',
          definition:
            '* enunciado interrogativo que se emite con intención de obtener una información\n* cada una de las actividades de un examen',
          translation: 'domanda, quesito',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'es',
          source: 'la demanda',
          ipa: "de'manða",
          example:
            '* Convocaron una huelga en demanda de mejoras salariales.\n* demandas estructurales\n* El candidato respondió a las demandas del auditorio.',
          definition:
            '* petición o solicitud de reclamo\n* necesidad de alguna cosa o derivada de ella\n* pedido de información',
          translation: 'richiesta, domanda, reclamo',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Las *tareas* de mantenimiento que más comúnmente se pasan por alto son las relacionadas con la lucha contra el polvo. Su casa está llena de filtros y conductos de ventilación que capturan el polvo y otras sustancias, lo que aumenta la vida útil de sus sistemas y mantiene el aire limpio. Al menos una vez al año, debe limpiar y reemplazar lo siguiente:',
      results: [
        {
          language: 'es',
          source: 'la tarea',
          ipa: "ta'ɾea",
          example:
            '* una tarea monótona\n* Debes hacer la tarea antes de acostarte.',
          definition:
            '* trabajo o labor que realiza una persona\n* trabajo que debe terminarse en un tiempo determinado',
          translation: 'compito, lavoro',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  pt: {
    welcomeScreenCard: {
      language: 'es',
      source: 'notável',
      ipa: '',
      example: '',
      definition: '',
      translation: 'notável',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'llegar',
      sourceLanguage: 'es',
      targetLanguage: 'pt',
      isReversed: false,
      results: [
        {
          language: 'es',
          source: 'llegar',
          ipa: "ʎe'γaɾ",
          example:
            '* Llegamos al puerto a mediodía.\n* Llegó el día de la boda.\n* Esta chica llegará lejos.',
          definition:
            '* pasar a estar en el término de un desplazamiento o trayectoria\n* producirse o aparecer un suceso o circunstancia\n* alcanzar un objetivo determinado, en especial profesional',
          translation: 'chegar, alcançar, impressionar',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'es',
          source: 'llegarse',
          ipa: "ʎe'γaɾse",
          example: 'Llégate a por el periódico.',
          definition: 'ir hasta un lugar que está próximo',
          translation: 'aproximar-se',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'pergunta',
      sourceLanguage: 'es',
      targetLanguage: 'pt',
      isReversed: true,
      results: [
        {
          language: 'es',
          source: 'la pregunta',
          ipa: "pɾe'γunta",
          example: '* hacer una pregunta\n* un examen con diez preguntas',
          definition:
            '* enunciado interrogativo que se emite con intención de obtener una información\n* cada una de las actividades de un examen',
          translation: 'pergunta',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Las *tareas* de mantenimiento que más comúnmente se pasan por alto son las relacionadas con la lucha contra el polvo. Su casa está llena de filtros y conductos de ventilación que capturan el polvo y otras sustancias, lo que aumenta la vida útil de sus sistemas y mantiene el aire limpio. Al menos una vez al año, debe limpiar y reemplazar lo siguiente:',
      results: [
        {
          language: 'es',
          source: 'la tarea',
          ipa: "ta'ɾea",
          example:
            '* una tarea monótona\n* Debes hacer la tarea antes de acostarte.',
          definition:
            '* trabajo o labor que realiza una persona\n* trabajo que debe terminarse en un tiempo determinado',
          translation: 'tarefa',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  ar: {
    welcomeScreenCard: {
      language: 'es',
      source: 'notable',
      ipa: "no'taβle",
      example:
        '* comportamiento notable\n* un científico notable\n* Es notable el crecimiento de tu hijo.',
      definition:
        '* que se destaca del resto por su importancia o interés\n* que se destaca en una profesión o ámbito determinado\n* que puede ser percibido',
      translation: 'بارز, ملحوظ',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'llegar',
      sourceLanguage: 'es',
      targetLanguage: 'ar',
      isReversed: false,
      results: [
        {
          language: 'es',
          source: 'llegar',
          ipa: "ʎe'γaɾ",
          example:
            '* Llegamos al puerto a mediodía.\n* Llegó el día de la boda.\n* Esta chica llegará lejos.',
          definition:
            '* pasar a estar en el término de un desplazamiento o trayectoria\n* producirse o aparecer un suceso o circunstancia\n* alcanzar un objetivo determinado, en especial profesional',
          translation: 'الوصول, تحقيق الهدف, يصل',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'es',
          source: 'llegarse',
          ipa: "ʎe'γaɾse",
          example: 'Llégate a por el periódico.',
          definition: 'ir hasta un lugar que está próximo',
          translation: 'الوصول',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'سؤال',
      sourceLanguage: 'es',
      targetLanguage: 'ar',
      isReversed: true,
      results: [
        {
          language: 'es',
          source: 'la pregunta',
          ipa: "pɾe'γunta",
          example: '* hacer una pregunta\n* un examen con diez preguntas',
          definition:
            '* enunciado interrogativo que se emite con intención de obtener una información\n* cada una de las actividades de un examen',
          translation: 'سؤال, اختبار',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Las *tareas* de mantenimiento que más comúnmente se pasan por alto son las relacionadas con la lucha contra el polvo. Su casa está llena de filtros y conductos de ventilación que capturan el polvo y otras sustancias, lo que aumenta la vida útil de sus sistemas y mantiene el aire limpio. Al menos una vez al año, debe limpiar y reemplazar lo siguiente:',
      results: [
        {
          language: 'es',
          source: 'la tarea',
          ipa: "ta'ɾea",
          example:
            '* una tarea monótona\n* Debes hacer la tarea antes de acostarte.',
          definition:
            '* trabajo o labor que realiza una persona\n* trabajo que debe terminarse en un tiempo determinado',
          translation: 'مهمة, وظيفة',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  nl: {
    welcomeScreenCard: {
      language: 'es',
      source: 'notable',
      ipa: "no'taβle",
      example:
        '* comportamiento notable\n* un científico notable\n* Es notable el crecimiento de tu hijo.',
      definition:
        '* que se destaca del resto por su importancia o interés\n* que se destaca en una profesión o ámbito determinado\n* que puede ser percibido',
      translation: 'opmerkelijk, vooraanstaand, opvallend',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'llegar',
      sourceLanguage: 'es',
      targetLanguage: 'nl',
      isReversed: false,
      results: [
        {
          language: 'es',
          source: 'llegar',
          ipa: "ʎe'γaɾ",
          example:
            '* Llegamos al puerto a mediodía.\n* Llegó el día de la boda.\n* Esta chica llegará lejos.',
          definition:
            '* pasar a estar en el término de un desplazamiento o trayectoria\n* producirse o aparecer un suceso o circunstancia\n* alcanzar un objetivo determinado, en especial profesional',
          translation:
            'aankomen, aanbreken, worden, reiken, blijven, bereiken, indruk maken',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'es',
          source: 'llegarse',
          ipa: "ʎe'γaɾse",
          example: 'Llégate a por el periódico.',
          definition: 'ir hasta un lugar que está próximo',
          translation: 'langskomen',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'vraag',
      sourceLanguage: 'es',
      targetLanguage: 'nl',
      isReversed: true,
      results: [
        {
          language: 'es',
          source: 'la pregunta',
          ipa: "pɾe'γunta",
          example: '* hacer una pregunta\n* un examen con diez preguntas',
          definition:
            '* enunciado interrogativo que se emite con intención de obtener una información\n* cada una de las actividades de un examen',
          translation: 'vraag, examenvraag',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'es',
          source: 'la solicitud',
          ipa: "soliθi'tuð",
          example:
            '* ¿Has presentado la solicitud para la oposición?\n* Nos ayudó con mucha solicitud.\n* No he recibido respuesta a mi solicitud de beca.',
          definition:
            '* documento en el que se hace una petición formal\n* cualidad de quien tiende a servir y a satisfacer a los demás\n* acción de solicitar',
          translation: 'verzoekschrift, welwillendheid, verzoek, aanvraag',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Las *tareas* de mantenimiento que más comúnmente se pasan por alto son las relacionadas con la lucha contra el polvo. Su casa está llena de filtros y conductos de ventilación que capturan el polvo y otras sustancias, lo que aumenta la vida útil de sus sistemas y mantiene el aire limpio. Al menos una vez al año, debe limpiar y reemplazar lo siguiente:',
      results: [
        {
          language: 'es',
          source: 'la tarea',
          ipa: "ta'ɾea",
          example:
            '* una tarea monótona\n* Debes hacer la tarea antes de acostarte.',
          definition:
            '* trabajo o labor que realiza una persona\n* trabajo que debe terminarse en un tiempo determinado',
          translation: 'taak, huiswerk',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  ko: {
    welcomeScreenCard: {
      language: 'es',
      source: 'notable',
      ipa: "no'taβle",
      example:
        '* comportamiento notable\n* un científico notable\n* Es notable el crecimiento de tu hijo.',
      definition:
        '* que se destaca del resto por su importancia o interés\n* que se destaca en una profesión o ámbito determinado\n* que puede ser percibido',
      translation: '주목할 만한, 눈에 띄는',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'llegar',
      sourceLanguage: 'es',
      targetLanguage: 'ko',
      isReversed: false,
      results: [
        {
          language: 'es',
          source: 'llegar',
          ipa: "ʎe'γaɾ",
          example:
            '* Llegamos al puerto a mediodía.\n* Llegó el día de la boda.\n* Esta chica llegará lejos.',
          definition:
            '* pasar a estar en el término de un desplazamiento o trayectoria\n* producirse o aparecer un suceso o circunstancia\n* alcanzar un objetivo determinado, en especial profesional',
          translation: '도착하다, 발생하다, 목표에 도달하다',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'es',
          source: 'llegarse',
          ipa: "ʎe'γaɾse",
          example: 'Llégate a por el periódico.',
          definition: 'ir hasta un lugar que está próximo',
          translation: '가다',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: '질문',
      sourceLanguage: 'es',
      targetLanguage: 'ko',
      isReversed: true,
      results: [
        {
          language: 'es',
          source: 'la pregunta',
          ipa: "pɾe'γunta",
          example: '* hacer una pregunta\n* un examen con diez preguntas',
          definition:
            '* enunciado interrogativo que se emite con intención de obtener una información\n* cada una de las actividades de un examen',
          translation: '질문, 문제',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'es',
          source: 'el interrogante',
          ipa: "intero'γante",
          example:
            '* El orador respondió a los interrogantes del público una vez terminada la conferencia.\n* Su espíritu estaba lleno de interrogantes de índole religiosa.',
          definition:
            '* enunciado emitido con intenciones de obtener una información de su receptor\n* cuestión desconocida que genera dudas',
          translation: '질문, 의문',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Las *tareas* de mantenimiento que más comúnmente se pasan por alto son las relacionadas con la lucha contra el polvo. Su casa está llena de filtros y conductos de ventilación que capturan el polvo y otras sustancias, lo que aumenta la vida útil de sus sistemas y mantiene el aire limpio. Al menos una vez al año, debe limpiar y reemplazar lo siguiente:',
      results: [
        {
          language: 'es',
          source: 'la tarea',
          ipa: "ta'ɾea",
          example:
            '* una tarea monótona\n* Debes hacer la tarea antes de acostarte.',
          definition:
            '* trabajo o labor que realiza una persona\n* trabajo que debe terminarse en un tiempo determinado',
          translation: '작업, 과제',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  hi: {
    welcomeScreenCard: {
      language: 'es',
      source: 'notable',
      ipa: "no'taβle",
      example:
        '* comportamiento notable\n* un científico notable\n* Es notable el crecimiento de tu hijo.',
      definition:
        '* que se destaca del resto por su importancia o interés\n* que se destaca en una profesión o ámbito determinado\n* que puede ser percibido',
      translation: 'महत्वपूर्ण, विशिष्ट, प्रमुख',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'llegar',
      sourceLanguage: 'es',
      targetLanguage: 'hi',
      isReversed: false,
      results: [
        {
          language: 'es',
          source: 'llegar',
          ipa: "ʎe'γaɾ",
          example:
            '* Llegamos al puerto a mediodía.\n* Llegó el día de la boda.\n* Esta chica llegará lejos.',
          definition:
            '* pasar a estar en el término de un desplazamiento o trayectoria\n* producirse o aparecer un suceso o circunstancia\n* alcanzar un objetivo determinado, en especial profesional',
          translation: 'पहुंचना, आना, प्राप्त करना',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'es',
          source: 'llegarse',
          ipa: "ʎe'γaɾse",
          example: 'Llégate a por el periódico.',
          definition: 'ir hasta un lugar que está próximo',
          translation: 'पहुंचना',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'सवाल',
      sourceLanguage: 'es',
      targetLanguage: 'hi',
      isReversed: true,
      results: [
        {
          language: 'es',
          source: 'la pregunta',
          ipa: "pɾe'γunta",
          example: '* hacer una pregunta\n* un examen con diez preguntas',
          definition:
            '* enunciado interrogativo que se emite con intención de obtener una información\n* cada una de las actividades de un examen',
          translation: 'प्रश्न, सवाल',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'es',
          source: 'el interrogante',
          ipa: "intero'γante",
          example:
            '* El orador respondió a los interrogantes del público una vez terminada la conferencia.\n* Su espíritu estaba lleno de interrogantes de índole religiosa.',
          definition:
            '* enunciado emitido con intenciones de obtener una información de su receptor\n* cuestión desconocida que genera dudas',
          translation: 'प्रश्न, सवाल',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Las *tareas* de mantenimiento que más comúnmente se pasan por alto son las relacionadas con la lucha contra el polvo. Su casa está llena de filtros y conductos de ventilación que capturan el polvo y otras sustancias, lo que aumenta la vida útil de sus sistemas y mantiene el aire limpio. Al menos una vez al año, debe limpiar y reemplazar lo siguiente:',
      results: [
        {
          language: 'es',
          source: 'la tarea',
          ipa: "ta'ɾea",
          example:
            '* una tarea monótona\n* Debes hacer la tarea antes de acostarte.',
          definition:
            '* trabajo o labor que realiza una persona\n* trabajo que debe terminarse en un tiempo determinado',
          translation: 'कार्य, काम',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  tr: {
    welcomeScreenCard: {
      language: 'es',
      source: 'notable',
      ipa: "no'taβle",
      example:
        '* comportamiento notable\n* un científico notable\n* Es notable el crecimiento de tu hijo.',
      definition:
        '* que se destaca del resto por su importancia o interés\n* que se destaca en una profesión o ámbito determinado\n* que puede ser percibido',
      translation: 'önemli, dikkate değer, belirgin',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'llegar',
      sourceLanguage: 'es',
      targetLanguage: 'tr',
      isReversed: false,
      results: [
        {
          language: 'es',
          source: 'llegar',
          ipa: "ʎe'γaɾ",
          example:
            '* Llegamos al puerto a mediodía.\n* Llegó el día de la boda.\n* Esta chica llegará lejos.',
          definition:
            '* pasar a estar en el término de un desplazamiento o trayectoria\n* producirse o aparecer un suceso o circunstancia\n* alcanzar un objetivo determinado, en especial profesional',
          translation: 'varmak, ulaşmak',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'es',
          source: 'llegarse',
          ipa: "ʎe'γaɾse",
          example: 'Llégate a por el periódico.',
          definition: 'ir hasta un lugar que está próximo',
          translation: 'yaklaşmak',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'soru',
      sourceLanguage: 'es',
      targetLanguage: 'tr',
      isReversed: true,
      results: [
        {
          language: 'es',
          source: 'la pregunta',
          ipa: "pɾe'γunta",
          example: '* hacer una pregunta\n* un examen con diez preguntas',
          definition:
            '* enunciado interrogativo que se emite con intención de obtener una información\n* cada una de las actividades de un examen',
          translation: 'soru, sınav sorusu',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'es',
          source: 'el interrogante',
          ipa: "intero'γante",
          example:
            '* El orador respondió a los interrogantes del público una vez terminada la conferencia.\n* Su espíritu estaba lleno de interrogantes de índole religiosa.',
          definition:
            '* enunciado emitido con intenciones de obtener una información de su receptor\n* cuestión desconocida que genera dudas',
          translation: 'soru, belirsizlik',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Las *tareas* de mantenimiento que más comúnmente se pasan por alto son las relacionadas con la lucha contra el polvo. Su casa está llena de filtros y conductos de ventilación que capturan el polvo y otras sustancias, lo que aumenta la vida útil de sus sistemas y mantiene el aire limpio. Al menos una vez al año, debe limpiar y reemplazar lo siguiente:',
      results: [
        {
          language: 'es',
          source: 'la tarea',
          ipa: "ta'ɾea",
          example:
            '* una tarea monótona\n* Debes hacer la tarea antes de acostarte.',
          definition:
            '* trabajo o labor que realiza una persona\n* trabajo que debe terminarse en un tiempo determinado',
          translation: 'görev, ödev',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  sv: {
    welcomeScreenCard: {
      language: 'es',
      source: 'notable',
      ipa: "no'taβle",
      example:
        '* comportamiento notable\n* un científico notable\n* Es notable el crecimiento de tu hijo.',
      definition:
        '* que se destaca del resto por su importancia o interés\n* que se destaca en una profesión o ámbito determinado\n* que puede ser percibido',
      translation: 'uppseendeväckande, framstående, påtaglig, anmärkningsvärd',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'llegar',
      sourceLanguage: 'es',
      targetLanguage: 'sv',
      isReversed: false,
      results: [
        {
          language: 'es',
          source: 'llegar',
          ipa: "ʎe'γaɾ",
          example:
            '* Llegamos al puerto a mediodía.\n* Llegó el día de la boda.\n* Esta chica llegará lejos.',
          definition:
            '* pasar a estar en el término de un desplazamiento o trayectoria\n* producirse o aparecer un suceso o circunstancia\n* alcanzar un objetivo determinado, en especial profesional',
          translation: 'anlända, komma, bli, nå, överleva, nå fram',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'es',
          source: 'llegarse',
          ipa: "ʎe'γaɾse",
          example: 'Llégate a por el periódico.',
          definition: 'ir hasta un lugar que está próximo',
          translation: 'komma förbi',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'fråga',
      sourceLanguage: 'es',
      targetLanguage: 'sv',
      isReversed: true,
      results: [
        {
          language: 'es',
          source: 'la pregunta',
          ipa: "pɾe'γunta",
          example: '* hacer una pregunta\n* un examen con diez preguntas',
          definition:
            '* enunciado interrogativo que se emite con intención de obtener una información\n* cada una de las actividades de un examen',
          translation: 'fråga, förfrågan, uppgift',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'es',
          source: 'el interrogante',
          ipa: "intero'γante",
          example:
            '* El orador respondió a los interrogantes del público una vez terminada la conferencia.\n* Su espíritu estaba lleno de interrogantes de índole religiosa.',
          definition:
            '* enunciado emitido con intenciones de obtener una información de su receptor\n* cuestión desconocida que genera dudas',
          translation: 'fråga, interrogation, frågetecken',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Las *tareas* de mantenimiento que más comúnmente se pasan por alto son las relacionadas con la lucha contra el polvo. Su casa está llena de filtros y conductos de ventilación que capturan el polvo y otras sustancias, lo que aumenta la vida útil de sus sistemas y mantiene el aire limpio. Al menos una vez al año, debe limpiar y reemplazar lo siguiente:',
      results: [
        {
          language: 'es',
          source: 'la tarea',
          ipa: "ta'ɾea",
          example:
            '* una tarea monótona\n* Debes hacer la tarea antes de acostarte.',
          definition:
            '* trabajo o labor que realiza una persona\n* trabajo que debe terminarse en un tiempo determinado',
          translation: 'uppgift, arbete, åtagande, läxa',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  no: {
    welcomeScreenCard: {
      language: 'es',
      source: 'notable',
      ipa: "no'taβle",
      example:
        '* comportamiento notable\n* un científico notable\n* Es notable el crecimiento de tu hijo.',
      definition:
        '* que se destaca del resto por su importancia o interés\n* que se destaca en una profesión o ámbito determinado\n* que puede ser percibido',
      translation: 'bemerkelsesverdig, anerkjent, merkbar/-t, notabel',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'llegar',
      sourceLanguage: 'es',
      targetLanguage: 'no',
      isReversed: false,
      results: [
        {
          language: 'es',
          source: 'llegar',
          ipa: "ʎe'γaɾ",
          example:
            '* Llegamos al puerto a mediodía.\n* Llegó el día de la boda.\n* Esta chica llegará lejos.',
          definition:
            '* pasar a estar en el término de un desplazamiento o trayectoria\n* producirse o aparecer un suceso o circunstancia\n* alcanzar un objetivo determinado, en especial profesional',
          translation:
            'ankomme, komme (om tid), bli, oppnå, rekke opp til, oppnå, nå, treffe',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'es',
          source: 'llegarse',
          ipa: "ʎe'γaɾse",
          example: 'Llégate a por el periódico.',
          definition: 'ir hasta un lugar que está próximo',
          translation: 'komme seg til et sted',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'spørsmål',
      sourceLanguage: 'es',
      targetLanguage: 'no',
      isReversed: true,
      results: [
        {
          language: 'es',
          source: 'la pregunta',
          ipa: "pɾe'γunta",
          example: '* hacer una pregunta\n* un examen con diez preguntas',
          definition:
            '* enunciado interrogativo que se emite con intención de obtener una información\n* cada una de las actividades de un examen',
          translation: 'spørsmål',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'es',
          source: 'el interrogante',
          ipa: "intero'γante",
          example:
            '* El orador respondió a los interrogantes del público una vez terminada la conferencia.\n* Su espíritu estaba lleno de interrogantes de índole religiosa.',
          definition:
            '* enunciado emitido con intenciones de obtener una información de su receptor\n* cuestión desconocida que genera dudas',
          translation: 'spørsmål, interrogasjon',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Las *tareas* de mantenimiento que más comúnmente se pasan por alto son las relacionadas con la lucha contra el polvo. Su casa está llena de filtros y conductos de ventilación que capturan el polvo y otras sustancias, lo que aumenta la vida útil de sus sistemas y mantiene el aire limpio. Al menos una vez al año, debe limpiar y reemplazar lo siguiente:',
      results: [
        {
          language: 'es',
          source: 'la tarea',
          ipa: "ta'ɾea",
          example:
            '* una tarea monótona\n* Debes hacer la tarea antes de acostarte.',
          definition:
            '* trabajo o labor que realiza una persona\n* trabajo que debe terminarse en un tiempo determinado',
          translation: 'lekse, oppgave',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  da: {
    welcomeScreenCard: {
      language: 'es',
      source: 'notable',
      ipa: "no'taβle",
      example:
        '* comportamiento notable\n* un científico notable\n* Es notable el crecimiento de tu hijo.',
      definition:
        '* que se destaca del resto por su importancia o interés\n* que se destaca en una profesión o ámbito determinado\n* que puede ser percibido',
      translation: 'bemærkelsesværdig, markant',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'llegar',
      sourceLanguage: 'es',
      targetLanguage: 'da',
      isReversed: false,
      results: [
        {
          language: 'es',
          source: 'llegar',
          ipa: "ʎe'γaɾ",
          example:
            '* Llegamos al puerto a mediodía.\n* Llegó el día de la boda.\n* Esta chica llegará lejos.',
          definition:
            '* pasar a estar en el término de un desplazamiento o trayectoria\n* producirse o aparecer un suceso o circunstancia\n* alcanzar un objetivo determinado, en especial profesional',
          translation: 'ankomme, nå, komme til',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'es',
          source: 'llegarse',
          ipa: "ʎe'γaɾse",
          example: 'Llégate a por el periódico.',
          definition: 'ir hasta un lugar que está próximo',
          translation: 'komme hen',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'spørgsmål',
      sourceLanguage: 'es',
      targetLanguage: 'da',
      isReversed: true,
      results: [
        {
          language: 'es',
          source: 'la pregunta',
          ipa: "pɾe'γunta",
          example: '* hacer una pregunta\n* un examen con diez preguntas',
          definition:
            '* enunciado interrogativo que se emite con intención de obtener una información\n* cada una de las actividades de un examen',
          translation: 'spørgsmål, opgave',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'es',
          source: 'el interrogante',
          ipa: "intero'γante",
          example:
            '* El orador respondió a los interrogantes del público una vez terminada la conferencia.\n* Su espíritu estaba lleno de interrogantes de índole religiosa.',
          definition:
            '* enunciado emitido con intenciones de obtener una información de su receptor\n* cuestión desconocida que genera dudas',
          translation: 'spørgsmål, interrogation',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Las *tareas* de mantenimiento que más comúnmente se pasan por alto son las relacionadas con la lucha contra el polvo. Su casa está llena de filtros y conductos de ventilación que capturan el polvo y otras sustancias, lo que aumenta la vida útil de sus sistemas y mantiene el aire limpio. Al menos una vez al año, debe limpiar y reemplazar lo siguiente:',
      results: [
        {
          language: 'es',
          source: 'la tarea',
          ipa: "ta'ɾea",
          example:
            '* una tarea monótona\n* Debes hacer la tarea antes de acostarte.',
          definition:
            '* trabajo o labor que realiza una persona\n* trabajo que debe terminarse en un tiempo determinado',
          translation: 'opgave, arbejde',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  fi: {
    welcomeScreenCard: {
      language: 'es',
      source: 'notable',
      ipa: "no'taβle",
      example:
        '* comportamiento notable\n* un científico notable\n* Es notable el crecimiento de tu hijo.',
      definition:
        '* que se destaca del resto por su importancia o interés\n* que se destaca en una profesión o ámbito determinado\n* que puede ser percibido',
      translation: 'merkittävä, huomattava',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'llegar',
      sourceLanguage: 'es',
      targetLanguage: 'fi',
      isReversed: false,
      results: [
        {
          language: 'es',
          source: 'llegar',
          ipa: "ʎe'γaɾ",
          example:
            '* Llegamos al puerto a mediodía.\n* Llegó el día de la boda.\n* Esta chica llegará lejos.',
          definition:
            '* pasar a estar en el término de un desplazamiento o trayectoria\n* producirse o aparecer un suceso o circunstancia\n* alcanzar un objetivo determinado, en especial profesional',
          translation: 'saapua, tapahtua, saavuttaa',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'es',
          source: 'llegarse',
          ipa: "ʎe'γaɾse",
          example: 'Llégate a por el periódico.',
          definition: 'ir hasta un lugar que está próximo',
          translation: 'saapua',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'kysymys',
      sourceLanguage: 'es',
      targetLanguage: 'fi',
      isReversed: true,
      results: [
        {
          language: 'es',
          source: 'la pregunta',
          ipa: "pɾe'γunta",
          example: '* hacer una pregunta\n* un examen con diez preguntas',
          definition:
            '* enunciado interrogativo que se emite con intención de obtener una información\n* cada una de las actividades de un examen',
          translation: 'kysymys, kysymykset',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Las *tareas* de mantenimiento que más comúnmente se pasan por alto son las relacionadas con la lucha contra el polvo. Su casa está llena de filtros y conductos de ventilación que capturan el polvo y otras sustancias, lo que aumenta la vida útil de sus sistemas y mantiene el aire limpio. Al menos una vez al año, debe limpiar y reemplazar lo siguiente:',
      results: [
        {
          language: 'es',
          source: 'la tarea',
          ipa: "ta'ɾea",
          example:
            '* una tarea monótona\n* Debes hacer la tarea antes de acostarte.',
          definition:
            '* trabajo o labor que realiza una persona\n* trabajo que debe terminarse en un tiempo determinado',
          translation: 'tehtävä, työ',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  fa: {
    welcomeScreenCard: {
      language: 'es',
      source: 'notable',
      ipa: "no'taβle",
      example:
        '* comportamiento notable\n* un científico notable\n* Es notable el crecimiento de tu hijo.',
      definition:
        '* que se destaca del resto por su importancia o interés\n* que se destaca en una profesión o ámbito determinado\n* que puede ser percibido',
      translation: 'بارز، قابل توجه',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'llegar',
      sourceLanguage: 'es',
      targetLanguage: 'fa',
      isReversed: false,
      results: [
        {
          language: 'es',
          source: 'llegar',
          ipa: "ʎe'γaɾ",
          example:
            '* Llegamos al puerto a mediodía.\n* Llegó el día de la boda.\n* Esta chica llegará lejos.',
          definition:
            '* pasar a estar en el término de un desplazamiento o trayectoria\n* producirse o aparecer un suceso o circunstancia\n* alcanzar un objetivo determinado, en especial profesional',
          translation: 'دستیابی، آمدن، رسیدن',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'es',
          source: 'llegarse',
          ipa: "ʎe'γaɾse",
          example: 'Llégate a por el periódico.',
          definition: 'ir hasta un lugar que está próximo',
          translation: 'رسیدن',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'سوال',
      sourceLanguage: 'es',
      targetLanguage: 'fa',
      isReversed: true,
      results: [
        {
          language: 'es',
          source: 'la pregunta',
          ipa: "pɾe'γunta",
          example: '* hacer una pregunta\n* un examen con diez preguntas',
          definition:
            '* enunciado interrogativo que se emite con intención de obtener una información\n* cada una de las actividades de un examen',
          translation: 'پرسش، سوال',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Las *tareas* de mantenimiento que más comúnmente se pasan por alto son las relacionadas con la lucha contra el polvo. Su casa está llena de filtros y conductos de ventilación que capturan el polvo y otras sustancias, lo que aumenta la vida útil de sus sistemas y mantiene el aire limpio. Al menos una vez al año, debe limpiar y reemplazar lo siguiente:',
      results: [
        {
          language: 'es',
          source: 'la tarea',
          ipa: "ta'ɾea",
          example:
            '* una tarea monótona\n* Debes hacer la tarea antes de acostarte.',
          definition:
            '* trabajo o labor que realiza una persona\n* trabajo que debe terminarse en un tiempo determinado',
          translation: 'وظیفه، کار',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  pl: {
    welcomeScreenCard: {
      language: 'es',
      source: 'notable',
      ipa: "no'taβle",
      example:
        '* comportamiento notable\n* un científico notable\n* Es notable el crecimiento de tu hijo.',
      definition:
        '* que se destaca del resto por su importancia o interés\n* que se destaca en una profesión o ámbito determinado\n* que puede ser percibido',
      translation: 'znaczący, wybitny, widoczny',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'llegar',
      sourceLanguage: 'es',
      targetLanguage: 'pl',
      isReversed: false,
      results: [
        {
          language: 'es',
          source: 'llegar',
          ipa: "ʎe'γaɾ",
          example:
            '* Llegamos al puerto a mediodía.\n* Llegó el día de la boda.\n* Esta chica llegará lejos.',
          definition:
            '* pasar a estar en el término de un desplazamiento o trayectoria\n* producirse o aparecer un suceso o circunstancia\n* alcanzar un objetivo determinado, en especial profesional',
          translation: 'przybyć, zdarzyć się, osiągnąć',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'es',
          source: 'llegarse',
          ipa: "ʎe'γaɾse",
          example: 'Llégate a por el periódico.',
          definition: 'ir hasta un lugar que está próximo',
          translation: 'przybyć',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'pytanie',
      sourceLanguage: 'es',
      targetLanguage: 'pl',
      isReversed: true,
      results: [
        {
          language: 'es',
          source: 'la pregunta',
          ipa: "pɾe'γunta",
          example: '* hacer una pregunta\n* un examen con diez preguntas',
          definition:
            '* enunciado interrogativo que se emite con intención de obtener una información\n* cada una de las actividades de un examen',
          translation: 'pytanie, zadanie egzaminacyjne',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Las *tareas* de mantenimiento que más comúnmente se pasan por alto son las relacionadas con la lucha contra el polvo. Su casa está llena de filtros y conductos de ventilación que capturan el polvo y otras sustancias, lo que aumenta la vida útil de sus sistemas y mantiene el aire limpio. Al menos una vez al año, debe limpiar y reemplazar lo siguiente:',
      results: [
        {
          language: 'es',
          source: 'la tarea',
          ipa: "ta'ɾea",
          example:
            '* una tarea monótona\n* Debes hacer la tarea antes de acostarte.',
          definition:
            '* trabajo o labor que realiza una persona\n* trabajo que debe terminarse en un tiempo determinado',
          translation: 'zadanie, praca',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  el: {
    welcomeScreenCard: {
      language: 'es',
      source: 'notable',
      ipa: "no'taβle",
      example:
        '* comportamiento notable\n* un científico notable\n* Es notable el crecimiento de tu hijo.',
      definition:
        '* que se destaca del resto por su importancia o interés\n* que se destaca en una profesión o ámbito determinado\n* que puede ser percibido',
      translation: 'σημαντικός, εξαιρετικός, αντιληπτός',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'llegar',
      sourceLanguage: 'es',
      targetLanguage: 'el',
      isReversed: false,
      results: [
        {
          language: 'es',
          source: 'llegar',
          ipa: "ʎe'γaɾ",
          example:
            '* Llegamos al puerto a mediodía.\n* Llegó el día de la boda.\n* Esta chica llegará lejos.',
          definition:
            '* pasar a estar en el término de un desplazamiento o trayectoria\n* producirse o aparecer un suceso o circunstancia\n* alcanzar un objetivo determinado, en especial profesional',
          translation: 'φτάνω, καταφθάνω',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'es',
          source: 'llegarse',
          ipa: "ʎe'γaɾse",
          example: 'Llégate a por el periódico.',
          definition: 'ir hasta un lugar que está próximo',
          translation: 'φτάνω',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'ερώτηση',
      sourceLanguage: 'es',
      targetLanguage: 'el',
      isReversed: true,
      results: [
        {
          language: 'es',
          source: 'la pregunta',
          ipa: "pɾe'γunta",
          example: '* hacer una pregunta\n* un examen con diez preguntas',
          definition:
            '* enunciado interrogativo que se emite con intención de obtener una información\n* cada una de las actividades de un examen',
          translation: 'ερώτηση, εξεταστική δραστηριότητα',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Las *tareas* de mantenimiento que más comúnmente se pasan por alto son las relacionadas con la lucha contra el polvo. Su casa está llena de filtros y conductos de ventilación que capturan el polvo y otras sustancias, lo que aumenta la vida útil de sus sistemas y mantiene el aire limpio. Al menos una vez al año, debe limpiar y reemplazar lo siguiente:',
      results: [
        {
          language: 'es',
          source: 'la tarea',
          ipa: "ta'ɾea",
          example:
            '* una tarea monótona\n* Debes hacer la tarea antes de acostarte.',
          definition:
            '* trabajo o labor que realiza una persona\n* trabajo que debe terminarse en un tiempo determinado',
          translation: 'εργασία, καθήκον',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  he: {
    welcomeScreenCard: {
      language: 'es',
      source: 'notable',
      ipa: "no'taβle",
      example:
        '* comportamiento notable\n* un científico notable\n* Es notable el crecimiento de tu hijo.',
      definition:
        '* que se destaca del resto por su importancia o interés\n* que se destaca en una profesión o ámbito determinado\n* que puede ser percibido',
      translation: 'בולט, ניכר',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'llegar',
      sourceLanguage: 'es',
      targetLanguage: 'he',
      isReversed: false,
      results: [
        {
          language: 'es',
          source: 'llegar',
          ipa: "ʎe'γaɾ",
          example:
            '* Llegamos al puerto a mediodía.\n* Llegó el día de la boda.\n* Esta chica llegará lejos.',
          definition:
            '* pasar a estar en el término de un desplazamiento o trayectoria\n* producirse o aparecer un suceso o circunstancia\n* alcanzar un objetivo determinado, en especial profesional',
          translation: 'להגיע, להשיג, לְהַגִּיעַ',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'es',
          source: 'llegarse',
          ipa: "ʎe'γaɾse",
          example: 'Llégate a por el periódico.',
          definition: 'ir hasta un lugar que está próximo',
          translation: 'להגיע',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'שְׁאֵלָה',
      sourceLanguage: 'es',
      targetLanguage: 'he',
      isReversed: true,
      results: [
        {
          language: 'es',
          source: 'la pregunta',
          ipa: "pɾe'γunta",
          example: '* hacer una pregunta\n* un examen con diez preguntas',
          definition:
            '* enunciado interrogativo que se emite con intención de obtener una información\n* cada una de las actividades de un examen',
          translation: 'שאלה, שאלת מבחן',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'es',
          source: 'la consulta',
          ipa: "kon'sulta",
          example:
            '* ¿Desea hacer alguna otra consulta?\n* Debo realizar una consulta en la biblioteca.\n* Fui a una consulta médica por mis dolores de cabeza.',
          definition:
            '* opinión o parecer que se pide a alguien\n* búsqueda de información\n* revisión que realiza un médico a un enfermo',
          translation: 'ייעוץ, שאלה, בדיקה רפואית, יָעֳץ',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Las *tareas* de mantenimiento que más comúnmente se pasan por alto son las relacionadas con la lucha contra el polvo. Su casa está llena de filtros y conductos de ventilación que capturan el polvo y otras sustancias, lo que aumenta la vida útil de sus sistemas y mantiene el aire limpio. Al menos una vez al año, debe limpiar y reemplazar lo siguiente:',
      results: [
        {
          language: 'es',
          source: 'la tarea',
          ipa: "ta'ɾea",
          example:
            '* una tarea monótona\n* Debes hacer la tarea antes de acostarte.',
          definition:
            '* trabajo o labor que realiza una persona\n* trabajo que debe terminarse en un tiempo determinado',
          translation: 'משימה, מטלה',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  th: {
    welcomeScreenCard: {
      language: 'es',
      source: 'notable',
      ipa: "no'taβle",
      example:
        '* comportamiento notable\n* un científico notable\n* Es notable el crecimiento de tu hijo.',
      definition:
        '* que se destaca del resto por su importancia o interés\n* que se destaca en una profesión o ámbito determinado\n* que puede ser percibido',
      translation: 'เด่น, สำคัญ, เห็นได้, ที่น่าจดจำ',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'llegar',
      sourceLanguage: 'es',
      targetLanguage: 'th',
      isReversed: false,
      results: [
        {
          language: 'es',
          source: 'llegar',
          ipa: "ʎe'γaɾ",
          example:
            '* Llegamos al puerto a mediodía.\n* Llegó el día de la boda.\n* Esta chica llegará lejos.',
          definition:
            '* pasar a estar en el término de un desplazamiento o trayectoria\n* producirse o aparecer un suceso o circunstancia\n* alcanzar un objetivo determinado, en especial profesional',
          translation: 'มาถึง, เกิดขึ้น, บรรลุเป้าหมาย',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'es',
          source: 'llegarse',
          ipa: "ʎe'γaɾse",
          example: 'Llégate a por el periódico.',
          definition: 'ir hasta un lugar que está próximo',
          translation: 'ไปถึง',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'คำถาม',
      sourceLanguage: 'es',
      targetLanguage: 'th',
      isReversed: true,
      results: [
        {
          language: 'es',
          source: 'la pregunta',
          ipa: "pɾe'γunta",
          example: '* hacer una pregunta\n* un examen con diez preguntas',
          definition:
            '* enunciado interrogativo que se emite con intención de obtener una información\n* cada una de las actividades de un examen',
          translation: 'คำถาม, ข้อสอบ',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Las *tareas* de mantenimiento que más comúnmente se pasan por alto son las relacionadas con la lucha contra el polvo. Su casa está llena de filtros y conductos de ventilación que capturan el polvo y otras sustancias, lo que aumenta la vida útil de sus sistemas y mantiene el aire limpio. Al menos una vez al año, debe limpiar y reemplazar lo siguiente:',
      results: [
        {
          language: 'es',
          source: 'la tarea',
          ipa: "ta'ɾea",
          example:
            '* una tarea monótona\n* Debes hacer la tarea antes de acostarte.',
          definition:
            '* trabajo o labor que realiza una persona\n* trabajo que debe terminarse en un tiempo determinado',
          translation: 'งาน, การบ้าน',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  vi: {
    welcomeScreenCard: {
      language: 'es',
      source: 'notable',
      ipa: "no'taβle",
      example:
        '* comportamiento notable\n* un científico notable\n* Es notable el crecimiento de tu hijo.',
      definition:
        '* que se destaca del resto por su importancia o interés\n* que se destaca en una profesión o ámbito determinado\n* que puede ser percibido',
      translation: 'nổi bật, đáng chú ý',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'llegar',
      sourceLanguage: 'es',
      targetLanguage: 'vi',
      isReversed: false,
      results: [
        {
          language: 'es',
          source: 'llegar',
          ipa: "ʎe'γaɾ",
          example:
            '* Llegamos al puerto a mediodía.\n* Llegó el día de la boda.\n* Esta chica llegará lejos.',
          definition:
            '* pasar a estar en el término de un desplazamiento o trayectoria\n* producirse o aparecer un suceso o circunstancia\n* alcanzar un objetivo determinado, en especial profesional',
          translation: 'đến, xuất hiện, đạt được',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'es',
          source: 'llegarse',
          ipa: "ʎe'γaɾse",
          example: 'Llégate a por el periódico.',
          definition: 'ir hasta un lugar que está próximo',
          translation: 'đến',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'câu hỏi',
      sourceLanguage: 'es',
      targetLanguage: 'vi',
      isReversed: true,
      results: [
        {
          language: 'es',
          source: 'la pregunta',
          ipa: "pɾe'γunta",
          example: '* hacer una pregunta\n* un examen con diez preguntas',
          definition:
            '* enunciado interrogativo que se emite con intención de obtener una información\n* cada una de las actividades de un examen',
          translation: 'câu hỏi, bài kiểm tra',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Las *tareas* de mantenimiento que más comúnmente se pasan por alto son las relacionadas con la lucha contra el polvo. Su casa está llena de filtros y conductos de ventilación que capturan el polvo y otras sustancias, lo que aumenta la vida útil de sus sistemas y mantiene el aire limpio. Al menos una vez al año, debe limpiar y reemplazar lo siguiente:',
      results: [
        {
          language: 'es',
          source: 'la tarea',
          ipa: "ta'ɾea",
          example:
            '* una tarea monótona\n* Debes hacer la tarea antes de acostarte.',
          definition:
            '* trabajo o labor que realiza una persona\n* trabajo que debe terminarse en un tiempo determinado',
          translation: 'nhiệm vụ, công việc',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  id: {
    welcomeScreenCard: {
      language: 'es',
      source: 'notable',
      ipa: "no'taβle",
      example:
        '* comportamiento notable\n* un científico notable\n* Es notable el crecimiento de tu hijo.',
      definition:
        '* que se destaca del resto por su importancia o interés\n* que se destaca en una profesión o ámbito determinado\n* que puede ser percibido',
      translation: 'terkenal, menonjol, signifikan',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'llegar',
      sourceLanguage: 'es',
      targetLanguage: 'id',
      isReversed: false,
      results: [
        {
          language: 'es',
          source: 'llegar',
          ipa: "ʎe'γaɾ",
          example:
            '* Llegamos al puerto a mediodía.\n* Llegó el día de la boda.\n* Esta chica llegará lejos.',
          definition:
            '* pasar a estar en el término de un desplazamiento o trayectoria\n* producirse o aparecer un suceso o circunstancia\n* alcanzar un objetivo determinado, en especial profesional',
          translation: 'tiba, muncul, mencapai, datang',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'es',
          source: 'llegarse',
          ipa: "ʎe'γaɾse",
          example: 'Llégate a por el periódico.',
          definition: 'ir hasta un lugar que está próximo',
          translation: 'mendekat',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'pertanyaan',
      sourceLanguage: 'es',
      targetLanguage: 'id',
      isReversed: true,
      results: [
        {
          language: 'es',
          source: 'la pregunta',
          ipa: "pɾe'γunta",
          example: '* hacer una pregunta\n* un examen con diez preguntas',
          definition:
            '* enunciado interrogativo que se emite con intención de obtener una información\n* cada una de las actividades de un examen',
          translation: 'pertanyaan, soal',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Las *tareas* de mantenimiento que más comúnmente se pasan por alto son las relacionadas con la lucha contra el polvo. Su casa está llena de filtros y conductos de ventilación que capturan el polvo y otras sustancias, lo que aumenta la vida útil de sus sistemas y mantiene el aire limpio. Al menos una vez al año, debe limpiar y reemplazar lo siguiente:',
      results: [
        {
          language: 'es',
          source: 'la tarea',
          ipa: "ta'ɾea",
          example:
            '* una tarea monótona\n* Debes hacer la tarea antes de acostarte.',
          definition:
            '* trabajo o labor que realiza una persona\n* trabajo que debe terminarse en un tiempo determinado',
          translation: 'tugas, pekerjaan',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  ms: {
    welcomeScreenCard: {
      language: 'es',
      source: 'notable',
      ipa: "no'taβle",
      example:
        '* comportamiento notable\n* un científico notable\n* Es notable el crecimiento de tu hijo.',
      definition:
        '* que se destaca del resto por su importancia o interés\n* que se destaca en una profesión o ámbito determinado\n* que puede ser percibido',
      translation: 'terkemuka, menonjol, ketara, terkenal',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'llegar',
      sourceLanguage: 'es',
      targetLanguage: 'ms',
      isReversed: false,
      results: [
        {
          language: 'es',
          source: 'llegar',
          ipa: "ʎe'γaɾ",
          example:
            '* Llegamos al puerto a mediodía.\n* Llegó el día de la boda.\n* Esta chica llegará lejos.',
          definition:
            '* pasar a estar en el término de un desplazamiento o trayectoria\n* producirse o aparecer un suceso o circunstancia\n* alcanzar un objetivo determinado, en especial profesional',
          translation: 'tiba, sampai, mencapai',
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'es',
          source: 'llegarse',
          ipa: "ʎe'γaɾse",
          example: 'Llégate a por el periódico.',
          definition: 'ir hasta un lugar que está próximo',
          translation: 'mendekati',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'soalan',
      sourceLanguage: 'es',
      targetLanguage: 'ms',
      isReversed: true,
      results: [
        {
          language: 'es',
          source: 'la pregunta',
          ipa: "pɾe'γunta",
          example: '* hacer una pregunta\n* un examen con diez preguntas',
          definition:
            '* enunciado interrogativo que se emite con intención de obtener una información\n* cada una de las actividades de un examen',
          translation: 'soalan, item ujian',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Las *tareas* de mantenimiento que más comúnmente se pasan por alto son las relacionadas con la lucha contra el polvo. Su casa está llena de filtros y conductos de ventilación que capturan el polvo y otras sustancias, lo que aumenta la vida útil de sus sistemas y mantiene el aire limpio. Al menos una vez al año, debe limpiar y reemplazar lo siguiente:',
      results: [
        {
          language: 'es',
          source: 'la tarea',
          ipa: "ta'ɾea",
          example:
            '* una tarea monótona\n* Debes hacer la tarea antes de acostarte.',
          definition:
            '* trabajo o labor que realiza una persona\n* trabajo que debe terminarse en un tiempo determinado',
          translation: 'tugas, kerja',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
  uk: {
    welcomeScreenCard: {
      language: 'es',
      source: 'notable',
      ipa: "no'taβle",
      example:
        '* comportamiento notable\n* un científico notable\n* Es notable el crecimiento de tu hijo.',
      definition:
        '* que se destaca del resto por su importancia o interés\n* que se destaca en una profesión o ámbito determinado\n* que puede ser percibido',
      translation: 'значний, помітний',
      partOfSpeech: 'adjective',
      tags: [],
    },
    directTranslationExample: {
      text: 'llegar',
      sourceLanguage: 'es',
      targetLanguage: 'uk',
      isReversed: false,
      results: [
        {
          language: 'es',
          source: 'llegar',
          ipa: "ʎe'γaɾ",
          example:
            '* Llegamos al puerto a mediodía.\n* Llegó el día de la boda.\n* Esta chica llegará lejos.',
          definition:
            '* pasar a estar en el término de un desplazamiento o trayectoria\n* producirse o aparecer un suceso o circunstancia\n* alcanzar un objetivo determinado, en especial profesional',
          translation: "прибути, з'явитися, досягти, приходити",
          partOfSpeech: 'verb',
          tags: [],
        },
        {
          language: 'es',
          source: 'llegarse',
          ipa: "ʎe'γaɾse",
          example: 'Llégate a por el periódico.',
          definition: 'ir hasta un lugar que está próximo',
          translation: 'підходити',
          partOfSpeech: 'verb',
          tags: [],
        },
      ],
    },
    reverseTranslationExample: {
      text: 'запитання',
      sourceLanguage: 'es',
      targetLanguage: 'uk',
      isReversed: true,
      results: [
        {
          language: 'es',
          source: 'la pregunta',
          ipa: "pɾe'γunta",
          example: '* hacer una pregunta\n* un examen con diez preguntas',
          definition:
            '* enunciado interrogativo que se emite con intención de obtener una información\n* cada una de las actividades de un examen',
          translation: 'питання, завдання',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
        {
          language: 'es',
          source: 'el interrogante',
          ipa: "intero'γante",
          example:
            '* El orador respondió a los interrogantes del público una vez terminada la conferencia.\n* Su espíritu estaba lleno de interrogantes de índole religiosa.',
          definition:
            '* enunciado emitido con intenciones de obtener una información de su receptor\n* cuestión desconocida que genera dudas',
          translation: 'питання, запит',
          partOfSpeech: 'noun',
          g: 'm',
          tags: [],
        },
      ],
    },
    contextTranslationExample: {
      text: 'Las *tareas* de mantenimiento que más comúnmente se pasan por alto son las relacionadas con la lucha contra el polvo. Su casa está llena de filtros y conductos de ventilación que capturan el polvo y otras sustancias, lo que aumenta la vida útil de sus sistemas y mantiene el aire limpio. Al menos una vez al año, debe limpiar y reemplazar lo siguiente:',
      results: [
        {
          language: 'es',
          source: 'la tarea',
          ipa: "ta'ɾea",
          example:
            '* una tarea monótona\n* Debes hacer la tarea antes de acostarte.',
          definition:
            '* trabajo o labor que realiza una persona\n* trabajo que debe terminarse en un tiempo determinado',
          translation: 'завдання, робота',
          partOfSpeech: 'noun',
          g: 'f',
          tags: [],
        },
      ],
    },
  },
};
