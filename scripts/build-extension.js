const { readFileSync, unlinkSync } = require('fs');
const { spawnSync } = require('child_process');

const version = JSON.parse(
  readFileSync(`${__dirname}/../package.json`)
).version;

spawnSync('yarn', ['build'], {
  cwd: `${__dirname}/../packages/extension`,
  stdio: [process.stdin, process.stdout, process.stderr],
  env: {
    ...process.env,
    VERSION: version,
  },
});

const environment = (process.env.ENV_NAME ?? 'PROD').toLowerCase();
const fileName = `${environment}_${version.replace(/\./g, '_')}.zip`;

spawnSync('zip', ['-r', `../${fileName}`, '.'], {
  cwd: `${__dirname}/../packages/extension/dist`,
  stdio: [process.stdin, process.stdout, process.stderr],
  env: {
    ...process.env,
  },
});

const getBucketRes = spawnSync(
  'terraform',
  ['output', '-raw', 'artifacts_bucket'],
  {
    cwd: `${__dirname}/../platform`,
    env: {
      ...process.env,
    },
  }
);

if (getBucketRes.status !== 0) {
  console.error(`Error while getting the bucket name`);
  process.stderr.write(getBucketRes.stderr);
  process.exitCode = getBucketRes.status;
  return;
}

const bucket = getBucketRes.stdout.toString();

spawnSync(
  'aws',
  [
    's3',
    'cp',
    `${__dirname}/../packages/extension/${fileName}`,
    `s3://${bucket}`,
  ],
  {
    stdio: [process.stdin, process.stdout, process.stderr],
    env: {
      ...process.env,
    },
  }
);

unlinkSync(`${__dirname}/../packages/extension/${fileName}`);
