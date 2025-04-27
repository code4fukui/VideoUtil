# viedo-util on Deno

```js
import { VideoUtil } from "https://code4fukui.github.io/VideoUtil/VideoUtil.js";

// mp4 to mp3
await VideoUtil.extractMP3("test.mp4", "test.mp3");

// mp4 to jpeg
await VideoUtil.extracJPEG("test.mp4", "test.jpg");

// mp3 to txt (needs .env as OpenAI API key)
await VideoUtil.generateTXT("test.mp3", "test.txt");

// txt to png (needs .env as OpenAI API key)
await VideoUtil.generatePNG("test.txt", "test.png");
```

## reference

- [ffmpeg](https://www.ffmpeg.org/)
- [openai-audiorecog](https://github.com/code4fukui/openai-audiorecog/)
- [txt2img](https://github.com/code4fukui/txt2img/)
