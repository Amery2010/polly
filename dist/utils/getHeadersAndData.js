"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHeadersAndData = void 0;
var getHeadersAndData = function (data) {
    var headers = {};
    for (var _i = 0, _a = data.slice(0, data.indexOf("\r\n\r\n")).split("\r\n"); _i < _a.length; _i++) {
        var line = _a[_i];
        var _b = line.split(":", 2), key = _b[0], value = _b[1];
        headers[key] = value;
    }
    return { data: data.slice(data.indexOf("\r\n\r\n") + 4), headers: headers };
};
exports.getHeadersAndData = getHeadersAndData;
