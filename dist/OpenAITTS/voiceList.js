"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOpenaiVoiceOptions = void 0;
const voiceList = [
    "alloy",
    "echo",
    "fable",
    "onyx",
    "nova",
    "shimmer",
];
exports.default = voiceList;
const getOpenaiVoiceOptions = () => {
    return voiceList.map((voice) => ({ label: voice, value: voice }));
};
exports.getOpenaiVoiceOptions = getOpenaiVoiceOptions;
