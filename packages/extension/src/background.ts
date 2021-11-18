chrome.runtime.onMessageExternal.addListener(
  async (request, sender, sendResponse) => {
    switch (request?.message) {
      case 'version':
        sendResponse({ version: chrome.runtime.getManifest().version });
        return;
      case 'storage.setItem':
        await chrome.storage.sync.set({
          [request?.data?.key]: request?.data?.value,
        });
        sendResponse();
        return;
      case 'storage.removeItem':
        await chrome.storage.sync.remove(request?.data?.key);
        sendResponse();
        return;
      case 'storage.clear':
        await chrome.storage.sync.clear();
        sendResponse();
        return;
      case 'storage.getAll':
        const all = await chrome.storage.sync.get(null);
        sendResponse(all);
        return;
      default:
        sendResponse({ error: 'Unknown action requested' });
    }
  }
);
