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
exports.OpenaiSTT = void 0;
const getRecordMineType_1 = require("../utils/getRecordMineType");
const genSTTBody = ({ speech, options }) => {
    const mineType = (options === null || options === void 0 ? void 0 : options.mineType) || (0, getRecordMineType_1.getRecordMineType)();
    const filename = `${Date.now()}.${mineType.extension}`;
    const file = new File([speech], filename, {
        type: mineType.mineType,
    });
    const body = new FormData();
    body.append("file", file);
    body.append("model", (options === null || options === void 0 ? void 0 : options.model) || "whisper-1");
    return body;
};
const genServiceSTTBody = ({ speech, options }) => {
    const mineType = (options === null || options === void 0 ? void 0 : options.mineType) || (0, getRecordMineType_1.getRecordMineType)();
    const filename = `${Date.now()}.${mineType.extension}`;
    const body = new FormData();
    body.append("options", JSON.stringify(options));
    body.append("speech", speech, filename);
    return body;
};
class OpenaiSTT {
    constructor(api = {}) {
        this.OPENAI_BASE_URL = api.OPENAI_PROXY_URL || "https://api.openai.com/v1";
        this.OPENAI_API_KEY = api.OPENAI_API_KEY;
        this.serviceUrl = api.serviceUrl;
        this.headers = api.headers;
    }
    fetch(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.OPENAI_BASE_URL}/audio/speech`;
            return this.serviceUrl
                ? fetch(this.serviceUrl, {
                    body: genServiceSTTBody(payload),
                    headers: this.headers,
                    method: "POST",
                })
                : fetch(url, {
                    body: genSTTBody(payload),
                    headers: new Headers({
                        Authorization: `Bearer ${this.OPENAI_API_KEY}`,
                    }),
                    method: "POST",
                });
        });
    }
    create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.fetch(payload);
            return response;
        });
    }
    createText(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.fetch(payload);
            const json = yield response.json();
            return json.text;
        });
    }
}
exports.OpenaiSTT = OpenaiSTT;
OpenaiSTT.safeRecordMineType = getRecordMineType_1.getRecordMineType;
