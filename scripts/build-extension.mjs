import 'zx/globals';
import { packagesDir, rootDir } from './helpers/dirs.mjs';

const version = (
  await $`git describe --tags \`git rev-list --tags --max-count=1\``
)
  .toString()
  .slice(1)
  .trim();

process.env.VERSION = version;
console.log(`Building extension version ${version}...`);
await $`npm --prefix ${packagesDir}/extension run build`;

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
