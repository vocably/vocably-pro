import { GoogleLanguage } from '@vocably/model';

export type Greeting = {
  title: string;
  body: string;
  button: string;
};

export const greeting: Partial<Record<GoogleLanguage, Greeting>> = {
  en: {
    title: 'Hello to you too!',
    body: 'Vocably is a dictionary that turns the words you look up into flashcards. Just starting out? Generate a whole set in seconds.',
    button: 'Generate flashcards',
  },
  es: {
    title: '¡Hola a ti también!',
    body: 'Vocably es un diccionario que convierte las palabras que buscas en tarjetas. ¿Acabas de empezar? Genera un conjunto completo en segundos.',
    button: 'Generar tarjetas',
  },
  tr: {
    title: 'Size de merhaba!',
    body: 'Vocably, aradığınız kelimeleri kartlara dönüştüren bir sözlüktür. Yeni mi başlıyorsunuz? Saniyeler içinde koca bir kart seti oluşturun.',
    button: 'Kart oluştur',
  },
  vi: {
    title: 'Chào bạn!',
    body: 'Vocably là từ điển biến những từ bạn tra cứu thành thẻ ghi nhớ. Mới bắt đầu học? Tạo cả một bộ thẻ chỉ trong vài giây.',
    button: 'Tạo thẻ',
  },
  zh: {
    title: '你好呀!',
    body: 'Vocably 是一款能把你查过的单词变成学习卡片的词典。刚开始学习?几秒钟就能生成一整套卡片。',
    button: '生成卡片',
  },
  uk: {
    title: 'І вам вітаю!',
    body: 'Вокаблі — словник, який перетворює знайдені слова на картки. Тільки починаєте? Згенеруйте цілий набір за лічені секунди.',
    button: 'Згенерувати картки',
  },
  'pt-PT': {
    title: 'Olá para si também!',
    body: 'O Vocably é um dicionário que transforma as palavras que pesquisa em cartões. Está a começar agora? Gere um conjunto inteiro em segundos.',
    button: 'Gerar cartões',
  },
  pt: {
    title: 'Olá para você também!',
    body: 'O Vocably é um dicionário que transforma as palavras que você pesquisa em cartões. Está começando agora? Gere um conjunto inteiro em segundos.',
    button: 'Gerar cartões',
  },
  ko: {
    title: '안녕하세요!',
    body: 'Vocably는 찾아본 단어를 학습 카드로 바꿔 주는 사전입니다. 이제 막 시작하셨나요? 몇 초 만에 카드 세트를 만들어 보세요.',
    button: '카드 만들기',
  },
  ru: {
    title: 'И вам здравствуйте!',
    body: 'Вокебли — словарь, который превращает найденные слова в карточки. Только начинаете? Сгенерируйте целый набор за секунды.',
    button: 'Сгенерировать карточки',
  },
};
