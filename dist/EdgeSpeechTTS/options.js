"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEdgeVoiceOptions = void 0;
var tslib_1 = require("tslib");
var lodash_es_1 = require("lodash-es");
var voiceList_1 = tslib_1.__importDefault(require("../constants/voiceList"));
var edgeVoiceList_1 = tslib_1.__importDefault(require("./edgeVoiceList"));
var getEdgeVoiceOptions = function (locale) {
    var data = locale && edgeVoiceList_1.default[locale]
        ? edgeVoiceList_1.default[locale] || []
        : (0, lodash_es_1.flatten)(Object.values(edgeVoiceList_1.default));
    return data.map(function (voice) { return ({
        label: (voiceList_1.default === null || voiceList_1.default === void 0 ? void 0 : voiceList_1.default[voice]) || voice,
        value: voice,
    }); });
};
exports.getEdgeVoiceOptions = getEdgeVoiceOptions;
