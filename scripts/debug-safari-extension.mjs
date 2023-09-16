import 'zx/globals';
import { rootDir } from './helpers/dirs.mjs';

cd(rootDir);
await $`cp -a packages/extension/dist/. safari-web-extension/Vocably/Vocably\\ Extension/Resources`;
