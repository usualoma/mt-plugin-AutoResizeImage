export interface EncodeOptions {
    quality: number;
}
export interface EncoderState {
    type: typeof type;
    options: EncodeOptions;
}
export declare const type = "browser-jpeg";
export declare const label = "Browser JPEG";
export declare const mimeType = "image/jpeg";
export declare const extension = "jpg";
export declare const defaultOptions: EncodeOptions;
