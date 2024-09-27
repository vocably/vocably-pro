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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheS1hdWRpby5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxrQkFBa0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUMvRHVFO0FBQ3ZFLCtDQUErQyxhQUFhLElBQUksTUFBTSxHQUFHLFdBQVc7QUFDcEY7QUFDTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHFCQUFxQjtBQUM1RCwrQ0FBK0MscUJBQXFCO0FBQ3BFLCtDQUErQyxxQkFBcUI7QUFDcEUsaURBQWlELHFCQUFxQjtBQUN0RSxpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDakNQLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3Qiw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUN3RztBQUN4RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRCxpQ0FBaUM7QUFDakMseUJBQXlCLHFCQUFxQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vLi4vLi4vbm9kZV9tb2R1bGVzL0B2b2NhYmx5L2hlcm1lcy9kaXN0L2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9Adm9jYWJseS9leHRlbnNpb24vLi4vZXh0ZW5zaW9uLW1lc3NhZ2VzL2Rpc3QvZXNtL2luZGV4LmpzIiwid2VicGFjazovL0B2b2NhYmx5L2V4dGVuc2lvbi8uL3NyYy9wbGF5LWF1ZGlvLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBicm93c2VyRW52O1xuaWYgKHR5cGVvZiBjaHJvbWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgYnJvd3NlckVudiA9IGNocm9tZTtcbiAgICAvLyBAdHMtaWdub3JlXG59XG5lbHNlIGlmICh0eXBlb2YgYnJvd3NlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgYnJvd3NlckVudiA9IGJyb3dzZXI7XG59XG5jb25zdCBtYWtlU2VuZCA9IChpZGVudGlmaWVyKSA9PiAoZGF0YSwgZXh0ZW5zaW9uSWQpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBpZiAoIWJyb3dzZXJFbnYpIHtcbiAgICAgICAgICAgIHJlamVjdCgnYnJvd3NlckVudiBlbnZpcm9ubWVudCBpcyBub3QgZGVmaW5lZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghYnJvd3NlckVudi5ydW50aW1lKSB7XG4gICAgICAgICAgICByZWplY3QoJ2Jyb3dzZXJFbnYucnVudGltZSBpcyBub3QgZGVmaW5lZCBkZWZpbmVkJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2VuZFBhcmFtcyA9IFtcbiAgICAgICAgICAgIHsgaWRlbnRpZmllciwgZGF0YSB9LFxuICAgICAgICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGJyb3dzZXJFbnYucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChicm93c2VyRW52LnJ1bnRpbWUubGFzdEVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICBdO1xuICAgICAgICBpZiAoZXh0ZW5zaW9uSWQpIHtcbiAgICAgICAgICAgIHNlbmRQYXJhbXMudW5zaGlmdChleHRlbnNpb25JZCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJvd3NlckVudi5ydW50aW1lLnNlbmRNZXNzYWdlKC4uLnNlbmRQYXJhbXMpO1xuICAgIH0pO1xufTtcbmNvbnN0IG1ha2VMaXN0ZW5lciA9IChpZGVudGlmaWVyLCBjYWxsYmFjaykgPT4gKHJlcXVlc3QsIHNlbmRlciwgbmF0aXZlU2VuZFJlc3BvbnNlKSA9PiB7XG4gICAgaWYgKHR5cGVvZiByZXF1ZXN0ICE9PSAnb2JqZWN0JyB8fFxuICAgICAgICByZXF1ZXN0ID09PSBudWxsIHx8XG4gICAgICAgIHJlcXVlc3QuaWRlbnRpZmllciAhPT0gaWRlbnRpZmllcikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGRhdGEgPSByZXF1ZXN0LmRhdGE7XG4gICAgY29uc3Qgc2VuZFJlc3BvbnNlID0gKHIpID0+IHtcbiAgICAgICAgbmF0aXZlU2VuZFJlc3BvbnNlKHIpO1xuICAgICAgICByZXR1cm4gcjtcbiAgICB9O1xuICAgIGNhbGxiYWNrKHNlbmRSZXNwb25zZSwgZGF0YSk7XG4gICAgcmV0dXJuIHRydWU7XG59O1xuZXhwb3J0IGNvbnN0IGNyZWF0ZU1lc3NhZ2UgPSAoaWRlbnRpZmllcikgPT4ge1xuICAgIGNvbnN0IHN1YnNjcmliZSA9IChjYWxsYmFjaykgPT4ge1xuICAgICAgICBicm93c2VyRW52LnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKG1ha2VMaXN0ZW5lcihpZGVudGlmaWVyLCBjYWxsYmFjaykpO1xuICAgIH07XG4gICAgcmV0dXJuIFttYWtlU2VuZChpZGVudGlmaWVyKSwgc3Vic2NyaWJlXTtcbn07XG5leHBvcnQgY29uc3QgY3JlYXRlRXh0ZXJuYWxNZXNzYWdlID0gKGlkZW50aWZpZXIpID0+IHtcbiAgICBjb25zdCBzZW5kID0gbWFrZVNlbmQoaWRlbnRpZmllcik7XG4gICAgY29uc3Qgc3Vic2NyaWJlID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgIGJyb3dzZXJFbnYucnVudGltZS5vbk1lc3NhZ2VFeHRlcm5hbC5hZGRMaXN0ZW5lcihtYWtlTGlzdGVuZXIoaWRlbnRpZmllciwgY2FsbGJhY2spKTtcbiAgICB9O1xuICAgIHJldHVybiBbXG4gICAgICAgIChleHRlbnNpb25JZCwgZGF0YSkgPT4gc2VuZChkYXRhLCBleHRlbnNpb25JZCksXG4gICAgICAgIHN1YnNjcmliZSxcbiAgICBdO1xufTtcbiIsImltcG9ydCB7IGNyZWF0ZUV4dGVybmFsTWVzc2FnZSwgY3JlYXRlTWVzc2FnZSB9IGZyb20gJ0B2b2NhYmx5L2hlcm1lcyc7XG5jb25zdCBjcmVhdGVTY29wZSA9IChzY29wZSkgPT4gKGlkZW50aWZpZXIpID0+IGNyZWF0ZU1lc3NhZ2UoYCR7c2NvcGV9LiR7aWRlbnRpZmllcn1gKTtcbmNvbnN0IGNyZWF0ZVNjb3BlZE1lc3NhZ2UgPSBjcmVhdGVTY29wZSgndm9jYWJseScpO1xuZXhwb3J0IGNvbnN0IFtpc0xvZ2dlZEluLCBvbklzTG9nZ2VkSW5SZXF1ZXN0XSA9IGNyZWF0ZVNjb3BlZE1lc3NhZ2UoJ2lzTG9nZ2VkSW4nKTtcbmV4cG9ydCBjb25zdCBbZ2V0U2V0dGluZ3MsIG9uR2V0U2V0dGluZ3NSZXF1ZXN0XSA9IGNyZWF0ZVNjb3BlZE1lc3NhZ2UoJ2dldFNldHRpbmdzJyk7XG5leHBvcnQgY29uc3QgW3NldFNldHRpbmdzLCBvblNldFNldHRpbmdzUmVxdWVzdF0gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdzZXRTZXR0aW5ncycpO1xuZXhwb3J0IGNvbnN0IFtpc0FjdGl2ZSwgb25Jc0FjdGl2ZVJlcXVlc3RdID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgnaXNBY3RpdmUnKTtcbmV4cG9ydCBjb25zdCBbaXNFbGlnaWJsZUZvclRyaWFsLCBvbklzRWxpZ2libGVGb3JUcmlhbFJlcXVlc3RdID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgnaXNFbGlnaWJsZUZvclRyaWFsJyk7XG5leHBvcnQgY29uc3QgW2FuYWx5emUsIG9uQW5hbHl6ZVJlcXVlc3RdID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgnYW5hbHl6ZScpO1xuZXhwb3J0IGNvbnN0IFtyZW1vdmVDYXJkLCBvblJlbW92ZUNhcmRSZXF1ZXN0XSA9IGNyZWF0ZVNjb3BlZE1lc3NhZ2UoJ3JlbW92ZUNhcmQnKTtcbmV4cG9ydCBjb25zdCBbYWRkQ2FyZCwgb25BZGRDYXJkUmVxdWVzdF0gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdhZGRDYXJkJyk7XG5leHBvcnQgY29uc3QgW2xpc3RMYW5ndWFnZXMsIG9uTGlzdExhbmd1YWdlc1JlcXVlc3RdID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgnbGlzdExhbmd1YWdlcycpO1xuZXhwb3J0IGNvbnN0IFtsaXN0VGFyZ2V0TGFuZ3VhZ2VzLCBvbkxpc3RUYXJnZXRMYW5ndWFnZXNSZXF1ZXN0XSA9IGNyZWF0ZVNjb3BlZE1lc3NhZ2UoJ2xpc3RUYXJnZXRMYW5ndWFnZXMnKTtcbmV4cG9ydCBjb25zdCBbZ2V0TG9jYXRpb25MYW5ndWFnZSwgb25HZXRMb2NhdGlvbkxhbmd1YWdlUmVxdWVzdF0gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdnZXRMb2NhdGlvbkxhbmd1YWdlJyk7XG5leHBvcnQgY29uc3QgW3NhdmVMb2NhdGlvbkxhbmd1YWdlLCBvblNhdmVMb2NhdGlvbkxhbmd1YWdlUmVxdWVzdF0gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdzYXZlTG9jYXRpb25MYW5ndWFnZScpO1xuZXhwb3J0IGNvbnN0IFtjbGVhblVwLCBvbkNsZWFuVXBSZXF1ZXN0XSA9IGNyZWF0ZVNjb3BlZE1lc3NhZ2UoJ2NsZWFuVXAnKTtcbmV4cG9ydCBjb25zdCBbcGluZywgb25QaW5nXSA9IGNyZWF0ZVNjb3BlZE1lc3NhZ2UoJ3BpbmcnKTtcbmV4cG9ydCBjb25zdCBbZ2V0SW50ZXJuYWxQcm94eUxhbmd1YWdlLCBvbkdldEludGVybmFsUHJveHlMYW51YWdlXSA9IGNyZWF0ZVNjb3BlZE1lc3NhZ2UoJ2dldEludGVybmFsUHJveHlMYW5ndWFnZScpO1xuZXhwb3J0IGNvbnN0IFtzZXRJbnRlcm5hbFByb3h5TGFuZ3VhZ2UsIG9uU2V0SW50ZXJuYWxQcm94eUxhbmd1YWdlXSA9IGNyZWF0ZVNjb3BlZE1lc3NhZ2UoJ3NldEludGVybmFsUHJveHlMYW5ndWFnZScpO1xuZXhwb3J0IGNvbnN0IFtnZXRJbnRlcm5hbFNvdXJjZUxhbmd1YWdlLCBvbkdldEludGVybmFsU291cmNlTGFuZ3VhZ2VdID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgnZ2V0SW50ZXJuYWxTb3VyY2VMYW5ndWFnZScpO1xuZXhwb3J0IGNvbnN0IFtzZXRJbnRlcm5hbFNvdXJjZUxhbmd1YWdlLCBvblNldEludGVybmFsU291cmNlTGFuZ3VhZ2VdID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgnc2V0SW50ZXJuYWxTb3VyY2VMYW5ndWFnZScpO1xuZXhwb3J0IGNvbnN0IFtpc1VzZXJLbm93c0hvd1RvQWRkLCBvbklzVXNlcktub3dzSG93VG9BZGRdID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgnaXNVc2VyS25vd3NIb3dUb0FkZCcpO1xuZXhwb3J0IGNvbnN0IFtzZXRVc2VyS25vd3NIb3dUb0FkZCwgb25TZXRVc2VyS25vd3NIb3dUb0FkZF0gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdzZXRVc2VyS25vd3NIb3dUb0FkZCcpO1xuZXhwb3J0IGNvbnN0IFtwaW5nRXh0ZXJuYWwsIG9uUGluZ0V4dGVybmFsXSA9IGNyZWF0ZUV4dGVybmFsTWVzc2FnZSgndm9jYWJseS5waW5nLWV4dGVybmFsJyk7XG5leHBvcnQgY29uc3QgW3NldFByb3h5TGFuZ3VhZ2UsIG9uU2V0UHJveHlMYW5ndWFnZV0gPSBjcmVhdGVFeHRlcm5hbE1lc3NhZ2UoJ3ZvY2FibHkuc2V0UHJveHlMYW5ndWFnZScpO1xuZXhwb3J0IGNvbnN0IFtnZXRQcm94eUxhbmd1YWdlLCBvbkdldFByb3h5TGFuZ3VhZ2VdID0gY3JlYXRlRXh0ZXJuYWxNZXNzYWdlKCd2b2NhYmx5LmdldFByb3h5TGFuZ3VhZ2UnKTtcbmV4cG9ydCBjb25zdCBbc2V0U291cmNlTGFuZ3VhZ2UsIG9uU2V0U291cmNlTGFuZ3VhZ2VdID0gY3JlYXRlRXh0ZXJuYWxNZXNzYWdlKCd2b2NhYmx5LnNldFNvdXJjZUxhbmd1YWdlJyk7XG5leHBvcnQgY29uc3QgW2dldFNvdXJjZUxhbmd1YWdlLCBvbkdldFNvdXJjZUxhbmd1YWdlXSA9IGNyZWF0ZUV4dGVybmFsTWVzc2FnZSgndm9jYWJseS5nZXRTb3VyY2VMYW5ndWFnZScpO1xuZXhwb3J0IGNvbnN0IFtnZXRBdWRpb1Byb251bmNpYXRpb24sIG9uR2V0QXVkaW9Qcm9udW5jaWF0aW9uXSA9IGNyZWF0ZVNjb3BlZE1lc3NhZ2UoJ2dldEF1ZGlvUHJvbnVuY2lhdGlvbicpO1xuZXhwb3J0IGNvbnN0IFthc2tGb3JSYXRpbmcsIG9uQXNrRm9yUmF0aW5nXSA9IGNyZWF0ZVNjb3BlZE1lc3NhZ2UoJ2Fza0ZvclJhdGluZycpO1xuZXhwb3J0IGNvbnN0IFtzYXZlQXNrRm9yUmF0aW5nUmVzcG9uc2UsIG9uU2F2ZUFza0ZvclJhdGluZ1Jlc3BvbnNlXSA9IGNyZWF0ZVNjb3BlZE1lc3NhZ2UoJ2Fza0ZvclJhdGluZ1Jlc3BvbnNlJyk7XG5leHBvcnQgY29uc3QgW3BsYXlBdWRpb1Byb251bmNpYXRpb24sIG9uUGxheUF1ZGlvUHJvbnVuY2lhdGlvbl0gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdwbGF5QXVkaW9Qcm9udW5jaWF0aW9uJyk7XG5leHBvcnQgY29uc3QgW3BsYXlBdWRpb1Byb251bmNpYXRpb25PZmZzY3JlZW4sIG9uUGxheUF1ZGlvUHJvbnVuY2lhdGlvbk9mZnNjcmVlbixdID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgncGxheUF1ZGlvUHJvbnVuY2lhdGlvbk9mZnNjcmVlbicpO1xuZXhwb3J0IGNvbnN0IFtjYW5QbGF5T2ZmU2NyZWVuLCBvbkNhblBsYXlPZmZTY3JlZW5dID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgnY2FuUGxheU9mZlNjcmVlbicpO1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBnZXRBdWRpb1Byb251bmNpYXRpb24sIG9uUGxheUF1ZGlvUHJvbnVuY2lhdGlvbk9mZnNjcmVlbiwgfSBmcm9tICdAdm9jYWJseS9leHRlbnNpb24tbWVzc2FnZXMnO1xuY29uc3QgcGxheURhdGFVcmwgPSAoZGF0YVVybCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgcmV0dXJuIHlpZWxkIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbyhkYXRhVXJsKTtcbiAgICAgICAgICAgIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYXVkaW8ucGxheSgpLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBlcnJvckNvZGU6ICdVTkFCTEVfVE9fUExBWV9BVURJT19EQVRBX1VSTCcsXG4gICAgICAgICAgICAgICAgICAgIHJlYXNvbjogJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIHBsYXlpbmcgdGhlIG9mZnNjcmVlbiBhdWRpbycsXG4gICAgICAgICAgICAgICAgICAgIGV4dHJhOiBlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGVycm9yQ29kZTogJ1VOQUJMRV9UT19QTEFZX0FVRElPX0RBVEFfVVJMJyxcbiAgICAgICAgICAgICAgICByZWFzb246ICdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBwbGF5aW5nIHRoZSBvZmZzY3JlZW4gYXVkaW8nLFxuICAgICAgICAgICAgICAgIGV4dHJhOiBlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xub25QbGF5QXVkaW9Qcm9udW5jaWF0aW9uT2Zmc2NyZWVuKChzZW5kUmVzcG9uc2UsIHBheWxvYWQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGdldEF1ZGlvUHJvbnVuY2lhdGlvbihwYXlsb2FkKTtcbiAgICBpZiAocmVzdWx0LnN1Y2Nlc3MgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UocmVzdWx0KTtcbiAgICB9XG4gICAgcmV0dXJuIHNlbmRSZXNwb25zZSh5aWVsZCBwbGF5RGF0YVVybChyZXN1bHQudmFsdWUudXJsKSk7XG59KSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=