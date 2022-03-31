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

const svgImage = readFileSync(`assets/${svgFilename}`, 'utf8').toString();
const scssTemplate = readFileSync(`assets/_icon.scss.tpl`, 'utf8').toString();
writeFileSync(
  'assets/_icon.scss',
  scssTemplate.replace(
    '%DATA_IMAGE%',
    `data:image/svg+xml;base64,${Buffer.from(svgImage).toString('base64')}`
  )
);
console.log('Button icon has been successfully updated.');

await $`pwa-asset-generator assets/icon.svg -i packages/app/src/index.html -m packages/app/src/manifest.json packages/app/src/assets -f -p 0`;
