import { QuantizeOptions } from './imagequant/processor-meta';
import { EncodeOptions as MozJPEGEncoderOptions } from './mozjpeg/encoder-meta';
import { EncodeOptions as OptiPNGEncoderOptions } from './optipng/encoder-meta';
import { EncodeOptions as WebPEncoderOptions } from './webp/encoder-meta';
import { EncodeOptions as BrowserJPEGOptions } from './browser-jpeg/encoder-meta';
import { EncodeOptions as BrowserWebpEncodeOptions } from './browser-webp/encoder-meta';
import { BrowserResizeOptions, VectorResizeOptions } from './resize/processor-meta';
export default class Processor {
    /** Worker instance associated with this processor. */
    private _worker?;
    /** Comlinked worker API. */
    private _workerApi?;
    /** Rejector for a pending promise. */
    private _abortRejector?;
    /** Is work currently happening? */
    private _busy;
    /** Incementing ID so we can tell if a job has been superseded. */
    private _latestJobId;
    /** setTimeout ID for killing the worker when idle. */
    private _workerTimeoutId;
    /**
     * Decorator that manages the (re)starting of the worker and aborting existing jobs. Not all
     * processing jobs require a worker (e.g. the main thread canvas encodes), use the needsWorker
     * option to control this.
     */
    private static _processingJob;
    private _jobCleanup;
    /** Abort the current job, if any */
    abortCurrent(): void;
    terminateWorker(): void;
    imageQuant(data: ImageData, opts: QuantizeOptions): Promise<ImageData>;
    rotate(data: ImageData, opts: import('./rotate/processor-meta').RotateOptions): Promise<ImageData>;
    workerResize(data: ImageData, opts: import('./resize/processor-meta').WorkerResizeOptions): Promise<ImageData>;
    mozjpegEncode(data: ImageData, opts: MozJPEGEncoderOptions): Promise<ArrayBuffer>;
    optiPngEncode(data: ImageData, opts: OptiPNGEncoderOptions): Promise<ArrayBuffer>;
    webpEncode(data: ImageData, opts: WebPEncoderOptions): Promise<ArrayBuffer>;
    webpDecode(blob: Blob): Promise<ImageData>;
    browserBmpEncode(data: ImageData): Promise<Blob>;
    browserPngEncode(data: ImageData): Promise<Blob>;
    browserJpegEncode(data: ImageData, opts: BrowserJPEGOptions): Promise<Blob>;
    browserWebpEncode(data: ImageData, opts: BrowserWebpEncodeOptions): Promise<Blob>;
    browserGifEncode(data: ImageData): Promise<Blob>;
    browserTiffEncode(data: ImageData): Promise<Blob>;
    browserJp2Encode(data: ImageData): Promise<Blob>;
    browserPdfEncode(data: ImageData): Promise<Blob>;
    resize(data: ImageData, opts: BrowserResizeOptions): ImageData;
    vectorResize(data: HTMLImageElement, opts: VectorResizeOptions): ImageData;
}
