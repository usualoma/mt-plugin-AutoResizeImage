import { QuantizeOptions } from './imagequant/processor-meta';
import { ResizeOptions } from './resize/processor-meta';
interface Enableable {
    enabled: boolean;
}
export interface PreprocessorState {
    quantizer: Enableable & QuantizeOptions;
    resize: Enableable & ResizeOptions;
}
export declare const defaultPreprocessorState: PreprocessorState;
export {};
