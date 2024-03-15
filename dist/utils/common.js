"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayBufferConvert = exports.guid = void 0;
var tslib_1 = require("tslib");
function guid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0;
        var v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
exports.guid = guid;
var arrayBufferConvert = function (arrayBuffer) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var audioContext;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                audioContext = new AudioContext();
                return [4 /*yield*/, audioContext.decodeAudioData(arrayBuffer)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.arrayBufferConvert = arrayBufferConvert;
