export type OpenaiVoice = "alloy" | "echo" | "fable" | "onyx" | "nova" | "shimmer";
export interface OpenAITTSPayload {
    /**
     * @title 语音合成的文本
     */
    input: string;
    options: {
        /**
         * @title 语音合成的模型名称
         */
        model: string;
        /**
         * @title 语音合成的声音名称
         */
        voice: OpenaiVoice;
    };
}
export interface OpenAITTSAPI {
    OPENAI_API_KEY?: string;
    OPENAI_PROXY_URL?: string;
    headers?: Headers;
    serviceUrl?: string;
}
export declare class OpenAITTS {
    private OPENAI_BASE_URL;
    private OPENAI_API_KEY;
    private serviceUrl;
    private headers?;
    constructor(api?: OpenAITTSAPI);
    get voiceOptions(): {
        label: "alloy" | "echo" | "fable" | "onyx" | "nova" | "shimmer";
        value: "alloy" | "echo" | "fable" | "onyx" | "nova" | "shimmer";
    }[];
    static voiceList: readonly ["alloy", "echo", "fable", "onyx", "nova", "shimmer"];
    fetch(payload: OpenAITTSPayload): Promise<Response>;
    create(payload: OpenAITTSPayload): Promise<Response>;
    createAudio(payload: OpenAITTSPayload): Promise<AudioBuffer>;
}
