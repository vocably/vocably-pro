import 'zx/globals';
import { config } from 'dotenv-flow';
import { scriptsDir } from './helpers/dirs.mjs';

config();

await $`node ${scriptsDir}/reset-user.mjs`;

await $`${scriptsDir}/endtest.sh ${process.env.ENDTEST_APP_ID} ${process.env.ENDTEST_APP_CODE} "https://app.endtest.io/api.php?action=runWeb&appId=${process.env.ENDTEST_APP_ID}&appCode=${process.env.ENDTEST_APP_CODE}&suite=${process.env.ENDTEST_LATEST_ENV_SUITE}&platform=mac&os=bigsur&browser=chrome&browserVersion=latest&resolution=1280x1024&geolocation=sanfrancisco&cases=all&notes=" 5`;
