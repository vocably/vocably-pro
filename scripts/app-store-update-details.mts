#!/usr/bin/env -S npx vite-node

// Updates the localized App Store details of the iOS app.
//
//   ./scripts/update-app-store-details.mts [--dry-run]
//
// For every interface language in `details` it sets the name and subtitle on
// the editable app info, and the description, keywords and promotional text
// on the editable App Store version. Only the fields that differ from App
// Store Connect are sent. "What's New" is set by app-store-update-whats-new.mts.
//
// Needs an App Store Connect API key with the App Manager or Admin role:
// APP_STORE_CONNECT_API_KEY_KEY_ID, APP_STORE_CONNECT_API_KEY_ISSUER_ID and
// APP_STORE_CONNECT_API_KEY_KEY (the .p8 contents, base64 or PEM), read from
// the environment, scripts/.env.local or scripts/.env.

import { sign } from 'node:crypto';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';

const scriptsDir = dirname(fileURLToPath(import.meta.url));

// dotenv never overwrites a variable that is already set, so the environment
// wins over .env.local, which wins over .env.
dotenv.config({ path: `${scriptsDir}/.env.local`, quiet: true });
dotenv.config({ path: `${scriptsDir}/.env`, quiet: true });

type Details = {
  // App info, max 30 characters each.
  name: string;
  subtitle: string;
  // App Store version, max 4000 characters.
  description: string;
  // Comma-separated, max 100 characters. Words already in the name and
  // subtitle are indexed anyway, so there is no need to repeat them.
  keywords: string;
  // Max 170 characters. Can be changed without submitting a new version.
  promo: string;
};

const eula =
  'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/';

