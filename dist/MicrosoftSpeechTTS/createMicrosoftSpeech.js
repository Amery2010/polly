"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMicrosoftSpeech = void 0;
var tslib_1 = require("tslib");
var genSSML_1 = require("../utils/genSSML");
var common_1 = require("../utils/common");
var MICROSOFT_SPEECH_URL = "https://southeastasia.api.speech.microsoft.com/accfreetrial/texttospeech/acc/v3.0-beta1/vcg/speak";
var createMicrosoftSpeech = function (_a) {
    var args_1 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args_1[_i - 1] = arguments[_i];
    }
    return tslib_1.__awaiter(void 0, tslib_1.__spreadArray([_a], args_1, true), void 0, function (_b, _c) {
        var input, options, DEFAULT_HEADERS, body;
        var payload = _b.payload;
        var _d = _c === void 0 ? {} : _c, proxyUrl = _d.proxyUrl;
        return tslib_1.__generator(this, function (_e) {
            input = payload.input, options = payload.options;
            DEFAULT_HEADERS = new Headers({
                accept: "*/*",
                "accept-language": "zh-CN,zh;q=0.9",
                authority: "southeastasia.api.speech.microsoft.com",
                "content-type": "application/json",
                customvoiceconnectionid: (0, common_1.guid)(),
                origin: "https://speech.microsoft.com",
                "sec-ch-ua": '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": '"Windows"',
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site",
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
            });
            body = JSON.stringify({
                offsetInPlainText: 0,
                properties: {
                    SpeakTriggerSource: "AccTuningPagePlayButton",
                },
                ssml: (0, genSSML_1.genSSML)(input, options),
                ttsAudioFormat: "audio-24khz-160kbitrate-mono-mp3",
            });
            return [2 /*return*/, fetch(proxyUrl ? proxyUrl : MICROSOFT_SPEECH_URL, {
                    body: body,
                    // @ts-ignore
                    duplex: "half",
                    headers: DEFAULT_HEADERS,
                    method: "POST",
                    responseType: "arraybuffer",
                })];
        });
    });
};
exports.createMicrosoftSpeech = createMicrosoftSpeech;
