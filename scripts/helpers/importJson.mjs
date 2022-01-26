import { readFile } from 'fs/promises';

export const importJson = async (fileName) => {
  return JSON.parse((await readFile(new URL(`file://${fileName}`))).toString());
};
