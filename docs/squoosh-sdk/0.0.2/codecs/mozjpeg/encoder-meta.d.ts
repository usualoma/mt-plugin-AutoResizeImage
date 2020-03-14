export declare enum MozJpegColorSpace {
    GRAYSCALE = 1,
    RGB = 2,
    YCbCr = 3
}
export interface EncodeOptions {
    quality: number;
    baseline: boolean;
    arithmetic: boolean;
    progressive: boolean;
    optimize_coding: boolean;
    smoothing: number;
    color_space: MozJpegColorSpace;
    quant_table: number;
    trellis_multipass: boolean;
    trellis_opt_zero: boolean;
    trellis_opt_table: boolean;
    trellis_loops: number;
    auto_subsample: boolean;
    chroma_subsample: number;
    separate_chroma_quality: boolean;
    chroma_quality: number;
}
export interface EncoderState {
    type: typeof type;
    options: EncodeOptions;
}
export declare const type = "mozjpeg";
export declare const label = "MozJPEG";
export declare const mimeType = "image/jpeg";
export declare const extension = "jpg";
export declare const defaultOptions: EncodeOptions;
