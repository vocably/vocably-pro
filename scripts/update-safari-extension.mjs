import { mkdirSync, readFileSync, writeFileSync } from 'fs';
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

const manifest = JSON.parse(
  readFileSync(`${tempDir}/latest/manifest.json`, 'utf8')
);

const projectPbxprojPath = `safari-web-extension/Vocably/Vocably.xcodeproj/project.pbxproj`;
let projectPbxproj = readFileSync(projectPbxprojPath, 'utf8');

projectPbxproj = projectPbxproj.replaceAll(
  /MARKETING_VERSION = \d+(\.\d+)*/g,
  `MARKETING_VERSION = ${manifest.version}`
);

const versionMatch = /CURRENT_PROJECT_VERSION = (\d+)/g.exec(projectPbxproj);

if (!versionMatch) {
  throw new Error('Could not find CURRENT_PROJECT_VERSION');
}

const buildNumber = parseInt(versionMatch[1]) + 1;

projectPbxproj = projectPbxproj.replaceAll(
  /CURRENT_PROJECT_VERSION = \d+/g,
  `CURRENT_PROJECT_VERSION = ${buildNumber}`
);

writeFileSync(projectPbxprojPath, projectPbxproj, 'utf8');
