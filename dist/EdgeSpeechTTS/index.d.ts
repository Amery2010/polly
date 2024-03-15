import { type EdgeSpeechPayload } from "./createEdgeSpeech";
export type { EdgeSpeechPayload } from "./createEdgeSpeech";
export interface EdgeSpeechAPI {
    locale?: string;
}
export declare class EdgeSpeechTTS {
    private locale?;
    constructor({ locale }?: EdgeSpeechAPI);
    get voiceOptions(): {
        label: string;
        value: string;
    }[];
    static voiceList: Record<string, string[]>;
    static voiceName: Record<string, string>;
    static createRequest: ({ payload, }: {
        payload: EdgeSpeechPayload;
    }, { proxyUrl, token }?: {
        proxyUrl?: string | undefined;
        token?: string | undefined;
    }) => Promise<Response>;
    create(payload: EdgeSpeechPayload): Promise<Response>;
    /**
     * Browser only
     * @param payload
     */
    createAudio(payload: EdgeSpeechPayload): Promise<AudioBuffer>;
}
