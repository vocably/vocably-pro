import { exec } from 'child_process';
import { config } from 'dotenv-flow';
import { inspect, promisify } from 'node:util';
import 'zx/globals';

config();

const execute = promisify(exec);
$.verbose = false;
const listLanguages = JSON.parse(
  await $`aws s3api list-objects --bucket vocably-prod-cards --prefix ""`
);

const languages = {};

for (const collections of listLanguages.Contents) {
  console.log(collections.Key);
  const cards = JSON.parse(
    (await execute(`aws s3 cp s3://vocably-prod-cards/${collections.Key} -`))
      .stdout || '""'
  );

  console.log(inspect(cards, { depth: null }));

  break;

  const language = collections.Key.split('/').pop();

  if (!languages[language]) {
    languages[language] = 0;
  }

  languages[language]++;
}

console.log(Object.entries(languages).sort((a, b) => b[1] - a[1]));
