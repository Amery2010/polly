import { type SsmlOptions } from "../utils/genSSML";
export interface EdgeSpeechPayload {
    /**
     * @title 语音合成的文本
     */
    input: string;
    /**
     * @title SSML 语音合成的配置
     */
    options: Pick<SsmlOptions, "voice">;
}
export declare const createEdgeSpeech: ({ payload, }: {
    payload: EdgeSpeechPayload;
}, { proxyUrl, token }?: {
    proxyUrl?: string | undefined;
    token?: string | undefined;
}) => Promise<Response>;
