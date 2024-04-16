import { isFunction } from "radash";

export interface SpeechRecognitionPayload {
  locale?: string;
  autoStop?: boolean;
  onUpdate?: (text: string) => void;
  onFinish?: (text: string) => void;
}

export class SpeechRecognition {
  public speechRecognition;
  public locale: string = "en-US";
  public isRecording: boolean = false;
  public text: string = "";
  protected autoStop: boolean = false;
  protected onUpdate(text: string) {}
  protected onFinish(text: string) {}
  constructor({
    locale,
    autoStop,
    onUpdate,
    onFinish,
  }: SpeechRecognitionPayload = {}) {
    if (locale) this.locale = locale;
    if (autoStop) this.autoStop = autoStop;
    if (isFunction(onUpdate)) this.onUpdate = onUpdate;
    if (isFunction(onFinish)) this.onFinish = onFinish;
    this.speechRecognition = this.create();
  }
  protected create() {
    const BrowserSpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const speechRecognition = new BrowserSpeechRecognition();

    speechRecognition.lang = this.locale;
    speechRecognition.interimResults = true;
    speechRecognition.continuous = true;
    speechRecognition.addEventListener("start", () => {
      this.isRecording = true;
    });
    speechRecognition.addEventListener("end", () => {
      this.isRecording = false;
      this.onFinish(this.text);
    });
    speechRecognition.addEventListener("result", ({ results }) => {
      if (!results) return;
      const result = results[0];
      if (this.isRecording && result[0].transcript) {
        const value = result[0].transcript;
        this.text = value;
        this.onUpdate(value);
      }
      if (result.isFinal && this.autoStop) {
        speechRecognition.abort();
      }
    });

    return speechRecognition;
  }
  public start() {
    this.speechRecognition.start();
  }
  public stop() {
    this.speechRecognition.abort();
  }
}
