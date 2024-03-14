import { isFunction } from "lodash-es";

type Option = {
  autoStop: boolean;
  onUpdate?: (text: string) => void;
};

const getSpeechRecognition = () => {
  try {
    return (
      (window as any)?.SpeechRecognition ||
      (window as any)?.webkitSpeechRecognition
    );
  } catch {}
};

const SpeechRecognition = getSpeechRecognition();

export class SpeechRecognitionSTT {
  protected isLoading = false;
  protected isFinalStop = false;
  protected text = "";
  protected autoStop = false;
  protected onUpdate(text: string) {}
  constructor({ autoStop, onUpdate }: Option) {
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
