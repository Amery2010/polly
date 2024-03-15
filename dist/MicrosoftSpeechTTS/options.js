"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAzureVoiceOptions = void 0;
const lodash_es_1 = require("lodash-es");
const voiceList_1 = __importDefault(require("../constants/voiceList"));
const azureVoiceList_1 = __importDefault(require("./azureVoiceList"));
const getAzureVoiceOptions = (locale) => {
    const data = locale && azureVoiceList_1.default[locale]
        ? azureVoiceList_1.default[locale] || []
        : (0, lodash_es_1.flatten)(Object.values(azureVoiceList_1.default));
    return data.map((voice) => ({
        label: (voiceList_1.default === null || voiceList_1.default === void 0 ? void 0 : voiceList_1.default[voice]) || voice,
        value: voice,
    }));
};
exports.getAzureVoiceOptions = getAzureVoiceOptions;
