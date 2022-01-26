import { fileURLToPath } from 'url';
import { dirname, normalize } from 'path';

export const scriptsDir = dirname(dirname(fileURLToPath(import.meta.url)));
export const rootDir = normalize(`${scriptsDir}/..`);
export const packagesDir = `${rootDir}/packages`;
