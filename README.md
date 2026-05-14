# VideoUtil

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A Deno-based utility for video processing, including MP4 to MP3 conversion, MP4 to JPEG extraction, MP3 to text transcription, and text to PNG image generation.

## Features
- Extract MP3 audio from MP4 videos
- Extract JPEG frames from MP4 videos
- Generate text transcripts from MP3 audio files using OpenAI's speech recognition API
- Generate PNG images from text using OpenAI's text-to-image API

## Requirements
- Deno runtime
- OpenAI API key (for text-to-speech and text-to-image features)

## Usage

Import the `VideoUtil` module and use its methods:

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

## Data / API
- [ffmpeg](https://www.ffmpeg.org/) for video and audio processing
- [openai-audiorecog](https://github.com/code4fukui/openai-audiorecog/) for text transcription using OpenAI's speech recognition API
- [txt2img](https://github.com/code4fukui/txt2img/) for image generation using OpenAI's text-to-image API

## License
MIT License — see [LICENSE](LICENSE).