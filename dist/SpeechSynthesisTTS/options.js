"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSpeechSynthesisVoiceOptions = void 0;
var tslib_1 = require("tslib");
var lodash_es_1 = require("lodash-es");
var voiceList_1 = tslib_1.__importDefault(require("./voiceList"));
var getSpeechSynthesis = function () {
    try {
        return window.speechSynthesis || (window === null || window === void 0 ? void 0 : window.webkitSpeechSynthesis);
    }
    catch (_a) { }
};
var SpeechSynthesis = getSpeechSynthesis();
var genSpeechSynthesisVoiceList = function () {
    if (!SpeechSynthesis)
        return voiceList_1.default;
    var data = SpeechSynthesis.getVoices();
    if (!data)
        return voiceList_1.default;
    var list = {};
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var voice = data_1[_i];
        if (!list[voice.lang])
            list[voice.lang] = [];
        list[voice.lang].push(voice.name);
    }
    return Object.keys(list).length > 0 ? list : voiceList_1.default;
};
var getSpeechSynthesisVoiceOptions = function (locale) {
    var voiceList = genSpeechSynthesisVoiceList();
    var data = locale && (voiceList === null || voiceList === void 0 ? void 0 : voiceList[locale])
        ? (voiceList === null || voiceList === void 0 ? void 0 : voiceList[locale]) || []
        : (0, lodash_es_1.flatten)(Object.values(voiceList));
    return data.map(function (voice) { return ({ label: voice, value: voice }); });
};
exports.getSpeechSynthesisVoiceOptions = getSpeechSynthesisVoiceOptions;
