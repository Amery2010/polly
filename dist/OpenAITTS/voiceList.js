"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOpenaiVoiceOptions = void 0;
var voiceList = [
    "alloy",
    "echo",
    "fable",
    "onyx",
    "nova",
    "shimmer",
];
exports.default = voiceList;
var getOpenaiVoiceOptions = function () {
    return voiceList.map(function (voice) { return ({ label: voice, value: voice }); });
};
exports.getOpenaiVoiceOptions = getOpenaiVoiceOptions;
