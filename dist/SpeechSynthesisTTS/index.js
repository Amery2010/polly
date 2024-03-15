"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeechSynthesisTTS = void 0;
var tslib_1 = require("tslib");
var options_1 = require("./options");
var voiceList_1 = tslib_1.__importDefault(require("./voiceList"));
var SpeechSynthesisTTS = /** @class */ (function () {
    function SpeechSynthesisTTS(locale) {
        this.locale = locale;
    }
    Object.defineProperty(SpeechSynthesisTTS.prototype, "voiceOptions", {
        get: function () {
            return (0, options_1.getSpeechSynthesisVoiceOptions)(this.locale);
        },
        enumerable: false,
        configurable: true
    });
    SpeechSynthesisTTS.voiceList = voiceList_1.default;
    return SpeechSynthesisTTS;
}());
exports.SpeechSynthesisTTS = SpeechSynthesisTTS;