const details: Record<string, Details> = {
  en: {
    name: 'Vocably: Dictionary Flashcards',
    subtitle: 'Translate and build vocabulary',
    description: `A dictionary focused on the needs of language learners.

Translate any word or phrase. Save your translations as high-quality flashcards. Memorize them with quizzes and questions.

What you can do with Vocably:

- Hear or see a word in real life: translate with the mobile app → save → learn
- Need to say something but don’t know the word? Search in your native language → save → learn
- Spot a new word on any website in iOS Safari: select → translate → save → learn
- Vocably also comes as a browser extension for your computer

Most of the flashcards created with Vocably will automatically contain:

- Part of speech
- Gender (when applicable)
- IPA / transcription
- Audio pronunciation
- Translations
- Definitions
- Usage examples

Study your flashcards with the Spaced Repetition System (SRS) - a proven method for effective study and retention of large amounts of information.

Mastering a language means using it and remembering every word. That's what Vocably is for.

Terms of Use (EULA): ${eula}`,
    keywords:
      'translator,english,german,spanish,french,italian,danish,dutch,norwegian,finnish,swedish,korean,greek',
    promo: '',
  },
  ru: {
    name: 'Vocably: словарь и карточки',
    subtitle: 'Перевод и обучение',
    description: `Словарь, созданный специально для людей, изучающих язык.

Переводите любые слова и фразы. Сохраняйте переводы в виде качественных карточек. Выучивайте свои сохранённые слова при помощью интерактивных тестов и вопросов.

Что можно делать с Vocably:

- Услышали или увидели слово в жизни: переведите в мобильном приложении → сохраните → выучите
- Нужно сказать что-то, а слова не знаете? Ищите на родном языке → сохраните → выучите
- Заметили новое слово на любом сайте в iOS Safari: выделите → переведите → сохраните → выучите
- Vocably также доступен как расширение для браузера на компьютере

Большинство карточек, созданных в Vocably, автоматически содержат:

- Часть речи
- Род (если применимо)
- Транскрипцию (IPA)
- Аудио произношение
- Переводы
- Определения
- Примеры употребления

Изучайте карточки с помощью системы интервальных повторений (SRS) — проверенного метода эффективного запоминания больших объёмов информации.

Владеть языком — значит использовать его в реальной жизни. Vocably создан специально чтобы помочь вам начать использовать язык и выучить каждое новое слово, встреченное на этом пути.

Условия использования (EULA): ${eula}`,
    keywords:
      'словарь,переводчик,обучение,английский,немецкий,французский,испанский,итальянский,голландский,слова',
    promo: '',
  },
  uk: {
    name: 'Vocably: словник і картки',
    subtitle: 'Переклад і вивчення слів',
    description: `Словник, створений спеціально для тих, хто вивчає мови.

Перекладайте будь-які слова та фрази. Зберігайте переклади у вигляді якісних карток. Запам'ятовуйте їх за допомогою тестів і запитань.

Що можна робити з Vocably:

- Почули чи побачили слово в житті: перекладіть у мобільному застосунку → збережіть → вивчіть
- Треба щось сказати, але не знаєте слова? Шукайте рідною мовою → збережіть → вивчіть
- Помітили нове слово на будь-якому сайті в iOS Safari: виділіть → перекладіть → збережіть → вивчіть
- Vocably також доступний як розширення для браузера на комп'ютері

Більшість карток, створених у Vocably, автоматично містять:

- Частину мови
- Рід (якщо застосовно)
- Транскрипцію (IPA)
- Аудіовимову
- Переклади
- Визначення
- Приклади вживання

Вивчайте картки за допомогою системи інтервальних повторень (SRS) — перевіреного методу ефективного запам'ятовування великих обсягів інформації.

Володіти мовою — означає користуватися нею й пам'ятати кожне слово. Саме для цього й існує Vocably.

Умови використання (EULA): ${eula}`,
    keywords:
      'перекладач,англійська,німецька,іспанська,французька,італійська,польська,слова,мови,навчання',
    promo: '',
  },
  es: {
    name: 'Vocably: diccionario y fichas',
    subtitle: 'Traduce y aprende vocabulario',
    description: `Un diccionario pensado para las necesidades de quienes aprenden idiomas.

Traduce cualquier palabra o frase. Guarda tus traducciones como fichas de alta calidad. Memorízalas con cuestionarios y preguntas.

Qué puedes hacer con Vocably:

- Oyes o ves una palabra en la vida real: tradúcela con la app → guárdala → apréndela
- ¿Necesitas decir algo pero no sabes la palabra? Búscala en tu idioma nativo → guárdala → apréndela
- Encuentras una palabra nueva en cualquier web en Safari de iOS: selecciónala → tradúcela → guárdala → apréndela
- Vocably también está disponible como extensión de navegador para tu ordenador

La mayoría de las fichas creadas con Vocably incluyen automáticamente:

- Categoría gramatical
- Género (cuando corresponde)
- AFI / transcripción
- Pronunciación en audio
- Traducciones
- Definiciones
- Ejemplos de uso

Estudia tus fichas con el Sistema de Repetición Espaciada (SRS), un método probado para estudiar y retener grandes cantidades de información de forma eficaz.

Dominar un idioma significa usarlo y recordar cada palabra. Para eso existe Vocably.

Condiciones de uso (EULA): ${eula}`,
    keywords:
      'traductor,inglés,alemán,francés,italiano,portugués,idiomas,palabras,aprender,tarjetas',
    promo: '',
  },
  pt: {
    name: 'Vocably: dicionário e cartões',
    subtitle: 'Traduza e aprenda vocabulário',
    description: `Um dicionário pensado nas necessidades de quem aprende idiomas.

Traduza qualquer palavra ou frase. Salve suas traduções como flashcards de alta qualidade. Memorize-as com quizzes e perguntas.

O que você pode fazer com o Vocably:

- Ouviu ou viu uma palavra no dia a dia: traduza com o app → salve → aprenda
- Precisa dizer algo, mas não sabe a palavra? Pesquise no seu idioma nativo → salve → aprenda
- Encontrou uma palavra nova em qualquer site no Safari do iOS: selecione → traduza → salve → aprenda
- O Vocably também está disponível como extensão de navegador para o seu computador

A maioria dos flashcards criados com o Vocably contém automaticamente:

- Classe gramatical
- Gênero (quando aplicável)
- AFI / transcrição
- Pronúncia em áudio
- Traduções
- Definições
- Exemplos de uso

Estude seus flashcards com o Sistema de Repetição Espaçada (SRS), um método comprovado para estudar e reter grandes quantidades de informação com eficiência.

Dominar um idioma significa usá-lo e lembrar de cada palavra. É para isso que o Vocably existe.

Termos de Uso (EULA): ${eula}`,
    keywords:
      'tradutor,inglês,espanhol,alemão,francês,italiano,idiomas,palavras,aprender,flashcards',
    promo: '',
  },
  tr: {
    name: 'Vocably: Sözlük ve Kartlar',
    subtitle: 'Çevir ve kelime öğren',
    description: `Dil öğrenenlerin ihtiyaçlarına odaklanan bir sözlük.

Herhangi bir kelimeyi veya ifadeyi çevirin. Çevirilerinizi yüksek kaliteli bilgi kartları olarak kaydedin. Testler ve sorularla ezberleyin.

Vocably ile neler yapabilirsiniz:

- Günlük hayatta bir kelime mi duydunuz ya da gördünüz? Mobil uygulamayla çevirin → kaydedin → öğrenin
- Bir şey söylemeniz gerekiyor ama kelimeyi bilmiyor musunuz? Ana dilinizde arayın → kaydedin → öğrenin
- iOS Safari'de herhangi bir sitede yeni bir kelime mi gördünüz? Seçin → çevirin → kaydedin → öğrenin
- Vocably, bilgisayarınız için tarayıcı uzantısı olarak da mevcut

Vocably ile oluşturulan kartların çoğu otomatik olarak şunları içerir:

- Sözcük türü
- Cinsiyet (varsa)
- IPA / transkripsiyon
- Sesli telaffuz
- Çeviriler
- Tanımlar
- Kullanım örnekleri

Kartlarınızı Aralıklı Tekrar Sistemi (SRS) ile çalışın: büyük miktarda bilgiyi etkili şekilde öğrenmek ve akılda tutmak için kanıtlanmış bir yöntem.

Bir dili öğrenmek, onu kullanmak ve her kelimeyi hatırlamak demektir. Vocably tam da bunun için var.

Kullanım Koşulları (EULA): ${eula}`,
    keywords:
      'çevirmen,ingilizce,almanca,ispanyolca,fransızca,italyanca,rusça,dil,öğrenme,flashcard',
    promo: '',
  },
  vi: {
    name: 'Vocably: Từ điển & Flashcard',
    subtitle: 'Dịch và học từ vựng',
    description: `Từ điển được thiết kế cho nhu cầu của người học ngoại ngữ.

Dịch bất kỳ từ hoặc cụm từ nào. Lưu bản dịch thành flashcard chất lượng cao. Ghi nhớ chúng qua các bài kiểm tra và câu hỏi.

Bạn có thể làm gì với Vocably:

- Nghe hoặc thấy một từ trong đời sống: dịch bằng ứng dụng → lưu → học
- Cần nói điều gì đó nhưng không biết từ? Tìm bằng tiếng mẹ đẻ → lưu → học
- Gặp từ mới trên bất kỳ trang web nào trong Safari trên iOS: chọn → dịch → lưu → học
- Vocably cũng có tiện ích mở rộng trình duyệt cho máy tính

Hầu hết flashcard tạo bằng Vocably tự động bao gồm:

- Từ loại
- Giống (nếu có)
- IPA / phiên âm
- Phát âm bằng âm thanh
- Bản dịch
- Định nghĩa
- Ví dụ sử dụng

Học flashcard với Hệ thống Lặp lại Ngắt quãng (SRS) - phương pháp đã được chứng minh giúp học và ghi nhớ hiệu quả lượng lớn thông tin.

Thành thạo một ngôn ngữ nghĩa là sử dụng nó và nhớ từng từ. Vocably ra đời vì điều đó.

Điều khoản sử dụng (EULA): ${eula}`,
    keywords:
      'tiếng anh,tiếng hàn,tiếng nhật,tiếng trung,tiếng pháp,tiếng đức,ngoại ngữ,từ mới,phát âm',
    promo: '',
  },
};

