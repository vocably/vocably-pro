import 'zx/globals';
import { rootDir } from './helpers/dirs.mjs';

cd(rootDir);

await $`find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +`;
