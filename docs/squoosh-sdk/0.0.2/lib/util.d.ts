/** Compare two objects, returning a boolean indicating if
 *  they have the same properties and strictly equal values.
 */
export declare function shallowEqual(one: any, two: any): boolean;
/** Replace the contents of a canvas with the given data */
export declare function drawDataToCanvas(canvas: HTMLCanvasElement, data: ImageData): void;
/**
 * Encode some image data in a given format using the browser's encoders
 *
 * @param {ImageData} data
 * @param {string} type A mime type, eg image/jpeg.
 * @param {number} [quality] Between 0-1.
 */
export declare function canvasEncode(data: ImageData, type: string, quality?: number): Promise<Blob>;
/**
 * Attempts to load the given URL as an image.
 */
export declare function canDecodeImage(url: string): Promise<boolean>;
export declare function blobToArrayBuffer(blob: Blob): Promise<ArrayBuffer>;
export declare function blobToText(blob: Blob): Promise<string>;
export declare function sniffMimeType(blob: Blob): Promise<string>;
export declare function blobToImg(blob: Blob): Promise<HTMLImageElement>;
interface DrawableToImageDataOptions {
    width?: number;
    height?: number;
    sx?: number;
    sy?: number;
    sw?: number;
    sh?: number;
}
export declare function drawableToImageData(drawable: ImageBitmap | HTMLImageElement, opts?: DrawableToImageDataOptions): ImageData;
export declare function nativeDecode(blob: Blob): Promise<ImageData>;
export declare type NativeResizeMethod = 'pixelated' | 'low' | 'medium' | 'high';
export declare function nativeResize(data: ImageData, sx: number, sy: number, sw: number, sh: number, dw: number, dh: number, method: NativeResizeMethod): ImageData;
/**
 * @param field An HTMLInputElement, but the casting is done here to tidy up onChange.
 * @param defaultVal Value to return if 'field' doesn't exist.
 */
export declare function inputFieldValueAsNumber(field: any, defaultVal?: number): number;
/**
 * @param field An HTMLInputElement, but the casting is done here to tidy up onChange.
 * @param defaultVal Value to return if 'field' doesn't exist.
 */
export declare function inputFieldCheckedAsNumber(field: any, defaultVal?: number): number;
/**
 * @param field An HTMLInputElement, but the casting is done here to tidy up onChange.
 * @param defaultVal Value to return if 'field' doesn't exist.
 */
export declare function inputFieldChecked(field: any, defaultVal?: boolean): boolean;
/**
 * @param field An HTMLInputElement, but the casting is done here to tidy up onChange.
 * @param defaultVal Value to return if 'field' doesn't exist.
 */
export declare function inputFieldValue(field: any, defaultVal?: string): string;
/**
 * Creates a promise that resolves when the user types the konami code.
 */
export declare function konami(): Promise<void>;
interface TransitionOptions {
    from?: number;
    to?: number;
    duration?: number;
    easing?: string;
}
export declare function transitionHeight(el: HTMLElement, opts: TransitionOptions): Promise<void>;
/**
 * Simple event listener that prevents the default.
 */
export declare function preventDefault(event: Event): void;
export {};
