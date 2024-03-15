export interface RecordMineType {
    extension: "webm" | "mp4";
    mineType: "audio/webm" | "audio/mp4";
}
export declare const getRecordMineType: () => RecordMineType;
