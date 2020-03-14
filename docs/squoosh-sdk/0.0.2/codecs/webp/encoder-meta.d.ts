export declare enum WebPImageHint {
    WEBP_HINT_DEFAULT = 0,
    WEBP_HINT_PICTURE = 1,
    WEBP_HINT_PHOTO = 2,
    WEBP_HINT_GRAPH = 3
}
export interface EncodeOptions {
    quality: number;
    target_size: number;
    target_PSNR: number;
    method: number;
    sns_strength: number;
    filter_strength: number;
    filter_sharpness: number;
    filter_type: number;
    partitions: number;
    segments: number;
    pass: number;
    show_compressed: number;
    preprocessing: number;
    autofilter: number;
    partition_limit: number;
    alpha_compression: number;
    alpha_filtering: number;
    alpha_quality: number;
    lossless: number;
    exact: number;
    image_hint: number;
    emulate_jpeg_size: number;
    thread_level: number;
    low_memory: number;
    near_lossless: number;
    use_delta_palette: number;
    use_sharp_yuv: number;
}
export interface EncoderState {
    type: typeof type;
    options: EncodeOptions;
}
export declare const type = "webp";
export declare const label = "WebP";
export declare const mimeType = "image/webp";
export declare const extension = "webp";
export declare const defaultOptions: EncodeOptions;
