export declare class SpeechSynthesisTTS {
    private locale?;
    constructor(locale?: string);
    get voiceOptions(): {
        label: string;
        value: string;
    }[];
    static voiceList: Record<string, string[]>;
}
