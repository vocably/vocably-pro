chrome.runtime.onMessageExternal.addListener(async function (
  request,
  sender,
  sendResponse
) {
  if (request.session) {
    console.log(request.session);
  } else {
    console.log(request);
  }
  sendResponse('OK');
});
