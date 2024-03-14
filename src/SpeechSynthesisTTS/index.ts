import { getSpeechSynthesisVoiceOptions } from "./options";
import speechSynthesisVoiceList from "./voiceList";

export class SpeechSynthesisTTS {
  private locale?: string;
  constructor(locale?: string) {
    this.locale = locale;
  }

  get voiceOptions() {
    return getSpeechSynthesisVoiceOptions(this.locale);
  }

  static voiceList = speechSynthesisVoiceList;
}
