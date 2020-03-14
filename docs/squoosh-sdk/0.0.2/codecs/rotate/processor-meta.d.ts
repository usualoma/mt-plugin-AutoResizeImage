export interface RotateOptions {
    rotate: 0 | 90 | 180 | 270;
}
export declare const defaultOptions: RotateOptions;
export interface RotateModuleInstance {
    exports: {
        memory: WebAssembly.Memory;
        rotate(width: number, height: number, rotate: 0 | 90 | 180 | 270): void;
    };
}
