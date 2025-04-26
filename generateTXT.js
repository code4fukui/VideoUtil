import { fetchAudioRecog } from "https://code4fukui.github.io/openai-audiorecog/fetchAudioRecog.js"

// https://github.com/code4fukui/openai-audiorecog/
// needs .env

export const generateTXT = async (mp3fn, txtfn) => {
  const mp3bin = new Uint8Array(await Deno.readFile(mp3fn));
  const res = await fetchAudioRecog(mp3bin);
  const res2 = res.replace(/ /g, "\n");
  await Deno.writeTextFile(txtfn, res2);
};
