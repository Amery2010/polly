"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenaiSTT = void 0;
var tslib_1 = require("tslib");
var getRecordMineType_1 = require("../utils/getRecordMineType");
var genSTTBody = function (_a) {
    var speech = _a.speech, options = _a.options;
    var mineType = (options === null || options === void 0 ? void 0 : options.mineType) || (0, getRecordMineType_1.getRecordMineType)();
    var filename = "".concat(Date.now(), ".").concat(mineType.extension);
    var file = new File([speech], filename, {
        type: mineType.mineType,
    });
    var body = new FormData();
    body.append("file", file);
    body.append("model", (options === null || options === void 0 ? void 0 : options.model) || "whisper-1");
    return body;
};
var genServiceSTTBody = function (_a) {
    var speech = _a.speech, options = _a.options;
    var mineType = (options === null || options === void 0 ? void 0 : options.mineType) || (0, getRecordMineType_1.getRecordMineType)();
    var filename = "".concat(Date.now(), ".").concat(mineType.extension);
    var body = new FormData();
    body.append("options", JSON.stringify(options));
    body.append("speech", speech, filename);
    return body;
};
var OpenaiSTT = /** @class */ (function () {
    function OpenaiSTT(api) {
        if (api === void 0) { api = {}; }
        this.OPENAI_BASE_URL = api.OPENAI_PROXY_URL || "https://api.openai.com/v1";
        this.OPENAI_API_KEY = api.OPENAI_API_KEY;
        this.serviceUrl = api.serviceUrl;
        this.headers = api.headers;
    }
    OpenaiSTT.prototype.fetch = function (payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var url;
            return tslib_1.__generator(this, function (_a) {
                url = "".concat(this.OPENAI_BASE_URL, "/audio/transcriptions");
                return [2 /*return*/, this.serviceUrl
                        ? fetch(this.serviceUrl, {
                            body: genServiceSTTBody(payload),
                            headers: this.headers,
                            method: "POST",
                        })
                        : fetch(url, {
                            body: genSTTBody(payload),
                            headers: new Headers({
                                Authorization: "Bearer ".concat(this.OPENAI_API_KEY),
                            }),
                            method: "POST",
                        })];
            });
        });
    };
    OpenaiSTT.prototype.create = function (payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch(payload)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    OpenaiSTT.prototype.createText = function (payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response, json;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch(payload)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json.text];
                }
            });
        });
    };
    OpenaiSTT.safeRecordMineType = getRecordMineType_1.getRecordMineType;
    return OpenaiSTT;
}());
exports.OpenaiSTT = OpenaiSTT;
