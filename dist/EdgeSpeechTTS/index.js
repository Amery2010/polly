"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EdgeSpeechTTS = void 0;
var tslib_1 = require("tslib");
var edgeVoiceList_1 = tslib_1.__importDefault(require("./edgeVoiceList"));
var voiceList_1 = tslib_1.__importDefault(require("../constants/voiceList"));
var common_1 = require("../utils/common");
var createEdgeSpeech_1 = require("./createEdgeSpeech");
var options_1 = require("./options");
var EdgeSpeechTTS = /** @class */ (function () {
    function EdgeSpeechTTS(_a) {
        var _b = _a === void 0 ? {} : _a, locale = _b.locale;
        this.locale = locale;
    }
    Object.defineProperty(EdgeSpeechTTS.prototype, "voiceOptions", {
        get: function () {
            return (0, options_1.getEdgeVoiceOptions)(this.locale);
        },
        enumerable: false,
        configurable: true
    });
    EdgeSpeechTTS.prototype.create = function (payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, createEdgeSpeech_1.createEdgeSpeech)({ payload: payload })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Browser only
     * @param payload
     */
    EdgeSpeechTTS.prototype.createAudio = function (payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var res, arrayBuffer;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.create(payload)];
                    case 1:
                        res = _a.sent();
                        return [4 /*yield*/, res.arrayBuffer()];
                    case 2:
                        arrayBuffer = _a.sent();
                        return [2 /*return*/, (0, common_1.arrayBufferConvert)(arrayBuffer)];
                }
            });
        });
    };
    EdgeSpeechTTS.voiceList = edgeVoiceList_1.default;
    EdgeSpeechTTS.voiceName = voiceList_1.default;
    EdgeSpeechTTS.createRequest = createEdgeSpeech_1.createEdgeSpeech;
    return EdgeSpeechTTS;
}());
exports.EdgeSpeechTTS = EdgeSpeechTTS;
