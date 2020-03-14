declare type BrowserResizeMethods = 'browser-pixelated' | 'browser-low' | 'browser-medium' | 'browser-high';
declare type WorkerResizeMethods = 'triangle' | 'catrom' | 'mitchell' | 'lanczos3' | 'hqx';
export declare type ResizeOptions = BrowserResizeOptions | WorkerResizeOptions | VectorResizeOptions;
export interface ResizeOptionsCommon {
    width: number;
    height: number;
    fitMethod: 'stretch' | 'contain';
}
export interface BrowserResizeOptions extends ResizeOptionsCommon {
    method: BrowserResizeMethods;
}
export interface WorkerResizeOptions extends ResizeOptionsCommon {
    method: WorkerResizeMethods;
    premultiply: boolean;
    linearRGB: boolean;
}
export interface VectorResizeOptions extends ResizeOptionsCommon {
    method: 'vector';
}
/**
 * Return whether a set of options are worker resize options.
 *
 * @param opts
 */
export declare function isWorkerOptions(opts: ResizeOptions): opts is WorkerResizeOptions;
/**
 * Return whether a set of options are from the HQ<n>X set
 *
 * @param opts
 */
export declare function isHqx(opts: ResizeOptions): opts is WorkerResizeOptions;
export declare const defaultOptions: ResizeOptions;
export {};
