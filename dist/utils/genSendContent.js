"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genSendContent = void 0;
const genSendContent = (header, data) => {
    const content = [];
    for (const [key, value] of Object.entries(header)) {
        content.push(`${key}:${value}`);
    }
    content.push("", data);
    return content.join("\r\n");
};
exports.genSendContent = genSendContent;
