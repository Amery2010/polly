export type StyleName = "affectionate" | "angry" | "calm" | "cheerful" | "disgruntled" | "embarrassed" | "fearful" | "general" | "gentle" | "sad" | "serious";
export interface SsmlOptions {
    pitch?: number;
    rate?: number;
    style?: StyleName;
    voice: string;
}
export declare const genSSML: (input: string, options: SsmlOptions) => string;
