const { execSync } = require('child_process');
const { readFileSync, writeFileSync } = require('fs');
const { resolve } = require('path');

const rootDir = resolve(__dirname, '../');
process.chdir(rootDir);

const svgFilename = 'icon.svg';
const devFaviconFilename = 'dev-favicon.ico';

console.log(`Creating ${devFaviconFilename}...`);
execSync(
  `convert ${svgFilename} -set colorspace Gray -separate -average ${devFaviconFilename}`,
  {
    cwd: `assets`,
    stdio: 'inherit',
  }
);
console.log(`${devFaviconFilename} has been successfully created.`);

console.log('Creating extension icons...');
['16', '32', '48', '128'].forEach((size) => {
  const iconFileName = `icon-${size}x${size}.png`;
  execSync(
    `convert assets/${svgFilename} -resize ${size}x${size} packages/extension/assets/images/${iconFileName}`,
    {
      stdio: 'inherit',
    }
  );
});
console.log('Extension icons have been successfully created');

[
  [
    `assets/${devFaviconFilename}`,
    `packages/extension-content-script/public/favicon.ico`,
  ],
  [`assets/${devFaviconFilename}`, `packages/app/src/favicon.ico`],
].forEach(([source, dest]) => {
  console.log(`Copy ${source} to ${dest}`);
  execSync(`cp ${source} ${dest}`, {
    stdio: 'inherit',
  });
});

console.log('Updating button icon...');
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
