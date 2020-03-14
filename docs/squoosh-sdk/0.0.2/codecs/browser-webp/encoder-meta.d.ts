export interface EncodeOptions {
    quality: number;
}
export interface EncoderState {
    type: typeof type;
    options: EncodeOptions;
}
export declare const type = "browser-webp";
export declare const label = "Browser WebP";
export declare const mimeType = "image/webp";
export declare const extension = "webp";
export declare const defaultOptions: EncodeOptions;
export declare const featureTest: () => Promise<boolean>;
