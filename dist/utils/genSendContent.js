"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genSendContent = void 0;
var genSendContent = function (header, data) {
    var content = [];
    for (var _i = 0, _a = Object.entries(header); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        content.push("".concat(key, ":").concat(value));
    }
    content.push("", data);
    return content.join("\r\n");
};
exports.genSendContent = genSendContent;
