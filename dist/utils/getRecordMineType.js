"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRecordMineType = void 0;
const getRecordMineType = () => {
    try {
        return MediaRecorder.isTypeSupported("audio/webm")
            ? {
                extension: "webm",
                mineType: "audio/webm",
            }
            : {
                extension: "mp4",
                mineType: "audio/mp4",
            };
    }
    catch (_a) {
        return {
            extension: "webm",
            mineType: "audio/webm",
        };
    }
};
exports.getRecordMineType = getRecordMineType;
