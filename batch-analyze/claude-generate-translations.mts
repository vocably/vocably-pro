#!/usr/bin/env -S npx vite-node

// Walks through all units of speech of the source language and creates
// Claude translation batches into the target language.
// When overwriteAll is false, units of speech that already have
// a translation into the target language are skipped.
//
// Usage: ./claude-generate-translations.mts <sourceLanguage> <targetLanguage> [overwriteAll=false]

import {
  getClaudeTranslationBatchItem,
  getUnitOfSpeechTranslationFileName,
} from '@vocably/analyze';
import { type GoogleLanguage, isGoogleLanguage } from '@vocably/model';
import { config } from 'dotenv-flow';
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  writeFileSync,
} from 'node:fs';
import {
  claudePayloadsDir,
  type ClaudePayloads,
  claudeTranslateBatchPrefix,
  languagesDir,
  type TranslateUnitOfSpeechPayload,
} from './claude-utils.js';

config();

const usage =
  'Usage: ./claude-generate-translations.mts <sourceLanguage> <targetLanguage> [overwriteAll=false]';

const parseLanguage = (value: string | undefined, name: string) => {
  if (value === undefined || !isGoogleLanguage(value)) {
    console.error(`Invalid ${name}: "${value}". ${usage}`);
    process.exit(1);
  }

  return value;
};

const parseBoolean = (value: string | undefined, name: string) => {
  if (value === undefined || value === 'false') {
    return false;
  }

  if (value === 'true') {
    return true;
  }

  console.error(`Invalid ${name}: "${value}". ${usage}`);
  process.exit(1);
};

const sourceLanguage: GoogleLanguage = parseLanguage(
  process.argv[2],
  'sourceLanguage'
);
const targetLanguage: GoogleLanguage = parseLanguage(
  process.argv[3],
  'targetLanguage'
);
const overwriteAll = parseBoolean(process.argv[4], 'overwriteAll');

console.log(
  `Source: ${sourceLanguage}, target: ${targetLanguage}, overwriteAll: ${overwriteAll}`
);

// Keeps every batch well below the Claude batch limits (100k requests / 256 MB).
const batchSize = 10000;

const unitsOfSpeechDir = `${languagesDir}/${sourceLanguage}/units-of-speech`;

type Chunk = {
  rows: ReturnType<typeof getClaudeTranslationBatchItem>[];
  payloads: ClaudePayloads;
};

const chunks: Chunk[] = [];
let total = 0;
let translated = 0;
let nonExistent = 0;
let invalid = 0;
let duplicates = 0;
let queued = 0;
const seen = new Set<string>();

for (const sourceDir of readdirSync(unitsOfSpeechDir)) {
  const sourcePath = `${unitsOfSpeechDir}/${sourceDir}`;

  for (const file of readdirSync(sourcePath)) {
    if (!file.endsWith('.json')) {
      continue;
    }

    total++;

    let analysis: any;

    try {
      analysis = JSON.parse(readFileSync(`${sourcePath}/${file}`).toString());
    } catch (e) {
      console.error(`Unable to parse ${sourcePath}/${file}: ${e}`);
      invalid++;
      continue;
    }

    const partOfSpeech = file.slice(0, -'.json'.length);
    const source: string = analysis.source ?? sourceDir;

    if (partOfSpeech.trim() === '' || source.trim() === '') {
      invalid++;
      continue;
    }

    if (analysis.exists === false) {
      nonExistent++;
      continue;
    }

    const payload: TranslateUnitOfSpeechPayload = {
      sourceLanguage,
      targetLanguage,
      partOfSpeech,
      source,
      definitions: analysis.definitions,
      examples: analysis.examples,
      number: analysis.number,
    };

    if (!overwriteAll) {
      const translationFile = `${languagesDir}/${getUnitOfSpeechTranslationFileName(
        payload
      )}`;

      if (existsSync(translationFile)) {
        translated++;
        continue;
      }
    }

    const item = getClaudeTranslationBatchItem(payload);

    if (seen.has(item.custom_id)) {
      duplicates++;
      continue;
    }

    seen.add(item.custom_id);

    if (
      chunks.length === 0 ||
      chunks[chunks.length - 1].rows.length >= batchSize
    ) {
      chunks.push({ rows: [], payloads: {} });
    }

    const chunk = chunks[chunks.length - 1];
    chunk.rows.push(item);
    chunk.payloads[item.custom_id] = payload;
    queued++;
  }
}

mkdirSync('./data/batches', { recursive: true });
mkdirSync(claudePayloadsDir, { recursive: true });

const timestamp = Date.now();

chunks.forEach(({ rows, payloads }, index) => {
  // Must not contain "--": result files are named `${name}--${batchId}`.
  const name = `${claudeTranslateBatchPrefix}${sourceLanguage}-${targetLanguage}-${timestamp}-${index}`;
  const batchFile = `./data/batches/${name}.jsonl`;

  writeFileSync(batchFile, rows.map((r) => JSON.stringify(r)).join('\n'));
  writeFileSync(`${claudePayloadsDir}/${name}.json`, JSON.stringify(payloads));

  console.log(`Wrote ${rows.length} batch items to ${batchFile}`);
});

console.log(
  [
    `Units of speech: ${total}`,
    `Already translated (skipped): ${translated}`,
    `Non-existent: ${nonExistent}`,
    `Invalid: ${invalid}`,
    `Duplicates: ${duplicates}`,
    `Queued: ${queued} in ${chunks.length} batch(es)`,
  ].join('\n')
);
