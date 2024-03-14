import voiceList, { getOpenaiVoiceOptions } from "./voiceList";
import { arrayBufferConvert } from "../utils/common";

export type OpenaiVoice =
  | "alloy"
  | "echo"
  | "fable"
  | "onyx"
  | "nova"
  | "shimmer";

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

export class OpenAITTS {
  private OPENAI_BASE_URL: string;
  private OPENAI_API_KEY: string | undefined;
  private serviceUrl: string | undefined;
  private headers?: Headers;

  constructor(api: OpenAITTSAPI = {}) {
    this.OPENAI_BASE_URL = api.OPENAI_PROXY_URL || "https://api.openai.com/v1";
    this.OPENAI_API_KEY = api.OPENAI_API_KEY;
    this.serviceUrl = api.serviceUrl;
    this.headers = api.headers;
  }

  get voiceOptions() {
    return getOpenaiVoiceOptions();
  }

  static voiceList = voiceList;

  async fetch(payload: OpenAITTSPayload) {
    const url = `${this.OPENAI_BASE_URL}/audio/speech`;
    return this.serviceUrl
      ? fetch(this.serviceUrl, {
          body: JSON.stringify(payload),
          headers: this.headers,
          method: "POST",
        })
      : fetch(url, {
          body: JSON.stringify({
            input: payload.input,
            model: payload.options?.model || "tts-1",
            voice: payload.options.voice,
          }),
          headers: new Headers({
            Authorization: `Bearer ${this.OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          }),
          method: "POST",
        });
  }

  async create(payload: OpenAITTSPayload): Promise<Response> {
    const response = await this.fetch(payload);

    return response;
  }

  async createAudio(payload: OpenAITTSPayload): Promise<AudioBuffer> {
    const response = await this.create(payload);

    const arrayBuffer = await response.arrayBuffer();
    return await arrayBufferConvert(arrayBuffer);
  }
}
