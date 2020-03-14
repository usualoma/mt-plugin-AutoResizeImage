import App from './index';
export interface ReadyMessage {
    type: 'READY';
    version: string;
}
export declare function exposeAPI(app: App): void;
/**
 * The API class contains the methods that are exposed via Comlink to the
 * outside world.
 */
export declare class API {
    private _app;
    /**
     * Internal constructor. Do not call.
     */
    constructor(_app: App);
    /**
     * reset
     */
    back(): void;
    /**
     * resizeToLimit
     * @param width  Max width
     * @param height Max height
     */
    resizeToLimit(width: number, height: number): Promise<void>;
    /**
     * set quality
     * @param quality value
     */
    setQuality(quality: number): Promise<void>;
    /**
     * Loads a given file into Squoosh.
     * @param blob The `Blob` to load
     * @param name The name of the file. The extension of this name will be used
     * to deterime which decoder to use.
     */
    setFile(blob: Blob, name: string): Promise<unknown>;
    /**
     * Grabs one side from Squoosh as a `File`.
     * @param side The side which to grab. 0 = left, 1 = right.
     */
    getBlob(side: 0 | 1): Promise<unknown>;
}
