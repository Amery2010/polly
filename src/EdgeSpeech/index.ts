import edgeVoiceList from "./edgeVoiceList";
import voiceName from "../constants/voiceList";
import { arrayBufferConvert } from "../utils/common";

import { type EdgeSpeechPayload, createEdgeSpeech } from "./createEdgeSpeech";
import { getEdgeVoiceOptions } from "./options";

export type { EdgeSpeechPayload } from "./createEdgeSpeech";

export interface EdgeSpeechAPI {
  locale?: string;
}

export class EdgeSpeech {
  private locale?: string;
  constructor({ locale }: EdgeSpeechAPI = {}) {
    this.locale = locale;
  }

  get voiceOptions() {
    return getEdgeVoiceOptions(this.locale);
  }

  static voiceList = edgeVoiceList;
  static voiceName = voiceName;
  static createRequest = createEdgeSpeech;

  async create(payload: EdgeSpeechPayload): Promise<Response> {
    return await createEdgeSpeech({ payload });
  }

  /**
   * Browser only
   * @param payload
   */
  async createAudio(payload: EdgeSpeechPayload): Promise<AudioBuffer> {
    const res = await this.create(payload);

    const arrayBuffer = await res.arrayBuffer();

    return arrayBufferConvert(arrayBuffer);
  }
}
