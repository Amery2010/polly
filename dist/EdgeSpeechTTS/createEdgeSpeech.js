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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEdgeSpeech = void 0;
const query_string_1 = __importDefault(require("query-string"));
const genSSML_1 = require("../utils/genSSML");
const genSendContent_1 = require("../utils/genSendContent");
const getHeadersAndData_1 = require("../utils/getHeadersAndData");
const common_1 = require("../utils/common");
const EDGE_SPEECH_URL = "wss://speech.platform.bing.com/consumer/speech/synthesize/readaloud/edge/v1";
const EDGE_API_TOKEN = "6A5AA1D4EAFF4E9FB37E23D68491D6F4";
const configContent = JSON.stringify({
    context: {
        synthesis: {
            audio: {
                metadataoptions: {
                    sentenceBoundaryEnabled: false,
                    wordBoundaryEnabled: true,
                },
                outputFormat: "audio-24khz-48kbitrate-mono-mp3",
            },
        },
    },
});
const genHeader = (connectId) => {
    const date = new Date().toString();
    const configHeader = {
        "Content-Type": "application/json; charset=utf-8",
        Path: "speech.config",
        "X-Timestamp": date,
    };
    const contentHeader = {
        "Content-Type": "application/ssml+xml",
        Path: "ssml",
        "X-RequestId": connectId,
        "X-Timestamp": date,
    };
    return {
        configHeader,
        contentHeader,
    };
};
const createEdgeSpeech = (_a, ...args_1) => __awaiter(void 0, [_a, ...args_1], void 0, function* ({ payload, }, { proxyUrl, token } = {}) {
    const { input, options } = payload;
    const connectId = (0, common_1.guid)().replace(/-/g, "");
    const url = query_string_1.default.stringifyUrl({
        query: {
            ConnectionId: connectId,
            TrustedClientToken: token ? token : EDGE_API_TOKEN,
        },
        url: proxyUrl ? proxyUrl : EDGE_SPEECH_URL,
    });
    const { configHeader, contentHeader } = genHeader(connectId);
    const config = (0, genSendContent_1.genSendContent)(configHeader, configContent);
    const content = (0, genSendContent_1.genSendContent)(contentHeader, (0, genSSML_1.genSSML)(input, options));
    return new Promise((resolve, reject) => {
        const ws = new WebSocket(url);
        ws.binaryType = "arraybuffer";
        const onOpen = () => {
            ws.send(config);
            ws.send(content);
        };
        let audioData = new ArrayBuffer(0);
        const onMessage = (event) => __awaiter(void 0, void 0, void 0, function* () {
            if (typeof event.data === "string") {
                const { headers } = (0, getHeadersAndData_1.getHeadersAndData)(event.data);
                switch (headers["Path"]) {
                    case "turn.end": {
                        ws.close();
                        if (!audioData.byteLength)
                            return;
                        const res = new Response(audioData);
                        resolve(res);
                        break;
                    }
                }
            }
            else if (event.data instanceof ArrayBuffer) {
                const dataview = new DataView(event.data);
                const headerLength = dataview.getInt16(0);
                if (event.data.byteLength > headerLength + 2) {
                    const newBody = event.data.slice(2 + headerLength);
                    const newAudioData = new ArrayBuffer(audioData.byteLength + newBody.byteLength);
                    const mergedUint8Array = new Uint8Array(newAudioData);
                    mergedUint8Array.set(new Uint8Array(audioData), 0);
                    mergedUint8Array.set(new Uint8Array(newBody), audioData.byteLength);
                    audioData = newAudioData;
                }
            }
        });
        const onError = () => {
            reject(new Error("WebSocket error occurred."));
            ws.close();
        };
        ws.addEventListener("open", onOpen);
        ws.addEventListener("message", onMessage);
        ws.addEventListener("error", onError);
    });
});
exports.createEdgeSpeech = createEdgeSpeech;
