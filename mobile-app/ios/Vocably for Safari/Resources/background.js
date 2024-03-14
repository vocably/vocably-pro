browser.runtime.onMessageExternal.addListener(
  (request, sender, sendResponse) => {
    console.log('Received request: ', request);

    //    console.log('backgrund sendNativeMessage');
    //    browser.runtime.sendNativeMessage("application.id", {message: "Hello from background page"}, function(response) {
    //        console.log("Received sendNativeMessage response:");
    //        console.log(response);
    //      sendResponse({ responseFromApp: response });
    //    });

    //    if (request.greeting === "hello")
    sendResponse({ farewell: 'goodbye!!' });

    //  return true;
  }
);

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('Received request: ', request);

  //    console.log('backgrund sendNativeMessage');
  //    browser.runtime.sendNativeMessage("application.id", {message: "Hello from background page"}, function(response) {
  //        console.log("Received sendNativeMessage response:");
  //        console.log(response);
  //      sendResponse({ responseFromApp: response });
  //    });

  //    if (request.greeting === "hello")
  sendResponse({ farewell: browser.runtime.id });

  //  return true;
});
