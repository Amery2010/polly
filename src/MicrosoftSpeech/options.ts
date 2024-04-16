import { flat } from "radash";
import voiceList from "../constants/voiceList";
import azureVoiceList from "./azureVoiceList";

export const getAzureVoiceOptions = (locale?: string) => {
  const data =
    locale && azureVoiceList[locale]
      ? azureVoiceList[locale] || []
      : flat(Object.values(azureVoiceList));
  return data.map((voice: string) => ({
    label: voiceList?.[voice] || voice,
    value: voice,
  }));
};
