import { ExtensionAuthStorage } from './extension-auth-storage';
import { getAll, StorageType } from './extension-storage-operations';
import { Message } from './types';

export const registerExtensionStorage = (
  storageType: StorageType
): ExtensionAuthStorage => {
  const extensionStorage = chrome.storage[storageType];
  const authStorage = new ExtensionAuthStorage(extensionStorage);

  chrome.runtime.onMessageExternal.addListener(
    async (request, sender, sendResponse) => {
      const message = request?.message;
      const data = request?.data;

      switch (message) {
        case Message.setItem:
          authStorage.setItem(data?.key, data?.value);
          sendResponse();
          return;
        case Message.removeItem:
          authStorage.removeItem(data?.key);
          sendResponse();
          return;
        case Message.clear:
          authStorage.clear();
          sendResponse();
          return;
        case Message.getAll:
          const all = await getAll(extensionStorage);
          sendResponse(all);
          return;
      }
    }
  );

  return authStorage;
};
