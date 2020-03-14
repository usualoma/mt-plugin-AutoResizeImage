export interface EncodeOptions {
    level: number;
}
export interface EncoderState {
    type: typeof type;
    options: EncodeOptions;
}
export declare const type = "png";
export declare const label = "OptiPNG";
export declare const mimeType = "image/png";
export declare const extension = "png";
export declare const defaultOptions: EncodeOptions;
