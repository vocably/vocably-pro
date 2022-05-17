import 'zx/globals';
import { rootDir } from './helpers/dirs.mjs';

cd(rootDir);

const packages = [
  'sulna',
  'model',
  'srs',
  'hermes',
  'pontis',
  'webpack',
  'crud',
  'api',
  'extension-messages',
  'extension-service-worker',
  'extension-content-ui',
  'extension-content-script',
  'extension-angular-components',
];

for (let packageName of packages) {
  console.log(`Building ${packageName}...`);
  await $`npm --prefix ./packages/${packageName} run build`;
}