// Interface language → App Store localizations it is written to.
const localeMap: Record<string, string[]> = {
  en: ['en-US'],
  ru: ['ru'],
  uk: ['uk'],
  es: ['es-ES'],
  pt: ['pt-BR'],
  tr: ['tr'],
  vi: ['vi'],
};

const limits: Record<keyof Details, number> = {
  name: 30,
  subtitle: 30,
  description: 4000,
  keywords: 100,
  promo: 170,
};

// App Store version states whose metadata can still be edited.
const editableVersionStates = [
  'PREPARE_FOR_SUBMISSION',
  'DEVELOPER_REJECTED',
  'REJECTED',
  'METADATA_REJECTED',
  'INVALID_BINARY',
];

// App info states whose name and subtitle can still be edited.
const editableAppInfoStates = [
  'PREPARE_FOR_SUBMISSION',
  'DEVELOPER_REJECTED',
  'REJECTED',
];

const dryRun = process.argv.includes('--dry-run');

const problems = Object.entries(details).flatMap(([language, fields]) => [
  ...(localeMap[language] ? [] : [`${language}: no App Store locale`]),
  ...(Object.keys(limits) as (keyof Details)[])
    .filter((field) => fields[field].trim() === '' && field !== 'promo')
    .map((field) => `${language}.${field} is empty`),
  ...(Object.entries(limits) as [keyof Details, number][])
    .filter(([field, limit]) => fields[field].length > limit)
    .map(
      ([field, limit]) =>
        `${language}.${field} is ${fields[field].length} characters, max ${limit}`
    ),
]);

