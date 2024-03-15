"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEdgeSpeech = void 0;
var tslib_1 = require("tslib");
var query_string_1 = tslib_1.__importDefault(require("query-string"));
var genSSML_1 = require("../utils/genSSML");
var genSendContent_1 = require("../utils/genSendContent");
var getHeadersAndData_1 = require("../utils/getHeadersAndData");
var common_1 = require("../utils/common");
var EDGE_SPEECH_URL = "wss://speech.platform.bing.com/consumer/speech/synthesize/readaloud/edge/v1";
var EDGE_API_TOKEN = "6A5AA1D4EAFF4E9FB37E23D68491D6F4";
var configContent = JSON.stringify({
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
var genHeader = function (connectId) {
    var date = new Date().toString();
    var configHeader = {
        "Content-Type": "application/json; charset=utf-8",
        Path: "speech.config",
        "X-Timestamp": date,
    };
    var contentHeader = {
        "Content-Type": "application/ssml+xml",
        Path: "ssml",
        "X-RequestId": connectId,
        "X-Timestamp": date,
    };
    return {
        configHeader: configHeader,
        contentHeader: contentHeader,
    };
};
var createEdgeSpeech = function (_a) {
    var args_1 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args_1[_i - 1] = arguments[_i];
    }
    return tslib_1.__awaiter(void 0, tslib_1.__spreadArray([_a], args_1, true), void 0, function (_b, _c) {
        var input, options, connectId, url, _d, configHeader, contentHeader, config, content;
        var payload = _b.payload;
        var _e = _c === void 0 ? {} : _c, proxyUrl = _e.proxyUrl, token = _e.token;
        return tslib_1.__generator(this, function (_f) {
            input = payload.input, options = payload.options;
            connectId = (0, common_1.guid)().replace(/-/g, "");
            url = query_string_1.default.stringifyUrl({
                query: {
                    ConnectionId: connectId,
                    TrustedClientToken: token ? token : EDGE_API_TOKEN,
                },
                url: proxyUrl ? proxyUrl : EDGE_SPEECH_URL,
            });
            _d = genHeader(connectId), configHeader = _d.configHeader, contentHeader = _d.contentHeader;
            config = (0, genSendContent_1.genSendContent)(configHeader, configContent);
            content = (0, genSendContent_1.genSendContent)(contentHeader, (0, genSSML_1.genSSML)(input, options));
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    var ws = new WebSocket(url);
                    ws.binaryType = "arraybuffer";
                    var onOpen = function () {
                        ws.send(config);
                        ws.send(content);
                    };
                    var audioData = new ArrayBuffer(0);
                    var onMessage = function (event) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
                        var headers, res, dataview, headerLength, newBody, newAudioData, mergedUint8Array;
                        return tslib_1.__generator(this, function (_a) {
                            if (typeof event.data === "string") {
                                headers = (0, getHeadersAndData_1.getHeadersAndData)(event.data).headers;
                                switch (headers["Path"]) {
                                    case "turn.end": {
                                        ws.close();
                                        if (!audioData.byteLength)
                                            return [2 /*return*/];
                                        res = new Response(audioData);
                                        resolve(res);
                                        break;
                                    }
                                }
                            }
                            else if (event.data instanceof ArrayBuffer) {
                                dataview = new DataView(event.data);
                                headerLength = dataview.getInt16(0);
                                if (event.data.byteLength > headerLength + 2) {
                                    newBody = event.data.slice(2 + headerLength);
                                    newAudioData = new ArrayBuffer(audioData.byteLength + newBody.byteLength);
                                    mergedUint8Array = new Uint8Array(newAudioData);
                                    mergedUint8Array.set(new Uint8Array(audioData), 0);
                                    mergedUint8Array.set(new Uint8Array(newBody), audioData.byteLength);
                                    audioData = newAudioData;
                                }
                            }
                            return [2 /*return*/];
                        });
                    }); };
                    var onError = function () {
                        reject(new Error("WebSocket error occurred."));
                        ws.close();
                    };
                    ws.addEventListener("open", onOpen);
                    ws.addEventListener("message", onMessage);
                    ws.addEventListener("error", onError);
                })];
        });
    });
};
exports.createEdgeSpeech = createEdgeSpeech;
