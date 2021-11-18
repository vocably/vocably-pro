let dataMemory = {};

export class ChromeStorage {
  static setItem(key: string, value: string) {
    chrome.storage.sync.set({ [key]: JSON.stringify(value) });
    dataMemory[key] = value;
    return dataMemory[key];
  }

  static getItem(key): string {
    return Object.prototype.hasOwnProperty.call(dataMemory, key)
      ? dataMemory[key]
      : undefined;
  }

  static removeItem(key: string) {
    chrome.storage.sync.remove(key);
    return delete dataMemory[key];
  }

  static clear() {
    chrome.storage.sync.clear();
    dataMemory = {};
    return dataMemory;
  }

  static syncPromise: null | Promise<void> = null;

  static sync(): Promise<void> {
    if (ChromeStorage.syncPromise) {
      return ChromeStorage.syncPromise;
    }

    return chrome.storage.sync.get().then((data) => {
      dataMemory = data;
    });
  }
}
