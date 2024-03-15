"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSpeechSynthesisVoiceOptions = void 0;
const lodash_es_1 = require("lodash-es");
const voiceList_1 = __importDefault(require("./voiceList"));
const getSpeechSynthesis = () => {
    try {
        return window.speechSynthesis || (window === null || window === void 0 ? void 0 : window.webkitSpeechSynthesis);
    }
    catch (_a) { }
};
const SpeechSynthesis = getSpeechSynthesis();
const genSpeechSynthesisVoiceList = () => {
    if (!SpeechSynthesis)
        return voiceList_1.default;
    const data = SpeechSynthesis.getVoices();
    if (!data)
        return voiceList_1.default;
    const list = {};
    for (const voice of data) {
        if (!list[voice.lang])
            list[voice.lang] = [];
        list[voice.lang].push(voice.name);
    }
    return Object.keys(list).length > 0 ? list : voiceList_1.default;
};
const getSpeechSynthesisVoiceOptions = (locale) => {
    const voiceList = genSpeechSynthesisVoiceList();
    const data = locale && (voiceList === null || voiceList === void 0 ? void 0 : voiceList[locale])
        ? (voiceList === null || voiceList === void 0 ? void 0 : voiceList[locale]) || []
        : (0, lodash_es_1.flatten)(Object.values(voiceList));
    return data.map((voice) => ({ label: voice, value: voice }));
};
exports.getSpeechSynthesisVoiceOptions = getSpeechSynthesisVoiceOptions;
