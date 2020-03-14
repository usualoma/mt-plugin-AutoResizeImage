export interface EncodeOptions {
}
export interface EncoderState {
    type: typeof type;
    options: EncodeOptions;
}
export declare const type = "browser-pdf";
export declare const label = "Browser PDF";
export declare const mimeType = "application/pdf";
export declare const extension = "pdf";
export declare const defaultOptions: EncodeOptions;
export declare const featureTest: () => Promise<boolean>;
