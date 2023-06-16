import { config } from 'dotenv-flow';
import { spinner } from 'zx/experimental';
import 'zx/globals';
import { scriptsDir } from './helpers/dirs.mjs';

config({
  path: scriptsDir,
});

cd(scriptsDir);

await $`node ./reset-user.mjs`;

const invocationUrl = `https://app.endtest.io/api.php?action=runWeb&appId=${process.env.ENDTEST_APP_ID}&appCode=${process.env.ENDTEST_APP_CODE}&suite=${process.env.ENDTEST_LATEST_ENV_SUITE}&platform=mac&os=bigsur&browser=chrome&browserVersion=latest&resolution=1280x1024&geolocation=sanfrancisco&cases=all&notes=`;

const hash = await (await fetch(invocationUrl)).text();

console.log('Results', `https://app.endtest.io/results?hash=${hash}`);

let resultString = '';

await spinner('Testing...', async () => {
  const checkUrl = `https://app.endtest.io/api.php?action=getResults&appId=${process.env.ENDTEST_APP_ID}&appCode=${process.env.ENDTEST_APP_CODE}&hash=${hash}&format=json`;

  do {
    await sleep(10000);
    resultString = await (await fetch(checkUrl)).text();
  } while (
    resultString === 'Test is still running.' ||
    resultString === 'Processing video recording.' ||
    resultString === 'Stopping.'
  );
});

try {
  console.log('Test result', JSON.parse(resultString));
} catch {
  console.error('Error', resultString);
  process.exit(1);
}
