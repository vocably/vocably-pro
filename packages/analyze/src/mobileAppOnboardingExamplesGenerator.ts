import {
  AnalysisItem,
  Card,
  ChatGPTLanguage,
  ChatGPTLanguages,
  GoogleLanguage,
  MobileOnboardingDataCollection,
} from '@vocably/model';
import { join } from '@vocably/sulna';
import { existsSync, writeFileSync } from 'node:fs';
import { buildDirectResult } from './buildDirectResult';
import { buildReverseResult } from './buildReverseResult';

const reverseTranslationExample = {
  en: 'question',
  es: 'pregunta',
  fr: 'question',
  de: 'frage',
  zh: '问题',
  'zh-TW': '問題',
  ja: '質問',
  ru: 'вопрос',
  it: 'domanda',
  pt: 'pergunta',
  ar: 'سؤال',
  nl: 'vraag',
  ko: '질문',
  hi: 'सवाल',
  tr: 'soru',
  sv: 'fråga',
  no: 'spørsmål',
  da: 'spørgsmål',
  fi: 'kysymys',
  fa: 'سوال',
  pl: 'pytanie',
  el: 'ερώτηση',
  he: 'שאלה',
  th: 'คำถาม',
  vi: 'câu hỏi',
  id: 'pertanyaan',
  ms: 'soalan',
  uk: 'запитання',
  et: 'küsimus',
};

type LanguageStuff = {
  welcomeScreenCard: string;
  directTranslationExample: string;
  reverseTranslationExample: Partial<Record<ChatGPTLanguage, string>>;
  contextTranslationExample: {
    text: string;
    word: string;
  };
};

type Languages = Partial<Record<ChatGPTLanguage, LanguageStuff>>;

