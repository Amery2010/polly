"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeechRecognitionSTT = void 0;
var tslib_1 = require("tslib");
var lodash_es_1 = require("lodash-es");
var getSpeechRecognition = function () {
    try {
        return ((window === null || window === void 0 ? void 0 : window.SpeechRecognition) ||
            (window === null || window === void 0 ? void 0 : window.webkitSpeechRecognition));
    }
    catch (_a) { }
};
var SpeechRecognition = getSpeechRecognition();
var SpeechRecognitionSTT = /** @class */ (function () {
    function SpeechRecognitionSTT(_a) {
        var autoStop = _a.autoStop, onUpdate = _a.onUpdate;
        this.isLoading = false;
        this.isFinalStop = false;
        this.text = "";
        this.autoStop = false;
        this.autoStop = autoStop;
        if ((0, lodash_es_1.isFunction)(onUpdate))
            this.onUpdate = onUpdate;
    }
    SpeechRecognitionSTT.prototype.onUpdate = function (text) { };
    SpeechRecognitionSTT.prototype.create = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        try {
                            var speechRecognition_1 = new SpeechRecognition();
                            speechRecognition_1.interimResults = true;
                            speechRecognition_1.continuous = true;
                            speechRecognition_1.addEventListener("start", function () {
                                _this.isFinalStop = false;
                                _this.isLoading = true;
                            });
                            speechRecognition_1.addEventListener("end", function () {
                                _this.isLoading = false;
                                _this.isFinalStop = true;
                                resolve(_this.text);
                            });
                            speechRecognition_1.addEventListener("result", function (_a) {
                                var _b;
                                var results = _a.results;
                                if (!results)
                                    return;
                                var result = results[0];
                                if (!_this.isFinalStop && ((_b = result === null || result === void 0 ? void 0 : result[0]) === null || _b === void 0 ? void 0 : _b.transcript)) {
                                    var value = result[0].transcript;
                                    _this.text = value;
                                    _this.onUpdate(value);
                                }
                                if (result.isFinal) {
                                    speechRecognition_1.abort();
                                }
                            });
                            speechRecognition_1.start();
                        }
                        catch (error) {
                            reject(error);
                        }
                    })];
            });
        });
    };
    return SpeechRecognitionSTT;
}());
exports.SpeechRecognitionSTT = SpeechRecognitionSTT;
