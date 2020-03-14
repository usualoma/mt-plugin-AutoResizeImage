export interface EncodeOptions {
}
export interface EncoderState {
    type: typeof type;
    options: EncodeOptions;
}
export declare const type = "browser-png";
export declare const label = "Browser PNG";
export declare const mimeType = "image/png";
export declare const extension = "png";
export declare const defaultOptions: EncodeOptions;
