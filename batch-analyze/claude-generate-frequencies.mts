#!/usr/bin/env -S npx vite-node

// Walks through the units of speech of every vocably-languages repo and
// creates Claude batches that generate the missing frequency values.
// Only valid, existing units of speech without a frequency are queued.
// With --sync, every repo is synced with S3 before the walk.
//
// Usage: ./claude-generate-frequencies.mts [--sync] [language ...]
//
// Then: ./claude-send-batch.mts, ./claude-download-results.mts,
// ./claude-handle-frequencies.mts

import { isAiAnalysis, validateSource } from '@vocably/analyze';
import { type GoogleLanguage, languageList } from '@vocably/model';
import { config } from 'dotenv-flow';
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  writeFileSync,
} from 'node:fs';
import {
  claudeFrequencyBatchPrefix,
  type ClaudeFrequencyPayloads,
  claudePayloadsDir,
  languagesDir,
} from './claude-utils.js';
import {
  type FrequencyPayload,
  getClaudeFrequencyBatchItem,
  sanitizeFrequency,
} from './claude-frequency-utils.js';
import { checkEnvironment, execute } from './utils.js';

config();

const usage =
  'Usage: ./claude-generate-frequencies.mts [--sync] [language ...]';

const args = process.argv.slice(2);
const shouldSync = args.includes('--sync');
const languageArgs = args.filter((arg) => arg !== '--sync');

const googleLanguages = Object.keys(languageList) as GoogleLanguage[];

// Skipped when walking all the repos. Passing one explicitly still processes it.
const excludedLanguages: GoogleLanguage[] = ['af', 'hu', 'ru', 'de', 'nl'];

// Repo folders are lowercased language codes (e.g. pt-pt for pt-PT).
const toGoogleLanguage = (value: string): GoogleLanguage | undefined =>
  googleLanguages.find(
    (language) => language.toLowerCase() === value.toLowerCase()
  );

const languages: GoogleLanguage[] = (
  languageArgs.length > 0 ? languageArgs : readdirSync(languagesDir)
).flatMap((value) => {
  const language = toGoogleLanguage(value);

  if (language === undefined) {
    if (languageArgs.length > 0) {
      console.error(`Invalid language: "${value}". ${usage}`);
      process.exit(1);
    }

    return [];
  }

  if (languageArgs.length === 0 && excludedLanguages.includes(language)) {
    return [];
  }

  return [language];
});

console.log(`Languages: ${languages.join(', ')}. Sync: ${shouldSync}`);

if (shouldSync) {
  checkEnvironment();

  for (const language of languages) {
    try {
      await execute(`./sync.mts ${language}`, { cwd: '../sync-server' });
    } catch (e) {
      console.error(`Unable to sync ${language}: ${e}`);
    }
  }
}

// Keeps every batch well below the Claude batch limits (100k requests / 256 MB).
const batchSize = 10000;

mkdirSync('./data/batches', { recursive: true });
mkdirSync(claudePayloadsDir, { recursive: true });

const timestamp = Date.now();

let rows: ReturnType<typeof getClaudeFrequencyBatchItem>[] = [];
let payloads: ClaudeFrequencyPayloads = {};
let batchCount = 0;

// Chunks are written as soon as they fill up to keep the memory usage low.
// Every batch holds a single language, so the language is in the file name.
const flush = (language: GoogleLanguage, index: number) => {
  if (rows.length === 0) {
    return;
  }

  // Must not contain "--": result files are named `${name}--${batchId}`.
  const name = `${claudeFrequencyBatchPrefix}${language}-${timestamp}-${index}`;
  const batchFile = `./data/batches/${name}.jsonl`;

  writeFileSync(batchFile, rows.map((r) => JSON.stringify(r)).join('\n'));
  writeFileSync(`${claudePayloadsDir}/${name}.json`, JSON.stringify(payloads));

  console.log(`Wrote ${rows.length} batch items to ${batchFile}`);

  rows = [];
  payloads = {};
  batchCount++;
};

let total = 0;
let withFrequency = 0;
let nonExistent = 0;
let invalid = 0;
let duplicates = 0;
let queued = 0;
const queuedByLanguage = new Map<GoogleLanguage, number>();

for (const language of languages) {
  const unitsOfSpeechDir = `${language.toLowerCase()}/units-of-speech`;

  if (!existsSync(`${languagesDir}/${unitsOfSpeechDir}`)) {
    console.log(`${language}: no units of speech. Skipping.`);
    continue;
  }

  const seen = new Set<string>();
  let languageQueued = 0;
  let languageBatchCount = 0;

  for (const sourceDir of readdirSync(`${languagesDir}/${unitsOfSpeechDir}`)) {
    if (sourceDir === '.DS_Store') {
      continue;
    }

    const sourcePath = `${unitsOfSpeechDir}/${sourceDir}`;

    for (const fileName of readdirSync(`${languagesDir}/${sourcePath}`)) {
      if (!fileName.endsWith('.json')) {
        continue;
      }

      total++;

      const file = `${sourcePath}/${fileName}`;

      let analysis: unknown;

      try {
        analysis = JSON.parse(readFileSync(`${languagesDir}/${file}`, 'utf-8'));
      } catch (e) {
        console.error(`Unable to parse ${file}: ${e}`);
        invalid++;
        continue;
      }

      if (!isAiAnalysis(analysis)) {
        invalid++;
        continue;
      }

      if (analysis.exists === false) {
        nonExistent++;
        continue;
      }

      if (sanitizeFrequency(analysis.frequency) !== undefined) {
        withFrequency++;
        continue;
      }

      const partOfSpeech = fileName.slice(0, -'.json'.length);
      const source = analysis.source ?? sourceDir;

      if (
        partOfSpeech.trim() === '' ||
        source.trim() === '' ||
        !validateSource({ source, partOfSpeech })
      ) {
        invalid++;
        continue;
      }

      const payload: FrequencyPayload = {
        sourceLanguage: language,
        partOfSpeech,
        source,
      };

      const item = getClaudeFrequencyBatchItem(payload);

      if (seen.has(item.custom_id)) {
        duplicates++;
        continue;
      }

      seen.add(item.custom_id);

      rows.push(item);
      payloads[item.custom_id] = { ...payload, file };
      queued++;
      languageQueued++;

      if (rows.length >= batchSize) {
        flush(language, languageBatchCount++);
      }
    }
  }

  flush(language, languageBatchCount);

  console.log(`${language}: queued ${languageQueued}`);

  if (languageQueued > 0) {
    queuedByLanguage.set(language, languageQueued);
  }
}

console.log(
  [
    `Units of speech: ${total}`,
    `Already with frequency (skipped): ${withFrequency}`,
    `Non-existent: ${nonExistent}`,
    `Invalid: ${invalid}`,
    `Duplicates: ${duplicates}`,
    `Queued: ${queued} in ${batchCount} batch(es)`,
  ].join('\n')
);

console.log('\nAffected units of speech per language:');
for (const [language, count] of [...queuedByLanguage].sort(
  ([, a], [, b]) => b - a
)) {
  console.log(`  ${language}: ${count}`);
}

console.log(
  `\n${queued} units of speech in ${queuedByLanguage.size} language(s) will get a frequency.`
);
