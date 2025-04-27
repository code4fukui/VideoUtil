import { fetchImage, SIZE_PORTRAIT } from "https://code4fukui.github.io/txt2img/fetchImage.js";

// needs .env

const defpreprompt = "下記のプレゼンテーションの文字起しからポップなグラレコを生成してください";

export const generatePNG = async (txtfn, pngfn, preprompt = defpreprompt, opt = {}) => {
  const txt = await Deno.readTextFile(txtfn);
  const prompt = preprompt + "\n" + txt;
  opt.size = opt.size ?? SIZE_PORTRAIT;
  const bin = await fetchImage(prompt, opt);
  await Deno.writeFile(pngfn, bin);
};
