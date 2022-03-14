import { URLSearchParams } from 'url';
import { readFileSync, writeFileSync } from 'fs';
import { colors } from './helpers/colors.mjs';
import { config } from 'dotenv-flow';

config();

const dataFileName =
  process.env.PHP_ARRAY_TO_URLENCODE_DATA_FILE ?? 'example.txt';
const dataFolder = 'php-array-to-urlencode';
const dataFile = `${dataFolder}/${dataFileName}`;

console.log('Data file', colors.bgCyan, dataFile, colors.reset);

const phpArray = readFileSync(dataFile).toString();

const form = new URLSearchParams(
  Object.fromEntries(
    [...phpArray.matchAll(/\[(.+)] => ?(.*)/gm)].map((values) => [
      values[1],
      values[2],
    ])
  )
);
console.log(form.toString());

const outputFile = `${dataFolder}/output.txt`;
writeFileSync(outputFile, form.toString());
console.log(
  colors.bgCyan,
  `The output has been saved to ${outputFile}`,
  colors.reset
);
