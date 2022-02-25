import 'zx/globals';
import { packagesDir } from './helpers/dirs.mjs';

cd(`${packagesDir}/app`);
await $`npm run build`;
await $`aws s3 sync dist  s3://vocably-dev-app --delete`;
