import { readFileSync, writeFileSync } from 'fs';
import { convert } from 'html-to-text';
import 'zx/globals';
import { packagesDir } from './helpers/dirs.mjs';

const homepageText = convert(
  readFileSync(`${packagesDir}/www/dist/index.html`).toString()
).toLowerCase();

writeFileSync(
  `${packagesDir}/www-backend/src/homepage-text.ts`,
  `
export const homepageText = \`${homepageText}\`;
`
);

// convert();
