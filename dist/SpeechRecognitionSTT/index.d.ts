type Option = {
    autoStop: boolean;
    onUpdate?: (text: string) => void;
};
export declare class SpeechRecognitionSTT {
    protected isLoading: boolean;
    protected isFinalStop: boolean;
    protected text: string;
    protected autoStop: boolean;
    protected onUpdate(text: string): void;
    constructor({ autoStop, onUpdate }: Option);
    create(): Promise<string>;
}
export {};
