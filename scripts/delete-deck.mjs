import 'zx/globals'

const env = process.argv[3];
const sub = process.argv[4]
const language = process.argv[5];

if (!env) {
  console.error(`User environment has not been specified.`);
  process.exit(1);
}

if (!sub) {
  console.error(`User sub has not been specified.`);
  process.exit(1);
}

if (!language) {
  console.error(`Language has not been specified.`);
  process.exit(1);
}

await $`aws s3 rm s3://vocably-${env}-cards/${sub}/languages/${language}`
