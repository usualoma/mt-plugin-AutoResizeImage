export interface EncodeOptions {
}
export interface EncoderState {
    type: typeof type;
    options: EncodeOptions;
}
export declare const type = "browser-jp2";
export declare const label = "Browser JPEG 2000";
export declare const mimeType = "image/jp2";
export declare const extension = "jp2";
export declare const defaultOptions: EncodeOptions;
export declare const featureTest: () => Promise<boolean>;
