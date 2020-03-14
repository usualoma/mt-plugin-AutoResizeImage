import { EncoderState } from '../../codecs/encoders';
import { Fileish } from '../../lib/initial-util';
import { PreprocessorState } from '../../codecs/preprocessors';
interface CacheResult {
    preprocessed: ImageData;
    data: ImageData;
    file: Fileish;
}
interface CacheEntry extends CacheResult {
    preprocessorState: PreprocessorState;
    encoderState: EncoderState;
    sourceData: ImageData;
}
export default class ResultCache {
    private readonly _entries;
    add(entry: CacheEntry): void;
    match(sourceData: ImageData, preprocessorState: PreprocessorState, encoderState: EncoderState): CacheResult | undefined;
}
export {};
