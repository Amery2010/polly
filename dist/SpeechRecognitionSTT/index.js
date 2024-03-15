"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeechRecognitionSTT = void 0;
const lodash_es_1 = require("lodash-es");
const getSpeechRecognition = () => {
    try {
        return ((window === null || window === void 0 ? void 0 : window.SpeechRecognition) ||
            (window === null || window === void 0 ? void 0 : window.webkitSpeechRecognition));
    }
    catch (_a) { }
};
const SpeechRecognition = getSpeechRecognition();
class SpeechRecognitionSTT {
    onUpdate(text) { }
    constructor({ autoStop, onUpdate }) {
        this.isLoading = false;
        this.isFinalStop = false;
        this.text = "";
        this.autoStop = false;
        this.autoStop = autoStop;
        if ((0, lodash_es_1.isFunction)(onUpdate))
            this.onUpdate = onUpdate;
    }
    create() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                try {
                    const speechRecognition = new SpeechRecognition();
                    speechRecognition.interimResults = true;
                    speechRecognition.continuous = true;
                    speechRecognition.addEventListener("start", () => {
                        this.isFinalStop = false;
                        this.isLoading = true;
                    });
                    speechRecognition.addEventListener("end", () => {
                        this.isLoading = false;
                        this.isFinalStop = true;
                        resolve(this.text);
                    });
                    speechRecognition.addEventListener("result", ({ results }) => {
                        var _a;
                        if (!results)
                            return;
                        const result = results[0];
                        if (!this.isFinalStop && ((_a = result === null || result === void 0 ? void 0 : result[0]) === null || _a === void 0 ? void 0 : _a.transcript)) {
                            const value = result[0].transcript;
                            this.text = value;
                            this.onUpdate(value);
                        }
                        if (result.isFinal) {
                            speechRecognition.abort();
                        }
                    });
                    speechRecognition.start();
                }
                catch (error) {
                    reject(error);
                }
            });
        });
    }
}
exports.SpeechRecognitionSTT = SpeechRecognitionSTT;
