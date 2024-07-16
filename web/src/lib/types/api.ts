enum AstatineResponseType {
    Error = 'error',
    RateLimit = 'rate-limit',
    Picker = 'picker',
    Redirect = 'redirect',
    Stream = 'stream',
}

type AstatineErrorResponse = {
    status: AstatineResponseType.Error | AstatineResponseType.RateLimit,
    text: string,
};

type AstatinePartialURLResponse = {
    url: string,
}

type AstatinePartialImagesPickerResponse = {
    pickerType: 'images',
    picker: AstatinePartialURLResponse[],
}

type AstatinePartialVariousPickerResponse = {
    pickerType: 'various',
    picker: {
        type: 'photo' | 'video',
        url: string,
        thumb: string,
    }[];
}

type AstatinePickerResponse = {
    status: AstatineResponseType.Picker
    audio: string | false,
} & (AstatinePartialImagesPickerResponse | AstatinePartialVariousPickerResponse);

type AstatineRedirectResponse = {
    status: AstatineResponseType.Redirect,
} & AstatinePartialURLResponse;

type AstatineStreamResponse = {
    status: AstatineResponseType.Stream,
} & AstatinePartialURLResponse;

export type AstatineAPIResponse = AstatineErrorResponse
                            | AstatinePickerResponse
                            | AstatineRedirectResponse
                            | AstatineStreamResponse;
