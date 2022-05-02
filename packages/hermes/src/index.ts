export const createMessage = <Data, ReturnValue>(
  identifier: string
): [
  (data: Data) => Promise<ReturnValue>,
  (
    callback: (
      sendResponse: (r: ReturnValue) => ReturnValue,
      data: Data
    ) => Promise<ReturnValue> | ReturnValue
  ) => void
] => {
  const send = (data: Data) => {
    return new Promise<ReturnValue>((resolve) => {
      chrome.runtime.sendMessage(
        { identifier, data },
        (response: ReturnValue) => {
          resolve(response);
        }
      );
    });
  };

  const subscribe = (
    callback: (
      sendResponse: (r: ReturnValue) => ReturnValue,
      data: Data
    ) => Promise<ReturnValue> | ReturnValue
  ) => {
    chrome.runtime.onMessage.addListener(
      (request, sender, nativeSendResponse) => {
        if (
          typeof request !== 'object' ||
          request === null ||
          request.identifier !== identifier
        ) {
          return;
        }

        const data = request.data as Data;

        const sendResponse = (r: ReturnValue) => {
          nativeSendResponse(r);
          return r;
        };

        callback(sendResponse, data);
        return true;
      }
    );
  };

  return [send, subscribe];
};

export const createExternalMessage = <Data, ReturnValue>(
  identifier: string
): [
  (extensionId: string, data: Data) => Promise<ReturnValue>,
  (
    callback: (
      sendResponse: (r: ReturnValue) => ReturnValue,
      data: Data
    ) => Promise<ReturnValue> | ReturnValue
  ) => void
] => {
  const send = (extensionId: string, data: Data) => {
    return new Promise<ReturnValue>((resolve) => {
      chrome.runtime.sendMessage(
        extensionId,
        { identifier, data },
        (response: ReturnValue) => {
          resolve(response);
        }
      );
    });
  };

  const subscribe = (
    callback: (
      sendResponse: (r: ReturnValue) => ReturnValue,
      data: Data
    ) => Promise<ReturnValue> | ReturnValue
  ) => {
    chrome.runtime.onMessageExternal.addListener(
      (request, sender, nativeSendResponse) => {
        if (
          typeof request !== 'object' ||
          request === null ||
          request.identifier !== identifier
        ) {
          return;
        }

        const data = request.data as Data;

        const sendResponse = (r: ReturnValue) => {
          nativeSendResponse(r);
          return r;
        };

        callback(sendResponse, data);
        return true;
      }
    );
  };

  return [send, subscribe];
};
