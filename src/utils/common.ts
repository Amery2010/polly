export function guid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export const arrayBufferConvert = async (
  arrayBuffer: ArrayBuffer
): Promise<AudioBuffer> => {
  const audioContext = new AudioContext();
  return await audioContext.decodeAudioData(arrayBuffer);
};
