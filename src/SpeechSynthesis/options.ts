import { flat } from "radash";
import speechSynthesisVoiceList from "./voiceList";

const getSpeechSynthesis = () => {
  try {
    return window.speechSynthesis || (window as any)?.webkitSpeechSynthesis;
  } catch {}
};

const SpeechSynthesis = getSpeechSynthesis();

const genSpeechSynthesisVoiceList = () => {
  if (!SpeechSynthesis) return speechSynthesisVoiceList;
  const data = SpeechSynthesis.getVoices();
  if (!data) return speechSynthesisVoiceList;
  const list: any = {};
  for (const voice of data) {
    if (!list[voice.lang]) list[voice.lang] = [];
    list[voice.lang].push(voice.name);
  }
  return Object.keys(list).length > 0 ? list : speechSynthesisVoiceList;
};

export const getSpeechSynthesisVoiceOptions = (locale?: string) => {
  const voiceList = genSpeechSynthesisVoiceList();
  const data: string[] =
    locale && voiceList?.[locale]
      ? voiceList?.[locale] || []
      : flat(Object.values(voiceList));

  return data.map((voice) => ({ label: voice, value: voice }));
};
