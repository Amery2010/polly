import styleList from "../constants/styleList";
import voiceName from "../constants/voiceList";
import { arrayBufferConvert } from "../utils/common";

import {
  type MicrosoftSpeechPayload,
  createMicrosoftSpeech,
} from "./createMicrosoftSpeech";
import azureVoiceList from "./azureVoiceList";
import { getAzureVoiceOptions } from "./options";

export type { MicrosoftSpeechPayload } from "./createMicrosoftSpeech";

export interface MicrosoftSpeechAPI {
  locale?: string;
  serviceUrl?: string;
}

export class MicrosoftSpeechTTS {
  private locale?: string;

  constructor({ locale }: MicrosoftSpeechAPI = {}) {
    this.locale = locale;
  }
  get voiceOptions() {
    return getAzureVoiceOptions(this.locale);
  }

  static createRequest = createMicrosoftSpeech;

  static voiceList = azureVoiceList;
  static voiceName = voiceName;
  static styleList = styleList;

  async create(payload: MicrosoftSpeechPayload): Promise<Response> {
    return await createMicrosoftSpeech({ payload });
  }

  async createAudio(payload: MicrosoftSpeechPayload): Promise<AudioBuffer> {
    const response = await this.create(payload);

    const arrayBuffer = await response.arrayBuffer();

    return arrayBufferConvert(arrayBuffer);
  }
}
