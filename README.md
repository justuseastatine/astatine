# astatine
get what you want without the fluff 

[💬 a very good media downloader's community discord server](https://discord.gg/pQPt8HBUPu)  
[🐦 a very good media downloader's twitter/x](https://x.com/justusecobalt)  

## what's astatine?
astatine is a fork of [a very good media downloader](https://github.com/imputnet/cobalt) with the original branding, mascots, and other copyrighted assets all removed. it's fast, easy to use, and ***has no ads, trackers, or invasive analytics***. paste the link, get the file, and move on. it's that simple; how it should be.

the purpose of this fork is to be fully AGPL-3.0, but otherwise almost fully identical to upstream. this enables easier modification by others.

## supported services
this list is not final and keeps expanding over time. if support for a service you want is missing, create an issue (or a pull request 👀).

| service                        | video + audio | only audio | only video | metadata | rich file names |
| :--------                      | :-----------: | :--------: | :--------: | :------: | :-------------: |
| bilibili.com & bilibili.tv     | ✅            | ✅         | ✅         | ➖         | ➖              |
| dailymotion                    | ✅            | ✅         | ✅         | ✅         | ✅              |
| instagram posts & reels        | ✅            | ✅         | ✅         | ➖         | ➖              |
| loom                           | ✅            | ❌         | ✅         | ✅         | ➖              |
| ok video                       | ✅            | ❌         | ✅         | ✅         | ✅              |
| pinterest                      | ✅            | ✅         | ✅         | ➖         | ➖              |
| reddit                         | ✅            | ✅         | ✅         | ❌         | ❌              |
| rutube                         | ✅            | ✅         | ✅         | ✅         | ✅              |
| soundcloud                     | ➖            | ✅         | ➖         | ✅         | ✅              |
| streamable                     | ✅            | ✅         | ✅         | ➖         | ➖              |
| tiktok                         | ✅            | ✅         | ✅         | ❌         | ❌              |
| tumblr                         | ✅            | ✅         | ✅         | ➖         | ➖              |
| twitch clips                   | ✅            | ✅         | ✅         | ✅         | ✅              |
| twitter/x                      | ✅            | ✅         | ✅         | ➖         | ➖              |
| vimeo                          | ✅            | ✅         | ✅         | ✅         | ✅              |
| vine archive                   | ✅            | ✅         | ✅         | ➖         | ➖              |
| vk videos & clips              | ✅            | ❌         | ✅         | ✅         | ✅              |
| youtube videos, shorts & music | ✅            | ✅         | ✅         | ✅         | ✅              |

| emoji   | meaning                 |
| :-----: | :---------------------- |
| ✅      | supported               |
| ➖      | impossible/unreasonable |
| ❌      | not supported           |

### additional notes or features (per service)
| service    | notes or features                                                                                                    |
| :--------  | :-----                                                                                                               |
| instagram  | supports reels, photos, and videos. lets you pick what to save from multi-media posts.                               |
| pinterest  | supports photos, gifs, videos and stories.                                                                           |
| reddit     | supports gifs and videos.                                                                                            |
| rutube     | supports yappy & private links.                                                                                      |
| soundcloud | supports private links.                                                                                              |
| tiktok     | supports videos with or without watermark, images from slideshow without watermark, and full (original) audios.      |
| twitter/x  | lets you pick what to save from multi-media posts. may not be 100% reliable due to current management.               |
| vimeo      | audio downloads are only available for dash.                                                                         |
| youtube    | supports videos, music, and shorts. 8K, 4K, HDR, VR, and high FPS videos. rich metadata & dubs. h264/av1/vp9 codecs. |

## astatine api
astatine has an open api that you can use in your projects *for free~*. it's easy and straightforward to use, [check out the docs](/docs/api.md) to learn how to use it. 

## how to run your own instance
if you want to run your own instance for whatever purpose, [follow this guide](/docs/run-an-instance.md).  
it's *highly* recommended to use a docker compose method unless you run for developing/debugging purposes.

## ethics and disclaimer
astatine is a tool for easing content downloads from internet and takes ***zero liability***. you are responsible for what you download, how you use and distribute that content. please be mindful when using content of others and always credit original creators. fair use and credits benefit everyone.

astatine is ***NOT*** a piracy tool and cannot be used as such. it can only download free, publicly accessible content. such content can be easily downloaded through any browser's dev tools.

## astatine license
astatine is licensed under [AGPL-3.0](/LICENSE).

### notes:
- you **must** link the original repo when using any parts of code (such as using separate processing modules in your project) or forking the project.

- if you make a modified version of astatine, the codebase **must** be published under the same license (according to AGPL-3.0).

## 3rd party licenses
- [Fluent Emoji by Microsoft](https://github.com/microsoft/fluentui-emoji) (used in astatine) is under [MIT](https://github.com/microsoft/fluentui-emoji/blob/main/LICENSE) license.  
- [Noto Sans Mono](https://fonts.google.com/noto/specimen/Noto+Sans+Mono/) fonts (used in astatine) are licensed under the [OFL](https://fonts.google.com/noto/specimen/Noto+Sans+Mono/about) license.

## acknowledgements
### ffmpeg
astatine heavily relies on ffmpeg for converting and merging media files. it's an absolutely amazing piece of software offered for anyone for free, yet doesn't receive as much credit as it should.

you can [support ffmpeg here](https://ffmpeg.org/donations.html)!

#### ffmpeg-static
we use [ffmpeg-static](https://github.com/eugeneware/ffmpeg-static) to get binaries for ffmpeg depending on the platform.

you can support the developer via various methods listed on their github page! (linked above)

### youtube.js
astatine relies on [youtube.js](https://github.com/LuanRT/YouTube.js) for interacting with the innertube api, it wouldn't have been possible without it.  

you can support the developer via various methods listed on their github page! (linked above)

### many others
astatine also depends on:

- [content-disposition-header](https://www.npmjs.com/package/content-disposition-header) to simplify the provision of `content-disposition` headers.
- [cors](https://www.npmjs.com/package/cors) to manage cross-origin resource sharing within expressjs.
- [dotenv](https://www.npmjs.com/package/dotenv) to load environment variables from the `.env` file.
- [esbuild](https://www.npmjs.com/package/esbuild) to minify the frontend files.
- [express](https://www.npmjs.com/package/express) as the backbone of astatine servers.
- [express-rate-limit](https://www.npmjs.com/package/express-rate-limit) to rate limit api endpoints.
- [hls-parser](https://www.npmjs.com/package/hls-parser) to parse `m3u8` playlists for certain services.
- [ipaddr.js](https://www.npmjs.com/package/ipaddr.js) to parse ip addresses (for rate limiting).
- [nanoid](https://www.npmjs.com/package/nanoid) to generate unique (temporary) identifiers for each requested stream.
- [node-cache](https://www.npmjs.com/package/node-cache) to cache stream info in server ram for a limited amount of time.
- [psl](https://www.npmjs.com/package/psl) as the domain name parser.
- [set-cookie-parser](https://www.npmjs.com/package/set-cookie-parser) to parse cookies that astatine receives from certain services.
- [undici](https://www.npmjs.com/package/undici) for making http requests.
- [url-pattern](https://www.npmjs.com/package/url-pattern) to match provided links with supported patterns.

...and many other packages that these packages rely on.
