import 'zx/globals';
import { scriptsDir } from './helpers/dirs.mjs';

cd(scriptsDir);

$`node ./reset-user-subscription.mjs`;
$`node ./reset-user-decks.mjs`;