const languages: Languages = {
  en: {
    welcomeScreenCard: 'remarkable',
    directTranslationExample: 'arrive',
    reverseTranslationExample: reverseTranslationExample,
    contextTranslationExample: {
      word: 'approach',
      text: 'Beginners should *approach* this cautiously, though. If you’re doing couch to 5K and coming from a literal couch-potato life, give yourself a few weeks to get used to the new schedule before adding in some beginner-level strength training. That said, remember to listen to your body. If you’re a relatively active person, and you’ve just started strength training, you may not find it fatigues you at all to add a little light jogging. Just pay attention to how that goes, and make adjustments as needed. ',
    },
  },
  es: {
    welcomeScreenCard: 'notable',
    directTranslationExample: 'llegar',
    reverseTranslationExample: reverseTranslationExample,
    contextTranslationExample: {
      word: 'tarea',
      text: 'Las *tareas* de mantenimiento que más comúnmente se pasan por alto son las relacionadas con la lucha contra el polvo. Su casa está llena de filtros y conductos de ventilación que capturan el polvo y otras sustancias, lo que aumenta la vida útil de sus sistemas y mantiene el aire limpio. Al menos una vez al año, debe limpiar y reemplazar lo siguiente:',
    },
  },
  fr: {
    welcomeScreenCard: 'remarquable',
    directTranslationExample: 'arriver',
    reverseTranslationExample: reverseTranslationExample,
    contextTranslationExample: {
      word: 'entretien',
      text: "Les tâches *d'entretien* les plus fréquemment négligées concernent la lutte contre la poussière. Votre maison est remplie de filtres et d'évents qui capturent la poussière et d'autres éléments, augmentant ainsi la durée de vie de vos systèmes et gardant l'air propre. Au moins une fois par an, vous devez nettoyer et remplacer les éléments suivants:",
    },
  },
  de: {
    welcomeScreenCard: 'bemerkenswert',
    directTranslationExample: 'ankommen',
    reverseTranslationExample: reverseTranslationExample,
    contextTranslationExample: {
      word: 'häufigsten',
      text: 'Die am *häufigsten* übersehenen Wartungsaufgaben betreffen den Kampf gegen Staub. Ihr Haus ist voller Filter und Belüftungsöffnungen, die Staub und andere Dinge auffangen, die Lebensdauer Ihrer Systeme verlängern und die Luft sauber halten. Mindestens einmal im Jahr sollten Sie Folgendes reinigen und ersetzen:',
    },
  },
  zh: {
    welcomeScreenCard: '卓越',
    directTranslationExample: '到达',
    reverseTranslationExample: reverseTranslationExample,
    contextTranslationExample: {
      word: '常',
      text: '最*常*被忽略的维护任务是清除灰尘。您的房子里到处都是过滤器和通风口，它们可以捕获灰尘和其他物质，延长系统的使用寿命并保持空气清洁。您至少应该每年清洁和更换一次以下设备：',
    },
  },
  'zh-TW': {
    welcomeScreenCard: '卓越',
    directTranslationExample: '到達',
    reverseTranslationExample: reverseTranslationExample,
    contextTranslationExample: {
      word: '常',
      text: '最「*常*見」被忽略的維護任務涉及防塵。您的房子充滿了過濾器和通風口，可以捕獲灰塵和其他物質，從而延長系統的使用壽命並保持空氣清潔。您應該至少每年清潔並更換一次以下部件：',
    },
  },
  ja: {
    welcomeScreenCard: '素晴らしい',
    directTranslationExample: '到着',
    reverseTranslationExample: reverseTranslationExample,
    contextTranslationExample: {
      word: '目的',
      text:
        '休息日の*目的*を念頭に置いて、休息日が本来の目的を達成するようにする必要があります。\n' +
        '\n' +
        '筋力トレーニング プログラムでは、休息日は本格的な筋力トレーニングから休憩する日である必要があります。これは、一日中ソファに座っている必要があるという意味ではありませんが、昨日スクワットをしたばかりであれば、おそらく再びスクワットを行うべきではないことを意味します。',
    },
  },
  ru: {
    welcomeScreenCard: 'замечательный',
    directTranslationExample: 'приезжать',
    reverseTranslationExample: reverseTranslationExample,
    contextTranslationExample: {
      word: 'часто',
      text: 'Наиболее *часто* пропускаемые задачи по обслуживанию включают в себя борьбу с пылью. Ваш дом заполнен фильтрами и вентиляционными отверстиями, которые улавливают пыль и другие вещи, увеличивая срок службы ваших систем и сохраняя воздух чистым. По крайней мере, один раз в год вы должны чистить и заменять следующее:',
    },
  },
  it: {
    welcomeScreenCard: 'notevole',
    directTranslationExample: 'arrivare',
    reverseTranslationExample: reverseTranslationExample,
    contextTranslationExample: {
      word: 'manutenzione',
      text: "Le attività di *manutenzione* comunemente saltate riguardano la tua guerra alla polvere. La tua casa è piena di filtri e prese d'aria che catturano polvere e altre cose, aumentando la durata dei tuoi sistemi e mantenendo l'aria pulita. Almeno una volta all'anno dovresti pulire e sostituire quanto segue:",
    },
  },
  pt: {
    welcomeScreenCard: 'notável',
    directTranslationExample: 'chegar',
    reverseTranslationExample: reverseTranslationExample,
    contextTranslationExample: {
      word: 'manutenção',
      text: 'As tarefas de *manutenção* mais comumente ignoradas envolvem sua guerra contra a poeira. Sua casa é cheia de filtros e aberturas que capturam poeira e outras coisas, aumentando a vida útil dos seus sistemas e mantendo o ar limpo. Pelo menos uma vez por ano, você deve limpar e substituir o seguinte:',
    },
  },
  ar: {
    welcomeScreenCard: 'مميز',
    directTranslationExample: 'يصل',
    reverseTranslationExample: reverseTranslationExample,
    contextTranslationExample: {
      word: 'مهام',
      text: 'تتضمن *مهام* الصيانة الأكثر شيوعًا التغافل عنها مكافحة الغبار. منزلك مليء بالمرشحات والفتحات التي تلتقط الغبار وغيره من الأشياء، مما يزيد من عمر أنظمتك ويحافظ على نظافة الهواء. يجب عليك تنظيف واستبدال ما يلي مرة واحدة على الأقل في السنة:',
    },
  },
  nl: {
    welcomeScreenCard: 'opmerkelijk',
    directTranslationExample: 'aankomen',
    reverseTranslationExample: reverseTranslationExample,
    contextTranslationExample: {
      word: 'overgeslagen',
      text: 'De meest *overgeslagen* onderhoudstaken hebben te maken met uw oorlog tegen stof. Uw huis staat vol met filters en ventilatieopeningen die stof en andere dingen opvangen, waardoor de levensduur van uw systemen wordt verlengd en de lucht schoon blijft. U moet ten minste één keer per jaar het volgende schoonmaken en vervangen:',
    },
  },
  ko: {
    welcomeScreenCard: '언어 ',
    directTranslationExample: '출발 ',
    reverseTranslationExample: reverseTranslationExample,
    contextTranslationExample: {
      word: '흔히',
      text: '가장 *흔히* 건너뛰는 유지 관리 작업은 먼지와의 전쟁과 관련이 있습니다. 집은 먼지와 기타 물질을 포집하는 필터와 통풍구로 가득 차 있어 시스템 수명을 늘리고 공기를 깨끗하게 유지합니다. 최소한 1년에 한 번은 다음을 청소하고 교체해야 합니다.',
    },
  },
  hi: {
    welcomeScreenCard: 'विलक्षण',
    directTranslationExample: 'विलक्षण',
    reverseTranslationExample: reverseTranslationExample,
    contextTranslationExample: {
      word: 'ज़्यादा',
      text: 'सबसे *ज़्यादा* आम तौर पर छोड़े जाने वाले रखरखाव कार्यों में धूल से जंग शामिल है। आपका घर फ़िल्टर और वेंट से भरा हुआ है जो धूल और अन्य चीज़ों को पकड़ते हैं, जिससे आपके सिस्टम की उम्र बढ़ती है और हवा साफ रहती है। साल में कम से कम एक बार आपको निम्नलिखित को साफ करना और बदलना चाहिए:',
    },
  },
  tr: {
    welcomeScreenCard: 'olağanüstü',
    directTranslationExample: 'varış',
    reverseTranslationExample: reverseTranslationExample,
    contextTranslationExample: {
      word: 'bakım',
      text: 'En sık atlanan *bakım* görevleri toza karşı savaşınızı içerir. Eviniz, toz ve diğer şeyleri yakalayan filtreler ve havalandırmalarla doludur, bu da sistemlerinizin ömrünü uzatır ve havayı temiz tutar. Yılda en az bir kez aşağıdakileri temizlemeli ve değiştirmelisiniz:',
    },
  },
  sv: {
    welcomeScreenCard: 'anmärkningsvärd',
    directTranslationExample: 'anlända',
    reverseTranslationExample: reverseTranslationExample,
    contextTranslationExample: {
      word: 'vanligt',
      text: 'De mest *vanligt* överhoppade underhållsuppgifterna involverar ditt krig mot damm. Ditt hus är fyllt med filter och ventiler som fångar upp damm och andra saker, vilket ökar livslängden på dina system och håller luften ren. Minst en gång om året bör du rengöra och byta ut följande:',
    },
  },
  no: {
    welcomeScreenCard: 'bemerkelsesverdig',
    directTranslationExample: 'ankomme',
    reverseTranslationExample: reverseTranslationExample,
    contextTranslationExample: {
      word: 'vanlige',
      text: 'De mest *vanlige* vedlikeholdsoppgavene som er utelatt, involverer krigen mot støv. Huset ditt er fylt med filtre og ventiler som fanger opp støv og andre ting, noe som øker levetiden til systemene dine og holder luften ren. Minst en gang i året bør du rengjøre og skifte ut følgende:',
    },
  },
  da: {
    welcomeScreenCard: 'bemærkelsesværdig',
    directTranslationExample: 'ankomme',
    reverseTranslationExample: reverseTranslationExample,
    contextTranslationExample: {
      word: 'almindelige',
      text: 'De mest *almindelige* overspringede vedligeholdelsesopgaver involverer din krig mod støv. Dit hus er fyldt med filtre og ventilationsåbninger, der fanger støv og andre ting, hvilket forlænger dine systemers levetid og holder luften ren. Mindst en gang om året bør du rengøre og udskifte følgende:',
    },
  },
  fi: {
    welcomeScreenCard: 'huomattava',
    directTranslationExample: 'saapua',
    reverseTranslationExample: reverseTranslationExample,
    contextTranslationExample: {
      word: 'yleisimmin',
      text: '*Yleisimmin* ohitetuimmat huoltotehtävät liittyvät pölyn vastaiseen taisteluun. Talosi on täynnä suodattimia ja tuuletusaukkoja, jotka keräävät pölyä ja muuta tavaraa, pidentäen järjestelmien käyttöikää ja pitäen ilman puhtaana. Vähintään kerran vuodessa sinun tulee puhdistaa ja vaihtaa seuraavat:',
    },
  },
  fa: {
    welcomeScreenCard: 'قابل توجه',
    directTranslationExample: 'رسیدن',
    reverseTranslationExample: reverseTranslationExample,
    contextTranslationExample: {
      word: 'معمولاً',
      text: '*معمولاً* کارهای تعمیر و نگهداری شامل جنگ شما با گرد و غبار است. خانه شما مملو از فیلترها و دریچه هایی است که گرد و غبار و سایر موارد را جذب می کند و طول عمر سیستم های شما را افزایش می دهد و هوا را تمیز نگه می دارد. حداقل یک بار در سال باید موارد زیر را تمیز و تعویض کنید:',
    },
  },
  pl: {
    welcomeScreenCard: 'niezwykły',
    directTranslationExample: 'przybycie',
    reverseTranslationExample: reverseTranslationExample,
    contextTranslationExample: {
      word: 'uwadze',
      text: 'Mając na *uwadze* cele dni odpoczynku, chcesz mieć pewność, że Twój dzień odpoczynku osiągnie to, co miał osiągnąć. W programie treningu siłowego dni odpoczynku powinny dać Ci przerwę od poważnego treningu siłowego. Nie oznacza to, że musisz siedzieć na kanapie cały dzień, ale oznacza to, że prawdopodobnie nie powinieneś już robić przysiadów, jeśli zrobiłeś je wczoraj.',
    },
  },
  el: {
    welcomeScreenCard: 'αξιοσημείωτος',
    directTranslationExample: 'άφιξη',
    reverseTranslationExample: reverseTranslationExample,
    contextTranslationExample: {
      word: '',
      text: 'Οι πιο *συνήθως* εργασίες συντήρησης που παραλείπονται περιλαμβάνουν τον πόλεμο ενάντια στη σκόνη. Το σπίτι σας είναι γεμάτο με φίλτρα και αεραγωγούς που αιχμαλωτίζουν τη σκόνη και άλλα πράγματα, αυξάνοντας τη διάρκεια ζωής των συστημάτων σας και διατηρώντας τον αέρα καθαρό. Τουλάχιστον μία φορά το χρόνο θα πρέπει να καθαρίζετε και να αντικαθιστάτε τα ακόλουθα:',
    },
  },
  he: {
    welcomeScreenCard: 'מרשים',
    directTranslationExample: 'עגבנייה',
    reverseTranslationExample: reverseTranslationExample,
    contextTranslationExample: {
      word: 'שמירה',
      text: 'תוך *שמירה* על מטרות ימי המנוחה, אתה רוצה לוודא שיום המנוחה שלך משיג את מה שהוא נועד להשיג. בתוכנית אימוני כוח, ימי המנוחה שלך אמורים לתת לך הפסקה מכל אימון כוח רציני. זה לא אומר שאתה צריך לשבת על הספה כל היום, אבל זה אומר שאתה כנראה לא צריך לעשות סקוואט שוב אם רק עשית סקוואט אתמול.',
    },
  },
  th: {
    welcomeScreenCard: 'น่าทึ่ง',
    directTranslationExample: 'มาถึง',
    reverseTranslationExample: reverseTranslationExample,
    contextTranslationExample: {
      word: 'จุดประสงค์',
      text: 'เมื่อคำนึงถึง *จุดประสงค์* ของวันพักผ่อนแล้ว คุณต้องแน่ใจว่าวันพักผ่อนของคุณบรรลุผลตามเป้าหมาย ในโปรแกรมฝึกความแข็งแรง วันพักผ่อนของคุณควรเป็นช่วงพักจากการฝึกความแข็งแรงอย่างจริงจัง นั่นไม่ได้หมายความว่าคุณต้องนั่งอยู่บนโซฟาตลอดทั้งวัน แต่หมายความว่าคุณไม่ควรเล่นสควอตอีกหากคุณเพิ่งเล่นสควอตไปเมื่อวาน',
    },
  },
  vi: {
    welcomeScreenCard: 'đáng chú ý',
    directTranslationExample: 'đến',
    reverseTranslationExample: reverseTranslationExample,
    contextTranslationExample: {
      word: 'thường xuyên',
      text: 'Nhiệm vụ bảo trì *thường xuyên* bị bỏ qua nhất liên quan đến cuộc chiến chống bụi của bạn. Ngôi nhà của bạn chứa đầy các bộ lọc và lỗ thông hơi để giữ bụi và các thứ khác, giúp tăng tuổi thọ của hệ thống và giữ cho không khí sạch sẽ. Ít nhất một lần một năm, bạn nên vệ sinh và thay thế những thứ sau:',
    },
  },
  id: {
    welcomeScreenCard: 'luar biasa',
    directTranslationExample: 'tiba',
    reverseTranslationExample: reverseTranslationExample,
    contextTranslationExample: {
      word: '',
      text: 'Tugas *pemeliharaan* yang paling sering diabaikan adalah membersihkan debu. Rumah Anda dilengkapi dengan filter dan ventilasi yang menangkap debu dan benda lain, sehingga memperpanjang umur sistem dan menjaga udara tetap bersih. Setidaknya setahun sekali Anda harus membersihkan dan mengganti yang berikut ini:',
    },
  },
  ms: {
    welcomeScreenCard: 'luar biasa',
    directTranslationExample: 'tiba',
    reverseTranslationExample: reverseTranslationExample,
    contextTranslationExample: {
      word: 'penyelenggaraan',
      text: 'Tugas *penyelenggaraan* yang paling biasa dilangkau melibatkan perang anda terhadap habuk. Rumah anda dipenuhi dengan penapis dan bolong yang menangkap habuk dan barangan lain, meningkatkan jangka hayat sistem anda dan memastikan udara bersih. Sekurang-kurangnya sekali setahun anda perlu membersihkan dan menggantikan yang berikut:',
    },
  },
  uk: {
    welcomeScreenCard: 'чудовий',
    directTranslationExample: 'прибути',
    reverseTranslationExample: reverseTranslationExample,
    contextTranslationExample: {
      word: 'завдання',
      text: 'Найпоширеніші завдання технічного обслуговування, які часто пропускають, — це війна з пилом. Ваш будинок наповнений фільтрами та вентиляційними отворами, які вловлюють пил та інші речі, збільшуючи термін служби ваших систем і зберігаючи повітря чистим. Принаймні раз на рік слід чистити та замінювати наступне:',
    },
  },
  et: {
    welcomeScreenCard: 'silmapaistev',
    directTranslationExample: 'saabuma',
    reverseTranslationExample: reverseTranslationExample,
    contextTranslationExample: {
      word: 'köök',
      text: 'Eesti köök peegeldab maa ajalugu ja loodust, olles lihtne, kuid toitainerikas. Traditsioonilised road, nagu mulgipuder, verivorst ja kiluvõileib, on paljudele eestlastele nostalgilised maitsed. Kohalikud metsad ja põllud pakuvad rohkelt värskeid koostisosi – seened, marjad ja juurviljad on paljudes roogades olulisel kohal.',
    },
  },
};

