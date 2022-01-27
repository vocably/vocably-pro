import 'zx/globals';
import { packagesDir } from './helpers/dirs.mjs';

const packages = [
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
];

for (let packageName of packages) {
  console.log(`Building ${packageName}...`);
  await $`yarn --cwd ${packagesDir}/${packageName} build`;
}
