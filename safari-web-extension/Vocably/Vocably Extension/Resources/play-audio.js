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
const [getLanguagePairs, onGetLanguagePairs] = createScopedMessage('getLanguagePairs');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheS1hdWRpby5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxrQkFBa0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUMvRHVFO0FBQ3ZFLCtDQUErQyxhQUFhLElBQUksTUFBTSxHQUFHLFdBQVc7QUFDcEY7QUFDTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMscUJBQXFCO0FBQzVELCtDQUErQyxxQkFBcUI7QUFDcEUsK0NBQStDLHFCQUFxQjtBQUNwRSxpREFBaUQscUJBQXFCO0FBQ3RFLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3RDUCxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0IsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDd0c7QUFDeEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0QsaUNBQWlDO0FBQ2pDLHlCQUF5QixxQkFBcUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHZvY2FibHkvZXh0ZW5zaW9uLy4uLy4uL25vZGVfbW9kdWxlcy9Adm9jYWJseS9oZXJtZXMvZGlzdC9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vQHZvY2FibHkvZXh0ZW5zaW9uLy4uL2V4dGVuc2lvbi1tZXNzYWdlcy9kaXN0L2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vLi9zcmMvcGxheS1hdWRpby50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgYnJvd3NlckVudjtcbmlmICh0eXBlb2YgY2hyb21lICE9PSAndW5kZWZpbmVkJykge1xuICAgIGJyb3dzZXJFbnYgPSBjaHJvbWU7XG4gICAgLy8gQHRzLWlnbm9yZVxufVxuZWxzZSBpZiAodHlwZW9mIGJyb3dzZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGJyb3dzZXJFbnYgPSBicm93c2VyO1xufVxuY29uc3QgbWFrZVNlbmQgPSAoaWRlbnRpZmllcikgPT4gKGRhdGEsIGV4dGVuc2lvbklkKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgaWYgKCFicm93c2VyRW52KSB7XG4gICAgICAgICAgICByZWplY3QoJ2Jyb3dzZXJFbnYgZW52aXJvbm1lbnQgaXMgbm90IGRlZmluZWQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWJyb3dzZXJFbnYucnVudGltZSkge1xuICAgICAgICAgICAgcmVqZWN0KCdicm93c2VyRW52LnJ1bnRpbWUgaXMgbm90IGRlZmluZWQgZGVmaW5lZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNlbmRQYXJhbXMgPSBbXG4gICAgICAgICAgICB7IGlkZW50aWZpZXIsIGRhdGEgfSxcbiAgICAgICAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChicm93c2VyRW52LnJ1bnRpbWUubGFzdEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoYnJvd3NlckVudi5ydW50aW1lLmxhc3RFcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcbiAgICAgICAgaWYgKGV4dGVuc2lvbklkKSB7XG4gICAgICAgICAgICBzZW5kUGFyYW1zLnVuc2hpZnQoZXh0ZW5zaW9uSWQpO1xuICAgICAgICB9XG4gICAgICAgIGJyb3dzZXJFbnYucnVudGltZS5zZW5kTWVzc2FnZSguLi5zZW5kUGFyYW1zKTtcbiAgICB9KTtcbn07XG5jb25zdCBtYWtlTGlzdGVuZXIgPSAoaWRlbnRpZmllciwgY2FsbGJhY2spID0+IChyZXF1ZXN0LCBzZW5kZXIsIG5hdGl2ZVNlbmRSZXNwb25zZSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcmVxdWVzdCAhPT0gJ29iamVjdCcgfHxcbiAgICAgICAgcmVxdWVzdCA9PT0gbnVsbCB8fFxuICAgICAgICByZXF1ZXN0LmlkZW50aWZpZXIgIT09IGlkZW50aWZpZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBkYXRhID0gcmVxdWVzdC5kYXRhO1xuICAgIGNvbnN0IHNlbmRSZXNwb25zZSA9IChyKSA9PiB7XG4gICAgICAgIG5hdGl2ZVNlbmRSZXNwb25zZShyKTtcbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfTtcbiAgICBjYWxsYmFjayhzZW5kUmVzcG9uc2UsIGRhdGEpO1xuICAgIHJldHVybiB0cnVlO1xufTtcbmV4cG9ydCBjb25zdCBjcmVhdGVNZXNzYWdlID0gKGlkZW50aWZpZXIpID0+IHtcbiAgICBjb25zdCBzdWJzY3JpYmUgPSAoY2FsbGJhY2spID0+IHtcbiAgICAgICAgYnJvd3NlckVudi5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihtYWtlTGlzdGVuZXIoaWRlbnRpZmllciwgY2FsbGJhY2spKTtcbiAgICB9O1xuICAgIHJldHVybiBbbWFrZVNlbmQoaWRlbnRpZmllciksIHN1YnNjcmliZV07XG59O1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUV4dGVybmFsTWVzc2FnZSA9IChpZGVudGlmaWVyKSA9PiB7XG4gICAgY29uc3Qgc2VuZCA9IG1ha2VTZW5kKGlkZW50aWZpZXIpO1xuICAgIGNvbnN0IHN1YnNjcmliZSA9IChjYWxsYmFjaykgPT4ge1xuICAgICAgICBicm93c2VyRW52LnJ1bnRpbWUub25NZXNzYWdlRXh0ZXJuYWwuYWRkTGlzdGVuZXIobWFrZUxpc3RlbmVyKGlkZW50aWZpZXIsIGNhbGxiYWNrKSk7XG4gICAgfTtcbiAgICByZXR1cm4gW1xuICAgICAgICAoZXh0ZW5zaW9uSWQsIGRhdGEpID0+IHNlbmQoZGF0YSwgZXh0ZW5zaW9uSWQpLFxuICAgICAgICBzdWJzY3JpYmUsXG4gICAgXTtcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVFeHRlcm5hbE1lc3NhZ2UsIGNyZWF0ZU1lc3NhZ2UgfSBmcm9tICdAdm9jYWJseS9oZXJtZXMnO1xuY29uc3QgY3JlYXRlU2NvcGUgPSAoc2NvcGUpID0+IChpZGVudGlmaWVyKSA9PiBjcmVhdGVNZXNzYWdlKGAke3Njb3BlfS4ke2lkZW50aWZpZXJ9YCk7XG5jb25zdCBjcmVhdGVTY29wZWRNZXNzYWdlID0gY3JlYXRlU2NvcGUoJ3ZvY2FibHknKTtcbmV4cG9ydCBjb25zdCBbaXNMb2dnZWRJbiwgb25Jc0xvZ2dlZEluUmVxdWVzdF0gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdpc0xvZ2dlZEluJyk7XG5leHBvcnQgY29uc3QgW2dldFNldHRpbmdzLCBvbkdldFNldHRpbmdzUmVxdWVzdF0gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdnZXRTZXR0aW5ncycpO1xuZXhwb3J0IGNvbnN0IFtzZXRTZXR0aW5ncywgb25TZXRTZXR0aW5nc1JlcXVlc3RdID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgnc2V0U2V0dGluZ3MnKTtcbmV4cG9ydCBjb25zdCBbaXNBY3RpdmUsIG9uSXNBY3RpdmVSZXF1ZXN0XSA9IGNyZWF0ZVNjb3BlZE1lc3NhZ2UoJ2lzQWN0aXZlJyk7XG5leHBvcnQgY29uc3QgW2lzRWxpZ2libGVGb3JUcmlhbCwgb25Jc0VsaWdpYmxlRm9yVHJpYWxSZXF1ZXN0XSA9IGNyZWF0ZVNjb3BlZE1lc3NhZ2UoJ2lzRWxpZ2libGVGb3JUcmlhbCcpO1xuZXhwb3J0IGNvbnN0IFthbmFseXplLCBvbkFuYWx5emVSZXF1ZXN0XSA9IGNyZWF0ZVNjb3BlZE1lc3NhZ2UoJ2FuYWx5emUnKTtcbmV4cG9ydCBjb25zdCBbcmVtb3ZlQ2FyZCwgb25SZW1vdmVDYXJkUmVxdWVzdF0gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdyZW1vdmVDYXJkJyk7XG5leHBvcnQgY29uc3QgW2FkZENhcmQsIG9uQWRkQ2FyZFJlcXVlc3RdID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgnYWRkQ2FyZCcpO1xuZXhwb3J0IGNvbnN0IFtsaXN0TGFuZ3VhZ2VzLCBvbkxpc3RMYW5ndWFnZXNSZXF1ZXN0XSA9IGNyZWF0ZVNjb3BlZE1lc3NhZ2UoJ2xpc3RMYW5ndWFnZXMnKTtcbmV4cG9ydCBjb25zdCBbbGlzdFRhcmdldExhbmd1YWdlcywgb25MaXN0VGFyZ2V0TGFuZ3VhZ2VzUmVxdWVzdF0gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdsaXN0VGFyZ2V0TGFuZ3VhZ2VzJyk7XG5leHBvcnQgY29uc3QgW2dldExvY2F0aW9uTGFuZ3VhZ2UsIG9uR2V0TG9jYXRpb25MYW5ndWFnZVJlcXVlc3RdID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgnZ2V0TG9jYXRpb25MYW5ndWFnZScpO1xuZXhwb3J0IGNvbnN0IFtzYXZlTG9jYXRpb25MYW5ndWFnZSwgb25TYXZlTG9jYXRpb25MYW5ndWFnZVJlcXVlc3RdID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgnc2F2ZUxvY2F0aW9uTGFuZ3VhZ2UnKTtcbmV4cG9ydCBjb25zdCBbZ2V0TGFuZ3VhZ2VQYWlycywgb25HZXRMYW5ndWFnZVBhaXJzXSA9IGNyZWF0ZVNjb3BlZE1lc3NhZ2UoJ2dldExhbmd1YWdlUGFpcnMnKTtcbmV4cG9ydCBjb25zdCBbY2xlYW5VcCwgb25DbGVhblVwUmVxdWVzdF0gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdjbGVhblVwJyk7XG5leHBvcnQgY29uc3QgW3BpbmcsIG9uUGluZ10gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdwaW5nJyk7XG5leHBvcnQgY29uc3QgW2dldEludGVybmFsUHJveHlMYW5ndWFnZSwgb25HZXRJbnRlcm5hbFByb3h5TGFudWFnZV0gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdnZXRJbnRlcm5hbFByb3h5TGFuZ3VhZ2UnKTtcbmV4cG9ydCBjb25zdCBbc2V0SW50ZXJuYWxQcm94eUxhbmd1YWdlLCBvblNldEludGVybmFsUHJveHlMYW5ndWFnZV0gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdzZXRJbnRlcm5hbFByb3h5TGFuZ3VhZ2UnKTtcbmV4cG9ydCBjb25zdCBbZ2V0SW50ZXJuYWxTb3VyY2VMYW5ndWFnZSwgb25HZXRJbnRlcm5hbFNvdXJjZUxhbmd1YWdlXSA9IGNyZWF0ZVNjb3BlZE1lc3NhZ2UoJ2dldEludGVybmFsU291cmNlTGFuZ3VhZ2UnKTtcbmV4cG9ydCBjb25zdCBbc2V0SW50ZXJuYWxTb3VyY2VMYW5ndWFnZSwgb25TZXRJbnRlcm5hbFNvdXJjZUxhbmd1YWdlXSA9IGNyZWF0ZVNjb3BlZE1lc3NhZ2UoJ3NldEludGVybmFsU291cmNlTGFuZ3VhZ2UnKTtcbmV4cG9ydCBjb25zdCBbaXNVc2VyS25vd3NIb3dUb0FkZCwgb25Jc1VzZXJLbm93c0hvd1RvQWRkXSA9IGNyZWF0ZVNjb3BlZE1lc3NhZ2UoJ2lzVXNlcktub3dzSG93VG9BZGQnKTtcbmV4cG9ydCBjb25zdCBbc2V0VXNlcktub3dzSG93VG9BZGQsIG9uU2V0VXNlcktub3dzSG93VG9BZGRdID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgnc2V0VXNlcktub3dzSG93VG9BZGQnKTtcbmV4cG9ydCBjb25zdCBbcGluZ0V4dGVybmFsLCBvblBpbmdFeHRlcm5hbF0gPSBjcmVhdGVFeHRlcm5hbE1lc3NhZ2UoJ3ZvY2FibHkucGluZy1leHRlcm5hbCcpO1xuZXhwb3J0IGNvbnN0IFtzZXRQcm94eUxhbmd1YWdlLCBvblNldFByb3h5TGFuZ3VhZ2VdID0gY3JlYXRlRXh0ZXJuYWxNZXNzYWdlKCd2b2NhYmx5LnNldFByb3h5TGFuZ3VhZ2UnKTtcbmV4cG9ydCBjb25zdCBbZ2V0UHJveHlMYW5ndWFnZSwgb25HZXRQcm94eUxhbmd1YWdlXSA9IGNyZWF0ZUV4dGVybmFsTWVzc2FnZSgndm9jYWJseS5nZXRQcm94eUxhbmd1YWdlJyk7XG5leHBvcnQgY29uc3QgW3NldFNvdXJjZUxhbmd1YWdlLCBvblNldFNvdXJjZUxhbmd1YWdlXSA9IGNyZWF0ZUV4dGVybmFsTWVzc2FnZSgndm9jYWJseS5zZXRTb3VyY2VMYW5ndWFnZScpO1xuZXhwb3J0IGNvbnN0IFtnZXRTb3VyY2VMYW5ndWFnZSwgb25HZXRTb3VyY2VMYW5ndWFnZV0gPSBjcmVhdGVFeHRlcm5hbE1lc3NhZ2UoJ3ZvY2FibHkuZ2V0U291cmNlTGFuZ3VhZ2UnKTtcbmV4cG9ydCBjb25zdCBbZ2V0QXVkaW9Qcm9udW5jaWF0aW9uLCBvbkdldEF1ZGlvUHJvbnVuY2lhdGlvbl0gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdnZXRBdWRpb1Byb251bmNpYXRpb24nKTtcbmV4cG9ydCBjb25zdCBbYXNrRm9yUmF0aW5nLCBvbkFza0ZvclJhdGluZ10gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdhc2tGb3JSYXRpbmcnKTtcbmV4cG9ydCBjb25zdCBbc2F2ZUFza0ZvclJhdGluZ1Jlc3BvbnNlLCBvblNhdmVBc2tGb3JSYXRpbmdSZXNwb25zZV0gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdhc2tGb3JSYXRpbmdSZXNwb25zZScpO1xuZXhwb3J0IGNvbnN0IFtwbGF5QXVkaW9Qcm9udW5jaWF0aW9uLCBvblBsYXlBdWRpb1Byb251bmNpYXRpb25dID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgncGxheUF1ZGlvUHJvbnVuY2lhdGlvbicpO1xuZXhwb3J0IGNvbnN0IFtwbGF5QXVkaW9Qcm9udW5jaWF0aW9uT2Zmc2NyZWVuLCBvblBsYXlBdWRpb1Byb251bmNpYXRpb25PZmZzY3JlZW4sXSA9IGNyZWF0ZVNjb3BlZE1lc3NhZ2UoJ3BsYXlBdWRpb1Byb251bmNpYXRpb25PZmZzY3JlZW4nKTtcbmV4cG9ydCBjb25zdCBbY2FuUGxheU9mZlNjcmVlbiwgb25DYW5QbGF5T2ZmU2NyZWVuXSA9IGNyZWF0ZVNjb3BlZE1lc3NhZ2UoJ2NhblBsYXlPZmZTY3JlZW4nKTtcbmV4cG9ydCBjb25zdCBbYXR0YWNoVGFnLCBvbkF0dGFjaFRhZ10gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdhdHRhY2hUYWcnKTtcbmV4cG9ydCBjb25zdCBbZGV0YWNoVGFnLCBvbkRldGFjaFRhZ10gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdkZXRhY2hUYWcnKTtcbmV4cG9ydCBjb25zdCBbdXBkYXRlVGFnLCBvblVwZGF0ZVRhZ10gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCd1cGRhdGVUYWcnKTtcbmV4cG9ydCBjb25zdCBbZGVsZXRlVGFnLCBvbkRlbGV0ZVRhZ10gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdkZWxldGVUYWcnKTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgZ2V0QXVkaW9Qcm9udW5jaWF0aW9uLCBvblBsYXlBdWRpb1Byb251bmNpYXRpb25PZmZzY3JlZW4sIH0gZnJvbSAnQHZvY2FibHkvZXh0ZW5zaW9uLW1lc3NhZ2VzJztcbmNvbnN0IHBsYXlEYXRhVXJsID0gKGRhdGFVcmwpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIHJldHVybiB5aWVsZCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8oZGF0YVVybCk7XG4gICAgICAgICAgICBhdWRpby5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGF1ZGlvLnBsYXkoKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JDb2RlOiAnVU5BQkxFX1RPX1BMQVlfQVVESU9fREFUQV9VUkwnLFxuICAgICAgICAgICAgICAgICAgICByZWFzb246ICdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBwbGF5aW5nIHRoZSBvZmZzY3JlZW4gYXVkaW8nLFxuICAgICAgICAgICAgICAgICAgICBleHRyYTogZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBlcnJvckNvZGU6ICdVTkFCTEVfVE9fUExBWV9BVURJT19EQVRBX1VSTCcsXG4gICAgICAgICAgICAgICAgcmVhc29uOiAnQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgcGxheWluZyB0aGUgb2Zmc2NyZWVuIGF1ZGlvJyxcbiAgICAgICAgICAgICAgICBleHRyYTogZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcbm9uUGxheUF1ZGlvUHJvbnVuY2lhdGlvbk9mZnNjcmVlbigoc2VuZFJlc3BvbnNlLCBwYXlsb2FkKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBnZXRBdWRpb1Byb251bmNpYXRpb24ocGF5bG9hZCk7XG4gICAgaWYgKHJlc3VsdC5zdWNjZXNzID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gc2VuZFJlc3BvbnNlKHJlc3VsdCk7XG4gICAgfVxuICAgIHJldHVybiBzZW5kUmVzcG9uc2UoeWllbGQgcGxheURhdGFVcmwocmVzdWx0LnZhbHVlLnVybCkpO1xufSkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9