export const generateAppOnboardingExamples = async (
  sourceLanguage: ChatGPTLanguage
) => {
  const fileName = `${__dirname}/mobileAppOnboardingGenerator/${sourceLanguage}.ts`;

  if (existsSync(fileName)) {
    return;
  }

  // @ts-ignore
  const result: MobileOnboardingDataCollection = {};
  for (let targetLanguage of ChatGPTLanguages) {
    console.log({ targetLanguage });
    const welcomeCardResult = await buildDirectResult({
      payload: {
        // @ts-ignore
        source: languages[sourceLanguage].welcomeScreenCard,
        sourceLanguage,
        targetLanguage,
      },
    });

    if (welcomeCardResult.success === false) {
      console.log(welcomeCardResult);
      throw welcomeCardResult;
    }

    const directTranslationResult = await buildDirectResult({
      payload: {
        // @ts-ignore
        source: languages[sourceLanguage].directTranslationExample,
        sourceLanguage,
        targetLanguage,
      },
    });

    if (directTranslationResult.success === false) {
      console.log(directTranslationResult);
      throw directTranslationResult;
    }

    const reverseTranslationResult = await buildReverseResult({
      // @ts-ignore
      target:
        // @ts-ignore
        languages[sourceLanguage].reverseTranslationExample[targetLanguage],
      sourceLanguage,
      targetLanguage,
    });

    if (reverseTranslationResult.success === false) {
      console.log(reverseTranslationResult);
      throw reverseTranslationResult;
    }

    const contextTranslationResult = await buildDirectResult({
      payload: {
        // @ts-ignore
        source: languages[sourceLanguage].contextTranslationExample.word,
        // @ts-ignore
        context: languages[sourceLanguage].contextTranslationExample.text,
        sourceLanguage,
        targetLanguage,
      },
    });

    if (contextTranslationResult.success === false) {
      console.log(contextTranslationResult);
      throw contextTranslationResult;
    }

    result[targetLanguage] = {
      welcomeScreenCard: analyzeItemToCard(
        sourceLanguage,
        welcomeCardResult.value.items[0]
      ),
      directTranslationExample: {
        // @ts-ignore
        text: languages[sourceLanguage].directTranslationExample,
        sourceLanguage,
        targetLanguage,
        isReversed: false,
        // @ts-ignore
        results: directTranslationResult.value.items
          .slice(0, 2)
          .map((item) => analyzeItemToCard(sourceLanguage, item)),
      },
      reverseTranslationExample: {
        // @ts-ignore
        text: languages[sourceLanguage].reverseTranslationExample[
          targetLanguage
        ],
        sourceLanguage,
        targetLanguage,
        isReversed: true,
        // @ts-ignore
        results: reverseTranslationResult.value.items
          .slice(0, 2)
          .map((item) => analyzeItemToCard(sourceLanguage, item)),
      },
      contextTranslationExample: {
        // @ts-ignore
        text: languages[sourceLanguage].contextTranslationExample.text,
        // @ts-ignore
        results: contextTranslationResult.value.items
          .slice(0, 2)
          .map((item) => analyzeItemToCard(sourceLanguage, item)),
      },
    };
  }

  writeFileSync(
    fileName,
    `import { MobileOnboardingDataCollection } from '@vocably/model';

export const onboardingCollection: MobileOnboardingDataCollection = ${JSON.stringify(
      result
    )};
  `
  );
};

const analyzeItemToCard = (
  language: GoogleLanguage,
  analyzeItem: AnalysisItem
): Card => {
  return {
    language,
    // @ts-ignore
    source: analyzeItem.source,
    // @ts-ignore
    ipa: analyzeItem.ipa ?? '',
    example: join(analyzeItem.examples ?? []),
    definition: join(analyzeItem.definitions),
    translation: analyzeItem.translation,
    partOfSpeech: analyzeItem.partOfSpeech ?? '',
    g: analyzeItem.g,
    tags: [],
  };
};
