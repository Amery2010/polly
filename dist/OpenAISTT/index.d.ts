import { RecordMineType } from "../utils/getRecordMineType";
export interface OpenAISTTPayload {
    options: {
        /**
         * @title 语音文件格式
         */
        mineType: RecordMineType;
        /**
         * @title 语音识别的模型名称
         */
        model: string;
        /**
         * @title 语音识别的prmopt 以更好的获得whisper的解析效果
         */
        prompt?: string;
    };
    /**
     * @title 语音识别的文件
     */
    speech: Blob;
}
export interface OpenAISTTAPI {
    OPENAI_API_KEY?: string;
    OPENAI_PROXY_URL?: string;
    headers?: Headers;
    serviceUrl?: string;
}
export declare class OpenaiSTT {
    private OPENAI_BASE_URL;
    private OPENAI_API_KEY;
    private serviceUrl;
    private headers?;
    constructor(api?: OpenAISTTAPI);
    static safeRecordMineType: () => RecordMineType;
    fetch(payload: OpenAISTTPayload): Promise<Response>;
    create(payload: OpenAISTTPayload): Promise<Response>;
    createText(payload: OpenAISTTPayload): Promise<string>;
}
