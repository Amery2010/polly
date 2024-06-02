import { isFunction } from "radash";
import { RecordMineType } from "../utils/getRecordMineType";

export interface AudioRecorderPayload {
  autoRecord?: boolean;
  volumeThreshold?: number;
  silenceThreshold?: number;
  onUpadte?: (audioData: Blob) => void;
  onTimeUpdate?: (time: number) => void;
  onFinish?: (audioData: Blob) => void;
  onError?: (err: Error) => void;
}

export class AudioRecorder {
  public blob: Blob | null = null;
  public time: number = 0;
  public isRecording: boolean = false;
  protected audioContext: AudioContext;
  protected mediaRecorder: MediaRecorder | null = null;
  protected volumeThreshold: number = 30;
  protected silenceThreshold: number = 2000;
  protected autoRecord: boolean = false;
  protected onUpadte(audioData: Blob) {}
  protected onTimeUpdate(time: number) {}
  protected onFinish(audioData: Blob) {}
  protected onError(err: Error) {}
  static getRecordMineType(): RecordMineType {
    try {
      return MediaRecorder.isTypeSupported("audio/webm")
        ? {
            extension: "webm",
            mineType: "audio/webm",
          }
        : {
            extension: "mp4",
            mineType: "audio/mp4",
          };
    } catch {
      return {
        extension: "webm",
        mineType: "audio/webm",
      };
    }
  }
  static formatTime(seconds: number): string {
    if (seconds < 0) return `--:--`;
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const minutesStr = minutes.toString().padStart(2, "0");
    const secondsStr = remainingSeconds.toString().padStart(2, "0");

    return `${minutesStr}:${secondsStr}`;
  }
  constructor({
    autoRecord,
    volumeThreshold,
    silenceThreshold,
    onUpadte,
    onTimeUpdate,
    onFinish,
    onError,
  }: AudioRecorderPayload) {
    this.audioContext = new AudioContext();
    if (autoRecord) this.autoRecord = autoRecord;
    // 设置音量阈值
    if (volumeThreshold) this.volumeThreshold = volumeThreshold;
    // 设置静音持续时间阈值（单位：毫秒）
    if (silenceThreshold) this.silenceThreshold = silenceThreshold;
    if (isFunction(onUpadte)) this.onUpadte = onUpadte;
    if (isFunction(onTimeUpdate)) this.onTimeUpdate = onTimeUpdate;
    if (isFunction(onFinish)) this.onFinish = onFinish;
    if (isFunction(onError)) this.onError = onError;
  }
  public start() {
    if (this.mediaRecorder) {
      if (this.mediaRecorder.state === "paused") {
        this.mediaRecorder.resume();
      } else {
        this.mediaRecorder.start(1000);
      }
    } else {
      // 获取麦克风音频流
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          this.recording(stream);
        })
        .catch((error: Error) => {
          this.onError(error);
        });
    }
    if (!this.autoRecord) {
      this.isRecording = true;
      this.startTimer();
    }
  }
  protected recording(stream: MediaStream) {
    let chunks: Blob[] = [];
    const mediaRecorderType = AudioRecorder.getRecordMineType();

    const mediaRecorder = new MediaRecorder(stream, {
      mimeType: mediaRecorderType.mineType,
    });

    this.mediaRecorder = mediaRecorder;

    // 创建音频源节点
    const microphone = this.audioContext.createMediaStreamSource(stream);
    // 创建音频分析器节点
    const analyser = this.audioContext.createAnalyser();
    // 设置分析器的参数
    analyser.fftSize = 256;
    // 将麦克风连接到分析器
    microphone.connect(analyser);

    // 监听录音数据可用事件，将数据发送到服务器
    mediaRecorder.addEventListener("dataavailable", (ev) => {
      if (ev.data.size > 0) {
        chunks.push(ev.data);
      }
    });
    mediaRecorder.addEventListener("pause", () => {
      const blob = new Blob(chunks);
      this.onUpadte(blob);
      this.blob = blob;
      chunks = [];
    });
    mediaRecorder.addEventListener("stop", () => {
      const blob = new Blob(chunks);
      this.onFinish(blob);
      this.mediaRecorder = null;
      this.blob = blob;
      chunks = [];
      stream.getTracks().forEach((track) => track.stop());
    });

    let silenceTimer: any = null;
    let rafID: number;

    // 辅助函数：从频谱数据计算音量
    const getVolumeFromFrequencyData = (
      frequencyData: Uint8Array,
      bufferLength: number
    ) => {
      const sum = frequencyData.reduce((acc, value) => acc + value, 0);
      const average = sum / bufferLength;
      return average;
    };

    // 开始实时分析音频流
    const processAudio = () => {
      // 获取频谱数据
      const bufferLength = analyser.frequencyBinCount;
      const frequencyData = new Uint8Array(bufferLength);
      analyser.getByteFrequencyData(frequencyData);

      // 计算音量
      const volume = getVolumeFromFrequencyData(frequencyData, bufferLength);

      if (volume > this.volumeThreshold) {
        // 声音超过阈值，判断为发言开始
        if (mediaRecorder.state === "paused") {
          mediaRecorder.resume();
        } else {
          mediaRecorder.start(1000);
        }
        this.isRecording = true;
        this.startTimer();

        // 重置静音计时器
        clearTimeout(silenceTimer);
        silenceTimer = null;
      } else {
        // 声音低于阈值，判断为发言结束
        if (!silenceTimer) {
          silenceTimer = setTimeout(() => {
            mediaRecorder.pause();
            cancelAnimationFrame(rafID);
            this.isRecording = false;
            this.stopTimer();
          }, this.silenceThreshold);
        }
      }

      // 循环处理音频流
      rafID = requestAnimationFrame(() => {
        processAudio();
      });
    };

    // 开始处理音频流
    if (this.autoRecord) {
      processAudio();
    }
  }
  public stop() {
    this.mediaRecorder?.stop();
    this.isRecording = false;
    this.stopTimer();
  }
  protected startTimer() {
    setTimeout(() => {
      this.time += 1;
      this.onTimeUpdate(this.time);
      if (this.isRecording) this.startTimer();
    }, 1000);
  }
  protected stopTimer() {
    this.time = 0;
  }
}
