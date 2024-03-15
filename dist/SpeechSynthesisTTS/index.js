"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeechSynthesisTTS = void 0;
const options_1 = require("./options");
const voiceList_1 = __importDefault(require("./voiceList"));
class SpeechSynthesisTTS {
    constructor(locale) {
        this.locale = locale;
    }
    get voiceOptions() {
        return (0, options_1.getSpeechSynthesisVoiceOptions)(this.locale);
    }
}
exports.SpeechSynthesisTTS = SpeechSynthesisTTS;
SpeechSynthesisTTS.voiceList = voiceList_1.default;
