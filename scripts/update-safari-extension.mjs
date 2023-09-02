import { mkdirSync } from 'fs';
import 'zx/globals';
import { rootDir } from './helpers/dirs.mjs';

const tempDir = `${rootDir}/tmp`;
mkdirSync(tempDir, { recursive: true });
cd(tempDir);
await $`curl http://vocably-prod-artifacts.s3-website.eu-central-1.amazonaws.com/latest.zip -o latest.zip`;
await $`unzip -o latest.zip -d latest`;
cd(rootDir);
await $`rm -rf safari-web-extension/Vocably/Vocably\\ Extension/Resources`;
await $`cp -r ${tempDir}/latest safari-web-extension/Vocably/Vocably\\ Extension/Resources`;
