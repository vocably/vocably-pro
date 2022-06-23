import 'zx/globals';
import { config } from 'dotenv-flow';
import { getSub } from './user/getSub.mjs';

config();

const sub = await getSub(process.env.USERNAME);
const deleteFolder = `aws s3 rm --recursive s3://${process.env.DECKS_BUCKET}/${sub}/`;

await $([deleteFolder]);
