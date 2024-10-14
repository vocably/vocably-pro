import { browserEnv } from './browserEnv';

export const getLastUsedTagsIds = async (): Promise<string[]> => {
  const { lastUsedTagsIds } = await browserEnv.storage.local.get([
    'lastUsedTagsIds',
  ]);

  return lastUsedTagsIds ?? [];
};

export const saveLastUsedTagsIds = async (
  lastUsedTagsIds: string[]
): Promise<void> => {
  await browserEnv.storage.local.set({ lastUsedTagsIds });
};
