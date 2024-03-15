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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicrosoftSpeechTTS = void 0;
const styleList_1 = __importDefault(require("../constants/styleList"));
const voiceList_1 = __importDefault(require("../constants/voiceList"));
const common_1 = require("../utils/common");
const createMicrosoftSpeech_1 = require("./createMicrosoftSpeech");
const azureVoiceList_1 = __importDefault(require("./azureVoiceList"));
const options_1 = require("./options");
class MicrosoftSpeechTTS {
    constructor({ locale } = {}) {
        this.locale = locale;
    }
    get voiceOptions() {
        return (0, options_1.getAzureVoiceOptions)(this.locale);
    }
    create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, createMicrosoftSpeech_1.createMicrosoftSpeech)({ payload });
        });
    }
    createAudio(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.create(payload);
            const arrayBuffer = yield response.arrayBuffer();
            return (0, common_1.arrayBufferConvert)(arrayBuffer);
        });
    }
}
exports.MicrosoftSpeechTTS = MicrosoftSpeechTTS;
MicrosoftSpeechTTS.createRequest = createMicrosoftSpeech_1.createMicrosoftSpeech;
MicrosoftSpeechTTS.voiceList = azureVoiceList_1.default;
MicrosoftSpeechTTS.voiceName = voiceList_1.default;
MicrosoftSpeechTTS.styleList = styleList_1.default;
