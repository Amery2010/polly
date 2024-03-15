"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMicrosoftSpeech = void 0;
const genSSML_1 = require("../utils/genSSML");
const common_1 = require("../utils/common");
const MICROSOFT_SPEECH_URL = "https://southeastasia.api.speech.microsoft.com/accfreetrial/texttospeech/acc/v3.0-beta1/vcg/speak";
const createMicrosoftSpeech = (_a, ...args_1) => __awaiter(void 0, [_a, ...args_1], void 0, function* ({ payload, }, { proxyUrl } = {}) {
    const { input, options } = payload;
    const DEFAULT_HEADERS = new Headers({
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
    const body = JSON.stringify({
        offsetInPlainText: 0,
        properties: {
            SpeakTriggerSource: "AccTuningPagePlayButton",
        },
        ssml: (0, genSSML_1.genSSML)(input, options),
        ttsAudioFormat: "audio-24khz-160kbitrate-mono-mp3",
    });
    return fetch(proxyUrl ? proxyUrl : MICROSOFT_SPEECH_URL, {
        body,
        // @ts-ignore
        duplex: "half",
        headers: DEFAULT_HEADERS,
        method: "POST",
        responseType: "arraybuffer",
    });
});
exports.createMicrosoftSpeech = createMicrosoftSpeech;
