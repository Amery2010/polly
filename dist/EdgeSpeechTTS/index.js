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
exports.EdgeSpeechTTS = void 0;
const edgeVoiceList_1 = __importDefault(require("./edgeVoiceList"));
const voiceList_1 = __importDefault(require("../constants/voiceList"));
const common_1 = require("../utils/common");
const createEdgeSpeech_1 = require("./createEdgeSpeech");
const options_1 = require("./options");
class EdgeSpeechTTS {
    constructor({ locale } = {}) {
        this.locale = locale;
    }
    get voiceOptions() {
        return (0, options_1.getEdgeVoiceOptions)(this.locale);
    }
    create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, createEdgeSpeech_1.createEdgeSpeech)({ payload });
        });
    }
    /**
     * Browser only
     * @param payload
     */
    createAudio(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.create(payload);
            const arrayBuffer = yield res.arrayBuffer();
            return (0, common_1.arrayBufferConvert)(arrayBuffer);
        });
    }
}
exports.EdgeSpeechTTS = EdgeSpeechTTS;
EdgeSpeechTTS.voiceList = edgeVoiceList_1.default;
EdgeSpeechTTS.voiceName = voiceList_1.default;
EdgeSpeechTTS.createRequest = createEdgeSpeech_1.createEdgeSpeech;
