import { flatten } from "lodash-es";
import voiceList from "../constants/voiceList";
import edgeVoiceList from "./edgeVoiceList";

export const getEdgeVoiceOptions = (locale?: string) => {
  const data =
    locale && edgeVoiceList[locale]
      ? edgeVoiceList[locale] || []
      : flatten(Object.values(edgeVoiceList));
  return data.map((voice: string) => ({
    label: voiceList?.[voice] || voice,
    value: voice,
  }));
};
