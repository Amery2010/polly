import { isFunction } from "radash";

export interface SpeechRecognitionSTTPayload {
  autoStop: boolean;
  onUpdate?: (text: string) => void;
}

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

export class SpeechRecognitionSTT {
  public isLoading: boolean = false;
  public isFinalStop: boolean = false;
  public text: string = "";
  protected autoStop: boolean = false;
  protected onUpdate(text: string) {}
  constructor({ autoStop, onUpdate }: SpeechRecognitionSTTPayload) {
    this.autoStop = autoStop;
    if (isFunction(onUpdate)) this.onUpdate = onUpdate;
  }
  async create(): Promise<string> {
    return new Promise((resolve, reject) => {
      try {
        const speechRecognition = new SpeechRecognition();

        speechRecognition.interimResults = true;
        speechRecognition.continuous = true;
        speechRecognition.addEventListener("start", () => {
          this.isFinalStop = false;
          this.isLoading = true;
        });
        speechRecognition.addEventListener("end", () => {
          this.isLoading = false;
          this.isFinalStop = true;
          resolve(this.text);
        });
        speechRecognition.addEventListener("result", ({ results }: any) => {
          if (!results) return;
          const result = results[0];
          if (!this.isFinalStop && result?.[0]?.transcript) {
            const value = result[0].transcript;
            this.text = value;
            this.onUpdate(value);
          }
          if (result.isFinal) {
            speechRecognition.abort();
          }
        });
        speechRecognition.start();
      } catch (error) {
        reject(error);
      }
    });
  }
}
