import { dirname, normalize } from 'path';
import { fileURLToPath } from 'url';

export const scriptsDir = dirname(dirname(fileURLToPath(import.meta.url)));
export const rootDir = normalize(`${scriptsDir}/..`);
export const packagesDir = `${rootDir}/packages`;
