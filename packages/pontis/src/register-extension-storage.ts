import { ExtensionAuthStorage } from './extension-auth-storage';
import { StorageType } from './extension-storage-operations';
import {
  onClearRequest,
  onGetAllRequest,
  onRemoveItemRequest,
  onSetItemRequest,
} from './extension-operations';

export const registerExtensionStorage = (
  storageType: StorageType
): ExtensionAuthStorage => {
  const extensionStorage = chrome.storage[storageType];
  const authStorage = new ExtensionAuthStorage(extensionStorage);

  onSetItemRequest(async (sendResponse, { key, value }) => {
    await authStorage.setItem(key, value);
    return sendResponse();
  });

  onRemoveItemRequest(async (sendResponse, key) => {
    await authStorage.removeItem(key);
    return sendResponse();
  });

  onClearRequest(async (sendResponse) => {
    await authStorage.clear();
    sendResponse();
  });

  onGetAllRequest(async (sendResponse) => {
    return sendResponse(await authStorage.getAll());
  });

  return authStorage;
};
