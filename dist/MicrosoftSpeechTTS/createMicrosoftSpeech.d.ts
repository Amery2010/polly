import { type SsmlOptions } from "../utils/genSSML";
export interface MicrosoftSpeechPayload {
    /**
     * @title 语音合成的文本
     */
    input: string;
    /**
     * @title SSML 语音合成的配置
     */
    options: SsmlOptions;
}
export declare const createMicrosoftSpeech: ({ payload, }: {
    payload: MicrosoftSpeechPayload;
}, { proxyUrl }?: {
    proxyUrl?: string | undefined;
}) => Promise<Response>;
