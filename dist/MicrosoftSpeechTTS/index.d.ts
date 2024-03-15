import { type MicrosoftSpeechPayload } from "./createMicrosoftSpeech";
export type { MicrosoftSpeechPayload } from "./createMicrosoftSpeech";
export interface MicrosoftSpeechAPI {
    locale?: string;
    serviceUrl?: string;
}
export declare class MicrosoftSpeechTTS {
    private locale?;
    constructor({ locale }?: MicrosoftSpeechAPI);
    get voiceOptions(): {
        label: string;
        value: string;
    }[];
    static createRequest: ({ payload, }: {
        payload: MicrosoftSpeechPayload;
    }, { proxyUrl }?: {
        proxyUrl?: string | undefined;
    }) => Promise<Response>;
    static voiceList: Record<string, string[]>;
    static voiceName: Record<string, string>;
    static styleList: string[];
    create(payload: MicrosoftSpeechPayload): Promise<Response>;
    createAudio(payload: MicrosoftSpeechPayload): Promise<AudioBuffer>;
}
