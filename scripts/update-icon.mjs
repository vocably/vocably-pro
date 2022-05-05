import 'zx/globals';
import { rootDir } from './helpers/dirs.mjs';
import { readFileSync, writeFileSync } from 'fs';

const svgFilename = 'icon.svg';
const icoFilename = 'favicon.ico';
const devFaviconFilename = 'dev-favicon.ico';

cd(rootDir);
await $`convert assets/${svgFilename} -set colorspace Gray -separate -average assets/${devFaviconFilename}`;
await $`convert assets/${svgFilename} assets/${icoFilename}`;
await $`convert -density 1200 assets/${svgFilename} assets/icon.png`;

for (let size of ['16', '32', '48', '128']) {
  const iconFileName = `icon-${size}x${size}.png`;
  await $`svgexport assets/${svgFilename} packages/extension/assets/images/${iconFileName} ${size}:${size}`;
}

await $`cp assets/${devFaviconFilename} packages/extension-content-script/public/favicon.ico`;
await $`cp assets/${icoFilename} packages/www/favicon.ico`;
await $`cp assets/${icoFilename} packages/extension-popup/src/favicon.ico`;

await $`pwa-asset-generator assets/icon.svg packages/app/src/assets -i packages/app/src/index.html -m packages/app/src/manifest.json --favicon --padding 0`;

await $`pwa-asset-generator assets/logo-light.svg packages/app/src/assets --padding "0 30% 100%" --background white --splash-only --portrait-only`;

await $`pwa-asset-generator assets/logo-light.svg packages/app/src/assets --padding "0 30% 20%" --background white --splash-only --landscape-only`;
