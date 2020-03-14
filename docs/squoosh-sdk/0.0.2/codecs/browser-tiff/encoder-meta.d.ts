export interface EncodeOptions {
}
export interface EncoderState {
    type: typeof type;
    options: EncodeOptions;
}
export declare const type = "browser-tiff";
export declare const label = "Browser TIFF";
export declare const mimeType = "image/tiff";
export declare const extension = "tiff";
export declare const defaultOptions: EncodeOptions;
export declare const featureTest: () => Promise<boolean>;
