"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicrosoftSpeechTTS = void 0;
var tslib_1 = require("tslib");
var styleList_1 = tslib_1.__importDefault(require("../constants/styleList"));
var voiceList_1 = tslib_1.__importDefault(require("../constants/voiceList"));
var common_1 = require("../utils/common");
var createMicrosoftSpeech_1 = require("./createMicrosoftSpeech");
var azureVoiceList_1 = tslib_1.__importDefault(require("./azureVoiceList"));
var options_1 = require("./options");
var MicrosoftSpeechTTS = /** @class */ (function () {
    function MicrosoftSpeechTTS(_a) {
        var _b = _a === void 0 ? {} : _a, locale = _b.locale;
        this.locale = locale;
    }
    Object.defineProperty(MicrosoftSpeechTTS.prototype, "voiceOptions", {
        get: function () {
            return (0, options_1.getAzureVoiceOptions)(this.locale);
        },
        enumerable: false,
        configurable: true
    });
    MicrosoftSpeechTTS.prototype.create = function (payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, createMicrosoftSpeech_1.createMicrosoftSpeech)({ payload: payload })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MicrosoftSpeechTTS.prototype.createAudio = function (payload) {
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
                        return [2 /*return*/, (0, common_1.arrayBufferConvert)(arrayBuffer)];
                }
            });
        });
    };
    MicrosoftSpeechTTS.createRequest = createMicrosoftSpeech_1.createMicrosoftSpeech;
    MicrosoftSpeechTTS.voiceList = azureVoiceList_1.default;
    MicrosoftSpeechTTS.voiceName = voiceList_1.default;
    MicrosoftSpeechTTS.styleList = styleList_1.default;
    return MicrosoftSpeechTTS;
}());
exports.MicrosoftSpeechTTS = MicrosoftSpeechTTS;
