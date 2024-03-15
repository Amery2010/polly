"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genSSML = void 0;
const voiceTemplate = (input, { voice }) => `<voice name="${voice}">${input}</voice>`;
const styleTemplate = (input, { style }) => {
    if (!style)
        return input;
    return `<mstts:express-as style="${style}">${input}</mstts:express-as>`;
};
const prosodyTemplate = (input, { pitch, rate }) => {
    if (!pitch && !rate)
        return input;
    return `<prosody pitch="${Math.floor((pitch || 1) * 100)}%" rate="${Math.floor((rate || 1) * 100)}%">${input}</prosody>`;
};
const speackTemplate = (input) => `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="https://www.w3.org/2001/mstts" xml:lang="en-US">${input}</speak>`;
const genSSML = (input, options) => {
    let ssml = prosodyTemplate(input, options);
    ssml = styleTemplate(ssml, options);
    ssml = voiceTemplate(ssml, options);
    ssml = speackTemplate(ssml);
    return ssml;
};
exports.genSSML = genSSML;