if (problems.length > 0) {
  console.error(problems.join('\n'));
  process.exit(1);
}

const requireEnv = (name: string) => {
  const value = process.env[name];
  if (!value) {
    console.error(`${name} is not set.`);
    process.exit(1);
  }
  return value;
};

const keyId = requireEnv('APP_STORE_CONNECT_API_KEY_KEY_ID');
const issuerId = requireEnv('APP_STORE_CONNECT_API_KEY_ISSUER_ID');
const rawKey = requireEnv('APP_STORE_CONNECT_API_KEY_KEY');
const privateKey = rawKey.includes('BEGIN PRIVATE KEY')
  ? rawKey.replace(/\\n/g, '\n')
  : Buffer.from(rawKey, 'base64').toString('utf8');
const bundleId = 'pro.vocably.app';

let token: { value: string; expiresAt: number } | undefined;

const getToken = () => {
  const now = Math.floor(Date.now() / 1000);
  if (token && token.expiresAt - 60 > now) return token.value;

  const encode = (value: object) =>
    Buffer.from(JSON.stringify(value)).toString('base64url');
  const expiresAt = now + 15 * 60;
  const unsigned = `${encode({ alg: 'ES256', kid: keyId, typ: 'JWT' })}.${encode(
    { iss: issuerId, iat: now, exp: expiresAt, aud: 'appstoreconnect-v1' }
  )}`;
  const signature = sign('sha256', new TextEncoder().encode(unsigned), {
    key: privateKey,
    dsaEncoding: 'ieee-p1363',
  }).toString('base64url');

  token = { value: `${unsigned}.${signature}`, expiresAt };
  return token.value;
};

