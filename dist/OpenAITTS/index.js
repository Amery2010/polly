"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenAITTS = void 0;
var tslib_1 = require("tslib");
var voiceList_1 = tslib_1.__importStar(require("./voiceList"));
var common_1 = require("../utils/common");
var OpenAITTS = /** @class */ (function () {
    function OpenAITTS(api) {
        if (api === void 0) { api = {}; }
        this.OPENAI_BASE_URL = api.OPENAI_PROXY_URL || "https://api.openai.com/v1";
        this.OPENAI_API_KEY = api.OPENAI_API_KEY;
        this.serviceUrl = api.serviceUrl;
        this.headers = api.headers;
    }
    Object.defineProperty(OpenAITTS.prototype, "voiceOptions", {
        get: function () {
            return (0, voiceList_1.getOpenaiVoiceOptions)();
        },
        enumerable: false,
        configurable: true
    });
    OpenAITTS.prototype.fetch = function (payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var url;
            var _a;
            return tslib_1.__generator(this, function (_b) {
                url = "".concat(this.OPENAI_BASE_URL, "/audio/speech");
                return [2 /*return*/, this.serviceUrl
                        ? fetch(this.serviceUrl, {
                            body: JSON.stringify(payload),
                            headers: this.headers,
                            method: "POST",
                        })
                        : fetch(url, {
                            body: JSON.stringify({
                                input: payload.input,
                                model: ((_a = payload.options) === null || _a === void 0 ? void 0 : _a.model) || "tts-1",
                                voice: payload.options.voice,
                            }),
                            headers: new Headers({
                                Authorization: "Bearer ".concat(this.OPENAI_API_KEY),
                                "Content-Type": "application/json",
                            }),
                            method: "POST",
                        })];
            });
        });
    };
    OpenAITTS.prototype.create = function (payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch(payload)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    OpenAITTS.prototype.createAudio = function (payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response, arrayBuffer;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.create(payload)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.arrayBuffer()];
                    case 2:
                        arrayBuffer = _a.sent();
                        return [4 /*yield*/, (0, common_1.arrayBufferConvert)(arrayBuffer)];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    OpenAITTS.voiceList = voiceList_1.default;
    return OpenAITTS;
}());
exports.OpenAITTS = OpenAITTS;
