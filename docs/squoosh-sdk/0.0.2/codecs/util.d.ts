declare type ModuleFactory<M extends EmscriptenWasm.Module> = (opts: EmscriptenWasm.ModuleOpts) => M;
export declare function initEmscriptenModule<T extends EmscriptenWasm.Module>(moduleFactory: ModuleFactory<T>, wasmUrl: string): Promise<T>;
interface ClampOpts {
    min?: number;
    max?: number;
}
export declare function clamp(x: number, opts: ClampOpts): number;
export {};
