export interface EncodeOptions {
}
export interface EncoderState {
    type: typeof type;
    options: EncodeOptions;
}
export declare const type = "browser-gif";
export declare const label = "Browser GIF";
export declare const mimeType = "image/gif";
export declare const extension = "gif";
export declare const defaultOptions: EncodeOptions;
export declare const featureTest: () => Promise<boolean>;
