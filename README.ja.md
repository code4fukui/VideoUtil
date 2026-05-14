# VideoUtil

Denoベースの動画処理ユーティリティ。MP4からMP3への変換、MP4からJPEGの抽出、MP3からテキストへの文字起こし、テキストからPNG画像の生成が可能です。

## 機能
- MP4動画からMP3音声を抽出
- MP4動画からJPEGフレームを抽出
- OpenAIの音声認識APIを使用して、MP3音声ファイルからテキストの文字起こしを生成
- OpenAIのText-to-Image APIを使用して、テキストからPNG画像を生成

## 必要条件
- Denoランタイム
- OpenAI APIキー（音声認識および画像生成機能用）

## 使い方

`VideoUtil`モジュールをインポートしてメソッドを使用します：

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

## データ / API
- 動画および音声処理用の [ffmpeg](https://www.ffmpeg.org/)
- OpenAIの音声認識APIを使用した文字起こし用の [openai-audiorecog](https://github.com/code4fukui/openai-audiorecog/)
- OpenAIのText-to-Image APIを使用した画像生成用の [txt2img](https://github.com/code4fukui/txt2img/)

## ライセンス
MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
