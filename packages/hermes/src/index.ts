import MessageSender = chrome.runtime.MessageSender;

const makeSend =
  (identifier: string) =>
  <Data, ReturnValue>(data: Data, extensionId?: string) => {
    return new Promise<ReturnValue>((resolve, reject) => {
      if (!chrome) {
        reject('chrome environment is not defined');
        return;
      }

      if (!chrome.runtime) {
        reject('chrome.runtime is not defined defined');
        return;
      }

      type SendParams<M = any, R = any> =
        | [
            extensionId: string,
            message: M,
            responseCallback?: (response: R) => void
          ]
        | [message: M, responseCallback?: (response: R) => void];

      const sendParams: SendParams = [
        { identifier, data },
        (response: ReturnValue) => {
          if (chrome.runtime.lastError) {
            return reject(chrome.runtime.lastError);
          }

          resolve(response);
        },
      ];

      if (extensionId) {
        sendParams.unshift(extensionId);
      }

      chrome.runtime.sendMessage(...sendParams);
    });
  };

type Callback<Data, ReturnValue> = (
  sendResponse: (r: ReturnValue) => ReturnValue,
  data: Data
) => Promise<ReturnValue> | ReturnValue;

type Subscriber<Data, ReturnValue> = (
  callback: Callback<Data, ReturnValue>
) => void;

const makeListener =
  <Data, ReturnValue>(
    identifier: string,
    callback: Callback<Data, ReturnValue>
  ) =>
  (
    request: any,
    sender: MessageSender,
    nativeSendResponse: (response: any) => void
  ) => {
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
  };

export const createMessage = <Data, ReturnValue>(
  identifier: string
): [(data: Data) => Promise<ReturnValue>, Subscriber<Data, ReturnValue>] => {
  const subscribe = (callback: Callback<Data, ReturnValue>) => {
    chrome.runtime.onMessage.addListener(makeListener(identifier, callback));
  };

  return [makeSend(identifier), subscribe];
};

export const createExternalMessage = <Data, ReturnValue>(
  identifier: string
): [
  (extensionId: string, data: Data) => Promise<ReturnValue>,
  Subscriber<Data, ReturnValue>
] => {
  const send = makeSend(identifier);

  const subscribe = (callback: Callback<Data, ReturnValue>) => {
    chrome.runtime.onMessageExternal.addListener(
      makeListener(identifier, callback)
    );
  };

  return [
    (extensionId: string, data: Data) => send(data, extensionId),
    subscribe,
  ];
};
