import 'zx/globals';
import { packagesDir, rootDir } from './helpers/dirs.mjs';
import { importJson } from './helpers/importJson.mjs';

const version = (await importJson(`${rootDir}/package.json`)).version;

process.env.VERSION = version;
console.log(`Building extension version ${version}...`);
await $`yarn --cwd ${packagesDir}/extension build`;

const envName = (process.env.ENV_NAME ?? 'DEV').toLowerCase();
const zipFileName = `${envName}_${version.replace(/\./g, '_')}.zip`;
const zipPath = `${rootDir}/extensions/${zipFileName}`;

cd(`${packagesDir}/extension/dist`);
await $`zip -r "${zipPath}" .`;

cd(`${rootDir}/platform`);
const tfOutput = JSON.parse((await $`terraform output -json`).stdout);
const artifactsBucketName = tfOutput.artifacts_bucket.value;
const artifactsBucketUrl = tfOutput.artifacts_url.value;

await $`aws s3 cp ${zipPath} s3://${artifactsBucketName}`;

console.log(`${artifactsBucketUrl}/${zipFileName}`);
