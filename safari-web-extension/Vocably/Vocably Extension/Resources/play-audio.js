/*!
 * Hello to whoever is reading this! I think you are cool 🤜🤛
 *
 * I did not obfuscate the code to help you better understand it.
 * However, I don't know how to disable minification of web components (StencilJS).
 * Sorry, I didn't look too hard!
 * The code of the entire project is available at:
 * https://github.com/vocably/vocably-pro
 *
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ../../node_modules/@vocably/hermes/dist/esm/index.js
let browserEnv;
if (typeof chrome !== 'undefined') {
    browserEnv = chrome;
    // @ts-ignore
}
else if (typeof browser !== 'undefined') {
    // @ts-ignore
    browserEnv = browser;
}
const makeSend = (identifier) => (data, extensionId) => {
    return new Promise((resolve, reject) => {
        if (!browserEnv) {
            reject('browserEnv environment is not defined');
            return;
        }
        if (!browserEnv.runtime) {
            reject('browserEnv.runtime is not defined defined');
            return;
        }
        const sendParams = [
            { identifier, data },
            (response) => {
                if (browserEnv.runtime.lastError) {
                    return reject(browserEnv.runtime.lastError);
                }
                resolve(response);
            },
        ];
        if (extensionId) {
            sendParams.unshift(extensionId);
        }
        browserEnv.runtime.sendMessage(...sendParams);
    });
};
const makeListener = (identifier, callback) => (request, sender, nativeSendResponse) => {
    if (typeof request !== 'object' ||
        request === null ||
        request.identifier !== identifier) {
        return;
    }
    const data = request.data;
    const sendResponse = (r) => {
        nativeSendResponse(r);
        return r;
    };
    callback(sendResponse, data);
    return true;
};
const createMessage = (identifier) => {
    const subscribe = (callback) => {
        browserEnv.runtime.onMessage.addListener(makeListener(identifier, callback));
    };
    return [makeSend(identifier), subscribe];
};
const createExternalMessage = (identifier) => {
    const send = makeSend(identifier);
    const subscribe = (callback) => {
        browserEnv.runtime.onMessageExternal.addListener(makeListener(identifier, callback));
    };
    return [
        (extensionId, data) => send(data, extensionId),
        subscribe,
    ];
};

;// CONCATENATED MODULE: ../extension-messages/dist/esm/index.js

const createScope = (scope) => (identifier) => createMessage(`${scope}.${identifier}`);
const createScopedMessage = createScope('vocably');
const [isLoggedIn, onIsLoggedInRequest] = createScopedMessage('isLoggedIn');
const [getSettings, onGetSettingsRequest] = createScopedMessage('getSettings');
const [setSettings, onSetSettingsRequest] = createScopedMessage('setSettings');
const [isActive, onIsActiveRequest] = createScopedMessage('isActive');
const [isEligibleForTrial, onIsEligibleForTrialRequest] = createScopedMessage('isEligibleForTrial');
const [analyze, onAnalyzeRequest] = createScopedMessage('analyze');
const [removeCard, onRemoveCardRequest] = createScopedMessage('removeCard');
const [addCard, onAddCardRequest] = createScopedMessage('addCard');
const [listLanguages, onListLanguagesRequest] = createScopedMessage('listLanguages');
const [listTargetLanguages, onListTargetLanguagesRequest] = createScopedMessage('listTargetLanguages');
const [getLocationLanguage, onGetLocationLanguageRequest] = createScopedMessage('getLocationLanguage');
const [saveLocationLanguage, onSaveLocationLanguageRequest] = createScopedMessage('saveLocationLanguage');
const [cleanUp, onCleanUpRequest] = createScopedMessage('cleanUp');
const [ping, onPing] = createScopedMessage('ping');
const [getInternalProxyLanguage, onGetInternalProxyLanuage] = createScopedMessage('getInternalProxyLanguage');
const [setInternalProxyLanguage, onSetInternalProxyLanguage] = createScopedMessage('setInternalProxyLanguage');
const [getInternalSourceLanguage, onGetInternalSourceLanguage] = createScopedMessage('getInternalSourceLanguage');
const [setInternalSourceLanguage, onSetInternalSourceLanguage] = createScopedMessage('setInternalSourceLanguage');
const [isUserKnowsHowToAdd, onIsUserKnowsHowToAdd] = createScopedMessage('isUserKnowsHowToAdd');
const [setUserKnowsHowToAdd, onSetUserKnowsHowToAdd] = createScopedMessage('setUserKnowsHowToAdd');
const [pingExternal, onPingExternal] = createExternalMessage('vocably.ping-external');
const [setProxyLanguage, onSetProxyLanguage] = createExternalMessage('vocably.setProxyLanguage');
const [getProxyLanguage, onGetProxyLanguage] = createExternalMessage('vocably.getProxyLanguage');
const [setSourceLanguage, onSetSourceLanguage] = createExternalMessage('vocably.setSourceLanguage');
const [getSourceLanguage, onGetSourceLanguage] = createExternalMessage('vocably.getSourceLanguage');
const [getAudioPronunciation, onGetAudioPronunciation] = createScopedMessage('getAudioPronunciation');
const [askForRating, onAskForRating] = createScopedMessage('askForRating');
const [saveAskForRatingResponse, onSaveAskForRatingResponse] = createScopedMessage('askForRatingResponse');
const [playAudioPronunciation, onPlayAudioPronunciation] = createScopedMessage('playAudioPronunciation');
const [playAudioPronunciationOffscreen, onPlayAudioPronunciationOffscreen,] = createScopedMessage('playAudioPronunciationOffscreen');
const [canPlayOffScreen, onCanPlayOffScreen] = createScopedMessage('canPlayOffScreen');
const [attachTag, onAttachTag] = createScopedMessage('attachTag');
const [detachTag, onDetachTag] = createScopedMessage('detachTag');
const [updateTag, onUpdateTag] = createScopedMessage('updateTag');
const [deleteTag, onDeleteTag] = createScopedMessage('deleteTag');

;// CONCATENATED MODULE: ./src/play-audio.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const playDataUrl = (dataUrl) => __awaiter(void 0, void 0, void 0, function* () {
    return yield new Promise((resolve) => {
        try {
            const audio = new Audio(dataUrl);
            audio.addEventListener('ended', () => {
                resolve({
                    success: true,
                    value: true,
                });
            });
            audio.play().catch((e) => {
                resolve({
                    success: false,
                    errorCode: 'UNABLE_TO_PLAY_AUDIO_DATA_URL',
                    reason: 'An error occurred while playing the offscreen audio',
                    extra: e,
                });
            });
        }
        catch (e) {
            resolve({
                success: false,
                errorCode: 'UNABLE_TO_PLAY_AUDIO_DATA_URL',
                reason: 'An error occurred while playing the offscreen audio',
                extra: e,
            });
        }
    });
});
onPlayAudioPronunciationOffscreen((sendResponse, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield getAudioPronunciation(payload);
    if (result.success === false) {
        return sendResponse(result);
    }
    return sendResponse(yield playDataUrl(result.value.url));
}));

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheS1hdWRpby5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxrQkFBa0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUMvRHVFO0FBQ3ZFLCtDQUErQyxhQUFhLElBQUksTUFBTSxHQUFHLFdBQVc7QUFDcEY7QUFDTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHFCQUFxQjtBQUM1RCwrQ0FBK0MscUJBQXFCO0FBQ3BFLCtDQUErQyxxQkFBcUI7QUFDcEUsaURBQWlELHFCQUFxQjtBQUN0RSxpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNyQ1AsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ3dHO0FBQ3hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNELGlDQUFpQztBQUNqQyx5QkFBeUIscUJBQXFCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0B2b2NhYmx5L2V4dGVuc2lvbi8uLi8uLi9ub2RlX21vZHVsZXMvQHZvY2FibHkvaGVybWVzL2Rpc3QvZXNtL2luZGV4LmpzIiwid2VicGFjazovL0B2b2NhYmx5L2V4dGVuc2lvbi8uLi9leHRlbnNpb24tbWVzc2FnZXMvZGlzdC9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vQHZvY2FibHkvZXh0ZW5zaW9uLy4vc3JjL3BsYXktYXVkaW8udHMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGJyb3dzZXJFbnY7XG5pZiAodHlwZW9mIGNocm9tZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBicm93c2VyRW52ID0gY2hyb21lO1xuICAgIC8vIEB0cy1pZ25vcmVcbn1cbmVsc2UgaWYgKHR5cGVvZiBicm93c2VyICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBicm93c2VyRW52ID0gYnJvd3Nlcjtcbn1cbmNvbnN0IG1ha2VTZW5kID0gKGlkZW50aWZpZXIpID0+IChkYXRhLCBleHRlbnNpb25JZCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGlmICghYnJvd3NlckVudikge1xuICAgICAgICAgICAgcmVqZWN0KCdicm93c2VyRW52IGVudmlyb25tZW50IGlzIG5vdCBkZWZpbmVkJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFicm93c2VyRW52LnJ1bnRpbWUpIHtcbiAgICAgICAgICAgIHJlamVjdCgnYnJvd3NlckVudi5ydW50aW1lIGlzIG5vdCBkZWZpbmVkIGRlZmluZWQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzZW5kUGFyYW1zID0gW1xuICAgICAgICAgICAgeyBpZGVudGlmaWVyLCBkYXRhIH0sXG4gICAgICAgICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYnJvd3NlckVudi5ydW50aW1lLmxhc3RFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGJyb3dzZXJFbnYucnVudGltZS5sYXN0RXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF07XG4gICAgICAgIGlmIChleHRlbnNpb25JZCkge1xuICAgICAgICAgICAgc2VuZFBhcmFtcy51bnNoaWZ0KGV4dGVuc2lvbklkKTtcbiAgICAgICAgfVxuICAgICAgICBicm93c2VyRW52LnJ1bnRpbWUuc2VuZE1lc3NhZ2UoLi4uc2VuZFBhcmFtcyk7XG4gICAgfSk7XG59O1xuY29uc3QgbWFrZUxpc3RlbmVyID0gKGlkZW50aWZpZXIsIGNhbGxiYWNrKSA9PiAocmVxdWVzdCwgc2VuZGVyLCBuYXRpdmVTZW5kUmVzcG9uc2UpID0+IHtcbiAgICBpZiAodHlwZW9mIHJlcXVlc3QgIT09ICdvYmplY3QnIHx8XG4gICAgICAgIHJlcXVlc3QgPT09IG51bGwgfHxcbiAgICAgICAgcmVxdWVzdC5pZGVudGlmaWVyICE9PSBpZGVudGlmaWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZGF0YSA9IHJlcXVlc3QuZGF0YTtcbiAgICBjb25zdCBzZW5kUmVzcG9uc2UgPSAocikgPT4ge1xuICAgICAgICBuYXRpdmVTZW5kUmVzcG9uc2Uocik7XG4gICAgICAgIHJldHVybiByO1xuICAgIH07XG4gICAgY2FsbGJhY2soc2VuZFJlc3BvbnNlLCBkYXRhKTtcbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5leHBvcnQgY29uc3QgY3JlYXRlTWVzc2FnZSA9IChpZGVudGlmaWVyKSA9PiB7XG4gICAgY29uc3Qgc3Vic2NyaWJlID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgIGJyb3dzZXJFbnYucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIobWFrZUxpc3RlbmVyKGlkZW50aWZpZXIsIGNhbGxiYWNrKSk7XG4gICAgfTtcbiAgICByZXR1cm4gW21ha2VTZW5kKGlkZW50aWZpZXIpLCBzdWJzY3JpYmVdO1xufTtcbmV4cG9ydCBjb25zdCBjcmVhdGVFeHRlcm5hbE1lc3NhZ2UgPSAoaWRlbnRpZmllcikgPT4ge1xuICAgIGNvbnN0IHNlbmQgPSBtYWtlU2VuZChpZGVudGlmaWVyKTtcbiAgICBjb25zdCBzdWJzY3JpYmUgPSAoY2FsbGJhY2spID0+IHtcbiAgICAgICAgYnJvd3NlckVudi5ydW50aW1lLm9uTWVzc2FnZUV4dGVybmFsLmFkZExpc3RlbmVyKG1ha2VMaXN0ZW5lcihpZGVudGlmaWVyLCBjYWxsYmFjaykpO1xuICAgIH07XG4gICAgcmV0dXJuIFtcbiAgICAgICAgKGV4dGVuc2lvbklkLCBkYXRhKSA9PiBzZW5kKGRhdGEsIGV4dGVuc2lvbklkKSxcbiAgICAgICAgc3Vic2NyaWJlLFxuICAgIF07XG59O1xuIiwiaW1wb3J0IHsgY3JlYXRlRXh0ZXJuYWxNZXNzYWdlLCBjcmVhdGVNZXNzYWdlIH0gZnJvbSAnQHZvY2FibHkvaGVybWVzJztcbmNvbnN0IGNyZWF0ZVNjb3BlID0gKHNjb3BlKSA9PiAoaWRlbnRpZmllcikgPT4gY3JlYXRlTWVzc2FnZShgJHtzY29wZX0uJHtpZGVudGlmaWVyfWApO1xuY29uc3QgY3JlYXRlU2NvcGVkTWVzc2FnZSA9IGNyZWF0ZVNjb3BlKCd2b2NhYmx5Jyk7XG5leHBvcnQgY29uc3QgW2lzTG9nZ2VkSW4sIG9uSXNMb2dnZWRJblJlcXVlc3RdID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgnaXNMb2dnZWRJbicpO1xuZXhwb3J0IGNvbnN0IFtnZXRTZXR0aW5ncywgb25HZXRTZXR0aW5nc1JlcXVlc3RdID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgnZ2V0U2V0dGluZ3MnKTtcbmV4cG9ydCBjb25zdCBbc2V0U2V0dGluZ3MsIG9uU2V0U2V0dGluZ3NSZXF1ZXN0XSA9IGNyZWF0ZVNjb3BlZE1lc3NhZ2UoJ3NldFNldHRpbmdzJyk7XG5leHBvcnQgY29uc3QgW2lzQWN0aXZlLCBvbklzQWN0aXZlUmVxdWVzdF0gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdpc0FjdGl2ZScpO1xuZXhwb3J0IGNvbnN0IFtpc0VsaWdpYmxlRm9yVHJpYWwsIG9uSXNFbGlnaWJsZUZvclRyaWFsUmVxdWVzdF0gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdpc0VsaWdpYmxlRm9yVHJpYWwnKTtcbmV4cG9ydCBjb25zdCBbYW5hbHl6ZSwgb25BbmFseXplUmVxdWVzdF0gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdhbmFseXplJyk7XG5leHBvcnQgY29uc3QgW3JlbW92ZUNhcmQsIG9uUmVtb3ZlQ2FyZFJlcXVlc3RdID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgncmVtb3ZlQ2FyZCcpO1xuZXhwb3J0IGNvbnN0IFthZGRDYXJkLCBvbkFkZENhcmRSZXF1ZXN0XSA9IGNyZWF0ZVNjb3BlZE1lc3NhZ2UoJ2FkZENhcmQnKTtcbmV4cG9ydCBjb25zdCBbbGlzdExhbmd1YWdlcywgb25MaXN0TGFuZ3VhZ2VzUmVxdWVzdF0gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdsaXN0TGFuZ3VhZ2VzJyk7XG5leHBvcnQgY29uc3QgW2xpc3RUYXJnZXRMYW5ndWFnZXMsIG9uTGlzdFRhcmdldExhbmd1YWdlc1JlcXVlc3RdID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgnbGlzdFRhcmdldExhbmd1YWdlcycpO1xuZXhwb3J0IGNvbnN0IFtnZXRMb2NhdGlvbkxhbmd1YWdlLCBvbkdldExvY2F0aW9uTGFuZ3VhZ2VSZXF1ZXN0XSA9IGNyZWF0ZVNjb3BlZE1lc3NhZ2UoJ2dldExvY2F0aW9uTGFuZ3VhZ2UnKTtcbmV4cG9ydCBjb25zdCBbc2F2ZUxvY2F0aW9uTGFuZ3VhZ2UsIG9uU2F2ZUxvY2F0aW9uTGFuZ3VhZ2VSZXF1ZXN0XSA9IGNyZWF0ZVNjb3BlZE1lc3NhZ2UoJ3NhdmVMb2NhdGlvbkxhbmd1YWdlJyk7XG5leHBvcnQgY29uc3QgW2NsZWFuVXAsIG9uQ2xlYW5VcFJlcXVlc3RdID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgnY2xlYW5VcCcpO1xuZXhwb3J0IGNvbnN0IFtwaW5nLCBvblBpbmddID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgncGluZycpO1xuZXhwb3J0IGNvbnN0IFtnZXRJbnRlcm5hbFByb3h5TGFuZ3VhZ2UsIG9uR2V0SW50ZXJuYWxQcm94eUxhbnVhZ2VdID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgnZ2V0SW50ZXJuYWxQcm94eUxhbmd1YWdlJyk7XG5leHBvcnQgY29uc3QgW3NldEludGVybmFsUHJveHlMYW5ndWFnZSwgb25TZXRJbnRlcm5hbFByb3h5TGFuZ3VhZ2VdID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgnc2V0SW50ZXJuYWxQcm94eUxhbmd1YWdlJyk7XG5leHBvcnQgY29uc3QgW2dldEludGVybmFsU291cmNlTGFuZ3VhZ2UsIG9uR2V0SW50ZXJuYWxTb3VyY2VMYW5ndWFnZV0gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdnZXRJbnRlcm5hbFNvdXJjZUxhbmd1YWdlJyk7XG5leHBvcnQgY29uc3QgW3NldEludGVybmFsU291cmNlTGFuZ3VhZ2UsIG9uU2V0SW50ZXJuYWxTb3VyY2VMYW5ndWFnZV0gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdzZXRJbnRlcm5hbFNvdXJjZUxhbmd1YWdlJyk7XG5leHBvcnQgY29uc3QgW2lzVXNlcktub3dzSG93VG9BZGQsIG9uSXNVc2VyS25vd3NIb3dUb0FkZF0gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdpc1VzZXJLbm93c0hvd1RvQWRkJyk7XG5leHBvcnQgY29uc3QgW3NldFVzZXJLbm93c0hvd1RvQWRkLCBvblNldFVzZXJLbm93c0hvd1RvQWRkXSA9IGNyZWF0ZVNjb3BlZE1lc3NhZ2UoJ3NldFVzZXJLbm93c0hvd1RvQWRkJyk7XG5leHBvcnQgY29uc3QgW3BpbmdFeHRlcm5hbCwgb25QaW5nRXh0ZXJuYWxdID0gY3JlYXRlRXh0ZXJuYWxNZXNzYWdlKCd2b2NhYmx5LnBpbmctZXh0ZXJuYWwnKTtcbmV4cG9ydCBjb25zdCBbc2V0UHJveHlMYW5ndWFnZSwgb25TZXRQcm94eUxhbmd1YWdlXSA9IGNyZWF0ZUV4dGVybmFsTWVzc2FnZSgndm9jYWJseS5zZXRQcm94eUxhbmd1YWdlJyk7XG5leHBvcnQgY29uc3QgW2dldFByb3h5TGFuZ3VhZ2UsIG9uR2V0UHJveHlMYW5ndWFnZV0gPSBjcmVhdGVFeHRlcm5hbE1lc3NhZ2UoJ3ZvY2FibHkuZ2V0UHJveHlMYW5ndWFnZScpO1xuZXhwb3J0IGNvbnN0IFtzZXRTb3VyY2VMYW5ndWFnZSwgb25TZXRTb3VyY2VMYW5ndWFnZV0gPSBjcmVhdGVFeHRlcm5hbE1lc3NhZ2UoJ3ZvY2FibHkuc2V0U291cmNlTGFuZ3VhZ2UnKTtcbmV4cG9ydCBjb25zdCBbZ2V0U291cmNlTGFuZ3VhZ2UsIG9uR2V0U291cmNlTGFuZ3VhZ2VdID0gY3JlYXRlRXh0ZXJuYWxNZXNzYWdlKCd2b2NhYmx5LmdldFNvdXJjZUxhbmd1YWdlJyk7XG5leHBvcnQgY29uc3QgW2dldEF1ZGlvUHJvbnVuY2lhdGlvbiwgb25HZXRBdWRpb1Byb251bmNpYXRpb25dID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgnZ2V0QXVkaW9Qcm9udW5jaWF0aW9uJyk7XG5leHBvcnQgY29uc3QgW2Fza0ZvclJhdGluZywgb25Bc2tGb3JSYXRpbmddID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgnYXNrRm9yUmF0aW5nJyk7XG5leHBvcnQgY29uc3QgW3NhdmVBc2tGb3JSYXRpbmdSZXNwb25zZSwgb25TYXZlQXNrRm9yUmF0aW5nUmVzcG9uc2VdID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgnYXNrRm9yUmF0aW5nUmVzcG9uc2UnKTtcbmV4cG9ydCBjb25zdCBbcGxheUF1ZGlvUHJvbnVuY2lhdGlvbiwgb25QbGF5QXVkaW9Qcm9udW5jaWF0aW9uXSA9IGNyZWF0ZVNjb3BlZE1lc3NhZ2UoJ3BsYXlBdWRpb1Byb251bmNpYXRpb24nKTtcbmV4cG9ydCBjb25zdCBbcGxheUF1ZGlvUHJvbnVuY2lhdGlvbk9mZnNjcmVlbiwgb25QbGF5QXVkaW9Qcm9udW5jaWF0aW9uT2Zmc2NyZWVuLF0gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdwbGF5QXVkaW9Qcm9udW5jaWF0aW9uT2Zmc2NyZWVuJyk7XG5leHBvcnQgY29uc3QgW2NhblBsYXlPZmZTY3JlZW4sIG9uQ2FuUGxheU9mZlNjcmVlbl0gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdjYW5QbGF5T2ZmU2NyZWVuJyk7XG5leHBvcnQgY29uc3QgW2F0dGFjaFRhZywgb25BdHRhY2hUYWddID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgnYXR0YWNoVGFnJyk7XG5leHBvcnQgY29uc3QgW2RldGFjaFRhZywgb25EZXRhY2hUYWddID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgnZGV0YWNoVGFnJyk7XG5leHBvcnQgY29uc3QgW3VwZGF0ZVRhZywgb25VcGRhdGVUYWddID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgndXBkYXRlVGFnJyk7XG5leHBvcnQgY29uc3QgW2RlbGV0ZVRhZywgb25EZWxldGVUYWddID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgnZGVsZXRlVGFnJyk7XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IGdldEF1ZGlvUHJvbnVuY2lhdGlvbiwgb25QbGF5QXVkaW9Qcm9udW5jaWF0aW9uT2Zmc2NyZWVuLCB9IGZyb20gJ0B2b2NhYmx5L2V4dGVuc2lvbi1tZXNzYWdlcyc7XG5jb25zdCBwbGF5RGF0YVVybCA9IChkYXRhVXJsKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICByZXR1cm4geWllbGQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKGRhdGFVcmwpO1xuICAgICAgICAgICAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhdWRpby5wbGF5KCkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yQ29kZTogJ1VOQUJMRV9UT19QTEFZX0FVRElPX0RBVEFfVVJMJyxcbiAgICAgICAgICAgICAgICAgICAgcmVhc29uOiAnQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgcGxheWluZyB0aGUgb2Zmc2NyZWVuIGF1ZGlvJyxcbiAgICAgICAgICAgICAgICAgICAgZXh0cmE6IGUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICAgICAgZXJyb3JDb2RlOiAnVU5BQkxFX1RPX1BMQVlfQVVESU9fREFUQV9VUkwnLFxuICAgICAgICAgICAgICAgIHJlYXNvbjogJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIHBsYXlpbmcgdGhlIG9mZnNjcmVlbiBhdWRpbycsXG4gICAgICAgICAgICAgICAgZXh0cmE6IGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG5vblBsYXlBdWRpb1Byb251bmNpYXRpb25PZmZzY3JlZW4oKHNlbmRSZXNwb25zZSwgcGF5bG9hZCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgZ2V0QXVkaW9Qcm9udW5jaWF0aW9uKHBheWxvYWQpO1xuICAgIGlmIChyZXN1bHQuc3VjY2VzcyA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIHNlbmRSZXNwb25zZShyZXN1bHQpO1xuICAgIH1cbiAgICByZXR1cm4gc2VuZFJlc3BvbnNlKHlpZWxkIHBsYXlEYXRhVXJsKHJlc3VsdC52YWx1ZS51cmwpKTtcbn0pKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==