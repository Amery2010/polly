"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genSSML = void 0;
var voiceTemplate = function (input, _a) {
    var voice = _a.voice;
    return "<voice name=\"".concat(voice, "\">").concat(input, "</voice>");
};
var styleTemplate = function (input, _a) {
    var style = _a.style;
    if (!style)
        return input;
    return "<mstts:express-as style=\"".concat(style, "\">").concat(input, "</mstts:express-as>");
};
var prosodyTemplate = function (input, _a) {
    var pitch = _a.pitch, rate = _a.rate;
    if (!pitch && !rate)
        return input;
    return "<prosody pitch=\"".concat(Math.floor((pitch || 1) * 100), "%\" rate=\"").concat(Math.floor((rate || 1) * 100), "%\">").concat(input, "</prosody>");
};
var speackTemplate = function (input) {
    return "<speak version=\"1.0\" xmlns=\"http://www.w3.org/2001/10/synthesis\" xmlns:mstts=\"https://www.w3.org/2001/mstts\" xml:lang=\"en-US\">".concat(input, "</speak>");
};
var genSSML = function (input, options) {
    var ssml = prosodyTemplate(input, options);
    ssml = styleTemplate(ssml, options);
    ssml = voiceTemplate(ssml, options);
    ssml = speackTemplate(ssml);
    return ssml;
};
exports.genSSML = genSSML;
