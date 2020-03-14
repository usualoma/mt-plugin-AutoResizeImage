export interface EncodeOptions {
}
export interface EncoderState {
    type: typeof type;
    options: EncodeOptions;
}
export declare const type = "browser-bmp";
export declare const label = "Browser BMP";
export declare const mimeType = "image/bmp";
export declare const extension = "bmp";
export declare const defaultOptions: EncodeOptions;
export declare const featureTest: () => Promise<boolean>;
