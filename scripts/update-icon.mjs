import 'zx/globals';
import { rootDir } from './helpers/dirs.mjs';

cd(rootDir);
await $`svgexport assets/web-dev-favicon.svg packages/extension-content-script/public/favicon.ico 196:196`;

await $`svgexport assets/web-favicon.svg packages/app/src/assets/favicon-196.png 196:196`;
await $`svgexport assets/web-favicon.svg packages/extension-popup/src/favicon.ico 196:196`;
await $`svgexport assets/web-favicon.svg packages/www/favicon.ico 196:196`;
await $`svgexport assets/web-favicon.svg packages/www/src/favicon.ico 196:196`;
await $`svgexport assets/3d-icon.svg assets/social-icon.png 810:810`;
await $`cp assets/www-logo.svg packages/www/src/assets/logo.svg`;

for (let size of ['16', '32', '48', '128']) {
  const iconFileName = `icon-${size}x${size}.png`;
  await $`svgexport assets/extension-icon.svg packages/extension/assets/images/${iconFileName} ${size}:${size}`;
}

await $`pwa-asset-generator assets/pwa-icon.svg packages/app/src/assets -i packages/app/src/index.html -m packages/app/src/manifest.json --padding 0`;

await $`svgexport assets/3d-icon.svg packages/app/src/assets/apple-icon-180.png 180:180`;
await $`svgexport assets/square-big.svg assets/square-big.png`;

await $`pwa-asset-generator assets/logo-light.svg packages/app/src/assets --padding "0 30% 100%" --background white --splash-only --portrait-only`;

await $`pwa-asset-generator assets/logo-light.svg packages/app/src/assets --padding "0 30% 20%" --background white --splash-only --landscape-only`;
