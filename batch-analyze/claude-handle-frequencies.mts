#!/usr/bin/env -S npx vite-node

// Writes the frequencies from the downloaded Claude batch results
// into the unit of speech files, then commits and pushes every
// affected language repo. Syncing runs only with --sync.
//
// Usage: ./claude-handle-frequencies.mts [--sync]

import type Anthropic from '@anthropic-ai/sdk';
import { type GoogleLanguage } from '@vocably/model';
import { config } from 'dotenv-flow';
import {
  existsSync,
  mkdirSync,
  readFileSync,
  renameSync,
  writeFileSync,
} from 'node:fs';
import {
  claudeFrequencyBatchPrefix,
  type ClaudeFrequencyPayloads,
  claudePayloadsDir,
  getFileName,
  languagesDir,
} from './claude-utils.js';
import { handleClaudeFrequencyResponse } from './claude-frequency-utils.js';
import { checkEnvironment, execute, listFiles } from './utils.js';

config();

const shouldSync = process.argv.slice(2).includes('--sync');

const files = (await listFiles('./data/results')).filter((file) =>
  getFileName(file).startsWith(claudeFrequencyBatchPrefix)
);

if (files.length === 0) {
  console.log('No Claude frequency results to process.');
}

mkdirSync('./data/processed', { recursive: true });

const affectedLanguages = new Set<GoogleLanguage>();

for (const file of files) {
  console.log(`Processing ${file}`);

  const batchName = getFileName(file).split('--')[0];
  const payloads: ClaudeFrequencyPayloads = JSON.parse(
    readFileSync(`${claudePayloadsDir}/${batchName}.json`).toString()
  );

  const items: Anthropic.Messages.MessageBatchIndividualResponse[] =
    readFileSync(file)
      .toString()
      .split('\n')
      .filter((line) => line.length > 0)
      .map((line) => JSON.parse(line));

  console.log(`Contains ${items.length} items`);

  const failed: ClaudeFrequencyPayloads[string][] = [];
  let saved = 0;

  for (const { custom_id, result } of items) {
    const payload = payloads[custom_id];

    if (!payload) {
      console.error(`Unknown custom_id ${custom_id}. Skipping.`);
      continue;
    }

    const { source, partOfSpeech, file: unitOfSpeechFile } = payload;

    if (result.type !== 'succeeded') {
      console.error(`${source} (${partOfSpeech}): request ${result.type}`);
      failed.push(payload);
      continue;
    }

    const frequencyResult = handleClaudeFrequencyResponse(result.message);

    if (!frequencyResult.success) {
      console.error(
        `${source} (${partOfSpeech}): ${frequencyResult.reason}`,
        frequencyResult.extra
      );
      failed.push(payload);
      continue;
    }

    const filePath = `${languagesDir}/${unitOfSpeechFile}`;

    if (!existsSync(filePath)) {
      console.error(`${filePath} no longer exists. Skipping.`);
      continue;
    }

    // The file is re-read because it might have changed since the batch was created.
    const analysis = JSON.parse(readFileSync(filePath, 'utf-8'));
    writeFileSync(
      filePath,
      JSON.stringify({ ...analysis, frequency: frequencyResult.value })
    );
    saved++;
    affectedLanguages.add(payload.sourceLanguage);
  }

  console.log(`Saved ${saved} frequencies. Failed ${failed.length}.`);

  if (failed.length > 0) {
    const failedFile = `./data/failed-${batchName}.json`;
    writeFileSync(failedFile, JSON.stringify(failed, null, 2));
    console.log(`Failed items are saved to ${failedFile}`);
  }

  renameSync(file, `./data/processed/${getFileName(file)}`);
}

if (shouldSync && affectedLanguages.size > 0) {
  checkEnvironment();
}

for (const language of affectedLanguages) {
  console.log(`Committing${shouldSync ? ' and syncing' : ''} ${language}`);

  const repoDir = `${languagesDir}/${language.toLowerCase()}`;

  try {
    await execute('git add units-of-speech', { cwd: repoDir });
    await execute(`git commit -m 'feat: frequency' && git push`, {
      cwd: repoDir,
    });
    if (shouldSync) {
      await execute(`./sync.mts ${language}`, { cwd: '../sync-server' });
    }
  } catch (e) {
    console.error(`Unable to commit or sync ${language}: ${e}`);
  }
}