type Resource = {
  id: string;
  type: string;
  attributes: Record<string, any>;
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const api = async <T = any,>(
  method: string,
  path: string,
  body?: object,
  attempt = 1
): Promise<T> => {
  const response = await fetch(`https://api.appstoreconnect.apple.com${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${getToken()}`,
      ...(body ? { 'Content-Type': 'application/json' } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  // App Store Connect answers with an occasional 500 that goes away on retry.
  if (response.status >= 500 && attempt < 5) {
    await sleep(attempt * 2000);
    return api(method, path, body, attempt + 1);
  }

  if (response.status === 403 && method !== 'GET') {
    throw new Error(
      `${method} ${path} is forbidden. The API key ${keyId} can't edit App Store metadata; use a key with the App Manager or Admin role.`
    );
  }

  if (!response.ok) {
    throw new Error(
      `${method} ${path} failed: ${response.status} ${await response.text()}`
    );
  }

  return response.status === 204 ? (undefined as T) : response.json();
};

// The attributes of `wanted` that differ from `current`.
const changes = (
  current: Record<string, any> | undefined,
  wanted: Record<string, string>
) =>
  Object.fromEntries(
    Object.entries(wanted).filter(
      ([key, value]) => (current?.[key] ?? '') !== value
    )
  );

const preview = (value: string) => {
  const line = value.replace(/\n/g, ' ⏎ ');
  return line.length > 80 ? `${line.slice(0, 77)}...` : line;
};

// Creates the localization when it is missing, otherwise patches the changed
// attributes.
const save = async (
  label: string,
  type: string,
  existing: Resource | undefined,
  wanted: Record<string, string>,
  relationship: { name: string; type: string; id: string },
  locale: string
) => {
  const changed = changes(existing?.attributes, wanted);
  if (Object.keys(changed).length === 0) {
    console.log(`  ${label}: up to date`);
    return;
  }

  console.log(`  ${label}: ${existing ? 'updating' : 'creating'}`);
  for (const [key, value] of Object.entries(changed)) {
    console.log(`    ${key}: ${preview(value)}`);
  }
  if (dryRun) return;

  if (existing) {
    await api('PATCH', `/v1/${type}/${existing.id}`, {
      data: { type, id: existing.id, attributes: changed },
    });
  } else {
    await api('POST', `/v1/${type}`, {
      data: {
        type,
        attributes: { locale, ...wanted },
        relationships: {
          [relationship.name]: {
            data: { type: relationship.type, id: relationship.id },
          },
        },
      },
    });
  }
};

const { data: apps } = await api<{ data: Resource[] }>(
  'GET',
  `/v1/apps?filter[bundleId]=${encodeURIComponent(bundleId)}`
);
const app = apps.find((a) => a.attributes.bundleId === bundleId);
if (!app) throw new Error(`App ${bundleId} not found.`);

const { data: appInfos } = await api<{ data: Resource[] }>(
  'GET',
  `/v1/apps/${app.id}/appInfos`
);
const appInfo = appInfos.find((info) =>
  editableAppInfoStates.includes(info.attributes.state)
);
if (!appInfo) {
  throw new Error(
    'There is no editable app info. Create a new App Store version in App Store Connect first.'
  );
}

const { data: versions } = await api<{ data: Resource[] }>(
  'GET',
  `/v1/apps/${app.id}/appStoreVersions?filter[platform]=IOS&filter[appStoreState]=${editableVersionStates.join(
    ','
  )}`
);
const version = versions[0];
if (!version) {
  throw new Error(
    'There is no editable iOS App Store version. Create one in App Store Connect first.'
  );
}
console.log(
  `${app.attributes.name} ${version.attributes.versionString} (${version.attributes.appStoreState})`
);

const { data: appInfoLocalizations } = await api<{ data: Resource[] }>(
  'GET',
  `/v1/appInfos/${appInfo.id}/appInfoLocalizations`
);
const { data: versionLocalizations } = await api<{ data: Resource[] }>(
  'GET',
  `/v1/appStoreVersions/${version.id}/appStoreVersionLocalizations?limit=200`
);

for (const [language, fields] of Object.entries(details)) {
  for (const locale of localeMap[language]) {
    console.log(`${locale}:`);

    await save(
      'name & subtitle',
      'appInfoLocalizations',
      appInfoLocalizations.find((l) => l.attributes.locale === locale),
      { name: fields.name, subtitle: fields.subtitle },
      { name: 'appInfo', type: 'appInfos', id: appInfo.id },
      locale
    );

    await save(
      'description, keywords & promo',
      'appStoreVersionLocalizations',
      versionLocalizations.find((l) => l.attributes.locale === locale),
      {
        description: fields.description,
        keywords: fields.keywords,
        promotionalText: fields.promo,
      },
      {
        name: 'appStoreVersion',
        type: 'appStoreVersions',
        id: version.id,
      },
      locale
    );
  }
}

console.log(dryRun ? 'Dry run, nothing changed.' : 'Done.');
