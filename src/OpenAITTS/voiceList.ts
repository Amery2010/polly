const voiceList = [
  "alloy",
  "echo",
  "fable",
  "onyx",
  "nova",
  "shimmer",
] as const;
export default voiceList;

export const getOpenaiVoiceOptions = () => {
  return voiceList.map((voice) => ({ label: voice, value: voice }));
};
