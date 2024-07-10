import languages from '$i18n/languages.json';

export type CobaltSettingsAccessibility = {
    reduceAnimations: boolean,
    reduceTransparency: boolean,
};

export const themeOptions = ["auto", "light", "dark"] as const;
export const audioFormatOptions = ["best", "mp3", "ogg", "wav", "opus"] as const;
export const downloadModeOptions = ["auto", "audio", "mute"] as const;
export const filenameStyleOptions = ["classic", "basic", "pretty", "nerdy"] as const;
export const videoQualityOptions = ["max", "2160", "1440", "1080", "720", "480", "360", "240", "144"] as const;
export const youtubeVideoCodecOptions = ["h264", "av1", "vp9"] as const;

type CobaltSettingsAppearance = {
    theme: typeof themeOptions[number],
    language: keyof typeof languages,
    autoLanguage: boolean,
};

type CobaltSettingsGeneral = {
    customProcessingEndpoint: string,
    seenOnboarding: boolean,
    seenSafetyWarning: boolean,
};

type CobaltSettingsSave = {
    audioFormat: typeof audioFormatOptions[number],
    disableMetadata: boolean,
    downloadMode: typeof downloadModeOptions[number],
    downloadPopup: boolean,
    filenameStyle: typeof filenameStyleOptions[number],
    tiktokH265: boolean,
    tiktokFullAudio: boolean,
    twitterGif: boolean,
    videoQuality: typeof videoQualityOptions[number],
    youtubeVideoCodec: typeof youtubeVideoCodecOptions[number],
    youtubeDubBrowserLang: boolean,
};

type CobaltSettingsPrivacy = {
    trafficAnalytics: boolean,
};

export type CobaltSettings = {
    schemaVersion: number,
    accessibility: CobaltSettingsAccessibility,
    appearance: CobaltSettingsAppearance,
    general: CobaltSettingsGeneral,
    save: CobaltSettingsSave,
    privacy: CobaltSettingsPrivacy,
};

export type DownloadModeOption = CobaltSettings['save']['downloadMode'];
