"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHeadersAndData = void 0;
const getHeadersAndData = (data) => {
    const headers = {};
    for (const line of data.slice(0, data.indexOf("\r\n\r\n")).split("\r\n")) {
        const [key, value] = line.split(":", 2);
        headers[key] = value;
    }
    return { data: data.slice(data.indexOf("\r\n\r\n") + 4), headers };
};
exports.getHeadersAndData = getHeadersAndData;
